import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center">
      <div className="w-full pt-8 px-8 sticky top-0 bg-background">
        <Navbar page="home" showContent={false} />
      </div>

      <section className="mt-[2.7rem] max-md:mt-[1.5rem] px-8 pb-8 flex flex-row justify-center items-center gap-6 w-full max-lg:flex-col max-lg:gap-10">
        <div className="w-[664px] max-md:w-full">
          <h1 className="block max-xl:hidden text-[44px] max-lg:text-[40px] text-left font-semibold w-[502px] leading-[3rem]">
            Your Journey Begins <span className="text-[40px]">Here</span>
          </h1>
          <h1 className="hidden max-xl:inline-block text-[44px] max-lg:text-[40px] max-md:text-[28px] max-sm:text-[20px] text-left font-semibold w-full leading-[3rem]">
            Your Journey Begins Here
          </h1>
          <p className="text-justify mt-4 max-md:mt-2 w-auto max-xl:w-[350px] max-lg:w-auto max-md:text-[15px] max-sm:text-[12px]">
            Join CoDE - USC, where future computer engineers come together to
            turn ideas into reality. Dive into hands-on projects, compete in
            thrilling challenges, and connect with a community that’s shaping
            the future of technology.
          </p>
        </div>

        <div className="flex flex-row max-sm:flex-col gap-8 w-[624px] max-md:w-full justify-center items-center">
          <div className="w-[255px] h-[205.9px] rounded-[12px] bg-pe_1">
            <div className="w-[240px] mt-32 mx-5 flex flex-col justify-end items-start">
              <p className="text-sm">Past Event</p>
              <p className="font-bold text-sm">
                Where code drive innovation in web technology
              </p>
            </div>
          </div>
          <div className="w-[255px] h-[205.9px] rounded-[12px] bg-pe_2">
            <div className="w-[240px] mt-32 mx-5 flex flex-col justify-end items-start">
              <p className="text-sm">Past Event</p>
              <p className="font-bold text-sm">
                Where robotics ignites technological advancement
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
