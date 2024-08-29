"use server";

export async function handleSubmit(state: any, formData: FormData) {
  console.log("handle submit");
  console.log(formData.get("email"), formData.get("password"));
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    errors: ["wrong password", "password is too short"],
  };
}
