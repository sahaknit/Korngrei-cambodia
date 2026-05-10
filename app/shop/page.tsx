"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";
import { BsCartPlus, BsSearch, BsTelegram } from "react-icons/bs";

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = "8783022884:AAG3FhqvlHo5QHWtaRBVbVF4MPf62ogeryQ";
const TELEGRAM_CHAT_ID = "-5093434782";

// --- 1. Define ProductItem type with optional translated fields ---
interface ProductItem {
  id: number;
  // --- Default (English) fields ---
  name: string;
  description: string;
  alt: string;
  // --- Optional Khmer translated fields ---
  name_km?: string;
  description_km?: string;
  alt_km?: string;
  // --- Other fields ---
  price: string;
  imageThumbnail: string; // Use 'imageThumbnail' for grid items
  link: string;
  category?: string; // Optional category
}

// --- 2. Matcha Set Products Data - Include translations directly ---
const matchaSets: ProductItem[] = [
  {
    id: 1,
    name: "KBACH KHMER Ceramic Bowl",
    name_km: "ឈុតចានម៉ាតស៊ីខេមរកែន", // Khmer translation
    description: "A timeless matcha bowl set crafted from high-quality ceramic.",
    description_km: "ឈុតម៉ាតស៊ីដែលបានបង្កើតដោយដៃដែលមានគុណភាពខ្ពស់។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1361.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Classic Ceramic Matcha Bowl Set Thumbnail", // Default alt text
    alt_km: "ឈុតចានម៉ាតស៊ីបុរាណ", // Khmer alt text
    link: "/shop/classic-matcha-bowl", // Example link
    category: "ceramic"
  },
  {
    id: 2,
    name: "Whisk Holder",
    name_km: "កន្លែងដាក់ប៊ីត", // Khmer translation
    description: "An elegant combination of natural bamboo tools and a stone bowl.",
    description_km: "ការរួមបញ្ចូលគ្នានៃឧបករណ៍ប៊ីតធម្មជាតិ និងចានថ្ម។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1362.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Bamboo and Stone Matcha Ritual Set Thumbnail", // Default alt text
    alt_km: "សំណុំពិធីប៊ីត និងចាន", // Khmer alt text
    link: "/shop/modern-zen-matcha-bowl", // Example link
    category: "bamboo"
  },
  {
    id: 3,
    name: "Modern Minimalist Set",
    name_km: "សំណុំម៉ូឌើនមីនីម៉ាល", // Khmer translation
    description: "A sleek, contemporary take on the traditional matcha experience.",
    description_km: "ការបកប្រែទំនើបនៃបទពិសោធន៍ម៉ាតស៊ីបុរាណ។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1360.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Modern Minimalist Matcha Set Thumbnail", // Default alt text
    alt_km: "សំណុំម៉ូឌើនមីនីម៉ាលម៉ាតស៊ី", // Khmer alt text
    link: "/shop/premium-ceremonial-set", // Example link
    category: "modern"
  },
  {
    id: 4,
    name: "Premium Handcrafted Bowl",
    name_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ", // Khmer translation
    description: "A unique, individually crafted bowl by a master artisan.",
    description_km: "ចានដែលមានរចនាប័ទ្មពិសេសដោយសិល្បៈករ។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1363.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Premium Handcrafted Matcha Bowl Thumbnail", // Default alt text
    alt_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ", // Khmer alt text
    link: "/shop/travel-matcha-kit", // Example link
    category: "premium"
  },
  {
    id: 5,
    name: "Travel-Friendly Matcha Kit",
    name_km: "កញ្ចប់ដែលអាចយកទៅដំណើរ", // Khmer translation
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបានសម្រាប់ការរីករាយជាមួយនឹងម៉ាតស៊ី។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1364.PNG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Travel-Friendly Matcha Kit Thumbnail", // Default alt text
    alt_km: "កញ្ចប់ដែលអាចយកទៅដំណើរ", // Khmer alt text
    link: "/shop/travel-matcha-kit-2", // Example link
    category: "travel"
  },
  {
    id: 6,
    name: "Yet Another Kit",
    name_km: "កញ្ចប់ម៉ាតស៊ីផ្សេងទៀត", // Khmer translation
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបានសម្រាប់ការរីករាយជាមួយនឹងម៉ាតស៊ី។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1365.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Yet Another Kit Thumbnail", // Default alt text
    alt_km: "កញ្ចប់ម៉ាតស៊ីផ្សេងទៀត", // Khmer alt text
    link: "/shop/travel-matcha-kit-3", // Example link
    category: "travel"
  },
   {
    id: 7,
    name: "Yet Another Kit",
    name_km: "កញ្ចប់ម៉ាតស៊ីផ្សេងទៀត", // Khmer translation
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបានសម្រាប់ការរីករាយជាមួយនឹងម៉ាតស៊ី។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/rumdoul-set-kr.png", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Yet Another Kit Thumbnail", // Default alt text
    alt_km: "កញ្ចប់ម៉ាតស៊ីផ្សេងទៀត", // Khmer alt text
    link: "/shop/travel-matcha-kit-3", // Example link
    category: "travel"
  },
    {
    id: 8,
    name: "KBACH KHMER Matcha Bowl",
    name_km: "ចានម៉ាតស៊ីខេមរកែន",
    description: "A handcrafted matcha bowl set featuring a traditional design. Perfect for daily tea rituals with its smooth finish and elegant curves.",
    description_km: "ឈុតចានម៉ាតស៊ីដែលបានបង្កើតដោយដៃដែលមានរចនាប័ទ្មបុរាណ។ ល្អឥតខ្ចោះសម្រាប់វិធីសាស្ត្រតែប្រចាំថ្ងៃ។",
    price: "$18.00",
    imageThumbnail: "/rum-bowl-kr.png",
    alt: "Classic Matcha Bowl Set Thumbnail",
    alt_km: "រូបភាពឈុតចានម៉ាតស៊ីបុរាណ",
    link: "/shop/classic-matcha-bowl",
    category: "bowl"
  },

  {
    id: 9,
    name: "Whish Holder Kbach Khmer",
    name_km: "កន្លែងដាក់ប៊ីតខេមរកែន",
    description: "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts.",
    description_km: "ការបកប្រែទំនើបនៃចានម៉ាតស៊ី ដែលរួមបញ្ចូលគ្នានូវបន្ទាត់ស្រួច និងអត្ថបទធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែទំនើប។",
    price: "$6.00",
    imageThumbnail: "/holder-kr.png",
    alt: "Modern Zen Matcha Bowl Thumbnail",
    alt_km: "រូបភាពចានម៉ាតស៊ីទំនើប",
    link: "/shop/modern-zen-matcha-bowl",
    category: "holder"
  },
    {
    id: 10,
    name: "KBACH KHMER Matcha Bowl",
    name_km: "ចានម៉ាតស៊ីខេមរកែន",
    description: "A handcrafted matcha bowl set featuring a traditional design. Perfect for daily tea rituals with its smooth finish and elegant curves.",
    description_km: "ឈុតចានម៉ាតស៊ីដែលបានបង្កើតដោយដៃដែលមានរចនាប័ទ្មបុរាណ។ ល្អឥតខ្ចោះសម្រាប់វិធីសាស្ត្រតែប្រចាំថ្ងៃ។",
    price: "$23.00",
    imageThumbnail: "/set-holder-and-bowl.png",
    alt: "Classic Matcha Bowl Set Thumbnail",
    alt_km: "រូបភាពឈុតចានម៉ាតស៊ីបុរាណ",
    link: "/shop/classic-matcha-bowl",
    category: "bowl"
  },
  {
    id: 11,
    name: "Bamboo Whisk",
    name_km: "ប៊ីតប្រអប់",
    description: "An exclusive ceremonial set, complete with a bamboo whisk, scoop, and premium matcha powder. Elevate your tea experience with this luxurious collection.",
    description_km: "ឈុតពិធីកម្មពិសេស ដែលមានប៊ីតប្រអប់ ដាក់ស្លឹក និងម៉ាតស៊ីដែលមានគុណភាព។ បង្កើនបទពិសោធន៍តែរបស់អ្នក។",
    price: "$5.00",
    imageThumbnail: "/whisk-kr.png",
    alt: "Premium Ceremonial Set Thumbnail",
    alt_km: "រូបភាពឈុតពិធីកម្មដែលមានគុណភាព",
    link: "/shop/premium-ceremonial-set",
    category: "whisk"
  },
  {
    id: 12,
    name: "Bamboo Scoop",
    name_km: "ដាក់ស្លឹកប្រអប់",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបាន ដែលមានចានម៉ាតស៊ីតូច ប៊ីត និងដាក់ស្លឹក។ ល្អសម្រាប់អ្នកស្រឡាញ់តែ។",
    price: "$1.50",
    imageThumbnail: "/scoop-kr.png",
    alt: "Travel-Friendly Matcha Kit Thumbnail",
    alt_km: "រូបភាពកញ្ចប់ដែលអាចយកទៅដំណើរ",
    link: "/shop/travel-matcha-kit",
    category: "scoop"
  },
  {
    id: 13,
    name: "Bamboo Spoon",
    name_km: "ស្លឹកប្រអប់",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបាន ដែលមានចានម៉ាតស៊ីតូច ប៊ីត និងដាក់ស្លឹក។ ល្អសម្រាប់អ្នកស្រឡាញ់តែ។",
    price: "$1.00",
    imageThumbnail: "/spoon-kr.png",
    alt: "Another Travel Kit Thumbnail",
    alt_km: "រូបភាពកញ្ចប់ដែលអាចយកទៅដំណើរមួយទៀត",
    link: "/shop/travel-matcha-kit-2",
    category: "spoon"
  },
  {
    id: 14,
    name: "sifter",
    name_km: "ដាក់ស្លឹក",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបាន ដែលមានចានម៉ាតស៊ីតូច ប៊ីត និងដាក់ស្លឹក។ ល្អសម្រាប់អ្នកស្រឡាញ់តែ។",
    price: "$1.50",
    imageThumbnail: "/sifter-kr.png",
    alt: "Yet Another Kit Thumbnail",
    alt_km: "រូបភាពកញ្ចប់មួយទៀត",
    link: "/shop/travel-matcha-kit-3",
    category: "sifter"
  },
  {
    id: 15,
    name: "Matcha Whisk set",
    name_km: "ឈុតប៊ីតម៉ាតស៊ី",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបាន ដែលមានចានម៉ាតស៊ីតូច ប៊ីត និងដាក់ស្លឹក។ ល្អសម្រាប់អ្នកស្រឡាញ់តែ។",
    price: "$8.00",
    imageThumbnail: "/matcha-whisk-set.png",
    alt: "Matcha Whisk Set Thumbnail",
    alt_km: "រូបភាពឈុតប៊ីតម៉ាតស៊ី",
    link: "/shop/travel-matcha-kit-4",
    category: "whisk"
  },
];

