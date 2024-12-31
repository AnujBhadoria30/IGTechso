import React, { useState } from "react";
import logo from "../Component/Img/logo.png";
import { IoChevronDown } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="flex justify-between">
        <div className="w-full sm:w-[75%] md:w-[67%] min-w-[150px] h-16 flex items-center justify-between px-4 sm:px-8 md:px-24 bg-gradient-to-r from-[#E0F5FA] to-[#FFFDE6]">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-20 sm:w-24 md:w-24 lg:w-32" />
          </div>

          <div className="lg:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl" /> 
            ) : (
              <AiOutlineMenu className="text-2xl" /> 
            )}
          </div>

     
          <div className="hidden lg:flex flex-row space-x-8 font-sans">
            <div className="cursor-pointer flex items-center">
              Home <IoChevronDown className="ml-1" />
            </div>
            <div className="cursor-pointer flex items-center">
              Advertise <IoChevronDown className="ml-1" />
            </div>
            <div className="cursor-pointer flex items-center">
              Supports <IoChevronDown className="ml-1" />
            </div>
            <div className="cursor-pointer flex items-center">
              Contact <IoChevronDown className="ml-1" />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-gradient-to-r from-[#E0F5FA] to-[#FFFDE6] p-4 space-y-4 z-10">
            <div className="cursor-pointer flex items-center">
              Home <IoChevronDown className="ml-1" />
            </div>
            <div className="cursor-pointer flex items-center">
              Advertise <IoChevronDown className="ml-1" />
            </div>
            <div className="cursor-pointer flex items-center">
              Supports <IoChevronDown className="ml-1" />
            </div>
            <div className="cursor-pointer flex items-center">
              Contact <IoChevronDown className="ml-1" />
            </div>
          </div>
        )}

        <div className="px-0 sm:px-[90px] flex items-center">
          <div className="p-2 border-2 rounded-md bg-[#FCF2E8] font-semibold text-[#F1AE66] text-xs sm:text-sm md:text-base lg:text-sm whitespace-nowrap text-center">
            Try Again
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
