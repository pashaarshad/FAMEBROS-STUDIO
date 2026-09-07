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
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-[#8B5CF6]/10 via-[#F59A57]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* Top Header Section */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="font-mono-custom text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] font-bold text-[#F59A57] uppercase">
            MUMBAI - GROWING BUSINESSES ACROSS INDIA
          </span>
        </div>

        {/* High-Impact Centered Headline with Purple SCROLL Bubble Highlight */}
        <h1 className="font-display font-black text-[38px] xs:text-[48px] sm:text-[68px] md:text-[80px] lg:text-[92px] leading-[0.98] tracking-[-0.04em] text-[#0A0A0C] uppercase mb-6 max-w-5xl">
          WE HELP BUSINESSES
          <br className="hidden sm:block" />
          <span className="inline-flex items-center gap-1.5 sm:gap-3 flex-wrap justify-center mt-1 sm:mt-2">
            <span>GR</span>
            <span className="inline-flex items-center justify-center align-middle mx-[0.5px] relative -top-[0.03em]">
              <svg 
                className="w-[0.82em] h-[0.82em] inline-block" 
                viewBox="0 0 100 100" 
                fill="none" 
              >
                <circle cx="50" cy="50" r="41" stroke="#0A0A0C" strokeWidth="11" />
                {/* Bold upward growth arrow */}
                <path 
                  d="M 32 68 L 68 32 M 44 32 L 68 32 L 68 56" 
                  stroke="#F59A57" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </span>
            <span>W BEYOND THEIR</span>
            <span className="bg-[#8B5CF6] text-white px-4 sm:px-8 py-1 sm:py-2.5 rounded-[28px] sm:rounded-[40px] inline-block shadow-lg tracking-normal font-extrabold normal-case sm:uppercase">
              EXPECTATIONS.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#55555C] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-8 text-center">
          We build strong brands that attract the right audience, create trust and generate consistent business growth through social media, content and strategy.
        </p>

        {/* Action Button & Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-3.5 px-7 py-3.5 sm:px-8 sm:py-4 bg-[#0A0A0C] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#202025] hover:scale-105 active:scale-95 transition-all shadow-xl group"
          >
            <span className="w-7 h-7 rounded-full bg-white text-[#0A0A0C] flex items-center justify-center text-xs font-bold group-hover:translate-x-0.5 transition-transform">
              →
            </span>
            <span>Grow My Business</span>
          </Link>
          
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-black/10 px-4 py-2.5 rounded-full shadow-xs">
            <img 
              src="/google-reviews-png.png" 
              alt="Google 5.0 Rating" 
              className="h-6 sm:h-7 w-auto object-contain"
            />
            <span className="text-xs font-bold text-gray-800">5.0 Star Rated Agency</span>
          </div>
        </div>

      </div>

      {/* 4-Video Fan Cards Showcase */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-2">
        
        {/* Desktop Tilted Fan Grid of 4 Client Videos */}
        <div className="hidden lg:grid grid-cols-4 gap-5 items-center justify-center py-6 px-2">
          {businessHeroCards.map((card, idx) => {
            const isActive = activeVideoIdx === idx;
            const isHovered = hoveredIdx === idx;
            
            // Rotation tilts for the 4 cards
            const tiltClasses = [
              "transform -rotate-8 -translate-y-2",
              "transform -rotate-3 translate-y-3",
              "transform rotate-2 -translate-y-3",
              "transform rotate-8 translate-y-2"
            ];

            return (
              <div 
                key={card.num}
                onClick={() => handleCardClick(idx)}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className={`relative aspect-[9/16] rounded-[28px] overflow-hidden border border-black/10 shadow-2xl bg-black ${tiltClasses[idx]} hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out cursor-pointer z-10 ${
                  isActive ? "scale-110 z-50 rotate-0 shadow-[0_25px_60px_rgba(0,0,0,0.45)]" : ""
                }`}
              >
                {/* Poster Background */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-90"
                  }`}
                  style={{ backgroundImage: `url('${card.img}')` }}
                />

                {/* Video Element */}
                <video
                  ref={(el) => { videoRefs.current[idx] = el; }}
                  src={card.videoSrc}
                  loop={!isActive}
                  muted={!isActive}
                  controls={isActive}
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`} />
                
                {/* Play/Pause icon button */}
                <div className={`absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center text-[10px] font-bold border border-white/20 transition-transform ${
                  isHovered ? "scale-110 bg-[#F59A57] text-black border-[#F59A57]" : ""
                }`}>
                  {isActive || isHovered ? "||" : "▶"}
                </div>

                {/* Client Info & Growth Pill Overlay */}
                <div className={`absolute bottom-4 left-4 right-14 z-20 text-white transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
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
            );
          })}
        </div>

        {/* Mobile 2x2 Tilted Grid Showcase */}
        <div className="grid lg:hidden grid-cols-2 gap-3 sm:gap-5 py-4 max-w-lg mx-auto">
          {businessHeroCards.map((card, idx) => {
            const isActive = activeVideoIdx === idx;
            const mobileTilts = ["-rotate-4", "rotate-4", "-rotate-3", "rotate-3"];

            return (
              <div 
                key={`mobile-${card.num}`}
                onClick={() => handleCardClick(idx)}
                className={`relative aspect-[9/15] rounded-[22px] overflow-hidden border border-black/10 shadow-xl bg-black transform ${mobileTilts[idx]} transition-all duration-300 active:scale-98`}
              >
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-90"
                  }`}
                  style={{ backgroundImage: `url('${card.img}')` }}
                />
                <video
                  ref={(el) => { if (!videoRefs.current[idx]) videoRefs.current[idx] = el; }}
                  src={card.videoSrc}
                  loop={!isActive}
                  muted={!isActive}
                  controls={isActive}
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute bottom-3 right-3 z-20 w-6 h-6 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center text-[9px]">
                  {isActive ? "||" : "▶"}
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
          
          <div className="w-full overflow-hidden relative py-2">
            <div className="flex animate-marquee gap-12 sm:gap-16 items-center">
              {/* Loop 1 */}
              {clientLogos.map((logo, idx) => {
                const isJioMart = logo.name === "JioMart";
                const isRealme = logo.name === "Realme";
                return (
                  <div key={`logo-1-${idx}`} className="flex-shrink-0 flex items-center justify-center w-24 sm:w-32 h-10 px-2">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`max-h-7 sm:max-h-9 max-w-full object-contain opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 ${
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
                  <div key={`logo-2-${idx}`} className="flex-shrink-0 flex items-center justify-center w-24 sm:w-32 h-10 px-2">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`max-h-7 sm:max-h-9 max-w-full object-contain opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 ${
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
