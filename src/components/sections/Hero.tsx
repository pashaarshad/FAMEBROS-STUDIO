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
    videoSrc: "", // Future video path (e.g. "/videos/strategy.mp4")
  },
  {
    num: "02",
    label: "CONTENT",
    sub: "That Connects",
    bgPosition: "50% 10%",
    offset: "-translate-y-8",
    defaultZ: "z-30",
    videoSrc: "", // Future video path (e.g. "/videos/content.mp4")
  },
  {
    num: "03",
    label: "INFLUENCE",
    sub: "That Converts",
    bgPosition: "80% 10%",
    offset: "translate-y-6",
    defaultZ: "z-20",
    videoSrc: "", // Future video path (e.g. "/videos/influence.mp4")
  },
  {
    num: "04",
    label: "GROWTH",
    sub: "That Lasts",
    bgPosition: "95% 10%",
    offset: "-translate-y-4",
    defaultZ: "z-10",
    videoSrc: "", // Future video path (e.g. "/videos/growth.mp4")
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
