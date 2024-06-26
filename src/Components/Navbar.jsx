import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SiPrestashop } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { TbPhoneCalling } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import { PiHamburgerLight } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const navItems = [
    { to: "/", icon: <FaHome className="h-6 w-8" />, label: "Home" },
    {
      to: "/Products",
      icon: <AiFillProduct className="h-6 w-8" />,
      label: "Products",
    },
    { to: "/about", icon: <IoNewspaper className="h-6 w-8" />, label: "About" },
    {
      to: "/contact",
      icon: <TbPhoneCalling className="h-6 w-8" />,
      label: "Contact",
    },
    { to: "/Cart", icon: <BsCart4 className="h-6 w-8" />, label: "Cart" },
    { to: "/login", icon: null, label: "Login", isButton: true },
  ];

  return (
    <div className="bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 h-[10vh] flex justify-between items-center px-[2rem] fixed top-0 left-2 right-2 z-[99999] mx-auto rounded-lg mt-[5vh] mx-[2.5%]">
      <div className="flex items-center">
        <NavLink to="/">
          <SiPrestashop className="h-8 w-10" />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {navItems.map((item, index) =>
          item.isButton ? (
            <NavLink to={item.to} key={index} className="text-white">
              <button>{item.label}</button>
            </NavLink>
          ) : (
            <NavLink
              to={item.to}
              key={index}
              className="flex items-center space-x-2 text-white"
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          )
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center z-[100001]">
        {/* Conditional rendering for Hamburger and Close icons */}
        {isMenuOpen ? (
          <MdOutlineClose
            className="h-8 w-8 text-white cursor-pointer z-[100002]"
            onClick={() => setIsMenuOpen(false)} // Close the menu
          />
        ) : (
          <PiHamburgerLight
            className="h-8 w-8 text-white cursor-pointer"
            onClick={() => setIsMenuOpen(true)} // Open the menu
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-fuchsia-900 flex flex-col items-left pl-10 justify-center z-[100000]">
          {navItems.map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className="flex items-center space-x-2 text-white text-2xl mb-4"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
