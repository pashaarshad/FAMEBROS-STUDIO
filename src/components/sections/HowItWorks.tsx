"use client";

import { useState, useEffect, useRef } from "react";

const processCards = [
  {
    id: 1,
    title: "Reels & content creation",
    desc: "We plan, shoot, and create reels and social content that feels natural to your brand. Every piece is made for the platform, the audience, and the story you want to tell.",
    tags: ["✓ Reels & short-form", "✓ Creative direction", "✓ Video editing"],
    stat: "50+",
    statLabel: "Brands & businesses",
    bg: "bg-[#3B82F6]", // Sky Blue
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    img: "/engine_create.jpg"
  },
  {
    id: 2,
    title: "Social media strategy",
    desc: "We build a clear content direction around your brand, audience, and goals — so your social media feels consistent, purposeful, and easier to grow.",
    tags: ["✓ Content strategy", "✓ Platform planning", "✓ Audience-focused content"],
    stat: "360°",
    statLabel: "Social media strategy",
    bg: "bg-[#F472B6]", // Pink
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    img: "/engine_strategise.jpg"
  },
  {
    id: 3,
    title: "Brand shoots & video production",
    desc: "From the first shot to the final edit, we produce visual content that gives your brand a stronger presence online — from brand films and campaigns to product, food, and event shoots.",
    tags: ["✓ Brand shoots", "✓ Video production", "✓ Professional editing"],
    stat: "100+",
    statLabel: "Shoots executed",
    bg: "bg-[#10B981]", // Emerald Green
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      </svg>
    ),
    img: "/engine_analyse.jpg"
  },
  {
    id: 4,
    title: "Social account management",
    desc: "From content calendar to caption to publish button, we run your social presence end to end. Consistent posting, platform-native content, and monthly performance reviews so nothing flies blind.",
    tags: ["✓ 30-day content calendar", "✓ Daily publishing", "✓ Monthly analytics"],
    stat: "3X",
    statLabel: "Avg. posting frequency",
    bg: "bg-[#F59E0B]", // Amber / Warm Orange
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    img: "/engine_distribute.jpg"
  }
];

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-cycle stacked cards animation every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % processCards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="how-it-works" className="bg-[#FAF6F0] py-24 border-t border-black/5 relative overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-3">
            THE FAMEBROS GROWTH ENGINE
          </p>
          <h2 className="font-display font-black text-[#0A0A0A] text-[36px] sm:text-[46px] md:text-[54px] leading-[1.05] uppercase tracking-tight">
            HOW WE GROW YOU
          </h2>
          <p className="text-[#55555A] text-sm md:text-base mt-3 leading-relaxed font-medium">
            Our process for <span className="text-[#249E98] font-bold">predictable scaling.</span> A structured 4-step system built to scale your business consistently.
          </p>
        </div>

        {/* Stacked Interactive Card Animation Deck */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto min-h-[460px] sm:min-h-[420px] flex items-center justify-center">
          
          {processCards.map((card, idx) => {
            // Calculate relative offset position in stack ring
            const total = processCards.length;
            const orderIndex = (idx - activeIdx + total) % total;
            const isFront = orderIndex === 0;

            // Compute dynamic stack card styles based on frame sequence
            let translateY = orderIndex * -14;
            let translateX = orderIndex * -18;
            let scale = 1 - orderIndex * 0.05;
            let opacity = orderIndex > 3 ? 0 : 1 - orderIndex * 0.15;
            let zIndex = total - orderIndex;

            if (isFront) {
              translateY = 0;
              translateX = 0;
              scale = 1;
              opacity = 1;
            }

            return (
              <div
                key={card.id}
                onClick={() => setActiveIdx(idx)}
                style={{
                  transform: `translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity
                }}
                className={`absolute inset-x-0 mx-auto w-full ${card.bg} text-white rounded-[32px] p-6 sm:p-10 shadow-2xl transition-all duration-700 ease-out cursor-pointer select-none border border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]`}
              >
                {/* Top Bar with Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="font-mono-custom text-[11px] sm:text-xs tracking-[0.2em] font-extrabold uppercase text-white/80">
                    STEP 0{card.id} / 04
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black/80 flex items-center justify-center border border-white/20 shadow-md">
                    {card.icon}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 items-center">
                  
                  {/* Left Column: Text & Tags */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-3">
                        {card.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal max-w-md">
                        {card.desc}
                      </p>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white/95 text-[#0A0A0C] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-xs border border-white/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stat Overlay */}
                    <div>
                      <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-none block">
                        {card.stat}
                      </span>
                      <span className="text-xs text-white/80 font-medium mt-1 block">
                        {card.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Visual Frame Image */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl bg-black/40">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Dynamic Card Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {processCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIdx === idx 
                  ? "w-8 bg-[#F59A57]" 
                  : "w-2.5 bg-black/20 hover:bg-black/40"
              }`}
              aria-label={`Go to step ${card.id}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
