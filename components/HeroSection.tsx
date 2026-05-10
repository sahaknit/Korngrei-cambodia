"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#f9fbf4] dark:bg-[#0a0a08]" />
      <div className="absolute -z-10 top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#e6f0d0] dark:bg-[#386c00]/8 blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-60" />
      <div className="absolute -z-10 bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#d8ecb8] dark:bg-[#386c00]/6 blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-40" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#386c00 1px, transparent 1px), linear-gradient(90deg, #386c00 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── TEXT ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#386c00]/20 bg-[#386c00]/6 text-[#386c00] text-[11px] font-bold tracking-[0.18em] uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#386c00] animate-pulse" />
              Handcrafted in Cambodia
            </div>

            {/* Headline */}
            <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.08] tracking-[-0.02em] text-stone-900 dark:text-stone-50 mb-6 font-[family-name:var(--font-kantumruy)]">
              {t.HeroSection.title}
            </h1>

            {/* Sub */}
            <p className="text-base sm:text-lg text-stone-500 dark:text-stone-400 leading-relaxed mb-10 max-w-[480px] mx-auto lg:mx-0 font-[family-name:var(--font-kantumruy)]">
              {t.HeroSection.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#386c00] hover:bg-[#2d5400] active:scale-[0.97] text-white text-[14px] font-semibold rounded-full shadow-lg shadow-[#386c00]/20 transition-all duration-200 font-[family-name:var(--font-kantumruy)]"
              >
                {t.HeroSection.buttonText}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-[14px] font-semibold rounded-full hover:border-[#386c00] hover:text-[#386c00] dark:hover:text-[#8fba3a] dark:hover:border-[#8fba3a] transition-all duration-200 font-[family-name:var(--font-kantumruy)]"
              >
                Browse Shop
              </Link>
            </div>

            {/* Social proof row */}
            <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              {[
                { icon: "🏺", label: "Handcrafted" },
                { icon: "🌿", label: "Local Artisans" },
                { icon: "✨", label: "Khmer Heritage" },
                { icon: "📦", label: "Ships Worldwide" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="text-base">{b.icon}</span>
                  <span className="text-[12px] font-medium text-stone-500 dark:text-stone-500">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── IMAGE ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px]">

              {/* Decorative ring */}
              <div className="absolute inset-[-10px] rounded-[36px] border border-[#386c00]/12 dark:border-[#386c00]/20" />
              <div className="absolute inset-[-22px] rounded-[44px] border border-[#386c00]/6 dark:border-[#386c00]/10" />

              {/* Main image card */}
              <div className="relative rounded-[28px] overflow-hidden bg-[#e3edc9] dark:bg-[#1a2610] aspect-square shadow-2xl shadow-stone-900/10">
                <Image
                  src="/20251003_062821.jpg"
                  priority
                  quality={95}
                  fill
                  className="object-cover"
                  alt="Handcrafted Matcha Bowl Set"
                  sizes="(max-width: 768px) 90vw, 480px"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating card – price */}
              <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-800 px-5 py-3.5">
                <p className="text-[10px] font-semibold tracking-widest text-stone-400 uppercase mb-0.5">Starting from</p>
                <p className="text-[22px] font-bold text-[#386c00] leading-none">$1.00</p>
              </div>

              {/* Floating card – tag */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#386c00] text-white rounded-2xl shadow-lg px-4 py-2.5">
                <p className="text-[10px] font-semibold tracking-wider uppercase opacity-80">New</p>
                <p className="text-[13px] font-bold leading-tight">Collection</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#386c00]/40 to-[#386c00]/0 animate-pulse" />
        <span className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-medium">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