const ShopPage = () => {
  // ✅ ALL HOOKS ARE NOW AT THE TOP LEVEL
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const t = translations[language] || translations['en']; // Fallback to 'en'

  // --- Function to send product to Telegram ---
  const handleSendToTelegram = async (product: ProductItem) => {
    const productName = language === 'km' && product.name_km ? product.name_km : product.name;
    const productDescription = language === 'km' && product.description_km ? product.description_km : product.description;
    
    const message = `🛍️ *New Product Share*\n\n*${productName}*\n\n${productDescription}\n\n💰 Price: ${product.price}\n\n🔗 Link: ${window.location.origin}${product.link}`;
    
    try {
      // First, send the photo with caption
      const formData = new FormData();
      formData.append('chat_id', TELEGRAM_CHAT_ID);
      
      // Get the image from the public path
      const imageUrl = `${window.location.origin}${product.imageThumbnail}`;
      formData.append('photo', imageUrl);
      formData.append('caption', message);
      formData.append('parse_mode', 'Markdown');
      
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (result.ok) {
        alert('✅ Product sent to Telegram group successfully!');
      } else {
        alert('❌ Failed to send to Telegram: ' + (result.description || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      alert('❌ Error sending to Telegram. Please try again.');
    }
  };

  // --- Get Unique Categories for Filter Buttons ---
  const categories = useMemo(() => {
    const cats = matchaSets
      .map(product => product.category)
      .filter((cat, index, arr) => cat && arr.indexOf(cat) === index) as string[];
    return cats;
  }, []);

  // --- Filter Products Based on Search and Category ---
  const filteredProducts = useMemo(() => {
    return matchaSets.filter(product => {
      const productName = language === 'km' && product.name_km ? product.name_km : product.name;
      const productDescription = language === 'km' && product.description_km ? product.description_km : product.description;

      const matchesSearch = productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            productDescription.toLowerCase().includes(searchTerm.toLowerCase());
                            
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, language]); // Added `language` to dependency array

  // ✅ DEFENSIVE CHECKS ARE NOW *AFTER* ALL HOOKS
  if (!t) {
    console.error(`[ShopPage] Translations object not found for language '${language}' or fallback 'en'.`);
    return <div className="text-red-500 p-4">Error loading translations.</div>;
  }

  if (!t.ShopPage) {
    console.error(`[ShopPage] ShopPage translations not found for language '${language}'. Check translations.ts structure.`);
    return <div className="text-red-500 p-4">Error loading section translations.</div>;
  }

  // --- Handle Category Filter Click ---
  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-12 lg:px-20 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* --- Section Header --- */}
        <div className="text-center mb-12">
          <h1 className="my-4 font-bold text-4xl text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
            {t.ShopPage.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-[family-name:var(--font-kantumruy)]">
            {t.ShopPage.subtitle || "Discover our handcrafted selection of matcha bowls, sets, and accessories."}
          </p>
          <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
        </div>

        {/* --- Search and Filter Section --- */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t.ShopPage.searchPlaceholder || "Search products..."}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#386c00] focus:border-[#386c00] dark:bg-gray-800 dark:text-white font-[family-name:var(--font-kantumruy)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors font-[family-name:var(--font-kantumruy)] ${
                selectedCategory === null
                  ? "bg-[#386c00] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {t.ShopPage.allCategories || "All"}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize font-[family-name:var(--font-kantumruy)] ${
                  selectedCategory === category
                    ? "bg-[#386c00] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* --- Product Grid --- */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 font-[family-name:var(--font-kantumruy)]">
              {t.ShopPage.noProductsMessage || "No products found. Try a different search or filter."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const productName = language === 'km' && product.name_km ? product.name_km : product.name;
              const productDescription = language === 'km' && product.description_km ? product.description_km : product.description;
              const productAlt = language === 'km' && product.alt_km ? product.alt_km : product.alt;

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-64 w-full">
                    <Link href={product.link} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src={product.imageThumbnail}
                          alt={productAlt}
                          fill
                          className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
                        {productName}
                      </h2>
                      <p className="text-xl font-semibold text-[#386c00] dark:text-yellow-400 mb-3 font-[family-name:var(--font-kantumruy)]">
                        {product.price}
                      </p>
                      <p className="text-base leading-6 mb-4 text-gray-700 dark:text-gray-300 font-[family-name:var(--font-kantumruy)]">
                        {productDescription}
                      </p>
                    </div>
                    {/* Telegram Share Button */}
                    <button
                      onClick={() => handleSendToTelegram(product)}
                      className="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-white transition-all duration-300 bg-[#0088cc] hover:bg-[#0077b5] rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)] mb-3"
                    >
                      <BsTelegram size={18} className="mr-2" />
                      Send to Telegram
                    </button>
                    <Link href={product.link} passHref legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-white transition-all duration-300 bg-[#386c00] hover:bg-[#2d5400] rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)]"
                      >
                        <BsCartPlus size={18} className="mr-2" />
                        {t.ShopPage.buttonText || "Shop Now"}
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default ShopPage;