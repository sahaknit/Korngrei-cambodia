// import { ProductsTranslations, SectionTranslation } from '@/lib/types'; 
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

// You can optionally define the whole language structure for even stricter typing
// interface LanguageTranslations {
//   MatchaBowlListSection: SectionTranslation;
//   // ... other sections
//   products: ProductsTranslations; // Reference the ProductsTranslations interface
// }
// export type Translations = {
//   [K in keyof typeof translations]: LanguageTranslations; // Map over 'en', 'km' etc.
// };


export const translations = {
  en: {
    Navbar: {
      home: "Home",
      shop: "Shop",
      learn: "Learn",
      ourStory: "Our Story",
      contactUs: "Contact Us",
    },
    HeroSection: {
      title: "Discover the Art of Matcha",
      subtitle: "Handcrafted matcha sets for mindful moments. Each bowl is made with care, inspired by tradition, and designed for modern rituals.",
      buttonText: "Contact us"
    },
      AboutSection: {
      title: "About Us",
      storyTitle: "Our Story: A Tradition of Quality",
      storyParagraph1: "Our philosophy is rooted in the rich heritage of Kampong Chhnang province, a land renowned for its master potters. Like a finely crafted piece of pottery, each of our products is shaped with skill, passion, and an unwavering commitment to quality. We pride ourselves on using only the finest ingredients, sourced directly from nature and infused with vibrant local elements like fresh green lime.",
      storyParagraph2: "Inspired by Tradition, Crafted for Today",
      storyParagraph3: "Noticing the local appreciation for Japanese Matcha, we were inspired to innovate. We set out to create a uniquely Cambodian product, starting with pure, locally-sourced green tea and meticulously blending it with the best ingredients our country has to offer.",
      missionStatement: "Our mission is to create high-quality, hygienic products you can trust for your well-being."
    },
       MatchaBowlListSectionitem: { // Add this new section
      title: "Our Matcha Bowls",
      buttonText: "Shop Now"
    },
     products: {
      1: {
        name: "Classic Matcha Bowl Set",
        description: "A handcrafted matcha bowl set featuring a traditional design. Perfect for daily tea rituals with its smooth finish and elegant curves."
      },
      2: {
        name: "Modern Zen Matcha Bowl",
        description: "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts."
      },
      3: {
        name: "Premium Ceremonial Set",
        description: "An exclusive ceremonial set, complete with a bamboo whisk, scoop, and premium matcha powder. Elevate your tea experience with this luxurious collection."
      },
      4: {
        name: "Travel-Friendly Matcha Kit",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
      5: {
        name: "Another Travel Kit",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
      6: {
        name: "Yet Another Kit",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
    },
    MatchaBowlListSection: { // Add this new section
      title: "Our Matcha Set",
      buttonText: "Shop Now"
    },
     productsitem: {
      1: {
        name: "KBACH KHMER Matcha Bowl",
        description: "A handcrafted matcha bowl set featuring a traditional design. Perfect for daily tea rituals with its smooth finish and elegant curves."
      },
      2: {
        name: "Whish Holder Kbach Khmer",
        description: "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts."
      },
      3: {
        name: "Bamboo Whisk",
        description: "An exclusive ceremonial set, complete with a bamboo whisk, scoop, and premium matcha powder. Elevate your tea experience with this luxurious collection."
      },
      4: {
        name: "Bamboo Scoop",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
      5: {
        name: "Bamboo Spoon",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
      6: {
        name: "Sifter",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
      7: {
        name: "Matcha Whisk set",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
    },
   
    

    CertificatesSection: {
    title: "Certificates",
    seeMoreButtonText: "See More"
  },
  certificates: {
    1: {
      name: "Figma for UX Design",
      organization: "Coursera",
      date: "Mar 2024",
      description: "Completed an advanced UI/UX design course focusing on creating intuitive and user-friendly interfaces."
      // alt: "Figma for UX Design Certificate Thumbnail" // Optional
    },
    2: {
      name: "Get Started with Figma",
      organization: "Coursera",
      date: "2024",
      description: "Mastered HTML, CSS, JavaScript, and modern frameworks like React to build dynamic web applications."
    },
    // ... Add translations for IDs 3-9
  },
  ShopPage: {
    title: "Our Matcha Collection",
    subtitle: "Discover our handcrafted selection of matcha bowls, sets, and accessories.",
    searchPlaceholder: "Search products...",
    buttonText: "Shop Now",
    allCategories: "All",
    noProductsMessage: "No products found. Try a different search or filter."
  },
  BlogPage: {
      title: "Our Blog",
      subtitle: "Discover stories, guides, and insights about matcha culture and our craft.",
      featuredPostsTitle: "Featured Posts",
      allPostsTitle: "All Posts",
      readMoreButtonText: "Read More",
      buttonText: "Read Article", // Or whatever you use for the button
      noPostsMessage: "No blog posts found. Stay tuned for updates!",
      // Add other keys if your component uses them
    },
    CollectionSection: {
      title: "Our New Collection", // Example translation
      subtitle: "Discover our latest handcrafted matcha bowls and sets.", // Example translation
      heroImageAlt: "Featured New Matcha Set Collection", // Example translation
      buttonText: "Shop Now", // Example translation
      // Add all other keys used in your CollectionSection component here
      // e.g., collectionOneTitle: "Classic Matchabowls",
    },
    Newcollection: {
      title: "Our New Collection", // Example translation
      subtitle: "Discover our latest handcrafted matcha bowls and sets.", // Example translation
      heroImageAlt: "Featured New Matcha Set Collection", // Example translation
      buttonText: "Shop Now", // Example translation
      // Add other keys your Newcollection component might use
    },
  
      
    
  },
  km: {
    Navbar: {
      home: "ទំព័រដើម",
      shop: "ទំនិញ",
      learn: "សិក្សា",
      ourStory: "រឿងរបស់យើង",
      contactUs: "ទំនាក់ទំនង",
    },
    HeroSection: {
      title: "សូមស្វាគមន៍មកកាន់ កង្រីម៉ាតឆារបស់យើង",
      subtitle: "ឈុតម៉ាឆាធ្វើដោយដៃ សម្រាប់ពេលវេលាដ៏ល្អ។ ចាននីមួយៗផលិតដោយយកចិត្តទុកដាក់ តាមបែបប្រពៃណី និងរចនាឡើងសម្រាប់សម័យទំនើប។",
      buttonText: "ទំនាក់ទំនងយើង"
    },
       AboutSection: {
      title: "អំពីយើង",
      storyTitle: "របស់យើង: បុព្វបទនៃគុណភាព",
      storyParagraph1: "ទស្សនវិស័យរបស់យើងមានឫសគល់នៅក្នុងប្រវត្តិសាស្ត្រសម្បូររបស់ខេត្តកំពង់ឆ្នាំង ដែលជាផ្ទះកំណើតនៃចំណេះដឹងនៃការបំពង់ដែលល្បីល្បាញ។ ដូចជាធាតុដីដែលបានបំពង់ដោយចំណេះដឹង ផលិតផលនីមួយៗរបស់យើងត្រូវបានបង្កើតដោយប្រើជំនាញ ការស្រឡាញ់ និងការប្តេជ្ញាចិត្តដែលមិនធ្លាក់ចុះ។ យើងខ្ញុំមានភាពសប្បាយរិះរកការប្រើប្រាស់សម្ភារៈដែលមានគុណភាពខ្ពស់បំផុត ដែលបានទាញយកដោយផ្ទាល់ពីធម្មជាតិ និងបានបញ្ចូលនូវធាតុក្នុងស្រុកដែលរស់រវើកដូចជាខ្ទឹមបៃតងស្រស់ៗ។",
      storyParagraph2: "បានទាញយកចិត្តដោយប្រពៃណី បំពង់សម្រាប់ថ្ងៃនេះ",
      storyParagraph3: "ដោយកត់សម្គាល់ពីភាពស្រឡាញ់ក្នុងការទទួលយកម៉ាតស៊ីជប៉ុន យើងត្រូវបានលើកទឹកចិត្តឱ្យបង្កើតនវាកម្ម។ យើងចាប់ផ្តើមដោយប្រើតែសំបូរបៃតងដែលបានទាញយកដោយផ្ទាល់ពីកន្លែង ហើយបញ្ចូលគ្នាដោយប្រុងប្រយ័ត្នជាមួយនឹងសម្ភារៈល្អបំផុតដែលប្រទេសរបស់យើងមាន។",
      missionStatement: "បេសកកម្មរបស់យើងគឺបង្កើតផលិតផលដែលមានគុណភាពខ្ពស់ ដែលអាចទុកចិត្តបានសម្រាប់សុខុមាលភាពរបស់អ្នក។"
    },
     MatchaBowlListSection: { // Add this new section
      title: "ចានម៉ាតឆារបស់យើង",
      buttonText: "ទិញឥឡូវនេះ"
    },
    products: {
      1: {
        name: "ឈុតចានម៉ាតស៊ីបុរាណ",
        description: "ឈុតចានម៉ាតស៊ីដែលបានផលិតដោយដៃដែលមានរចនាប័ទ្មបុរាណ។ ល្អឥតខ្ចោះសម្រាប់វិធីសាស្ត្របុរាណនៃការផឹកតែជាមួយនឹងផ្ទៃរលោង និងបន្ទាត់ស្តាយ។"
      },
      2: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      3: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      4: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      5: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      6: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      
    },
     MatchaBowlListSectionitem: { // Add this new section
      title: "ឈុតផលិតផលតែម៉ាត់ឆារបស់យើង",
      buttonText: "ទិញឥឡូវនេះ"
    },
    productsitem: {
  "1": {
    "name": "ចានឆុងតែម៉ាត់ឆាក្បាច់ខ្មែរ",
    "description": "ឈុតចានឆុងតែម៉ាត់ឆាធ្វើដោយដៃ ដែលមានការរចនាតាមក្បាច់បុរាណ។ ល្អឥតខ្ចោះសម្រាប់ពិធីឆុងតែប្រចាំថ្ងៃ ជាមួយនឹងផ្ទៃរលោងស្អាត និងរាងកោងដ៏ប្រណីត។"
  },
  "2": {
    "name": "ជើងទ្រឧបករណ៍កូរតែម៉ាត់ឆាក្បាច់ខ្មែរ",
    "description": "ការរចនាចានឆុងតែម៉ាត់ឆាបែបសម័យទំនើប ដែលជាការរួមបញ្ចូលគ្នារវាងរាងដ៏រលោងស្អាត និងផ្ទៃដែលមានលក្ខណៈបែបធម្មជាតិ។ ស័ក្តិសមបំផុតសម្រាប់អ្នកនិយមចូលចិត្តតែបែបសម័យថ្មី។"
  },
  "3": {
    "name": "ឧបករណ៍កូរតែពីឫស្សី",
    "description": "ឈុតសម្រាប់ពិធីឆុងតែដ៏ពិសេស ដែលរួមមានឧបករណ៍កូរតែពីឫស្សី ស្លាបព្រាដួស និងម្សៅតែម៉ាត់ឆាគុណភាពខ្ពស់។ បង្កើនបទពិសោធន៍នៃការពិសាតែរបស់អ្នក ជាមួយនឹងឈុតដ៏ប្រណីតនេះ។"
  },
  "4": {
    "name": "ស្លាបព្រាដួសតែពីឫស្សី",
    "description": "ឈុតសម្រាប់ធ្វើដំណើរខ្នាតតូច ងាយស្រួលយកតាមខ្លួន ដែលរួមមានចានឆុងតែខ្នាតតូច ឧបករណ៍កូរតែ និងស្លាបព្រាដួស។ ល្អឥតខ្ចោះសម្រាប់អ្នកចូលចិត្តតែដែលឧស្សាហ៍ធ្វើដំណើរ។"
  },
  "5": {
    "name": "ស្លាបព្រាឫស្សី",
    "description": "ឈុតសម្រាប់ធ្វើដំណើរខ្នាតតូច ងាយស្រួលយកតាមខ្លួន ដែលរួមមានចានឆុងតែខ្នាតតូច ឧបករណ៍កូរតែ និងស្លាបព្រាដួស។ ល្អឥតខ្ចោះសម្រាប់អ្នកចូលចិត្តតែដែលឧស្សាហ៍ធ្វើដំណើរ។"
  },
  "6": {
    "name": "ប្រដាប់រែងម្សៅតែ",
    "description": "ឈុតសម្រាប់ធ្វើដំណើរខ្នាតតូច ងាយស្រួលយកតាមខ្លួន ដែលរួមមានចានឆុងតែខ្នាតតូច ឧបករណ៍កូរតែ និងស្លាបព្រាដួស។ ល្អឥតខ្ចោះសម្រាប់អ្នកចូលចិត្តតែដែលឧស្សាហ៍ធ្វើដំណើរ។"
  },
  "7": {
    "name": "ឈុតឧបករណ៍កូរតែម៉ាត់ឆា",
    "description": "ឈុតសម្រាប់ធ្វើដំណើរខ្នាតតូច ងាយស្រួលយកតាមខ្លួន ដែលរួមមានចានឆុងតែខ្នាតតូច ឧបករណ៍កូរតែ និងស្លាបព្រាដួស។ ល្អឥតខ្ចោះសម្រាប់អ្នកចូលចិត្តតែដែលឧស្សាហ៍ធ្វើដំណើរ។"
  }
},

    CertificatesSection: {
      title: "វិញ្ញាបនប័ត្រ", // This one you already have
      seeMoreButtonText: "មើលបន្ថែមទៀត" // This one you already have
    },
    certificates: {
      // ---> ADD KHMER TRANSLATIONS FOR EACH CERTIFICATE ID HERE <---
      1: {
        name: "Figma សម្រាប់ការរចនា UX",
        organization: "Coursera",
        date: "មីនា 2024",
        description: "បានបញ្ចប់វគ្គសិក្សាកម្រិតខ្ពស់នៃការរចនា UI/UX ដោយផ្តោតលើការបង្កើតចំណុចប្រទាក់ដែលងាយស្រួលប្រើប្រាស់ និងជាប់ស្នាក់ស្នូល។"
        // alt: "វិញ្ញាបនប័ត្រ Figma សម្រាប់ការរចនា UX" // Optional, add if used
      },
      2: {
        name: "ចាប់ផ្តើមជាមួយ Figma",
        organization: "Coursera",
        date: "2024",
        description: "បាន dominé HTML, CSS, JavaScript និង Framework ទំនើបដូចជា React ដើម្បីបង្កើតកម្មវិធីវែបឌីណាមិក។"
        // alt: "..." // Optional
      },
      3: {
        name: "ការណែនាំចូលទៅកាន់ការរចនា UI និង UX",
        organization: "Codecademy",
        date: "មីនា 2024",
        description: "បានរៀនពីគំនិតកម្រិតខ្ពស់នៃ React រួមមាន hooks, context API និងវិធីសាស្ត្រគ្រប់គ្រង state។"
        // alt: "..." // Optional
      },
      4: {
        name: "ការណែនាំចូលទៅកាន់បទពិសោធន៍អ្នកប្រើប្រាស់",
        organization: "Coursera",
        date: "មីនា 2024",
        description: "ទទួលបានជំនាញក្នុងការ Fundamentals នៃ JavaScript និងប្រធានបទកំរិតខ្ពស់ដូចជា closures និង async programming។"
        // alt: "..." // Optional
      },
      5: {
        name: "ជំនាញឌីជីថល: បទពិសោធន៍អ្នកប្រើប្រាស់",
        organization: "FutureLearn",
        date: "2024",
        description: "បានរៀនការអភិវឌ្ឍន៍ផ្នែក Server ដោយប្រើ Node.js, Express និង REST APIs។"
        // alt: "..." // Optional
      },
      6: {
        name: "ជំនាញឌីជីថល: បទពិសោធន៍អ្នកប្រើប្រាស់",
        organization: "Le Wagon",
        date: "កុម្ភៈ 2024",
        description: "បានរៀនការអភិវឌ្ឍន៍ផ្នែក Server ដោយប្រើ Node.js, Express និង REST APIs។"
        // alt: "..." // Optional
      },
    },
     ShopPage: {
    title: "កម្រងម៉ាតស៊ីរបស់យើង",
    subtitle: "រុករកកម្រងម៉ាតស៊ីដែលបានបង្កើតដោយដៃរបស់យើង សំណុំ និងគ្រឿងបន្លាស់។",
    searchPlaceholder: "ស្វែងរកផលិតផល...",
    buttonText: "ទិញឥឡូវនេះ",
    allCategories: "ទាំងអស់",
    noProductsMessage: "រកមិនឃើញផលិតផល។ សូមព្យាយាមស្វែងរក ឬតម្រងផ្សេងទៀត។"
  },
  BlogPage: {
      title: "ប្លក់របស់យើង",
      subtitle: "រុករករឿងរ៉ាវ ដំណឹង និងគំនិតអំពីវប្បធម៌ម៉ាតស៊ី និងសិប្បកម្មរបស់យើង។",
      featuredPostsTitle: "ប្រកាសដែលបានលក់",
      allPostsTitle: "ប្រកាសទាំងអស់",
      readMoreButtonText: "អានបន្ថែម",
      buttonText: "អានអត្ថបទ", // Or whatever you use for the button, translated
      noPostsMessage: "រកមិនឃើញប្លក់។ សូមរង់ចាំសម្រាប់បច្ចុប្បន្នភាព!",
      // Add other keys if your component uses them (TRANSLATED)
    },
    CollectionSection: {
      // Add Khmer translations for the same keys here
     title: "កម្រងថ្មីរបស់យើង", // Example Khmer translation
      subtitle: "រុករកចានម៉ាតស៊ី និងសំណុំដែលបានបង្កើតដោយដៃថ្មីៗរបស់យើង។", // Example Khmer translation
      heroImageAlt: "កម្រងម៉ាតស៊ីដែលបានលក់ថ្មីៗ", // Example Khmer translation
      buttonText: "ទិញឥឡូវនេះ", // Example Khmer translation
      // ... other Khmer keys
    },
    Newcollection: {
      title: "កម្រងថ្មីរបស់យើង", // Example Khmer translation
      subtitle: "រុករកចានម៉ាតស៊ី និងសំណុំដែលបានបង្កើតដោយដៃថ្មីៗរបស់យើង។", // Example Khmer translation
      heroImageAlt: "កម្រងម៉ាតស៊ីដែលបានលក់ថ្មីៗ", // Example Khmer translation
      buttonText: "ទិញឥឡូវនេះ", // Example Khmer translation
      // Add other keys your Newcollection component might use (TRANSLATED)
    },
  // ... products section (translated)
  },
        
    // LanguageSwitcher section can be removed
  
};