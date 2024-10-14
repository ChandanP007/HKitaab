import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CiDeliveryTruck, CiReceipt } from "react-icons/ci";
import { MdOutlineQueryStats } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Desktop View  */}
      <main className=" ">
        <nav
          className="flex justify-between items-center rounded-b-xl sm:mx-3 mb-2 sm:justify-center p-5 sm:p-8 xl:px-36 shadow-sm bg-white z-50 sticky top-0"
          data-aos="fade"
        >
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">HisaabKitaab</h1>
            <p className="text-slate-400 text-xs">hisaabkitaab.ai</p>
          </div>
          <ul className="hidden sm:flex items-center gap-10 ml-auto">
            <li className="hover:underline cursor-pointer">
              <a href="#features">Features</a>
            </li>
            <li className="hover:underline cursor-pointer">
              <a>Reviews</a>
            </li>
            <li className="hover:underline cursor-pointer">
              <a>Contact</a>
            </li>
            <li className="hover:underline cursor-pointer">
              <button
                className="bg-zinc-800 hover:bg-zinc-900 text-white p-2 text-sm w-[100px] rounded-full"
                onClick={() => (window.location.href = "/login")}
              >
                Sign In
              </button>
            </li>
          </ul>

          <button
            className="block sm:hidden font-light bg-zinc-800 hover:bg-zinc-900 text-white p-2 text-sm w-[100px] rounded-full"
            onClick={() => (window.location.href = "/login")}
          >
            Sign In
          </button>
        </nav>

        <section className="flex flex-col sm:flex-row md:mx-3 xl:p-10 lg:mx-24 xl:mx-60 shadow-xl lg:h-fit justify-between bg-white">
          <section className="p-6 sm:p-10">
            <div className=" flex mb-10  gap-2 items-center my-5 text-slate-400 text-sm">
              <div className="flex -space-x-6">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  className="h-8 sm:h-12 sm:w-12 border-white border-2 shadow-md rounded-full"
                />
                <img
                  src="https://avatar.iran.liara.run/public/girl"
                  className="h-8 sm:h-12 sm:w-12 border-white border-2 shadow-md rounded-full"
                />
                <img
                  src="https://avatar.iran.liara.run/username?username=Random+Person"
                  className="h-8 sm:h-12 sm:w-12 border-white border-2 shadow-md rounded-full"
                />
              </div>
              <p className="text-sm">Trusted by 500+ Clients</p>
            </div>

            <h1 className=" text-[2.2rem] sm:text-[3rem] leading-tight md:text-[2.5rem] xl:text-[3rem] font-semibold headline-2">
              Effortlessly Manage Your Ledgers and Streamline Business
              Operations
            </h1>

            <h3 className="border p-2 w-fit gap-1 my-5 flex shadow-sm rounded-md items-center text-xs animate-bounce">
              <span className="text-[9px] ">🟢</span>
              Request a demo today
            </h3>

            <div className="my-5 text-black/50 lg:text-xl md:text-lg h-20">
              <Typewriter
                options={{
                  strings: [
                    "Simplify Your Business Management with AI-Powered Tools",
                    "Enhance Decision-Making with Data-Driven AI Insights.",
                    "Automate Routine Tasks and Focus on Growth.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.changeDeleteSpeed("natural");
                }}
              />
            </div>

            <button
              className=" text-sm  bg-zinc-600 p-3 w-[150px] text-white rounded-md font-light hover:shadow-md transition-all duration-500 hover:bg-zinc-700 hover:w-[180px]"
              onClick={() => (window.location.href = "/register")}
            >
              Get Started
            </button>
          </section>

          <section className="my-10 flex flex-col items-center ">
            <video className="md:w-[1100px] lg:w-[700px] " autoPlay loop muted>
              <source src="/Images/scrolling.mp4" type="video/mp4" />
            </video>

            <div className="my-4 sm:my-10 text-4xl flex gap-5 ">
              <CiReceipt className="" />
              <MdOutlineQueryStats className="" />
              <CiDeliveryTruck className="" />
              <GoShieldCheck className="" />
            </div>

            <p className="text-xs">
              {" "}
              Feed your curiosity with our AI-powered tools.
            </p>
          </section>
        </section>
      </main>

      {/* Mobile View  */}
      {/* <main className="sm:hidden pt-8 pb-20">
        <nav className="flex items-center justify-between bg-white z-50 shadow-md sticky top-0 p-4">
          <h1 className="font-bold text-2xl">HisaabKitaab</h1>
          <button
            className="bg-black text-white shadow-md transition-all 
            duration-300 p-3 mr-5 w-[110px] text-sm rounded-full 
            font-semibold"
            onClick={() => (window.location.href = "/login")}
          >
            Sign In
          </button>
        </nav>

        <section className="mt-12 w-[100vw] px-4">
          <h1 className="text-[30px] font-semibold ">
            Effortlessly Manage<br></br> Your Ledgers and Streamline Business
            Operations
          </h1>

          <div className="mt-10 text-black/50 text-md font-light sm:text-lg min-h-[70px]">
            <Typewriter
              options={{
                strings: [
                  "Simplify Your Business Management with AI-Powered Tools",
                  "Enhance Decision-Making with Data-Driven AI Insights.",
                  "Automate Routine Tasks and Focus on Growth with Smart AI Tools.",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.changeDeleteSpeed("natural");
              }}
            />
          </div>
        </section>
      </main> */}
    </>
  );
};

export default Hero;
