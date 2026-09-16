import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { famebrosOrganizationSchema } from "@/components/seo/JsonLd";
import ClientsGrid from "@/components/sections/ClientsGrid";
import Founder from "@/components/sections/Founder";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "About Famebros Studio | Social Media Agency Mulund, Mumbai",
  description: "Learn about Famebros Studio — a leading social media marketing and content production agency in Mulund, Mumbai founded by Sultan Sayed & Bilal Sayed.",
  keywords: ["About Famebros Studio", "Famebros Studio Mulund", "Sultan Sayed Famebros", "Bilal Sayed Famebros", "Social Media Marketing Agency Mumbai"],
  alternates: {
    canonical: "/about-famebros-studio",
  },
  openGraph: {
    title: "About Famebros Studio | Social Media Agency Mulund, Mumbai",
    description: "Learn about Famebros Studio, our story, founders Sultan Sayed & Bilal Sayed, our Mulund location, and our client portfolio.",
    url: "https://www.famebrosstudio.com/about-famebros-studio",
  }
};

export default function AboutFamebrosStudioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={famebrosOrganizationSchema} />

      {/* Hero Header */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#F59A57]" />
          <span className="font-mono-custom text-xs font-bold text-[#F59A57] tracking-wider uppercase">
            BASED IN MULUND WEST, MUMBAI
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-4xl mx-auto leading-tight">
          WE DON&apos;T JUST GROW VIEWS. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#F59A57] via-[#8B5CF6] to-[#7C3AED] text-transparent bg-clip-text">WE GROW BUSINESSES.</span>
        </h1>

        <p className="text-[#55555C] text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Famebros Studio is a full-service social media marketing and content production agency headquartered in Mulund West, Mumbai. Founded by <strong>Sultan Sayed</strong> and <strong>Bilal Sayed</strong>, we exist to bridge the gap between creative visual content and measurable business revenue.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Work With Us &rarr;
          </Link>
          <Link
            href="/shoot"
            className="px-8 py-4 bg-white border border-black/15 text-black font-extrabold rounded-full text-base hover:bg-gray-50 transition-colors shadow-md"
          >
            Book Trial Shoot
          </Link>
        </div>
      </section>

      {/* Story & Values */}
      <section className="bg-white py-16 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase mb-6">Our Agency Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base">
                Famebros Studio was created after observing hundreds of Mumbai businesses waste money on generic social media posts that resulted in zero enquiries or sales.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-base">
                We re-engineered the digital marketing funnel by combining <strong>cinema-grade 4K content shoots</strong>, <strong>high-converting short-form reels</strong>, <strong>direct creator networks</strong>, and <strong>data-backed Meta ad campaigns</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Today, from our studio in Mulund West, Mumbai, we manage social media and performance campaigns for leading restaurants, salons, retail stores, fashion labels, resorts, and jewellery brands across India.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-black/10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F59A57]/20 text-[#F59A57] font-bold flex items-center justify-center shrink-0">📍</div>
                <div>
                  <h3 className="font-bold text-lg">Mulund & Mumbai HQ</h3>
                  <p className="text-sm text-gray-600">Mulund West, Mumbai, Maharashtra 400080, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] font-bold flex items-center justify-center shrink-0">🎬</div>
                <div>
                  <h3 className="font-bold text-lg">In-House Production Studio</h3>
                  <p className="text-sm text-gray-600">Full 4K camera gear, professional lighting, audio engineering, and editing suites.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-600 font-bold flex items-center justify-center shrink-0">👥</div>
                <div>
                  <h3 className="font-bold text-lg">1,000+ Creator Network</h3>
                  <p className="text-sm text-gray-600">Direct relationships with top influencers, food bloggers, and celebrity personalities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <Founder />

      {/* Client Logos */}
      <ClientsGrid isDark={false} />

      {/* Contact */}
      <Contact />
    </div>
  );
}
