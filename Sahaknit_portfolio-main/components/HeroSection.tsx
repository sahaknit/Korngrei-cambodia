
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaFigma,
} from "react-icons/fa";

// Animated SVG Component
const AnimatedSVG = () => {
  return (
    <motion.div className="absolute inset-0 flex items-center justify-center">
      <motion.svg
        className="w-[150%] h-[150%]"
        fill="transparent"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="300"
          cy="300"
          r="320"
          stroke="#FFD700"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

// HeroSection Component
const HeroSection: React.FC<{ name?: string }> = ({ name = "Sahaknit" }) => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/your-cv.pdf"; // Replace with the path to your CV PDF file
    link.download = "Sahaknit_CV.pdf"; // The name of the downloaded file
    link.click();
  };

  return (
    <section id="home" className="relative bg-transparent px-6 sm:px-12 lg:px-20">
      {/* Main Content */}
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-16 md:text-left"> {/* Increased horizontal space */}
        {/* Image Section */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto md:w-1/2">
          {/* Profile Picture with Yellow Background */}
          <div className="relative w-full aspect-square rounded-full bg-yellow-500 overflow-visible z-0">
            <Image
              src="/sahaknitpicture.png"
              priority
              quality={100}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-full object-cover shadow-2xl"
              alt="Profile Picture"
            />
            {/* Add the Animated SVG */}
            <AnimatedSVG />
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-yellow-400 dark:to-yellow-600">
            Hi, I&#39;m {name}!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 mb-6 text-gray-700 dark:text-gray-300">
            I&#39;m a{" "}
            <span className="font-semibold text-yellow-600">
              Software Engineer
            </span>
            , a fresh graduate of information technology engineering.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8 justify-center md:justify-start">
            <motion.a
              href="https://github.com/vongsahaknit21"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="relative inline-flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              <FaGithub size={20} className="text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vong-sahaknit-881831244/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="relative inline-flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              <FaLinkedin size={20} className="text-white" />
            </motion.a>
            <motion.a
              href="https://t.me/sahaknit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="relative inline-flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              <FaTelegramPlane size={20} className="text-white" />
            </motion.a>
            <motion.a
              href="https://www.figma.com/@sahaknit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="relative inline-flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              <FaFigma size={20} className="text-white" />
            </motion.a>
          </div>

          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center justify-center mt-8 px-6 py-3 font-bold text-white transition-all duration-300 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            <HiDownload size={24} className="mr-2" />
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="flex items-center justify-center mt-10">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown
            size={35}
            className="animate-bounce text-yellow-500"
            aria-label="Scroll down to about section"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;