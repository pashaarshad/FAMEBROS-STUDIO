"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export const clientLogos = [
  { name: "Audi", src: "/clients-logo/Audi.webp" },
  { name: "Cadbury", src: "/clients-logo/Cadbury-logo.png" },
  { name: "Cello Writing", src: "/clients-logo/Cello Writing-logo.png" },
  { name: "Filmfare", src: "/clients-logo/Filmfare-logo.png" },
  { name: "Flipkart", src: "/clients-logo/Flipkart-logo.png" },
  { name: "Hip-hop", src: "/clients-logo/Hip-hop-logo.jpg" },
  { name: "Indian Idol", src: "/clients-logo/Indian Idol-logo.png" },
  { name: "JioMart", src: "/clients-logo/JioMart-logo.png" },
  { name: "Laughter Chefs", src: "/clients-logo/Laughter Chefs-logo.png" },
  { name: "Launch Control", src: "/clients-logo/Launch Control-logo.png" },
  { name: "Meta", src: "/clients-logo/Meta-Logo.png" },
  { name: "Netflix", src: "/clients-logo/Netflix-logo.webp" },
  { name: "Pro Govinda India", src: "/clients-logo/Pro Govinda India-logo.png" },
  { name: "Red Chillies Entertainment", src: "/clients-logo/Red Chillies Entertainment-logo.webp" },
  { name: "Samsung", src: "/clients-logo/Samsung-logo.png" },
  { name: "Baskin Robbins", src: "/clients-logo/baskin-robbins-logo.png" },
  { name: "Realme", src: "/clients-logo/realme_logo.png" }
];

const creatorHandles = [
  { handle: "bilalsayed", stat: "5M" },
  { handle: "taravibe_", stat: "42K" },
  { handle: "shree_jewellers", stat: "36K" },
  { handle: "famebros", stat: "600K" },
  { handle: "cadbury", stat: "2.5M" },
  { handle: "mikasingh", stat: "2.8M" }
];

