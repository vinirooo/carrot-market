"use server";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/libs/constants";
import db from "@/libs/db";
import { z } from "zod";
import bcrypt from "bcrypt";

const checkUsername = (username: string) => !username.includes("admin");

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });

  return !user;
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return !user;
};

const checkConfirmPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const formSchema = z
  .object({
    username: z
      .string()
      .trim()
      .refine(checkUsername, "username은 admin을 포함할 수 없습니다.")
      .refine(checkUniqueUsername, "이미 등록된 username이 있습니다."),
    email: z
      .string()
      .email()
      .toLowerCase()
      .refine(checkUniqueEmail, "이미 등록된 이메일이 존재합니다."),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, "비밀번호는 6자 이상이어야 합니다.")
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirmPassword: z.string(),
  })
  .refine(checkConfirmPassword, {
    message: "password와 confirmPassword가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export async function createAccount(_: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);

    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });

    console.log(user);
  }
}
