import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <main className="p-12">
      <nav className="flex items-center justify-center mb-16">
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

      <section className="flex justify-around gap-28 items-center">
        <section className="mt-20">
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

        <aside>
          <img
            className="rounded-3xl shadow-2xl w-[800px] h-[500px] "
            src="https://res.cloudinary.com/dkzo1creb/image/upload/fl_preserve_transparency/v1716628001/transactionsss_usx9g9.jpg?_s=public-apps"
            alt="hero-image"
          />
        </aside>
      </section>
    </main>
  );
};

export default Hero;
