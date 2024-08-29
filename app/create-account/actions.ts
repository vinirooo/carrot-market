"use server";

import { z } from "zod";

const checkUsername = (username: string) => !username.includes("admin");
const checkConfirmPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/,
);

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "username은 3자보다 길어야 합니다.")
      .max(20, "username은 20자보다 짧아야 합니다.")
      .trim()
      .refine(checkUsername, "username은 admin을 포함할 수 없습니다."),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(6, "비밀번호는 6자 이상이어야 합니다.")
      .max(20, "비밀번호는 20자 이하여야 합니다.")
      .regex(
        passwordRegex,
        "비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.",
      ),
    confirmPassword: z.string(),
  })
  .refine(checkConfirmPassword, {
    message: "password와 confirmPassword가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
