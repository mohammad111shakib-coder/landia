import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import LoginBottom from "../components/LoginBottom";
// import Sign from "../components/Sign";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  {
    path: "/features",
    name: "Features",

    children: [
      { path: "/features", name: "Features" },
      {
        path: "/features/feature-card",
        name: "FeatureCard",
      },
      {
        path: "/features/feature-testimonials",
        name: "Testimonials",
      },
    ],
  },
  { path: "/services", name: "Services" },
  { path: "/pricing", name: "Pricing" },
  { path: "/contact", name: "Contact" },
];

const Navabar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // mobile submenu
  const dropdownRef = useRef(null);
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 right-0 w-full shadow-md z-50">
      <nav className="flex justify-between items-center rounded-3xl bg-gray-100 p-2 sticky z-50">
        <h1 className="text-2xl font-bold px-5 md:px-4">Landia</h1>

        {/* desctop*/}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((link) =>
            link.children ? (
              <li
                key={link.name}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1 cursor-pointer">
                  {link.name}
                  <IoMdArrowDropdown
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <ul className="absolute top-full right-0 pt-2 bg-white border rounded-xl shadow-md py-2 w-48 z-50">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          end
                          onClick={() => setDropdownOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                              isActive ? "bg-gray-200 font-bold" : ""
                            }`
                          }>
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-2xl px-3 py-1 bg-gray-300 text-gray-950"
                      : ""
                  }>
                  {link.name}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <div className="flex flex-row justify-between items-center gap-4">
          <button
            onClick={() => {
              setLogin(true);
            }}
            className="mr-5 px-2.5 hover:scale-110 rounded-2xl  py-1 bg-gray-950 text-gray-100 md:block ">
            Login
          </button>
          {login && <LoginBottom onClose={() => setLogin(false)} />}

          {open ? (
            <IoMdClose
              onClick={() => setOpen(false)}
              className="cursor-pointer text-3xl font-bold md:hidden"
            />
          ) : (
            <IoMdMenu
              onClick={() => setOpen(true)}
              className="cursor-pointer text-3xl font-bold md:hidden"
            />
          )}
        </div>

        {/* mobile */}

        {open && (
          <ul className="md:hidden flex flex-col gap-4 absolute top-10 right-0 border rounded-xl mt-3 pt-1 px-2 bg-white w-full max-w-3/3 h-screen max-h-96 overflow-y-auto">
            {links.map((link) =>
              link.children ? (
                <li className="text-[20px] pt-2 w-full px-5" key={link.name}>
                  <button
                    onClick={() => setMobileDropdownOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full">
                    {link.name}
                    <IoMdArrowDropdown
                      className={`transition-transform duration-200 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />

                    {/* <button
                      onClick={() => {
                        setLogin(true);
                      }}
                      className="hidden mr-5 px-2.5 hover:scale-110 rounded-2xl  py-1 bg-gray-950 text-gray-100 md:block ">
                      Login
                    </button>
                    {login && <LoginBottom onClose={() => setLogin(false)} />}

                    <button
                      onClick={() => {
                        setSign(true);
                      }}
                      className="hidden mr-5 px-2.5 hover:scale-110 rounded-2xl  py-1 bg-gray-950 text-gray-100 md:block ">
                      Sign Up
                    </button>
                    {login && <Sign onClose={() => setSign(false)} />} */}
                  </button>

                  {mobileDropdownOpen && (
                    <ul className="pl-4 mt-2 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            end
                            onClick={() => {
                              setOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className={({ isActive }) =>
                              `block w-full text-[16px] ${
                                isActive ? "font-bold" : ""
                              }`
                            }>
                            {child.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}

                  <hr className="text-gray-300 mt-2" />
                </li>
              ) : (
                <li className="text-[20px] pt-2 w-full px-5" key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block w-full ${isActive ? "font-bold" : ""}`
                    }>
                    {link.name}
                  </NavLink>
                  <hr className="text-gray-300" />
                </li>
              ),
            )}
          </ul>
        )}
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-10"
          onClick={() => setOpen(false)}></div>
      )}
    </div>
  );
};

export default Navabar;
