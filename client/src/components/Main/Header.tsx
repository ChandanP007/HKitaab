/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useActiveActionContext } from "../../context/siteContext";
import { generateDp } from "../../utils/dpGenerator";
import { IoMdClose } from "react-icons/io";
import { useLogout } from "../../hooks/userAuth/useLogout";
import { searchBusiness } from "../../hooks/userActions/searchBusiness";
import { CiBellOn, CiLogout } from "react-icons/ci";
import {  FaUser } from "react-icons/fa";

const Header = (loggedUser: any) => {
  //states
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [showRemindersDialog, setShowRemindersDialog] = useState<boolean>(false);
  const { isDialogOpen, clientDomain } = useActiveActionContext();
  const [showResultsDialog, setResultsDialog] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any>([]);

  const bgDrop = isDialogOpen ? "blur-sm" : "bg-white";
  const username = loggedUser.loggedUser.name;
  const dp = loggedUser.loggedUser.thumbnail
    ? loggedUser.loggedUser.thumbnail
    : generateDp(username, true);

  //handlers
  const handleBusinessSearch = async (e: any) => {
    e.target.value === "" ? setResultsDialog(false) : setResultsDialog(true);

    const searchQuery = e.target.value;
    const res = await searchBusiness(searchQuery, clientDomain);
    !res ? setSearchResults([]) : setSearchResults(res);
  };

  return (
    <>
      <main>
        {/* Desktop View  */}
        <header className={` hidden sm:block p-5 rounded-b-xl shadow-sm z-10 ${bgDrop}`}>
          <div className="flex justify-evenly items-center">

            <div className="">
              <h1 className="text-xl font-semibold text-black">HisaabKitaab</h1>
              <p className="text-xs -mt-1">hisaabkitaab.ai</p>
            </div>


            <div className="flex gap-3 text-black">
              <div className="flex items-center">
                <input
                  className="border w-[40vw] p-2 outline-none text-black text-sm rounded-lg "
                  type="text"
                  placeholder="Search for a businesses..."
                  onChange={handleBusinessSearch}
                />
              </div>
            </div>

            <div className="flex gap-10 items-center cursor-pointer">
              

              <div className="flex gap-2 items-center leading-5" onClick={() => {
                    showDialog ? setShowDialog(false) : setShowDialog(true);
                  }}>
                <h1 className="font-thin text-right flex flex-col">
                  Welcome,<span className="font-semibold"> {username}</span>
                </h1>
                <img
                  src={dp}
                  className="w-12 h-12 rounded-full text-white"
                  
                />
              </div>

              {/* Reminders */}
              <div>
                <CiBellOn className="text-3xl cursor-pointer" onClick={() => {
                    showRemindersDialog ? setShowRemindersDialog(false) : setShowRemindersDialog(true);
                  }} />
              </div>

            </div>

            <dialog
              open={showResultsDialog}
              className="mt-56 w-[40vw] bg-gray-100"
            >
              {searchResults.map((result: any) => (
                <div
                  className="flex items-center justify-between p-2 gap-2 cursor-pointer hover:bg-gray-50 "
                  key={result.id}
                >
                  <div className="flex gap-5 items-center">
                    <img
                      src={
                        result.thumbnail
                          ? result.thumbnail
                          : "https://via.placeholder.com/50"
                      }
                      alt=""
                      className="w-[50px] h-[50px] object-cover rounded-full"
                    />
                    <p className="font-semibold">{result.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-light bg-slate-200 rounded-md text-black px-2">
                      GST : {result.gst}
                    </p>
                  </div>
                </div>
              ))}
            </dialog>

            {/* User Profile Dialog  */}
            <dialog
              open={showDialog}
              className="left-[60vw] top-24  w-[300px] p-2 rounded-lg bg-white shadow-md transition-all"
            >
              <section className="flex flex-col justify-center">
                <div className="flex items-end justify-end ">
                  <IoMdClose
                    className="text-2xl cursor-pointer opacity-50 hover:opacity-100"
                    onClick={() => setShowDialog(false)}
                  />
                </div>
                <div className="flex items-center justify-center flex-col p-4 gap-3">
                  <img src={dp} className="w-20 h-20 rounded-full" />
                  <h1 className="text-lg">
                    Hi,
                    <span className="font-semibold text-lg "> {username}</span>
                  </h1>
                </div>
                <hr></hr>
                <section className="py-2">
                  <ul className="flex flex-col gap-3 ">
                    <li
                      onClick={() => (window.location.href = "/me/profile")}
                      className="cursor-pointer"
                    >
                      <div className="flex gap-2 items-center transition-all hover:bg-gray-200 p-2 rounded-md">
                        <FaUser />
                        <p>Account Details</p>
                      </div>
                    </li>
                    <li
                      className="cursor-pointer p-1"
                      onClick={() => useLogout(clientDomain)}
                    >
                      <div className="flex gap-2 items-center transition-all hover:bg-gray-200 p-2 rounded-md">
                        <CiLogout />
                        <p>Logout</p>
                      </div>
                    </li>
                  </ul>
                </section>
              </section>
            </dialog>

            <dialog
              open={showRemindersDialog}
              className="left-[63vw] top-24 w-[300px] p-2 rounded-lg bg-white shadow-md transition-all"
            >
              <section className="flex flex-col justify-center">
                <div className="flex items-end justify-end ">
                  <IoMdClose
                    className="text-2xl cursor-pointer opacity-50 hover:opacity-100"
                    onClick={() => setShowRemindersDialog(false)}
                  />
                </div>
                <div className="flex items-center justify-center flex-col p-4 gap-3">
                    <p className="text-slate-400">No Reminders </p>
                </div>
                
              </section>
            </dialog>


          </div>
        </header>
       

        {/* Mobile View */}
        <header className="flex sticky w-full top-0 z-10 justify-between shadow-lg items-center sm:hidden p-5 bg-black text-white">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => (window.location.href = "/me/profile")}
          >
            <img src={dp} className="w-12 h-12 rounded-full text-white" />
            <h1 className="font-thin flex flex-col">
              Welcome,<span className="font-semibold"> {username}</span>
            </h1>
          </div>
          <CiLogout
            className="text-3xl text-white"
            onClick={() => useLogout(clientDomain)}
          />
        </header>
      </main>
    </>
  );
};

export default Header;
