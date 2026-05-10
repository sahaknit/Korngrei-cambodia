"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#0f0f0c]">

      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#386c00]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-10 bg-[#386c00]/25" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#386c00] uppercase">Our Story</span>
          <div className="h-px w-10 bg-[#386c00]/25" />
        </div>

        <h2 className="text-[32px] sm:text-[42px] font-bold text-center tracking-tight text-stone-900 dark:text-stone-50 mb-16 font-[family-name:var(--font-kantumruy)]">
          {t.AboutSection.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <div className="relative">
            {/* Background accent */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#f0f7e4] dark:bg-[#386c00]/6" />

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl shadow-stone-900/8">
              <Image
                src="/Untitled design (7).png"
                alt="Matcha bowl craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/25 via-transparent to-transparent" />
            </div>

            {/* Stats chip */}
            <div className="absolute -bottom-6 left-6 right-6 sm:left-8 sm:right-8">
              <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-100 dark:border-stone-800 px-6 py-4">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "100%", label: "Handcrafted" },
                    { value: "KH", label: "Made in Cambodia" },
                    { value: "2023", label: "Est." },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-[20px] font-bold text-[#386c00] leading-none">{s.value}</p>
                      <p className="text-[10px] text-stone-400 font-medium mt-1 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-[22px] font-bold text-[#386c00] mb-6 font-[family-name:var(--font-kantumruy)]">
              {t.AboutSection.storyTitle}
            </h3>

            <div className="space-y-4">
              {[t.AboutSection.storyParagraph1, t.AboutSection.storyParagraph2, t.AboutSection.storyParagraph3].map((para, i) => (
                <p key={i} className="text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed font-[family-name:var(--font-kantumruy)]">
                  {para}
                </p>
              ))}
            </div>

            {/* Mission */}
            <div className="mt-8 rounded-2xl bg-[#f3f8ea] dark:bg-[#386c00]/10 p-6 border-l-4 border-[#386c00]">
              <div className="flex gap-3 items-start">
                <span className="text-[#386c00] text-lg mt-0.5 shrink-0">🌿</span>
                <p className="text-[14px] text-stone-700 dark:text-stone-300 leading-relaxed font-[family-name:var(--font-kantumruy)] font-medium">
                  &ldquo;{t.AboutSection.missionStatement}&rdquo;
                </p>
              </div>
            </div>

            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Premium Ceramic", "Khmer Artistry", "Daily Use", "Gift Ready"].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-[12px] font-medium bg-[#386c00]/8 text-[#386c00] dark:bg-[#386c00]/15 dark:text-[#8fba3a] border border-[#386c00]/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
