// import React from 'react'

import { FaFile, FaPlusCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Suspense, useState } from "react";
import { addTransaction } from "../../hooks/userActions/addTransaction";
import { useActiveActionContext } from "../../context/siteContext";
import { generateId } from "../../utils/generateId";

type CardProps = {
  gst: string;
  btype?: string;
};

const MyDashboard = ({ gst, btype }: CardProps) => {
  const { clientDomain, user } = useActiveActionContext();

  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [pdf, setPdf] = useState<any>("");

  //values
  const [visibility, setVisibility] = useState<any>({
    addtransaction: "hidden",
    pdfview: "hidden",
  });
  const [buttonTexture, setButtonTexture] = useState<any>({
    addtransaction: "",
    sendMessage: "",
    generateReports: "",
  });
  const [transaction, setTransaction] = useState<any>({
    particulars: "",
    id: generateId(10).toUpperCase(),
    date: "",
    pdf: "",
    gst: gst,
  });
  const receiver = {
    gst,
    btype,
  };

  //handlers
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setPdf(file);
    transaction.pdf = file;

    //create pdf object url to preview the pdf
    const pdfUrl = URL.createObjectURL(file);
    setPdfUrl(pdfUrl);
    setVisibility({ ...visibility, pdfview: "" });
    console.log(file);
  };

  const handleSubmit = () => {
    //check if the user has uploaded the pdf file and the transaction details
    if (
      !transaction.pdf ||
      !transaction.particulars ||
      !transaction.id ||
      !transaction.date
    ) {
      alert("Please fill all the fields and upload the pdf file");
      return;
    }
    // console.log(transaction);

    addTransaction(transaction, pdf, clientDomain, user.user, receiver);
    
  };

  return (
    <>
      <main className="hidden sm:flex gap-5">
        <div>
          <h2 className="font-semibold text-lg my-5">
            Create/Manage Resources
          </h2>

          {/* Business Actions navigation */}
          <div className="flex gap-3">
            <button
              className={`flex gap-2 p-2 border-2 rounded-md ${buttonTexture.addtransaction}`}
              onClick={() => {
                setVisibility({ ...visibility, addtransaction: "" });
                setButtonTexture({
                  ...buttonTexture,
                  addtransaction: "bg-black/50 text-white",
                  sendMessage: "",
                });
              }}
            >
              <FaPlusCircle className="text-xl" />
              New Transaction
            </button>
            <button
              className={` ${buttonTexture.sendMessage} flex gap-2 p-2 border-2 rounded-md`}
              onClick={() => {
                setVisibility({
                  ...visibility,
                  addtransaction: "hidden",
                  pdfview: "hidden",
                });
                setButtonTexture({
                  ...buttonTexture,
                  addtransaction: "",
                  sendMessage: "bg-black/50 text-white",
                });
              }}
            >
              <FaMessage className="text-xl" />
              Send Message
            </button>
            <button className="flex gap-2 p-2 border-2 rounded-md hover:bg-gray-100">
              <FaFile className="text-xl" />
              Generate Reports
            </button>
          </div>

          {/* Action view */}
          <div className={`p-5 flex gap-5 ${visibility.addtransaction}`}>
            <form className="w-[30vw]">
              <h1 className="font-thin text-2xl">Add a Transaction </h1>
              <div className="flex flex-col gap-3 p-5">
              <label htmlFor="particulars" className="text-xs text-slate-500">Transaction Details</label>
                <input
                  type="text"
                  id="particulars"
                  placeholder="Particulars"
                  value={transaction.particulars}
                  onChange={(e) =>
                    setTransaction({
                      ...transaction,
                      particulars: e.target.value,
                    })
                  }
                  className="border-2 p-2 rounded-sm outline-black/20"
                />
                <label htmlFor="transactionId" className="text-xs text-slate-500">Transaction ID</label>
                <input
                  type="text"
                  id="transactionId"
                  placeholder="Transaction ID"
                  value={transaction.id}
                  disabled
                  className="border-2 p-2 rounded-sm outline-black/20"
                />
                <label htmlFor="receiverGst" className="text-xs text-slate-500">Business GST Information</label>
                <input
                  type="text"
                  id="receiverGst"
                  placeholder="Transaction ID"
                  value={transaction.gst}
                  disabled
                  className="border-2 p-2 rounded-sm outline-black/20"
                />
                <label htmlFor="transactionDate" className="text-xs text-slate-500">Select transaction date</label>
                <input
                  type="date"
                  id="date"
                  placeholder="Date"
                  value={transaction.date}
                  onChange={(e) =>
                    setTransaction({ ...transaction, date: e.target.value })
                  }
                  className="border-2 p-2 rounded-sm outline-black/20"
                />
                <hr></hr>
                {/* upload the pdf file */}
                <label htmlFor="file">Upload Ledger</label>
                <input
                  type="file"
                  id="file"
                  placeholder="Upload PDF"
                  className="border-2 p-2 rounded-sm outline-black/20"
                  onChange={(e) => handleFileChange(e)}
                />

                <hr></hr>
                <section className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 bg-green-600 checked:border-transparent cursor-pointer"
                  />
                  I have confirmed the details and they are correct, I consent
                  to the transaction being added to the ledger.
                </section>
                <hr></hr>
                <button
                  className="p-2 bg-black/50 font-semibold transition-all hover:bg-black/60 text-white rounded-md mt-5"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Add Transaction
                </button>
              </div>
            </form>

            {/* Uploaded pdf preview */}
          </div>
        </div>

        {/* Document Preview before upload */}
        <Suspense fallback={<h1 className="text-3xl">Uploading...</h1>}>
          <div className={`w-[40vw] border-2 ${visibility.pdfview} `}>
            <h3 className="text-xl flex justify-center p-2 text-white bg-black">
              Ledger Preview{" "}
            </h3>
            {/* show the pdf preview uploaded by the user in pdf view format */}
            <embed
              src={pdfUrl}
              type="application/pdf"
              width="100%"
              height="500"
            />
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default MyDashboard;
