"use client"; // This is a client component
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Education",
    page: "education",
  },
  {
    label: "Certificates",
    page: "certificates",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if the component is mounted

  // Set dark mode as the default theme after mounting
  useEffect(() => {
    setMounted(true); // Mark the component as mounted
    setTheme("dark"); // Set the theme to dark
  }, [setTheme]);

  // Prevent rendering until the component is mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex justify-between items-center py-3 md:py-5">
        {/* Logo */}
        <div>
          <Link to="home">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Vong Sahaknit
            </h2>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="text-neutral-900 hover:text-yellow-500 dark:text-neutral-100 cursor-pointer transition duration-300"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {item.label}
            </Link>
          ))}
          {/* Theme Toggle Button */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl shadow hover:scale-105 transition duration-300"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl shadow hover:scale-105 transition duration-300"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-yellow-500 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        {/* Mobile Navigation Links */}
        <div
          className={`fixed inset-0 bg-white dark:bg-stone-900 z-50 flex flex-col items-center justify-center space-y-8 ${
            navbar ? "block" : "hidden"
          }`}
        >
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="text-neutral-900 hover:text-yellow-500 dark:text-neutral-100 cursor-pointer transition duration-300"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(false)} // Close menu on link click
            >
              {item.label}
            </Link>
          ))}
          {/* Theme Toggle Button */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl shadow hover:scale-105 transition duration-300"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl shadow hover:scale-105 transition duration-300"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}