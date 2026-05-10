// lib/translations.ts

// Define the structure for a single product translation
interface ProductTranslation {
  name: string;
  description: string;
  altLarge: string;
  altThumbnail: string;
}

// Define the structure for the entire translation object
interface LanguageTranslations {
  CollectionSection: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  products: {
    [id: number]: ProductTranslation;
  };
}

// Export the translations
export const translations: { [key: string]: LanguageTranslations } = {
  // --- ENGLISH TRANSLATIONS ---
  en: {
    CollectionSection: {
      title: "Our Collection",
      subtitle: "Discover our handcrafted selection of matcha bowls, sets, and accessories.",
      buttonText: "Shop Now",
    },
    products: {
      1: {
        name: "Sakura Ceramic Bowl",
        description: "A timeless matcha bowl set crafted from high-quality ceramic.",
        altLarge: "Featured Matcha Set Collection",
        altThumbnail: "Classic Ceramic Matcha Bowl Set Thumbnail",
      },
      2: {
        name: "Whisk Holder",
        description: "An elegant combination of natural bamboo tools and a stone bowl.",
        altLarge: "Making Matcha Latte at Home",
        altThumbnail: "Modern Zen Matcha Bowl Thumbnail",
      },
      3: {
        name: "Modern Minimalist Set",
        description: "A sleek, contemporary take on the traditional matcha experience.",
        altLarge: "Sustainable Matcha Farming",
        altThumbnail: "Modern Minimalist Matcha Set Thumbnail",
      },
      4: {
        name: "Premium Handcrafted Bowl",
        description: "A unique, individually crafted bowl by a master artisan.",
        altLarge: "Health Benefits of Matcha",
        altThumbnail: "Premium Handcrafted Matcha Bowl Thumbnail",
      },
    },
  },

  // --- KHMER TRANSLATIONS ---
  km: {
    CollectionSection: {
      title: "ម៉ូតថ្មីរបស់យើង",
      subtitle: "ស្វែងយល់ពីចាន ឈុត និងគ្រឿងបន្ថែមដែលធ្វើដោយដៃរបស់យើង។",
      buttonText: "ទិញឥឡូវនេះ",
    },
    products: {
      1: {
        name: "ចានសេរ៉ាមិចក្បាច់ខ្មែរ",
        description: "ឈុតចានធ្វើពីសេរ៉ាមិចគុណភាពខ្ពស់ ប្រើបានយូរ។",
        altLarge: "រូបភាពឈុតចានម៉ាត់ឆា",
        altThumbnail: "រូបតូចចានសេរ៉ាមិច",
      },
      2: {
        name: "ជើងទម្រវាយម្សៅ",
        description: "ការរួមបញ្ចូលគ្នាយ៉ាងប្រណីតនៃឧបករណ៍ឫស្សីធម្មជាតិ និងចានថ្ម។",
        altLarge: "ការឆុងម៉ាត់ឆាឡាតតេនៅផ្ទះ",
        altThumbnail: "រូបតូចចានម៉ាត់ឆាបែប Zen",
      },
      3: {
        name: "ឈុតបែបសម័យទំនើប",
        description: "បទពិសោធន៍ថ្មី ទំនើប សម្រាប់ការឆុងម៉ាត់ឆាបែបបុរាណ។",
        altLarge: "កសិកម្មម៉ាត់ឆាប្រកបដោយនិរន្តរភាព",
        altThumbnail: "រូបតូចឈុតម៉ាត់ឆាសម័យទំនើប",
      },
      4: {
        name: "ចានធ្វើដោយដៃពិសេស",
        description: "ចានពិសេស ធ្វើដោយដៃផ្ទាល់ដោយសិប្បករជំនាញ។",
        altLarge: "អត្ថប្រយោជន៍សុខភាពរបស់ម៉ាត់ឆា",
        altThumbnail: "រូបតូចចានម៉ាត់ឆាធ្វើដោយដៃ",
      },
    },
  },
};