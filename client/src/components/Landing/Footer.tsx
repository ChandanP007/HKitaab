const Footer = () => {
  return (
    <>
      <footer>
        <hr className="block sm:hidden border-4"></hr>
        {/* Top */}
        <section className="my-10 sm:my-32 px-5 flex justify-around items-center">
          <section>
            <h1 className="text-3xl sm:text-5xl font-bold ">
              Improve your Productivity. <br></br>Use HisaabKitaab to get your{" "}
              <br></br> Clients together.
            </h1>
            <button className="p-2 w-[110px] sm:p-3 font-bold text-white rounded-md mt-12 sm:w-[150px] bg-black/70 hover:bg-black transition-all ">
              Get Started
            </button>
          </section>
          <section className="hidden sm:flex flex-col gap-3">
           <img 
           className="h-[600px] w-[800px]"
           src="https://img.freepik.com/free-vector/businessman-working-table-flying-like-superhero_74855-20015.jpg?t=st=1716628818~exp=1716632418~hmac=3cfa695979087cfe3356bf03e6daea3ef4a1aeb14a5f6d22189de22c932396c3&w=1380" alt="" />
          </section>
        </section>
        

        {/* Bottom */}
        
        <section className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-14 gap-5">
          <h2 className="text-2xl font-bold">HisaabKitaab</h2>
          <p className="font-light text-[15px] sm:text-sm">
            © 2024 HisaabKitaab Inc. Manage Cookies | Privacy 
          </p>
        </section>

      </footer>
    </>
  );
};

export default Footer;
