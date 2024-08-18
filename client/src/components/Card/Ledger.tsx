import { FaFileAlt, FaFileImage } from "react-icons/fa";
import { IoCheckmarkCircle, IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineFiberNew } from "react-icons/md";
import { RiFileExcel2Line } from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";


const Ledger = (ledger: any) => {
  // Handlers
  const handleOpen = (pdfurl: string) => {
    window.open(pdfurl, "_blank");
  };

  const now = new Date().toISOString().slice(0, 10);
  const date = now.slice(8, 10);
  const month = now.slice(5, 7);
  const year = now.slice(0, 4);
  
  // console.log(ledger)

  return (
    <>
      <section className="">
        <div className="flex flex-col gap-3 cursor-pointer justify-between p-5 bg-white rounded-md shadow-sm w-full sm:w-[330px]">
          <section>
            <div className="flex justify-between w-[295px]">
              <h3 className="font-semibold text-xs flex pb-4 ">
                {ledger.transactionDetails.date}
                
              </h3>
              
              {ledger.transactionDetails.date.slice(0, 4) === year &&
              ledger.transactionDetails.date.slice(5, 7) === month &&
              (ledger.transactionDetails.date.slice(8, 10) === date ||
                parseInt(date) -
                  parseInt(ledger.transactionDetails.date.slice(8, 10)) <=
                  2) ? (
                <span className="text-4xl text-red-500 font-semibold">
                  <MdOutlineFiberNew />
                </span>
              ) : null}
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                {ledger.fileType == "image/jpeg" ||
                ledger.fileType == "image/png" ? (
                  <FaFileImage className="w-12 h-12 sm:w-24 sm:h-24 text-slate-500" />
                ) : ledger.fileType == "text/csv" ? (
                  <RiFileExcel2Line className="w-12 h-12 sm:w-24 sm:h-24 text-green-800" />
                ) : ledger.fileType == "application/pdf" ? (
                  <VscFilePdf className="w-12 h-12 sm:w-24 sm:h-24 text-slate-500" />
                ) : (
                  <FaFileAlt className="w-12 h-12 sm:w-24 sm:h-24 text-slate-500" />
                )}
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
          </section>

                  <hr />


          <section >
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-between ">
                

                <div className="">
                  <h1 className="flex flex-col gap-2">

                  {ledger.confirmations.sender === "success" ? (
                      <p className="flex gap-1">
                        <IoCheckmarkCircle className="text-green-500 text-xl" />
                        <span className="text-xs text-black/50">
                          Confirmed by Sender
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


                    {ledger.confirmations.receiver === "success" ? (
                      <p className="flex gap-1">
                        <IoCheckmarkCircle className="text-green-500 text-xl" />
                        <span className="text-xs text-black/50">
                          Confirmed by Receiver
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

              <div className="flex flex-col items-center gap-2">
                <button
                  className=" text-[11px] w-[80px] bg-slate-100 font-semibold p-1  cursor-pointer hover:bg-slate-200 border-[1px]"
                  onClick={() => handleOpen(ledger.ledgerUrl)}
                >
                   Ledger
                </button>
                <button
                  className=" text-[11px] w-[80px] bg-slate-100 font-semibold p-1  cursor-pointer hover:bg-slate-200 border-[1px]"
                  onClick={() => handleOpen("/transaction/" + ledger.id)}
                >
                  View/Edit
                </button>
                
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Ledger;
