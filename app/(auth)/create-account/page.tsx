"use client";

import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import Button from "@/components/button";
import { PASSWORD_MIN_LENGTH } from "@/libs/constants";

import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccountPage() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <p className="text-xl">Fill in the form below to Join!</p>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          errors={state?.fieldErrors.confirmPassword}
        />
        <Button text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
