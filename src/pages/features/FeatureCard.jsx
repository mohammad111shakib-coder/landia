import React from "react";
import Discription from "../../components/Discription";
import { BsCpu } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";
import { BsDatabase } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineFlashOn } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle";
import FeatureCards from "../../components/FeatureCards";
import { RiSignalCellular3Line } from "react-icons/ri";
import { IoLockClosedOutline } from "react-icons/io5";
import { PiChartLineUp } from "react-icons/pi";
import { RiShieldKeyholeLine } from "react-icons/ri";
const cards = [
  {
    icon: RiSignalCellular3Line,
    title: "Data-Driven Growth Engine",
    text1: "core",
    text2:
      "Praesent vestinulum dapibus nibh.Etiam iaculis nunc ac metus.Ut id nisl quis enim dignissim sagittis.Fusce ac felis sit amet ligula pharetra condimentum.",
    tik1: "✓ Instant performance dashboards",
    tik2: "✓ Scheduled insight generation",
    link: "Explore Solutions →",
  },
  {
    icon: IoLockClosedOutline,
    title: "Unified Protection Suite",
    text1: "Essential",
    text2:
      "Donec vitac sapien ut libero venenatis faucibus. Nullam quis ante.Etiam sit ametorci eget eros faucibus tincidunt.Duis leo sed fringilla mauris sit amet nibh.",
    tik1: "✓ End-to-end cipher layers",
    tik2: "✓ Dual-step identity verification",
    link: "View Framework → ",
  },
];
// for black part
const cardssBlack = [
  {
    icon: RiShieldKeyholeLine,
    title: "Robust Protection",
    text1: "Nemo enim epsam voluptatem quia voluptas sit aspernatur. ",
  },
  {
    icon: MdOutlineFlashOn,
    title: "Rapid Deployment",
    text1: "Quis autem vel eum iure reprehenderit qui in voluptate.",
  },
  {
    icon: PiChartLineUp,
    title: "Scalable Growth",
    text1: "At vero eos et accusamust et iusto odio dignissmios ducimus.",
  },
];
const cardss = [
  {
    icon: IoCloudUploadOutline,
    title: "Cloud Sync",
    text1: "Building",
    color: "blue",
  },
  {
    icon: BsDatabase,
    title: "Data Warehouse",
    text1: "Active",
    color: "green",
  },
  {
    icon: IoMdSettings,
    title: "Workflow Engine",
    text1: "Active",
    color: "green",
  },
  {
    icon: BsCpu,
    title: "ML Pipeline",
    text1: "Upcoming",
    color: "gray",
  },
];

const FeatureCard = () => {
  return (
    <div className="parent  pt-9">
      <SectionTitle
        title="Features Cards"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit."
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mx-4 ">
        {cards.map((card) => (
          <FeatureCards
            key={card.title}
            icon={card.icon}
            title={card.title}
            text1={card.text1}
            text2={card.text2}
            tik1={card.tik1}
            tik2={card.tik2}
            link={card.link}
            variant="features"
            containerClass=" grid grid-row-2 border border-gray-100 shadow-sm p-3 rounded-lg hover:bg-gray-100  "
            titleClass="font-semibold text-xl mb-1"
            iconClass="flex flex-row justify-between items-center mb-4"
            text1Class="border border-gray-500 bg-gray-200 rounded-2xl px-2 font-semibold "
            text2Class="text-gray-600 text-[13px] mb-3"
            tikClass="text-gray-700 text-[12px]"
            linkClass="my-4 font-medium text-[13px] w-48 px-1 hover:translate-x-2 md:text-[16px] "
          />
        ))}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-4 ">
        {cardss.map((item) => (
          <Discription
            key={item.title}
            icon={item.icon}
            title={item.title}
            text1={item.text1}
            color={item.color}
            variant="features"
            containerClass="flex md:pr-1 "
            titleClass=" text-[15px] md:font-semibold text-xl "
            iconClass="border border-gray-200 rounded-sm p-1 bg-gray-200 "
            textClass=" text-[14px] mt-3 text-center  rounded-xl  max-w-24 "
          />
        ))}
      </section>
      {/*  black part */}
      <section className="parentBlack  bg-[#262626] mt-10 p-6 text-white gap-5 rounded-sm grid md:grid-cols-3  ">
        <div className="childLeft grid col-span-2 justify-center items-center   ">
          <div className="max-w-177 max-h-90 ">
            <img
              src="/image8.jfif"
              alt="image8"
              className="md:w-177 h-90 rounded-xl object-cover"
            />
          </div>
          {/* bottom left part */}
          <section className="flex flex-col mt-4 gap-9 md:flex-row  ">
            {cardssBlack.map((item) => (
              <Discription
                key={item.icon}
                icon={item.icon}
                title={item.title}
                text1={item.text1}
                variant="black"
                containerClass="flex flex-col justify-center items-start bg-[#353535] md:max-w-53 h-auto   "
                titleClass="font-semibold text-xl mb-1 "
                iconClass="mb-0 text-xl"
                textClass=" "
              />
            ))}
          </section>
        </div>
        <div className="childRight flex flex-col justify-between items-start  p-4 pt-8 border rounded-xl bg-[#353535] ">
          {/* top rigth */}
          <div className="">
            <h4 className="border border-[#808080] bg-[#4A4A4A] text-[13px] w-36 text-center md:w-40 p-1 rounded-2xl mb-4">
              ENTERPRISE REAADY
            </h4>
            <h2 className=" font-bold text-[16px]  md:text-2xl mb-4">
              Elevate Your Operations With Modern Infrastructure
            </h2>
            <p className=" text-[#808080] mb-4 font-light text-[12px] md:text-[14px] ">
              Temporibus autem quibusdam aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiande sint et
              molestiae non recusandae.
            </p>
            <hr className="text-[#b0b0b0] mb-4 " />
            <div className="text-[11px] md:text-[14px] font-light">
              <p>✓ Optimize workflows and boost overall theoughput</p>
              <p>✓ Realize significant expense reduction and performance</p>
              <p>✓ Expand your infrastruture with adaptive percision</p>
            </div>
          </div>
          {/* bottom rigth */}
          <div className="flex flex-row gap-4 my-4  text-[12px] md:text-[16px]">
            <button className="block border border-[#b0b0b0] rounded-lg p-1 text-center cursor-pointer  hover:bg-[#4A4A4A] ">
              Begin Now
            </button>
            <button className="block border border-[#b0b0b0] rounded-lg  p-1 text-center cursor-pointer hover:bg-[#4A4A4A]">
              Explore Further
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureCard;
