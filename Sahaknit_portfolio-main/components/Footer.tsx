// import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs"; // Import Telegram icon from react-icons/bs

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      {/* Horizontal Line */}
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />

      {/* Footer Content */}
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        {/* Copyright Text */}
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 Vong Sahaknit
          <a href="/" className="hover:underline"></a>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          {/* GitHub Icon */}
          <a
            href="https://github.com/vongsahaknit21" // Replace with your GitHub profile URL
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/vong-sahaknit-881831244/" // Replace with your LinkedIn profile URL
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          {/* Telegram Icon */}
          <a
            href="https://t.me/@Sahaknit" // Replace with your Telegram username or link
            rel="noreferrer"
            target="_blank"
          >
            <BsTelegram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;