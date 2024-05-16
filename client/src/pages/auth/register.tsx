// imports
import { useState } from "react";
import { generateDp } from "../../utils/dpGenerator";
import { useRegister } from "../../hooks/userAuth/useRegister";
import { Link } from "react-router-dom";
import { useActiveActionContext } from "../../context/siteContext";

const register = () => {
  const { clientDomain } = useActiveActionContext();

  //user login details
  const [user, setUser] = useState({
    user_email: "",
    user_password: "",
    otp: "",
  });
  const [passwordFillStatus, setPasswordFillStatus] = useState<string>("");

  //business details
  const [business, setBusiness] = useState<any>({
    gst: "",
    name: "",
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

  //submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await useRegister(business, user, userFile, clientDomain);
    window.location.href = "/login";
  };

  return (
    <>
      <main>
        {/* Navbar Larger Screens  */}
        <section className="bg-gray-100 shadow-sm p-5 flex justify-between">
          <h1 className="text-xl">Site-Title</h1>
          {/* <FaUser className="text-xl"/> */}
        </section>

        {/* Registration form  */}
        <h1 className="text-3xl font-light pt-10 text-center">
          Register/ Business Registration
        </h1>
        <section className="flex p-10 justify-center ">
          {/* Registration Form  */}
          <form onSubmit={handleSubmit}>
            <div className="registration-form flex p-5 gap-10 justify-center w-[65vw] h-[55vh]">
              {/* Login Details  */}
              <section className="flex flex-col">
                <div className="flex flex-col gap-3">
                  <h1 className=" text-[15px] font-semibold text-black/70 text-center p-3">
                    Login Details
                  </h1>
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Email"
                    className="p-2 border-[1px]  outline-none text-sm w-[300px]"
                    value={user.user_email}
                    onChange={(e) =>
                      setUser({ ...user, user_email: e.target.value })
                    }
                  />
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
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
                    />
                    <input
                      type="password"
                      name="otp"
                      placeholder="Confirm password"
                      className="p-2 border-[1px]  outline-none text-sm"
                      onChange={(e) => {
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

              {/* Business Details  */}
              <section className="flex flex-col w-[500px]">
                <div className="flex flex-col gap-3">
                  <h1 className=" text-[15px] font-semibold text-black/70 text-center p-3">
                    Business Details
                  </h1>
                  <div className="flex gap-5">
                    <input
                      type="text"
                      name="gst_number"
                      placeholder="GST-IN"
                      value={business.gst}
                      onChange={(e) =>
                        setBusiness({ ...business, gst: e.target.value })
                      }
                      className="p-2 border-[1px]  outline-none text-sm "
                    />
                    <input
                      type="text"
                      value={business.name}
                      onChange={(e) =>
                        setBusiness({ ...business, name: e.target.value })
                      }
                      name="business_name"
                      placeholder="Business Name"
                      className="p-2 border-[1px] w-full outline-none text-sm"
                    />
                  </div>
                  <div className="flex gap-5">
                    <select
                      name="business_type"
                      className="p-2 border-[1px] w-full outline-none text-sm cursor-pointer"
                      onChange={(e) =>
                        setBusiness({ ...business, type: e.target.value })
                      }
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
                  />

                  {/* Business email  */}
                  {/* <input
                    type="text"
                    name="business_email"
                    placeholder="Email Address"
                    value={user.user_email}
                    // onChange={(e) => setBusiness({ ...business, email: e.target.value })}
                    className="p-2 border-[1px]  outline-none text-sm"
                    disabled={true}
                  /> */}
                  <div>
                    {/* Upload Business logo */}
                    <h1 className="py-5 font-mono text-black/70 text-sm">
                      Your brand logo
                    </h1>
                    <input
                      type="file"
                      name="business_logo"
                      className="p-2 border-[1px] cursor-pointer outline-none text-sm"
                      onChange={handleFile}
                    />
                  </div>
                </div>
              </section>

              {/* Business Preview */}
              <section className="flex flex-col w-[250px]">
                <div className="flex flex-col gap-3">
                  <h1 className=" text-[15px] font-semibold text-black/70 text-center p-3">
                    Preview
                  </h1>
                  <div className="flex justify-center items-center">
                    <img
                      src={business.thumbnail ? business.thumbnail : dp}
                      alt="Business Logo"
                      className="w-[150px] h-[150px] object-contain rounded-full"
                    />
                  </div>
                  <ul className="text-center font-thin text-green-700">
                    <li>
                      {business.name && <span>{business.name}</span>}
                      {business.type && (
                        <span className="text-[10px] font-bold ml-4 bg-sky-300 text-slate-800 p-1 rounded-full">
                          {business.type.toUpperCase()}
                        </span>
                      )}
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Submit Form  */}
            <div className="">
              <section className="flex justify-center mt-14">
                <button className="bg-gray-500 hover:bg-gray-600 text-white rounded-sm text-[12px] w-48 p-2 border-2 shadow-sm">
                  Register
                </button>
              </section>
              <div>
                <p className="text-center p-5">
                  Already Registered?{" "}
                  <Link to="/login" className="underline">
                    Go to login
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
