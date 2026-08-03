import React from "react";
import SectionTitle from "../components/SectionTitle";
import ServicesCard from "../components/ServicesCard";
import { BsCodeSlash } from "react-icons/bs";
import { LuTimer } from "react-icons/lu";
import { VscSymbolColorCompact } from "react-icons/vsc";
import { TbSpeakerphone } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";

function Services() {
  return (
    <div className="mt-20 md:mx-10">
      <SectionTitle
        title="Services"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit."
      />
      <div className="flex flex-col justify-center items-center mt-15 md:mt-20 ">
        <p className="border border-gray-700 bg-gray-200 rounded-2xl px-2 mb-5  font-semibold text-[14px] text ">
          SOLUTIONS
        </p>
        <h1 className="font-semibold text-xl md:font-bold md:text-3xl text-center md:max-w-180  mb-4">
          Delivering Meaninful Outcome Through Innovation
        </h1>
        <p className=" text-gray-600 text-[12px] md:text-[16px] md:max-w-180 text-center mb-5">
          Lorem ipsum dolor a eveniet! Id eius impedit voluptatibus consequatur
          illum laborum ipsa exercitationem eveniet! Id eius impedia! Id eius
          impedit voluptatibus
        </p>
        <div className="flex flex-row gap-8 justify-center items-center mt-5 ">
          <button className=" borde bg-black text-gray-100 rounded-lg px-3 py-1.5 md:text-[14px]  text-center cursor-pointer hover:scale-110">
            View Our Projects
          </button>
          <p className="font-semibold text-gray-600 text-[14px] ">
            How We Work →
          </p>
        </div>
      </div>
      {/*  bottom part */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-30 my-5">
        <ServicesCard
          icon={BsCodeSlash}
          text="Lorem ipsum dolor a eveniet! Id eius impedit voluptatibus consequatur
          illum laborum ipsa exercitationem"
          title="Tailored Software Solutions"
        />
        <ServicesCard
          icon={LuTimer}
          text="Lorem ipsum dolor a eveniet! Id eius impedit voluptatibus consequatur
          illum laborum ipsa exercitationem"
          title="Growth Strategy Consulting"
        />
        <ServicesCard
          icon={VscSymbolColorCompact}
          text="Lorem ipsum dolor a eveniet! Id eius impedit voluptatibus consequatur
          illum laborum ipsa exercitationem"
          title="Visual Brand Systems"
        />
        <ServicesCard
          icon={TbSpeakerphone}
          text="Lorem ipsum dolor a eveniet! Id eius impedit voluptatibus consequatur
          illum laborum ipsa exercitationem"
          title="Performance Marketing"
        />
        <ServicesCard
          icon={IoPhonePortraitOutline}
          text="Lorem ipsum dolor a eveniet! Id eius impedit voluptatibus consequatur
          illum laborum ipsa exercitationem"
          title="Interface & Interaction Design"
        />
        <ServicesCard
          icon={BsBarChartLine}
          text="Lorem ipsum dolor a eveniet! Id eius impedit voluptatibus consequatur
          illum laborum ipsa exercitationem"
          title="Insight-Driven Analytics"
        />
      </div>
    </div>
  );
}

export default Services;
