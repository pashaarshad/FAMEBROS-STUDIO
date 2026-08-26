"use client";

import Image from "next/image";

const heroCards = [
  {
    num: "01",
    label: "STRATEGY",
    sub: "That Builds",
    img: "/imp-doc/uiux1.png", // We will style and overlay them beautifully
    offset: "translate-y-8",
  },
  {
    num: "02",
    label: "CONTENT",
    sub: "That Connects",
    img: "/imp-doc/uiux1.png",
    hasPlay: true,
    offset: "-translate-y-8",
  },
  {
    num: "03",
    label: "INFLUENCE",
    sub: "That Converts",
    img: "/imp-doc/uiux1.png",
    offset: "translate-y-8",
  },
  {
    num: "04",
    label: "GROWTH",
    sub: "That Lasts",
    img: "/imp-doc/uiux1.png",
    offset: "-translate-y-4",
  },
];

const trustLogos = [
  "PRESENCE",
  "THE BOMBAY BRONX",
  "HK",
  "MERAKI",
  "F BAR",
  "theka",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050505] pt-32 pb-16 overflow-hidden flex flex-col justify-between">
      {/* Background circular swirl graphic behind the cards */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="65" cy="50" r="45" stroke="#F59A57" strokeWidth="0.08" fill="none" strokeDasharray="1 1" />
          <circle cx="65" cy="50" r="35" stroke="#F59A57" strokeWidth="0.08" fill="none" />
          <circle cx="65" cy="50" r="25" stroke="#249E98" strokeWidth="0.08" fill="none" strokeDasharray="2 1" />
          <path d="M 65 15 A 35 35 0 0 1 100 50" stroke="#F59A57" strokeWidth="0.2" fill="none" />
        </svg>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center relative z-10 flex-1 my-auto">
        
        {/* Left Side Info */}
        <div className="flex flex-col justify-center">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] text-[#A7A7A2] uppercase mb-6">
            BRAND. CONTENT. INFLUENCE. GROWTH.
          </p>
          
          <h1 className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6 text-[44px] md:text-[56px] lg:text-[70px]">
            We build brands<br />
            designed to<br />
            <span className="text-[#F59A57]">grow</span> for <span className="text-[#249E98]">years.</span>
          </h1>

          <p className="text-[#A7A7A2] text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Content that connects. Strategies that scale.<br />
            Influence that lasts. Growth that stays.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#F59A57] text-[#050505] rounded-full text-[15px] font-bold hover:bg-[#FF8A3D] hover:-translate-y-[2px] transition-all"
            >
              Start a Conversation 
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#F59A57] font-bold text-xs">
                →
              </span>
            </a>
            <a 
              href="#work"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white rounded-full text-[15px] font-bold hover:border-white/50 hover:-translate-y-[2px] transition-all bg-[#050505]/40"
            >
              See Our Work
              <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-white text-[9px]">
                ▶
              </span>
            </a>
          </div>
        </div>

        {/* Right Side 4-Video stack matching layout of uiux1 */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <div className="flex items-center gap-0 relative">
            
            {/* Card 1: Strategy */}
            <div className="w-[120px] md:w-[135px] aspect-[9/16] rounded-2xl border border-white/10 overflow-hidden relative translate-y-6 z-10 bg-gradient-to-b from-[#1C1C21] to-[#050505] shadow-lg group">
              <div className="absolute inset-0 bg-cover bg-center opacity-65 mix-blend-luminosity hover:mix-blend-normal transition-all" style={{ backgroundImage: "url('/imp-doc/uiux1.png')", backgroundPosition: "15% 10%" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono-custom text-[9px] tracking-widest text-white/50 block">01</span>
                <span className="font-display font-extrabold text-[12px] text-white block uppercase tracking-wide">STRATEGY</span>
                <span className="text-[10px] text-[#A7A7A2]">That Builds</span>
              </div>
            </div>

            {/* Card 2: Content (Overlaps Card 1 and 3) */}
            <div className="w-[130px] md:w-[145px] aspect-[9/16] rounded-2xl border border-[#F59A57]/30 overflow-hidden relative -translate-y-8 -ml-6 z-30 bg-gradient-to-b from-[#1C1C21] to-[#050505] shadow-[0_0_30px_rgba(245,154,87,0.15)] group">
              <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('/imp-doc/uiux1.png')", backgroundPosition: "50% 10%" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-11 h-11 rounded-full border border-white/50 bg-white/10 flex items-center justify-center text-white text-xs pl-0.5 group-hover:scale-110 transition-all backdrop-blur-sm shadow-md">
                  ▶
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono-custom text-[9px] tracking-widest text-white/50 block">02</span>
                <span className="font-display font-extrabold text-[12px] text-white block uppercase tracking-wide">CONTENT</span>
                <span className="text-[10px] text-[#F59A57]">That Connects</span>
              </div>
            </div>

            {/* Card 3: Influence */}
            <div className="w-[120px] md:w-[135px] aspect-[9/16] rounded-2xl border border-white/10 overflow-hidden relative translate-y-6 -ml-6 z-20 bg-gradient-to-b from-[#1C1C21] to-[#050505] shadow-lg group">
              <div className="absolute inset-0 bg-cover bg-center opacity-65 mix-blend-luminosity hover:mix-blend-normal transition-all" style={{ backgroundImage: "url('/imp-doc/uiux1.png')", backgroundPosition: "80% 10%" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono-custom text-[9px] tracking-widest text-white/50 block">03</span>
                <span className="font-display font-extrabold text-[12px] text-white block uppercase tracking-wide">INFLUENCE</span>
                <span className="text-[10px] text-[#A7A7A2]">That Converts</span>
              </div>
            </div>

            {/* Card 4: Growth */}
            <div className="w-[120px] md:w-[135px] aspect-[9/16] rounded-2xl border border-[#249E98]/20 overflow-hidden relative -translate-y-4 -ml-6 z-10 bg-gradient-to-b from-[#1C1C21] to-[#050505] shadow-lg group">
              <div className="absolute inset-0 bg-cover bg-center opacity-65 mix-blend-luminosity hover:mix-blend-normal transition-all" style={{ backgroundImage: "url('/imp-doc/uiux1.png')", backgroundPosition: "95% 10%" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono-custom text-[9px] tracking-widest text-white/50 block">04</span>
                <span className="font-display font-extrabold text-[12px] text-white block uppercase tracking-wide">GROWTH</span>
                <span className="text-[10px] text-[#249E98]">That Lasts</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Trusted By Brands horizontal bar (directly aligned to layout) */}
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 mt-8 z-10 border-t border-white/5 pt-8">
        <p className="font-mono-custom text-[10px] tracking-[0.2em] text-[#6E716F] uppercase mb-4">
          TRUSTED BY BRANDS ACROSS INDIA
        </p>
        <div className="flex flex-wrap items-center gap-12 lg:gap-16">
          {trustLogos.map((logo) => (
            <span 
              key={logo}
              className="font-display font-extrabold text-[14px] md:text-[16px] tracking-tight text-white/20 hover:text-white/60 transition-colors cursor-default whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
