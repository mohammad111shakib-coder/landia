import React from "react";

function Results({
  icon: Icon,
  text1,
  title,
  text2,
  text3,
  continerClass = "",
  text1Class = "",
}) {
  return (
    <div
      className={`border border-gray-200 rounded-xl p-2 hover:border-gray-800 hover:-translate-y-1  ${continerClass}`}>
      <div className="flex flex-row justify-between items-center mb-2">
        <span className=" rounded-2xl bg-gray-300 p-2">
          <Icon />
        </span>
        <p
          className={`rounded-lg bg-green-100 text-green-600 p-0.5 text-[12px] md:text-[16px] md:px-3 md:rounded-xl ${text1Class}`}>
          {text1}
        </p>
      </div>
      <h2 className="font-semibold text-xl mb-2 md:text-2xl md:font-bold ">
        {title}
      </h2>
      <p className="text-gray-600 text-[12px] md:text-[16px] mb-2 ">{text2}</p>
      <hr className="text-gray-200 mb-2" />
      <p className="font-light text-[12px] md:text-[16px] mb-2 ">{text3}</p>
    </div>
  );
}

export default Results;
