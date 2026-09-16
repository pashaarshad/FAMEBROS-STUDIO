import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Salon Social Media Marketing Mumbai | Famebros Studio",
  description: "Social media marketing agency for salons, spas, and aesthetic clinics in Mumbai. Hair transformation reels, client booking ads, and brand authority.",
  keywords: ["Salon Social Media Marketing Mumbai", "Beauty Parlour Marketing Mumbai", "Aesthetic Clinic Marketing Mumbai", "Salon Content Creation Mumbai"],
  alternates: {
    canonical: "/salon-social-media-marketing-mumbai",
  },
  openGraph: {
    title: "Salon Social Media Marketing Mumbai | Famebros Studio",
    description: "Grow appointment bookings for your salon or aesthetic clinic in Mumbai.",
    url: "https://www.famebrosstudio.com/salon-social-media-marketing-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Salon Social Media Marketing Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "Before & after transformation reels, stylist spotlight videos, client booking ads, and social media management for salons and beauty clinics in Mumbai."
};

export default function SalonSocialMediaMarketingMumbai() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={serviceSchema} />

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="text-sm">✂️</span>
          <span className="font-mono-custom text-xs font-bold text-[#F59A57] tracking-wider uppercase">
            SALON & BEAUTY CLINICS
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          Salon Social Media Marketing in <span className="bg-gradient-to-r from-[#F59A57] to-[#8B5CF6] text-transparent bg-clip-text">Mumbai</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Fill your appointment books consistently. We create stunning before-and-after hair & beauty transformation reels, spotlight your expert stylists, and run direct WhatsApp booking ads across Mumbai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shoot"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Book Salon Shoot &rarr;
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            Get 3.2X Enquiry Strategy
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 uppercase">How We Scale Salons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">💇‍♀️ Transformation Reels</h3>
              <p className="text-gray-600 text-sm">High-impact hair coloring, balayage, keratin, and bridal makeup transformation videos.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">✨ Stylist Spotlight</h3>
              <p className="text-gray-600 text-sm">Building personal authority for your senior stylists to foster client trust and repeat visits.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <h3 className="text-xl font-bold mb-2">📲 Instant Booking Ads</h3>
              <p className="text-gray-600 text-sm">Meta ad campaigns connecting local beauty seekers straight to your salon manager on WhatsApp.</p>
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
