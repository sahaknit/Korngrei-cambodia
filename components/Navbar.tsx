"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";
import CountryFlag from "react-country-flag";

export default function Navbar() {
  // --- Hooks for State Management ---
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [navbar, setNavbar] = useState(false);

  // Get the translation object for the current language
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'km' : 'en');
  };

  const NAV_ITEMS = [
    { label: t.Navbar.home, href: "/" },
    { label: t.Navbar.shop, href: "/shop" },
    { label: t.Navbar.learn, href: "/learn" },
    { label: t.Navbar.ourStory, href: "/about" },
    { label: t.Navbar.contactUs, href: "/contact" },
  ];

  return (
    <header 
      className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700"
      // CORRECTED: Added 'suppressHydrationWarning' property to resolve the console error 
      // by ignoring attribute mismatches introduced by browser extensions (e.g., 'bis_skin_checked').
      suppressHydrationWarning={true}
    >
      <div className="flex justify-between items-center py-3">
        
        {/* ======== LOGO SECTION ======== */}
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#386c00] bg-[#e3edc9] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Image
                src="/01_KORNG_REI_BRAND_IDENTITY_PREMARY-removebg-preview.png"
                alt="Korng Rei Matcha Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* ======== DESKTOP NAVIGATION ======== */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link key={idx} href={item.href} className="font-sans text-neutral-900 hover:text-[#386c00] dark:text-neutral-100 font-medium transition-colors">
              {item.label}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 pl-4">
            {/* --- Theme Toggle Button --- */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" 
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <RiSunLine size={22} /> : <RiMoonFill size={22} />}
            </button>

            {/* --- LANGUAGE SWITCHER BUTTON (NOW WITH FLAGS) - DESKTOP --- */}
            <button 
              onClick={toggleLanguage} 
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Switch Language"
            >
              {language === 'en' ? (
                <CountryFlag countryCode="KH" svg style={{ width: '1.75em', height: '1.75em' }} title="ភាសាខ្មែរ" />
              ) : (
                <CountryFlag countryCode="US" svg style={{ width: '1.75em', height: '1.75em' }} title="English" />
              )}
            </button>
          </div>
        </div>

        {/* ======== MOBILE MENU BUTTON ======== */}
        <div className="md:hidden">
          <button
            className="p-2 text-[#386c00] rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
            aria-label="Toggle Menu"
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* ======== MOBILE MENU OVERLAY ======== */}
      <div className={`fixed inset-0 bg-white dark:bg-stone-900 z-50 flex flex-col items-center justify-center ${navbar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center space-y-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-neutral-900 hover:text-[#386c00] dark:text-neutral-100 cursor-pointer transition duration-300 text-lg font-medium"
              onClick={() => setNavbar(false)} // Close menu on link click
            >
              {item.label}
            </Link>
          ))}
          
          <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            {/* --- Mobile Theme Toggle --- */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <RiSunLine size={24} /> : <RiMoonFill size={24} />}
            </button>

            {/* --- LANGUAGE SWITCHER BUTTON (NOW WITH FLAGS) - MOBILE --- */}
            <button 
              onClick={toggleLanguage} 
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Switch Language"
            >
              {language === 'en' ? (
                <CountryFlag countryCode="KH" svg style={{ width: '1.8em', height: '1.8em' }} title="ភាសាខ្មែរ" />
              ) : (
                <CountryFlag countryCode="US" svg style={{ width: '1.8em', height: '1.8em' }} title="English" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}