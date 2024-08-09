"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../_components/Navbar";

// To Fix:
// - showNavbarContent not working properly
export default function About() {
  const [showNavbarContent, setShowNavbarContent] = useState(true);
  const [pageInView, setPageInView] = useState("page1");
  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);
  const page3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let currentPage = "page1";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === page1Ref.current) {
              currentPage = "page1";
            } else if (entry.target === page2Ref.current) {
              currentPage = "page2";
            } else if (entry.target === page3Ref.current) {
              currentPage = "page3";
            }
          }
        });

        // if (currentPage !== pageInView) {
        setPageInView(currentPage);
        // }
      },
      {
        threshold: 0.5,
      }
    );

    if (page1Ref.current) observer.observe(page1Ref.current);
    if (page2Ref.current) observer.observe(page2Ref.current);
    if (page3Ref.current) observer.observe(page3Ref.current);

    return () => {
      if (page1Ref.current) observer.unobserve(page1Ref.current);
      if (page2Ref.current) observer.unobserve(page2Ref.current);
      if (page3Ref.current) observer.unobserve(page3Ref.current);
    };
  }, []);

  // useEffect(() => {
  //   setShowNavbarContent(pageInView === "page1");
  // }, [pageInView]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setShowNavbarContent(pageInView === "page1");
    }, 200);

    return () => clearTimeout(debounce);
  }, [pageInView]);

  return (
    <main>
      <div className="min-w-full flex flex-col h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <div className="pt-8 px-8 sticky top-0 bg-background">
          <Navbar page="about" showContent={showNavbarContent} />
        </div>

        {/* Page 1 */}
        <div
          ref={page1Ref}
          className="snap-start p-8 pt-[27rem] min-h-screen h-screen"
        >
          <div className="mt-[2.7rem] max-lg:mt-[0rem] flex justify-center">
            <div className="w-[1080px] max-lg:w-full">
              <h1 className="text-[44px] max-lg:text-[28px] text-center font-semibold leading-[3rem] max-lg:leading-[2rem]">
                Computer Driven Enthusiasts (CoDE) - <br /> University of San
                Carlos
              </h1>
              <p className="text-justify mt-10 max-lg:mt-6">
                The Computer Driven Enthusiasts (CoDE) at the University of San
                Carlos is a dynamic student group dedicated to advancing
                computer engineering skills. CoDE provides a platform for
                students to excel academically and practically by engaging in
                innovative projects, competitions, and knowledge-sharing. The
                organization fosters collaboration, technical proficiency, and
                problem-solving, helping members build a strong foundation for
                their future careers.
              </p>
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <div
          ref={page2Ref}
          className="snap-start p-8 pt-[13rem] max-lg:pt-[11.5rem] min-h-screen h-screen"
        >
          <div className="flex justify-center">
            <div className="w-[1080px] max-lg:w-full">
              <h1 className="text-[44px] max-lg:text-[40px] text-center font-semibold leading-[3rem]">
                Learn About Our Mission and Vision
              </h1>

              <div className="flex flex-col mt-10 max-lg:mt-6 gap-5 max-lg:gap-1 justify-center items-center">
                <h2 className="text-[40px] max-lg:text-[36px] text-center font-semibold leading-[3rem]">
                  Mission
                </h2>
                <p className="text-justify w-[850px] max-lg:w-[700px]">
                  Computer Driven Enthusiasts (CoDE) envisions a community
                  employed with efficient and able citizens who would support
                  the appropriate values and doctrines of society. CoDE aims to
                  see members operatively commune in activities that would help
                  them in acquiring knowledge relevant to their field at the
                  same time developing physically mentally and spiritually.
                </p>
              </div>

              <div className="flex flex-col mt-10 max-lg:mt-2 gap-5 max-lg:gap-1 justify-center items-center">
                <h2 className="text-[40px] max-lg:text-[36px] text-center font-semibold leading-[3rem]">
                  Vision
                </h2>
                <p className="text-justify w-[850px] max-lg:w-[700px]">
                  Computer Driven Enthusiasts (CoDE) is a student organization
                  that helps its members by setting a path directed towards
                  their development of skills and talents in the domain of
                  computer technology especially in computer engineering. CoDE
                  imparts its constituents the enthusiasm and necessary
                  fundamentals for further learning inside the sphere of
                  computer training. CoDE tutors its constituents in acquiring
                  confidence for extra output productivity during operations and
                  it exposes them to various aspects of the computer systems
                  discipline.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div
          ref={page3Ref}
          className="snap-start p-8 pt-[12rem] max-lg:pt-[11rem] min-h-screen h-screen"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-1 max-lg:-gap-1">
              <h1 className="text-[44px] max-lg:text-[36px] text-center font-semibold leading-[3rem]">
                Meet Our Leads & Committee
              </h1>
              <p className="max-lg:text-sm">
                Get to know the passionate individuals driving our initiatives
                and shaping our community.
              </p>
            </div>

            <div className="flex gap-[150px] mt-8">
              <div className="w-[255px] h-[205.9px] max-lg:w-[210px] max-lg:h-[169.56px] rounded-[12px] bg-lead_1 bg-cover">
                <div className="w-[240px] mt-[9.5rem] max-lg:mt-[7.5rem] mx-5 flex flex-col justify-end items-start">
                  <p className="text-sm">Software Lead</p>
                  <p className="font-bold text-sm">Sean Aguilar</p>
                </div>
              </div>
              <div className="w-[255px] h-[205.9px] max-lg:w-[210px] max-lg:h-[169.56px] rounded-[12px] bg-lead_2 bg-cover">
                <div className="w-[240px] mt-[9.5rem] max-lg:mt-[7.5rem] mx-5 flex flex-col justify-end items-start">
                  <p className="text-sm">Hardware Lead</p>
                  <p className="font-bold text-sm">Andre Cortez</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6 gap-2 max-lg:gap-0 justify-center items-center">
              <h3>Committee</h3>

              <div className="flex justify-center items-center gap-[250px] max-lg:gap-[200px]">
                <div>
                  <ul className="list-disc list-inside max-lg:text-[14px]">
                    <li>Charles Colina</li>
                    <li>Franz Omega</li>
                    <li>Ghemarson Nacua</li>
                    <li>Isaac Alotaya</li>
                    <li>Keith Tejeno</li>
                    <li>May Ochia</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside max-lg:text-[14px]">
                    <li>Chrys Sean Sevilla</li>
                    <li>Clark Villacampa</li>
                    <li>Gwyneth Jugan</li>
                    <li>Ivor Canque</li>
                    <li>Skyler Banzon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
