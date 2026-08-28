"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "How much of my time is required for shoots?",
    a: "Only one day a month. We pre-plan the blueprint and write all scripts in advance. On the shoot day, our full crew handles directing, filming, and lighting at your venue. You focus on running your business, we take care of the rest."
  },
  {
    q: "Which specific business niches do you scale?",
    a: "We work with high-experience physical and digital brands. Our focus is F&B (Restaurants & Cafes), Hospitality (Resorts & Hotels), Fitness (Gyms & Personal Brands), Retail (Showrooms & Fashion), Real Estate, and Executive Founder Branding."
  },
  {
    q: "Do you guarantee business sales growth or just viral views?",
    a: "Views build brand awareness, but we integrate lead capture funnels (comment-to-DM triggers, direct WhatsApp automation, and custom forms) so that virality directly feeds into inbound sales calls and bookings."
  },
  {
    q: "Do you work with businesses outside Mumbai?",
    a: "Yes. While our headquarters and primary production crew are based in Mumbai, we frequently organize production schedules and travel shoots for clients all across India."
  },
  {
    q: "Do you handle page posting and optimization?",
    a: "Absolutely. We are a full-service organic growth engine. We handle video sound design, high-retention editing, caption copywriting, SEO hashtag research, custom thumbnail design, and strategic posting calendars."
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
              QUESTIONS & ANSWERS
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[40px] leading-[1.1] mb-6">
              Frequently asked<br />
              by business owners.
            </h2>
            <p className="text-[#55555A] text-sm leading-relaxed max-w-sm">
              Can&apos;t find the answer you&apos;re looking for? Reach out directly via our WhatsApp sales direct or send us an email.
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
