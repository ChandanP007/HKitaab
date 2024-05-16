import {
  FaBook,
  FaHistory
} from "react-icons/fa";
import { FcAddDatabase } from "react-icons/fc";
import { useState } from "react";
import AllTransactions from "./AllTransactions";
import MyDashboard from "./MyDashboard";
import { IoStatsChartOutline } from "react-icons/io5";



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

  // console.log(requestedLedgersGst);

  return (
    <main>

{/* Top Heading  */}
      <section className="bg-gray-300 text-black p-4 font-thin">
        <h1 className=" text-black/70 font-light">
          Organisation Name :{" "}
          <span className="text-xl font-semibold">{title}</span>
        </h1>
      </section>

{/* Main Body */}
      <section className="flex p-3 ">
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
    </main>
  );
};

export default Details;
