import { GoShieldCheck } from "react-icons/go";
import { MdOutlineAccountTree, MdQueryStats } from "react-icons/md";
import { PiNewspaperLight } from "react-icons/pi";
import Review from "./Review";
import Demo from "./Demo";


const Branding = () => {
  return (
    <main>
      
      <hr className="block sm:hidden border-4"></hr>
      {/* Why choose HisaabKitaab ?  */}
      <section className="mb-24 sm:mb-0 flex flex-col justify-center items-center h-[65vh] sm:bg-gray-200  xl:max-2xl:h-[70vh]">
        <h1 className="text-3xl my-5 sm:text-5xl font-thin text-center sm:p-12">
          Why choose HisaabKitaab?
        </h1>
        <div className="flex flex-wrap justify-center gap-4 gap-y-10 sm:gap-32 mt-5 w-[100vw]">
          <div
            className="flex flex-col gap-5 justify-center items-center  p-1 sm:border-none sm:p-0"
            data-aos="fade"
          >
            <MdOutlineAccountTree className="text-7xl sm:text-9xl text-center" />
            <h2
              className="
            text-2xl bg-black
             text-white p-2 w-[49px] 
             text-center rounded-full
             hidden sm:block
             
             "
            >
              1
            </h2>
            <p className="font-semibold w-[170px] sm:w-[200px] text-center text-sm sm:text-md">
              Automatic Ledger Management
            </p>
          </div>
          <div
            className="flex flex-col gap-5 justify-center items-center  p-1 sm:border-none sm:p-0"
            data-aos="fade"
          >
            <MdQueryStats className="text-7xl sm:text-9xl text-center" />
            <h2
              className="text-2xl hidden sm:block
             bg-black text-white p-2 w-[49px] text-center rounded-full"
            >
              2
            </h2>
            <p className="font-semibold w-[170px] sm:w-[200px] text-center text-sm sm:text-md">
              Intelligent Insights
            </p>
          </div>

          <div
            className="flex flex-col gap-5 justify-center items-center p-1 sm:border-none sm:p-0"
            data-aos="fade"
          >
            <GoShieldCheck className="text-7xl sm:text-9xl text-center" />
            <h2
              className="text-2xl bg-black
            hidden sm:block text-white p-2 w-[49px] text-center rounded-full"
            >
              3
            </h2>
            <p className="font-semibold w-[170px] sm:w-[200px] text-center text-sm sm:text-md">
              Secure and Reliable
            </p>
          </div>
          <div
            className="flex flex-col gap-5 justify-center items-center  p-1 sm:border-none sm:p-0"
            data-aos="fade"
          >
            <PiNewspaperLight className="text-7xl sm:text-9xl text-center" />
            <h2
              className="text-2xl bg-black
            hidden sm:block text-white p-2 w-[49px] text-center rounded-full"
            >
              4
            </h2>
            <p className="font-semibold w-[170px] sm:w-[200px] text-center text-sm sm:text-md">
              User-Friendly Interface
            </p>
          </div>
        </div>
      </section>
      <hr className="block sm:hidden border-4"></hr>

      {/* Application Demo  */}
      <hr className="block sm:hidden border-4" />
      <section>
        <Demo />
      </section>


      {/* App Features */}
      <section className="sm:flex sm:m-32 justify-around items-center xl:max-2xl:justify-between">
        <section>
          <h1
            className="text-4xl p-2 mt-10 sm:p-0 sm:mt-0 sm:text-6xl font-bold  "
            data-aos="fade-right" data-aos-once="true"
          >
            Empower <br></br>Your Business <br></br> with{" "}
            <br className="hidden sm:block"></br>Cutting-Edge Technology
          </h1>
        </section>
        <img
          className="block sm:hidden px-3 mt-10 shadow-lg rounded-xl"
          src="https://res.cloudinary.com/dkzo1creb/image/upload/fl_preserve_transparency/v1716628001/transactionsss_usx9g9.jpg?_s=public-apps"
          alt="hero-image"
        />
        <section
          className="flex items-center flex-col gap-3 py-10 mb-10 sm:mb-0 sm:py-0 text-sm sm:text-md"
          data-aos="fade-up" data-aos-once="true"
        >
          <h2 className="bg-gray-300 p-6 sm:p-7 border-[1px] w-[350px] sm:[400px] text-center text-black rounded-xl shadow-lg">
            Automate routine tasks and focus on growing your business
          </h2>
          <h2 className="bg-gray-300 p-6 sm:p-7 border-[1px] w-[350px] sm:[400px] text-center text-black rounded-xl shadow-lg">
            Enhance Decision-Making with Data-Driven AI Insights
          </h2>
          <h2 className="bg-gray-300 p-6 sm:p-7 border-[1px] w-[350px] sm:[400px] text-center text-black rounded-xl shadow-lg">
            Automate routine tasks and focus on growing your business
          </h2>
        </section>
      </section>


      {/* The Testinomials */}
      <hr className="block sm:hidden border-4"></hr>
      <section className="sm:my-32 h-[75vh] sm:h-[65vh] flex flex-col justify-evenly items-center  bg-gray-100 w-full">
        <h1 className="text-3xl sm:text-5xl font-thin text-center py-10 sm:py-5">
          What Our User Says
        </h1>

        <section
          className="flex justify-center flex-wrap w-full overflow-scroll gap-3 p-5 sm:gap-15 xl:max-2xl:gap-4"
          data-aos="fade-up"
        >
          <Review
            user="Nitish Verma"
            content="This tool has revolutionized our accounting processes. The automation feature is a game-changer"
            designation="MD, BrandName"
            userimg={`https://avatar.iran.liara.run/username?username=Nitish+Verma`}
          />
          <Review
            user="Mukesh Gehlot"
            content="This tool has revolutionized our accounting processes. The automation feature is a game-changer"
            designation="Business Owner, BrandName"
            userimg={`https://avatar.iran.liara.run/username?username=Mukesh+Gehlot`}
          />
          <Review
            user="Nita Sharma"
            content="This tool has revolutionized our accounting processes. The automation feature is a game-changer"
            designation="Local Retailer, Kolkata"
            userimg={`https://avatar.iran.liara.run/username?username=Nita+Sharma`}
          />
        </section>
      </section>
      
    </main>
  );
};

export default Branding;
