import React, { useState } from "react";
import GreenTick from "../Component/Img/Gtick.png";
import cross from "../Component/Img/Cross.png";
const Page6 = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800">Pricing Plan</h2>
      <p className="mt-2 text-gray-500">Choose your pricing policy</p>

      <div className="mt-4 flex border rounded-lg overflow-hidden">
        <button
          onClick={() => handleTabChange("monthly")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "monthly"
              ? "bg-gray-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Monthly Plan
        </button>
        <button
          onClick={() => handleTabChange("annual")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "annual"
              ? "bg-gray-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Annual Plan
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Free Plan</h2>
          <p className="text-sm text-gray-500">For small teams or office</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center">
              <span className="text-green-500">
                {" "}
                <img src={GreenTick} alt="" />
              </span>
              <span className="ml-2">
                Ultimate access to all course, exercises,
                <br /> and assessments
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">
                {" "}
                <img src={GreenTick} alt="" />
              </span>
              <span className="ml-2">
                Free access for all kinds of exercise corrections <br /> with
                download
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">
                {" "}
                <img src={GreenTick} alt="" />
              </span>
              <span className="ml-2">
                Total assessment corrections with free
                <br /> download access system
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-400">
                {" "}
                <img src={cross} alt="" />
              </span>
              <span className="ml-2 text-gray-500">
                Unlimited download of courses onthe <br /> Mobile app contents
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-500">
                {" "}
                <img src={cross} alt="" />
              </span>
              <span className="ml-2 text-gray-500">
                Download and print courses in
                <br /> exercied pdf PDF
              </span>
            </li>
          </ul>
          <button className="mt-6 lg:mt-16 w-full text-[#F1AE66] bg-[#FCF2E8] text-xs sm:text-sm md:text-base lg:text-sm whitespace-nowrap text-center py-2 rounded-lg">
            {" "}
            Start Free Trial
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-green-600">
          <h2 className="text-lg font-semibold text-gray-800 flex flex-col items-start">
            <h1 className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
              Recommended
            </h1>
            <div className="flex justify-between w-full mt-1">
              <span>Premium</span>
              <span>Starting From</span>
            </div>
            <div className="flex justify-between w-full mt-1 items-center">
              <p className="text-sm text-gray-500">For startup enterprise</p>
              <span className="text-green-500">49.99/mo</span>
            </div>
          </h2>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center">
              <span className="text-green-500">
                {" "}
                <img src={GreenTick} alt="" />
              </span>
              <span className="ml-2">
                Ultimate access to all course, exercises, and assessments
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">
                {" "}
                <img src={GreenTick} alt="" />
              </span>
              <span className="ml-2">
                Free access for all kinds of exercise corrections
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">
                {" "}
                <img src={GreenTick} alt="" />
              </span>
              <span className="ml-2">
                Total assessment corrections with free access
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">
                <img src={GreenTick} alt="" />
              </span>
              <span className="ml-2">
                Unlimited download of courses on mobile app
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">
                {" "}
                <img src={GreenTick} alt="" />
              </span>
              <span className="ml-2">Download and print courses in PDF</span>
            </li>
          </ul>
          <button className="mt-6 lg:mt-[120px] w-full bg-[#FCF2E8]  text-[#F1AE66] text-xs sm:text-sm md:text-base lg:text-sm whitespace-nowrap text-center  py-2 rounded-lg">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page6;
