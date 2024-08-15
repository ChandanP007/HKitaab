import { useEffect, useState } from "react";
import { getTransaction } from "../../hooks/userActions/getTransaction";
import { useActiveActionContext } from "../../context/siteContext";
import { useParams } from "react-router-dom";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

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

  return (
    <>
      <main className="flex justify-center">
        <div className="p-3 w-[50vw] h-[80vh] bg-gray-50 border-dotted border-4 shadow-">
          {/* Top section  */}
          <section className="flex flex-col p-5">
            <h1 className="font-semibold text-2xl ">HisaabKitaab.ai</h1>
            <p className="font-light text-sm">
              Intelligent ledger management and Shaping Business Transactions
            </p>
          </section>

          <hr className="border-1 border-black" />

          {transactionData && (
            <>
              <section className="flex justify-between">
                <section className="p-5 mt-10">
                  <h2 className="font-bold underline">Transaction Summary</h2>
                  <ul className="p-5 flex flex-col gap-7 text-sm font-light">
                    {/* <li>Transaction ID  : {transactionData[0].id}</li> */}
                    <li className="flex flex-col items-start gap-5">
                      Particulars :{" "}
                      <span className="font-mono text-[16px] font-semibold text-gray-500">
                        {transactionData[0]?.transactionDetails.particulars}{" "}
                      </span>
                    </li>

                    <li>
                      Transaction Date :{" "}
                      <span className="font-mono text-[16px] font-semibold text-gray-500">
                        {transactionData[0]?.transactionDetails.date}{" "}
                      </span>
                    </li>

                    <li className="flex gap-3 items-center">
                      <span> Ledger/ Attachements : </span>
                      <a
                        href={transactionData[0]?.ledgerUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IoDocumentAttachOutline className="text-4xl text-sky-400 hover:scale-105 cursor-pointer" />
                      </a>
                    </li>
                  </ul>
                </section>

                <section className="p-5 mt-10 mr-20">
                  <h2 className="font-bold underline">GST Information</h2>
                  <ul className="py-5 flex flex-col gap-5 text-sm font-light">
                    <li>
                      Sender GST :{" "}
                      <span className="font-mono text-[16px] font-semibold text-gray-500">
                        {transactionData[0]?.uploadedBy.gst}{" "}
                      </span>{" "}
                    </li>
                    <li>
                      Receiver's GST :{" "}
                      <span className="font-mono text-[16px] font-semibold text-gray-500">
                        {transactionData[0]?.receivedBy.gst}
                      </span>
                    </li>
                  </ul>
                </section>
              </section>

              <hr />

              <section className="p-5 mt-10">
                <h2 className="font-bold underline">Confirmations</h2>
                <table className="border p-3 m-5 w-[500px]">
                  <tr className="border">
                    <td className="text-sm p-2 font-semibold border">Sender</td>
                    <td className="font-thin text-sm p-2 w-[250px]">
                      Sent on {transactionData[0]?.timestamp.split("T")[0]}
                    </td>
                    <td className="border text-center p-2  w-[100px] px-10">
                      {transactionData[0]?.confirmations.sender == "success" ? (
                        <FaCheckCircle className="text-green-500 text-2xl" />
                      ) : (
                        <IoMdCloseCircleOutline className="text-red-500 text-3xl" />
                      )}
                    </td>
                    
                  </tr>
                  <tr>
                    <td className="text-sm p-2 font-semibold border">
                      Receiver
                    </td>
                    <td>
                      
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
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Transaction;
