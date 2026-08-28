"use client";

import { useRef } from "react";
import Link from "next/link";

const creatorWorkItems = [
  {
    name: "Rohan Malhotra",
    role: "Actor &bull; Campaign shoot",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Ananya Sen",
    role: "Singer &bull; Brand film",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Kabir Mehta",
    role: "Creator &bull; Collaboration",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Pooja Hegde",
    role: "Actor &bull; Product launch",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Siddharth Roy",
    role: "Creator &bull; Campaign",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  }
];

export default function CreatorWork() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Brand Glowing background sweeps */}
      <div className="absolute left-[-10%] top-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-tr from-[#DC2626]/12 via-[#FF3B30]/8 to-transparent blur-[130px] pointer-events-none z-0" />
      <div className="absolute right-[-10%] bottom-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-bl from-[#249E98]/10 via-[#DC2626]/6 to-transparent blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
              CELEBRITY & CREATOR WORK
            </p>
            <h2 className="font-display font-extrabold text-white leading-[1.1] text-[32px] md:text-[40px] mb-4">
              The people brands trust, <br className="hidden sm:inline" />
              trust <span className="text-[#249E98]">us.</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We shoot with celebrities, actors, singers and India&apos;s fastest-growing creators. The same production standard goes into every brand we handle.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2.5">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll left"
              suppressHydrationWarning
            >
              ←
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll right"
              suppressHydrationWarning
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Slider Row */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {creatorWorkItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[240px] snap-start bg-[#121215] border border-white/5 rounded-2xl p-4 flex flex-col justify-between group hover:border-[#249E98]/30 transition-all duration-300"
            >
              {/* Photo Frame */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative mb-4 bg-gradient-to-br from-[#1C1C21] to-[#0E0E11] select-none pointer-events-none">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Profile Details */}
              <div className="px-1">
                <h3 className="font-display font-bold text-white text-base mb-1">
                  {item.name}
                </h3>
                <p 
                  className="text-white/50 text-[11.5px] tracking-wide" 
                  dangerouslySetInnerHTML={{ __html: item.role }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-8">
          <Link 
            href="/influencer" 
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 text-white rounded-full text-[13px] font-bold hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
          >
            See our influencer network
            <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs group-hover:bg-[#F59A57] transition-colors">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
