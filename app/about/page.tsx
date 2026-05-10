// app/about/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900 pt-24 pb-16 px-6 sm:px-12 lg:px-20">
      
      {/* Hero Section */}
      <section id="about-hero" className="text-center mb-16">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#386c00] dark:text-[#e3edc9] mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Korng Rei
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-[#e3edc9] dark:bg-[#386c00] mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
      </section>

      {/* Hero Image Section - Instagram-style square */}
      <section id="about-image" className="mb-16">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingTop: '100%' }}>
          <Image
            src="/Untitled design (10).png"
            alt="Big Hero Image of Matcha Bowls"
            className="object-contain w-full h-full absolute inset-0"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <motion.h2
              className="text-3xl font-semibold text-[#386c00] dark:text-[#e3edc9] mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Our Story: A Tradition of Quality
            </motion.h2>
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our philosophy is rooted in the rich heritage of Kampong Chhnang province, a land renowned for its master potters.
              Like a finely crafted piece of pottery, each of our products is shaped with skill, passion, and an unwavering commitment to quality.
              We pride ourselves on using only the finest ingredients, sourced directly from nature and infused with vibrant local elements like fresh green lime.
            </motion.p>
            <motion.p
              className="text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Inspired by Tradition, Crafted for Today. Noticing the local appreciation for Japanese Matcha, we were inspired to innovate.
              We set out to create a uniquely Cambodian product, starting with pure, locally-sourced green tea and meticulously blending it with the best ingredients our country has to offer.
            </motion.p>
          </div>
          
          {/* Instagram-style square image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingTop: '100%' }}>
              <Image
                src="/smaller-story-image.jpg"
                alt="Crafting matcha bowls with passion"
                className="object-contain w-full h-full absolute inset-0"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="our-mission" className="mb-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <motion.h2
              className="text-3xl font-semibold text-[#386c00] dark:text-[#e3edc9] mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our mission is to create high-quality, hygienic products you can trust for your well-being.
              By choosing us, you are not just enjoying a premium product; you are supporting local farmers,
              strengthening families, and contributing to the prosperity of our entire nation.
              Join us in celebrating and championing Cambodian craft.
            </motion.p>
          </div>
          
          {/* Instagram-style square image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingTop: '100%' }}>
              <Image
                src="/smaller-mission-image.jpg"
                alt="Supporting local communities"
                className="object-contain w-full h-full absolute inset-0"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="our-values" className="text-center">
        <motion.h2
          className="text-3xl font-semibold text-[#386c00] dark:text-[#e3edc9] mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          What We Stand For
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-[#386c00] dark:text-[#e3edc9] mb-2">Quality</h3>
            <p className="text-gray-600 dark:text-gray-400">Unwavering commitment to the finest materials and craftsmanship.</p>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#386c00] dark:text-[#e3edc9] mb-2">Tradition</h3>
            <p className="text-gray-600 dark:text-gray-400">Honoring the heritage and techniques of Kampong Chhnang.</p>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#386c00] dark:text-[#e3edc9] mb-2">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-400">Sourcing responsibly and supporting local communities.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}