import { Container } from "@/components/container";
import { NavBar } from "@/components/bars";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { CommonBar } from "@/components/bars/common-bar";

export const getUserDetails = async () => {
  const session = await getServerSession();
  return session;
};

export default async function RoomLayout() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  const adminUser = session.user?.name;
  return (
    <div className="flex flex-col w-full">
      <Container className="border border-neutral-500">
        <NavBar />
        <CommonBar adminUser={adminUser} />
      </Container>
    </div>
  );
}
