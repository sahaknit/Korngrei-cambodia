// components/AboutSection.tsx
"use client";

import React from "react";
import Image from "next/image";
// 1. Import the useLanguage hook and translations
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

const AboutSection = () => {
  // 2. Use the hook to get the current language
  const { language } = useLanguage();
  // 3. Get the translation object for the current language
  const t = translations[language];

  return (
    <section id="about" className="relative bg-transparent px-6 sm:px-12 lg:px-20">
      {/* Section Header */}
      <div className="my-12 pb-8 md:pb-24">
        <h1 className="text-center font-bold text-4xl text-[#386c00] font-[family-name:var(--font-kantumruy)]">
          {/* Use the translated title */}
          {t.AboutSection.title}
          <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
        </h1>

        {/* Content Grid */}
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* Left Column - Story */}
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left text-[#386c00] font-[family-name:var(--font-kantumruy)]">
              {/* Use the translated story title */}
              {t.AboutSection.storyTitle}
            </h1>
            <p className="font-[family-name:var(--font-kantumruy)]">
              {/* Use the translated story paragraph 1 */}
              {t.AboutSection.storyParagraph1}
            </p>
            <br />
            <p className="font-[family-name:var(--font-kantumruy)]">
              {/* Use the translated story paragraph 2 */}
              {t.AboutSection.storyParagraph2}
            </p>
            <br />
            <p className="font-[family-name:var(--font-kantumruy)]">
              {/* Use the translated story paragraph 3 */}
              {t.AboutSection.storyParagraph3}
            </p>
            <br />
            <p className="font-[family-name:var(--font-kantumruy)]">
              {/* Use the translated mission statement */}
              {t.AboutSection.missionStatement}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
              <Image
                src="/Untitled design (7).png" // Replace with your actual image path
                alt="Matcha bowl craftsmanship"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;