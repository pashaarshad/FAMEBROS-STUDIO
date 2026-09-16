import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Social Media Agency Mumbai | Famebros Studio",
  description: "Famebros Studio is a top social media marketing agency in Mumbai. We offer end-to-end social media management, content creation, reels production, influencer marketing, and Meta Ads.",
  keywords: ["Social Media Agency Mumbai", "Social Media Marketing Agency Mumbai", "Best Social Media Agency Mumbai", "Instagram Marketing Agency Mumbai", "Digital Marketing Agency Mumbai"],
  alternates: {
    canonical: "/social-media-agency-mumbai",
  },
  openGraph: {
    title: "Social Media Agency Mumbai | Famebros Studio",
    description: "Leading social media marketing and content creation agency in Mumbai helping businesses scale revenue through video content, influencer marketing, and Meta Ads.",
    url: "https://www.famebrosstudio.com/social-media-agency-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Marketing Agency Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  },
  "areaServed": "Mumbai Metropolitan Region",
  "description": "Premium social media strategy, content production, influencer marketing, and performance advertising for brands across Mumbai."
};

export default function SocialMediaAgencyMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
          <span className="font-mono-custom text-xs font-bold text-[#8B5CF6] tracking-wider uppercase">
            MUMBAI METROPOLITAN REGION
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Social Media Agency in <span className="bg-gradient-to-r from-[#F59A57] via-[#8B5CF6] to-[#7C3AED] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Famebros Studio is a growth-driven social media agency in Mumbai. We combine high-conversion content production, viral Instagram Reels, strategic influencer marketing, and high-ROI Meta ad campaigns to turn brand attention into revenue.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Scale Your Business in Mumbai &rarr;
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
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-4 uppercase">
            Why Mumbai Brands Choose Famebros Studio
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base">
            We don&apos;t just deliver posts — we deliver business growth, customer enquiries, and brand authority across Mumbai.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">1. Growth-First Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We design content funnels built specifically to drive WhatsApp enquiries, website visits, clinic bookings, and foot traffic.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">2. In-House Production Crew</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team handles everything — scripting, filming on Sony/RED cinema cameras, lighting, editing, and sound design.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">3. 1,000+ Influencer Network</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Direct relationships with top Mumbai creators, micro-influencers, and celebrities for high-converting brand collaborations.
              </p>
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
