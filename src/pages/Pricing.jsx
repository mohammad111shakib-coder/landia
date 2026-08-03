import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import PricingComp from "../components/pricingComp";
import { MdOutlineToggleOff } from "react-icons/md";
import { MdOutlineToggleOn } from "react-icons/md";
import PricingQuestions from "../components/PricingQuestions";

const Pricing = () => {
  const [month, setMonth] = useState(true);
  // const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-gray-100 flex flex-col justify-center items-center pt-10 ">
        <SectionTitle
          title="Pricing"
          subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit."
        />
        <div className="flex flex-row justify-center items-center py-1 mb-6 gap-4 px-4  bg-white rounded-sm">
          <button
            onClick={() => setMonth(true)}
            className={month ? "font-semibold" : "text-gray-400"}>
            Monthly
          </button>
          {month ? (
            <MdOutlineToggleOff className=" text-3xl text-gray-500" />
          ) : (
            <MdOutlineToggleOn className=" text-3xl text-gray-500" />
          )}
          <button
            onClick={() => setMonth(false)}
            className={month ? "text-gray-400" : "font-semibold"}>
            Yearly
          </button>

          <p className="border rounded-xl px-1 text-[14px] bg-gray-200">
            Save20%
          </p>
        </div>
        {/* bottom part */}
        <div className="grid grid-cols-1 gap-4 m-4 mb-7 md:grid-cols-3 md:flex-row">
          <PricingComp
            title="ESSENTIAL"
            number="15"
            month="per month"
            year="per year"
            isMonthly={month}
            text="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi."
            subtitle="Includes:"
            tik1="✓ Vivamus magna justo lacinia"
            tik2="✓ Nulla porttitor accumsan tincidunt"
            tik3="✓ Curabiture arcu ercu accumsan"
            tik4="✕ Pellentesque in ipsum lacinia"
            tik5="✕ Vestibulum ante primis faucibus"
            buttom="Begin Now"
            tikClass=" text-gray-500"
          />
          <PricingComp
            title="PROFESSIONAL"
            number="35"
            month="per month"
            year="per year"
            isMonthly={month}
            text="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi."
            subtitle="Everything in Essential, plus:"
            tik1="✓ Vivamus magna justo lacinia"
            tik2="✓ Nulla porttitor accumsan tincidunt"
            tik3="✓ Curabiture arcu ercu accumsan"
            tik4="✓ Pellentesque in ipsum lacinia"
            tik5="✓ Vestibulum ante primis faucibus"
            buttom="Select Plan"
            recommend="Recommended"
            recommendClss="absolute -top-4 border bg-black text-white p-0.5 text-[14px] px-2 rounded-lg"
            continerClass="border mt-3 "
            buttomClass=" bg-black text-white shadow-lg "
          />
          <PricingComp
            title="ENTERPRISE"
            number="79"
            month="per month"
            year="per year"
            isMonthly={month}
            text="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi."
            subtitle="Everything in Essential, plus:"
            tik1="✓ Vivamus magna justo lacinia"
            tik2="✓ Nulla porttitor accumsan tincidunt"
            tik3="✓ Curabiture arcu ercu accumsan"
            tik4="✓ Pellentesque in ipsum lacinia"
            tik5="✓ Vestibulum ante primis faucibus"
            buttom="Contact Sales"
          />
        </div>
      </div>
      {/*  freqently qouestions */}
      <div className="bg-gray-100 pt-10 flex flex-col justify-center gap-6 pb-6 ">
        <SectionTitle
          title="Frequently Asked Quedtions"
          subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit."
          titleClass="text-xl md:text-3xl"
        />
        <PricingQuestions
          number="01"
          questin="Nulla porttitor accumsan tincidunt"
          answer="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi Pellentesque."
          classNumber=""
        />
        <PricingQuestions
          number="02"
          questin="Nulla porttitor accumsan tincidunt accumsan"
          answer="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi Pellentesque."
          classNumber=""
        />
        <PricingQuestions
          number="03"
          questin="Nulla porttitor accumsan tincidunt"
          answer="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi Pellentesque."
          classNumber=""
        />
        <PricingQuestions
          number="04"
          questin="Nulla tincidunttincidunt porttitor accumsan tincidunt"
          answer="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi Pellentesque."
          classNumber=""
        />
        <PricingQuestions
          number="05"
          questin="Nulla porttitortincidunt accumsan tincidunt"
          answer="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi Pellentesque."
          classNumber=""
        />
        <PricingQuestions
          number="06"
          questin="Nulla porttitor accumsan tincidunt"
          answer="Prawsenr sapien massa convallis a pellentesque nec egestas non nisi Pellentesque."
          classNumber=""
        />
      </div>
    </div>
  );
};

export default Pricing;
