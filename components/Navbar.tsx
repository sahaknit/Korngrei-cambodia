"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";
import CountryFlag from "react-country-flag";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const t = translations[language];
  const toggleLanguage = () => setLanguage(language === "en" ? "km" : "en");

  const NAV_ITEMS = [
    { label: t.Navbar.home, href: "/" },
    { label: t.Navbar.shop, href: "/shop" },
    { label: t.Navbar.learn, href: "/learn" },
    { label: t.Navbar.ourStory, href: "/about" },
    { label: t.Navbar.contactUs, href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/96 dark:bg-[#0a0a08]/96 backdrop-blur-xl shadow-[0_1px_0_0_rgba(56,108,0,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Korng Rei Home">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-[#386c00]/12 scale-0 group-hover:scale-100 transition-transform duration-300" />
                <Image
                  src="/01_KORNG_REI_BRAND_IDENTITY_PREMARY-removebg-preview.png"
                  alt="Korng Rei"
                  width={40}
                  height={40}
                  className="relative object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-[13px] font-bold tracking-[0.14em] text-[#386c00] uppercase leading-none">Korng Rei</p>
                <p className="text-[10px] tracking-widest text-stone-400 dark:text-stone-500 uppercase mt-0.5">Matcha</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-[13px] font-medium text-stone-600 dark:text-stone-400 hover:text-[#386c00] dark:hover:text-[#8fba3a] transition-colors duration-200 group font-[family-name:var(--font-kantumruy)]"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#386c00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-1">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-stone-500 hover:text-[#386c00] hover:bg-[#386c00]/8 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <RiSunLine size={17} /> : <RiMoonFill size={17} />}
                </button>
              )}
              <button
                onClick={toggleLanguage}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#386c00]/8 transition-all"
                aria-label="Switch language"
              >
                {language === "en"
                  ? <CountryFlag countryCode="KH" svg style={{ width: "1.3em", height: "1.3em" }} />
                  : <CountryFlag countryCode="US" svg style={{ width: "1.3em", height: "1.3em" }} />}
              </button>
              <Link
                href="/shop"
                className="ml-2 px-5 py-2 rounded-full bg-[#386c00] text-white text-[13px] font-semibold hover:bg-[#2d5400] active:scale-95 transition-all duration-200 shadow-sm font-[family-name:var(--font-kantumruy)]"
              >
                {t.Navbar.shop}
              </Link>
            </div>

            {/* Mobile controls + burger */}
            <div className="flex md:hidden items-center gap-1">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <RiSunLine size={17} /> : <RiMoonFill size={17} />}
                </button>
              )}
              <button
                onClick={toggleLanguage}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
                aria-label="Switch language"
              >
                {language === "en"
                  ? <CountryFlag countryCode="KH" svg style={{ width: "1.2em", height: "1.2em" }} />
                  : <CountryFlag countryCode="US" svg style={{ width: "1.2em", height: "1.2em" }} />}
              </button>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[5px] hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span
                  className="block w-[18px] h-[1.5px] bg-stone-700 dark:bg-stone-300 rounded-full transition-all duration-300"
                  style={{ transform: menuOpen ? "rotate(45deg) translate(0px, 6.5px)" : "none" }}
                />
                <span
                  className="block w-[14px] h-[1.5px] bg-stone-700 dark:bg-stone-300 rounded-full transition-all duration-300 self-start ml-[2px]"
                  style={{ opacity: menuOpen ? 0 : 1, width: menuOpen ? "0px" : "14px" }}
                />
                <span
                  className="block w-[18px] h-[1.5px] bg-stone-700 dark:bg-stone-300 rounded-full transition-all duration-300"
                  style={{ transform: menuOpen ? "rotate(-45deg) translate(0px, -6.5px)" : "none" }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[90vw] bg-white dark:bg-[#0f0f0c] flex flex-col md:hidden transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 dark:border-stone-800/60">
          <div className="flex items-center gap-2.5">
            <Image
              src="/01_KORNG_REI_BRAND_IDENTITY_PREMARY-removebg-preview.png"
              alt="Korng Rei"
              width={32}
              height={32}
              className="object-contain"
            />
            <div>
              <p className="text-[12px] font-bold tracking-widest text-[#386c00] uppercase">Korng Rei</p>
              <p className="text-[10px] text-stone-400 tracking-wide">Matcha</p>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium text-stone-700 dark:text-stone-300 hover:text-[#386c00] dark:hover:text-[#8fba3a] hover:bg-[#386c00]/6 dark:hover:bg-[#386c00]/12 transition-all duration-200 mb-0.5 font-[family-name:var(--font-kantumruy)]"
            >
              <span>{item.label}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-stone-300 dark:text-stone-600">
                <path d="M4 7h6M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-5 pb-8 pt-4 border-t border-stone-100 dark:border-stone-800/60">
          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-full py-3.5 rounded-xl bg-[#386c00] hover:bg-[#2d5400] text-white text-[14px] font-semibold transition-colors duration-200 font-[family-name:var(--font-kantumruy)]"
          >
            {t.Navbar.shop} &rarr;
          </Link>
          <p className="text-center text-[11px] text-stone-400 dark:text-stone-600 mt-4">
            &copy; {new Date().getFullYear()} Korng Rei Matcha
          </p>
        </div>
      </div>
    </>
  );
}
