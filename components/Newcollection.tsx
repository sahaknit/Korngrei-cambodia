// components/CollectionSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "components/context/LanguageContext";
// Removed import { translations } from "@/lib/translations"; // No longer needed
import { BsCartPlus, BsChevronLeft, BsChevronRight, BsTelegram, BsFacebook, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

// --- Define ProductItem type with translations included ---
interface ProductItem {
  id: number;
  // --- English Fields ---
  name_en: string;
  description_en: string;
  alt_en: string;
  subAlt1_en: string;
  subAlt2_en: string;
  subAlt3_en: string;
  // --- Khmer Fields ---
  name_km: string;
  description_km: string;
  alt_km: string;
  subAlt1_km: string;
  subAlt2_km: string;
  subAlt3_km: string;
  // --- Shared Fields (same across languages) ---
  price: string;
  image: string; // Main large image
  subImage1: string;
  subImage2: string;
  subImage3: string;
  link: string; // The internal link to the product page
  category?: string;
}

// --- Sample Product Data with Translations Included ---
const matchaSets: ProductItem[] = [
  {
    id: 1,
    name_en: "Sakura Ceramic Bowl Set",
    name_km: "ឈុតចានម៉ាតឆាសាគុរ៉ា",
    description_en: "A timeless matcha bowl set crafted from high-quality ceramic.",
    description_km: "ឈុតម៉ាតស៊ីដែលបានបង្កើតដោយដៃដែលមានគុណភាពខ្ពស់។",
    price: "$24.99",
    image: "/Sakura02.jpg", // --- YOUR LARGE 1:1 IMAGE PATH ---
    alt_en: "Featured KBACH KHMER Ceramic Bowl", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (EN) ---
    alt_km: "ឈុតចានម៉ាតស៊ីខេមរកែន", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (KM) ---
    subImage1: "/Sakura01.jpg", // --- YOUR SUB-IMAGE 1 PATH ---
    subImage2: "/Sakura04.jpg", // --- YOUR SUB-IMAGE 2 PATH ---
    subImage3: "/Sakura03.jpg", // --- YOUR SUB-IMAGE 3 PATH ---
    subAlt1_en: "KBACH KHMER Ceramic Bowl Side View", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (EN) ---
    subAlt1_km: "ឈុតចានម៉ាតស៊ីខេមរកែន ទិដ្ឋភាពចំហៀង", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (KM) ---
    subAlt2_en: "KBACH KHMER Ceramic Bowl Top View", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (EN) ---
    subAlt2_km: "ឈុតចានម៉ាតស៊ីខេមរកែន ទិដ្ឋភាពលើ", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (KM) ---
    subAlt3_en: "KBACH KHMER Ceramic Bowl Detail 1", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (EN) ---
    subAlt3_km: "ឈុតចានម៉ាតស៊ីខេមរកែន លម្អិត ១", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (KM) ---
    link: "/shop/kbach-khmer-ceremonial-set", // Replace with your product page URL
    category: "ceramic"
  },
  {
    id: 2,
    name_en: "Butterfly Ceramic Bowl Set",
    name_km: "កន្លែងដាក់ប៊ីត",
    description_en: "An elegant combination of natural bamboo tools and a stone bowl.",
    description_km: "ការរួមបញ្ចូលគ្នានៃឧបករណ៍ប៊ីតធម្មជាតិ និងចានថ្ម។",
    price: "$29.99",
    image: "/222.jpg", // --- YOUR LARGE 1:1 IMAGE PATH ---
    alt_en: "Featured Whisk Holder Set", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (EN) ---
    alt_km: "ឈុតកន្លែងដាក់ប៊ីត", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (KM) ---
    subImage1: "/111.jpg", // --- YOUR SUB-IMAGE 1 PATH ---
    subImage2: "/333.jpg", // --- YOUR SUB-IMAGE 2 PATH ---
    subImage3: "/444.jpg", // --- YOUR SUB-IMAGE 3 PATH ---
    subAlt1_en: "Whisk Holder Side View", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (EN) ---
    subAlt1_km: "កន្លែងដាក់ប៊ីត ទិដ្ឋភាពចំហៀង", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (KM) ---
    subAlt2_en: "Whisk Holder Top View", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (EN) ---
    subAlt2_km: "កន្លែងដាក់ប៊ីត ទិដ្ឋភាពលើ", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (KM) ---
    subAlt3_en: "Whisk Detail", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (EN) ---
    subAlt3_km: "លម្អិតប៊ីត", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (KM) ---
    link: "/shop/whisk-holder-set", // Replace with your product page URL
    category: "bamboo"
  },
  {
    id: 3,
    name_en: "Carrot Ceramic Bowl Set",
    name_km: "សំណុំម៉ូឌើនមីនីម៉ាល",
    description_en: "A sleek, contemporary take on the traditional matcha experience.",
    description_km: "ការបកប្រែទំនើបនៃបទពិសោធន៍ម៉ាតស៊ីបុរាណ។",
    price: "$29.99",
    image: "/2222.jpg", // --- YOUR LARGE 1:1 IMAGE PATH ---
    alt_en: "Featured Modern Minimalist Set", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (EN) ---
    alt_km: "ឈុតម៉ូឌើនមីនីម៉ាល", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (KM) ---
    subImage1: "/1111.jpg", // --- YOUR SUB-IMAGE 1 PATH ---
    subImage2: "/3333.jpg", // --- YOUR SUB-IMAGE 2 PATH ---
    subImage3: "/4444.jpg", // --- YOUR SUB-IMAGE 3 PATH ---
    subAlt1_en: "Modern Minimalist Set Side View", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (EN) ---
    subAlt1_km: "សំណុំម៉ូឌើនមីនីម៉ាល ទិដ្ឋភាពចំហៀង", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (KM) ---
    subAlt2_en: "Modern Minimalist Set Top View", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (EN) ---
    subAlt2_km: "សំណុំម៉ូឌើនមីនីម៉ាល ទិដ្ឋភាពលើ", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (KM) ---
    subAlt3_en: "Modern Minimalist Set Detail 1", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (EN) ---
    subAlt3_km: "សំណុំម៉ូឌើនមីនីម៉ាល លម្អិត ១", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (KM) ---
    link: "/shop/modern-minimalist-set", // Replace with your product page URL
    category: "modern"
  },
  {
    id: 4,
    name_en: "Luck Ceramic Bowl Set",
    name_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ",
    description_en: "A unique, individually crafted bowl by a master artisan.",
    description_km: "ចានដែលមានរចនាប័ទ្មពិសេសដោយសិល្បៈករ។",
    price: "$29.99",
    image: "/luck1.jpg", // --- YOUR LARGE 1:1 IMAGE PATH ---
    alt_en: "Featured Premium Handcrafted Bowl", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (EN) ---
    alt_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (KM) ---
    subImage1: "/luck2.jpg", // --- YOUR SUB-IMAGE 1 PATH ---
    subImage2: "/luck3.jpg", // --- YOUR SUB-IMAGE 2 PATH ---
    subImage3: "/luck4.JPG", // --- YOUR SUB-IMAGE 3 PATH ---
    subAlt1_en: "Premium Handcrafted Bowl Side View", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (EN) ---
    subAlt1_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ ទិដ្ឋភាពចំហៀង", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (KM) ---
    subAlt2_en: "Premium Handcrafted Bowl Top View", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (EN) ---
    subAlt2_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ ទិដ្ឋភាពលើ", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (KM) ---
    subAlt3_en: "Premium Handcrafted Bowl Detail 1", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (EN) ---
    subAlt3_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ លម្អិត ១", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (KM) ---
    link: "/shop/premium-handcrafted-bowl", // Replace with your product page URL
    category: "premium"
  },
  {
    id: 5,
    name_en: "Red Peach Ceramic Bowl Set",
    name_km: "កញ្ចប់ដែលអាចយកទៅដំណើរ",
    description_en: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបានសម្រាប់ការរីករាយជាមួយនឹងម៉ាតស៊ី។",
    price: "$29.99",
    image: "/red1.jpg", // --- YOUR LARGE 1:1 IMAGE PATH ---
    alt_en: "Featured Travel-Friendly Matcha Kit", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (EN) ---
    alt_km: "កញ្ចប់ដែលអាចយកទៅដំណើរ", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE (KM) ---
    subImage1: "/red2.jpg", // --- YOUR SUB-IMAGE 1 PATH ---
    subImage2: "/red3.jpg", // --- YOUR SUB-IMAGE 2 PATH ---
    subImage3: "/red4.jpg", // --- YOUR SUB-IMAGE 3 PATH ---
    subAlt1_en: "Travel-Friendly Matcha Kit Overview", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (EN) ---
    subAlt1_km: "កញ្ចប់ដែលអាចយកទៅដំណើរ ទិដ្ឋភាពទូទៅ", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 1 (KM) ---
    subAlt2_en: "Travel Kit Contents", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (EN) ---
    subAlt2_km: "មាតិកាកញ្ចប់ដំណើរ", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 2 (KM) ---
    subAlt3_en: "Mini Matcha Bowl Detail", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (EN) ---
    subAlt3_km: "លម្អិតចានម៉ាតស៊ីតូច", // --- SPECIFIC ALT TEXT FOR SUB-IMAGE 3 (KM) ---
    link: "/shop/travel-friendly-matcha-kit", // Replace with your product page URL
    category: "travel"
  },

  // Add more products if needed (IDs 7, 8, ...)
];

const CollectionSection = () => {
  // --- Get language ---
  const { language } = useLanguage();
  // No need to get t from translations.ts anymore

  // --- State for current slide index ---
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Calculate next/previous indices ---
  const nextIndex = (currentIndex + 1) % matchaSets.length;
  const prevIndex = (currentIndex - 1 + matchaSets.length) % matchaSets.length;

  // --- Handle slide navigation ---
  const goToNext = () => {
    setCurrentIndex(nextIndex);
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex);
  };

  // --- Handle dot navigation ---
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // --- Get current product data ---
  const currentProduct = matchaSets[currentIndex];

  // --- Select the correct language strings directly from the product object ---
  const productName = language === 'km' ? currentProduct.name_km : currentProduct.name_en;
  const productDescription = language === 'km' ? currentProduct.description_km : currentProduct.description_en;
  const productAlt = language === 'km' ? currentProduct.alt_km : currentProduct.alt_en;
  const productSubAlt1 = language === 'km' ? currentProduct.subAlt1_km : currentProduct.subAlt1_en;
  const productSubAlt2 = language === 'km' ? currentProduct.subAlt2_km : currentProduct.subAlt2_en;
  const productSubAlt3 = language === 'km' ? currentProduct.subAlt3_km : currentProduct.subAlt3_en;

  // --- Construct the shareable URL (the page where the product is viewed) ---
  // Assuming the 'link' field in your data points to the product page route
  const currentUrl = typeof window !== 'undefined' ? window.location.origin + currentProduct.link : '';

  // --- Function to copy URL to clipboard ---
  const copyToClipboard = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl).then(
        () => {
          alert('Link copied to clipboard! Share it on your favorite platform.');
        },
        (err) => {
          console.error('Failed to copy: ', err);
          // Fallback: try execCommand if Clipboard API fails (less reliable)
          const textArea = document.createElement("textarea");
          textArea.value = currentUrl;
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            const successful = document.execCommand('copy');
            if (successful) {
              alert('Link copied to clipboard! Share it on your favorite platform.');
            } else {
              alert('Could not copy link. Please try again.');
            }
          } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            alert('Could not copy link. Please try again.');
          }
          document.body.removeChild(textArea);
        }
      );
    } else {
      // Clipboard API not supported
      alert('Copying link is not supported in your browser. Please copy the link manually.');
    }
  };

  // --- Construct Share URLs ---
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(productName)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(currentUrl)}`; // Note: Instagram doesn't officially support direct sharing via URL

  return (
    <section id="collection" className="relative bg-transparent px-6 sm:px-12 lg:px-20 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="my-4 font-bold text-4xl text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
          {/* --- You still need translations for the SECTION header (e.g., title, subtitle, buttonText) from translations.ts or define them here too --- */}
          {/* For now, assuming these are static or also in the component */}
          Our Ceramic Matcha Sets {/* Replace with a translated string from a central source or define here */}
          <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-[family-name:var(--font-kantumruy)]">
          Discover our handcrafted selection of matcha bowls, sets, and accessories. {/* Replace with a translated string */}
        </p>
      </div>

      {/* --- SLIDESHOW CONTAINER --- */}
      <div className="max-w-6xl mx-auto relative">
        {/* --- Single Visible Product Card (Animated with framer-motion) --- */}
        <motion.div
          key={currentProduct.id} // Key ensures remounting on slide change for proper animation
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right and transparent
          animate={{ opacity: 1, x: 0 }}   // Animate to center and opaque
          exit={{ opacity: 0, x: -100 }}   // Exit to the left and transparent
          transition={{ duration: 0.5, ease: "easeInOut" }} // Animation timing
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* --- Product Details Container --- */}
          <div className="p-6 md:p-8">
            {/* --- Large Main Image (1:1 Square) --- */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-full max-w-2xl aspect-square rounded-xl overflow-hidden shadow-md">
                <Link
                  href={currentProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src={currentProduct.image} // --- USE the single large image ---
                    alt={productAlt} // Use selected alt text based on language
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={currentIndex === 0} // Prioritize loading for the first product in the initial view
                  />
                </Link>
              </div>
            </div>

            {/* --- Product Info --- */}
            <div className="text-center md:text-left mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
                {productName} {/* Use selected name based on language */}
              </h2>
              <p className="text-xl font-semibold text-[#386c00] dark:text-yellow-400 mb-4 font-[family-name:var(--font-kantumruy)]">
                {currentProduct.price}
              </p>
              <p className="text-base md:text-lg leading-6 text-gray-700 dark:text-gray-300 font-[family-name:var(--font-kantumruy)]">
                {productDescription} {/* Use selected description based on language */}
              </p>
            </div>

            {/* --- NEW LAYOUT: Three Sub-Images Below Large Image --- */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
                Gallery
              </h3>
              {/* Grid for 3 sub-images: 1 column on mobile, 3 columns on medium and larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Sub Image 1 */}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow duration-300">
                  <Link
                    href={currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src={currentProduct.subImage1} // --- USE sub-image 1 ---
                      // Use selected alt text based on language
                      alt={productSubAlt1}
                      fill
                      className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw" // Responsive image loading
                    />
                  </Link>
                </div>
                {/* Sub Image 2 */}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow duration-300">
                  <Link
                    href={currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src={currentProduct.subImage2} // --- USE sub-image 2 ---
                      // Use selected alt text based on language
                      alt={productSubAlt2}
                      fill
                      className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw" // Responsive image loading
                    />
                  </Link>
                </div>
                {/* Sub Image 3 */}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow duration-300">
                  <Link
                    href={currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src={currentProduct.subImage3} // --- USE sub-image 3 ---
                      // Use selected alt text based on language
                      alt={productSubAlt3}
                      fill
                      className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw" // Responsive image loading
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* --- SOCIAL MEDIA SHARE BUTTONS --- */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
                Share this
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* Telegram Share Button */}
                <Link
                  href={telegramShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  aria-label="Share on Telegram"
                >
                  <BsTelegram size={20} />
                </Link>
                {/* Facebook Share Button (Copies Link) */}
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  aria-label="Copy link to share on Facebook"
                >
                  <BsFacebook size={20} />
                </button>
                {/* Instagram Share Button (Copies Link) */}
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
                  aria-label="Copy link to share on Instagram"
                >
                  <BsInstagram size={20} />
                </button>
              </div>
            </div>
            {/* --- END SOCIAL MEDIA SHARE BUTTONS --- */}

            {/* --- Shop Now Button --- */}
            <div className="flex justify-center md:justify-start">
              <Link
                href={currentProduct.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 bg-[#386c00] hover:bg-[#2d5400] rounded-full shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)]"
              >
                <BsCartPlus size={20} className="mr-2" />
                Shop Now {/* Replace with a translated string */}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* --- Navigation Arrows --- */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 text-[#386c00] dark:text-[#e3edc9] p-2 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#386c00]"
          aria-label="Previous product"
        >
          <BsChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 text-[#386c00] dark:text-[#e3edc9] p-2 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#386c00]"
          aria-label="Next product"
        >
          <BsChevronRight size={24} />
        </button>

        {/* --- Slide Indicators (Dots) --- */}
        <div className="flex justify-center mt-8 space-x-2">
          {matchaSets.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "bg-[#386c00] dark:bg-[#e3edc9]"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* --- END SLIDESHOW CONTAINER --- */}
    </section>
  );
};

export default CollectionSection;