import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Jewellery Social Media Marketing Mumbai | Famebros Studio",
  description: "Specialized social media marketing and brand shoots for gold, diamond, and fashion jewellery brands in Mumbai. High-detail macro video, influencer styling, and Meta Ads.",
  keywords: ["Jewellery Social Media Marketing Mumbai", "Jewellery Brand Marketing Mumbai", "Gold Jewellery Video Shoot Mumbai", "Jewellery Content Creator Mumbai"],
  alternates: {
    canonical: "/jewellery-social-media-marketing-mumbai",
  },
  openGraph: {
    title: "Jewellery Social Media Marketing Mumbai | Famebros Studio",
    description: "Macro video shoots, influencer styling, and high-trust marketing for jewellery brands in Mumbai.",
    url: "https://www.famebrosstudio.com/jewellery-social-media-marketing-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Jewellery Social Media Marketing Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "Macro detail video shoots, bridal jewellery styling reels, luxury brand storytelling, and customer enquiry campaigns."
};

export default function JewellerySocialMediaMarketingMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="text-sm">💎</span>
          <span className="font-mono-custom text-xs font-bold text-[#F59A57] tracking-wider uppercase">
            LUXURY & JEWELLERY MARKETING
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Jewellery Social Media Marketing in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Jewellery sales rely heavily on trust, craftsmanship detail, and emotional resonance. We produce crisp macro video reels of gold, diamond, and bridal jewellery, model styling videos, and high-ROI local ads for jewellery showrooms across Mumbai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shoot"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Book Jewellery Shoot &rarr;
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            Request Jewellery Portfolio
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">Jewellery Brand Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🔍 4K Macro Detail Reels</h3>
              <p className="text-gray-600 text-sm">Close-up video capture highlighting gemstone clarity, gold polish, intricate carvings, and light reflections.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">👰 Bridal Styling Video</h3>
              <p className="text-gray-600 text-sm">Complete bridal trousseau styling reels paired with high-impact wedding season storytelling.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">📍 Showroom Foot Traffic Ads</h3>
              <p className="text-gray-600 text-sm">Geo-targeted Meta Ad campaigns driving high-net-worth buyers directly to your Mumbai showroom.</p>
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
