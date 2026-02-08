import { Container } from "@/components/container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const getUserDetails = async () => {
  const session = await getServerSession();
  return session;
};

export default async function RoomLayout() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <Container>
      this is room page. With out proper authentication you cannot enter here by
      any means
    </Container>
  );
}
