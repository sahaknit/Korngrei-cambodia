"use client"; // This is now the main entry point for your client-side app

import React from 'react';
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <main>{children}</main> {/* Your actual page content will go here */}
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}