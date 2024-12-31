import React from "react";
import { FaEye } from "react-icons/fa";
import laptop from "../Component/Img/laptop.png";
import laptop2 from "../Component/Img/laptop2.png";
import Star from "../Component/Img/Starr.png";
import laptop3 from "../Component/Img/laptop3.png";

const Page2 = () => {
  const courses = [
    {
      image: laptop,
      title: "Professional graphic design tutorial full course with exercise file",
      rating: 5.0,
      reviews: 392,
      students: "3,532 students watched",
      features: [],
      duration: "4 hrs",
    },
    {
      image: laptop2,
      title: "Become ultimate photoshop sample from the victory  expert within 30 days",
      rating: 5.0,
      reviews: 392,
      students: "2,538 students watched",
      features: [
        "How to reduce file dimensions without losing quality",
        "Create vector file from rasterize layer styles",
        "How to make logo perfect with different extensions",
        "Make color gradient with Photoshop built-in tools",
      ],
      duration: "4 hrs",
      videos: "7 Video Classes",    
    },
    {
      image: laptop3,
      title: "After effects animation tutorial with photoshop documents",
     
      rating: 5.0,
      reviews: 392,
      students: "1,037 students watched",
      features: [],
      duration: "4 hrs",
      videos: "7 Video Classes",
    },
    
  ];

  return (
    <div className="container mx-auto p-4 sm:px-[130px] ">
        <div className=" text-[#F1AE66] text-xs sm:text-sm md:text-base lg:text-sm whitespace-nowrap text-center">QUALITY FEATURES</div>
        <h1 className="font-bold text-gray-800 text-center text-xl">Tutorials that people love most</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden "
          >
            <img src={course.image} alt={course.title} className="imageCar w-[400px]" />
            <div className="p-4">
              <div className="flex items-center space-x-2 text-yellow-500">
                <img src={Star} alt="Star" className=" w-16 sm:w-12" />
                <span className="font-bold">{course.rating}</span>
                <span className="text-gray-500 text-sm sm:text-xs">
                  ({course.reviews} reviews)
                </span>
              </div>
              <h2 className="text-base font-bold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {course.description}
              </p>
            
              <span className="flex items-center space-x-1 text-gray-500">
                  <FaEye />
                  <span className="text-gray-500 text-sm sm:text-xs">
                    {course.students}
                  </span>
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;