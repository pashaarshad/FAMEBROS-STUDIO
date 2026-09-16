import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Meta Ads Agency Mumbai | Famebros Studio",
  description: "Famebros Studio is a top Meta Ads agency in Mumbai specializing in high-ROI Facebook and Instagram ad campaigns, lead generation, and ROAS optimization.",
  keywords: ["Meta Ads Agency Mumbai", "Facebook Ads Agency Mumbai", "Instagram Ads Agency Mumbai", "Performance Marketing Mumbai"],
  alternates: {
    canonical: "/meta-ads-agency-mumbai",
  },
  openGraph: {
    title: "Meta Ads Agency Mumbai | Famebros Studio",
    description: "High-ROI Facebook & Instagram ad campaigns for Mumbai businesses designed to scale enquiries and sales.",
    url: "https://www.famebrosstudio.com/meta-ads-agency-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Meta Ads Agency Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "Strategic Meta advertising (Facebook & Instagram Ads), ad creative production, audience targeting, conversion tracking, and scaling."
};

export default function MetaAdsAgencyMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Meta Ads Agency in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Stop wasting ad spend on boosted posts. Famebros Studio combines high-converting video ad creatives with audience targeting, retargeting funnels, and Meta Pixel tracking to generate predictable customer enquiries, store visits, and sales.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Run High-ROI Meta Ads &rarr;
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
            Our Meta Ads Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">1. High-Converting Ad Creatives</h3>
              <p className="text-gray-600 text-sm">We film custom video ads designed specifically to hook viewers in the first 3 seconds and compel action.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">2. Hyper-Local & Interest Targeting</h3>
              <p className="text-gray-600 text-sm">Precision targeting across Mulund, Mumbai, and surrounding regions based on demographic, interest, and intent signals.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">3. Direct Lead & WhatsApp Funnels</h3>
              <p className="text-gray-600 text-sm">Seamless ad funnels that direct high-intent prospects straight to your WhatsApp, booking engine, or call center.</p>
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
