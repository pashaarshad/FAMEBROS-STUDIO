import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Restaurant Social Media Marketing Mumbai | Famebros Studio",
  description: "Specialized social media marketing for restaurants, cafes, and food brands in Mumbai. Food reels, influencer tastings, viral content, and revenue growth.",
  keywords: ["Restaurant Social Media Marketing Mumbai", "Cafe Social Media Marketing Mumbai", "Food Influencer Marketing Mumbai", "Food Content Creator Mumbai"],
  alternates: {
    canonical: "/restaurant-social-media-marketing-mumbai",
  },
  openGraph: {
    title: "Restaurant Social Media Marketing Mumbai | Famebros Studio",
    description: "Specialized restaurant marketing & food video creation agency in Mumbai.",
    url: "https://www.famebrosstudio.com/restaurant-social-media-marketing-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Restaurant Social Media Marketing Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "Social media strategy, mouth-watering food reels, food blogger tastings, Meta ads, and foot-traffic growth for restaurants across Mumbai."
};

export default function RestaurantSocialMediaMarketingMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="text-sm">🍔</span>
          <span className="font-mono-custom text-xs font-bold text-[#F59A57] tracking-wider uppercase">
            FOOD & HOSPITALITY SPECIALIZATION
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Restaurant Social Media Marketing in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Turn foodies into regular diners. We produce mouth-watering cinematic food reels, organize top food blogger tasting sessions, and execute local Meta Ads that fill tables at your restaurant or cafe in Mumbai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shoot"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Book Restaurant Shoot &rarr;
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            See +240% Restaurant Case Study
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">Our Restaurant Growth Blueprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🎥 Cinematic Food Reels</h3>
              <p className="text-gray-600 text-sm">Slow-motion sizzle shots, cheese pulls, cocktail mixing, and behind-the-scenes kitchen action.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🤳 Food Blogger Tastings</h3>
              <p className="text-gray-600 text-sm">Organizing high-impact food influencer meetups and review campaigns across Mumbai food networks.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">📍 Geo-Targeted Meta Ads</h3>
              <p className="text-gray-600 text-sm">Targeting diners within 3km-8km of your restaurant with weekend special offers and table reservation campaigns.</p>
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
