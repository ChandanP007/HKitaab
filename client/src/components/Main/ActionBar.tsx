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
      {/* <h1 className='block sm:hidden text-md font-bold p-4'>Categories</h1> */}
      <div className={`flex justify-center sm:py-10 font-semibold ${bgDrop}`}>
        <div className="flex flex-wrap w-[100vw] gap-2 sm:gap-5 sm:justify-center px-3 sm:px-0">
          <div className={`flex flex-col justify-center w-[100px] sm:w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.buyers ? "bg-slate-200" : ""}`}
              onClick={()=>handleActionClick("buyers")}
          >
            <PiUsersThreeFill className="text-4xl sm:text-6xl text-slate-800" />
            <h3 className='text-[11px] sm:text-lg'>Buyers</h3>
          </div>
          <div className={`flex flex-col justify-center w-[100px] sm:w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.sellers ? "bg-slate-200" : ""}`} 
              onClick={()=>handleActionClick("sellers")}>
            <AiFillShop className="text-4xl sm:text-6xl text-slate-800" />
            <h3 className='text-[11px] sm:text-lg'>Sellers</h3>
          </div>
          <div className={`flex flex-col justify-center w-[100px] sm:w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.transporters? "bg-slate-200": ""}`}
              onClick={()=>handleActionClick("transporters")}
          >
            <FaTruckMoving className="text-4xl sm:text-6xl text-slate-800" />
            <h3 className='text-[11px] sm:text-lg'>Transporters</h3>
          </div>
          <div className={`flex flex-col justify-center w-[100px] sm:w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.agents? "bg-slate-200" : ""}`}
              onClick={()=>handleActionClick("agents")}
          >
            <IoBriefcase className="text-4xl sm:text-6xl text-slate-800" />
            <h3 className='text-[11px] sm:text-lg'>Agents</h3>
          </div>
          <div className={`flex flex-col justify-center w-[100px] sm:w-[200px] items-center cursor-pointer border-2 p-2 rounded-md ${Selected.services? "bg-slate-200" : ""}`}
              onClick={()=>handleActionClick("services")}
          >
            <FaGears className="text-4xl sm:text-6xl text-slate-800" />
            <h3 className='text-[11px] sm:text-lg'>Services</h3>
          </div>
        </div>
      </div>
      <h1 className='block sm:hidden text-md font-bold p-4 mt-4'>Clients</h1>
    </main>
  );
};

export default ActionBar;
