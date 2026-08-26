"use client";

import { useState, useRef } from "react";

const heroCards = [
  {
    num: "01",
    label: "STRATEGY",
    sub: "That Builds",
    bgPosition: "15% 10%",
    offset: "translate-y-6",
    defaultZ: "z-10",
    videoSrc: "", 
  },
  {
    num: "02",
    label: "CONTENT",
    sub: "That Connects",
    bgPosition: "50% 10%",
    offset: "-translate-y-8",
    defaultZ: "z-30",
    videoSrc: "", 
  },
  {
    num: "03",
    label: "INFLUENCE",
    sub: "That Converts",
    bgPosition: "80% 10%",
    offset: "translate-y-6",
    defaultZ: "z-20",
    videoSrc: "", 
  },
  {
    num: "04",
    label: "GROWTH",
    sub: "That Lasts",
    bgPosition: "95% 10%",
    offset: "-translate-y-4",
    defaultZ: "z-10",
    videoSrc: "", 
  },
];

export default function Hero() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
    const video = videoRefs.current[idx];
    if (video && video.src) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (idx: number) => {
    setHoveredIdx(null);
    const video = videoRefs.current[idx];
    if (video && video.src) {
      video.pause();
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050505] pt-32 pb-12 overflow-hidden flex flex-col justify-between">
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

        {/* Right Side 4-Video stack with dynamic hover active front-back switching */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <div className="flex items-center gap-0 relative">
            {heroCards.map((card, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;
              
              // Calculate dynamic z-index
              let zClass = card.defaultZ;
              if (isHovered) {
                zClass = "z-40";
              } else if (isAnyHovered) {
                zClass = "z-0";
              }

              // Calculate dynamic scale and styling
              let styleClass = "border-white/10 opacity-70";
              if (isHovered) {
                styleClass = "border-[#F59A57] scale-110 opacity-100 shadow-[0_0_40px_rgba(245,154,87,0.25)]";
              } else if (isAnyHovered) {
                styleClass = "border-white/5 opacity-30 scale-95 blur-[0.5px]";
              }

              return (
                <div
                  key={card.num}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  className={`w-[120px] md:w-[135px] aspect-[9/16] rounded-2xl border overflow-hidden relative ${card.offset} ${zClass} ${styleClass} transition-all duration-500 ease-out bg-gradient-to-b from-[#1C1C21] to-[#050505] shadow-lg cursor-pointer first:ml-0 -ml-6`}
                >
                  {/* Poster Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ 
                      backgroundImage: "url('/imp-doc/uiux1.png')", 
                      backgroundPosition: card.bgPosition 
                    }} 
                  />

                  {/* Future Video Integration */}
                  {card.videoSrc && (
                    <video
                      ref={(el) => { videoRefs.current[idx] = el; }}
                      src={card.videoSrc}
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
                    />
                  )}

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-15" />

                  {/* Hover visual details - Play icon when hovered or default center icon */}
                  {card.num === "02" && !isAnyHovered && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-11 h-11 rounded-full border border-white/50 bg-white/10 flex items-center justify-center text-white text-xs pl-0.5 backdrop-blur-sm shadow-md">
                        ▶
                      </div>
                    </div>
                  )}

                  {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full border border-white/80 bg-white/20 flex items-center justify-center text-white text-sm pl-0.5 backdrop-blur-md shadow-lg scale-110">
                        ▶
                      </div>
                    </div>
                  )}

                  {/* Bottom labels */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="font-mono-custom text-[9px] tracking-widest text-white/50 block">{card.num}</span>
                    <span className="font-display font-extrabold text-[12px] text-white block uppercase tracking-wide">{card.label}</span>
                    <span className={`text-[10px] transition-colors duration-300 ${isHovered ? "text-[#F59A57]" : "text-[#A7A7A2]"}`}>
                      {card.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Content Area: Trusted Brands + Stats Bar */}
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 mt-8 z-10">
        
        {/* Trusted By Brands horizontal bar */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono-custom text-[10px] tracking-[0.2em] text-[#6E716F] uppercase whitespace-nowrap">
              TRUSTED BY BRANDS ACROSS INDIA
            </span>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12 opacity-50 hover:opacity-85 transition-opacity duration-300">
            {/* Presence Wellness */}
            <span className="font-serif text-[18px] tracking-[0.15em] font-light text-white italic">
              PRESENCE
            </span>
            
            {/* The Bombay Bronx */}
            <div className="flex flex-col items-center leading-none text-center">
              <span className="font-mono text-[7px] tracking-widest text-white">THE BOMBAY</span>
              <span className="font-sans font-black text-[15px] tracking-wider text-white">BRONX</span>
            </div>

            {/* HK */}
            <span className="font-serif font-semibold text-[22px] tracking-tight text-white">
              HK
            </span>

            {/* Meraki */}
            <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center">
              <span className="font-sans text-[7px] tracking-[0.2em] font-bold text-white pl-0.5">MERAKI</span>
            </div>

            {/* F BAR */}
            <div className="flex items-center gap-1.5 font-sans font-semibold text-[17px] text-white">
              <span>F</span>
              <div className="w-[1px] h-4 bg-white" />
              <span className="text-[12px] font-normal tracking-widest">BAR</span>
            </div>

            {/* Theka Coffee */}
            <div className="flex flex-col items-start leading-none">
              <span className="font-sans font-light text-[18px] text-white">theka</span>
              <span className="font-mono text-[6px] tracking-widest text-[#F59A57]">COFFEE</span>
            </div>
          </div>
        </div>

        {/* Dynamic Statistics Bar matching media_1787768988549.png exactly */}
        <div className="bg-[#111416]/40 rounded-2xl border border-white/10 p-5 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-px md:divide-x divide-white/10">
            
            {/* Stat 1: 6+ Years */}
            <div className="flex items-center gap-4 md:px-6">
              {/* Concentric gold circle */}
              <div className="w-12 h-12 rounded-full border border-[#E9BF61]/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#E9BF61]/50" />
                <svg className="w-5 h-5 text-[#E9BF61]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.772-.564-.373-1.81.588-1.81h4.906a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-[#E9BF61] leading-none block">6+</span>
                <span className="text-[12px] text-[#A7A7A2] font-medium mt-1 block">Years of Experience</span>
              </div>
            </div>

            {/* Stat 2: 50+ Brands */}
            <div className="flex items-center gap-4 md:px-6">
              {/* Concentric teal circle */}
              <div className="w-12 h-12 rounded-full border border-[#249E98]/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#249E98]/50" />
                <svg className="w-5 h-5 text-[#249E98]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-[#249E98] leading-none block">50+</span>
                <span className="text-[12px] text-[#A7A7A2] font-medium mt-1 block">Brands Partnered</span>
              </div>
            </div>

            {/* Stat 3: 25 Team members */}
            <div className="flex items-center gap-4 md:px-6">
              {/* Concentric teal circle */}
              <div className="w-12 h-12 rounded-full border border-[#249E98]/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#249E98]/50" />
                <svg className="w-5 h-5 text-[#249E98]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-[#249E98] leading-none block">25</span>
                <span className="text-[12px] text-[#A7A7A2] font-medium mt-1 block">Team Members</span>
              </div>
            </div>

            {/* Stat 4: 1000+ Reels */}
            <div className="flex items-center gap-4 md:px-6">
              {/* Concentric gold circle */}
              <div className="w-12 h-12 rounded-full border border-[#E9BF61]/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#E9BF61]/50" />
                <svg className="w-5 h-5 text-[#E9BF61]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-[#E9BF61] leading-none block">1000+</span>
                <span className="text-[12px] text-[#A7A7A2] font-medium mt-1 block">Reels Created / Month</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
