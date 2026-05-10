"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define the shape of the context data
type LanguageContextType = {
  language: 'en' | 'km';
  setLanguage: (language: 'en' | 'km') => void;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'km'>('en'); // Default to English

  // On initial load, check for a saved language in localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'km' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Function to update language state and save to localStorage
  const handleSetLanguage = (lang: 'en' | 'km') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Create a custom hook to easily use the context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}