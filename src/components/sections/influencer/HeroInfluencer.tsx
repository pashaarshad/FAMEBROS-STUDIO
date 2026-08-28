"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const heroCards = [
  {
    num: "01",
    label: "STRATEGY",
    sub: "That Builds",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=300&q=80",
    offset: "translate-y-6",
    defaultZ: "z-10",
    videoSrc: "/vedios/influencer shoot/Video-11217.mp4", 
  },
  {
    num: "02",
    label: "CONTENT",
    sub: "That Connects",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
    offset: "-translate-y-8",
    defaultZ: "z-30",
    videoSrc: "/vedios/influencer shoot/Video-15470.mp4", 
  },
  {
    num: "03",
    label: "INFLUENCE",
    sub: "That Converts",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=300&q=80",
    offset: "translate-y-6",
    defaultZ: "z-20",
    videoSrc: "/vedios/influencer shoot/Video-42780.mp4", 
  },
  {
    num: "04",
    label: "GROWTH",
    sub: "That Lasts",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=300&q=80",
    offset: "-translate-y-4",
    defaultZ: "z-10",
    videoSrc: "/vedios/influencer shoot/Video-49284.mp4", 
  },
];

export default function HeroInfluencer() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeVideoIdx, setActiveVideoIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (idx: number) => {
    if (activeVideoIdx === idx) return; 
    setHoveredIdx(idx);
    const video = videoRefs.current[idx];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (idx: number) => {
    if (activeVideoIdx === idx) return; 
    setHoveredIdx(null);
    const video = videoRefs.current[idx];
    if (video) {
      video.pause();
    }
  };

  const handleCardClick = (idx: number) => {
    if (activeVideoIdx === idx) {
      const video = videoRefs.current[idx];
      if (video) {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.muted = true;
          setActiveVideoIdx(null);
          setHoveredIdx(null);
        }
      }
      return;
    }

    if (activeVideoIdx !== null) {
      const prevVideo = videoRefs.current[activeVideoIdx];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.muted = true;
      }
    }

    setActiveVideoIdx(idx);
    setHoveredIdx(idx);

    setTimeout(() => {
      const video = videoRefs.current[idx];
      if (video) {
        video.muted = false;
        video.play().catch(() => {});
      }
    }, 50);
  };

  return (
    <section 
      className="relative min-h-screen bg-[#0A0A0C] pt-32 pb-12 overflow-hidden flex flex-col justify-between text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 12, 0.45), rgba(10, 10, 12, 0.95)), url('/bg-hero.png')`
      }}
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="65" cy="50" r="45" stroke="#F59A57" strokeWidth="0.08" fill="none" strokeDasharray="1 1" />
          <circle cx="65" cy="50" r="35" stroke="#F59A57" strokeWidth="0.08" fill="none" />
          <circle cx="65" cy="50" r="25" stroke="#249E98" strokeWidth="0.08" fill="none" strokeDasharray="2 1" />
          <path d="M 65 15 A 35 35 0 0 1 100 50" stroke="#F59A57" strokeWidth="0.2" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center relative z-10 flex-1 my-auto">
        <div className="flex flex-col justify-center">
          {/* Google Reviews Trust Badge */}
          <div className="inline-flex items-center gap-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-3 pr-5 mb-8 self-start hover:border-[#E9BF61]/50 hover:bg-black/90 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group relative overflow-hidden">
            {/* Colorful vibrant left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#E9BF61] to-[#F59A57]" />
            
            {/* Laurel Wreath Graphic with Rating */}
            <div className="relative flex flex-col items-center justify-center w-14 h-14 flex-shrink-0">
              <svg className="absolute inset-0 w-full h-full text-[#E9BF61]" fill="currentColor" viewBox="0 0 100 100">
                <path d="M35 50c-2.3-5-2.5-10.7-.7-16.1.5-1.5 1.5-2.3 2.5-1.8.9.5.9 1.8.5 3.3-1.4 4.5-1.2 9.3.7 13.5.7 1.5.5 2.8-.5 3.3-.9.5-2-.2-2.5-2.2z" />
                <path d="M38 38c-3.1-4.5-4.1-10.2-2.8-15.8.4-1.5 1.4-2.1 2.3-1.5.9.6.7 1.9.3 3.4-1.1 4.9-.3 10.1 2.3 14.1.8 1.4.5 2.7-.4 3.1-.9.5-1.9-.1-2.4-1.8z" />
                <path d="M43 28C41 23.3 41 17.6 43 12c.5-1.5 1.5-1.9 2.4-1.3.8.6.6 1.9.1 3.4-1.8 4.7-1.8 9.9 0 13.9.8 1.4.4 2.7-.5 3.1-.9.4-1.9-.3-2.4-2z" />
                <path d="M34 62c-1.3-5.3-1-11 1.1-16 .6-1.5 1.6-2 2.5-1.5.9.6.8 1.9.2 3.4-1.8 4.4-2.1 9.3-.9 13.5.4 1.5.1 2.8-.9 3.2-.9.5-1.9-.1-2.4-2z" />
                <path d="M36 74c-.3-5.5.9-11.1 3.6-15.7.7-1.4 1.8-1.8 2.6-1.2.8.6.6 1.9-.1 3.4-2.3 4-3.3 9-2.3 13.3.4 1.5-.1 2.8-1 3.1-.9.4-1.9-.2-2.3-2.1z" />
                <path d="M65 50c2.3-5 2.5-10.7.7-16.1-.5-1.5-1.5-2.3-2.5-1.8-.9.5-.9 1.8-.5 3.3 1.4 4.5 1.2 9.3-.7 13.5-.7 1.5-.5 2.8.5 3.3.9.5 2-.2 2.5-2.2z" />
                <path d="M62 38c3.1-4.5 4.1-10.2 2.8-15.8-.4-1.5-1.4-2.1-2.3-1.5-.9.6-.7 1.9-.3 3.4 1.1 4.9.3 10.1-2.3 14.1-.8 1.4-.5 2.7.4 3.1.9.5 1.9-.1 2.4-1.8z" />
                <path d="M57 28c2-4.7 2-10.4 0-16-.5-1.5-1.5-1.9-2.4-1.3-.8.6-.6 1.9-.1 3.4 1.8 4.7 1.8 9.9 0 13.9-.8 1.4-.4 2.7.5 3.1.9.4 1.9-.3 2.4-2z" />
                <path d="M66 62c1.3-5.3 1-11-1.1-16-.6-1.5-1.6-2-2.5-1.5-.9.6-.8 1.9-.2 3.4 1.8 4.4 2.1 9.3.9 13.5-.4 1.5-.1 2.8.9 3.2.9.5 1.9-.1 2.4-2z" />
                <path d="M64 74c.3-5.5-.9-11.1-3.6-15.7-.7-1.4-1.8-1.8-2.6-1.2-.8.6-.6 1.9.1 3.4 2.3 4 3.3 9 2.3 13.3-.4 1.5.1 2.8 1 3.1.9.4 1.9-.2 2.3-2.1z" />
              </svg>
              
              <div className="flex flex-col items-center justify-center relative z-10 select-none -mt-1">
                <span className="text-[20px] font-black text-white leading-none">5</span>
                
                {/* 5 gold vector stars directly below */}
                <div className="flex gap-[1px] mt-0.5 leading-none">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2.5 h-2.5 text-[#E9BF61]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating Details text */}
            <div className="flex flex-col items-start justify-center pl-1">
              <span className="text-[13px] font-bold text-white leading-tight">
                13 reviews on Google Maps
              </span>
              <span className="text-[9px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">
                Famebros Studio LLP · 5.0 Rating
              </span>
            </div>
          </div>

          <p className="font-mono-custom text-[11px] tracking-[0.2em] text-[#F59A57] font-bold uppercase mb-6">
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
            <Link 
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#F59A57] text-[#050505] rounded-full text-[15px] font-bold hover:bg-[#FF8A3D] hover:-translate-y-[2px] transition-all shadow-[0_4px_20px_rgba(245,154,87,0.15)]"
            >
              Start a Conversation 
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#F59A57] font-bold text-xs">
                →
              </span>
            </Link>
            <Link 
              href="#work"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white rounded-full text-[15px] font-bold hover:border-[#F59A57] hover:-translate-y-[2px] transition-all bg-white/5"
            >
              See Our Work
              <span className="w-5 h-5 rounded-full border border-white/45 flex items-center justify-center text-white text-[9px]">
                ▶
              </span>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end items-center w-full">
          <div className="flex items-center justify-center gap-0 relative w-full lg:w-auto">
            {heroCards.map((card, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;
              const isActive = activeVideoIdx === idx;
              
              let zClass = "z-10";
              if (isActive) {
                zClass = "z-50";
              } else if (isHovered) {
                zClass = "z-40";
              } else if (idx === 1) {
                zClass = "z-30";
              } else if (idx === 2) {
                zClass = "z-20";
              }

              let styleClass = "border-white/10 opacity-70";
              if (isActive) {
                styleClass = "border-[#F59A57] scale-130 opacity-100 shadow-[0_12px_60px_rgba(245,154,87,0.55)]";
              } else if (isHovered) {
                styleClass = "border-[#F59A57] scale-118 opacity-100 shadow-[0_6px_35px_rgba(245,154,87,0.35)]";
              } else if (isAnyHovered) {
                styleClass = "border-white/5 opacity-30 scale-95 blur-[0.5px]";
              }

              const cardWidth = card.num === "02" 
                ? "w-[160px] md:w-[195px]" 
                : "w-[145px] md:w-[175px]";

              const displayClass = idx === 3 ? "hidden md:block" : "";

              return (
                <div
                  key={card.num}
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  className={`${cardWidth} aspect-[9/16] rounded-2xl border overflow-hidden relative ${card.offset} ${zClass} ${styleClass} transition-all duration-500 ease-out bg-gradient-to-b from-[#1C1C21] to-[#050505] shadow-lg cursor-pointer first:ml-0 -ml-8 ${displayClass}`}
                >
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                    style={{ 
                      backgroundImage: `url('${card.img}')`
                    }} 
                  />

                  {card.videoSrc && (
                    <video
                      ref={(el) => { videoRefs.current[idx] = el; }}
                      src={card.videoSrc}
                      loop={!isActive}
                      muted={!isActive}
                      controls={isActive}
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? "z-20 opacity-100" : "z-10 opacity-0 group-hover:opacity-100 pointer-events-none"}`}
                    />
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none z-0" : "z-15 opacity-100"}`} />

                  {card.num === "02" && !isAnyHovered && !isActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-11 h-11 rounded-full border border-white/50 bg-white/10 flex items-center justify-center text-white text-xs pl-0.5 backdrop-blur-sm shadow-md">
                        ▶
                      </div>
                    </div>
                  )}

                  {isHovered && !isActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full border border-white/80 bg-white/20 flex items-center justify-center text-white text-sm pl-0.5 backdrop-blur-md shadow-lg scale-110">
                        ▶
                      </div>
                    </div>
                  )}

                  <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${isActive ? "opacity-0 pointer-events-none z-0" : "z-20 opacity-100"}`}>
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

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 mt-8 z-10">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono-custom text-[10px] tracking-[0.2em] text-[#6E716F] uppercase whitespace-nowrap">
              TRUSTED BY BRANDS ACROSS INDIA
            </span>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12 opacity-80 transition-opacity duration-300">
            <span className="font-serif text-[18px] tracking-[0.15em] font-light text-white italic">
              PRESENCE
            </span>
            <div className="flex flex-col items-center leading-none text-center">
              <span className="font-mono text-[7px] tracking-widest text-white/80">THE BOMBAY</span>
              <span className="font-sans font-black text-[15px] tracking-wider text-white">BRONX</span>
            </div>
            <span className="font-serif font-semibold text-[22px] tracking-tight text-white">
              HK
            </span>
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
              <span className="font-sans text-[7px] tracking-[0.2em] font-bold text-white pl-0.5">MERAKI</span>
            </div>
            <div className="flex items-center gap-1.5 font-sans font-semibold text-[17px] text-white">
              <span>F</span>
              <div className="w-[1px] h-4 bg-white/20" />
              <span className="text-[12px] font-normal tracking-widest">BAR</span>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-sans font-light text-[18px] text-white">theka</span>
              <span className="font-mono text-[6px] tracking-widest text-[#F59A57]">COFFEE</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/5 p-5 mt-6 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-px md:divide-x divide-white/10">
            <div className="flex items-center gap-4 md:px-6">
              <div className="w-12 h-12 rounded-full border border-[#E9BF61]/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#E9BF61]/50" />
                <svg className="w-5 h-5 text-[#E9BF61]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.772-.564-.373-1.81.588-1.81h4.906a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-[#E9BF61] leading-none block">6+</span>
                <span className="text-[12px] text-white/75 font-medium mt-1 block">Years of Experience</span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:px-6">
              <div className="w-12 h-12 rounded-full border border-[#249E98]/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#249E98]/50" />
                <svg className="w-5 h-5 text-[#249E98]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-[#249E98] leading-none block">50+</span>
                <span className="text-[12px] text-white/75 font-medium mt-1 block">Brands Partnered</span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:px-6">
              <div className="w-12 h-12 rounded-full border border-[#249E98]/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#249E98]/50" />
                <svg className="w-5 h-5 text-[#249E98]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-[#249E98] leading-none block">25</span>
                <span className="text-[12px] text-white/75 font-medium mt-1 block">Team Members</span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:px-6">
              <div className="w-12 h-12 rounded-full border border-[#E9BF61]/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#E9BF61]/50" />
                <svg className="w-5 h-5 text-[#E9BF61]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-[#E9BF61] leading-none block">1000+</span>
                <span className="text-[12px] text-white/75 font-medium mt-1 block">Reels Created / Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
