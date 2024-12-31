import React from "react";
import arrow from "../Component/Img/arrow.png";

const Page5 = () => {
  const steps = [
    {
      id: 1,
      title: "Set disbursement Instructions",
      description:
        "Get your blood tests delivered at home collect a sample from your blood tests.",
    },
    {
      id: 2,
      title: "Assembly retrieves funds from your account",
      description:
        "Get your blood tests delivered at home collect a sample from your blood tests.",
    },
    {
      id: 3,
      title: "Assembly initiates disbursement",
      description:
        "Get your blood tests delivered at home collect a sample from your blood tests.",
    },
    {
      id: 4,
      title: "Customer receives funds payment",
      description:
        "Get your blood tests delivered at home collect a sample from your blood tests.",
    },
  ];

  return (
    <div className="bg-blue-50 py-12 px-24 ">
      <div className="text-center">
        <p className="text-orange-500 font-semibold uppercase">
          What's the function
        </p>
        <h2 className="text-2xl font-bold text-gray-800">
          Let's see how it works
        </h2>
      </div>
      <div className="relative mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="text-center flex flex-col items-center relative"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full text-lg font-semibold text-gray-800">
              {String(step.id).padStart(2, "0")}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
      
            {index !== steps.length - 1 && (
              <div className="absolute right-[-150px] bottom-[150px] hidden xl:block">
                <img src={arrow} alt="" className="w-[260px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
