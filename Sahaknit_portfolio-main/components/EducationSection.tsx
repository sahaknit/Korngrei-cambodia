"use client"; // Mark this as a client component
import React from "react";

const educationJourney = [
  {
    year: "2013 - 2019",
    title: "High School Diploma",
    institution: "Kampong chnnage high school ",
    location: "Kampong chnnage",
    description:
      "Completed high school with a focus on mathematics and sciences.",
  },
  {
    year: "2019 - 2023",
    title: "Bachelor degree of IT Engineering ",
    institution: "Royal university of Phnom penh",
    location: "Phnom Penh, Cambodia",
    description:
      "Rupp University's Bachelor's in Information Technology Engineering is a comprehensive program blending theory and practice in IT. It covers software development, network design, and system analysis. The course emphasizes real-world applications, problem-solving, and innovation in technology. With experienced faculty and modern facilities, students are prepared for diverse IT careers. This program is ideal for aspiring IT professionals seeking to make an impact in the tech industry.",
  },
  {
    year: "2021 - 2022",
    title: "Computers training course ",
    institution: "ETEC CENTER",
    location: "Phnom Penh, Cambodia",
    description:
      "PROJECT COURSES, Complete WEB FRONTEND COURSE and BASIC / ADVANCE JAVA / SQL SERVER",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-6"> {/* Reduced padding */}
  <h1 className="my-6 text-center font-bold text-4xl text-gray-900 dark:text-white">
    My Educational Journey
    <hr className="w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded"></hr>
  </h1>
  {/* Timeline Container */}
  <div className="relative max-w-4xl mx-auto">
    {/* Vertical Line */}
    <div className="absolute top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 left-1/2 md:left-[25%] transform -translate-x-1/2 md:-translate-x-0"></div>
    {educationJourney.map((item, idx) => (
      <div
        key={idx}
        className={`flex flex-col md:flex-row items-start gap-4 mb-6 ${ // Reduced margin
          idx % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Year Marker */}
        <div className="flex-shrink-0 relative z-10 w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-lg">
          <p className="text-lg font-bold">{item.year.split(" - ")[0]}</p>
        </div>
        {/* Details */}
        <div className="flex-grow relative z-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-yellow-500 dark:text-yellow-400 mb-2">
            {item.institution} | {item.location}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default EducationSection;