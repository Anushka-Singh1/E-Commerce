import React from 'react';
import { NavLink } from 'react-router-dom';
import { SiPrestashop } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { TbPhoneCalling } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";

function Navbar() {
  const navItems = [
    { to: "/", icon: <FaHome className='h-6 w-8' />, label: "Home" },
    { to: "/Products", icon: <AiFillProduct className='h-6 w-8' />, label: "Products" },
    { to: "/about", icon: <IoNewspaper className='h-6 w-8' />, label: "About" },
    { to: "/contact", icon: <TbPhoneCalling className='h-6 w-8' />, label: "Contact" },
    { to: "/Cart", icon: <BsCart4 className='h-6 w-8' />, label: "Cart" },
    { to: "/login", icon: null, label: "Login", isButton: true }
  ];

  return (
    <div className='bg-gradient-to-r from-amber-200 to-amber-400 h-[10vh] flex justify-between items-center px-[2rem] fixed top-0 left-2 right-2 z-[99999] mx-auto rounded-lg mt-[5vh] mx-[2.5%]'>
      <div className='flex items-center'>
        <NavLink to="/">
          <SiPrestashop className='h-12 w-12' />
        </NavLink>
      </div>
      
      <div className='flex space-x-6 items-center'>
        {navItems.map((item, index) => (
          item.isButton ? (
            <NavLink to={item.to} key={index} className="text-white">
              <button>{item.label}</button>
            </NavLink>
          ) : (
            <NavLink to={item.to} key={index} className="flex items-center space-x-2 text-white">
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          )
        ))}
      </div>
    </div>
  );
}

export default Navbar;
