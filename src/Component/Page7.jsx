import React from "react";
import hover from "../Component/Img/hoverlaptop.png";
function Page7() {
  return (
    <div className="flex flex-col sm:flex-row items-center py-10 px-10 moreThan">
      <div className="w-full sm:w-1/2 flex justify-center mb-6 sm:mb-0">
        <img
          src={hover}
          alt="Description"
          className="w-full sm:w-[100%] object-cover"
        />
      </div>

      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <p className="text-orange-500 text-sm font-medium uppercase mb-2">
          Free Tutorial
        </p>
        <h2 className="text-3xl font-bold leading-snug">
          More than thousand of free tutorial upload every weeks
        </h2>
        <p className="text-gray-500 mt-4">
          Get your tests delivered at let home collect sample from the victory
          of the managements that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <button className="mt-6 px-6 py-3  bg-[#FCF2E8]  text-[#F1AE66] text-xs sm:text-sm md:text-base lg:text-sm whitespace-nowrap text-center font-medium rounded-lg hover:bg-orange-500">
          Explore details
        </button>
      </div>
    </div>
  );
}

export default Page7;
