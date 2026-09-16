import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Reels Production Agency Mumbai | Famebros Studio",
  description: "Famebros Studio is a top Instagram Reels production agency in Mumbai. Scripting, filming, cinema editing, viral audio selection, and rapid content turnaround.",
  keywords: ["Reels Production Mumbai", "Instagram Reels Agency Mumbai", "Short Form Video Production Mumbai", "TikTok Reels Creator Mumbai"],
  alternates: {
    canonical: "/reels-production-mumbai",
  },
  openGraph: {
    title: "Reels Production Agency Mumbai | Famebros Studio",
    description: "Viral Instagram reels production agency in Mumbai. Full end-to-end shoot, edit, and growth service.",
    url: "https://www.famebrosstudio.com/reels-production-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reels Production Agency Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "Professional Instagram Reels and short-form video production service in Mumbai."
};

export default function ReelsProductionMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Instagram Reels Production in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Reels are the #1 engine for organic reach on Instagram today. Famebros Studio brings professional camera gear, creative direction, scripting, lighting, and fast-paced editing directly to your brand in Mumbai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shoot"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Get 15 Edited Reels Trial Shoot &rarr;
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            View Reels Portfolio
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-8 uppercase">Why High Quality Reels Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="font-bold text-lg mb-2">⚡ Explosive Organic Reach</h3>
              <p className="text-sm text-gray-600">Reels algorithmically reach non-followers, exposing your brand to thousands of new potential customers across Mumbai.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="font-bold text-lg mb-2">💎 Instant Trust & Equity</h3>
              <p className="text-sm text-gray-600">High-production visual storytelling sets you apart from competitors using amateur mobile uploads.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="font-bold text-lg mb-2">📈 Higher Ad Conversions</h3>
              <p className="text-sm text-gray-600">Reel format ad creatives perform up to 40% better on Meta Ads than static images.</p>
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
