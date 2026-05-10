"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "components/context/LanguageContext";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

// --- Define Blog Post Type ---
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullArticle: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  category: string;
}

// --- Sample Blog Posts Data ---
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ancient Art of the Japanese Tea Ceremony",
    excerpt:
      "Explore the rich history and profound philosophy behind the traditional Japanese tea ceremony, Chanoyu.",
    fullArticle:
      "Explore the rich history and profound philosophy behind the traditional Japanese tea ceremony, Chanoyu. Delve into the intricate rituals and the importance of mindfulness...",
    date: "March 15, 2024",
    author: "Sahaknit Vong",
    image: "/matcha_whick_set_poster.jpg",
    imageAlt: "Japanese Tea Ceremony Chanoyu",
    category: "History",
  },
  {
    id: 2,
    title: "Mastering the Perfect Matcha Latte at Home",
    excerpt:
      "Learn the step-by-step process to create a creamy, delicious matcha latte using traditional tools.",
    fullArticle:
      "Learn the step-by-step process to create a creamy, delicious matcha latte using traditional tools. Start by heating your water...",
    date: "April 2, 2024",
    author: "Sahaknit Vong",
    image:
      "/Blue and White Modern Lets Talk Podcast Announcement Instagram Post (1).png",
    imageAlt: "Making Matcha Latte at Home",
    category: "Recipes",
  },
  {
    id: 3,
    title: "Sustainable Practices in Matcha Production",
    excerpt:
      "Discover how our sourcing and production methods contribute to environmental sustainability.",
    fullArticle:
      "Discover how our sourcing and production methods contribute to environmental sustainability and support local communities...",
    date: "May 10, 2024",
    author: "Sahaknit Vong",
    image:
      "/Green Retro Collage Product Announcement Instagram Post (2).png",
    imageAlt: "Sustainable Matcha Farming",
    category: "Sustainability",
  },
  {
    id: 4,
    title: "The Health Benefits of Drinking Matcha Daily",
    excerpt:
      "Uncover the science-backed health advantages of incorporating matcha into your daily routine.",
    fullArticle:
      "Matcha is packed with antioxidants and amino acids that promote calm energy, better focus, and overall health...",
    date: "June 1, 2024",
    author: "Sahaknit Vong",
    image:
      "/Beige and Green Illustrative Simple We Are Closed Announcement Instagram Story (5).png",
    imageAlt: "Health Benefits of Matcha",
    category: "Health",
  },
];

