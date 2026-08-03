import React from "react";

function Textmonials({ stars, des, image, name, text, continerclass = "" }) {
  return (
    <div
      className={`border border-gray-300 rounded-lg py-3 px-4 ${continerclass}`}>
      <div>
        <p className="mb-2">{stars}</p>
        <p className="mb-6 font-light">{des}</p>
        <hr className="mb-2 text-gray-300" />
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <span className="block w-14 h-14   ">
          <img src={image} alt={name} className="object-cover" />
        </span>

        <div>
          <h1 className="font-semibold">{name}</h1>
          <p className="text-[13px] font-light text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Textmonials;
