import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#386c00]/30">
                <Image
                  src="/01_KORNG_REI_BRAND_IDENTITY_PREMARY-removebg-preview.png"
                  alt="Korng Rei"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Korng Rei Matcha</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">
              Handcrafted matcha bowls inspired by Khmer heritage. Made with love in Cambodia.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/profile.php?id=61578078675219", Icon: FaFacebook, label: "Facebook" },
                { href: "https://www.tiktok.com/@korngrei_kh", Icon: FaTiktok, label: "TikTok" },
                { href: "https://instagram.com/korngrei", Icon: FaInstagram, label: "Instagram" },
                { href: "https://x.com/KorngRei", Icon: FaXTwitter, label: "Twitter/X" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-stone-500 hover:text-[#386c00] hover:bg-[#386c00]/10 dark:hover:bg-[#386c00]/20 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/shop" },
                { label: "Learn", href: "/learn" },
                { label: "Our Story", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-500 hover:text-[#386c00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                "Ceramic Bowls",
                "Matcha Whisks",
                "Bamboo Sets",
                "Gift Sets",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/shop"
                    className="text-sm text-stone-500 hover:text-[#386c00] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-stone-500">
              <li>📍 Phnom Penh, Cambodia</li>
              <li>
                <a href="mailto:korngrei@gmail.com" className="hover:text-[#386c00] transition-colors">
                  ✉️ korngrei@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+855123456789" className="hover:text-[#386c00] transition-colors">
                  📞 +855 12 345 6789
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400">
            © {currentYear} Korng Rei Matcha. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            Crafted with 🌿 in Cambodia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
