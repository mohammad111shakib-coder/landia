import React from "react";

const state = [
  {
    number: "180+",
    title: "Deliverables Shipped",
  },
  {
    number: "97%",
    title: "Customer Approval",
  },
  {
    number: "24/7",
    title: "Dedicated Assistance",
  },
  {
    number: "15+",
    title: "Industry Tenure",
  },
];

// three div

export default function State() {
  return (
    <section>
      <div className="flex flex-col gap-5 mt-8 mx-6 md:flex-row justify-center items-center   ">
        {state.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-center items-center border border-gray-300 rounded-2xl py-3 w-full ">
            <h1 className="text-3xl font-bold">{item.number}</h1>
            <p className="text-gray-600 text-[14px]">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
