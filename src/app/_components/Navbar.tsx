"use client";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  page: "home" | "about";
  className?: string;
  showContent: boolean;
}

const activePage =
  "font-bold border-transparent border-[2.5px] border-b-white transition-all duration-300";
const inActivePage =
  "hover:font-bold border-transparent border-[2.5px] hover:border-b-white transition-all duration-300";

export default function Navbar({ page, className, showContent }: NavbarProps) {
  const currentRoute = usePathname();

  return (
    <Card
      className={`${className} flex flex-col w-full ${
        !showContent ? "pt-5 px-5" : "p-5"
      } bg-hero_img bg-no-repeat bg-cover transition-all duration-200`}
    >
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
            <Link
              href="/"
              className={`inline-block min-w-[60px] text-center ${
                currentRoute === "/" ? activePage : inActivePage
              }`}
            >
              Home
            </Link>
            <Link
              href="about"
              className={`inline-block min-w-[60px] text-center ${
                currentRoute === "/about" ? activePage : inActivePage
              }`}
            >
              About
            </Link>
          </div>
        </section>

        {page === "home" ? (
          <section className="w-full pt-4 flex flex-col items-center justify-center">
            <h1 className="text-[56px] max-lg:text-[52px] text-center font-bold w-[733px] leading-[4.5rem]">
              Ignite Your Passion for Technology.
            </h1>
            <h1 className="text-[52px] max-lg:text-[48px] text-center font-bold w-[733px]">
              Build. Innovate. Lead.
            </h1>
            <Button className="mt-8">Join us</Button>
          </section>
        ) : (
          showContent &&
          page === "about" && (
            <section
              className={`${
                showContent ? "opacity-100" : "opacity-0"
              } w-full pt-4 flex flex-col items-center justify-center`}
            >
              <h1 className="text-[56px] max-lg:text-[52px] text-center font-bold w-[733px] leading-[4.5rem]">
                Discover CoDE - USC: Where Innovation Meets Opportunity
              </h1>
            </section>
          )
        )}
      </CardContent>
    </Card>
  );
}
