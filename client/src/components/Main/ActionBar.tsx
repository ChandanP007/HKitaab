//assets
import { useActiveActionContext } from '../../context/siteContext'
import { FaTruckMoving } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";

//libs
const ActionBar = () => {

  const {Selected, setSelected, isDialogOpen } = useActiveActionContext();

  const handleActionClick= (item: string):any => {
    // handle the click event
    // console.log(item);
    setSelected({
      buyers: false,
      sellers: false,
      transporters: false,
      agents: false,
      services: false,
      [item]: true
    })
  }

  const bgDrop = isDialogOpen ? "blur-sm" : "";


  return (
    // Larger Screens
    <main>
      <div className={`flex justify-center py-10 font-semibold ${bgDrop}`}>
        <div className="flex gap-5 justify-center">
          <div className={`flex flex-col justify-center w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.buyers ? "bg-slate-200" : ""}`}
              onClick={()=>handleActionClick("buyers")}
          >
            <PiUsersThreeFill className="text-6xl text-slate-800" />
            <h3>Buyers</h3>
          </div>
          <div className={`flex flex-col justify-center w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.sellers ? "bg-slate-200" : ""}`} 
              onClick={()=>handleActionClick("sellers")}>
            <AiFillShop className="text-6xl text-slate-800" />
            <h3>Sellers</h3>
          </div>
          <div className={`flex flex-col justify-center w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.transporters? "bg-slate-200": ""}`}
              onClick={()=>handleActionClick("transporters")}
          >
            <FaTruckMoving className="text-6xl text-slate-800" />
            <h3>Transporters</h3>
          </div>
          <div className={`flex flex-col justify-center w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.agents? "bg-slate-200" : ""}`}
              onClick={()=>handleActionClick("agents")}
          >
            <IoBriefcase className="text-6xl text-slate-800" />
            <h3>Agents</h3>
          </div>
          <div className={`flex flex-col justify-center w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.services? "bg-slate-200" : ""}`}
              onClick={()=>handleActionClick("services")}
          >
            <FaGears className="text-6xl text-slate-800" />
            <h3>Services</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ActionBar;
