// lib/types.ts

// Define the structure for a single product's translation
export interface ProductTranslation {
  name: string;
  description: string;
  features: string[]; // Array of features
  alt: string;        // Alt text for the image
  // Add other product-specific translatable properties here if needed
}

// Define the structure for the entire products object
// {[productId: number]: ProductTranslation} tells TS keys are numbers, values are ProductTranslation objects
export interface ProductsTranslations {
  [productId: number]: ProductTranslation;
}

// Optional: Define structure for section-specific translations
export interface SectionTranslation {
  title: string;
  // subheading?: string; // Make optional if not always present
  // heroImageAlt?: string;
  buttonText: string; // Add buttonText
  // Add other common section keys
}