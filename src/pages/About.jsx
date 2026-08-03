import React from "react";
import State from "../components/State";
import { TfiCup } from "react-icons/tfi";
import { BsShieldLock } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import Discription from "../components/Discription";

const cards = [
  {
    icon: BsShieldLock,
    title: "Reliable Protection",
    text1: "Duis aute irure dolor in reprehenderit in voluoatate",
    text2: "velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: GiSpeedometer,
    title: "Optimized Speed",
    text1: "Excepteur sint occaecat cupidatat non proident",
    text2: "sunt in sulpa qui officia deserunt mollit anim.",
  },
  {
    icon: AiOutlineMessage,
    title: "Dedicated Guidance",
    text1: "sed ut perspiciatis unde omnis iste natus error sit",
    text2: "voluotatem accussantium doloremque laudantium.",
  },
];

export default function About() {
  return (
    <div className="mt-14">
      <div className="flex flex-col justify-center items-center mt-4 text-center ">
        <p className="border rounded-xl px-4 py-2 text-[14px] border-gray-300 mb-4 text-gray-600 ">
          WHO WE ARE
        </p>
        <h1 className="text-3xl font-bold ">
          Adipiscing elit sed do eiusmod tempor
        </h1>
        <h1 className="font-bold text-3xl mb-3">incididunt</h1>
        <div className="text-gray-600 text-[14px]">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit,
          </p>
          <p>
            sed quia consequuntur magin dolores qui ratione voluptatem sequi
          </p>
          <p>nesciunt</p>
        </div>
      </div>
      {/* center of about */}

      <div className="flex flex-col gap-8 md:flex-row justify-center mt-4 mx-6  ">
        {/* imges in here */}
        <div className=" flex flex-col gap-8 md:flex-row  ">
          <img
            src="/image4.jfif"
            alt="image4"
            className=" rounded-2xl w-full  md:max-w-96 "
          />
          <img
            src="/image5.jfif"
            alt="image5"
            className=" rounded-2xl md:max-w-96 "
          />
        </div>

        <div className=" flex flex-col justify-center items-start px-5 border border-gray-300 rounded-2xl py-4  ">
          <span className=" rounded-sm p-2 bg-gray-200 hover:scale-110 transition-transform  md:-translate-y-10 ">
            {/* cup in here */}
            <TfiCup className="my- size-5 " />
          </span>
          <h1 className="text-2xl font-semibold">Excellence Driven</h1>
          <div className="text-gray-600 text-[14px]">
            <p>Ut enim ad minima veniam, quis nostrum</p>
            <p>exervitionrm ullam corporis susvipit</p>
            <p>laboriosam</p>
          </div>
        </div>
      </div>
      <State />
      <section className="flex flex-col justify-center  mt-8 mx-6 gap-4 md:flex-row ">
        {cards.map((item) => (
          <Discription
            key={item.title}
            icon={item.icon}
            title={item.title}
            text1={item.text1}
            text2={item.text2}
            variant="about"
            containerClass=""
            titleClass=""
            textClass=""
            iconClass=""
          />
        ))}
      </section>
      <div className="mt-4">
        <img src="logos_mockup.png" alt="logos" />
      </div>
    </div>
  );
}
