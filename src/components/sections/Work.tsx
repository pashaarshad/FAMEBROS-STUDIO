"use client";

import { useRef } from "react";

const workItems = [
  { label: "FOUNDER STORY", title: "Founder Journey", category: "RETAIL" },
  { label: "PRODUCT FILM", title: "D2C Brand Feature", category: "D2C" },
  { label: "BRAND CAMPAIGN", title: "Lifestyle Launch", category: "HOSPITALITY" },
  { label: "BTS CONTENT", title: "Behind the Lens", category: "STUDIO" },
  { label: "EVENT COVERAGE", title: "Store Launch Event", category: "LIVE EVENT" },
  { label: "LAUNCH CAMPAIGN", title: "Product Commercial", category: "CAMPAIGN" },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="bg-[#050505] py-20 border-t border-white/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Header with control arrows */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#F59A57] mb-4">
              RECENT WORK
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[40px] leading-[1.1] mb-3">
              Work that <span className="text-[#F59A57]">speaks</span><br />
              before we do.
            </h2>
            <p className="text-[#6E716F] text-sm font-semibold">
              Real content. Real campaigns. Real stories.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div 
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
        >
          {workItems.map((item, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[240px] snap-start group cursor-pointer"
            >
              {/* Media Card */}
              <div className="relative aspect-[9/16] rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#1C1C21] to-[#0E0E11] transition-transform duration-300 group-hover:-translate-y-1">
                {/* Visual texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(118deg,transparent_0_24px,rgba(255,255,255,0.2)_24px_48px)] mix-blend-overlay" />
                
                {/* Hover overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-11 h-11 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:border-[#F59A57] group-hover:text-[#F59A57] transition-all backdrop-blur-sm">
                    ▶
                  </div>
                </div>

                {/* Text and category overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <span className="font-mono-custom text-[9px] tracking-widest text-[#F59A57] font-semibold block mb-1">
                    {item.label}
                  </span>
                  <span className="text-[12px] text-[#A7A7A2] uppercase tracking-[0.06em]">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#all-work"
            className="inline-flex items-center gap-2 text-sm text-[#A7A7A2] hover:text-white hover:underline transition-all">
            View More Work &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
