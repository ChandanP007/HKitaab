import { GoShieldCheck } from "react-icons/go";
import { MdOutlineAccountTree, MdQueryStats } from "react-icons/md";
import { PiNewspaperLight } from "react-icons/pi";
import Demo from "./Demo";

const Branding = () => {
  const features = [
    {
      title: "Smart Ledger Management",
      description:
        " We provide a smart ledger management system that helps you manage your business finances with ease. It is a one-stop solution for all your accounting needs. With HisaabKitaab, you can easily manage your business finances, track your expenses, and generate reports in real-time.",
      icon: <MdOutlineAccountTree className="text-6xl" />,
    },
    {
      title: "Secure and Reliable",
      description:
        "We provide a secure and reliable platform for your business. Our platform is built on the latest technology and is designed to keep your data safe and secure. With HisaabKitaab, you can rest assured that your data is safe and secure.",
      icon: <GoShieldCheck className="text-6xl" />,
    },
    {
      title: "Real-Time Analytics",
      description:
        "We provide real-time analytics that help you make informed decisions about your business. With HisaabKitaab, you can easily track your business performance, identify trends, and make data-driven decisions.",
      icon: <MdQueryStats className="text-6xl" />,
    },
    {
      title: "Automated Reports",
      description:
        "We provide automated reports that help you keep track of your business finances. With HisaabKitaab, you can easily generate reports, track your expenses, and monitor your business performance in real-time.",
      icon: <PiNewspaperLight className="text-6xl" />,
    },
  ];
  return (
    <main>
      <section
        id="features"
        className="md:p-5 lg:p-10 xl:p-10 md:mx-3 lg:mx-24 xl:mx-60 shadow-xl border-t border-dashed  bg-white"
      >
        <div className="flex flex-col items-center">
          <h1 className="px-10 py-10 text-4xl font-bold ">
            What makes it Different ?
          </h1>

          <div className="flex flex-col justify-center sm:px-10 gap-3 text-center m-3 ">
            {features.map((feature, index) => (
              <div className="flex flex-col sm:flex-row sm:shadow sm:rounded-xl items-center " key={index}>
                <div
                  className="flex items-center flex-col cursor-pointer transition-all duration-500  p-5 sm:rounded-xl sm:w-[200px] "
                  // data-aos="fade"
                >
                  {feature.icon}
                  <p className="font-semibold w-[170px] text-[20px] sm:text-[12px] sm:max-w-[10ch]">
                    {feature.title}
                  </p>
                </div>
                <div
                  className="p-10 text-[14px] sm:text-sm text-left max-w-[100ch]  border-zinc-500 "
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-once={true}
                >
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="pt-10 md:p-5 justify-center items-center xl:p-10 md:mx-3 md:px-10 lg:px-20 lg:mx-24 bg-white xl:mx-60 ">
        <div className="flex flex-col sm:flex-row justify-between items-center " 
        data-aos="fade"
        >
          <section className="flex flex-col items-center ">
            <video className="w-[300px] md:w-[1100px] lg:w-[700px] " autoPlay muted loop>
              <source src="./Images/store.mp4" type="video/mp4" />
            </video>
          </section>

          <div className="max-w-[150ch] px-10 sm:px-14 py-14" 
          data-aos="fade"
          >
            <p className="text-3xl ">
              We use high quality technology to deliver you the best user
              experience and keep your{" "}
              <strong className="headline-1">data safe</strong>
            </p>
            <div className="flex items-center gap-3 ">
              <img
                src="https://logowik.com/content/uploads/images/cloudinary-icon8821.logowik.com.webp"
                alt=""
                className="h-8  my-5"
              />
              <img
                src="https://dwglogo.com/wp-content/uploads/2017/12/1100px_Redis_Logo_01.png"
                alt=""
                className="h-12 my-5"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UVEC-B6F97ezOTFuAG7Hmf5UzEvWy2qk8A&s"
                alt=""
                className="h-8 my-5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Demo  */}
      <section
        className="pb-20 sm:p-5 xl:p-10 md:mx-3 lg:mx-24 xl:mx-60 shadow-xl  bg-white"
        // data-aos="fade"
      >
        <h1 className="p-10 text-4xl font-bold">
          Guides on platform Usage
        </h1>
        <div className="px-5 sm:px-10">
          <Demo />
        </div>
      </section>

      {/* The Testinomials */}
      {/* <section className=" xl:p-10 md:mx-3 lg:mx-24 xl:mx-60 shadow-xl  bg-white">
      </section> */}

      <section className="flex mt-2 py-10 rounded-b-xl md:p-5 xl:p-10 md:mx-3 lg:mx-24 xl:mx-60 shadow-md bg-white mb-2 ">
        <div className="p-5 sm:p-12 rounded-md shadow-sm">
          <h1 className=" p-3 font-semibold text-2xl border-l-4 pl-4">
            Get Support | Chat with us
          </h1>
          <div className="mt-10 w-[360px] sm:w-[600px] pl-4">
            <form typeof="submit" className="flex flex-col gap-4 " action="https://getform.io/f/aqonxvma" method="POST">
              <label htmlFor="name">Fullname</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="p-2 border rounded-sm outline-none "
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="p-2 border rounded-sm outline-none "
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message/querey"
                className="p-2 border rounded-sm outline-none "
              ></textarea>
              <button
                type="submit"
                className=" w-[100px] p-2 mt-5 border font-light text-sm bg-black/70 transition-all duration-700 ease-in-out hover:w-[150px] hover:bg-black text-white rounded-full "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branding;
