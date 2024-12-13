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
      <main className="flex ">
        <section className="">
          <div className="relative  w-full overflow-hidden rounded-t-xl">
            <div className="flex " style={slideStyle}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="flex-shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + images.length) % images.length)
              }
              className="absolute top-[83%] sm:top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/25  text-white p-3 w-12 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="absolute top-[83%] sm:top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/25 text-white p-3 w-12 rounded-full"
            >
              &#10095;
            </button>
          </div>

          <div className="px-5 py-1 bg-gradient-to-tl from-indigo-100/50 via-green-100/50 to-yellow-100/50 border-l-4 border-black shadow-sm ">
            <div className="my-3 w-full">
              <h2 className="sm:text-lg font-semibold" data-ao="fade">
                Collaborate on your transactions with the clients in 4 simple steps
              </h2>
            </div>
            

            
          </div>
        </section>
      </main>
    </>
  );
}
