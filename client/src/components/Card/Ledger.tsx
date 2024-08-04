import { FaFileAlt, FaFileImage } from "react-icons/fa";
import { IoCheckmarkCircle, IoCloseCircleOutline } from "react-icons/io5";
import { RiDeleteBin5Line, RiFileExcel2Line } from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";
// import { Link } from "react-router-dom";

const Ledger = (ledger: any) => {
  // Handlers
  const handleOpen = (pdfurl: string) => {
    window.open(pdfurl, "_blank");
  };

  // console.log(ledger)

  return (
    <>
      <section className="">
        <div className="flex justify-between p-5 bg-white rounded-md shadow-sm w-full sm:w-[330px]">
          <div>
            <div className="flex justify-between w-[295px]">
              <h3 className="font-semibold text-xs flex pb-4 ">
                {ledger.transactionDetails.date}
              </h3>
              <RiDeleteBin5Line
                title="Delete"
                className="hidden sm:flex text-black/30 hover:text-black sm:text-xl cursor-pointer"
              />
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                {
                ledger.fileType == "image/jpeg" || ledger.fileType == "image/png" ? (
                <FaFileImage className="w-12 h-12 sm:w-24 sm:h-24 text-slate-500" />
                ) 
                : ledger.fileType == "text/csv" ? (
                <RiFileExcel2Line className="w-12 h-12 sm:w-24 sm:h-24 text-green-800" />
                )
                : ledger.fileType == "application/pdf" ? (
                <VscFilePdf className="w-12 h-12 sm:w-24 sm:h-24 text-slate-500" />
                ) : 
                 <FaFileAlt className="w-12 h-12 sm:w-24 sm:h-24 text-slate-500" />
                }
              </div>
              <div>
                <h2 className="font-semibold sm:text-xl">
                  {ledger.id.toUpperCase()}
                </h2>
                <h3 className="font-thin text-[10px] mt-2">
                  {ledger.transactionDetails.particulars.slice(0, 15)}..
                </h3>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex mt-4 flex-col justify-start gap-1 ">
                <div className="">
                </div>

                <div className="">
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
                  className=" text-xs bg-slate-100 p-1 sm:p-2 cursor-pointer hover:bg-slate-200 border-[1px]"
                  onClick={() => handleOpen(ledger.ledgerUrl)}
                >
                  View Ledger 
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
