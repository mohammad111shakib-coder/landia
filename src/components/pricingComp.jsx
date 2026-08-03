import React from "react";

function pricingComp({
  title,
  number,
  month,
  year,
  text,
  recommend,
  isMonthly,
  subtitle,
  tik1,
  tik2,
  tik3,
  tik4,
  tik5,
  buttom,
  buttomClass = "",
  recommendClss = "",
  continerClass = "",
  tikClass = "",
}) {
  return (
    <div
      className={` relative flex flex-col p-3 bg-white rounded-lg ${continerClass}`}>
      <div className={`${recommendClss}`}>{recommend}</div>
      <p className="text-gray-800 mt-2 mb-2 text-[14px]">{title}</p>
      <div className="flex flex-row items-end mb-1 ">
        <p className="font-bold text-2xl ">$</p>
        <h2 className="font-bold text-4xl ">{number}</h2>
        <p className="text-gray-600">{isMonthly ? month : year}</p>
      </div>
      <p className="text-gray-600 mb-3">{text}</p>
      <hr className=" text-gray-300 mb-2" />
      <h4 className="  font-semibold">{subtitle}</h4>
      <div className="text-gray-800 mb-2">
        <p>{tik1}</p>
        <p>{tik2}</p>
        <p>{tik3}</p>
        <p className={`${tikClass}`}>{tik4}</p>
        <p className={`${tikClass}`}>{tik5}</p>
      </div>
      <hr className="text-gray-300 mb-2" />
      <button
        className={`text-center border rounded-lg py-2 font-semibold ${buttomClass}`}>
        {buttom}
      </button>
    </div>
  );
}

export default pricingComp;
