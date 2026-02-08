import { CheckIn } from "@/components/check-in";
import { Container } from "@/components/container";

export default function HomeLayout() {
  return (
    <div className="bg-black w-full min-h-screen">
      <Container className="min-h-screen border border-neutral-200">
        <CheckIn />
      </Container>
    </div>
  );
}
