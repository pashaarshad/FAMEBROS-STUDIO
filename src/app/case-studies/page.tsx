"use client";

import { useState } from "react";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import DetailedCaseStudies from "@/components/sections/influencer/CaseStudies";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  niche: string;
  img: string;
  videoUrl: string;
  imgBadge: string;
  metric1Val: string;
  metric1Label: string;
  metric2Val: string;
  metric2Label: string;
  headline: string;
  story: {
    start: string;
    challenge: string;
    execution: string[];
    result: string;
    quote?: string;
  };
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "shree-mahalaxmi",
    title: "Shree Mahalaxmi Jewellers",
    category: "Jewellery & Luxury",
    niche: "Jewellery & Luxury \u2022 Instagram reels",
    img: "/vedios/business client testimonial/Video-37410_poster.jpg",
    videoUrl: "/vedios/business client testimonial/Video-37410.mp4",
    imgBadge: "SHREE MAHALAXMI",
    metric1Val: "36K+",
    metric1Label: "Combined audience growth",
    metric2Val: "3 Stores",
    metric2Label: "Expanded from 1 store trial",
    headline: "One store became three. Small pages became a 36K+ combined audience.",
    story: {
      start: "The client was advised by the Bada Business network to start taking social media seriously. They started by giving one jewellery store to Famebros Studio to test whether our strategy could genuinely make a difference.",
      challenge: "Each store page had only 500 to 1,000 followers and relied on passive footfall without any active social media brand presence.",
      execution: [
        "Rebuilt social media strategy around jewellery collections, buying behavior, and festival campaigns.",
        "Introduced founder & staff content bringing the real people behind the stores on camera.",
        "Produced high-converting vertical Reels and amplified key collection launches with Meta Ads."
      ],
      result: "After experiencing our execution, the client trusted Famebros Studio with all three stores the very next month. Pages grew to 15K+ (Kurla), 12K+ (Chembur), and 9K+ (Mahalaxmi) — creating 36K+ combined followers and continuous in-store customer footfall.",
      quote: "The goal was never only to make the Instagram pages bigger. The bigger goal was to use social media to help make the businesses bigger."
    }
  },
  {
    id: "hazel-dryfruit",
    title: "Hazel Dryfruit & Sweets",
    category: "F&B & Festive",
    niche: "F&B & Festive \u2022 Meta Ads + reels",
    img: "/vedios/business client testimonial/Video-4099_poster.jpg",
    videoUrl: "/vedios/business client testimonial/Video-4099.mp4",
    imgBadge: "HAZEL SWEETS",
    metric1Val: "Stop Boosting",
    metric1Label: "In-store footfall peak",
    metric2Val: "+240%",
    metric2Label: "Festive sales uplift",
    headline: "The campaign where the owner asked us to stop boosting.",
    story: {
      start: "Hazel Dryfruit & Sweets wanted stronger customer footfall around Raksha Bandhan. The business was located outside Mumbai, but location did not stop Famebros Studio from building the campaign.",
      challenge: "Reaching local buyers outside Mumbai and converting digital views into physical store visits during the peak festival window.",
      execution: [
        "Arranged a local production team and developed festive concept scripts with the owner.",
        "Coordinated shoots and timed content releases around gift-buying behavior.",
        "Set up influencer marketing and targeted Meta Ads to drive local footfall."
      ],
      result: "Just one day before Raksha Bandhan, the store experienced extremely heavy footfall. The owner called us saying, 'Stop boosting. It's overcrowded.' People moved from screens directly into the physical store.",
      quote: "Stop boosting. It's overcrowded."
    }
  },
  {
    id: "raj-laxmi",
    title: "Raj Laxmi Jewellers",
    category: "Jewellery & Luxury",
    niche: "Jewellery \u2022 Reel reach & strategy",
    img: "/vedios/business client testimonial/Video-41182_poster.jpg",
    videoUrl: "/vedios/business client testimonial/Video-41182.mp4",
    imgBadge: "RAJ LAXMI",
    metric1Val: "300K+",
    metric1Label: "Views on 1st new reel",
    metric2Val: "+85%",
    metric2Label: "Engagement rate uplift",
    headline: "A struggling page. Then 300K+ views on the first business reel.",
    story: {
      start: "Raj Laxmi Jewellers approached Famebros Studio with a social media page that was struggling to generate meaningful reel reach.",
      challenge: "Generating organic reach in a competitive jewellery niche while operating outside Mumbai.",
      execution: [
        "Arranged local videography and studied the owner's core customer profile.",
        "Developed customized content concepts and scripted hook-first reels.",
        "Directed the shoot remotely and edited high-retention vertical videos."
      ],
      result: "The first business reel from the new content approach crossed 300,000+ views, demonstrating the immediate impact of structured scripting, hooks, and professional video production.",
      quote: "The first result showed the client what their page could achieve with stronger concepts and execution."
    }
  },
  {
    id: "devi-company",
    title: "Devi & Company, Kanpur",
    category: "Fashion & Retail",
    niche: "Fashion Retail \u2022 Launch campaign",
    img: "/vedios/business client testimonial/Video-58243_poster.jpg",
    videoUrl: "/vedios/business client testimonial/Video-58243.mp4",
    imgBadge: "DEVI & CO",
    metric1Val: "3rd Store",
    metric1Label: "Opening launch campaign",
    metric2Val: "Full",
    metric2Label: "Digital distribution",
    headline: "Two established stores. A third store opening. A new campaign underway.",
    story: {
      start: "Devi & Company is a family fashion business in Kanpur offering clothing across sarees, menswear, suits, kidswear, and family fashion.",
      challenge: "Launching their 3rd store with maximum local awareness and driving footfall on opening week.",
      execution: [
        "Built the complete store launch strategy and digital communication roadmap.",
        "Planned content concepts, promotional creatives, and offer communication.",
        "Executed digital distribution and targeted campaign marketing across Kanpur."
      ],
      result: "Successfully established launch momentum and built digital buzz across Kanpur for the new store opening.",
    }
  },
  {
    id: "ali-salon",
    title: "Ali Salon",
    category: "Salon & Services",
    niche: "Salon & Grooming \u2022 10X Growth",
    img: "/vedios/business client testimonial/Video-60156_poster.jpg",
    videoUrl: "/vedios/business client testimonial/Video-60156.mp4",
    imgBadge: "ALI SALON",
    metric1Val: "10X",
    metric1Label: "More inquiries with us",
    metric2Val: "25 Yrs",
    metric2Label: "In business with 0 prior social",
    headline: "25 Years in business. No social presence. 10X more inquiries with us.",
    story: {
      start: "Ali Salon had been in business for 25 years with strong local goodwill but zero active social media presence or digital booking system.",
      challenge: "Building brand authority on social media from scratch and turning video views into salon appointments.",
      execution: [
        "Captured transformation reels and client grooming experiences.",
        "Produced authentic founder & stylist videos explaining hair care and treatments.",
        "Optimized Instagram bio, DMs, and WhatsApp routing for direct booking inquiries."
      ],
      result: "Generated 10X more customer inquiries per month, attracting new clients from across the city who previously never knew about the salon.",
    }
  },
  {
    id: "sk-furniture",
    title: "SK Furniture",
    category: "Fashion & Retail",
    niche: "Home & Retail \u2022 10K Followers",
    img: "/vedios/business client testimonial/Video-68531_poster.jpg",
    videoUrl: "/vedios/business client testimonial/Video-68531.mp4",
    imgBadge: "SK FURNITURE",
    metric1Val: "10K+",
    metric1Label: "Followers in 6 months",
    metric2Val: "Queues",
    metric2Label: "Customer queues in offbeat location",
    headline: "10K+ followers in 6 months + customer queues despite an offbeat location.",
    story: {
      start: "SK Furniture was situated in an offbeat market location where footfall was traditionally slow and dependent on word-of-mouth.",
      challenge: "Overcoming location disadvantage by driving targeted social media reach and making customers travel directly to the showroom.",
      execution: [
        "Filmed showroom walkthroughs, furniture durability tests, and pricing transparency reels.",
        "Ran localized video campaigns highlighting unique designs and factory pricing.",
        "Built consistent posting schedules that turned quiet showroom days into busy buying days."
      ],
      result: "Grew from 0 to over 10,000+ followers in 6 months, creating regular customer queues inside the store despite the offbeat location.",
    }
  },
  {
    id: "arabian-collection",
    title: "Arabian Collection",
    category: "Fashion & Retail",
    niche: "Fashion & Luxury \u2022 Pan-India & UAE",
    img: "/vedios/business client testimonial/Video-71170_poster.jpg",
    videoUrl: "/vedios/business client testimonial/Video-71170.mp4",
    imgBadge: "ARABIAN COLL.",
    metric1Val: "600K+",
    metric1Label: "Combined followers",
    metric2Val: "3 Years",
    metric2Label: "Mumbai, Dubai & Hyderabad",
    headline: "600K+ Followers | Mumbai, Dubai & Hyderabad | 3 Years With Us.",
    story: {
      start: "Arabian Collection partnered with Famebros Studio to expand its brand presence across key luxury markets in Mumbai, Dubai, and Hyderabad.",
      challenge: "Maintaining premium brand consistency and high content standards across international branches.",
      execution: [
        "Produced high-production luxury reels and fabric detail videos.",
        "Managed ongoing social media branding, campaign shoots, and influencer collaborations.",
        "Scaled content output consistently across 3 consecutive years."
      ],
      result: "Crossed 600,000+ combined followers across accounts, establishing Arabian Collection as a premier ethnic luxury brand in India and the UAE.",
    }
  },
  {
    id: "al-ahmed",
    title: "Al Ahmed Perfumes",
    category: "D2C Brands",
    niche: "Fragrance & D2C \u2022 Top Brand",
    img: "/vedios/business client testimonial/Video-74493_poster.jpg",
    videoUrl: "/vedios/business client testimonial/Video-74493.mp4",
    imgBadge: "AL AHMED",
    metric1Val: "Top Brand",
    metric1Label: "India's top perfume brand",
    metric2Val: "3 Years",
    metric2Label: "Retainer & growth partner",
    headline: "India's Top Perfume Brand | 3 Years With Us.",
    story: {
      start: "Al Ahmed Perfumes partnered with Famebros Studio to elevate its brand storytelling and position its fragrance collections as India's leading attar & perfume brand.",
      challenge: "Conveying fragrance notes, luxury packaging, and brand prestige through digital video content.",
      execution: [
        "Shot cinematic product films and fragrance breakdown reels.",
        "Developed founder-led storytelling highlighting traditional perfume craft.",
        "Ran consistent monthly campaigns driving online store sales and brand trust."
      ],
      result: "Maintained a 3-year continuous growth partnership, strengthening Al Ahmed's position as India's top perfume brand.",
    }
  }
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null);

  const categories = [
    "All",
    "Jewellery & Luxury",
    "F&B & Festive",
    "Fashion & Retail",
    "Salon & Services",
    "D2C Brands"
  ];

  const filteredStudies = selectedCategory === "All"
    ? caseStudiesData
    : caseStudiesData.filter((item) => item.category === selectedCategory);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
  
  const displayedStudies = filteredStudies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#0A0A0A] pt-28 md:pt-36">
      
      {/* 1. HERO SECTION */}
      <section className="py-12 md:py-16 text-center border-b border-black/5 relative overflow-hidden bg-[#FAF6F0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            FAMEBROS STUDIO &bull; PROOF OF GROWTH
          </p>
          <h1 className="font-display font-extrabold text-[#0A0A0A] text-[40px] sm:text-[56px] md:text-[72px] leading-[1.02] tracking-[-0.03em] uppercase mb-6">
            OUR CASE STUDIES
          </h1>
          <p className="text-[#55555A] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            See how focused strategies translate into clear, data-backed success for our clients, growth and consistent performance over time.
          </p>

          {/* 3 Core Impact Pills */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 max-w-3xl mx-auto">
            <div className="bg-white border border-black/10 px-6 py-3.5 rounded-2xl shadow-xs flex items-center gap-3">
              <span className="font-display font-extrabold text-2xl text-[#F59A57]">50+</span>
              <span className="font-mono-custom text-xs uppercase text-[#55555A] font-bold text-left leading-tight">
                Clients<br />Grown
              </span>
            </div>
            <div className="bg-white border border-black/10 px-6 py-3.5 rounded-2xl shadow-xs flex items-center gap-3">
              <span className="font-display font-extrabold text-2xl text-[#249E98]">80%</span>
              <span className="font-mono-custom text-xs uppercase text-[#55555A] font-bold text-left leading-tight">
                Clients From<br />Referrals
              </span>
            </div>
            <div className="bg-white border border-black/10 px-6 py-3.5 rounded-2xl shadow-xs flex items-center gap-3">
              <span className="font-display font-extrabold text-2xl text-[#F59A57]">36K+</span>
              <span className="font-mono-custom text-xs uppercase text-[#55555A] font-bold text-left leading-tight">
                Combined<br />Audience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="py-8 bg-white border-b border-black/5 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-hide py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap border ${
                  selectedCategory === cat
                    ? "bg-[#0A0A0C] text-white border-[#0A0A0C] shadow-sm"
                    : "bg-[#FAFAFA] text-[#55555A] border-black/10 hover:border-black/30 hover:text-[#0A0A0A]"
                }`}
                suppressHydrationWarning
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16">
            {displayedStudies.map((study) => {
              return (
                <div
                  key={study.id}
                  onClick={() => setActiveModal(study)}
                  className="bg-[#FAFAFA] border border-black/10 rounded-[28px] md:rounded-[36px] p-6 md:p-8 hover:border-[#F59A57]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-mono-custom text-[11px] font-extrabold text-[#F59A57] uppercase tracking-wider bg-[#F59A57]/10 px-3 py-1 rounded-full border border-[#F59A57]/20">
                        {study.imgBadge}
                      </span>
                      <span className="text-[11px] font-bold text-[#71717A]">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-[#0A0A0A] text-2xl md:text-3xl mb-2 group-hover:text-[#F59A57] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-[#55555A] text-xs md:text-sm font-medium mb-6 leading-relaxed">
                      {study.headline}
                    </p>

                    {/* 2 Big Bold Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/10">
                      <div>
                        <div className="font-display font-extrabold text-2xl md:text-3xl text-[#0A0A0A] leading-tight">
                          {study.metric1Val}
                        </div>
                        <p className="text-[11px] text-[#55555A] leading-tight font-medium mt-1">
                          {study.metric1Label}
                        </p>
                      </div>
                      <div>
                        <div className="font-display font-extrabold text-2xl md:text-3xl text-[#F59A57] leading-tight">
                          {study.metric2Val}
                        </div>
                        <p className="text-[11px] text-[#55555A] leading-tight font-medium mt-1">
                          {study.metric2Label}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-between text-xs font-bold text-[#F59A57] border-t border-black/5 mt-6">
                    <span>Read Full Strategy &rarr;</span>
                    <span className="w-8 h-8 rounded-full bg-[#F59A57]/10 flex items-center justify-center text-[#F59A57] group-hover:bg-[#F59A57] group-hover:text-white transition-all">
                      &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-6 pt-4">
              <span className="font-mono-custom text-sm font-bold text-[#55555A]">
                {currentPage} / {totalPages}
              </span>
              
              <div className="flex items-center gap-3">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                    currentPage === 1
                      ? "opacity-40 cursor-not-allowed border-black/10 text-gray-400"
                      : "bg-white text-[#0A0A0A] border-black/15 hover:border-black"
                  }`}
                  suppressHydrationWarning
                >
                  &larr; Previous
                </button>
                
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={`px-7 py-3 rounded-full text-xs font-bold transition-all shadow-md ${
                    currentPage === totalPages
                      ? "opacity-40 cursor-not-allowed bg-gray-300 text-gray-600"
                      : "bg-[#0A0A0C] text-white hover:bg-[#F59A57] hover:text-black"
                  }`}
                  suppressHydrationWarning
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. DETAILED CASE STUDIES SECTION */}
      <DetailedCaseStudies />

      {/* 5. GROWTH SYSTEM SECTION */}
      <section className="py-24 bg-[#0A0A0C] text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl mb-16">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
              THE FAMEBROS STUDIO SYSTEM
            </p>
            <h2 className="font-display font-extrabold text-white text-[34px] md:text-[46px] leading-[1.1] mb-5">
              How we scale every brand.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              There is no single piece of content or marketing formula that works for every business. That is why our process begins by understanding your business first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                num: "01",
                title: "Understand",
                desc: "We study the business, audience, competitors, market and current social media position.",
              },
              {
                num: "02",
                title: "Strategise",
                desc: "We create a marketing and content direction based on the actual business objective.",
              },
              {
                num: "03",
                title: "Create",
                desc: "Famebros Studio develops concepts, scripts, shoots, reels, creatives and campaign content.",
              },
              {
                num: "04",
                title: "Distribute",
                desc: "We use the right combination of organic social media, influencer marketing and paid advertising.",
              },
              {
                num: "05",
                title: "Optimise",
                desc: "We study performance, understand what customers respond to and continuously improve.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-[#121215] border border-white/10 rounded-2xl p-6 hover:border-[#249E98]/40 transition-all"
              >
                <span className="font-mono-custom text-xs font-bold text-[#F59A57] block mb-3">
                  {step.num}
                </span>
                <h4 className="font-display font-bold text-white text-lg mb-2">
                  {step.title}
                </h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <Contact />

      {/* 7. FULL DETAIL TEXTUAL MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl border border-black/10">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-black font-bold text-lg hover:bg-black/10 transition-all z-30"
              aria-label="Close modal"
              suppressHydrationWarning
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="font-mono-custom text-xs font-bold text-[#F59A57] uppercase tracking-wider block mb-2">
                {activeModal.category} &bull; CASE STUDY
              </span>
              <h2 className="font-display font-extrabold text-[#0A0A0A] text-3xl md:text-4xl mb-3">
                {activeModal.title}
              </h2>
              <p className="text-[#249E98] font-bold text-base md:text-lg">
                {activeModal.headline}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-5 bg-[#FAF6F0] rounded-2xl mb-8 border border-black/5">
              <div>
                <div className="font-display font-extrabold text-3xl text-[#0A0A0A]">
                  {activeModal.metric1Val}
                </div>
                <p className="text-xs text-[#55555A] mt-1 font-medium">
                  {activeModal.metric1Label}
                </p>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl text-[#F59A57]">
                  {activeModal.metric2Val}
                </div>
                <p className="text-xs text-[#55555A] mt-1 font-medium">
                  {activeModal.metric2Label}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[#55555A] text-sm leading-relaxed mb-8">
              <div>
                <h4 className="font-bold text-[#0A0A0A] text-base mb-2">How It Started</h4>
                <p>{activeModal.story.start}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#0A0A0A] text-base mb-2">The Challenge</h4>
                <p>{activeModal.story.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#0A0A0A] text-base mb-2">What Famebros Studio Did</h4>
                <ul className="space-y-2">
                  {activeModal.story.execution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#F59A57] font-bold">✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#0A0A0A] text-base mb-2">The Result</h4>
                <p>{activeModal.story.result}</p>
              </div>

              {activeModal.story.quote && (
                <div className="p-6 bg-[#0A0A0C] text-white rounded-2xl border-l-4 border-[#F59A57]">
                  <p className="font-display font-bold text-lg text-white mb-1">
                    &ldquo;{activeModal.story.quote}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-4 border-t border-black/10">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-3 bg-[#0A0A0C] text-white rounded-xl text-xs font-bold hover:bg-[#F59A57] hover:text-black transition-all"
                suppressHydrationWarning
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
