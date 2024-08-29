"use server";

export async function smsVerification(prevState: any, formData: FormData) {
  const data = {
    phone: formData.get("phone"),
    token: formData.get("token"),
  };

  console.log(data);
}
