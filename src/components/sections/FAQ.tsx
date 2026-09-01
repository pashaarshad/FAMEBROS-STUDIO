"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "How much of my time is required for shoots?",
    a: "Usually just one planned shoot day per month, depending on your package. We prepare concepts, scripts and shot plans in advance, while our team handles direction, filming and production so the process stays efficient for you."
  },
  {
    q: "What makes Famebros different from a typical social media agency?",
    a: "We do more than just post content. We combine strategy, content production, social media management, performance marketing and growth systems to help brands build stronger visibility, trust and consistent business opportunities."
  },
  {
    q: "Do you focus on views or actual business growth?",
    a: "Views and reach matter, but they are not the final goal. We focus on building brand awareness, trust, enquiries and customer opportunities through content, strategy and performance marketing."
  },
  {
    q: "Do you work with businesses outside Mumbai?",
    a: "Yes. We work with businesses in Mumbai, across India and internationally. Depending on the project, shoots can be handled by our team, local production partners or through a planned content-production setup."
  },
  {
    q: "Do you handle complete social media management?",
    a: "Yes. Depending on your package, we can handle content planning, posting, captions, platform optimisation, community management, performance tracking and ongoing strategy."
  },
  {
    q: "How long does it take to start seeing results?",
    a: "Some content can perform quickly, while brand recognition, audience trust and consistent enquiries usually build over time. We continuously track performance and improve the strategy based on real data."
  },
  {
    q: "Do you only create reels?",
    a: "No. We build complete content systems including reels, photography, static creatives, carousels, campaign content, influencer content and paid advertising based on what your brand actually needs."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white py-24 border-t border-black/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          
          {/* Left Block */}
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#F59A57] mb-5">
              QUESTIONS &amp; ANSWERS
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[40px] leading-[1.1] mb-6">
              Frequently asked<br />
              by business owners.
            </h2>
            <p className="text-[#55555A] text-sm leading-relaxed max-w-sm">
              Can&apos;t find what you&apos;re looking for? Speak with our team directly on WhatsApp or send us an email.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#FAFAFA] border border-black/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-display font-extrabold text-sm md:text-base text-[#0A0A0A] hover:text-[#F59A57] transition-colors"
                    suppressHydrationWarning
                  >
                    <span>{item.q}</span>
                    <span className="text-lg font-mono text-[#F59A57]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-[13px] text-[#55555A] leading-relaxed border-t border-black/5 pt-4 animate-slideDown">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
