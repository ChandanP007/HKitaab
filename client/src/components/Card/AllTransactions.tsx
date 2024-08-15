import { useEffect, useState } from "react";
import Ledger from "./Ledger";
import { useActiveActionContext } from "../../context/siteContext";
import { getLedgers } from "../../hooks/userActions/getLedgers";
import { CiSearch } from "react-icons/ci";

const AllTransactions = ({ businessgst }: any) => {
  //states
  const { clientDomain } = useActiveActionContext();
  const [ledgersData, setAllLedgersData] = useState<any[]>([]);
  const [ledgersPending, setLedgersPending] = useState<number>(0);
  const [totalTransactions, setTotalTransactions] = useState<number>(0);

  useEffect(() => {
    getLedgers(clientDomain).then((data) => {
      setAllLedgersData(data);
      setTotalTransactions(
        data.filter((ledger: any) => ledger.receivedBy.gst === businessgst)
          .length
      );
      setLedgersPending(
        data.filter(
          (ledger: any) =>
            ledger.receivedBy.gst === businessgst &&
            ledger.confirmations.receiver === "pending"
        ).length
      );
      //setting month categories
      // let months = data.map((ledger:any) => {
      //     return ledger.month}
      // );
      //pick unique months from months and set it to allMonths
      // let uniqueMonths = [...new Set(months)];
      // setAllMonths(JSON.parse(JSON.stringify(uniqueMonths)));
    });
    // console.log(businessgst);
  }, []);

  return (
    <>
      <hr className="block sm:hidden" />

      <div className="flex justify-evenly gap-5 p-2">
        <div className="flex w-full flex-col items-center p-2 bg-gray-200 shadow-sm">
          <h1 className="text-3xl font-bold font-mono ">{totalTransactions}</h1>
          <h1 className="font-thin text-xs">Transactions</h1>
        </div>
        <div className="flex w-full flex-col items-center p-2 bg-gray-200 shadow-sm">
          <h1 className="text-3xl font-bold font-mono ">{ledgersPending}</h1>
          <h1 className="font-thin text-xs">Ledgers Pending</h1>
        </div>
      </div>

      {/* Search for a transaction or Ledger */}
      <section className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search for a transaction or Ledger"
          className="flex border-2 p-2 text-xs sm:p-3 sm:text-md my-4 w-full outline-sky-500"
          // onFocus={(e) => e.target.placeholder = ""}
        />
        <CiSearch className="block sm:hidden text-xl font-bold" />
      </section>
      <section className="overflow-y-scroll max-h-[500px] no-scrollbar select-none">


        {/* All Transactions */}
        {ledgersData.filter(
          (ledger) =>
            ledger.receivedBy.gst === businessgst ||
            ledger.uploadedBy.gst === businessgst
        ).length === 0 && (
          <div className="flex h-full justify-center items-center py-10">
            <p className="text-sm sm:text-lg font-thin">
              No transactions have been made yet.
            </p>
          </div>
        )}

        <div className="py-5">
          {/* <h2 className="sm:text-lg pb-3 font-bold">{month}</h2> */}
          <div className="flex gap-8 flex-wrap">
            {ledgersData.length > 0 &&
              ledgersData
                .filter(
                  (ledger) =>
                    ledger.receivedBy.gst === businessgst ||
                    ledger.uploadedBy.gst === businessgst
                ).reverse()
                .map((ledger) => {
                  return <Ledger key={ledger.id} {...ledger} />;
                })}

            {/* <Ledger key={ledger.id} {...ledger} /> */}
          </div>
        </div>

        {/*
         {allMonths.slice().reverse().map((month) => {
          return (
            <div className="py-5" key={month}>
              <div className="flex gap-5 overflow-x-scroll no-scrollbar">

                {ledgersData.filter((ledger) => ledger.receivedBy.gst === businessgst).map((ledger) => {
                  if (ledger.month === month)
                    return <Ledger key={ledger.id} {...ledger} />;
                })}

              </div>
            </div>
          );
        })} */}
      </section>
    </>
  );
};

export default AllTransactions;
