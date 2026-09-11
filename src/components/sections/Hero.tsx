"use client";

import { useState, useRef, useEffect } from "react";
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

const businessHeroCards = [
  {
    num: "01",
    quote: "Our restaurant sales grew like never before.",
    name: "Rahul Mehta",
    role: "Restaurant Owner",
    growth: "+240%",
    growthLabel: "Revenue Growth",
    img: "/vedios-hero/1st__poster.jpg",
    videoSrc: "/vedios-hero/1st_.mp4",
    color: "text-[#F59A57]"
  },
  {
    num: "02",
    quote: "More enquiries in 30 days than we got in 6 months.",
    name: "Neha Sharma",
    role: "Retail Business Owner",
    growth: "3.2X",
    growthLabel: "More Enquiries",
    img: "/vedios-hero/2nd_poster.jpg",
    videoSrc: "/vedios-hero/2nd.mp4",
    color: "text-[#249E98]"
  },
  {
    num: "03",
    quote: "Memberships increased consistently every month.",
    name: "Amit Verma",
    role: "Gym Owner",
    growth: "+180%",
    growthLabel: "Membership Growth",
    img: "/vedios-hero/3rd_poster.jpg",
    videoSrc: "/vedios-hero/3rd.mp4",
    color: "text-[#F59A57]"
  },
  {
    num: "04",
    quote: "We now get quality bookings every week.",
    name: "Karan Malhotra",
    role: "Resort Owner",
    growth: "+3.7X",
    growthLabel: "Bookings Increase",
    img: "/vedios-hero/4th_poster.jpg",
    videoSrc: "/vedios-hero/4th.mp4",
    color: "text-[#249E98]"
  }
];