// --- Define English and Khmer Translations ---
const translations = {
  en: {
    BlogPage: {
      title: "Our Matcha Blog",
      subtitle:
        "Explore the world of matcha — from its cultural roots to modern uses.",
      featuredPostsTitle: "Featured Posts",
      allPostsTitle: "All Posts",
      expandButtonText: "Read Full Article",
      collapseButtonText: "Collapse",
      noPostsMessage: "No blog posts found.",
    },
    products: {
      1: {
        title: "The Ancient Art of the Japanese Tea Ceremony",
        excerpt: "",
        fullArticle: "",
        imageAlt: "Japanese Tea Ceremony",
      },
      2: {
        title: "Mastering the Perfect Matcha Latte at Home",
        excerpt: "",
        fullArticle: "",
        imageAlt: "Matcha Latte",
      },
      3: {
        title: "Sustainable Practices in Matcha Production",
        excerpt: "",
        fullArticle: "",
        imageAlt: "Sustainable Matcha",
      },
      4: {
        title: "The Health Benefits of Drinking Matcha Daily",
        excerpt: "",
        fullArticle: "",
        imageAlt: "Health Benefits",
      },
    } as Record<string, { title: string; excerpt: string; fullArticle: string; imageAlt: string }>,
  },

  kh: {
    BlogPage: {
      title: "ប្លក់ម៉ាឆាខ្មែរ",
      subtitle:
        "ស្វែងយល់ពីពិភពម៉ាឆា ពីប្រវត្តិសាស្ត្ររហូតដល់ការប្រើប្រាស់សម័យទំនើប។",
      featuredPostsTitle: "អត្ថបទពិសេស",
      allPostsTitle: "អត្ថបទទាំងអស់",
      expandButtonText: "អានអត្ថបទពេញ",
      collapseButtonText: "បិទអត្ថបទ",
      noPostsMessage: "មិនមានអត្ថបទទេ។",
    },
    products: {
      1: {
        title: "សិល្បៈចាស់នៃពិធីតែជប៉ុន",
        excerpt: "",
        fullArticle: "",
        imageAlt: "ពិធីតែជប៉ុន",
      },
      2: {
        title: "វិធីធ្វើម៉ាឆាឡាតេឲ្យល្អនៅផ្ទះ",
        excerpt: "",
        fullArticle: "",
        imageAlt: "ម៉ាឆាឡាតេ",
      },
      3: {
        title:
          "ការអនុវត្តន៍របស់យើងក្នុងការផលិតម៉ាឆាដោយប្រើវិធីប្រកបដោយចីរភាព",
        excerpt: "",
        fullArticle: "",
        imageAlt: "ម៉ាឆាចីរភាព",
      },
      4: {
        title: "អត្ថប្រយោជន៍នៃការផឹកម៉ាឆារៀងរាល់ថ្ងៃ",
        excerpt: "",
        fullArticle: "",
        imageAlt: "អត្ថប្រយោជន៍ម៉ាឆា",
      },
    } as Record<string, { title: string; excerpt: string; fullArticle: string; imageAlt: string }>,
  },
};

const BlogPage = () => {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language as "en" | "kh"] || translations.en;

  const toggleExpand = (postId: number) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* --- Hero Section --- */}
        <div className="text-center mb-16">
          <h1 className="my-4 font-bold text-4xl text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
            {t.BlogPage.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-[family-name:var(--font-kantumruy)]">
            {t.BlogPage.subtitle}
          </p>
          <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
        </div>

        {/* --- Featured Posts --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#386c00] dark:text-white mb-8 text-center font-[family-name:var(--font-kantumruy)]">
            {t.BlogPage.featuredPostsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 4).map((post) => {
              // ✅ Type-safe indexing — no more TS errors
              const translatedPost =
                t.products[String(post.id)] ||
                ({} as { title?: string; excerpt?: string; fullArticle?: string; imageAlt?: string });

              return (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative w-full" style={{ paddingTop: "125%" }}>
                    <Image
                      src={post.image}
                      alt={translatedPost.imageAlt || post.imageAlt}
                      className="object-contain w-full h-full absolute inset-0"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#386c00] bg-[#e3edc9] rounded-full mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2 text-[#386c00] dark:text-white">
                        {translatedPost.title || post.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        By {post.author} • {post.date}
                      </p>

                      {expandedPostId === post.id ? (
                        <div>
                          <p className="text-base leading-6 mb-4 text-gray-700 dark:text-gray-300">
                            {translatedPost.fullArticle || post.fullArticle}
                          </p>
                          <button
                            onClick={() => toggleExpand(post.id)}
                            className="inline-flex items-center px-4 py-2 font-bold text-[#386c00] bg-gray-200 rounded-lg"
                          >
                            <BsChevronUp size={18} className="mr-2" />
                            {t.BlogPage.collapseButtonText}
                          </button>
                        </div>
                      ) : (
                        <div>
                          <p className="text-base leading-6 mb-4 text-gray-700 dark:text-gray-300">
                            {translatedPost.excerpt || post.excerpt}
                          </p>
                          <button
                            onClick={() => toggleExpand(post.id)}
                            className="inline-flex items-center px-4 py-2 font-bold text-white bg-[#386c00] rounded-lg"
                          >
                            <BsChevronDown size={18} className="mr-2" />
                            {t.BlogPage.expandButtonText}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
