const Footer = () => {
  return (
    <>
      <footer>
        {/* Top */}
        <section className="my-32 flex justify-center gap-20 items-center">
          <section>
            <h1 className="text-5xl font-bold ">
              Improve your Productivity. <br></br>Use HisaabKitaab to get your{" "}
              <br></br> Clients together.
            </h1>
            <button className="p-3 text-white rounded-md mt-14 w-[150px] bg-black/70 hover:bg-black transition-all ">
              SignUp
            </button>
          </section>
          <section className="flex flex-col gap-3">
           <img 
           className="h-[600px] w-[800px]"
           src="https://img.freepik.com/free-vector/businessman-working-table-flying-like-superhero_74855-20015.jpg?t=st=1716628818~exp=1716632418~hmac=3cfa695979087cfe3356bf03e6daea3ef4a1aeb14a5f6d22189de22c932396c3&w=1380" alt="" />
          </section>
        </section>

        {/* Bottom */}
        <section className="flex justify-between p-7 px-14">
          <h2 className="text-xl font-bold">HisaabKitaab</h2>
          <p className="font-thin text-sm">
            © 2024 HisaabKitaab Inc. Manage Cookies | Privacy | All rights
            reserved
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
