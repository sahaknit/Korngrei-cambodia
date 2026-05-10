// components/HeroSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
// 1. Import the useLanguage hook and translations
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

// HeroSection Component — Matcha Bowl Business (Bigger Image)
const HeroSection: React.FC = () => {
  // 2. Use the hook to get the current language
  const { language } = useLanguage();
  // 3. Get the translation object for the current language
  const t = translations[language];

  return (
    <section id="home" className="relative bg-transparent px-6 sm:px-12 lg:px-20">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center my-10 py-16 sm:py-32 md:py-48 space-y-10 md:space-y-0 md:space-x-16">
        {/* Image Section — Bigger Card */}
        <div className="w-full max-w-lg mx-auto md:w-1/2">
          <div className="bg-[#e3edc9] rounded-2xl shadow-lg overflow-hidden h-[500px] flex items-center justify-center p-4">
            <Image
              src="/20251003_062821.jpg" // Replace with your matcha bowl photo
              priority
              quality={100}
              width={600}
              height={600}
              className="object-cover w-full h-auto"
              alt="Matcha Bowl Set"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Apply the Kantumruy Pro font variable here */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#386c00] leading-tight font-[family-name:var(--font-kantumruy)]">
            {/* Use the translated title */}
            {t.HeroSection.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 mb-6 text-gray-700 dark:text-gray-300 font-[family-name:var(--font-kantumruy)]">
            {/* Use the translated subtitle */}
            {t.HeroSection.subtitle}
          </p>

          {/* Contact Us Button */}
          <Link
            to="contact-us"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 font-bold text-white transition-all duration-300 bg-[#386c00] hover:bg-[#2d5400] rounded-full shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)]"
          >
            {/* Use the translated button text */}
            {t.HeroSection.buttonText}
          </Link>
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
            className="animate-bounce text-[#386c00]"
            aria-label="Scroll down to about section"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;