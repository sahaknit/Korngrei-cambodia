// app/contact/page.tsx
"use client"; // Mark as client component for interactivity

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; // For Gmail

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // --- Simulate form submission (replace with your actual logic) ---
      // Example: Send data to your backend API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // const result = await response.json();

      // --- For demonstration, we'll just log and show a success message ---
      console.log("Form Data Submitted:", formData);
      setSubmitMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-12 pt-24" suppressHydrationWarning={true}> {/* Added pt-24 for navbar spacing */}
      <div className="max-w-7xl mx-auto">

        {/* --- Page Header --- */}
        <div className="text-center mb-16">
          <h1 className="my-4 font-bold text-4xl text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-[family-name:var(--font-kantumruy)]">
            We would love to hear from you! Reach out to us via social media, phone, email, or use the form below.
          </p>
          <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
        </div>

        {/* --- Contact Methods Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* --- Social Media --- */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61578078675219" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF size={24} className="text-[#386c00] dark:text-[#e3edc9] hover:text-[#2d5400] dark:hover:text-[#c2d6a4] transition-colors" />
              </Link>
              <Link href="https://instagram.com/korngrei?igsh=Yjkxb2tsbHJlbzYy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} className="text-[#386c00] dark:text-[#e3edc9] hover:text-[#2d5400] dark:hover:text-[#c2d6a4] transition-colors" />
              </Link>
              <Link href="https://www.tiktok.com/@korngrei_kh?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok size={24} className="text-[#386c00] dark:text-[#e3edc9] hover:text-[#2d5400] dark:hover:text-[#c2d6a4] transition-colors" />
              </Link>
              <Link href="https://x.com/KorngRei?t=sit8q-iLRuMEsgTW4jH9Sg&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={24} className="text-[#386c00] dark:text-[#e3edc9] hover:text-[#2d5400] dark:hover:text-[#c2d6a4] transition-colors" />
              </Link>
            </div>
          </div>

          {/* --- Phone --- */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">Call Us</h2>
            <Link href="tel:+855123456789" aria-label="Call us">
              <FaPhone size={24} className="text-[#386c00] dark:text-[#e3edc9] mb-2 hover:text-[#2d5400] dark:hover:text-[#c2d6a4] transition-colors" />
            </Link>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-[family-name:var(--font-kantumruy)]">+855 12 345 6789</p>
          </div>

          {/* --- Email --- */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">Email Us</h2>
            <Link href="mailto:korngrei@gmail.com" aria-label="Email us">
              <SiGmail size={24} className="text-[#386c00] dark:text-[#e3edc9] mb-2 hover:text-[#2d5400] dark:hover:text-[#c2d6a4] transition-colors" />
            </Link>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-[family-name:var(--font-kantumruy)]">korngrei@gmail.com</p>
          </div>

          {/* --- Location --- */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">Visit Us</h2>
            <FaMapMarkerAlt size={24} className="text-[#386c00] dark:text-[#e3edc9] mb-2" />
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center font-[family-name:var(--font-kantumruy)]">
              Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        {/* --- Contact Form and Map Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* --- Contact Form --- */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">Send us a message</h2>
            {submitMessage && (
              <div className={`mb-4 p-3 rounded ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'} font-[family-name:var(--font-kantumruy)]`}>
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-[family-name:var(--font-kantumruy)]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#386c00] focus:border-[#386c00] dark:bg-gray-700 dark:text-white font-[family-name:var(--font-kantumruy)]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-[family-name:var(--font-kantumruy)]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#386c00] focus:border-[#386c00] dark:bg-gray-700 dark:text-white font-[family-name:var(--font-kantumruy)]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-[family-name:var(--font-kantumruy)]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#386c00] focus:border-[#386c00] dark:bg-gray-700 dark:text-white font-[family-name:var(--font-kantumruy)]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-[family-name:var(--font-kantumruy)]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#386c00] focus:border-[#386c00] dark:bg-gray-700 dark:text-white font-[family-name:var(--font-kantumruy)]"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#386c00] hover:bg-[#2d5400]"
                } shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)]`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* --- Map Section --- */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold p-6 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">Find Us in Phnom Penh</h2>
            {/* --- Embedded Map (Replace with your actual map) --- */}
            {/* Example using Google Maps Embed API */}
            <div className="relative w-full h-96">
              {/* Replace the src with your actual Google Maps embed URL */}
              {/* Make sure to set the correct width/height and use responsive iframe techniques */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126990.0943898483!2d104.80799999999999!3d11.556399999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077393%3A0x183be08314cff8d0!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1709043660087!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Phnom Penh Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;