// imports
import { useEffect, useState } from "react";
import { generateDp } from "../../utils/dpGenerator";
import { useRegister } from "../../hooks/userAuth/useRegister";
import { Link } from "react-router-dom";
import { useActiveActionContext } from "../../context/siteContext";
import { CgCheck, CgClose, CgSearchLoading } from "react-icons/cg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const register = () => {
  const { clientDomain } = useActiveActionContext();

  //user login details
  const [user, setUser] = useState({
    user_email: "",
    user_password: "",
    confirm_password: "",
  });
  const [passwordFillStatus, setPasswordFillStatus] = useState<string>("");
  const [gstValidating, setGstValidating] = useState<boolean>(false);
  const [registering, setRegistering] = useState<boolean>(false);
  const [gstValidated, setGstValidated] = useState<boolean>(false);
  const [fillError, setFillError] = useState<string>("Verify your GST number first");

  //business details
  const [business, setBusiness] = useState<any>({
    gst: "",
    name: "",
    ownedBy: "",
    type: "",
    address: "",
    email: user.user_email,
    thumbnail: "",
  });
  let [userFile, setFile] = useState<any>(null);

  //handlers
  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
    setBusiness({
      ...business,
      thumbnail: URL.createObjectURL(e.target.files[0]),
    });
  };
  const dp = generateDp(business.name || "Business Name");

  const handleValidateGst = async () => {
    try {
      setGstValidating(true);
      const gst = business.gst;

      // Early return if GST is empty
      if (!gst) {
        setGstValidating(false);
        return;
      }

      // Validate GST API
      // const validatingapi = `https://sheet.gstincheck.co.in/check/937a7a862dc54484e07e4a0d45c3f4d8/${gst}`;
      // const validatingapi = `https://appyflow.in/api/verifyGST?key_secret=vbDzZ3Iq7QOcdW9mB2jo41Vl6S62&gstNo=${gst}`;
      // const res = await fetch(validatingapi);

      // if (!res.ok) {
      //   setFillError("Failed to fetch GST details");
      // }

      // const data = await res.json();
      // console.log("data" + data.taxpayerInfo);

      // // Check if GST validation was unsuccessful
      // if (!data) {
      //   setGstValidating(false);
      //   setGstValidated(false);
      //   setFillError(data.message || "Invalid GST details");
      //   return;
      // }

      // Update business details
      // setBusiness({
      //   ...business,
      //   name: data.taxpayerInfo.tradeNam || "",
      //   ownedBy: data.taxpayerInfo.lgnm || "",
      //   // address: data.taxpayerInfo.pradr.addr.addr || "",
      // });

       if(business.gst.length < 15){
        setFillError("Invalid GST number");
        setGstValidating(false);
        setGstValidated(false);
        return;
       }

      
        setGstValidating(false);
        setGstValidated(true);


    } catch (error) {
      console.error("Error validating GST:", error);
      setGstValidating(false);
      setGstValidated(false);
      setFillError("An error occurred while validating GST");
    }
  };


  //submit form
  const handleSubmit = async (e: any) => {
    setRegistering(true);
    e.preventDefault();

    if (!gstValidated) {
      alert("Please validate your GST number");
      return;
    }
    if (user.user_password != user.confirm_password) {
      alert("Password does not match");
      return;
    }
    if (user.user_password.length < 5) {
      alert("Password too short");
      return;
    }

    const registration = await useRegister(business, user, userFile, clientDomain);
    setRegistering(false);  
    if(registration.status == "success"){
      alert("Registration Successful");
      window.location.href = "/login";
    }
    else{
      alert("Registration Failed");
      window.location.href = "/register";
    }

    // window.location.href = "/login";
  };

  return (
    <>
      <main>
        {/* Navbar Larger Screens  */}
        <section className="bg-white m-2 shadow-sm sm:h-[100px] p-7 flex flex-col justify-between">
          <h1 className="text-2xl font-bold py-5 sm:py-0">HisaabKitaab</h1>
          <p className="text-gray-400 text-xs">
            Simplify your business management with AI-Powered Tools{" "}
          </p>
          {/* <FaUser className="text-xl"/> */}
        </section>

        <section className="flex sm:p-10 justify-center w-full">
          {/* Registration Form  */}
          <form onSubmit={handleSubmit}>
            <div className="registration-form flex flex-col sm:flex-row p-5 sm:gap-10 justify-start sm:w-full h-fit">
              <div>
                {/* Business Preview */}
                <section className="flex flex-col p-4 w-full ">
                  <div className="flex sm:flex-col gap-3">
                    {/* <h1 className="hidden sm:block text-[15px] font-semibold text-black/70 text-center p-3">
                      Preview
                    </h1> */}
                    <div className="sm:flex sm:justify-center items-center hidden ">
                      <img
                        src={business.thumbnail ? business.thumbnail : dp}
                        alt="Business Logo"
                        className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] object-contain rounded-full"
                      />
                    </div>
                    <ul className="text-center font-thin text-green-700">
                      <li>
                        {business.name && <span>{business.name}</span>}
                        {business.type && (
                          <span className="text-[10px] font-bold ml-4 bg-green-400 text-slate-800 p-1 px-2 rounded-full">
                            {business.type.toUpperCase()}
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </section>
                {/* Login Details  */}
                <section className="flex flex-col pt-5 sm:pt-0  p-5 rounded-xl shadow-md h-fit bg-white">
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-[15px] font-semibold text-black/70 sm:text-center sm:p-3">
                      Login Details
                    </h1>
                    <input
                      type="text"
                      name="user_email"
                      placeholder="Email"
                      className="p-2 border-[1px]  outline-none text-sm sm:w-[300px]"
                      value={user.user_email}
                      onChange={(e) =>
                        setUser({ ...user, user_email: e.target.value })
                      }
                      required={true}
                    />
                    <div className="flex flex-col gap-2">
                      <input
                        type="password"
                        name="user_password"
                        placeholder="Password"
                        className="p-2 border-[1px]  outline-none text-sm"
                        value={user.user_password}
                        onChange={(e) => {
                          setUser({ ...user, user_password: e.target.value });
                          if (e.target.value.length < 5) {
                            setPasswordFillStatus("Password too short");
                          } else {
                            setPasswordFillStatus("");
                          }
                        }}
                        required={true}
                      />
                      <input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm password"
                        className="p-2 border-[1px]  outline-none text-sm"
                        onChange={(e) => {
                          setUser({
                            ...user,
                            confirm_password: e.target.value,
                          });
                          setPasswordFillStatus(
                            e.target.value === user.user_password
                              ? "Password matched"
                              : "Password does not match"
                          );
                        }}
                      />
                      <p
                        className={`text-[12px] ${
                          passwordFillStatus === "Password matched"
                            ? "text-green-500"
                            : "text-red-500"
                        } ml-3`}
                      >
                        {passwordFillStatus}
                      </p>
                    </div>

                    {/* Otp  */}
                    {/* <div className="flex gap-5 items-center justify-between mt-5">
                    <input
                      type="text"
                      placeholder="Enter one time password"
                      className="text-sm outline-none border-[1px] w-[70%] p-2"
                    />
                    <button className="bg-gray-400 hover:bg-gray-500 text-white rounded-sm text-[12px] w-[30%] p-2">
                      Send OTP
                    </button>
                  </div> */}
                  </div>
                </section>
              </div>

              {/* Business Details  */}
              <section className="flex flex-col sm:w-full h-full mt-10 sm:mt-0  bg-white p-5 rounded-md shadow-md">
                <div className="flex flex-col gap-3 ">
                  <h1 className=" text-[15px] font-semibold text-black/70 sm:text-center sm:p-3">
                    Enter your Business Details
                  </h1>
                  <div className="flex gap-5 sm:w-[40vw] items-center">
                    <input
                      type="text"
                      name="gst_number"
                      placeholder="GST-IN"
                      value={business.gst}
                      onChange={(e) =>
                        setBusiness({ ...business, gst: e.target.value })
                      }
                      className={`p-3 border-[1px] ${
                        gstValidated ? "border-green-300" : "border-red-300"
                      } outline-none text-sm w-full`}
                      required={true}
                    />

                    {gstValidating ? (
                      <AiOutlineLoading3Quarters className="text-3xl text-green-500 animate-spin" />
                    ) : (
                      <>
                        <button
                          className={`text-xs ${
                            gstValidated ? "hidden" : ""
                          } border border-slate-400 hover:bg-slate-600 hover:text-white duration-200 text-black p-3 transition-all font-semibold shadow-sm`}
                          onClick={handleValidateGst}
                        >
                          Validate
                        </button>
                      </>
                    )}
                  </div>

                  {gstValidated ? (
                    <div className="flex gap-1 items-center ">
                      <CgCheck className={`text-green-500 text-2xl `} />
                      <h5 className={`text-xs text-green-500 `}>
                        gstin verified
                      </h5>
                    </div>
                  ) : (
                    <div className="flex gap-1 items-center ">
                      <CgClose className={`text-red-500 text-sm `} />
                      <h5 className={`text-xs text-red-500 `}>{fillError}</h5>
                    </div>
                  )}

                  <input
                    type="text"
                    value={business.name}
                    onChange={(e) =>
                      setBusiness({ ...business, name: e.target.value })
                    }
                    name="business_name"
                    placeholder="Business Legal Name"
                    className="p-2 border-[1px] w-full outline-none text-sm"
                    required={true}
                    // disabled={true}
                  />
                  <input
                    type="text"
                    value={business.ownedBy}
                    onChange={(e) =>
                      setBusiness({ ...business, ownedBy: e.target.value })
                    }
                    name="business_owner"
                    placeholder="Managed By"
                    className="p-2 border-[1px] w-full outline-none text-sm"
                    required={true}
                    // disabled={true}
                  />

                  <div className="flex gap-5">
                    <select
                      name="business_type"
                      className="p-2 border-[1px] w-full outline-none text-sm cursor-pointer"
                      onChange={(e) =>
                        setBusiness({ ...business, type: e.target.value })
                      }
                      // disabled={gstValidated ? false : true}
                      required={true}

                    >
                      <option value="none">Select Business Type</option>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                      <option value="transporter">Transporter</option>
                      <option value="agent">Agent</option>

                    </select>
                  </div>
                  <input
                    type="text"
                    name="business_address"
                    placeholder="Business Address"
                    value={business.address}
                    onChange={(e) =>
                      setBusiness({ ...business, address: e.target.value })
                    }
                    className="p-2 border-[1px]  outline-none text-sm"
                    // disabled={gstValidated ? false : true}
                    required={true}

                  />

                  <div>
                    {/* Upload Business logo */}
                    <h1 className="py-6 p-2 font-bold text-black/70 text-sm">
                      Your brand logo
                    </h1>
                    <input
                      type="file"
                      name="business_logo"
                      className="p-2 border-[1px] cursor-pointer outline-none text-sm"
                      onChange={handleFile}
                      required={true}
                      // disabled={gstValidated ? false : true}
                    />
                  </div>

                  <section className="flex justify-end ">
                    {
                      registering ? (
                        <AiOutlineLoading3Quarters className="text-3xl text-green-500 animate-spin" />
                      ) : (
                        <button className="bg-gray-400 hover:bg-gray-500 text-white rounded-sm text-[12px] w-[30%] p-2">
                          Register
                        </button>
                      )
                    }
                  </section>
                </div>
              </section>
            </div>

            {/* Submit Form  */}
            <div className="">
              <div>
                <p className="text-center p-7 sm:p-5 text-sm mt-10">
                  Already Registered?{" "}
                  <Link to="/login" className="hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};
export default register;
