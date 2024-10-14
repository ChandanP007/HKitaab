
import {
  FaBook,
  FaHistory
} from "react-icons/fa";
import { FcAddDatabase } from "react-icons/fc";
import { useState } from "react";
import AllTransactions from "./AllTransactions";
import AddTransaction from "./AddTransaction";
import { IoStatsChartOutline } from "react-icons/io5";
import { FiList, FiPlusCircle } from "react-icons/fi";


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
    <main >
{/* Top Heading  */}
      <section className=" bg-gray-300 text-black p-4 font-thin">
        <h1 className=" text-black/70 font-light hidden sm:block">
          Organisation Name :{" "}
          <span className="text-xl font-semibold">{title}</span>
        </h1>
        <span className="flex gap-3 items-center sm:hidden"> 
          <img src={src} alt="" className="rounded-full h-[50px]"/>
          <div>
            <p className="text-md font-bold">{title}</p>
            <p className="text-sm font-light">GST : {gst}</p>
          </div>
        </span>
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
                {/* <h2 className="text-xl">Quick Actions</h2> */}
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
              New Transaction
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
              <AddTransaction gst={gst} btype={btype}/>
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
         
         
         <hr className="text-black my-3 "/>

          {/* Quick actions  */}
         {/* <h1 className="font-semibold text-sm p-3">Quick actions</h1> */}
         <div className="flex p-3 font-semibold w-full justify-start gap-3">
              <span 
              onClick={() => {setDetailsPane("Ledgers");setRequestedLedgersGst(gst)}}
              className={`flex flex-col justify-center rounded-sm shadow-sm items-center gap-2 px-3 py-2 bg-gray-300  text-black`}>
                <FiList className="text-2xl"/>
                <h2 className="text-xs">All Transactions</h2>
              </span>
              <span 
              onClick={() => {setDetailsPane("AddTransaction")}}
              className="flex flex-col justify-center rounded-sm shadow-sm items-center gap-2 px-3 py-2 bg-gray-300  text-black">
                <FiPlusCircle className="text-2xl"/>
                <h2 className="text-xs">Add Transaction</h2>
              </span>
              
              
         </div>

         
          <div className="p-3">
          {detailsPane === "Ledgers" && (
              <AllTransactions businessgst={requestedLedgersGst}/>
            )}
          </div>
          <div className="p-3">
          {detailsPane === "AddTransaction" && (
              <AddTransaction gst={gst} btype={btype}/>
            )}
          </div>
         {/* </div> */}

         

         
         
           
         
      </section>
    </main>
  );
};

export default Details;
