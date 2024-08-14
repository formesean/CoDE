"use client";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

interface NavbarProps {
  page: "home" | "about" | "events";
  className?: string;
  showContent: boolean;
}

const activePage =
  "font-bold border-transparent border-[2.5px] border-b-white transition-all duration-300";
const inActivePage =
  "hover:font-bold border-transparent border-[2.5px] hover:border-b-white transition-all duration-300";
const joinUsPage =
  "https://docs.google.com/forms/d/e/1FAIpQLSfG79uJ0-jXTObNKMnPkmUmLvJWK6QtpMMPEZgcuArKk6nYVA/viewform?usp=sharing";

export default function Navbar({ page, className, showContent }: NavbarProps) {
  const currentRoute = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <Card
      className={`${className} flex flex-col w-full pt-5 px-5 bg-hero_img bg-no-repeat bg-cover transition-all duration-200`}
    >
      <CardContent>
        <section className="flex items-center justify-between">
          <div className="flex items-center justify-start max-md:justify-between gap-[5rem] max-sm:gap-[4rem] w-full">
            <div className="w-[80px] h-[80px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[30px] max-sm:h-[30px]">
              <Image
                src={"/logo.jpg"}
                alt={"Computer Driven Enthusiast's Logo"}
                width={80}
                height={80}
                className="rounded-2xl cursor-pointer"
              />
            </div>

            <div className="flex gap-[5rem] max-sm:gap-0">
              <Link
                href="/"
                className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                  currentRoute === "/" ? activePage : inActivePage
                }`}
              >
                Home
              </Link>
              <Link
                href="about"
                className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                  currentRoute === "/about" ? activePage : inActivePage
                }`}
              >
                About
              </Link>
              <Link
                href="events"
                className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                  currentRoute === "/events" ? activePage : inActivePage
                }`}
              >
                Events
              </Link>
            </div>
          </div>

          <UserButton />

          {/* <div className="flex gap-[5rem] max-md:hidden">
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
          </div> */}

          {/* <Menu className={`hidden max-md:block cursor-pointer`} /> */}
        </section>

        {page === "home" ? (
          <section className="w-full pt-4 flex flex-col items-center justify-center">
            <h1 className="text-[56px] max-lg:text-[52px] max-md:text-[40px] max-sm:text-[26px] max-[425px]:text-[20px] text-center font-bold w-[733px] max-lg:w-full leading-[4.5rem] max-md:leading-[2.5rem] max-[425px]:leading-[2rem]">
              Ignite Your Passion for Technology.
            </h1>
            <h1 className="text-[52px] max-lg:text-[48px] max-md:text-[40px] max-sm:text-[24px] max-[425px]:text-[20px] text-center font-bold w-[733px] max-lg:w-full">
              Build. Innovate. Lead.
            </h1>
            <Button className="mt-8 max-md:mt-4" asChild>
              <Link href={joinUsPage} target="_blank">
                Register Now
              </Link>
            </Button>
          </section>
        ) : (
          showContent &&
          page === "about" && (
            <section
              className={`${
                showContent ? "opacity-100" : "opacity-0"
              } w-full pt-4 flex flex-col items-center justify-center`}
            >
              <h1 className="text-[56px] max-lg:text-[52px] max-sm:text-[24px] max-[425px]:text-[20px] text-center font-bold w-[733px] max-lg:w-full leading-[4.5rem] max-md:leading-[2.5rem] max-[425px]:leading-[2rem]">
                Discover CoDE - USC: Where Innovation Meets Opportunity
              </h1>
            </section>
          )
        )}
      </CardContent>
    </Card>
  );
}
