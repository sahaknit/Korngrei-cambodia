// components/MatchaBowlListSection.tsx
"use client"; // Ensure this is a Client Component as it uses hooks like useLanguage

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp"; // Ensure SlideUp is also a Client Component if it uses hooks
import { BsArrowUpRightSquare, BsCartPlus } from "react-icons/bs";
// 1. Import the useLanguage hook and translations
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

// Define the type for a product item (optional but recommended for type safety)
interface ProductItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  link: string;
}

// Matcha Bowl Products - These would ideally come from a data source with translations
const matchaBowls: ProductItem[] = [
  {
    id: 1, // Adding an ID for better key usage
    name: "Matcha bowl kbach khmer 01",
    price: "$29.99",
    description:
      "A handcrafted matcha bowl inspired by traditional Kbach Khmer artistry. Each curve and carving reflects the timeless beauty of Cambodian culture — perfect for your daily tea ritual or as a unique collector’s piece.",
    image: "/IMG_1361.JPG",
    link: "/shop/classic-matcha-bowl", // Replace with your product page URL
  },
  {
    id: 2,
    name: "Matcha bowl kbach khmer 02",
    price: "$29.99",
    description:
      "A handcrafted matcha bowl inspired by traditional Kbach Khmer artistry. Each curve and carving reflects the timeless beauty of Cambodian culture — perfect for your daily tea ritual or as a unique collector’s piece.",
    image: "/IMG_1362.JPG",
    link: "/shop/modern-zen-matcha-bowl", // Replace with your product page URL
  },
  {
    id: 3,
    name: "Matcha bowl kbach khmer 03",
    price: "$29.99",
    description:
      "A handcrafted matcha bowl inspired by traditional Kbach Khmer artistry. Each curve and carving reflects the timeless beauty of Cambodian culture — perfect for your daily tea ritual or as a unique collector’s piece.",
    image: "/IMG_1360.JPG",
    link: "/shop/premium-ceremonial-set", // Replace with your product page URL
  },
  {
    id: 4,
    name: "Matcha bowl kbach khmer 04",
    price: "$29.99",
    description:
      "A handcrafted matcha bowl inspired by traditional Kbach Khmer artistry. Each curve and carving reflects the timeless beauty of Cambodian culture — perfect for your daily tea ritual or as a unique collector’s piece.",
    image: "/IMG_1363.JPG",
    link: "/shop/travel-matcha-kit", // Replace with your product page URL
  },
  {
    id: 5,
    name: "Matcha bowl kbach khmer 05",
    price: "$29.99",
    description:
      "A handcrafted matcha bowl inspired by traditional Kbach Khmer artistry. Each curve and carving reflects the timeless beauty of Cambodian culture — perfect for your daily tea ritual or as a unique collector’s piece.",
    image: "/IMG_1364.PNG",
    link: "/shop/travel-matcha-kit-2", // Example link
  },
  {
    id: 6,
    name: "Matcha bowl kbach khmer 06",
    price: "$29.99",
    description:
      "A handcrafted matcha bowl inspired by traditional Kbach Khmer artistry. Each curve and carving reflects the timeless beauty of Cambodian culture — perfect for your daily tea ritual or as a unique collector’s piece.",
    image: "/IMG_1365.JPG",
    link: "/shop/travel-matcha-kit-3", // Example link
  },
   {
    id: 7,
    name: "Matcha bowl kbach khmer 07",
    price: "$29.99",
    description:
      "A handcrafted matcha bowl inspired by traditional Kbach Khmer artistry. Each curve and carving reflects the timeless beauty of Cambodian culture — perfect for your daily tea ritual or as a unique collector’s piece.",
    image: "/rumdoul-set-kr.png",
    link: "/shop/travel-matcha-kit-3", // Example link
  },
];

const MatchaBowlListSection = () => {
  // 2. Use the hook to get the current language
  const { language } = useLanguage();
  // 3. Get the translation object for the current language
  const t = translations[language];

  return (
    <section id="matcha-bowls" className="relative bg-transparent px-6 sm:px-12 lg:px-20">
      {/* Section Header */}
      <h1 className="my-10 text-center font-bold text-4xl text-[#386c00] font-[family-name:var(--font-kantumruy)]">
        {/* Use the translated title from the translations object */}
        {t.MatchaBowlListSection.title}
        <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
      </h1>

      {/* Matcha Bowl Grid */}
      <div className="flex flex-col space-y-28">
        {matchaBowls.map((bowl) => ( // Use 'bowl.id' as the key
          <div key={bowl.id}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                {/* Image Section */}
                <div className="md:w-1/2">
                  <Link href={bowl.link} target="_blank">
                    <Image
                      src={bowl.image}
                      alt={bowl.name} // Consider using translated alt text if available
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70 transition-opacity"
                    />
                  </Link>
                </div>

                {/* Details Section */}
                <div className="mt-8 md:w-1/2">
                  {/* Apply the font class here too if the name/description could be Khmer */}
                  <h1 className="text-4xl font-bold mb-6 text-[#386c00] font-[family-name:var(--font-kantumruy)]">
                    {bowl.name} {/* This would ideally be {t.products[bowl.id]?.name} or similar */}
                  </h1>
                  <p className="text-2xl font-semibold text-[#386c00] mb-4 font-[family-name:var(--font-kantumruy)]">
                    {bowl.price}
                  </p>
                  <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400 font-[family-name:var(--font-kantumruy)]">
                    {bowl.description} {/* This would ideally be {t.products[bowl.id]?.description} or similar */}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    {/* Shop Now Button */}
                    <Link href={bowl.link} target="_blank">
                      <button className="inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 bg-[#386c00] hover:bg-[#2d5400] rounded-full shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)]">
                        <BsCartPlus size={20} className="mr-2" />
                        {/* Button text could also be translated */}
                        {t.MatchaBowlListSection.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MatchaBowlListSection;