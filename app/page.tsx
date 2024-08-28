import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근마켓</h1>
        <p className="text-xl">어서오세요. 당근마켓입니다.</p>
      </div>
      <div className="flex w-full flex-col items-center gap-3">
        <Link
          href="/create-account"
          className="w-full rounded-lg bg-orange-500 py-2.5 text-center text-lg font-medium text-white transition-colors hover:bg-orange-400"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있으신가요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
