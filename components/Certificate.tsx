"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

interface ProductTranslation {
  name: string;
  description: string;
}
interface ProductsObject {
  [key: number]: ProductTranslation | undefined;
}
interface ProductItem {
  id: number;
  name: string;
  price: string;
  description: string;
  imageThumbnail: string;
  alt: string;
  link: string;
  badge?: string;
}

const matchaBowls: ProductItem[] = [
  {
    id: 1,
    name: "KBACH KHMER Matcha Bowl",
    price: "$18.00",
    description: "A handcrafted matcha bowl set featuring a traditional design. Perfect for daily tea rituals with its smooth finish and elegant curves.",
    imageThumbnail: "/rum-bowl-kr.png",
    alt: "Classic Matcha Bowl Set",
    link: "/shop/classic-matcha-bowl",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Whisk Holder Kbach Khmer",
    price: "$6.00",
    description: "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts.",
    imageThumbnail: "/holder-kr.png",
    alt: "Whisk Holder",
    link: "/shop/modern-zen-matcha-bowl",
  },
  {
    id: 3,
    name: "Bowl & Holder Set",
    price: "$23.00",
    description: "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts.",
    imageThumbnail: "/set-holder-and-bowl-mini.png",
    alt: "Bowl and Holder Set",
    link: "/shop/modern-zen-matcha-bowl",
    badge: "New",
  },
  {
    id: 4,
    name: "Bamboo Whisk",
    price: "$5.00",
    description: "An exclusive ceremonial set, complete with a bamboo whisk. Elevate your tea experience with this luxurious tool.",
    imageThumbnail: "/whisk-kr.png",
    alt: "Bamboo Whisk",
    link: "/shop/premium-ceremonial-set",
  },
  {
    id: 5,
    name: "Bamboo Scoop",
    price: "$1.00",
    description: "Compact and portable, this travel-friendly scoop is perfect for on-the-go tea lovers.",
    imageThumbnail: "/scoop-kr.png",
    alt: "Bamboo Scoop",
    link: "/shop/travel-matcha-kit",
  },
  {
    id: 6,
    name: "Bamboo Spoon",
    price: "$3.50",
    description: "Compact and portable, this travel-friendly spoon is perfect for on-the-go tea lovers.",
    imageThumbnail: "/spoon-kr.png",
    alt: "Bamboo Spoon",
    link: "/shop/travel-matcha-kit-2",
  },
  {
    id: 7,
    name: "Sifter",
    price: "$1.50",
    description: "Compact and portable, this travel-friendly sifter is perfect for on-the-go tea lovers.",
    imageThumbnail: "/sifter-kr.png",
    alt: "Sifter",
    link: "/shop/travel-matcha-kit-3",
  },
  {
    id: 8,
    name: "Matcha Whisk Set",
    price: "$8.00",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop.",
    imageThumbnail: "/matcha-whisk-set.png",
    alt: "Matcha Whisk Set",
    link: "/shop/travel-matcha-kit-3",
    badge: "Popular",
  },
];

const BADGE_COLORS: Record<string, string> = {
  "Best Seller": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "New":         "bg-[#386c00]/12 text-[#386c00] dark:bg-[#386c00]/25 dark:text-[#8fba3a]",
  "Popular":     "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
};

const MatchaBowlListSection = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  if (!t?.MatchaBowlListSection) {
    return <div className="text-red-500 p-4">Error loading translations.</div>;
  }

  return (
    <section id="matcha-bowls" className="relative py-24 sm:py-32 bg-[#f9fbf4] dark:bg-[#0a0a08]">

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#386c00]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-10 bg-[#386c00]/25" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#386c00] uppercase">Products</span>
          <div className="h-px w-10 bg-[#386c00]/25" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-stone-900 dark:text-stone-50 font-[family-name:var(--font-kantumruy)]">
            {t.MatchaBowlListSection.title}
          </h2>
        </div>

        {/* Hero banner */}
        <div className="relative rounded-2xl overflow-hidden mb-14 h-52 sm:h-72 bg-[#e3edc9] dark:bg-[#1a2610]">
          <Image
            src="/Untitled design (14).png"
            alt="Featured Matcha Set Collection"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/50 via-stone-900/20 to-transparent flex items-center">
            <div className="px-8 sm:px-12">
              <p className="text-[11px] tracking-widest uppercase text-white/70 font-semibold mb-2">Featured Collection</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">Kbach Khmer Series</p>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {matchaBowls.map((bowl) => {
            const productsitem = (t.productsitem as ProductsObject | undefined);
            const translated = productsitem?.[bowl.id];

            return (
              <div
                key={bowl.id}
                className="group bg-white dark:bg-[#141410] rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-800/50 hover:border-[#386c00]/30 hover:shadow-lg hover:shadow-[#386c00]/6 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[#f3f8ea] dark:bg-[#1a2610]">
                  {bowl.badge && (
                    <div className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold ${BADGE_COLORS[bowl.badge]}`}>
                      {bowl.badge}
                    </div>
                  )}
                  <Link href={bowl.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={bowl.imageThumbnail}
                      alt={bowl.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </Link>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-[13px] sm:text-[14px] font-semibold text-stone-800 dark:text-stone-200 mb-1 leading-snug line-clamp-2 font-[family-name:var(--font-kantumruy)]">
                    {translated?.name || bowl.name}
                  </h3>
                  <p className="text-[15px] font-bold text-[#386c00] mb-2">{bowl.price}</p>
                  <p className="text-[12px] text-stone-500 dark:text-stone-500 leading-relaxed line-clamp-2 mb-4 flex-1 font-[family-name:var(--font-kantumruy)]">
                    {translated?.description || bowl.description}
                  </p>
                  <Link
                    href={bowl.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#386c00]/8 hover:bg-[#386c00] text-[#386c00] hover:text-white text-[12px] font-semibold transition-all duration-200 font-[family-name:var(--font-kantumruy)]"
                  >
                    <BsCartPlus size={14} />
                    {t.MatchaBowlListSection.buttonText || "Shop Now"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#386c00]/30 text-[#386c00] dark:text-[#8fba3a] text-[14px] font-semibold hover:bg-[#386c00] hover:text-white hover:border-[#386c00] transition-all duration-200 font-[family-name:var(--font-kantumruy)]"
          >
            View All Products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MatchaBowlListSection;
