

import { IoCheckmarkCircle, IoCloseCircleOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";
// import { Link } from "react-router-dom";

const Ledger = (ledger: any) => {
  // Handlers
  const handleOpen = (pdfurl:string) => {
    window.open(pdfurl, "_blank");
  };

  // console.log(ledger)

  return (
    <>
      <section className="">
        <div className="flex justify-between p-4 bg-white rounded-md shadow-sm w-[270px] sm:w-[330px]">
          <div>
            <div className="flex justify-between w-[295px]">
              <h3 className="font-semibold text-xs flex pb-4 ">{ledger.transactionDetails.date}</h3>
              <RiDeleteBin5Line
                title="Delete"
                className="hidden sm:flex text-black/30 hover:text-black sm:text-xl cursor-pointer"
              />
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <VscFilePdf className="w-12 h-12 sm:w-24 sm:h-24 text-slate-500" />
                {/* <Link to="/" className="text-sky-700 hover:underline font-thin text-xs">View</Link> */}
              </div>
              <div>
                <h2 className="font-semibold sm:text-xl">
                  {ledger.id.toUpperCase()}
                </h2>
                <h3 className="font-thin text-xs text-clip">Transaction Id</h3>
                {/* <h3 className="font-thin text-[10px] mt-5">Transaction Date : 12/12/22</h3> */}
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex mt-4 flex-col justify-start gap-1 ">
                <div className="">
                  {/* <h2 className="font-thin">You</h2> */}
                </div>

                <div className="">
                  {/* <h2 className="font-thin">Them</h2> */}
                  <h1 className="flex flex-col gap-1">
                    
                      <p className="flex gap-1">
                        <IoCheckmarkCircle className="text-green-500 text-xl" />
                        <span className="text-[12px] sm:text-xs text-black/50">
                          Confirmed by you
                        </span>
                      </p>
                    
                    {ledger.confirmations.receiver === "yes" ? (
                      <p className="flex gap-1">
                        <IoCheckmarkCircle className="text-green-500 text-xl" />
                        <span className="text-xs text-black/50">
                          Confirmed by them
                        </span>
                      </p>
                    ) : (
                      <p className="flex gap-1">
                        <IoCloseCircleOutline className="text-red-500 text-xl" />
                        <span className="text-[12px] sm:text-xs text-black/50">
                          Not Confirmed yet
                        </span>
                      </p>
                    )}
                  </h1>
                </div>
              </div>

              <div>
                <button
                  className="hidden sm:block text-xs bg-slate-100 p-1 sm:p-2 cursor-pointer hover:bg-slate-200 border-[1px]"
                  onClick={() => handleOpen(ledger.ledgerPDF)}
                >
                  Open Ledger
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ledger;
