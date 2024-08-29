import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function SMSPage() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <p className="text-xl">Verify your phone number.</p>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="phone"
          type="number"
          placeholder="Phone number"
          required
          errors={[]}
        />
        <FormInput
          name="code"
          type="number"
          placeholder="Verification code"
          required
          errors={[]}
        />
        <FormBtn text="Verify" />
      </form>
    </div>
  );
}
