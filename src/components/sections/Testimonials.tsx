"use client";

import { useRef } from "react";

const testimonialItems = [
  {
    quote: "Our last agency took money for eight months and showed us nothing. These people send a report every month whether the news is good or bad.",
    author: "Owner",
    business: "Retail business, Mumbai",
    tag: "Retail &bull; Mumbai"
  },
  {
    quote: "We stopped running ads for two months and the enquiries kept coming. That's when I understood what they'd actually built.",
    author: "Founder",
    business: "D2C brand, Mumbai",
    tag: "D2C &bull; Mumbai"
  },
  {
    quote: "Six years with them. That should tell you everything.",
    author: "Director",
    business: "Hospitality group, Maharashtra",
    tag: "Hospitality &bull; Maharashtra"
  },
  {
    quote: "People recognise me now. Customers walk in and mention a reel from months ago.",
    author: "Founder",
    business: "Service business, Mumbai",
    tag: "Services &bull; Mumbai"
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Brand Glowing background sweeps */}
      <div className="absolute left-[-10%] top-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-tr from-[#DC2626]/12 via-[#FF3B30]/8 to-transparent blur-[130px] pointer-events-none z-0" />
      <div className="absolute right-[-10%] bottom-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-bl from-[#249E98]/10 via-[#DC2626]/6 to-transparent blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
              IN THEIR WORDS
            </p>
            <h2 className="font-display font-extrabold text-white leading-[1.1] text-[32px] md:text-[40px] mb-4">
              From the business owners <br />
              we work <span className="text-[#249E98]">with.</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Real results build real relationships. Hear what our client partners say about the Famebros experience.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2.5">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonials horizontal scrolling cards list */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonialItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start bg-[#121215] border border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:border-[#249E98]/30 transition-all duration-300 min-h-[360px]"
            >
              {/* Video Mockup Frame with Play Overlay */}
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-6 bg-gradient-to-br from-[#1C1C21] to-[#0E0E11] flex items-center justify-center border border-white/5 select-none pointer-events-none">
                
                {/* Diagonal branding overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#DC2626]/5 to-[#F59A57]/5 opacity-60 z-0" />
                
                {/* Play Button Icon */}
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center text-white font-bold text-xs pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57]/20 group-hover:border-[#F59A57] transition-all duration-300 z-10">
                  ▶
                </div>
                
                {/* Metric / Category Badge */}
                <div 
                  className="absolute top-3 left-3 bg-[#0A0A0C]/80 border border-white/10 text-[#F59A57] text-[10px] font-mono-custom px-2.5 py-1 rounded-md tracking-wide uppercase font-bold z-10"
                  dangerouslySetInnerHTML={{ __html: item.tag }}
                />
              </div>

              {/* Quote details */}
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-white/80 text-[13px] md:text-[14.5px] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                
                {/* Owner info */}
                <div className="border-t border-white/5 pt-4">
                  <h4 className="font-display font-bold text-white text-[13.5px]">
                    {item.author}
                  </h4>
                  <p className="text-white/40 text-[11px] mt-0.5">
                    {item.business}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Video recording footnotes */}
        <div className="mt-6 text-left border-t border-white/5 pt-6">
          <p className="text-white/40 text-[11px] italic tracking-wide">
            * Note: Recording 5&ndash;8 business owners in vertical video format before launch.
          </p>
        </div>

      </div>
    </section>
  );
}
