import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  const [toggler, setToggler] = useState(false);
  const location = useLocation();
  console.log(location);
  return (
    <header className="py-[10px] bg-teal-400  sticky top-0 font-mono  overflow-x-hidden">
      <nav className="flex justify-between max-w-[1024px] lg:mx-auto md:mx-6 mx-2 ">
        <div className="nav-logo cursor-pointer">
          <h2 className="text-4xl font-mono font-bold capitalize">logo</h2>
        </div>
        {/* --------------------------- */}
        {/* nav items  */}
        {/* --------------------------- */}
        <div
          className={`nav-items lg:flex items-center fixed top-[50px] w-[100vw] duration-200 ease-in-out lg:w-auto h-full lg:h-auto justify-center left-0 bg-teal-400 lg:static ${
            toggler ? "flex" : "hidden "
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center ">
            <li
              onClick={() => setToggler(!toggler)}
              className=" relative  pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6  after:h-2  text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/home"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/home"
              >
                Home
              </Link>
            </li>
            <li
              onClick={() => setToggler(!toggler)}
              className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6  text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/about"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li
              onClick={() => setToggler(!toggler)}
              className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/contact"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li
              onClick={() => setToggler(!toggler)}
              className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/inventory"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/inventory"
              >
                Inventory
              </Link>
            </li>
            <li
              onClick={() => setToggler(!toggler)}
              className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/manage"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/manage"
              >
                Manage Inventory
              </Link>
            </li>
            <li
              onClick={() => setToggler(!toggler)}
              className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/signup"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/signup"
              >
                SignUp
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setToggler(!toggler)}
          className={`  mt-2 h-16 w-20 overflow-x-hidden  relative flex  justify-center items-center cursor-pointer lg:hidden ${
            toggler ? "toggle" : ""
          }`}
        >
          <div className="w-4 h-2 bg-black mb-2 rounded-full duration-200 ease-linear "></div>
          <div className="w-4  h-2 bg-black mb-2 rounded-full"></div>
          <div className="w-4 h-2 bg-black mb-2 rounded-full duration-200 ease-linear"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
