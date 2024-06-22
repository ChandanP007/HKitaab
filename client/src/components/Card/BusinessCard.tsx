
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from 'react'
import Details from "./Descriptions";

//contexts & utils
import {useActiveActionContext} from '../../context/siteContext'
import { generateDp } from "../../utils/dpGenerator";

//type for the card
type CardProps = {
  gst : string;
  title : string;
  src: string;
  address?: string;
  email?: string;
  btype?: string;
}

const BusinessCard = ({gst,title,src,address,email,btype}:CardProps) => {
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const {isDialogOpen,setDialogOpen} = useActiveActionContext()

  src = src ? src : generateDp(title,true);
  const bgDrop = isDialogOpen ? "blur-sm" : "";

  useEffect(() => {
    setDialogOpen(showDialog)
  }
  ,[showDialog])
  
  return (
    <>
      <div 
      onClick={()=>setShowDialog(true)}
      className={`flex sm:flex-col items-center justify-start px-5 gap-2 sm:gap-0 sm:px-0 sm:justify-normal border-[1px] sm:border-2 cursor-pointer sm:rounded-lg hover:shadow-md  bg-gray-100 ${bgDrop}`}>
        
        <img src={src} className="rounded-full sm:rounded-none w-12 sm:w-72 h-12 sm:h-40 object-cover"/>
        <div className="p-3 text-sm text-left flex items-center justify-between ">
          <section>
            <h1 className="text-sm sm:text-lg truncate w-52 font-bold">{title}</h1>
            <p className="font-extralight text-[12px] sm:text-[13px] sm:pt-2">{address ? address : "address not found"}</p>
            <p className="font-medium text-[12px]">{email ? email : ""}</p>
          </section>
          <section className="hidden sm:flex flex-col items-center">
            <img src={generateDp(title,true)} alt="" className="h-10 rounded-full"/>
            <p className=" text-[8px]">Managed by</p>
          </section>
            
        </div>
          <button className="hidden sm:flex text-black text-sm p-1  hover:underline" onClick={()=>setShowDialog(true)}>View</button>
      </div>

      {/* Details Dialog */}
      <dialog open={showDialog} className='w-[95vw] min-h-[80vh] top-24 border-2 bg-gray-100 detail-modal transition-all z-20' >
        <button className="text-black p-5 text-2xl cursor-pointer float-right opacity-50 hover:opacity-100" onClick={(prev)=> {setShowDialog(!prev)}} ><IoMdClose /></button>
        <Details title={title} src={src} gst={gst} address={address} email={email} btype={btype}/>
      </dialog>
    </>
  )
}

export default BusinessCard