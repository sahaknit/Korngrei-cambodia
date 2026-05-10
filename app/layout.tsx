


// "use client"
// import "../styles/globals.css"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"
// // In your layout.tsx or _app.js
// import { Kanit, Inter } from 'next/font/google';
// import localFont from 'next/font/local';
// import { ThemeProvider } from "next-themes"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       <head />
//       <body className="dark:bg-stone-900">
//         <ThemeProvider enableSystem={true} attribute="class">
//           <Navbar />
//           {children}
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

// "use client"
// import "../styles/globals.css"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"
// import { ThemeProvider } from "next-themes"
// import { LanguageProvider } from "@/components/context/LanguageContext"
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head />
//       <body className="dark:bg-stone-900">
//         <LanguageProvider> {/* <-- WRAP your providers */}
//           <ThemeProvider enableSystem={true} attribute="class">
//             <Navbar />
//             {children}
//             <Footer />
//           </ThemeProvider>
//         </LanguageProvider> {/* <-- END WRAP */}
//       </body>
//     </html>
//   )
// }

// --- 1. IMPORT Poppins along with Kantumruy_Pro ---
import { Poppins, Kantumruy_Pro } from 'next/font/google';
import Providers from '@/components/Providers';
import "../styles/globals.css";

// --- 2. CONFIGURE the new Poppins font ---
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // Regular and bold weights
  variable: '--font-poppins',
});

// --- 3. CONFIGURE Kantumruy Pro ---
const kantumruy = Kantumruy_Pro({
  subsets: ['latin', 'khmer'],
  variable: '--font-kantumruy',
});

// --- 4. SITE METADATA ---
export const metadata = {
  title: 'Korng Rei Matcha - Premium Matcha Bowls',
  description: 'Discover handcrafted matcha bowls and ceremonial sets for the perfect tea experience.',
};

// --- 5. ROOT LAYOUT ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${kantumruy.variable} dark:bg-stone-900 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
