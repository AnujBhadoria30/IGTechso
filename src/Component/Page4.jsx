import React, { useState } from "react";
import { FaPlay, FaEye } from "react-icons/fa";
import Star from "../Component/Img/Starr.png";
import { IoChevronDown } from "react-icons/io5";

const courses = [
  {
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managements.",
    rating: 5.0,
    reviews: 392,
    students: "2,538 students watched",
    features: [],
    duration: "4 hrs",
    videos: "7 Video Classes",
  },
  {
    title: "Become ultimate photoshop expert within 30 days",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managements.",
    rating: 5.0,
    reviews: 392,
    students: "2,538 students watched",
    features: [
      "How to reduce file  dimensions without losing quality",
      "Create vector file from rasterize layer styles",
      "How to make logo  perfect with different extensions",
      "Make color gradient with Photoshop built-in tools",
    ],
    duration: "4 hrs",
    videos: "7 Video Classes",
  },
  {
    title: "After effects animation tutorial with photoshop documents",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managements.",
    rating: 5.0,
    reviews: 392,
    students: "2,538 students watched",
    features: [],
    duration: "4 hrs",
    videos: "7 Video Classes",
  },
  {
    title: "Adobe illustrator vector art design mockup",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managements.",
    rating: 5.0,
    reviews: 392,
    students: "2,538 students watched",
    features: [],
    duration: "4 hrs",
    videos: "7 Video Classes",
  },
];

const Page4 = () => {
  const [openCourseIndex, setOpenCourseIndex] = useState(null);

  const toggleFeatures = (index) => {
    setOpenCourseIndex(openCourseIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="text-center mb-12">
        <h3 className="text-orange-500 font-semibold">QUALITY FEATURES</h3>
        <h2 className="sm:text-3xl font-bold text-gray-800 mt-2">
          Popular Designing Course
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6"
          >
            <div className="text-orange-500 text-4xl">
              <FaPlay />
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2 text-yellow-500">
                <img src={Star} alt="" className="w-16 sm:w-12" />
                <span className="font-bold">{course.rating}</span>
                <span className="text-gray-500 text-sm sm:text-xs">
                  ({course.reviews} reviews)
                </span>
                <span className="flex items-center space-x-1 text-gray-500">
                  <FaEye />
                  <span className="text-gray-500 text-sm sm:text-xs">
                    {course.students}
                  </span>
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mt-2">{course.description}</p>

              {course.features.length > 0 && (
                <ul
                  className={`list-disc list-inside mt-4 text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm ${
                    openCourseIndex === index ? "block" : "hidden"
                  }`}
                >
                  {course.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-row items-center sm:items-end mt-10">
              <div className="bg-[#3FDBB1] font-semibold text-sm px-4 py-2">
                {course.videos}
              </div>
              <div className="bg-[#3FDBB1] font-semibold text-sm px-4 py-2 flex items-center">
                {course.duration}
              </div>
              <IoChevronDown
                onClick={() => toggleFeatures(index)}
                className="ml-2 mb-2 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
