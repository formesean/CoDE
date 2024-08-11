import { PrismaClient } from "@prisma/client";
import { Button } from "../../components/ui/button";
import Navbar from "../_components/Navbar";

const prisma = new PrismaClient();

export default async function Events() {
  const events = await prisma.event.findMany();

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-8">
      <Navbar page="events" showContent={false} />

      <Button>Test</Button>
    </main>
  );
}
