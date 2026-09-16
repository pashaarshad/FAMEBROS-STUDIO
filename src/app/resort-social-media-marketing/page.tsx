import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Resort Social Media Marketing Agency | Famebros Studio",
  description: "Social media marketing and content agency for luxury resorts, hotels, and getaway destinations near Mumbai. Travel reels, influencer stays, and booking ads.",
  keywords: ["Resort Social Media Marketing", "Hotel Social Media Marketing Mumbai", "Travel Influencer Marketing", "Resort Video Shoot"],
  alternates: {
    canonical: "/resort-social-media-marketing",
  },
  openGraph: {
    title: "Resort Social Media Marketing Agency | Famebros Studio",
    description: "Scale weekend bookings and direct reservations for luxury resorts and hotels.",
    url: "https://www.famebrosstudio.com/resort-social-media-marketing",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Resort Social Media Marketing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "High-impact getaway video reels, drone property shoots, travel influencer stays, and direct booking campaigns for resorts."
};

export default function ResortSocialMediaMarketing() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="text-sm">🏖️</span>
          <span className="font-mono-custom text-xs font-bold text-[#F59A57] tracking-wider uppercase">
            HOSPITALITY & RESORT MARKETING
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Resort Social Media Marketing <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Agency</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Drive consistent weekend bookings and corporate getaway reservations. Famebros Studio produces breathtaking resort walkthrough reels, drone videos, travel creator staycations, and targeted Meta Ads reaching weekend travelers across Mumbai & Maharashtra.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shoot"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Book Resort Shoot &rarr;
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            See +3.7X Resort Case Study
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">Our Resort Marketing Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">🌴 Property Walkthrough Reels</h3>
              <p className="text-gray-600 text-sm">Showcasing luxury rooms, swimming pools, dining experiences, sunsets, and resort amenities.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">✈️ Travel Influencer Stays</h3>
              <p className="text-gray-600 text-sm">Inviting top travel creators for hosted weekend stays to generate authentic video reviews and tag mentions.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">📅 Direct Booking Ads</h3>
              <p className="text-gray-600 text-sm">Targeted Facebook & Instagram ads driving weekend travelers directly to your WhatsApp booking desk.</p>
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
