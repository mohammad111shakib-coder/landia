import React from "react";

function ServicesCard({ icon: Icon, title, text, classContiner = "" }) {
  return (
    <div
      className={` p-3 border rounded-xl hover:bg-gray-200  ${classContiner}`}>
      <span className="block w-9 rounded-lg p-2 bg-gray-100 mb-2">
        <Icon />
      </span>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-[12px] mb-2 md:text-[16px]">{text}</p>
      <hr className=" text-gray-300 mb-3" />
      <p className="text-gray-750">Discover more → </p>
    </div>
  );
}

export default ServicesCard;
