import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  const LINKS = {
    pages: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Learn", href: "/learn" },
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    products: [
      { label: "Ceramic Bowls", href: "/shop" },
      { label: "Matcha Whisks", href: "/shop" },
      { label: "Bamboo Sets", href: "/shop" },
      { label: "Gift Sets", href: "/shop" },
      { label: "Accessories", href: "/shop" },
    ],
    social: [
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61578078675219", Icon: FaFacebook },
      { label: "TikTok", href: "https://www.tiktok.com/@korngrei_kh", Icon: FaTiktok },
      { label: "Instagram", href: "https://instagram.com/korngrei", Icon: FaInstagram },
      { label: "Twitter / X", href: "https://x.com/KorngRei", Icon: FaXTwitter },
    ],
  };

  return (
    <footer className="bg-stone-50 dark:bg-[#0a0a08] border-t border-stone-200 dark:border-stone-800/60">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#386c00]/25 group-hover:border-[#386c00] transition-colors">
                <Image
                  src="/01_KORNG_REI_BRAND_IDENTITY_PREMARY-removebg-preview.png"
                  alt="Korng Rei"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[12px] font-bold tracking-[0.14em] text-[#386c00] uppercase leading-none">Korng Rei</p>
                <p className="text-[9px] tracking-widest text-stone-400 uppercase mt-0.5">Matcha</p>
              </div>
            </Link>
            <p className="text-[13px] text-stone-500 dark:text-stone-500 leading-relaxed mb-6 max-w-[200px]">
              Handcrafted matcha bowls inspired by Khmer heritage. Made with love in Cambodia.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {LINKS.social.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-stone-200 dark:bg-stone-800 text-stone-500 hover:bg-[#386c00] hover:text-white dark:hover:bg-[#386c00] transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h5 className="text-[11px] font-bold tracking-[0.15em] text-stone-400 uppercase mb-5">Pages</h5>
            <ul className="space-y-3">
              {LINKS.pages.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] text-stone-600 dark:text-stone-400 hover:text-[#386c00] dark:hover:text-[#8fba3a] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-[11px] font-bold tracking-[0.15em] text-stone-400 uppercase mb-5">Products</h5>
            <ul className="space-y-3">
              {LINKS.products.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13px] text-stone-600 dark:text-stone-400 hover:text-[#386c00] dark:hover:text-[#8fba3a] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[11px] font-bold tracking-[0.15em] text-stone-400 uppercase mb-5">Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#386c00] mt-0.5">📍</span>
                <span className="text-[13px] text-stone-600 dark:text-stone-400">Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#386c00] mt-0.5">✉️</span>
                <a
                  href="mailto:korngrei@gmail.com"
                  className="text-[13px] text-stone-600 dark:text-stone-400 hover:text-[#386c00] transition-colors break-all"
                >
                  korngrei@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#386c00] mt-0.5">📞</span>
                <a
                  href="tel:+855123456789"
                  className="text-[13px] text-stone-600 dark:text-stone-400 hover:text-[#386c00] transition-colors"
                >
                  +855 12 345 6789
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-200 dark:border-stone-800/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-stone-400">
            &copy; {year} Korng Rei Matcha. All rights reserved.
          </p>
          <p className="text-[12px] text-stone-400">
            Crafted with 🌿 in Cambodia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
