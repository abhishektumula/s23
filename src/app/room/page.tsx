import { Container } from "@/components/container";
import { NavBar } from "@/components/bars";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Footer } from "@/components/bars/footer";
import { ChatBubbles } from "@/components/chat-interface";

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
        <Footer adminUser={adminUser} />
        <ChatBubbles adminUser={adminUser} />
      </Container>
    </div>
  );
}
