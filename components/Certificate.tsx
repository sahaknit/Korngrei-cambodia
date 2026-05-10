// components/MatchaBowlListSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// Removed SlideUp import as we are changing the layout
import { BsCartPlus } from "react-icons/bs";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

// --- Simple type definitions for type safety within the component ---
interface ProductTranslation {
  name: string;
  description: string;
  // alt?: string; // Optional if used
}

interface ProductsObject {
  [key: number]: ProductTranslation | undefined;
}

interface ProductItem {
  id: number;
  name: string;
  price: string;
  description: string;
  imageThumbnail: string; // Changed for clarity
  alt: string;           // Added alt text property
  link: string;
}

// --- Matcha Bowl Products Data ---
const matchaBowls: ProductItem[] = [
  {
    id: 1,
    name: "KBACH KHMER Matcha Bowl",
    price: "$18.00",
    description: "A handcrafted matcha bowl set featuring a traditional design. Perfect for daily tea rituals with its smooth finish and elegant curves.",
    imageThumbnail: "/rum-bowl-kr.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Classic Matcha Bowl Set Thumbnail", // --- SPECIFIC ALT TEXT ---
    link: "/shop/classic-matcha-bowl",
  },
  {
    id: 2,
    name: "Whish Holder Kbach Khmer",
    price: "$6.00",
    description: "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts.",
    imageThumbnail: "/holder-kr.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Modern Zen Matcha Bowl Thumbnail", // --- SPECIFIC ALT TEXT ---
    link: "/shop/modern-zen-matcha-bowl",
  },
   {
    id: 3,
    name: "bowl and holder Kbach Khmer",
    price: "$6.00",
    description: "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts.",
    imageThumbnail: "/set-holder-and-bowl-mini.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Modern Zen Matcha Bowl Thumbnail", // --- SPECIFIC ALT TEXT ---
    link: "/shop/modern-zen-matcha-bowl",
  },
  {
    id: 4,
    name: "Bamboo Whisk",
    price: "$5.00",
    description: "An exclusive ceremonial set, complete with a bamboo whisk, scoop, and premium matcha powder. Elevate your tea experience with this luxurious collection.",
    imageThumbnail: "/whisk-kr.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Premium Ceremonial Set Thumbnail", // --- SPECIFIC ALT TEXT ---
    link: "/shop/premium-ceremonial-set",
  },
  {
    id: 5,
    name: "Bamboo Scoop",
    price: "$1.00",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    imageThumbnail: "/scoop-kr.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Travel-Friendly Matcha Kit Thumbnail", // --- SPECIFIC ALT TEXT ---
    link: "/shop/travel-matcha-kit",
  },
  {
    id: 6,
    name: "Bamboo Spoon",
    price: "$3.50",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    imageThumbnail: "/spoon-kr.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Another Travel Kit Thumbnail", // --- SPECIFIC ALT TEXT ---
    link: "/shop/travel-matcha-kit-2",
  },
  {
    id: 7,
    name: "sifter",
    price: "$1.50",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    imageThumbnail: "/sifter-kr.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Yet Another Kit Thumbnail", // --- SPECIFIC ALT TEXT ---
    link: "/shop/travel-matcha-kit-3",
  },
   {
    id: 8,
    name: "Matcha Whisk set",
    price: "$8.00",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    imageThumbnail: "/matcha-whisk-set.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Yet Another Kit Thumbnail", // --- SPECIFIC ALT TEXT ---
    link: "/shop/travel-matcha-kit-3",
  },
  
];

const MatchaBowlListSection = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations['en']; // Fallback

  // --- Defensive checks ---
  if (!t) {
    console.error(`[MatchaBowlListSectionitem] Translations object not found for language '${language}' or fallback 'en'.`);
    return <div className="text-red-500 p-4">Error loading translations.</div>;
  }

  if (!t.MatchaBowlListSection) {
    console.error(`[MatchaBowlListSectionitem] MatchaBowlListSection translations not found for language '${language}'. Check translations.ts structure.`);
    return <div className="text-red-500 p-4">Error loading section translations.</div>;
  }

  return (
    <section id="matcha-bowls" className="relative bg-transparent px-6 sm:px-12 lg:px-20 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="my-4 font-bold text-4xl text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
          {t.MatchaBowlListSection.title}
        </h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
      </div>

      {/* --- NEW: HERO THUMBNAIL IMAGE --- */}
      {/* Centered, large image with rounded corners and shadow */}
     {/* --- HERO THUMBNAIL IMAGE --- */}
<div className="flex justify-center mb-12">
  <div className="relative w-full max-w-4xl h-96 rounded-2xl overflow-hidden shadow-xl">
    {/* The container defines the size (w-full, max-w-4xl, h-96) */}
    <Image
      src="/Untitled design (14).png" // --- REPLACE with your actual hero image path ---
      alt="Featured Matcha Set Collection" // --- REPLACE with descriptive alt text ---
      fill // --- Tells Next.js to make the image fill the parent container ---
      className="object-cover w-full h-full" // --- Ensures the image covers the space ---
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1024px"
    />
  </div>
</div>
{/* --- END: HERO THUMBNAIL IMAGE --- */}
      {/* --- END: HERO THUMBNAIL IMAGE --- */}


      {/* --- CHANGED GRID LAYOUT TO 2 ROWS x 3 COLS (Max 6 items) --- */}
      {/* Grid: 1 column on mobile, 2 on small screens, 3 on medium and larger screens */}
      {/* max-w-6xl ensures a reasonable maximum width for the grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {matchaBowls.map((bowl) => {
          // --- Use type assertion to fix the TS error ---
          const productsitem = t.productsitem as ProductsObject | undefined;
          const translatedBowl = productsitem?.[bowl.id];

          return (
            <div
              key={bowl.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* --- Thumbnail Image --- */}
              {/* Fixed height container for consistent grid rows */}
              <div className="relative h-64 w-full">
  <Link
    href={bowl.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={bowl.imageThumbnail}
      alt={bowl.name}
      layout="fill"
      objectFit="cover"
      className="rounded-lg transition-transform duration-300 group-hover:scale-105"
    />
  </Link>
</div>

              {/* --- Details Below Image --- */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Product Name */}
                  <h2 className="text-xl font-bold mb-2 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
                    {/* Use translated name if available, fallback to default */}
                    {translatedBowl?.name || bowl.name}
                  </h2>
                  {/* Product Price */}
                  <p className="text-xl font-semibold text-[#386c00] dark:text-yellow-400 mb-3 font-[family-name:var(--font-kantumruy)]">
                    {bowl.price}
                  </p>
                  {/* Product Description */}
                  <p className="text-base leading-6 mb-4 text-neutral-600 dark:text-neutral-400 font-[family-name:var(--font-kantumruy)]">
                    {/* Use translated description if available, fallback to default */}
                    {translatedBowl?.description || bowl.description}
                  </p>
                </div>
                {/* --- Shop Now Button (Always at the bottom) --- */}
                <Link
  href={bowl.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-white transition-all duration-300 bg-[#386c00] hover:bg-[#2d5400] rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)]"
>
  <BsCartPlus size={18} className="mr-2" />
  {/* Use translated button text if available, fallback to a default */}
  {t.MatchaBowlListSection.buttonText || "Shop Now"}
</Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* --- END OF CHANGED GRID LAYOUT --- */}
    </section>
  );
};

export default MatchaBowlListSection;