export default function Hero() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [unmutedIdx, setUnmutedIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Autoplay all 4 videos simultaneously silently on mount
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {});
      }
    });
  }, []);

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
    setUnmutedIdx(idx);
    videoRefs.current.forEach((v, i) => {
      if (v) {
        v.muted = i !== idx;
        if (v.paused) v.play().catch(() => {});
      }
    });
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    setUnmutedIdx(null);
    videoRefs.current.forEach((v) => {
      if (v) {
        v.muted = true;
        if (v.paused) v.play().catch(() => {});
      }
    });
  };

  const handleCardClick = (idx: number) => {
    if (unmutedIdx === idx) {
      setUnmutedIdx(null);
      videoRefs.current.forEach((v) => {
        if (v) {
          v.muted = true;
          if (v.paused) v.play().catch(() => {});
        }
      });
    } else {
      setUnmutedIdx(idx);
      videoRefs.current.forEach((v, i) => {
        if (v) {
          v.muted = i !== idx;
          if (v.paused) v.play().catch(() => {});
        }
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#FAF9F6] pt-28 sm:pt-36 pb-12 overflow-hidden flex flex-col justify-between text-[#0A0A0C]">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-[-5%] w-[450px] sm:w-[600px] h-[450px] bg-[#F59A57]/12 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-[-5%] w-[450px] sm:w-[600px] h-[450px] bg-[#8B5CF6]/12 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Left Side Handwritten "Ideas People Impact" Accent */}
      <div className="absolute top-1/3 left-4 md:left-12 pointer-events-none z-10 hidden lg:block transform -rotate-12 select-none">
        <div className="flex flex-col items-start gap-0.5 text-left">
          <span className="font-display italic font-extrabold text-2xl md:text-3xl text-gray-700 tracking-tight leading-tight">
            Ideas
          </span>
          <span className="font-display italic font-extrabold text-2xl md:text-3xl text-gray-700 tracking-tight leading-tight">
            People
          </span>
          <span className="font-display italic font-extrabold text-2xl md:text-3xl text-gray-700 tracking-tight leading-tight">
            Impact
          </span>
          <div className="w-16 h-1 bg-[#F59A57] rounded-full mt-1.5 transform rotate-3" />
        </div>
      </div>

      {/* Main Top Header Section */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Eyebrow Badge with Flanking Horizontal Lines */}
        <div className="w-full flex items-center justify-center gap-4 mb-6 max-w-3xl">
          <div className="h-[1px] bg-black/10 flex-grow hidden xs:block" />
          <div className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 rounded-full bg-white border border-black/10 shadow-xs">
            <span className="font-mono-custom text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] font-extrabold text-[#F59A57] uppercase">
              MUMBAI &bull; GROWING BUSINESSES ACROSS INDIA
            </span>
          </div>
          <div className="h-[1px] bg-black/10 flex-grow hidden xs:block" />
        </div>

        {/* High-Impact Headline with Orange-to-Purple Gradient Highlight */}
        <h1 className="font-display font-black text-[30px] xs:text-[42px] sm:text-[68px] md:text-[80px] lg:text-[92px] leading-[1.02] tracking-[-0.04em] text-[#0A0A0C] uppercase mb-6 max-w-5xl">
          WE HELP BUSINESSES
          <br className="hidden sm:block" />
          <span className="inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center mt-1 sm:mt-2">
            <span className="inline-flex items-center whitespace-nowrap">
              <span>GR</span>
              <span className="inline-flex items-center justify-center align-middle mx-[0.02em] relative -top-[0.03em]">
                <svg 
                  className="w-[0.82em] h-[0.82em] inline-block" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                >
                  <circle cx="50" cy="50" r="41" stroke="#0A0A0C" strokeWidth="11" />
                  <path 
                    d="M 32 68 L 68 32 M 44 32 L 68 32 L 68 56" 
                    stroke="#F59A57" 
                    strokeWidth="12" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </span>
              <span>W</span>
            </span>
            <span>BEYOND THEIR</span>
            <span className="bg-gradient-to-r from-[#F59A57] via-[#8B5CF6] to-[#7C3AED] text-white px-4 sm:px-10 py-1 sm:py-3 rounded-[32px] sm:rounded-[50px] inline-block shadow-xl tracking-normal font-extrabold normal-case sm:uppercase">
              EXPECTATIONS.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#55555C] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-8 text-center">
          We build strong brands that attract the right audience, create trust and generate consistent business growth through social media, content and strategy.
        </p>


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-3.5 px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-[#0A0A0C] rounded-full text-sm sm:text-base font-extrabold hover:scale-105 active:scale-95 transition-all shadow-[0_8px_25px_rgba(245,154,87,0.35)] group"
          >
            <span className="w-7 h-7 rounded-full bg-[#0A0A0C] text-white flex items-center justify-center text-xs font-bold group-hover:translate-x-0.5 transition-transform">
              →
            </span>
            <span>Grow My Business</span>
          </Link>
          
          <Link
            href="#what-our-clients-say"
            className="inline-flex items-center justify-center gap-3.5 px-8 py-4 bg-white border border-black/15 text-[#0A0A0C] rounded-full text-sm sm:text-base font-extrabold hover:border-[#F59A57] hover:bg-[#FAF6F0] hover:scale-105 active:scale-95 transition-all shadow-md group"
          >
            <span className="w-7 h-7 rounded-full bg-[#FAF6F0] border border-black/10 flex items-center justify-center text-[#F59A57] font-bold text-xs">
              ▶
            </span>
            <span>What Our Clients Say</span>
          </Link>
        </div>

      </div>

      {/* 4-Video Simultaneous Autoplay Fan Showcase */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-2">
        
        {/* Flowing multi-color ambient aura behind video cards */}
        <div className="absolute inset-0 max-w-5xl mx-auto rounded-full bg-gradient-to-r from-[#F59A57]/30 via-[#F472B6]/30 to-[#8B5CF6]/30 blur-[90px] pointer-events-none z-0 transform scale-110" />
        
        {/* Desktop Tilted Fan Grid of 4 Client Videos with Stable Event Handlers */}
        <div className="hidden lg:grid grid-cols-4 gap-4 items-center justify-center py-6 px-2">
          {businessHeroCards.map((card, idx) => {
            const isUnmuted = unmutedIdx === idx;
            const isHovered = hoveredIdx === idx;
            
            const tiltClasses = [
              "transform -rotate-8 -translate-y-2",
              "transform -rotate-3 translate-y-3",
              "transform rotate-2 -translate-y-3",
              "transform rotate-8 translate-y-2"
            ];

            const zIndexClass = isUnmuted ? "z-50" : isHovered ? "z-40" : idx === 1 ? "z-30" : idx === 2 ? "z-20" : "z-10";

            return (
              <div 
                key={card.num}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCardClick(idx)}
                className={`relative cursor-pointer transition-all duration-300 ${zIndexClass}`}
              >
                <div 
                  className={`relative aspect-[9/16] rounded-[28px] overflow-hidden border border-black/10 shadow-2xl bg-black ${tiltClasses[idx]} transition-all duration-300 ease-out ${
                    isUnmuted 
                      ? "scale-108 rotate-0 shadow-[0_25px_60px_rgba(0,0,0,0.45)] ring-2 ring-[#F59A57]" 
                      : isHovered 
                        ? "scale-105 rotate-0 shadow-[0_20px_45px_rgba(0,0,0,0.35)]" 
                        : ""
                  }`}
                >
                  {/* Autoplay Video Element (All 4 play simultaneously) */}
                  <video
                    ref={(el) => { videoRefs.current[idx] = el; }}
                    src={card.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${
                    isUnmuted ? "opacity-30" : "opacity-100"
                  }`} />
                  
                  {/* Sound & Play Toggle Icon */}
                  <div className={`absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center text-[10px] font-bold border border-white/20 transition-transform ${
                    isHovered || isUnmuted ? "scale-110 bg-[#F59A57] text-black border-[#F59A57]" : ""
                  }`}>
                    {isUnmuted ? "🔊" : "🔇"}
                  </div>

                  {/* Client Info & Growth Pill Overlay */}
                  <div className={`absolute bottom-4 left-4 right-14 z-20 text-white transition-opacity duration-300 ${
                    isUnmuted ? "opacity-90" : "opacity-100"
                  }`}>
                    <p className="text-[10px] leading-tight text-white/90 italic mb-2 line-clamp-2">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                    <div className="border-t border-white/20 pt-1.5 mb-1">
                      <span className="text-[11px] font-bold text-white block leading-none">{card.name}</span>
                      <span className="text-[9px] text-white/70 block mt-0.5">{card.role}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15">
                      <span className={`text-[12px] font-extrabold block leading-none ${card.color}`}>{card.growth}</span>
                      <span className="text-[8px] text-white/80 font-medium block leading-none">{card.growthLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile 2x2 Tilted Grid Showcase */}
        <div className="grid lg:hidden grid-cols-2 gap-3 sm:gap-5 py-4 max-w-lg mx-auto">
          {businessHeroCards.map((card, idx) => {
            const isUnmuted = unmutedIdx === idx;
            const mobileTilts = ["-rotate-4", "rotate-4", "-rotate-3", "rotate-3"];

            return (
              <div 
                key={`mobile-${card.num}`}
                onClick={() => handleCardClick(idx)}
                className={`relative aspect-[9/15] rounded-[22px] overflow-hidden border border-black/10 shadow-xl bg-black transform ${mobileTilts[idx]} transition-all duration-300 active:scale-98 cursor-pointer`}
              >
                <video
                  ref={(el) => { if (!videoRefs.current[idx]) videoRefs.current[idx] = el; }}
                  src={card.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute bottom-3 right-3 z-20 w-6 h-6 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center text-[9px]">
                  {isUnmuted ? "🔊" : "🔇"}
                </div>

                <div className="absolute bottom-3 left-3 right-10 z-20 text-white">
                  <span className="text-[10px] font-bold text-white block leading-none truncate">{card.name}</span>
                  <span className={`text-[11px] font-extrabold block leading-none mt-1 ${card.color}`}>{card.growth}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Trusted Brands Horizontal Marquee at Bottom */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 z-10">
        <div className="overflow-hidden relative">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono-custom text-[10px] sm:text-[11px] tracking-[0.2em] text-gray-500 font-semibold uppercase whitespace-nowrap">
              TRUSTED BY LEADING BRANDS & BUSINESSES ACROSS INDIA
            </span>
            <div className="h-[1px] bg-black/10 flex-grow" />
          </div>
          
          <div className="w-full overflow-hidden relative py-4">
            <div className="flex animate-marquee gap-14 sm:gap-20 items-center">
              {/* Loop 1 */}
              {clientLogos.map((logo, idx) => {
                const isJioMart = logo.name === "JioMart";
                const isRealme = logo.name === "Realme";
                return (
                  <div key={`logo-1-${idx}`} className="flex-shrink-0 flex items-center justify-center w-36 sm:w-48 h-16 sm:h-20 px-3">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`max-h-11 sm:max-h-15 max-w-full object-contain opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 ${
                        isJioMart ? "scale-135 sm:scale-155" : ""
                      }`}
                      style={isRealme ? {
                        filter: "invert(1) sepia(1) saturate(5) hue-rotate(340deg) brightness(1.2)"
                      } : undefined}
                      draggable={false}
                    />
                  </div>
                );
              })}
              {/* Loop 2 */}
              {clientLogos.map((logo, idx) => {
                const isJioMart = logo.name === "JioMart";
                const isRealme = logo.name === "Realme";
                return (
                  <div key={`logo-2-${idx}`} className="flex-shrink-0 flex items-center justify-center w-36 sm:w-48 h-16 sm:h-20 px-3">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`max-h-11 sm:max-h-15 max-w-full object-contain opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 ${
                        isJioMart ? "scale-135 sm:scale-155" : ""
                      }`}
                      style={isRealme ? {
                        filter: "invert(1) sepia(1) saturate(5) hue-rotate(340deg) brightness(1.2)"
                      } : undefined}
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
