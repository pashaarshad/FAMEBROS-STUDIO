import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Fashion Social Media Agency Mumbai | Famebros Studio",
  description: "Social media marketing and content agency for fashion brands, clothing labels, and boutiques in Mumbai. Lookbook reels, fashion influencers, and Meta Ads.",
  keywords: ["Fashion Social Media Agency Mumbai", "Clothing Brand Marketing Mumbai", "Boutique Social Media Mumbai", "Fashion Content Creator Mumbai"],
  alternates: {
    canonical: "/fashion-social-media-agency-mumbai",
  },
  openGraph: {
    title: "Fashion Social Media Agency Mumbai | Famebros Studio",
    description: "High-aesthetic fashion reels, model shoots, and e-commerce ad scaling for fashion brands in Mumbai.",
    url: "https://www.famebrosstudio.com/fashion-social-media-agency-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fashion Social Media Agency Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "High-aesthetic video production, model lookbook shoots, fashion influencer collaborations, and performance ads for apparel brands."
};

export default function FashionSocialMediaAgencyMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="text-sm">👗</span>
          <span className="font-mono-custom text-xs font-bold text-[#F59A57] tracking-wider uppercase">
            FASHION & APPAREL BRAND GROWTH
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Fashion Social Media Agency in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Build a high-aesthetic clothing brand that commands attention. Famebros Studio creates model try-on reels, streetwear lookbooks, fashion influencer campaigns, and Meta ad funnels for boutiques and e-commerce labels across Mumbai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shoot"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Book Fashion Lookbook Shoot &rarr;
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            Request Fashion Portfolio
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">Fashion Brand Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">📸 Model & Outfit Shoots</h3>
              <p className="text-gray-600 text-sm">Professional studio and outdoor location shoots with experienced fashion models and stylists.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">👠 Fashion Influencers</h3>
              <p className="text-gray-600 text-sm">Seeding your collection to top fashion vloggers, stylists, and Instagram creators for organic hype.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🛍️ E-Commerce Scaling Ads</h3>
              <p className="text-gray-600 text-sm">Conversion-optimized Meta Ads linking directly to your Shopify/Website store checkout.</p>
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
