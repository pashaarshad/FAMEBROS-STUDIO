import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Social Media Management Agency Mumbai | Famebros Studio",
  description: "Comprehensive social media management services in Mulund & Mumbai. End-to-end strategy, content creation, profile optimization, engagement, and growth analytics.",
  keywords: ["Social Media Management Mumbai", "Instagram Management Agency Mumbai", "Social Media Handling Mumbai", "Social Media Strategy Mumbai"],
  alternates: {
    canonical: "/social-media-management",
  },
  openGraph: {
    title: "Social Media Management Agency Mumbai | Famebros Studio",
    description: "Complete Instagram, Facebook, YouTube, and LinkedIn management for brands in Mumbai.",
    url: "https://www.famebrosstudio.com/social-media-management",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Management",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mulund, Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "Full-service social media profile management, strategy, content production, scheduling, and growth reporting for brands."
};

export default function SocialMediaManagement() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Social Media Management <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Agency Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Stop posting randomly without results. Famebros Studio delivers full-service social media management for Mumbai businesses — from strategic planning and viral reel production to daily community engagement and monthly revenue reporting.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Get Social Media Audit &rarr;
          </Link>
          <Link
            href="/shoot"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            Book Trial Content Shoot
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">
            What Our Social Media Management Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#FAF9F6] border border-black/5">
              <h3 className="font-bold text-lg mb-2">1. Monthly Content Strategy</h3>
              <p className="text-sm text-gray-600">Tailored content pillars, competitor research, and hashtag architecture.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#FAF9F6] border border-black/5">
              <h3 className="font-bold text-lg mb-2">2. On-Site Shoot Execution</h3>
              <p className="text-sm text-gray-600">Regular video shoots at your store, office, clinic, or restaurant.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#FAF9F6] border border-black/5">
              <h3 className="font-bold text-lg mb-2">3. Professional Editing</h3>
              <p className="text-sm text-gray-600">High-energy reel edits, color grading, custom sound effects, and captions.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#FAF9F6] border border-black/5">
              <h3 className="font-bold text-lg mb-2">4. Analytics & Growth</h3>
              <p className="text-sm text-gray-600">Monthly breakdown of impressions, reach, profile visits, and lead inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      <ClientsGrid isDark={false} />
      <FAQ />
      <Contact />
    </div>
  );
}
