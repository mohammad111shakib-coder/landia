import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
const PricingQuestions = ({
  number,
  questin,
  answer,

  classNumber = "",

  classContiner = "",
}) => {
  const [close, setClose] = useState(false);
  return (
    <div className={`flex flex-col mx-4 md:mx-50   ${classContiner}`}>
      <div className="flex flex-row justify-between mb-2  ">
        <div className="  flex flex-row gap-2 items-center">
          <p className={close ? "font-bold" : "text-gray-600"}>{number}</p>
          <h2
            className={
              close
                ? " text-[13px] md:text-xl font-bold"
                : "font-medium text-[13px] md:text-[16px] "
            }>
            {questin}
          </h2>
        </div>
        <button onClick={() => setClose(!close)}>
          {close ? <FaTimes /> : <IoIosAdd className="text-2xl" />}
        </button>
      </div>
      <p className="text-[13px] md:text-[15px] text-gray-600 mb-3">
        {close ? answer : null}
      </p>
      <hr className="text-gray-400" />
    </div>
  );
};

export default PricingQuestions;
