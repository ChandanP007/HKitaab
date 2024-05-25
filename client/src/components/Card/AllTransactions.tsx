import { useEffect, useState } from "react";
// import dumLedgers from "../../utils/ledgers.json";
import Ledger from "./Ledger";
import { useActiveActionContext } from "../../context/siteContext";
import { getLedgers } from "../../hooks/userActions/getLedgers";


const AllTransactions = ({businessgst}: any) => {
  //states
  const { clientDomain } = useActiveActionContext();

  // const [allMonths, setAllMonths] = useState<string[]>([]);
  const [allMonths2, setAllMonths2] = useState<string[]>([]);
  // const [allLedgers, setAllLedgers] = useState<any[]>([]);
  const [ledgersData, setAllLedgersData] = useState<any[]>([]);
  

  useEffect(() => {
      getLedgers(clientDomain).then((data) => {
      setAllLedgersData(data);
      console.log(data);
      
      //setting month categories
      let months = data.map((ledger:any) => {
        if(ledger.receivedBy.gst === businessgst)  
          return ledger.month}
      );
      //pick unique months from months and set it to allMonths
      let uniqueMonths = [...new Set(months)];
      setAllMonths2(JSON.parse(JSON.stringify(uniqueMonths)));
    });
      // console.log(businessgst);

    
  }, []);


  return (
    <>
      {/* Search for a transaction or Ledger */}
      <section>
        <input
          type="text"
          placeholder="Search for a transaction or Ledger"
          className="border-2 p-3 text-md my-4 w-full outline-sky-500"
          // onFocus={(e) => e.target.placeholder = ""}
        />
      </section>
      <section className="overflow-y-scroll max-h-[450px] no-scrollbar select-none">
        {/* All Transactions */}
        
        {allMonths2.map((month) => {
          return (
            <div className="py-5" key={month}>
              <h2 className="text-lg pb-3 font-bold">{month}</h2>
              <div className="flex gap-5 overflow-x-scroll no-scrollbar">
                {ledgersData.map((ledger) => {
                  if(ledger.receivedBy.gst === businessgst)
                    if (ledger.month === month){
                        return <Ledger key={ledger.id} {...ledger} />;

                    }
                })}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AllTransactions;
