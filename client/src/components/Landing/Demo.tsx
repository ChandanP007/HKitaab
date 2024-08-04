import { useState, useEffect } from "react";

export default function Demo() {
  const images = [
    "https://res.cloudinary.com/dkzo1creb/image/upload/v1722175147/HisaabKitaab.io/1_tfalai.png",
    "https://res.cloudinary.com/dkzo1creb/image/upload/v1722175147/HisaabKitaab.io/2_qljgqe.png",
    "https://res.cloudinary.com/dkzo1creb/image/upload/v1722175147/HisaabKitaab.io/3_oo9tgu.png",
    "https://res.cloudinary.com/dkzo1creb/image/upload/v1722175147/HisaabKitaab.io/4_g5g66x.png",
  ];

  const [currentImage, setCurrent] = useState(0);
  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  //auto scroll
  useEffect(() => {
    const intervalId = setInterval(nextImage, 4500);
    return () => clearInterval(intervalId);
  }, []);

  //sliding transition
  const slideStyle = {
    transform: `translateX(-${currentImage * 100}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <>
      <main className="flex flex-col-reverse sm:flex sm:flex-row justify-center sm:justify-center xl:max-2xl:justify-between p-2 py-5 sm:p-5 h-[85vh] sm:h-[80vh] items-center bg-gray-900 text-white">
        <section className="flex gap-6 sm:gap-10 flex-col sm:w-[40vw]" data-aos="fade">
          <h1 className="py-2 text-white text-xs sm:text-md font-thin">
            HisaabKitaab.io
          </h1>

          <h2
            className="text-3xl px-0 sm:p-3 sm:text-6xl font-thin"
            data-ao="fade"
          >
            Here Are 4 Simple Steps <br />
            to Make a Transaction and <br /> Upload Your Ledger
          </h2>

          <ul className="list-disc leading-7 sm:leading-9 px-3 sm:px-12 text-xs sm:text-lg font-thin ">
            <li> Your data is stored in our secure database.</li>
            <li> Ledgers are secured in the cloud.</li>
            <li>
              Both you and your client can access and validate the ledger.
            </li>
          </ul>
        </section>
        <section className="" data-aos="zoom-in ">
          <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
            <div className="flex" style={slideStyle}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto flex-shrink-0"
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + images.length) % images.length)
              }
              className="absolute top-[83%] sm:top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/25 sm:bg-gray-800 text-white p-3 w-12 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="absolute top-[83%] sm:top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/25 sm:bg-gray-800 text-white p-3 w-12 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
