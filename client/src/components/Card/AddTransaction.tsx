
import { Suspense, useState } from "react";
import { addTransaction } from "../../hooks/userActions/addTransaction";
import { useActiveActionContext } from "../../context/siteContext";
import { generateId } from "../../utils/generateId";

type CardProps = {
  gst: string;
  btype?: string;
};

const AddTransaction = ({ gst, btype }: CardProps) => {
  const { clientDomain, user } = useActiveActionContext();

  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [pdf, setPdf] = useState<any>("");
  const [submission, setSubmission] = useState<boolean>(false);

  //values
  const [visibility, setVisibility] = useState<any>({
    addtransaction: "flex",
    pdfview: "hidden",
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
    setSubmission(true);
    addTransaction(transaction, pdf, clientDomain, user.user, receiver);
    
  };

  return (
    <>
      <main className="sm:flex gap-5">
        <div>
         

          {/* Action view */}
          <div className={`sm:p-5 flex gap-5 ${visibility.addtransaction}`}>
            <form className="sm:w-[30vw]">
              <h1 className="font-bold text-lg sm:text-2xl">Add a Transaction </h1>
              <div className="flex flex-col gap-3 mt-5 sm:mt-0 sm:p-5">
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
                  className="border-2 p-2 rounded-sm outline-black/20 text-sm"
                />
                <label htmlFor="transactionId" className="text-xs text-slate-500">Transaction ID</label>
                <input
                  type="text"
                  id="transactionId"
                  placeholder="Transaction ID"
                  value={transaction.id}
                  disabled
                  className="border-2 p-2 rounded-sm outline-black/20 font-semibold text-sm"
                />
                <label htmlFor="receiverGst" className="text-xs text-slate-500">Business GST </label>
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
                  className="border-2 p-2 text-xs rounded-sm outline-black/20"
                />
                <hr></hr>
                {/* upload the pdf file */}
                <label htmlFor="file" className="text-sm font-semibold">Upload Ledger</label>
                <input
                  type="file"
                  id="file"
                  className="border-2 p-2 rounded-sm outline-black/20 text-xs"
                  onChange={(e) => handleFileChange(e)}
                />

                <hr></hr>
                <section className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 bg-green-600 checked:border-transparent cursor-pointer "
                  />
                  <p className="text-xs ">
                    I have confirmed the details and they are correct, I consent
                    to the transaction being added to the ledger.
                  </p>
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
        {
          !submission ? (
          <div className={`hidden sm:flex w-[40vw] border-2 ${visibility.pdfview} `}>
            {/* <h3 className="text-xl flex justify-center p-2 text-white bg-black">
              Ledger Preview{" "}
            </h3> */}
            {/* show the pdf preview uploaded by the user in pdf view format */}
            <embed
              src={pdfUrl}
              type="application/pdf"
              width="100%"

            />
          </div>
          ) : 
          <>
            {/* progress spinner  */}
            <div className="flex mt-[20%] ml-[10vw] flex-col justify-center items-center w-full h-full ">
              {/* simple spinner */}
              <svg
                className="animate-spin h-12 w-12 text-green-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              > 
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-100"
                  fill="currentColor"
                  d="M4 12a8 8 8 018-8V0c-4.418 0-11 3.582-8 8z"
                ></path>  
              </svg>

              <h2 className="text-md font-semibold mt-3">Transaction in Process</h2>
            </div>
          </>
        }
        
        
      </main>
    </>
  );
};

export default AddTransaction;