export default function Hero() {
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
    <section className="relative min-h-screen bg-[#F4F4F6] pt-28 sm:pt-36 pb-12 overflow-hidden flex flex-col justify-between text-[#0A0A0C]">
      {/* Soft Background Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-[#8B5CF6]/10 via-[#3B82F6]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* Top Header Section */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Category Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="font-mono-custom text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] font-semibold text-[#333336] uppercase">
            SOCIAL MEDIA • CONTENT • PRODUCTION
          </span>
        </div>

        {/* High-Impact Centered Headline */}
        <h1 className="font-display font-black text-[42px] xs:text-[52px] sm:text-[72px] md:text-[84px] lg:text-[96px] leading-[0.98] tracking-[-0.04em] text-[#0A0A0C] uppercase mb-6 max-w-5xl">
          CONTENT THAT
          <br className="hidden sm:block" />
          <span className="inline-flex items-center gap-1 sm:gap-3 flex-wrap justify-center mt-1 sm:mt-2">
            <span>ST</span>
            <span className="inline-inline-flex items-center justify-center align-middle mx-[0.5px] relative -top-[0.03em]">
              <svg 
                className="w-[0.8em] h-[0.8em] inline-block text-[#0A0A0C]" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="11"
              >
                <circle cx="50" cy="50" r="41" />
                <line x1="20" y1="80" x2="80" y2="20" strokeWidth="11" strokeLinecap="round" />
              </svg>
            </span>
            <span>PS THE</span>
            <span className="bg-[#8B5CF6] text-white px-4 sm:px-8 py-1 sm:py-2.5 rounded-[28px] sm:rounded-[40px] inline-block shadow-lg tracking-normal font-extrabold normal-case sm:uppercase">
              SCROLL.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#55555C] text-sm sm:text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed mb-8 text-center">
          We create content that stops the scroll and gets your brand noticed. From reels and shoots to social media management, everything starts with your brand.
        </p>

        {/* Action Button & Rating */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-3.5 px-7 py-3.5 sm:px-8 sm:py-4 bg-[#0A0A0C] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#202025] hover:scale-105 active:scale-95 transition-all shadow-xl group"
          >
            <span className="w-7 h-7 rounded-full bg-white text-[#0A0A0C] flex items-center justify-center text-xs font-bold group-hover:translate-x-0.5 transition-transform">
              →
            </span>
            <span>Start growing</span>
          </Link>
          
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/5 px-4 py-2 rounded-full shadow-xs">
            <img 
              src="/google-reviews-png.png" 
              alt="Google 5.0 Rating" 
              className="h-6 sm:h-7 w-auto object-contain"
            />
            <span className="text-xs font-semibold text-gray-700">5.0 Star Rated Agency</span>
          </div>
        </div>

      </div>

      {/* Fan Cards Showcase Section */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-4">
        
        {/* Desktop Tilted Fan Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-4 gap-4 items-center justify-center py-6 px-4">
          
          {/* Card 1: Video Card (@bilalsayed) */}
          <div 
            onClick={() => handleCardClick(0)}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            className={`relative aspect-[9/16] rounded-[28px] overflow-hidden border border-black/10 shadow-2xl bg-black transform -rotate-8 -translate-y-2 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out cursor-pointer z-10 ${
              activeVideoIdx === 0 ? "scale-110 z-50 rotate-0 shadow-[0_20px_50px_rgba(0,0,0,0.4)]" : ""
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activeVideoIdx === 0 ? "opacity-0 pointer-events-none" : "opacity-90"
              }`}
              style={{ backgroundImage: `url('/vedios-hero/1st__poster.jpg')` }}
            />
            <video
              ref={(el) => { videoRefs.current[0] = el; }}
              src="/vedios-hero/1st_.mp4"
              loop={activeVideoIdx !== 0}
              muted={activeVideoIdx !== 0}
              controls={activeVideoIdx === 0}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            
            {/* Tag Badge */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 shadow-md">
              <span>bilalsayed</span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#3B82F6] flex items-center justify-center text-[9px] text-white">✓</span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center text-[10px]">
              {hoveredIdx === 0 || activeVideoIdx === 0 ? "||" : "▶"}
            </div>
          </div>

          {/* Card 2: Video Card (@famebrosstudio) */}
          <div 
            onClick={() => handleCardClick(1)}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            className={`relative aspect-[9/16] rounded-[28px] overflow-hidden border border-black/10 shadow-2xl bg-black transform -rotate-3 translate-y-3 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out cursor-pointer z-20 ${
              activeVideoIdx === 1 ? "scale-110 z-50 rotate-0 shadow-[0_20px_50px_rgba(0,0,0,0.4)]" : ""
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activeVideoIdx === 1 ? "opacity-0 pointer-events-none" : "opacity-90"
              }`}
              style={{ backgroundImage: `url('/vedios-hero/2nd_poster.jpg')` }}
            />
            <video
              ref={(el) => { videoRefs.current[1] = el; }}
              src="/vedios-hero/2nd.mp4"
              loop={activeVideoIdx !== 1}
              muted={activeVideoIdx !== 1}
              controls={activeVideoIdx === 1}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            
            {/* Tag Badge */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 shadow-md">
              <span>famebrosstudio</span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#3B82F6] flex items-center justify-center text-[9px] text-white">✓</span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center text-[10px]">
              {hoveredIdx === 1 || activeVideoIdx === 1 ? "||" : "▶"}
            </div>
          </div>

          {/* Card 3: Sky Blue Stats Card */}
          <div className="relative aspect-[9/16] rounded-[28px] p-6 bg-[#3B82F6] text-white shadow-2xl flex flex-col justify-between transform rotate-2 -translate-y-4 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-30 border border-white/20">
            {/* Top Avatars */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex -space-x-3 mb-3">
                <img src="/Sultan photos-with-png.png" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="/Bilal Sayed.png" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="/vedios-hero/1st__poster.jpg" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="/vedios-hero/2nd_poster.jpg" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
              </div>
              <span className="text-xs font-medium text-white/90 tracking-tight text-center">
                Creators we work with
              </span>
              <span className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight mt-1">
                50+
              </span>
            </div>

            {/* Bottom Handle Pills */}
            <div className="flex flex-col gap-2 pb-1">
              <div className="grid grid-cols-2 gap-2">
                {creatorHandles.map((item, i) => (
                  <div key={i} className="bg-white/20 backdrop-blur-md border border-white/25 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white flex items-center justify-between shadow-xs">
                    <span className="truncate">.{item.handle}</span>
                    <span className="text-white/80 font-normal text-[10px] ml-1">{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Video Card (@mikasingh) */}
          <div 
            onClick={() => handleCardClick(2)}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            className={`relative aspect-[9/16] rounded-[28px] overflow-hidden border border-black/10 shadow-2xl bg-black transform rotate-8 translate-y-1 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out cursor-pointer z-10 ${
              activeVideoIdx === 2 ? "scale-110 z-50 rotate-0 shadow-[0_20px_50px_rgba(0,0,0,0.4)]" : ""
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activeVideoIdx === 2 ? "opacity-0 pointer-events-none" : "opacity-90"
              }`}
              style={{ backgroundImage: `url('/vedios-hero/4th_poster.jpg')` }}
            />
            <video
              ref={(el) => { videoRefs.current[2] = el; }}
              src="/vedios-hero/4th.mp4"
              loop={activeVideoIdx !== 2}
              muted={activeVideoIdx !== 2}
              controls={activeVideoIdx === 2}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            
            {/* Tag Badge */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 shadow-md">
              <span>mikasingh</span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#3B82F6] flex items-center justify-center text-[9px] text-white">✓</span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center text-[10px]">
              {hoveredIdx === 2 || activeVideoIdx === 2 ? "||" : "▶"}
            </div>
          </div>

        </div>

        {/* Mobile 2x2 Tilted Grid Showcase (Visible on Mobile/Tablet) */}
        <div className="grid lg:hidden grid-cols-2 gap-3 sm:gap-5 py-4 max-w-lg mx-auto">
          
          {/* Mobile Card 1 */}
          <div 
            onClick={() => handleCardClick(0)}
            className="relative aspect-[9/15] rounded-[22px] overflow-hidden border border-black/10 shadow-xl bg-black transform -rotate-4 transition-all duration-300 active:scale-98"
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                activeVideoIdx === 0 ? "opacity-0 pointer-events-none" : "opacity-90"
              }`}
              style={{ backgroundImage: `url('/vedios-hero/1st__poster.jpg')` }}
            />
            <video
              ref={(el) => { if (!videoRefs.current[0]) videoRefs.current[0] = el; }}
              src="/vedios-hero/1st_.mp4"
              loop={activeVideoIdx !== 0}
              muted={activeVideoIdx !== 0}
              controls={activeVideoIdx === 0}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-semibold border border-white/10">
              <span>bilalsayed</span>
              <span className="w-3 h-3 rounded-full bg-[#3B82F6] flex items-center justify-center text-[7px] text-white">✓</span>
            </div>
            <div className="absolute bottom-3 right-3 z-20 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center text-[9px]">
              {activeVideoIdx === 0 ? "||" : "▶"}
            </div>
          </div>

          {/* Mobile Card 2 */}
          <div 
            onClick={() => handleCardClick(1)}
            className="relative aspect-[9/15] rounded-[22px] overflow-hidden border border-black/10 shadow-xl bg-black transform rotate-4 transition-all duration-300 active:scale-98"
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                activeVideoIdx === 1 ? "opacity-0 pointer-events-none" : "opacity-90"
              }`}
              style={{ backgroundImage: `url('/vedios-hero/2nd_poster.jpg')` }}
            />
            <video
              ref={(el) => { if (!videoRefs.current[1]) videoRefs.current[1] = el; }}
              src="/vedios-hero/2nd.mp4"
              loop={activeVideoIdx !== 1}
              muted={activeVideoIdx !== 1}
              controls={activeVideoIdx === 1}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-semibold border border-white/10">
              <span>famebrosstudio</span>
              <span className="w-3 h-3 rounded-full bg-[#3B82F6] flex items-center justify-center text-[7px] text-white">✓</span>
            </div>
            <div className="absolute bottom-3 right-3 z-20 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center text-[9px]">
              {activeVideoIdx === 1 ? "||" : "▶"}
            </div>
          </div>

          {/* Mobile Card 3: Sky Blue Stats Card */}
          <div className="relative aspect-[9/15] rounded-[22px] p-4 bg-[#3B82F6] text-white shadow-xl flex flex-col justify-between transform -rotate-3 border border-white/20">
            <div className="flex flex-col items-center pt-1">
              <div className="flex -space-x-2 mb-2">
                <img src="/Sultan photos-with-png.png" alt="Creator" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/Bilal Sayed.png" alt="Creator" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/vedios-hero/1st__poster.jpg" alt="Creator" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/vedios-hero/2nd_poster.jpg" alt="Creator" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              </div>
              <span className="text-[10px] font-medium text-white/90 text-center leading-tight">
                Creators we work with
              </span>
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-0.5">
                50+
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              {creatorHandles.slice(0, 4).map((item, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-2 py-0.5 text-[9px] font-semibold text-white flex items-center justify-between">
                  <span className="truncate">.{item.handle}</span>
                  <span className="text-white/80 font-normal text-[8px] ml-1">{item.stat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Card 4 */}
          <div 
            onClick={() => handleCardClick(2)}
            className="relative aspect-[9/15] rounded-[22px] overflow-hidden border border-black/10 shadow-xl bg-black transform rotate-3 transition-all duration-300 active:scale-98"
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                activeVideoIdx === 2 ? "opacity-0 pointer-events-none" : "opacity-90"
              }`}
              style={{ backgroundImage: `url('/vedios-hero/4th_poster.jpg')` }}
            />
            <video
              ref={(el) => { if (!videoRefs.current[2]) videoRefs.current[2] = el; }}
              src="/vedios-hero/4th.mp4"
              loop={activeVideoIdx !== 2}
              muted={activeVideoIdx !== 2}
              controls={activeVideoIdx === 2}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-semibold border border-white/10">
              <span>mikasingh</span>
              <span className="w-3 h-3 rounded-full bg-[#3B82F6] flex items-center justify-center text-[7px] text-white">✓</span>
            </div>
            <div className="absolute bottom-3 right-3 z-20 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center text-[9px]">
              {activeVideoIdx === 2 ? "||" : "▶"}
            </div>
          </div>

        </div>

      </div>

      {/* Trusted Brands Horizontal Marquee at Bottom */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 z-10">
        <div className="overflow-hidden relative">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono-custom text-[10px] sm:text-[11px] tracking-[0.2em] text-gray-500 font-semibold uppercase whitespace-nowrap">
              TRUSTED BY LEADING BRANDS & CREATORS
            </span>
            <div className="h-[1px] bg-black/10 flex-grow" />
          </div>
          
          <div className="w-full overflow-hidden relative py-2">
            <div className="flex animate-marquee gap-12 sm:gap-16 items-center">
              {/* Loop 1 */}
              {clientLogos.map((logo, idx) => {
                const isJioMart = logo.name === "JioMart";
                return (
                  <div key={`logo-1-${idx}`} className="flex-shrink-0 flex items-center justify-center w-24 sm:w-32 h-10 px-2">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`max-h-7 sm:max-h-9 max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 ${
                        isJioMart ? "scale-130 sm:scale-150" : ""
                      }`}
                      draggable={false}
                    />
                  </div>
                );
              })}
              {/* Loop 2 */}
              {clientLogos.map((logo, idx) => {
                const isJioMart = logo.name === "JioMart";
                return (
                  <div key={`logo-2-${idx}`} className="flex-shrink-0 flex items-center justify-center w-24 sm:w-32 h-10 px-2">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`max-h-7 sm:max-h-9 max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 ${
                        isJioMart ? "scale-130 sm:scale-150" : ""
                      }`}
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
