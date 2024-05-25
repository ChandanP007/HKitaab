import { GoShieldCheck } from "react-icons/go";
import { MdOutlineAccountTree, MdQueryStats } from "react-icons/md";
import { PiNewspaperLight } from "react-icons/pi";
import Review from "./Review";

const Branding = () => {
  return (
    <main className="">
      {/* Why choose HisaabKitaab ?  */}
      <section className=" my-20 flex flex-col items-center bg-gray-100 p-5">
        <h1 className="text-4xl font-bold text-center p-12">
          Why choose HisaabKitaab?
        </h1>
        <div className="flex justify-center gap-32 mt-5 w-full">
          <div className="flex flex-col gap-5 justify-center items-center">
            <MdOutlineAccountTree className="text-9xl text-center" />
            <h2
              className="
            text-2xl bg-black
             text-white p-2 w-[49px] 
             text-center rounded-full
             
             "
            >
              1
            </h2>
            <p className="font-semibold w-[200px] text-center">
              Automatic Ledger Management
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <MdQueryStats className="text-9xl text-center" />
            <h2 className="text-2xl bg-black text-white p-2 w-[49px] text-center rounded-full">
              2
            </h2>
            <p className="font-semibold w-[200px] text-center">
              Intelligent Insights
            </p>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center">
            <GoShieldCheck className="text-9xl text-center" />
            <h2 className="text-2xl bg-black text-white p-2 w-[49px] text-center rounded-full">
              3
            </h2>
            <p className="font-semibold w-[200px] text-center">
              Secure and Reliable
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <PiNewspaperLight className="text-9xl text-center" />
            <h2 className="text-2xl bg-black text-white p-2 w-[49px] text-center rounded-full">
              4
            </h2>
            <p className="font-semibold w-[200px] text-center">
              User-Friendly Interface
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="m-32 flex justify-around items-center">
        <section>
          <h1 className="text-5xl font-bold ">
            Empower <br></br>Your Business <br></br> with <br></br>Cutting-Edge
            Technology
          </h1>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="bg-black/70 p-5 w-[400px] text-center text-white rounded-md">
            Automate routine tasks and focus on growing your business
          </h2>
          <h2 className="bg-black/70 p-5 w-[400px] text-center text-white rounded-md">
            Use actionable insights to drive your{" "}
          </h2>
          <h2 className="bg-black/70 p-5 w-[400px] text-center text-white rounded-md">
            Automate routine tasks and focus on growing your business
          </h2>
        </section>
      </section>

      {/* Testinomials */}
      <section className="my-32 h-[50vh] flex flex-col justify-around items-center  bg-gray-100 w-full">
        <h1 className="text-4xl font-bold text-center p-12">
          What our users say
        </h1>

        <section className="flex justify-center w-full p-5 gap-24">
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
