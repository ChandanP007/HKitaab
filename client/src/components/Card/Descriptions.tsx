import {
  FaBook,
  FaHistory
} from "react-icons/fa";
import { FcAddDatabase } from "react-icons/fc";
import { useState } from "react";
import AllTransactions from "./AllTransactions";
import MyDashboard from "./MyDashboard";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";



type CardProps = {
  title: string;
  src: string;
  gst: string;
  address?: string;
  email?: string;
  btype?: string;
};

const Details = ({ title, src, gst, address, btype }: CardProps) => {

  //states
  const [detailsPane, setDetailsPane] = useState<string>("MyDashboard");
  const [requestedLedgersGst, setRequestedLedgersGst] = useState<string>();

  return (
    <main>
{/* Top Heading  */}
      <section className=" bg-gray-300 text-black p-4 font-thin">
        <h1 className=" text-black/70 font-light hidden sm:block">
          Organisation Name :{" "}
          <span className="text-xl font-semibold">{title}</span>
        </h1>
        <p className="flex gap-3 items-center sm:hidden"> 
          <img src={src} alt="" className="rounded-full h-[50px]"/>
          <div>
            <h1 className="text-md font-bold">{title}</h1>
            <h1 className="text-sm font-thing">{gst}</h1>
          </div>
        </p>
      </section>

{/* Main Body */}
      {/* Desktop View  */}
      <section className="hidden sm:flex p-3 ">
        <div className="flex flex-col gap-1 mr-8 text-[11px] min-w-fit">
          <img src={src} className="w-56" />
          <div className="">
            <ul>
              <li className="p-1 border-2 ">
                GST : <span className="font-semibold">{gst}</span>
              </li>
              <li className="p-1 border-2 ">
                Address : <span className="font-semibold">{address}</span>
              </li>
              <li className="p-1 border-2 ">
                Business Type :{" "}
                <span className="font-semibold text-[10px] ">
                  {btype?.toUpperCase()}
                </span>
              </li>
              {/* <li className="p-1 border-2 ">
                Email : <span className="font-semibold">{email}</span>
              </li> */}
            </ul>
            <div className="p-5">
                <h2 className="text-xl">Quick Actions</h2>
            </div>
          </div>
        </div>
      

{/* Navigation  */}
        <div className="flex flex-col gap-2 p-3 text-sm border-l-[1px] ">
          <div className="flex justify-between gap-10 font-semibold  w-[500px] p-1 text-black/60">
            <button
              className="flex justify-center items-center gap-1 hover:text-black"
              onClick={() => {setDetailsPane("Ledgers");setRequestedLedgersGst(gst)}}
            >
              <FaBook className="text-xl"/>
              All Ledgers
            </button>
            <button
              className="flex justify-center items-center gap-1 hover:text-black"
              onClick={() => setDetailsPane("MyDashboard")}
            >
              <FcAddDatabase className="text-xl" />
              My Dashboard
            </button>
            <button
              className="flex justify-center items-center gap-1 hover:text-black"
              onClick={() => setDetailsPane("History")}
            >
              <FaHistory  className="text-xl"/>
              History
            </button>
            <button
              className="flex justify-center items-center gap-1 hover:text-black"
              onClick={() => setDetailsPane("Stats")}
            >
              <IoStatsChartOutline className="text-xl"/>
              Stats
            </button>
          </div>

          {/* Details pane */}

          <div className=" max-w-[75vw]">
            {detailsPane === "Ledgers" && (
              <AllTransactions businessgst={requestedLedgersGst}/>
            )}
            {detailsPane === "MyDashboard" && (
              <MyDashboard gst={gst} btype={btype}/>
            )}
            {detailsPane === "History" && (
              <div>
                <p>Details of the history</p>
              </div>
            )}
            {detailsPane === "Stats" && (
              <div>
                <p>Details of the others</p>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Mobile View */}
      <section className="block sm:hidden">
         <div className="flex gap-3 p-3">
           <div className="flex flex-col items-center p-2 bg-gray-200 shadow-sm">
              <h1 className="text-4xl font-bold font-mono ">0</h1>
              <h1 className="font-thin text-xs">Transactions</h1>
           </div>
           <div className="flex flex-col items-center p-2 bg-gray-200 shadow-sm">
              <h1 className="text-4xl font-bold font-mono ">0</h1>
              <h1 className="font-thin text-xs">Ledgers Pending</h1>
           </div>
         </div>
         
         <hr className="text-black my-3 "/>
         <div className="flex gap-2 items-center mt-5 px-2">
          <input type="text" placeholder="Search Ledger/Transcationd ID" className="
            text-xs p-2 w-full border-[1px] outline-none border-gray-300
          "/>
          <CiSearch className="text-xl font-bold"/>
         </div>
           
         
      </section>
    </main>
  );
};

export default Details;
