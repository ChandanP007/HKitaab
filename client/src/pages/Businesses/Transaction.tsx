import { useEffect, useState } from "react";
import { getTransaction } from "../../hooks/userActions/getTransaction";
import { useActiveActionContext } from "../../context/siteContext";
import { useParams } from "react-router-dom";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { patchTransaction } from "../../hooks/userActions/patchTransaction";

const Transaction = () => {
  const { clientDomain } = useActiveActionContext();
  const [transactionData, setTransactionData] = useState<any[]>([]);
  const { id } = useParams<{ id: any }>();

  console.log(id);

  useEffect(() => {
    getTransaction(clientDomain, id).then((data: any) => {
      setTransactionData(data);
      console.log(data);
    });
  }, []);

  const handleConfirmation= ()=>{
      patchTransaction(clientDomain,id).then(() => {
        alert("Transaction Updated!")
        window.location.reload()
        
      }); 
  }

  return (
    <>
      <main className="flex justify-center">
        <div className="sm:p-3 w-full sm:w-[50vw] h-[100vh] bg-gray-50 border-dotted border-4 shadow-">
          {/* Top section  */}
          <section className="flex flex-col p-5">
            <h1 className="font-semibold text-2xl ">HisaabKitaab.ai</h1>
            <p className="font-light text-xs sm:text-sm">
              Intelligent ledger management and Shaping Business Transactions
            </p>
          </section>

          <hr className="border-1 border-black" />

          {transactionData && (
            <>
              <h1 className="font-bold sm:text-xl my-8 mx-3">Transaction ID : {transactionData[0]?.id}</h1>
              <section className="flex flex-col sm:flex-row justify-between items-start">
                <section className="p-3 sm:p-6 shadow-sm w-full sm:w-[30vw] bg-white">
                  <h2 className="font-bold underline mb-7 sm:mb-0 text-green-600">Transaction Summary</h2>
                  <ul className="sm:p-5 flex flex-col gap-5 sm:gap-7 text-sm font-light">
                    {/* <li>Transaction ID  : {transactionData[0].id}</li> */}
                    <li className="flex sm:flex-col items-start gap-5">
                      Particulars :{" "}
                      <span className="sm:text-[16px] font-bold">
                        {transactionData[0]?.transactionDetails.particulars}{" "}
                      </span>
                    </li>

                    <li>
                      Transaction Date :{" "}
                      <span className=" sm:text-[16px] font-bold">
                        {transactionData[0]?.transactionDetails.date}{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-3">
                      <span> Ledger/ Attachments : </span>
                      <a
                        href={transactionData[0]?.ledgerUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IoDocumentAttachOutline className="text-2xl sm:text-3xl hover:scale-105 cursor-pointer" />
                      </a>
                    </li>
                  </ul>
                </section>

                <section className="p-5 shadow-sm w-full sm:w-[18vw] mt-5 sm:mt-0 bg-white">
                  <h2 className="font-bold underline text-green-600">GST Information</h2>
                  <ul className="py-5 flex flex-col gap-5 text-sm font-light">
                    <li>
                      Sender GST :{" "}
                      <span className="sm:text-[16px] font-bold">
                        {transactionData[0]?.uploadedBy.gst}{" "}
                      </span>{" "}
                    </li>
                    <li>
                      Receiver's GST :{" "}
                      <span className="sm:text-[16px] font-bold">
                        {transactionData[0]?.receivedBy.gst}
                      </span>
                    </li>
                  </ul>
                </section>
              </section>



              <section className="p-5 mt-10 bg-white shadow-md">
                <h2 className="font-bold underline text-green-600">Confirmations</h2>
                <table className="border sm:p-3 m-5 sm:w-[500px]">
                  <thead className="border">
                    {/* <td className="text-sm p-2 font-semibold border">Sender</td> */}
                    <td className="font-thin text-sm p-2 sm:w-[250px]">
                      Sent & Confirmed by <h2 className="font-bold">{transactionData[0]?.uploadedBy.name}</h2>
                      {/* Sent on {transactionData[0]?.timestamp.split("T")[0]} */}
                    </td>
                    <td className="border text-center p-2  w-[100px] px-10">
                      {transactionData[0]?.confirmations.sender == "success" ? (
                        <FaCheckCircle className="text-green-500 text-2xl" />
                      ) : (
                        <IoMdCloseCircleOutline className="text-red-500 text-3xl" />
                      )}
                    </td>
                  </thead>
                  <tr>
                    {/* <td className="text-sm p-2 font-semibold border">
                      Receiver
                    </td> */}
                    <td className="font-thin text-sm p-2 w-[250px]">
                      {transactionData[0]?.confirmations.receiver ==
                      "success" ? (
                        <>Confirmed by <h2 className="font-bold">{transactionData[0]?.receivedBy.gst}</h2></>
                      ) : (
                        <>Not Confirmed by <h2 className="font-bold">{transactionData[0]?.receivedBy.gst}</h2></>
                      )}
                    </td>
                    <td className="border text-center p-2 w-[100px] px-10">
                      {transactionData[0]?.confirmations.receiver ==
                      "success" ? (
                        <FaCheckCircle className="text-green-500 text-2xl" />
                      ) : (
                        <IoMdCloseCircleOutline className="text-red-500 text-3xl" />
                      )}
                    </td>
                  </tr>
                </table>

                <hr />

              {
                transactionData[1]?.gst === transactionData[0]?.receivedBy.gst && transactionData[0]?.confirmations.receiver === "pending" ? (
                <section className="p-3 mt-4 flex gap-14">
                <h2 className="sm:text-lg font-semibold"> You have not confirmed the Transaction yet !</h2>
                <button className="border-2 sm:border border-green-500 transition-all hover:bg-green-500 hover:text-white p-3 sm:p-2 text-xs rounded-md"
                  onClick={()=>handleConfirmation()}
                >Click to Confirm</button>
                </section>
                ) : 
                <>

                </>

              }
              

              </section>

              
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Transaction;
