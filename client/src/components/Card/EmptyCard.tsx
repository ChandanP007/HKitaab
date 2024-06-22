import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { addRelation } from "../../hooks/userActions/addRelation";
import { useActiveActionContext } from "../../context/siteContext";
import { searchBusiness } from "../../hooks/userActions/searchBusiness";



const EmptyCard = () => {
  const { clientDomain, isDialogOpen, setDialogOpen} = useActiveActionContext();
  const [addBusinessModal, setAddBusinessModal] = useState<boolean>(false);
  const [searchBusinessModal, setSearchBusinessModal] = useState<boolean>(false);
  const [businessLogo, setBusinessLogo] = useState<string>("");

  const [searchResults, setSearchResults] = useState<any>([]);
  const [searchSelected, setSearchSelected] = useState<boolean>(false);
  const [businessTitle, setBusinessTitle] = useState<string>("");

  const dheight = searchSelected ? "sm:h-[50vh]" : "sm:h-[70vh]";
  

  const [newBusiness, setNewBusiness] = useState<any>({
    name: "",
    gstno: "",
    address: "",
    businessType: "buyer",
  });

  //handlers
  const handleUserSelectedSearch = (e: any) => {
    setSearchSelected(true);
      const selectedBusiness = searchResults.find((result: any) => result.name === e.target.innerText);
      // console.log(selectedBusiness)
      setNewBusiness(
        {
          name: selectedBusiness.name,
          gstno: selectedBusiness.gst,
          address: selectedBusiness.address,
          businessType: selectedBusiness.type,
        } 
      );
      setBusinessLogo(selectedBusiness.thumbnail);
      // addABusinessType = selectedBusiness.businessType;
      setBusinessTitle(selectedBusiness.name);
      setSearchBusinessModal(false);
  }
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setBusinessLogo(URL.createObjectURL(file));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(newBusiness);
    addRelation(newBusiness, clientDomain);
  };
  const handleSearch = async(e: any) => {
    e.target.value === "" ? setSearchBusinessModal(false) : setSearchBusinessModal(true);

    const searchQuery = e.target.value;
    const res = await searchBusiness(searchQuery , clientDomain);
    console.log(res);
    (!res) ? setSearchResults([]) : setSearchResults(res);
  }

  const bgDrop = isDialogOpen ? "blur-sm" : "";


  return (
    <>
      <div
        className={`flex sm:flex-col border-2 hover:shadow-md w-[90px] justify-evenly h-[50px] sm:w-[225px] sm:h-[250px] items-center sm:justify-center cursor-pointer ${bgDrop}`}
        onClick={() => {
          setAddBusinessModal(true); setDialogOpen(true)
        }}
      >
        <FaPlus className="sm:text-5xl text-black/70" />
        <button className="font-thin sm:p-5">Add</button>
      </div>

{/* add business form */}
      <dialog
        open={addBusinessModal}
        className={` w-full  sm:w-[50vw] ${dheight} top-24 sm:top-32 border-2 bg-gray-100 detail-modal transition-all z-20`}
      >
        <div className="">
          <div className="flex justify-between border-2 p-4 font-thin">
            <h1 className="font-semibold">
              ADD A BUSINESS
            </h1>

            <IoClose
              className="text-2xl text-black/50 hover:text-black cursor-pointer"
              onClick={() => {
                setAddBusinessModal(false); 
                setDialogOpen(false); 
                setSearchSelected(false);
                setNewBusiness({
                  name: "",
                  gstno: "",
                  address: "",
                  businessType: "buyer",
                });
                setBusinessLogo("");
                setBusinessTitle("");
                
              }}
            />
          </div>

          <section className="p-4">
            <input
              type="text"
              placeholder= "Search for a business"
              className="border-2 w-full p-2 font-thin text-sm outline-sky-500"
              onChange={handleSearch}
              
            />
            <dialog open={searchBusinessModal} className="w-full border-[1px] transition-all">
              <div className="flex flex-col gap-2 p-2">
                <h3 className="font-thin text-sm">Search results : </h3>

                {/* listing the search results of business */}
                {
                    searchResults.map((result: any) => (
                      <div className="flex items-center justify-between p-2 border-2 gap-2 cursor-pointer hover:bg-gray-50 " key={result.id} onClick={handleUserSelectedSearch}>
                        <div className="flex gap-5 items-center">
                          <img
                            src={result.thumbnail ? result.thumbnail : "https://via.placeholder.com/50"}
                            alt=""
                            className="w-[50px] h-[50px] object-cover rounded-full"
                            />
                          <p className="font-semibold">{result.name}</p>
                          </div>
                          <div>
                            <p className="text-sm font-light bg-slate-200 rounded-md text-black px-2">GST : {result.gst}</p>
                          </div>
                      </div>
                    ))
                }


              </div>
            </dialog>
          </section>
          <hr></hr>

          <section className="p-3 flex flex-col-reverse sm:flex-row">
            <form className="flex flex-col gap-3 p-3 w-full sm:w-[65%]">
              <h3 className="font-thin text-sm">Business details : </h3>
              <input
                type="text"
                placeholder="Business name"
                value={newBusiness.name}
                className="border-2 w-full p-2 font-thin text-sm outline-sky-500"
                onChange={(e) =>
                  setNewBusiness({ ...newBusiness, name: e.target.value })
                }
                disabled={searchSelected}
              />
              <input
                type="text"
                placeholder="GSTIN"
                value={newBusiness.gstno}
                className="border-2 w-full p-2 font-thin text-sm outline-sky-500"
                onChange={(e) =>
                  setNewBusiness({ ...newBusiness, gstno: e.target.value })
                }
                disabled={searchSelected}
              />
              <input
                type="text"
                placeholder="Address"
                value={newBusiness.address}
                className="border-2 w-full p-2 font-thin text-sm outline-sky-500"
                onChange={(e) =>
                  setNewBusiness({ ...newBusiness, address: e.target.value })
                }
                disabled={searchSelected}
              />
              <hr></hr>

              {
                searchSelected ? (
                  <></>
                ) : <>
                  <label htmlFor="select" className="text-sm">
                Select the business type :{" "}
              </label>
              <select
                className="border-2 w-full p-2 font-thin text-sm outline-sky-500"
                name="select"
                value={newBusiness.businessType}
                onChange={(e) =>
                  setNewBusiness({
                    ...newBusiness,
                    businessType: e.target.value,
                  })
                }
              >

                <option
                  value="buyer"
                  // selected={addABusinessType === "buyer" ? true : false}
                >
                  Buyer
                </option>
                <option
                  value="seller"
                  // selected={addABusinessType === "seller" ? true : false}
                >
                  Seller
                </option>
                <option
                  value="transporter"
                  // selected={addABusinessType === "transporter" ? true : false}
                >
                  Transporter
                </option>
                <option
                  value="agent"
                  // selected={addABusinessType === "agent" ? true : false}
                >
                  Agent
                </option>
              </select>

              <input
                type="file"
                className="border-2 w-full p-2 font-thin text-sm outline-sky-500"
                onChange={handleFileChange}
              />
                </>}
              

              <button
                className="bg-black/80 text-white p-2 font-thin mt-2"
                onClick={handleSubmit}
              >
                Add
              </button>
            </form>

            <section className="flex flex-col items-center gap-5">
              <img
                src={ businessLogo ? businessLogo :  `https://avatar.iran.liara.run/username?username=${newBusiness.name}` 
                }
                alt=""
                className="hidden w-[300px] h-[200px] object-cover"
              />
              <p className="font-thin">{businessTitle}</p>
            </section>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default EmptyCard;
