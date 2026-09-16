import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Content Creation Agency Mumbai | Famebros Studio",
  description: "Famebros Studio is a leading content creation agency in Mumbai. High-converting video shoots, Instagram reels, brand films, product photography, and visual storytelling.",
  keywords: ["Content Creation Agency Mumbai", "Video Production Agency Mumbai", "Instagram Content Creator Mumbai", "Brand Shoots Mumbai"],
  alternates: {
    canonical: "/content-creation-agency-mumbai",
  },
  openGraph: {
    title: "Content Creation Agency Mumbai | Famebros Studio",
    description: "Cinema-grade video shoots and high-converting content production for brands across Mumbai.",
    url: "https://www.famebrosstudio.com/content-creation-agency-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Content Creation Agency Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "Professional video content production, scripting, 4K camera shoots, color grading, and creative storytelling in Mumbai."
};

export default function ContentCreationAgencyMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Content Creation Agency in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          In today&apos;s feed, average content gets ignored. Famebros Studio is a Mumbai-based content creation agency producing viral-quality Instagram reels, brand commercials, product styling videos, and founder storytelling content designed to capture attention and convert viewers into loyal clients.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shoot"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Book a Trial Content Shoot &rarr;
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            Request Portfolio & Pricing
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">
            Our Content Production Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🎬 Short-Form Video Reels</h3>
              <p className="text-gray-600 text-sm">Dynamic hooks, trending audio integration, motion graphics, and punchy captions engineered for viral Instagram & YouTube Shorts reach.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">📸 Product & Commercial Photography</h3>
              <p className="text-gray-600 text-sm">Studio lighting setups, lifestyle staging, macro detail shots, and e-commerce catalogue imagery for fashion, beauty, food, and jewellery brands.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🎙️ Founder Authority Videos</h3>
              <p className="text-gray-600 text-sm">Build personal brand trust with high-quality talking-head videos, behind-the-scenes glimpses, and business story films.</p>
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
