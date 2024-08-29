import Button from "@/components/button";
import Input from "@/components/input";

export default function SMSPage() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <p className="text-xl">Verify your phone number.</p>
      </div>
      <form className="flex flex-col gap-3">
        <Input name="phone" type="number" placeholder="Phone number" required />
        <Input
          name="token"
          type="number"
          placeholder="Verification code"
          required
        />
        <Button text="Verify" />
      </form>
    </div>
  );
}
