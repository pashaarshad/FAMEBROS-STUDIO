import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Social Media Agency Mulund | Famebros Studio",
  description: "Looking for a top social media agency in Mulund, Mumbai? Famebros Studio provides social media management, content creation, reels production, influencer marketing, and Meta Ads for Mulund businesses.",
  keywords: ["Social Media Agency Mulund", "Social Media Marketing Agency Mulund", "Mulund Social Media Marketing", "Content Creation Mulund", "Reels Production Mulund"],
  alternates: {
    canonical: "/social-media-agency-mulund",
  },
  openGraph: {
    title: "Social Media Agency Mulund | Famebros Studio",
    description: "Top social media marketing & content creation agency based in Mulund West, Mumbai. Strategy, reels, influencer marketing, and Meta Ads.",
    url: "https://www.famebrosstudio.com/social-media-agency-mulund",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Marketing Agency Mulund",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mulund West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400080",
      "addressCountry": "IN"
    }
  },
  "areaServed": "Mulund, Mumbai",
  "description": "End-to-end social media management, content creation, reels production, influencer marketing, and Meta Ads for businesses in Mulund West and East."
};

export default function SocialMediaAgencyMulund() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#F59A57]" />
          <span className="font-mono-custom text-xs font-bold text-[#F59A57] tracking-wider uppercase">
            MULUND WEST, MUMBAI HQ
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Social Media Agency in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mulund, Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Famebros Studio is Mulund&apos;s premier social media marketing and content production agency. Based in Mulund West, we help local restaurants, salons, retail stores, gyms, clinics, and brands scale their digital presence through high-impact Instagram Reels, influencer campaigns, and ROI-driven Meta Ads.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Get Free Strategy Call &rarr;
          </Link>
          <Link
            href="/shoot"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            Book Trial Content Shoot
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-4 uppercase">
            Our Services for Mulund Businesses
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base">
            Everything your Mulund business needs to dominate Instagram, Facebook, and Google Search.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5 hover:border-[#F59A57] transition-all">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full profile management, strategy, weekly content scheduling, graphic design, and community management targeted at Mulund & Mumbai customers.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5 hover:border-[#F59A57] transition-all">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-2">Reels & Content Production</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                On-location shoot crew coming directly to your establishment in Mulund to shoot cinema-grade 4K Instagram reels, product videos, and brand films.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5 hover:border-[#F59A57] transition-all">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Meta Ads & Hyper-Local Leads</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Targeted Facebook and Instagram ads reaching potential customers within a 5km–15km radius of Mulund to drive walk-ins, calls, and WhatsApp enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <ClientsGrid isDark={false} />

      {/* FAQ */}
      <FAQ />

      {/* Contact */}
      <Contact />
    </div>
  );
}
