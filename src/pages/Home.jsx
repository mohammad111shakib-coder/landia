// import React from "react";
// import { IoPlayCircleOutline } from "react-icons/io5";
// // import Heroslider from "../components/Heroslider";

// function Home() {
//   return (
//     <div className="flex flex-col justify-center items-center mt-15">
//       {/* topics of home  */}
//       <div className="flex flex-col justify-center items-center gap-1">
//         <p className=" rounded-2xl p-2 bg-gray-300 text-[14px] mb-2 font-bold">
//           INNOVATIVE SOLUTIONS
//         </p>
//         <h1 className="font-bold text-3xl text-center">
//           Elevate Your Enterprise To
//         </h1>
//         <h1 className="font-bold text-3xl mb-2">New Heights</h1>

//         <p className="text-center">
//           Quis autem vel eum iure reprehenderit qui in ea voluptate velit essr
//           quam nihi
//         </p>
//         <p className="text-center">
//           molestiae consequatur,vel illum qui dolorem eum fugiat voluptas nulla
//         </p>
//         <p className="mb-2 text-center">pariatur</p>
//       </div>
//       {/* middle buttons */}
//       <div className="flex justify-between items-center gap-12 mt-6">
//         <button className="border rounded-2xl text-gray-50 bg-gray-950 px-4 py-3 text-[14px] ">
//           Explore Services
//         </button>
//         <div className=" flex flex-row justify-between items-center gap-2 rounded-2xl px-2 py-1 bg-gray-100">
//           {/* img */}
//           <button>
//             <IoPlayCircleOutline className="size-10" />
//           </button>
//           <p>View showcase</p>
//         </div>
//       </div>
//       {/* imges part */}
//       <div className="flex flex-row ">
//         <img src="/image1.jfif" alt="images" className=" " />
//         <img src="/image2.jfif" alt="images" />
//         <img src="/image3.jfif" alt="images" />
//         <img src="/imag7.jfif" alt="images" />
//         <img src="/image8.jfif" alt="images" />
//         <img src="/image9.jfif" alt="images" />
//         <img src="/image10.jfif" alt="images" />
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const images = [
  "/image1.jfif",
  "/image2.jfif",
  "/image3.jfif",
  "/image7.jfif",
  "/image8.jfif",

  "/image10.jfif",
];

function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-15">
      {/* topics of home  */}
      <div className="flex flex-col justify-center items-center gap-1">
        <p className=" rounded-2xl p-2 bg-gray-300 text-[14px] mb-2 font-bold">
          INNOVATIVE SOLUTIONS
        </p>
        <h1 className="font-bold text-3xl text-center">
          Elevate Your Enterprise To
        </h1>
        <h1 className="font-bold text-3xl mb-2">New Heights</h1>

        <p className="text-center">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit essr
          quam nihi
        </p>
        <p className="text-center">
          molestiae consequatur,vel illum qui dolorem eum fugiat voluptas nulla
        </p>
        <p className="mb-2 text-center">pariatur</p>
      </div>

      {/* middle buttons */}
      <div className="flex justify-between items-center gap-12 mt-6">
        <button className="border rounded-2xl text-gray-50 bg-gray-950 px-4 py-3 text-[14px] ">
          Explore Services
        </button>
        <div className=" flex flex-row justify-between items-center gap-2 rounded-2xl px-2 py-1 bg-gray-100">
          <button>
            <IoPlayCircleOutline className="size-10" />
          </button>
          <p>View showcase</p>
        </div>
      </div>

      {/* imges part - marquee */}
      <div className="overflow-hidden w-full mt-10">
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {images.map((src, i) => (
            <img
              key={`a-${i}`}
              src={src}
              alt="images"
              className="w-60 h-40 md:w-80 md:h-60 object-cover rounded-xl shrink-0 "
            />
          ))}

          {images.map((src, i) => (
            <img
              key={`b-${i}`}
              src={src}
              alt="images"
              className="w-60 h-40 md:w-80 md:h-60 object-cover rounded-xl shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
