import React from "react";
import GirlImg from "../Component/Img/girlimg.png";
import star from "../Component/Img/Star.png";
import { CiSearch } from "react-icons/ci";
import paypal from "../Component/Img/paypal.png";
import Google from "../Component/Img/google.png";
import Vector from "../Component/Img/Dbox.png";
import pattern from "../Component/Img/pattern.png";
import line from "../Component/Img/lines.png";
import "../App.css";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center">
      <div className="bg-gradient-to-r from-[#E0F5FA] to-[#FFFDE6] w-full sm:w-full md:w-full min-w-[150px] p-6 space-y-6 rounded-br-[80px] relative">
        <div className="space-y-6 pb-6 p-[9%]">
          <div className="flex justify-center lg:justify-start">
            <p className="text-sm text-gray-600 flex items-center gap-x-2 mt-5 text-center md:text-left">
              <img src={star} alt="Star" />
              Trusted by over 4,332 students
            </p>
          </div>

          <h1 className="text-[40px] sm:text-[60px] font-bold text-gray-800 leading-tight">
            Learn Design <br />
            <span>with Nia Matos</span>
          </h1>
          <div className="w-[300px] ml-32 lg:block hidden">
            <img src={line} alt="" />
          </div>

          <p className="text-gray-600">
            Get your blood tests delivered at home. Collect samples <br /> from
            the best management systems that provide the best <br /> design
            system guidelines ever.
          </p>

          <div className="relative w-full lg:w-2/3">
            <input
              type="text"
              placeholder="Search Course Name"
              className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2"
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 rounded-full">
              <CiSearch />
            </button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <p className="text-gray-500 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[20px]">
              Sponsored by
            </p>
            <div className="flex gap-4 justify-center items-center">
              <img
                src={paypal}
                alt="Paypal"
                className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[90px]"
              />
              <img
                src={Google}
                alt="Google"
                className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[70px]"
              />
              <img
                src={Vector}
                alt="Dropbox"
                className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[100px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center relative">
        <div className="relative image-section ">
          <img
            src={pattern}
            alt="Pattern"
            className="rounded-lg w-[180px] ml-[173px] relative z-0 top-[-140px] patternImg"
          />
          <img
            src={GirlImg}
            alt="Girl"
            className="girlimg absolute top-[-124px] left-[-60px] rounded-lg w-[350px] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
