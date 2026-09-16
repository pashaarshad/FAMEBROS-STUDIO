import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Contact from "@/components/sections/Contact";

interface CaseStudyData {
  slug: string;
  clientName: string;
  industry: string;
  headline: string;
  metric: string;
  problem: string;
  strategy: string;
  contentCreated: string;
  shoots: string;
  influencerMarketing: string;
  ads: string;
  results: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const caseStudiesMap: Record<string, CaseStudyData> = {
  "restaurant-revenue-growth": {
    slug: "restaurant-revenue-growth",
    clientName: "Rahul Mehta (Restaurant)",
    industry: "Hospitality & Dining",
    headline: "How a Mumbai Restaurant Scaled Revenue by +240% in 90 Days",
    metric: "+240% Revenue Growth",
    problem: "The restaurant was struggling with low weekday foot traffic and low online visibility despite great food quality.",
    strategy: "Implemented a 3-tier video content strategy combining mouth-watering cinematic food reels, food blogger tastings, and geo-targeted Meta ads.",
    contentCreated: "45 high-definition video reels showcasing chef specialties, cheese pulls, cocktail craft, and weekend ambiance.",
    shoots: "3 full-day on-location content shoots at the restaurant featuring professional lighting and food styling.",
    influencerMarketing: "Partnered with 12 top Mumbai food bloggers and Instagram food influencers for hosted tasting sessions.",
    ads: "Ran hyper-local Meta ad campaigns targeting food enthusiasts within a 7km radius offering weekend tasting reservations.",
    results: "Achieved +240% increase in monthly revenue, over 1.2M video views, and a consistent 3-week waiting list for weekend dinners.",
    testimonial: {
      quote: "Famebros Studio transformed our restaurant. Our tables are booked every single weekend now!",
      author: "Rahul Mehta",
      role: "Restaurant Owner"
    }
  },
  "retail-enquiries-surge": {
    slug: "retail-enquiries-surge",
    clientName: "Neha Sharma (Retail)",
    industry: "Retail & Boutique",
    headline: "3.2X Enquiry Surge for Retail Brand via Instagram Reels",
    metric: "3.2X More Enquiries",
    problem: "Outdated social media presence yielding zero direct sales inquiries or walk-in customers.",
    strategy: "Revamped Instagram brand aesthetic with model lookbooks, product detail reels, and direct WhatsApp customer funnels.",
    contentCreated: "30 trendy outfit try-on reels, styling guides, and customer transformation videos.",
    shoots: "2 full fashion shoots with studio lighting and professional models.",
    influencerMarketing: "Collaborated with 8 micro-fashion influencers across Mumbai for unboxing and styling reels.",
    ads: "Click-to-WhatsApp Meta Ads targeting fashion-conscious women aged 22-40 in Mumbai.",
    results: "Generated 3.2X more direct sales enquiries in 30 days than the store received in the previous 6 months.",
    testimonial: {
      quote: "We got more customer enquiries in 30 days with Famebros Studio than we got in 6 months prior.",
      author: "Neha Sharma",
      role: "Retail Store Owner"
    }
  },
  "gym-membership-boost": {
    slug: "gym-membership-boost",
    clientName: "Amit Verma (Gym)",
    industry: "Fitness & Wellness",
    headline: "+180% Annual Gym Membership Growth Through Founder Videos",
    metric: "+180% Membership Growth",
    problem: "High competition from neighborhood gyms and stagnant new member sign-ups.",
    strategy: "Positioned the gym trainers as fitness authorities using transformation stories, workout reels, and trial pass ads.",
    contentCreated: "24 high-energy gym reels, member transformation stories, and trainer tip videos.",
    shoots: "2 action-packed shoots capturing morning and evening workout energy, equipment, and personal coaching.",
    influencerMarketing: "Engaged local Mumbai fitness creators to host workout challenges at the gym.",
    ads: "Free 3-Day Trial Pass campaigns targeting local fitness enthusiasts within 5km.",
    results: "+180% increase in annual gym memberships signed within 60 days.",
    testimonial: {
      quote: "Our membership base grew consistently every month after Famebros Studio took over our social media.",
      author: "Amit Verma",
      role: "Gym Owner"
    }
  },
  "resort-booking-scale": {
    slug: "resort-booking-scale",
    clientName: "Karan Malhotra (Resort)",
    industry: "Travel & Hospitality",
    headline: "+3.7X Direct Resort Bookings via Immersive Drone & Travel Reels",
    metric: "+3.7X Direct Bookings",
    problem: "Heavy reliance on third-party OTAs paying high commissions for weekend resort bookings.",
    strategy: "Built a direct-to-resort social media engine using drone walkthrough reels and travel creator staycations.",
    contentCreated: "18 cinematic travel reels highlighting pool villas, sunsets, dining, and weekend getaways.",
    shoots: "2-day on-site drone and video production capturing the full resort experience.",
    influencerMarketing: "Hosted 5 top travel couples for weekend getaway staycation reviews.",
    ads: "Targeted weekend getaway Meta Ads aimed at Mumbai couples and corporate teams.",
    results: "+3.7X increase in direct resort bookings, saving over ₹2.5L in third-party OTA commissions.",
    testimonial: {
      quote: "Famebros Studio brought us direct high-paying guests every single week.",
      author: "Karan Malhotra",
      role: "Resort Owner"
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(caseStudiesMap).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const data = caseStudiesMap[params.slug];
  if (!data) return {};

  return {
    title: `${data.headline} | Case Study | Famebros Studio`,
    description: `Read how Famebros Studio helped ${data.clientName} achieve ${data.metric} through strategic social media marketing, content shoots, and Meta ads in Mumbai.`,
    alternates: {
      canonical: `/case-studies/${data.slug}`,
    }
  };
}

export default async function CaseStudyDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = caseStudiesMap[params.slug];

  if (!data) {
    notFound();
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.headline,
    "description": `Case study detailing how Famebros Studio helped ${data.clientName} achieve ${data.metric}.`,
    "author": {
      "@type": "Organization",
      "name": "Famebros Studio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Famebros Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.famebrosstudio.com/imp-doc/logo.png"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#0A0A0C] pt-28 sm:pt-36">
      <JsonLd data={caseStudySchema} />

      <article className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-6 flex items-center gap-3">
          <Link href="/case-studies" className="text-xs font-bold text-[#F59A57] uppercase tracking-wider hover:underline">
            &larr; Back to All Case Studies
          </Link>
          <span className="text-gray-300">•</span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{data.industry}</span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0A0A0C] uppercase mb-6 leading-tight">
          {data.headline}
        </h1>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-black text-white mb-12 shadow-lg">
          <span className="text-xl">🚀</span>
          <span className="font-mono-custom text-base sm:text-xl font-extrabold text-[#F59A57]">{data.metric}</span>
        </div>

        {/* Case breakdown cards */}
        <div className="space-y-8 text-base leading-relaxed">
          <section className="bg-white p-8 rounded-2xl border border-black/5 shadow-xs">
            <h2 className="text-xl font-bold text-[#0A0A0C] mb-3">1. The Problem</h2>
            <p className="text-gray-700">{data.problem}</p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-black/5 shadow-xs">
            <h2 className="text-xl font-bold text-[#0A0A0C] mb-3">2. Strategy & Solution</h2>
            <p className="text-gray-700 mb-4">{data.strategy}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
              <li><strong>Content Produced:</strong> {data.contentCreated}</li>
              <li><strong>On-Site Shoots:</strong> {data.shoots}</li>
              <li><strong>Influencer Campaign:</strong> {data.influencerMarketing}</li>
              <li><strong>Meta Paid Ads:</strong> {data.ads}</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-black/5 shadow-xs">
            <h2 className="text-xl font-bold text-[#0A0A0C] mb-3">3. Measurable Results</h2>
            <p className="text-gray-700 font-medium text-lg text-emerald-600">{data.results}</p>
          </section>

          {/* Testimonial Quote */}
          <section className="bg-gradient-to-r from-[#F59A57]/10 to-[#8B5CF6]/10 p-8 rounded-2xl border border-[#F59A57]/30 italic">
            <p className="text-lg text-gray-900 mb-4">&ldquo;{data.testimonial.quote}&rdquo;</p>
            <div>
              <p className="font-bold text-[#0A0A0C] not-italic">{data.testimonial.author}</p>
              <p className="text-xs text-gray-600 not-italic">{data.testimonial.role}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shoot"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
          >
            Get Similar Results For Your Business &rarr;
          </Link>
        </div>
      </article>

      <Contact />
    </div>
  );
}
