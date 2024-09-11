import db from "@/libs/db";
import getSession from "@/libs/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();

  if (session.id) {
    const user = db.user.findUnique({
      where: {
        id: session.id,
      },
      select: {
        username: true,
      },
    });

    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function ProfilePage() {
  const user = await getUser();

  const logout = async () => {
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };

  return (
    <div>
      <h1>welcome! {user?.username}</h1>
      <form action={logout}>
        <button>로그아웃</button>
      </form>
    </div>
  );
}
