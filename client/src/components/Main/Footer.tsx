

const Footer = () => {
  return (
    <>
        <main className="hidden sm:block bg-gray-100 text-black shadow-md p-5 text-sm sticky w-full h-[200px]  z-10">

          <div className="flex justify-around items-center gap-10">
            <section className="p-10">
                <h1 className="text-3xl font-semibold">HisaabKitaab</h1>
            </section>
            <section className="p-10">
                <ul className="flex text-[12px] gap-5 underline">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookie Policy</li>
                </ul>
            </section>
           
          </div>

        </main>
    </>
  )
}

export default Footer