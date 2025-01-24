"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Twitter from "../icons/Twitter.svg";
import Telegram from "../icons/Telegram.svg";
import Margin from "../icons/Margin.svg";
import Logo from "../icons/Logo.svg";
import Search from "../icons/Search.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between lg:px-[20.5px] md:px-0 px-[20.5px] py-[10px] bg-white relative z-50 fixed w-full top-0 left-0">
      <div
        className="pl-[2.5px] py-[15px] flex-1 md:flex-none z-50"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {/* Hamburger menu */}
        <button className="md:hidden py-[7.5px] px-[5.67px] w-[30px] h-[30px] flex flex-col justify-between items-center transition-transform duration-300 ease-in-out z-50">
          {isMenuOpen ? (
            // Close (X) icon
            <div className="relative w-[22px] h-[22px]">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black rounded-xl transform -translate-y-1/2 rotate-45 transition-all duration-300"></div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black rounded-xl transform -translate-y-1/2 -rotate-45 transition-all duration-300"></div>
            </div>
          ) : (
            // Hamburger menu (3 horizontal lines stacked vertically)
            <>
              <div className="w-[22px] p-[1px] bg-black mb-[6.5px] rounded-xl transition-all duration-300"></div>
              <div className="w-[22px] p-[1px] bg-black mb-[6.5px] rounded-xl transition-all duration-300"></div>
              <div className="w-[22px] p-[1px] bg-black rounded-xl transition-all duration-300"></div>
            </>
          )}
        </button>
      </div>

      <Image
        src={Logo}
        alt="Logo"
        className="w-[136px] flex-1 md:flex-none z-50"
      />
      <div className="flex-1 md:flex-none"></div>
      <div className="relative md:flex hidden items-center w-[350px] h-[40px] mx-auto rounded-full shadow-custom-light border border-1 border-[#E5E5E5] bg-[#F2F2F2]">
        <Image src={Search} alt="Search" className="absolute left-3" />
        <input
          type="text"
          placeholder="Search ai agents..."
          className="w-full pl-[41px] text-[#000] placeholder-[#737373] rounded-full bg-[#F2F2F2] focus:outline-none"
        />
        <div className="absolute right-3 flex items-center justify-center px-[7px] py-0.5 text-[0.625rem] font-normal text-[#737373] bg-[#F2F2F2] rounded-md border border-1 border-[#E5E5E5]">
          ⌘ K
        </div>
      </div>

      <div className="md:flex hidden items-center py-2 pr-2 pl-4">
        <Image src={Twitter} alt="Twitter" width={24} height={24} />
        <Image
          src={Telegram}
          alt="Telegram"
          className="ml-2"
          width={24}
          height={24}
        />
        <Image
          src={Margin}
          alt="Margin"
          className="ml-2"
          width={36}
          height={36}
        />
        <button className="px-0 md:px-6 bg-black text-white rounded-md hidden md:block ml-[13px] w-[143px] h-[48px]">
          Start Buying
        </button>
      </div>

      {/* Overlay Layer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden top-36"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-[-0.125rem] opacity-0"
        } fixed top-[60px] left-0 right-0 z-50 bg-white shadow-lg flex flex-col pt-[20px] pb-[40px] md:hidden transition-all duration-500 ease-in-out`}
      >
        {/* Main menu content */}
        <div className="flex flex-col p-4">
          <div className="relative flex items-center w-[350px] h-[40px] mx-auto rounded-full shadow-custom-light border border-1 border-[#E5E5E5] bg-[#F2F2F2] mb-6">
            <Image src={Search} alt="Search" className="absolute left-3" />
            <input
              type="text"
              placeholder="Search ai agents..."
              className="w-full pl-[41px] text-[#000] placeholder-[#737373] rounded-full bg-[#F2F2F2] focus:outline-none"
            />
            <div className="absolute right-3 flex items-center justify-center px-[7px] py-0.5 text-[0.625rem] font-normal text-[#737373] bg-[#F2F2F2] rounded-md border border-1 border-[#E5E5E5]">
              ⌘ K
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-black text-white rounded-md mb-2">
            Start Buying
          </button>
          <div className="flex justify-around mt-4">
            <Image src={Twitter} alt="Twitter" />
            <Image src={Telegram} alt="Telegram" />
            <Image src={Margin} alt="Margin" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
