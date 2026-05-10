"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Background texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f8ef] via-white to-[#eef5e3] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" />
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#386c00]/5 -translate-y-1/3 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#386c00]/4 translate-y-1/3 -translate-x-1/3 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── TEXT SIDE ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#386c00]/10 text-[#386c00] text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#386c00] animate-pulse" />
              Handcrafted in Cambodia
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-50 leading-[1.1] tracking-tight mb-6 font-[family-name:var(--font-kantumruy)]">
              {t.HeroSection.title.split(" ").slice(0, 3).join(" ")}{" "}
              <span className="text-[#386c00] relative inline-block">
                {t.HeroSection.title.split(" ").slice(3).join(" ")}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C50 2 100 1 198 4"
                    stroke="#386c00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 font-[family-name:var(--font-kantumruy)]">
              {t.HeroSection.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#386c00] hover:bg-[#2d5400] text-white font-semibold rounded-full shadow-lg hover:shadow-[#386c00]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 font-[family-name:var(--font-kantumruy)] text-sm"
              >
                {t.HeroSection.buttonText}
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#386c00]/30 text-[#386c00] dark:text-[#a3c96a] font-semibold rounded-full hover:bg-[#386c00]/8 transition-all duration-300 font-[family-name:var(--font-kantumruy)] text-sm"
              >
                Our Story
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              {[
                { label: "Handcrafted", icon: "🏺" },
                { label: "Local Artisans", icon: "🌿" },
                { label: "Khmer Heritage", icon: "✨" },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center gap-1">
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-[10px] font-medium text-stone-500 dark:text-stone-500 tracking-wide uppercase">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── IMAGE SIDE ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Background blob */}
              <div className="absolute inset-4 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] bg-[#e3edc9] dark:bg-[#386c00]/20 rotate-6" />
              {/* Image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#386c00]/15 aspect-square">
                <Image
                  src="/20251003_062821.jpg"
                  priority
                  quality={95}
                  fill
                  className="object-cover"
                  alt="Handcrafted Matcha Bowl Set"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-stone-900 rounded-2xl shadow-xl px-4 py-3 border border-stone-100 dark:border-stone-800">
                <p className="text-xs text-stone-500 font-medium">Starting from</p>
                <p className="text-lg font-bold text-[#386c00]">$1.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-1 text-stone-400 hover:text-[#386c00] transition-colors group">
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
          <HiArrowDown size={16} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
