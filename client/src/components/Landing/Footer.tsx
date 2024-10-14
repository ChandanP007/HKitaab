const Footer = () => {
  return (
    <>
      <footer>
        {/* Top */}

        <div className="">
          {/* <div className="xl:p-10 md:mx-3 lg:mx-24 xl:mx-60 shadow-xl border bg-white h-[50vh] flex">
          <section className="px-5">
            <h1
              className="text-3xl md:text-4xl tracking-wide font-bold xl:max-2xl:px-[40px]"
              // data-aos="fade-right"
              // data-aos-once="true"
              >
              Improve your Productivity. <br></br>Use HisaabKitaab to get your{" "}
              <br /> Clients together.
            </h1>
            <button
              className="p-3 w-[110px] sm:p-2 animate-bounce text-white rounded-md mt-12 sm:mt-14 sm:w-[150px] xl:max-2xl:mx-[40px] bg-black/70 hover:bg-black transition-all "
              onClick={() => {
                window.location.href = "/register";
              }}
              // data-aos="fade-up"
              // data-aos-once="true"
              >
              Get Started
            </button>
          </section>

          <section>
              <div>
                <h1>Sitemap</h1>
                <ul>
                  <li>Home</li>
                  <li>Features</li>
                  <li>Testimonials</li>
                  <li>Get Support</li>
                </ul>
              </div>
          </section>

          </div> */}
        

        <section className="flex rounded-t-xl shadow-md bg-white flex-col sm:flex-row items-center justify-between py-8 px-20 sm:mt-0 gap-5">
          <h2 className="text-xl font-semibold">HisaabKitaab</h2>
          <p className="font-light text-[10px] ">
            © 2024 HisaabKitaab Inc. Manage Cookies | Privacy
          </p>
        </section>


        </div>

      </footer>
    </>
  );
};

export default Footer;
