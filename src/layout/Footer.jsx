import { VscTwitter } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-2xl p-4 mt-4">
      {/* top part */}
      <div className="grid md:grid-cols-4 justify-center gap-4 ">
        {/* top left */}
        <div className="flex flex-col col-span-1 gap-4">
          <h2 className="text-2xl font-semibold">Landia</h2>
          <p className="text-[12px] text-gray-600 md:text-[16px ]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            repuestias officiis autem deleniti dolores vero fugiat enim!
          </p>
          {/* Icons */}
          <div className="flex  gap-5">
            <VscTwitter className=" text-2xl p-0.5 border rounded-sm  bg-gray-200 hover:scale-110" />
            <SlSocialLinkedin className=" text-2xl p-0.5 border rounded-sm  bg-gray-200 hover:scale-110" />
            <FiFacebook className=" text-2xl p-0.5 border rounded-sm  bg-gray-200 hover:scale-110" />
            <FaInstagram className=" text-2xl p-0.5 border rounded-sm  bg-gray-200 hover:scale-110" />
            <IoLogoTiktok className=" text-2xl p-0.5 border rounded-sm  bg-gray-200 hover:scale-110" />
          </div>
        </div>
        {/* top center */}
        <div className=" col-span-2">
          <table className=" flex flex-row justify-center gap-10">
            <td>
              <th>shop</th>
              <hr className="w-10 h-1 rounded-xl bg-black my-1" />
              <tr>New Arrivals</tr>
              <tr>Best Selles</tr>
              <tr>Sale Items</tr>
              <tr>Mens Collection</tr>
              <tr>Womens Collection</tr>
              <tr>Accessories</tr>
            </td>
            <td>
              <th>Service</th>
              <hr className="w-10 h-1 rounded-xl bg-black my-1" />
              <tr> Arrivals</tr>
              <tr> Selles</tr>
              <tr> Items</tr>
              <tr>Collection</tr>
              <tr> Collection</tr>
              <tr>sories</tr>
            </td>
            <td>
              <th>Company</th>
              <hr className="w-10 h-1 rounded-xl bg-black my-1" />
              <tr>New </tr>
              <tr>Best </tr>
              <tr>Sale </tr>
              <tr>Mens </tr>
              <tr>Womens </tr>
              <tr>Acces</tr>
            </td>
          </table>
        </div>
        {/* top rigth */}
        <div className="flex  flex-col col-span-1">
          <h4 className="font-bold">Stay Updated</h4>
          <hr className="w-10 h-1 rounded-xl bg-black my-1" />
          <p className="my-1 text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            dolor, repellendus.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg px-1 py-2 w-full"
            />
            <p className="border text-white font-extrabold text-center rounded-sm w-10 h-8 bg-black absolute bottom-0.75 right-1">
              →
            </p>
          </div>
        </div>
        <hr className="text-gray-600 " />
      </div>
      {/* part bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-3">
        {/* left botttm */}
        <p className="text-gray-600 text-[13px] mt-2 ">
          © Copyright <span className="font-semibold text-black">Landia.</span>
          All Rights reserves.
        </p>
        {/* rigth bottm */}

        <div className=" flex flex-row items-center gap-4 text-gray-600 text-[13px]">
          <p>Terms of Services</p>
          <p>Privaty Policy</p>
          <p>Cookies</p>
          <p className="border text-white rounded-[50%] px-2 py-0.5 bg-black">
            ⇑
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
