"use client"; // Mark this as a client component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allCertificates = [
  {
    name: "Figma for UX Design",
    organization: "Coursera",
    date: "Mar 2024",
    description:
      "Completed an advanced UI/UX design course focusing on creating intuitive and user-friendly interfaces.",
    image: "/Figma_UX_Design.png",
    link: "https://www.linkedin.com/learning/certificates/84b399454550a00c2c7e844d57f5a2befad667e4338bd934cba1a3399105a30f",
  },
  {
    name: "Get Started with Figma",
    organization: "Coursera",
    date: "2024",
    description:
      "Mastered HTML, CSS, JavaScript, and modern frameworks like React to build dynamic web applications.",
    image: "/figma_coursera.jpg",
    link: "https://coursera.org/share/9a46e712ccb49a1c14caf8aa3dffbd50",
  },
  {
    name: "Introduction to UI and UX Design Course",
    organization: "Codecademy",
    date: "March 2024",
    description:
      "Learned advanced React concepts including hooks, context API, and state management techniques.",
    image: "/figma_codecamp.png",
    link: "https://www.codecademy.com/profiles/web8229980501/certificates/4ccef8d532484ea2aeec3b3b3dbb4f9c",
  },
  {
    name: "Introduction to User Experience Design",
    organization: "Coursera",
    date: "March 2024",
    description:
      "Gained proficiency in JavaScript fundamentals and advanced topics like closures and async programming.",
    image: "/figma_coursera01.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/R8X5X23UBPFR",
  },
  {
    name: "Digital Skills: User Experience",
    organization: "FutureLearn",
    date: "2024",
    description:
      "Learned server-side development using Node.js, Express, and REST APIs.",
    image: "/1709043660087.jpg",
    link: "https://www.futurelearn.com/certificates/la2xlz7",
  },
  {
    name: "Digital Skills: User Experience",
    organization: "Le Wagon",
    date: "Feb 2024",
    description:
      "Learned server-side development using Node.js, Express, and REST APIs.",
    image: "/1709043854884.jpg",
    link: "https://app.lewagon.school/certificates/ni7bivjryn",
  },
  {
    name: "Introduction to web Designing",
    organization: "Great Learning",
    date: "Feb 2024",
    description:
      "Learned server-side development using Node.js, Express, and REST APIs.",
    image: "/1709044071157.jpg",
    link: "https://olympus.mygreatlearning.com/courses/91537/certificate",
  },
  {
    name: "UI/UX Beginner",
    organization: "Great Learning",
    date: "2024",
    description:
      "Learned server-side development using Node.js, Express, and REST APIs.",
    image: "/1708772751653.jpg",
    link: "https://olympus.mygreatlearning.com/courses/55928/certificate",
  },
  {
    name: "Designing a Low Fidelity Prototype in Figma",
    organization: "Coursera",
    date: "2024",
    description:
      "Learned server-side development using Node.js, Express, and REST APIs.",
    image: "/1710176258922.jpg",
    link: "https://coursera.org/share/d028573f16032243f16ed144f212367e",
  },
];

const CertificatesSection = () => {
  const [visibleCertificates, setVisibleCertificates] = useState(3); // Show only 3 certificates initially

  // Function to show more certificates
  const showMore = () => {
    setVisibleCertificates((prevCount) =>
      Math.min(prevCount + 3, allCertificates.length)
    );
  };

  return (
    <section id="certificates" className="py-10">
      <h1 className="my-10 text-center font-bold text-4xl">
        Certificates
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded"></hr>
      </h1>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {allCertificates.slice(0, visibleCertificates).map((certificate, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-4">
            {/* Certificate Image */}
            <Link href={certificate.link} target="_blank">
              <Image
                src={certificate.image}
                alt={certificate.name}
                width={400}
                height={300}
                className="rounded-xl shadow-xl hover:opacity-70 transition-opacity w-full max-w-[400px]"
              />
            </Link>

            {/* Certificate Details */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {certificate.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {certificate.organization} | {certificate.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {certificate.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCertificates < allCertificates.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMore}
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;