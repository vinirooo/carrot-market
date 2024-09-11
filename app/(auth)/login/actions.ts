"use server";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/libs/constants";
import db from "@/libs/db";
import getSession from "@/libs/session";

import { z } from "zod";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const checkExistEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return !!user;
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(checkExistEmail, "존재하지 않는 이메일입니다."),
  password: z.string(),
  // .min(PASSWORD_MIN_LENGTH)
  // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export async function login(_: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const correct = await bcrypt.compare(
      result.data.password,
      user!.password ?? "",
    );
    if (correct) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();

      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          email: [],
          password: ["Wrong password!"],
        },
      };
    }
  }
}
