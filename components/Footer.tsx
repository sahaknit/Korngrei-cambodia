// components/Footer.tsx
import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6"; // Import icons from react-icons/fa6

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      {/* Horizontal Line */}
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0 dark:bg-stone-700" /> {/* Added dark mode bg color */}

      {/* Footer Content */}
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 dark:text-neutral-100 md:flex-row md:justify-between"> {/* Added dark:text-neutral-100 to main text container */}
        {/* Copyright Text */}
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-400 mb-4 md:mb-0"> {/* Added dark:text-neutral-400, margin for mobile */}
          © 2025 Matcha Bowl {/* Updated copyright text */}
          <a href="/" className="hover:underline"></a>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row items-center justify-center space-x-4"> {/* Increased space-x from 2 to 4 */}
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/your-facebook-page" // Replace with your Facebook page URL
            rel="noopener noreferrer" // Added 'noopener' for security
            target="_blank"
            aria-label="Follow us on Facebook" // Added aria-label for accessibility
          >
            <FaFacebook
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-[#386c00] dark:text-neutral-400 dark:hover:text-[#e3edc9]" // Added hover colors matching brand
              size={28} // Slightly adjusted size
            />
          </a>

          {/* TikTok Icon */}
          <a
            href="https://www.tiktok.com/@your-tiktok-handle" // Replace with your TikTok handle URL
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Follow us on TikTok"
          >
            <FaTiktok
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-[#386c00] dark:text-neutral-400 dark:hover:text-[#e3edc9]" // Added hover colors
              size={28}
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/your-instagram-handle" // Replace with your Instagram handle URL
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-[#386c00] dark:text-neutral-400 dark:hover:text-[#e3edc9]" // Added hover colors
              size={28}
            />
          </a>

          {/* Twitter/X Icon */}
          <a
            href="https://twitter.com/your-x-handle" // Replace with your Twitter/X handle URL
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Follow us on Twitter/X"
          >
            <FaXTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-[#386c00] dark:text-neutral-400 dark:hover:text-[#e3edc9]" // Added hover colors
              size={28}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;