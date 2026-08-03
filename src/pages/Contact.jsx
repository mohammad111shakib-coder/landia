// import Discription from "../components/Discription";
// import SectionTitle from "../components/SectionTitle";
// import { HiOutlineMail } from "react-icons/hi";
// import { LuPhone } from "react-icons/lu";
// import { IoLocationOutline } from "react-icons/io5";
// import { VscTwitter } from "react-icons/vsc";
// import { SlSocialLinkedin } from "react-icons/sl";
// import { FiFacebook } from "react-icons/fi";

// const Contact = () => {
//   return (
//     <div className="mt-12 md:mx-12">
//       <SectionTitle
//         title="Contact"
//         subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
//       />
//       {/* buttom part */}
//       <section className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
//         {/* left part */}
//         <div className="flex flex-col col-span-1 ">
//           <h2 className="text-2xl font-semibold mb-1 text-center">
//             Get in Touch
//           </h2>
//           <p className="mb-1 text-gray-600 text-center">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commom
//             nmklcsdnl kderc iuren .
//           </p>
//           <hr className="text-gray-300 mb-4" />
//           <div className="flex flex-col gap-2 mb-2">
//             <Discription
//               icon={HiOutlineMail}
//               title="EMAIL"
//               text1="support@example.com"
//               iconClass="border rounded-sm p-1 bg-gray-200"
//               titleClass=""
//               containerClass="gap-4 "
//               textClass=""
//             />
//             <Discription
//               icon={LuPhone}
//               title="PHONE"
//               text1="+1(555)863-174"
//               iconClass="border rounded-sm p-1 bg-gray-200"
//               titleClass=""
//               containerClass="gap-4"
//               textClass=""
//             />
//             <Discription
//               icon={IoLocationOutline}
//               title=" Address"
//               text1="1428 Elm Street,denver,CO80202"
//               iconClass="border rounded-sm p-1 bg-gray-200"
//               titleClass=""
//               containerClass="gap-4"
//               textClass=""
//             />
//           </div>
//           <hr className="text-gray-300 mb-1" />
//           <p className="mb-1 text-[13px]">FOLLOW US</p>
//           <div className="flex gap-5 ">
//             <VscTwitter className=" text-2xl p-0.5 border rounded-sm  bg-gray-200 hover:scale-110" />
//             <SlSocialLinkedin className=" text-2xl p-0.5 border rounded-sm  bg-gray-200 hover:scale-110" />
//             <FiFacebook className=" text-2xl p-0.5 border rounded-sm  bg-gray-200 hover:scale-110" />
//           </div>
//         </div>
//         {/* rigth part */}

//         <form className="col-span-2 border rounded-2xl py-4 px-4 md:px-10 ">
//           <div className="parent flex flex-col">
//             <div className="grid grid-cols-2  gap-10  mb-7">
//               <div className="">
//                 <label for="name">Name</label>
//                 <br />
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Janso"
//                   className="border rounded-lg p-1 w-full"
//                 />
//                 <br />
//               </div>
//               <div className=" ">
//                 <label for="email">Email</label>
//                 <br />
//                 <input
//                   type="email"
//                   name=""
//                   id="email"
//                   placeholder="janso@gmail.com"
//                   className="border rounded-lg p-1 w-full"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-10 mb-7 ">
//               <div className="">
//                 <label for="phone">Phone-number</label>
//                 <br />
//                 <input
//                   type="number"
//                   name=""
//                   id="phone"
//                   placeholder="+1(555)000-000"
//                   className="border rounded-lg p-1 w-full"
//                 />
//                 <br />
//               </div>
//               <div className="">
//                 <label for="topic">Topic</label>
//                 <br />
//                 <input
//                   type="text"
//                   name=""
//                   id="topic"
//                   placeholder="your topic"
//                   className="border rounded-lg p-1 w-full"
//                 />
//               </div>
//             </div>

//             <div className="">
//               <label for="message">Message</label>
//               <br />
//               <textarea
//                 name=""
//                 id="message"
//                 rows="4"
//                 cols=""
//                 placeholder="Tell us how we can help..."
//                 className="border rounded-lg p-1 w-full "></textarea>
//             </div>

//             <div className="flex flex-row justify-between items-center my-3">
//               <p className="text-gray-600 text-[12px] md:text-[14px]">
//                 We typically respond within 24 hours
//               </p>
//               <button
//                 type="submit"
//                 className=" border rounded-lg py-1 px-2 text-[12px] md:text-[16px]  bg-black text-white hover:scale-105">
//                 Submiit Message
//               </button>
//             </div>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import Discription from "../components/Discription";
import SectionTitle from "../components/SectionTitle";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { VscTwitter } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.topic.trim() ||
      !formData.message.trim()
    ) {
      alert("❌ Please fill in all fields.");
      return;
    }

    alert("✅ Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    });
  };

  return (
    <div className="mt-12 md:mx-12">
      <SectionTitle
        title="Contact"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Part */}
        <div className="flex flex-col col-span-1">
          <h2 className="text-2xl font-semibold mb-1 text-center">
            Get in Touch
          </h2>

          <p className="mb-1 text-gray-600 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commom
            nmklcsdnl kderc iuren.
          </p>

          <hr className="text-gray-300 mb-4" />

          <div className="flex flex-col gap-2 mb-2">
            <Discription
              icon={HiOutlineMail}
              title="EMAIL"
              text1="support@example.com"
              iconClass="border rounded-sm p-1 bg-gray-200"
              containerClass="gap-4"
            />

            <Discription
              icon={LuPhone}
              title="PHONE"
              text1="+1(555)863-174"
              iconClass="border rounded-sm p-1 bg-gray-200"
              containerClass="gap-4"
            />

            <Discription
              icon={IoLocationOutline}
              title="ADDRESS"
              text1="1428 Elm Street, Denver, CO 80202"
              iconClass="border rounded-sm p-1 bg-gray-200"
              containerClass="gap-4"
            />
          </div>

          <hr className="text-gray-300 mb-1" />

          <p className="mb-1 text-[13px]">FOLLOW US</p>

          <div className="flex gap-5">
            <VscTwitter className="text-2xl p-0.5 border rounded-sm bg-gray-200 hover:scale-110" />
            <SlSocialLinkedin className="text-2xl p-0.5 border rounded-sm bg-gray-200 hover:scale-110" />
            <FiFacebook className="text-2xl p-0.5 border rounded-sm bg-gray-200 hover:scale-110" />
          </div>
        </div>

        {/* Right Part */}
        <form
          onSubmit={handleSubmit}
          className="col-span-2 border rounded-2xl py-4 px-4 md:px-10">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-10 mb-7">
              <div>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Janso"
                  className="border rounded-lg p-1 w-full"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="janso@gmail.com"
                  className="border rounded-lg p-1 w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mb-7">
              <div>
                <label htmlFor="phone">Phone Number</label>
                <br />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1(555)000-000"
                  className="border rounded-lg p-1 w-full"
                />
              </div>

              <div>
                <label htmlFor="topic">Topic</label>
                <br />
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  placeholder="Your topic"
                  className="border rounded-lg p-1 w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                className="border rounded-lg p-1 w-full"
              />
            </div>

            <div className="flex justify-between items-center my-3">
              <p className="text-gray-600 text-[12px] md:text-[14px]">
                We typically respond within 24 hours.
              </p>

              <button
                type="submit"
                className="border rounded-lg py-1 px-2 text-[12px] md:text-[16px] bg-black text-white hover:scale-105">
                Submit Message
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
