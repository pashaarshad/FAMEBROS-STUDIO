import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Performance Marketing Agency Mumbai | Famebros Studio",
  description: "Famebros Studio is a growth performance marketing agency in Mumbai. Multi-channel ad campaigns, conversion rate optimization, customer acquisition, and ROAS scaling.",
  keywords: ["Performance Marketing Agency Mumbai", "ROI Marketing Agency Mumbai", "Lead Generation Agency Mumbai", "Digital Ads Agency Mumbai"],
  alternates: {
    canonical: "/performance-marketing-agency-mumbai",
  },
  openGraph: {
    title: "Performance Marketing Agency Mumbai | Famebros Studio",
    description: "Data-driven performance marketing campaigns in Mumbai engineered for high ROAS and scalable revenue growth.",
    url: "https://www.famebrosstudio.com/performance-marketing-agency-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Performance Marketing Agency Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "Multi-channel performance marketing, customer acquisition funnels, paid media management, and ROAS scaling in Mumbai."
};

export default function PerformanceMarketingAgencyMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Performance Marketing Agency in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          We focus on metrics that directly impact your bottom line: Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), customer lifetime value, and qualified business leads.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Scale Your Performance &rarr;
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
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">Our Performance Engine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🎯 Creative Testing</h3>
              <p className="text-gray-600 text-sm">Testing dozens of video hooks, ad formats, angles, and call-to-actions to uncover winning formulas.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">📊 Conversion Rate Funnels</h3>
              <p className="text-gray-600 text-sm">Optimizing landing pages, WhatsApp routing, form fields, and direct messaging to maximize conversions.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🚀 Budget Scaling</h3>
              <p className="text-gray-600 text-sm">Aggressively scaling ad budgets on proven winning campaigns while protecting profitability.</p>
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
