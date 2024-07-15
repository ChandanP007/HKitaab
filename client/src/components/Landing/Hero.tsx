import Typewriter from "typewriter-effect";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";


const Hero = () => {

  useEffect(() => {
    AOS.init();
  }
  , []);


  return (
    
    <>
    
    {/* Desktop View  */}
    <main className="hidden sm:block p-12 ">
      <nav className="flex items-center justify-center mb-16" data-aos="fade">
        <h1 className="font-bold text-2xl">HisaabKitaab</h1>
        <ul className="flex items-center gap-10 ml-auto">
          <li className="hover:underline cursor-pointer font-semibold">
            <a>Features</a>
          </li>
          <li className="hover:underline cursor-pointer font-semibold">
            <a>Customer Reviews</a>
          </li>
          {/* <li className="hover:underline cursor-pointer font-semibold"
              onClick={
                ()=>
                  window.location.href = "/register"
                }>
                  <a>Register</a></li> */}
          <li className="hover:underline cursor-pointer font-semibold">
            <button
              className="bg-black/70 text-white p-2 text-sm w-[100px] rounded-full hover:bg-black"
              onClick={() => (window.location.href = "/login")}
            >
              Sign In
            </button>
          </li>
        </ul>
      </nav>

      <section className="flex justify-around gap-28 items-center"  >
        <section className="mt-20" data-aos="fade-right">
          <h1 className="text-[3rem] w-[750px]">
            Effortlessly Manage Your Ledgers and Streamline Business Operations
          </h1>
          <div className="my-10 text-black/50 text-xl">
            {/* Simplify Your Business Management with AI-Powered Tools */}
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
          <button
            className="
            bg-black/70 border-2 text-white 
            transition-all duration-300
            hover:w-[160px]
            hover:bg-black
            hover:text-white 
            p-4 w-[130px]
            text-sm rounded-full 
            mt-10 ml-10
            font-semibold
            "
            onClick={() => (window.location.href = "/register")}

          >
            Get Started
          </button>
        </section>

        <aside data-aos="fade-up">
          <img
            className="rounded-3xl shadow-2xl w-[800px] h-[500px] "
            src="https://res.cloudinary.com/dkzo1creb/image/upload/fl_preserve_transparency/v1716628001/transactionsss_usx9g9.jpg?_s=public-apps"
            alt="hero-image"
          />
        </aside>
      </section>
    </main>

    {/* Mobile View  */}
    <main className="sm:hidden pt-8 pb-20">
      <nav className="flex items-center justify-between">
        <h1 className="font-bold text-2xl p-4 ">HisaabKitaab</h1>
        <button
            className="
            bg-black text-white shadow-md
            transition-all duration-300
            p-3 mr-5 w-[110px]
            text-sm 
            mt- rounded-full
            font-semibold
            
            "
            onClick={() => (window.location.href = "/login")}
          > 
            Sign In
          </button>
          
      </nav>

      <section className="">
        <section className="mt-12 w-[100vw] px-4">
          <h1 className="text-[30px] font-semibold ">
            Effortlessly Manage<br></br> Your Ledgers and Streamline Business Operations
          </h1>

          <div className="mt-10 text-black/50 text-md font-light sm:text-lg min-h-[70px]">
            {/* Simplify Your Business Management with AI-Powered Tools */}
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
      </section>
      </main>
    

    </>
  );
};

export default Hero;
