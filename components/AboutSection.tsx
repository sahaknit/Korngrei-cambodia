"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { value: "100%", label: "Handcrafted" },
    { value: "KH", label: "Made in Cambodia" },
    { value: "∞", label: "Passion & Care" },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#386c00]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-[#386c00]/30" />
          <span className="text-[#386c00] text-xs font-bold tracking-[0.2em] uppercase">Our Story</span>
          <div className="h-px w-12 bg-[#386c00]/30" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-900 dark:text-stone-50 mb-16 font-[family-name:var(--font-kantumruy)]">
          {t.AboutSection.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 aspect-[4/5]">
              <Image
                src="/Untitled design (7).png"
                alt="Matcha bowl craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white dark:bg-stone-900 rounded-2xl shadow-xl p-5 border border-stone-100 dark:border-stone-800">
              <div className="flex gap-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-bold text-[#386c00]">{stat.value}</p>
                    <p className="text-[10px] text-stone-500 font-medium mt-0.5 whitespace-nowrap">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 lg:pt-4">
            <h3 className="text-2xl font-bold text-[#386c00] font-[family-name:var(--font-kantumruy)]">
              {t.AboutSection.storyTitle}
            </h3>

            {[
              t.AboutSection.storyParagraph1,
              t.AboutSection.storyParagraph2,
              t.AboutSection.storyParagraph3,
            ].map((para, i) => (
              <p
                key={i}
                className="text-stone-600 dark:text-stone-400 leading-relaxed font-[family-name:var(--font-kantumruy)]"
              >
                {para}
              </p>
            ))}

            {/* Mission callout */}
            <div className="mt-8 p-5 rounded-2xl bg-[#386c00]/8 dark:bg-[#386c00]/15 border-l-4 border-[#386c00]">
              <p className="text-stone-800 dark:text-stone-200 font-medium leading-relaxed font-[family-name:var(--font-kantumruy)] text-sm italic">
                &ldquo;{t.AboutSection.missionStatement}&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
