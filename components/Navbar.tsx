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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
      {/* ── NAVBAR BAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-stone-950/95 backdrop-blur-md shadow-sm border-b border-[#386c00]/10"
            : "bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#386c00]/30 group-hover:border-[#386c00] transition-all duration-300 shadow-sm">
                <Image
                  src="/01_KORNG_REI_BRAND_IDENTITY_PREMARY-removebg-preview.png"
                  alt="Korng Rei Matcha"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="hidden sm:block text-[#386c00] font-semibold text-sm tracking-wide">
                Korng Rei
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#386c00] dark:hover:text-[#a3c96a] hover:bg-[#386c00]/8 transition-all duration-200 font-[family-name:var(--font-kantumruy)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-1">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <RiSunLine size={18} /> : <RiMoonFill size={18} />}
                </button>
              )}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Switch Language"
              >
                {language === "en" ? (
                  <CountryFlag countryCode="KH" svg style={{ width: "1.4em", height: "1.4em" }} title="ភាសាខ្មែរ" />
                ) : (
                  <CountryFlag countryCode="US" svg style={{ width: "1.4em", height: "1.4em" }} title="English" />
                )}
              </button>
            </div>

            {/* Mobile: actions + hamburger */}
            <div className="flex md:hidden items-center gap-1">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <RiSunLine size={18} /> : <RiMoonFill size={18} />}
                </button>
              )}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Switch Language"
              >
                {language === "en" ? (
                  <CountryFlag countryCode="KH" svg style={{ width: "1.3em", height: "1.3em" }} />
                ) : (
                  <CountryFlag countryCode="US" svg style={{ width: "1.3em", height: "1.3em" }} />
                )}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg text-[#386c00] hover:bg-[#386c00]/10 transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                  <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── MOBILE MENU DRAWER ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel — slides in from the right */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-white dark:bg-stone-950 shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#386c00]/30">
              <Image
                src="/01_KORNG_REI_BRAND_IDENTITY_PREMARY-removebg-preview.png"
                alt="Korng Rei Matcha"
                width={32}
                height={32}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="text-[#386c00] font-semibold text-sm">Korng Rei</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-[#386c00] dark:hover:text-[#a3c96a] hover:bg-[#386c00]/8 transition-all duration-200 font-[family-name:var(--font-kantumruy)] mb-1"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-neutral-100 dark:border-neutral-800">
          <p className="text-xs text-neutral-400 text-center">© 2025 Korng Rei Matcha</p>
        </div>
      </div>
    </>
  );
}
