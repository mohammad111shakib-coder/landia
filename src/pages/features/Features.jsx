import React from "react";
import { MdRocketLaunch } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { RxLightningBolt } from "react-icons/rx";
import { FaHeartPulse } from "react-icons/fa6";
import { PiChartLineUp } from "react-icons/pi";
import Discription from "../../components/Discription";
import SectionTitle from "../../components/SectionTitle";
import FeatureCards from "../../components/FeatureCards";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import FeatureInfo from "../../components/FeatureInfo";
import { FaQuoteLeft } from "react-icons/fa";

const features = [
  {
    icon: MdRocketLaunch,
    title: "Breakthtough",
    text1: "Next-gen solutions",
  },
  {
    icon: FaShieldAlt,
    title: "Protection",
    text1: "Robust safeguards",
  },
  {
    icon: RxLightningBolt,
    title: "Velocity",
    text1: "Blazing fast delivery",
  },
  {
    icon: FaHeartPulse,
    title: "Assistance",
    text1: "Round-the-clock help",
  },
];

const featureInfo = [
  {
    icon: LuSquareArrowOutUpRight,
    title: "Streamlined Control Panel",
    text1: "Core",
    text2:
      "Praesent sapien massa conncallis a pellentesque nec egestas non nisi cras ultricies ligula sed magna dictum porta vestibulume ante ipsum.",
    tik1: "✓ Live metrics overview",
    tik2: "✓ Adjustable components",
    tik3: "✓ Dynamic visual repots",
  },
  {
    icon: PiChartLineUp,
    title: "Deep Insigh Engine",
    text1: "Popular",
    text2:
      "Donec velit neque auctor sit aliquam vel ullamcoper sit amet ligula nulla quis lorem ut Libero maleduafa feugiat vivamus suscipit tortor.",
    tik1: "✓ Forecast modeling",
    tik2: "✓ Tailored dashborards",
    tik3: "✓ Deep data browsing",
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: "Robust Protection Layer",
    text1: "Essential",
    text2:
      "Vestibulum ac diam sit amet quam vehicle elementum sed sit amet dui pellentesque in ipsum id orci porta dapibus curabuture non nulla sit amet.",
    tik1: "✓ Full-stack encryption",
    tik2: "✓ Granular permission",
    tik3: "✓ Regulatory tracking",
  },
];

function Features() {
  return (
    <div className="parent pt-9">
      {/* header part */}

      <SectionTitle
        title="Features"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit."
      />

      {/* bottom part */}
      <div className="ParentSecondPart flex flex-col md:flex-row gap-3 justify-around md:h-100  ">
        <section className="flex flex-col gap-6 md:w-100">
          {features.map((item) => (
            <Discription
              key={item.title}
              icon={item.icon}
              title={item.title}
              text1={item.text1}
              variant="features"
              containerClass=""
              titleClass=""
              iconClass=""
              textClass=""
            />
          ))}
        </section>
        {/* image part */}
        <div className=" pareent flex flex-col justify-center items-center md:flex-row col-span-2  md:border rounded-xl overflow-hidden ">
          <div className="image mb-6">
            <img src="/image7.jfif" alt="image7" className="  w-full " />
          </div>
          {/* dec part of page */}
          <section className="flex flex-col border border-gray-400  px-4 pt-2 h-full ">
            <h4 className=" mb-2 border border-gray-500 rounded-2xl px-2 py-1 w-26 text-[14px] font-medium bg-gray-200">
              Breakthrough
            </h4>

            <h2 className="mb-3 text-2xl font-medium">
              Pioneering Digital Craft
            </h2>
            <div className="text-gray-700 text-sm">
              <p>
                Quas molestias excepturi sint occaecati cupiditate non
                provident,
              </p>
              <p className="mb-3">
                similique sunt in supla qui officia deserunt mollitai animi
                laborisam.
              </p>
            </div>
            <div className="text-[13px] mb-3 ">
              <p>✓ Remporibus autem quibsdam rerum Necessitatibus</p>
              <p>✓ Itaque earum rerum hic tenetur sapiente</p>
              <p>✓ Nemo enim ipsam voluptatem quia aspernatur</p>
            </div>
            <hr className="text-gray-400 font-light" />
            <div className="flex flex-row justify-between items-center py-3  ">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold">97%</h2>
                <p className="text-gray-600 text-sm">RELIABILITY</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold">40K+</h2>
                <p className="text-gray-600 text-sm">CLIENTS</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold">365</h2>
                <p className="text-gray-600 text-sm">DAYS ACTIVE</p>
              </div>
            </div>
            <hr className="text-gray-400 font-light" />
            <div className="border border-gray-950 bg-gray-950 text-gray-50 w-36 h-10 flex justify-center my-4 font-medium  rounded-sm shadow-lg hover:scale-110 transition-transform">
              <button>Explore Futher →</button>
            </div>
          </section>
        </div>
      </div>
      {/* features card two */}
      <div className=" grid grid-rows-1 gap-4 md:grid-cols-3 mt-6 ">
        {/* left part */}
        <section className=" flex flex-col gap-4 md:col-span-2   ">
          {featureInfo.map((card) => (
            <FeatureInfo
              key={card.title}
              icon={card.icon}
              title={card.title}
              text1={card.text1}
              text2={card.text2}
              tik1={card.tik1}
              tik2={card.tik2}
              tik3={card.tik3}
              classContenier=""
              titleClass=""
              classIcon=""
              classText1=""
              classText2=""
              classTik=""
            />
          ))}
        </section>
        {/* rigth part */}
        <div className="flex flex-col">
          {/* image part */}
          <div className="row-span-1 mb-4  ">
            <img
              src="/image10.jfif"
              alt="image10"
              className="object-cover rounded-sm"
            />
          </div>
          {/* buttom left */}
          <div className=" border rounded-2xl p-5 ">
            <FaQuoteLeft className="text-2xl mb-3 text-gray-500" />
            <p className="font-light text-gray-700">
              Sed porttitor lectus nibh vivamus magna just lacinia eget
              consectetur sed convallis at tellus curabitur aliquet id dui
              posuere blandit.
            </p>
            <hr className="text-gray-300 mt-14 mb-3" />
            <div className="flex flex-row items-center gap-4">
              <span className="block  w-14 h-14  ">
                <img
                  src="/image11.jfif"
                  alt="image11"
                  className=" text-center object-cover"
                />
              </span>

              <div>
                <h1 className="font-semibold">Rebecca Thornton</h1>
                <p className="text-[13px] font-light text-gray-700">
                  VP of Engimeering Nova Tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
