import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Brand Shoots Mumbai | Famebros Studio",
  description: "Famebros Studio provides professional brand shoots, product photography, lifestyle video production, and commercial brand films in Mulund & Mumbai.",
  keywords: ["Brand Shoots Mumbai", "Commercial Video Production Mumbai", "Product Photography Mumbai", "Fashion Shoots Mumbai"],
  alternates: {
    canonical: "/brand-shoots-mumbai",
  },
  openGraph: {
    title: "Brand Shoots Mumbai | Famebros Studio",
    description: "Professional brand shoots, commercial video, and product photography in Mumbai.",
    url: "https://www.famebrosstudio.com/brand-shoots-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Brand Shoots Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "On-location and studio brand shoots, commercial video production, and lifestyle photography in Mumbai."
};

export default function BrandShootsMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Brand & Commercial Shoots in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Elevate your brand presence with cinema-grade commercial shoots. Famebros Studio handles full-scale creative direction, location scouting, talent casting, professional lighting, filming, and post-production across Mumbai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shoot"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Book Trial Brand Shoot &rarr;
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            Request Brand Shoot Rates
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">Types of Brand Shoots We Execute</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🍽️ Hospitality & Restaurant Shoots</h3>
              <p className="text-gray-600 text-sm">Atmospheric interior visuals, food styling videos, chef specials, and guest experience reels.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">👗 Fashion & Jewellery Lookbooks</h3>
              <p className="text-gray-600 text-sm">Model try-on shoots, luxury close-ups, catalog imagery, and promotional promo videos.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🏬 Corporate & Location Shoots</h3>
              <p className="text-gray-600 text-sm">Showcase your office, clinic, gym, or resort with professional walkthrough films and founder videos.</p>
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
