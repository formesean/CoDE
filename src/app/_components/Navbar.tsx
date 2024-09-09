"use client";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

interface NavbarProps {
  page: "home" | "about" | "events" | "blog";
  className?: string;
  showContent: boolean;
}

const activePage =
  "font-bold border-transparent border-[2.5px] border-b-white transition-all duration-300";
const inActivePage =
  "hover:font-bold border-transparent border-[2.5px] hover:border-b-white transition-all duration-300";
const registrationPage = "";

export default function Navbar({ page, className, showContent }: NavbarProps) {
  const currentRoute = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const openMenu = () => {
    setShowMenu(true);
  };

  return (
    <Card
      className={`${className} flex flex-col w-full pt-5 px-5 bg-hero_img bg-no-repeat bg-cover transition-all duration-200`}
    >
      <CardContent>
        {/* Desktop Menu */}
        <section className="flex items-center justify-between max-sm:hidden">
          <div className="flex items-center justify-start max-md:justify-between gap-[5rem] max-sm:gap-[4rem] w-full">
            <div className="w-[80px] h-[80px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[30px] max-sm:h-[30px]">
              <Image
                src={"/logo.png"}
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
                href="/about"
                className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                  currentRoute === "/about" ? activePage : inActivePage
                }`}
              >
                About
              </Link>
              <Link
                href="/events"
                className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                  currentRoute === "/events" ? activePage : inActivePage
                }`}
              >
                Events
              </Link>
              <Link
                href="/blog"
                className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                  currentRoute === "/blog" ? activePage : inActivePage
                }`}
              >
                Blog
              </Link>
            </div>
          </div>

          <UserButton />
        </section>

        {/* Mobile Menu */}
        <section className="flex items-center justify-between md:hidden">
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
          </div>

          {!showMenu ? (
            <Menu className="cursor-pointer" onClick={openMenu} />
          ) : (
            <div className="w-full h-screen bg-background absolute top-0 left-0 p-8 z-10">
              <div className="flex justify-between items-center px-[2.75rem] pt-[0.9rem]">
                <UserButton />
                <X className="cursor-pointer" onClick={closeMenu} />
              </div>

              <div className="flex flex-col gap-5 justify-center items-center pt-20">
                <Link
                  href="/"
                  className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                    currentRoute === "/" ? activePage : inActivePage
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                    currentRoute === "/about" ? activePage : inActivePage
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/events"
                  className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                    currentRoute === "/events" ? activePage : inActivePage
                  }`}
                >
                  Events
                </Link>
                <Link
                  href="/blog"
                  className={`max-sm:text-sm inline-block min-w-[60px] text-center ${
                    currentRoute === "/blog" ? activePage : inActivePage
                  }`}
                >
                  Blog
                </Link>
              </div>
            </div>
          )}
        </section>

        {page === "home" ? (
          <section className="w-full pt-4 flex flex-col items-center justify-center">
            <h1 className="select-none text-[56px] max-lg:text-[52px] max-md:text-[40px] max-sm:text-[26px] max-[425px]:text-[20px] text-center font-bold w-[733px] max-lg:w-full leading-[4.5rem] max-md:leading-[2.5rem] max-[425px]:leading-[2rem]">
              Ignite Your Passion for Technology.
            </h1>
            <h1 className="select-none text-[52px] max-lg:text-[48px] max-md:text-[40px] max-sm:text-[24px] max-[425px]:text-[20px] text-center font-bold w-[733px] max-lg:w-full">
              Build. Innovate. Lead.
            </h1>
            {/* <Button className="mt-8 max-md:mt-4" asChild>
              <Link href={registrationPage} target="_blank">
                Register Now
              </Link>
            </Button> */}
          </section>
        ) : (
          showContent &&
          page === "about" && (
            <section
              className={`${
                showContent ? "opacity-100" : "opacity-0"
              } w-full pt-4 flex flex-col items-center justify-center`}
            >
              <h1 className="select-none text-[56px] max-lg:text-[52px] max-sm:text-[24px] max-[425px]:text-[20px] text-center font-bold w-[733px] max-lg:w-full leading-[4.5rem] max-md:leading-[2.5rem] max-[425px]:leading-[2rem]">
                Discover CoDE - USC: Where Innovation Meets Opportunity
              </h1>
            </section>
          )
        )}
      </CardContent>
    </Card>
  );
}
