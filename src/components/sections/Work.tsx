"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const workItems = [
  { 
    line1: "FOUNDER", 
    line2: "STORY", 
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    youtubeId: "aqz-KE-bpKQ" // Example influencer / tech creator review video
  },
  { 
    line1: "PRODUCT", 
    line2: "FILM", 
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
    youtubeId: "hHW1oY26kxQ" // Example dynamic product video
  },
  { 
    line1: "BRAND", 
    line2: "CAMPAIGN", 
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    youtubeId: "3snQ1Nl0LGs" // Example brand story / lifestyle promo
  },
  { 
    line1: "BTS", 
    line2: "CONTENT", 
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80",
    youtubeId: "K1T8J0-m7c4" // Example behind the scenes setup video
  },
  { 
    line1: "EVENT", 
    line2: "COVERAGE", 
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
    youtubeId: "7y0O4A2058k" // Example concert / event video
  },
  { 
    line1: "LAUNCH", 
    line2: "CAMPAIGN", 
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    youtubeId: "L_LUpnjgPso" // Example launch commercial
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);

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
    <section id="work" className="bg-[#050505] py-24 border-t border-white/5 relative">
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
              suppressHydrationWarning
            >
              ←
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll right"
              suppressHydrationWarning
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
              onClick={() => setActiveYoutubeId(item.youtubeId)}
              className="flex-shrink-0 w-[220px] snap-start group cursor-pointer"
            >
              {/* Media Card matching layout of media_1787772365822.png */}
              <div className="relative aspect-[9/16] rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#1C1C21] to-[#0E0E11] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#F59A57]/40 shadow-lg">
                
                {/* Background Poster Image */}
                <img 
                  src={item.img} 
                  alt={`${item.line1} ${item.line2}`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent z-10" />

                {/* Play Button Overlay (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-11 h-11 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-[#050505] transition-all backdrop-blur-sm shadow-md">
                    ▶
                  </div>
                </div>

                {/* Stacked text at the bottom left */}
                <div className="absolute bottom-5 left-5 right-5 z-20 font-display font-extrabold leading-none tracking-tight">
                  <span className="text-[16px] text-white block uppercase mb-1">
                    {item.line1}
                  </span>
                  <span className="text-[16px] text-white block uppercase">
                    {item.line2}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="#contact"
            className="inline-flex items-center gap-3 px-6 py-2.5 border border-white/20 text-white rounded-full text-[14px] font-bold hover:border-white/50 hover:bg-white/5 transition-all"
          >
            View More Work
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#050505] font-bold text-xs">
              →
            </span>
          </Link>
        </div>

      </div>

      {/* Fullscreen Video Overlay Lightbox Modal */}
      {activeYoutubeId && (
        <div 
          className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveYoutubeId(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setActiveYoutubeId(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-all border border-white/10"
            aria-label="Close video"
          >
            ✕
          </button>

          {/* YouTube Video Wrapper */}
          <div 
            className="w-full max-w-[800px] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#0E0E11]"
            onClick={(e) => e.stopPropagation()} // Stop closing click
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1&rel=0&modestbranding=1`}
              title="Work Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}

    </section>
  );
}
