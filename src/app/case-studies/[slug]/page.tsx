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
  "shree-mahalaxmi": {
    slug: "shree-mahalaxmi",
    clientName: "Shree Mahalaxmi Jewellers",
    industry: "Jewellery & Luxury",
    headline: "One store became three. Small pages became a 36K+ combined audience.",
    metric: "36K+ Audience Growth",
    problem: "Each store page had only 500 to 1,000 followers and relied on passive footfall without any active social media brand presence.",
    strategy: "Rebuilt social media strategy around jewellery collections, festival campaigns, founder & staff content, vertical Reels, and Meta Ads.",
    contentCreated: "High-converting vertical Reels and collection launch assets.",
    shoots: "On-location store and collection shoots.",
    influencerMarketing: "Targeted local influencer amplification.",
    ads: "Meta Ads for key collection launches.",
    results: "Expanded to 3 stores, growing pages to 15K+ (Kurla), 12K+ (Chembur), and 9K+ (Mahalaxmi) — creating 36K+ combined followers and continuous footfall.",
    testimonial: {
      quote: "The goal was never only to make the Instagram pages bigger. The bigger goal was to use social media to help make the businesses bigger.",
      author: "Shree Mahalaxmi Owner",
      role: "Jewellery Business Owner"
    }
  },
  "hazel-dryfruit": {
    slug: "hazel-dryfruit",
    clientName: "Hazel Dryfruit & Sweets",
    industry: "F&B & Festive",
    headline: "The campaign where the owner asked us to stop boosting.",
    metric: "+240% Festive Sales Uplift",
    problem: "Reaching local buyers outside Mumbai and converting digital views into physical store visits during peak Raksha Bandhan festival window.",
    strategy: "Arranged local production team, festive concept scripts with owner, coordinated shoots, influencer marketing, and hyper-targeted Meta Ads.",
    contentCreated: "Festive concept Reels & gift unboxing content.",
    shoots: "Local festive product & store shoots.",
    influencerMarketing: "Local foodie & lifestyle influencer collaborations.",
    ads: "Local footfall targeted Meta Ads.",
    results: "Overcrowded store 1 day before Raksha Bandhan, prompting owner to request pausing ads due to extreme customer volume.",
    testimonial: {
      quote: "Stop boosting. It's overcrowded.",
      author: "Hazel Sweets Owner",
      role: "F&B Retail Owner"
    }
  },
  "raj-laxmi": {
    slug: "raj-laxmi",
    clientName: "Raj Laxmi Jewellers",
    industry: "Jewellery & Luxury",
    headline: "A struggling page. Then 300K+ views on the first business reel.",
    metric: "300K+ Views on 1st Reel",
    problem: "Generating organic reach in a competitive jewellery niche while operating outside Mumbai with a struggling Instagram page.",
    strategy: "Arranged local videography, studied customer profile, developed customized content concepts and hook-first reels with high-retention editing.",
    contentCreated: "Hook-first vertical video reels and collection highlights.",
    shoots: "Local videography at client showroom.",
    influencerMarketing: "Niche jewellery creator tagging.",
    ads: "Engagement boost campaigns.",
    results: "First new business reel crossed 300,000+ views, instantly transforming page reach and customer engagement.",
    testimonial: {
      quote: "The first result showed us what our page could achieve with structured hooks and execution.",
      author: "Raj Laxmi Owner",
      role: "Jewellery Store Owner"
    }
  },
  "devi-company": {
    slug: "devi-company",
    clientName: "Devi & Company, Kanpur",
    industry: "Fashion & Retail",
    headline: "Two established stores. A third store opening. A new campaign underway.",
    metric: "3rd Store Grand Opening",
    problem: "Launching their 3rd store in Kanpur with maximum local awareness and driving heavy footfall on opening week.",
    strategy: "Built store launch strategy, planned promotional creatives & offer communication, executed digital distribution and targeted campaign marketing across Kanpur.",
    contentCreated: "Grand opening promo reels and collection lookbooks.",
    shoots: "Store opening coverage and model lookbook shoots.",
    influencerMarketing: "Kanpur city fashion creators.",
    ads: "Geo-targeted city awareness Meta Ads.",
    results: "Successfully established launch momentum and built massive digital buzz across Kanpur for the new store opening.",
    testimonial: {
      quote: "Famebros Studio gave our 3rd store opening the exact buzz and footfall we needed.",
      author: "Devi & Co Team",
      role: "Fashion Retail Founder"
    }
  },
  "ali-salon": {
    slug: "ali-salon",
    clientName: "Ali Salon",
    industry: "Salon & Services",
    headline: "25 Years in business. No social presence. 10X more inquiries with us.",
    metric: "10X Booking Inquiries",
    problem: "25 years of local goodwill but zero active social media presence or digital booking system.",
    strategy: "Captured transformation reels, produced authentic founder & stylist videos explaining hair care, optimized Instagram DMs and WhatsApp routing for direct booking.",
    contentCreated: "Stylist transformations and client hair care reels.",
    shoots: "In-salon styling and transformation shoots.",
    influencerMarketing: "Local salon guest collaborations.",
    ads: "Hyper-local city grooming ad campaigns.",
    results: "Generated 10X more customer inquiries per month, attracting new clients from across the city.",
    testimonial: {
      quote: "After 25 years of word of mouth, Famebros Studio brought us a whole new stream of younger customers.",
      author: "Ali Salon Founder",
      role: "Salon Business Owner"
    }
  },
  "sk-furniture": {
    slug: "sk-furniture",
    clientName: "SK Furniture",
    industry: "Fashion & Retail",
    headline: "10K+ followers in 6 months + customer queues despite an offbeat location.",
    metric: "10K+ Followers in 6 Months",
    problem: "Offbeat market location with slow footfall, dependent heavily on word-of-mouth.",
    strategy: "Filmed showroom walkthroughs, durability tests, pricing transparency reels, localized video campaigns highlighting unique designs.",
    contentCreated: "Showroom walkthroughs and product durability test reels.",
    shoots: "Showroom video production sessions.",
    influencerMarketing: "Home decor creators.",
    ads: "Local furniture buyer targeted Meta Ads.",
    results: "Grew to 10K+ followers in 6 months, creating regular customer queues inside the store despite offbeat location.",
    testimonial: {
      quote: "Customers now travel directly to our showroom after seeing our reels.",
      author: "SK Furniture Owner",
      role: "Furniture Business Owner"
    }
  },
  "arabian-collection": {
    slug: "arabian-collection",
    clientName: "Arabian Collection",
    industry: "Fashion & Retail",
    headline: "600K+ Followers | Mumbai, Dubai & Hyderabad | 3 Years With Us.",
    metric: "600K+ Followers Across Brands",
    problem: "Maintaining premium brand consistency and high content standards across international branches (Mumbai, Dubai, Hyderabad).",
    strategy: "Produced high-production luxury reels and fabric detail videos, managed ongoing branding, campaign shoots, and influencer collaborations across 3 years.",
    contentCreated: "Luxury ethnic wear reels and couture launch films.",
    shoots: "Multi-city high-end fashion shoots.",
    influencerMarketing: "Pan-India and UAE fashion influencers.",
    ads: "High-ROI luxury fashion Meta Ads.",
    results: "Crossed 600,000+ combined followers across accounts, establishing brand authority in India & UAE.",
    testimonial: {
      quote: "3 years of continuous growth with Famebros Studio elevated our brand to an international level.",
      author: "Arabian Collection Management",
      role: "Brand Director"
    }
  },
  "al-ahmed": {
    slug: "al-ahmed",
    clientName: "Al Ahmed Perfumes",
    industry: "D2C Brands",
    headline: "India's Top Perfume Brand | 3 Years With Us.",
    metric: "Top Attar & Perfume Brand",
    problem: "Conveying fragrance notes, luxury packaging, and brand prestige through digital video content.",
    strategy: "Shot cinematic product films, fragrance breakdown reels, founder-led storytelling highlighting traditional perfume craft, monthly campaigns.",
    contentCreated: "Cinematic fragrance reels and founder craft stories.",
    shoots: "Product cinematography & luxury packaging shoots.",
    influencerMarketing: "Top lifestyle and fragrance reviewers.",
    ads: "E-commerce conversion & D2C Meta Ads.",
    results: "Maintained a 3-year continuous growth partnership, strengthening Al Ahmed's position as India's top perfume brand.",
    testimonial: {
      quote: "Famebros Studio helped us build the online presence that made us India's top perfume brand.",
      author: "Al Ahmed Perfumes Founder",
      role: "D2C Brand Founder"
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
