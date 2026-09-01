"use client";

const foundationChips = [
  "Brand Strategy & Creative",
  "Social Media Management & Marketing",
  "Content & Reel Production",
  "Website Design & Development"
];

const amplifierChips = [
  "Performance Marketing",
  "Influencer Marketing",
  "SEO & Local Growth"
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-[#FFFFFF] py-24 border-t border-black/5 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute left-[-10%] top-[10%] w-[300px] h-[300px] rounded-full bg-[#F59A57]/5 blur-[70px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-[#249E98]/5 blur-[70px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="head mb-16 text-center max-w-2xl mx-auto">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            THE FAMEBROS ECOSYSTEM
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[42px] leading-[1.1] mb-5">
            Everything your brand needs to grow.<br />
            <span className="text-[#249E98]">Working as one system.</span>
          </h2>
          <p className="text-[#55555A] text-sm md:text-base leading-relaxed">
            From strategy and content to performance, creators, search and websites, we bring every growth channel together to build stronger brands and drive business growth.
          </p>
        </div>

        {/* Visual Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_1.1fr] items-center gap-10 lg:gap-8 max-w-5xl mx-auto relative">
          
          {/* 1. LEFT COLUMN: THE FOUNDATION | BRAND + ORGANIC */}
          <div className="flex flex-col gap-3.5">
            <span className="font-mono-custom text-[10px] tracking-[0.14em] text-[#F59A57] font-extrabold uppercase mb-2 block">
              THE FOUNDATION &bull; BRAND + ORGANIC
            </span>
            {foundationChips.map((chip, idx) => (
              <div 
                key={idx} 
                className="px-5 py-4 bg-[#FAF6F0] border border-black/5 rounded-xl text-[13px] md:text-[14px] font-bold text-[#0A0A0A] transition-all hover:border-[#F59A57]/40 hover:translate-x-1.5 duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.01)] cursor-default select-none"
              >
                {chip}
              </div>
            ))}
          </div>

          {/* 2. CENTER COLUMN: THE OUTCOME */}
          <div className="flex flex-col items-center justify-center relative">
            
            {/* Pulsing ring borders around center */}
            <div className="absolute inset-0 bg-[#F59A57]/5 rounded-3xl blur-xl animate-pulse" />
            
            <div className="bg-[#0A0A0C] text-white border border-[#F59A57]/30 rounded-3xl p-8 text-center relative z-10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] min-h-[240px] w-full flex flex-col justify-center items-center group hover:border-[#F59A57] transition-colors duration-300 select-none">
              <span className="font-mono-custom text-[11px] tracking-[0.16em] text-[#F59A57] font-bold uppercase mb-4 block">
                THE OUTCOME
              </span>
              <h3 className="font-display font-extrabold text-white text-xl md:text-2xl mb-4 leading-snug">
                A brand built<br />to grow.
              </h3>
              <div className="inline-flex items-center gap-1.5 flex-wrap justify-center text-[10px] md:text-[11px] font-mono text-white/70 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                <span>Recognition</span>
                <span className="text-[#F59A57]">&rarr;</span>
                <span>Trust</span>
                <span className="text-[#F59A57]">&rarr;</span>
                <span>Enquiries</span>
                <span className="text-[#F59A57]">&rarr;</span>
                <span className="text-[#249E98] font-bold">Customers</span>
              </div>
            </div>
          </div>

          {/* 3. RIGHT COLUMN: THE GROWTH AMPLIFIERS */}
          <div className="flex flex-col gap-3.5">
            <span className="font-mono-custom text-[10px] tracking-[0.14em] text-[#249E98] font-extrabold uppercase mb-2 block">
              THE GROWTH AMPLIFIERS
            </span>
            {amplifierChips.map((chip, idx) => (
              <div 
                key={idx} 
                className="px-5 py-4 bg-white border border-black/10 rounded-xl text-[13px] md:text-[14px] font-bold text-[#0A0A0A] transition-all hover:border-[#249E98]/40 hover:-translate-x-1.5 duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.01)] cursor-default select-none"
              >
                {chip}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
