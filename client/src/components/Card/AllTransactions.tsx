import { useEffect, useState } from "react";
import Ledger from "./Ledger";
import { useActiveActionContext } from "../../context/siteContext";
import { getLedgers } from "../../hooks/userActions/getLedgers";
import { CiSearch } from "react-icons/ci";

// Define the types for the ledger structure
interface LedgerData {
  id: string;
  receivedBy: {
    gst: string;
  };
  uploadedBy: {
    gst: string;
  };
  confirmations: {
    receiver: string;
  };
}

interface AllTransactionsProps {
  businessgst: string;
}

const AllTransactions = ({ businessgst }: AllTransactionsProps) => {
  const { clientDomain } = useActiveActionContext();

  const [ledgersData, setAllLedgersData] = useState<LedgerData[]>([]);
  const [ledgersPending, setLedgersPending] = useState<number>(0);
  const [totalTransactions, setTotalTransactions] = useState<number>(0);
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [showTransactionMeter, setShowTransactionMeter] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLedgers(clientDomain);
        
        // Ensure data matches the expected type
        if (Array.isArray(data)) {
          setAllLedgersData(data);

          // Calculate total transactions
          const filteredTransactions = data.filter(
            (ledger) =>
              ledger.receivedBy.gst === businessgst || ledger.uploadedBy.gst === businessgst
          );

          setTotalTransactions(filteredTransactions.length);

          // Calculate pending ledgers
          const pendingLedgers = data.filter(
            (ledger) =>
              (ledger.uploadedBy.gst === businessgst || ledger.receivedBy.gst === businessgst) &&
              ledger.confirmations.receiver === "pending"
          );

          setLedgersPending(pendingLedgers.length);
        }
      } catch (error) {
        console.error("Failed to fetch ledgers:", error);
      }

      // Show the transaction meter if no search filter is applied
      if (searchFilter === "") setShowTransactionMeter(true);
    };

    fetchData();
  }, [clientDomain, businessgst, searchFilter]);

  return (
    <>
      <hr className="block sm:hidden" />
      {showTransactionMeter && (
        <div className="flex justify-evenly gap-5 p-2 transition-all">
          <div className="flex w-full flex-col items-center p-2 bg-gray-200 shadow-sm">
            <h1 className="text-3xl font-bold font-mono">{totalTransactions}</h1>
            <h1 className="font-thin text-xs">Transactions</h1>
          </div>
          <div className="flex w-full flex-col items-center p-2 bg-gray-200 shadow-sm">
            <h1 className="text-3xl font-bold font-mono">{ledgersPending}</h1>
            <h1 className="font-thin text-xs">Ledgers Pending</h1>
          </div>
        </div>
      )}

      {/* Search for a transaction or Ledger */}
      <section className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search for a transaction or Ledger"
          onKeyUp={(e) => {
            setSearchFilter(e.currentTarget.value);
            setShowTransactionMeter(false);
          }}
          className="flex border-2 p-2 text-xs sm:p-3 sm:text-md my-4 w-full outline-sky-500"
        />
        <CiSearch className="block sm:hidden text-xl font-bold" />
      </section>

      <section className="overflow-y-scroll max-h-[500px] no-scrollbar select-none">
        {/* All Transactions */}
        {ledgersData.filter(
          (ledger) =>
            ledger.receivedBy.gst === businessgst || ledger.uploadedBy.gst === businessgst
        ).length === 0 && (
          <div className="flex h-full justify-center items-center py-10">
            <p className="text-sm sm:text-lg font-thin">
              No transactions have been made yet.
            </p>
          </div>
        )}

        <div className="py-5">
          <div className="flex gap-8 flex-wrap">
            {ledgersData.length > 0 &&
              ledgersData
                .filter(
                  (ledger) =>
                    ledger.id.toLowerCase().includes(searchFilter.toLowerCase()) &&
                    (ledger.receivedBy.gst === businessgst || ledger.uploadedBy.gst === businessgst)
                )
                .reverse()
                .map((ledger) => {
                  return <Ledger key={ledger.id} {...ledger} />;
                })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllTransactions;
