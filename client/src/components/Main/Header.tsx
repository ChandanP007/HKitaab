import { FaSearch } from "react-icons/fa";
import { useState } from "react";
// import Select from 'react-select'

import { useActiveActionContext } from "../../context/siteContext";
import { generateDp } from "../../utils/dpGenerator";
import { IoMdClose } from "react-icons/io";
import { useLogout } from "../../hooks/userAuth/useLogout";
import { searchBusiness } from "../../hooks/userActions/searchBusiness";
import { CiLogout } from "react-icons/ci";

const Header = (loggedUser: any) => {
  //states
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const { isDialogOpen, clientDomain } = useActiveActionContext();
  const [showResultsDialog, setResultsDialog] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any>([]);

  const bgDrop = isDialogOpen ? "blur-sm" : "";
  const username = loggedUser.loggedUser.name;
  const firstname = username.split(" ")[0];
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
      {/* Large screens */}
      <main>
        {/* Desktop View  */}
        <header className={`hidden sm:block bg-gray-100 text-black shadow-sm p-4 text-sm sticky w-full z-10 ${bgDrop}`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-md">HisaabKitaab</h1>

            <div className="flex gap-3 text-black">
              <div className="flex items-center">
                <input
                  className="border-2 w-[40vw] p-2 outline-none text-black"
                  type="text"
                  placeholder="Search for businesses..."
                  onChange={handleBusinessSearch}
                />
                <button className="bg-gray-400 hover:bg-gray-500 p-[13.2px] text-white">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Search Businesses */}
            <dialog
              open={showResultsDialog}
              className="mt-56 w-[40vw] bg-gray-100"
            >
              {/* listing the search results of business */}
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

              {/* </div> */}
            </dialog>

            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => {
                showDialog ? setShowDialog(false) : setShowDialog(true);
              }}
            >
              <img src={dp} className="w-12 h-12 rounded-full text-white" />
              <h1 className="font-thin flex flex-col">
                Welcome,<span className="font-semibold"> {username}</span>
              </h1>
            </div>

            {/* User Profile Dialog  */}
            <dialog
              open={showDialog}
              className="left-[70vw] top-20 h-[400px] w-[300px] p-2 border-2"
            >
              <section className="flex flex-col justify-center">
                <div className="flex items-end justify-end ">
                  <IoMdClose
                    className="text-2xl cursor-pointer opacity-50 hover:opacity-100"
                    onClick={() => setShowDialog(false)}
                  />
                </div>
                <div className="flex items-center justify-center flex-col p-4 gap-3">
                  {/* <h1 className="text-3xl"><FaUser/></h1> */}
                  <img src={dp} className="w-20 h-20 rounded-full" />
                  <h1 className="text-lg">
                    Hey,{" "}
                    <span className="font-semibold text-lg">{firstname}</span>
                  </h1>
                </div>
                <hr></hr>
                <section className="p-3">
                  <ul className="flex flex-col gap-3 ">
                    <li
                      onClick={() => (window.location.href = "/me/profile")}
                      className="hover:underline hover:font-semibold cursor-pointer p-1"
                    >
                      Profile
                    </li>
                    <li className="hover:underline hover:font-semibold cursor-pointer p-1">
                      Settings
                    </li>
                    <li className="hover:underline hover:font-semibold cursor-pointer p-1">
                      Help
                    </li>
                    <li className="hover:underline hover:font-semibold cursor-pointer p-1">
                      Feedback
                    </li>
                    <li
                      className="hover:underline hover:font-semibold cursor-pointer p-1"
                      onClick={() => useLogout(clientDomain)}
                    >
                      Logout
                    </li>
                  </ul>
                </section>
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
            <CiLogout className="text-3xl text-white" onClick={() => useLogout(clientDomain)}/>
        </header>
              
      </main>
    </>
  );
};

export default Header;
