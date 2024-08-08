import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Navbar />

      <section className="mt-[2.7rem] flex justify-between w-[1360px]">
        <div className="w-[664px]">
          <h1 className="text-[44px] text-left font-semibold w-[502px] leading-[3rem]">
            Your Journey Begins
          </h1>
          <h1 className="text-[44px] text-left font-semibold w-[502px]">
            Here
          </h1>
          <p className="text-justify mt-4">
            Join CoDE - USC, where future computer engineers come together to
            turn ideas into reality. Dive into hands-on projects, compete in
            thrilling challenges, and connect with a community that’s shaping
            the future of technology.
          </p>
        </div>

        <div className="flex gap-8 w-[624px]">
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
