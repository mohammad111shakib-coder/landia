import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Textmonials from "../../components/Textmonials";
import Results from "../../components/Results";
import { BsPeople } from "react-icons/bs";
import { PiChartLineUp } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { FaMedal } from "react-icons/fa";

const FeatureTestmonilais = () => {
  return (
    <div className="pt-10">
      <SectionTitle
        title="Testimonials"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit."
      />
      <section className="grid  md:grid-cols-2 gap-4 mx-0 md:mx-5">
        <Textmonials
          stars="⭐⭐⭐⭐⭐"
          des="Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas vestibulum ante ipsum"
          image="/image12.jfif"
          name="Marcus Ellison"
          text="VP of Engineering"
        />
        <Textmonials
          stars="⭐⭐⭐⭐⭐"
          des="Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas vestibulum ante ipsum"
          image="/image13.jfif"
          name="Janson rand"
          text="Product Architect"
          continerclass="border-gray-600 bg-[#EAEBEC]"
        />
        <Textmonials
          stars="⭐⭐⭐⭐⭐"
          des="Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas vestibulum ante ipsum"
          image="/image14.jfif"
          name="Julian Orescott"
          text="Creative Director"
        />
        <Textmonials
          stars="⭐⭐⭐⭐⭐"
          des="Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas vestibulum ante ipsum"
          image="/image16.jfif"
          name="Sophia Hartwell"
          text="Brand Strategist"
        />
        <Textmonials
          stars="⭐⭐⭐⭐⭐"
          des="Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas vestibulum ante ipsum"
          image="/image15.jfif"
          name="Owen Blackwood"
          text="Platform Analyst"
          continerclass="border-gray-600 bg-[#EAEBEC]"
        />
        <Textmonials
          stars="⭐⭐⭐⭐⭐"
          des="Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas vestibulum ante ipsum"
          image="/image11.jfif"
          name="Sundy Diweed"
          text="Operations Lead"
        />
      </section>
      {/* buttom part */}
      <section className=" flex flex-col my-10 md:my-20 ">
        <div className="flex flex-col justify-center items-center mb-6 ">
          <h4 className="border border-gray-500 bg-gray-200 rounded-xl w-72 p-2 mb-3">
            🏆 Recognized by 120+ professionals
          </h4>
          <h2 className="font-bold text-xl md:text-2xl mb-4 ">
            Powering Results through Purpose
          </h2>
          <p className="text-gray-600 text-[13px] md:text-[16px] mb-8 text-center md:w-150">
            Nobis labore fugiat maxime officia eveniet necessitatibus deserunt,
            cum expedita suscipit odit eveniet necessitatibus deserunt, cum
            expedita.
          </p>
        </div>
        {/*  boxes of page */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:mx-5  ">
          <Results
            text1="+15%"
            icon={BsPeople}
            title="312k+"
            text2="Active Users"
            text3="Compared to last year"
            continerClass=""
          />
          <Results
            text1="+7%"
            icon={PiChartLineUp}
            title="97%"
            text2="satistiction Score"
            text3="Best on quartly surveys"
            continerClass="bg-gray-200 md:bg-white"
          />
          <Results
            text1="+11"
            icon={FaMedal}
            title="53"
            text2="Honors Received"
            text3="Across all categories"
            continerClass="bg-gray-200 md:bg-white"
          />
          <Results
            text1="+129"
            icon={TbWorld}
            title="183"
            text2="Worldwide Allies"
            text3="Joined this fiscal year"
            continerClass=""
          />
        </div>
      </section>
    </div>
  );
};

export default FeatureTestmonilais;
