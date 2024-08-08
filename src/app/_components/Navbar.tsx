import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function Navbar() {
  return (
    <Card className="flex flex-col w-full p-5 bg-hero_img bg-no-repeat bg-cover">
      <CardContent>
        <section className="flex items-center gap-[5rem] w-full">
          <Image
            src={"/logo.jpg"}
            alt={"Computer Driven Enthusiast's Logo"}
            width={80}
            height={80}
            className="rounded-2xl"
          />

          <div className="flex gap-[5rem]">
            <p>Home</p>
            <p>About</p>
          </div>
        </section>

        <section className="w-full pt-4 flex flex-col items-center justify-center">
          <h1 className="text-[56px] text-center font-bold w-[733px] leading-[4.5rem]">
            Ignite Your Passion for Technology.
          </h1>
          <h1 className="text-[52px] text-center font-bold w-[733px]">
            Build. Innovate. Lead.
          </h1>
          <Button className="mt-8">Join us</Button>
        </section>
      </CardContent>
    </Card>
  );
}
