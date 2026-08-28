"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const businessHeroCards = [
  {
    num: "01",
    quote: "Our restaurant sales grew like never before.",
    name: "Rahul Mehta",
    role: "Restaurant Owner",
    growth: "+240%",
    growthLabel: "Revenue Growth",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=300&q=80",
    videoSrc: "/vedios/business client testimonial/Video-37410.mp4",
    color: "text-[#F59A57]"
  },
  {
    num: "02",
    quote: "More enquiries in 30 days than we got in 6 months.",
    name: "Neha Sharma",
    role: "Retail Business Owner",
    growth: "3.2X",
    growthLabel: "More Enquiries",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    videoSrc: "/vedios/business client testimonial/Video-4099.mp4",
    color: "text-[#249E98]"
  },
  {
    num: "03",
    quote: "Memberships increased consistently every month.",
    name: "Amit Verma",
    role: "Gym Owner",
    growth: "+180%",
    growthLabel: "Membership Growth",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    videoSrc: "/vedios/business client testimonial/Video-41182.mp4",
    color: "text-[#F59A57]"
  },
  {
    num: "04",
    quote: "We now get quality bookings every week.",
    name: "Karan Malhotra",
    role: "Resort Owner",
    growth: "+3.7X",
    growthLabel: "Bookings Increase",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    videoSrc: "/vedios/business client testimonial/Video-58243.mp4",
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
    <section 
      className="relative min-h-screen bg-[#0A0A0C] pt-32 pb-12 overflow-hidden flex flex-col justify-between text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 12, 0.45), rgba(10, 10, 12, 0.95)), url('/bg-hero.png')`
      }}
    >
      {/* Premium ambient branding glows & sweeps */}
      <div className="absolute left-[-10%] top-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-tr from-[#DC2626]/20 via-[#FF3B30]/12 to-[#F59A57]/8 blur-[130px] pointer-events-none z-0" />
      <div className="absolute right-[-10%] bottom-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-bl from-[#249E98]/12 via-[#DC2626]/10 to-[#F59A57]/8 blur-[130px] pointer-events-none z-0" />
      
      {/* Subtle diagonal branding light sweep across the section background */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(135deg, #DC2626 0%, transparent 60%, #F59A57 100%)`
        }}
      />

      <div className="absolute right-[-10%] top-[20%] w-[80%] h-[60%] pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59A57" stopOpacity="0" />
              <stop offset="50%" stopColor="#F59A57" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#249E98" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#249E98" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          <path d="M 0 100 L 800 100 M 0 200 L 800 200 M 0 300 L 800 300" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          <path d="M 200 0 L 200 400 M 400 0 L 400 400 M 600 0 L 600 400" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          {/* Main rising curve graph */}
          <path 
            d="M -50 350 Q 150 340, 250 280 T 450 180 T 650 110 T 850 50" 
            stroke="url(#glowGrad)" 
            strokeWidth="4" 
            className="blur-[4px]"
          />
          <path 
            d="M -50 350 Q 150 340, 250 280 T 450 180 T 650 110 T 850 50" 
            stroke="#F59A57" 
            strokeWidth="1.5" 
          />
        </svg>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center relative z-10 flex-1 my-auto">
        
        {/* Left Side Info */}
        <div className="flex flex-col justify-center">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] text-[#F59A57] font-bold uppercase mb-6">
            MUMBAI - GROWING BUSINESSES ACROSS INDIA
          </p>
          
          <h1 className="font-display font-extrabold text-white leading-[1.08] tracking-[-0.03em] mb-6 text-[44px] md:text-[56px] lg:text-[66px]">
            We help businesses<br />
            <span className="text-[#F59A57]">grow</span> beyond<br />
            their <span className="text-[#249E98]">expectations.</span>
          </h1>

          <p className="text-[#A7A7A2] text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            We build strong brands that attract the right audience, create trust and generate consistent business growth through social media, content and strategy.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#F59A57] text-[#050505] rounded-lg text-[15px] font-bold hover:bg-[#FF8A3D] hover:-translate-y-[2px] transition-all shadow-[0_4px_20px_rgba(245,154,87,0.25)]"
              >
                Grow My Business
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#F59A57] font-bold text-xs">
                  →
                </span>
              </Link>
              <Link 
                href="#case-studies"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white rounded-lg text-[15px] font-bold hover:border-[#F59A57] hover:-translate-y-[2px] transition-all bg-white/5"
              >
                See Case Studies
                <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-white text-[9px]">
                  ▶
                </span>
              </Link>
            </div>

            {/* Mobile-only trust badge */}
            <div className="lg:hidden">
              <img 
                src="/google-reviews-png.png" 
                alt="Google 5.0 Rating 13 Google Reviews" 
                className="w-[180px] xs:w-[200px] h-auto drop-shadow-[0_8px_20px_rgba(245,154,87,0.2)]" 
                draggable={false}
                style={{
                  WebkitUserDrag: "none",
                  userDrag: "none"
                } as any}
              />
            </div>
          </div>
        </div>

        {/* Right Side 4-Video stack for Business Success Testimonials */}
        <div className="relative flex justify-center lg:justify-end items-center w-full">
          <div className="flex items-center justify-center gap-0 relative w-full lg:w-auto">
            {businessHeroCards.map((card, idx) => {
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

              let styleClass = "border-white/10 opacity-80";
              if (isActive) {
                styleClass = "border-[#F59A57] scale-130 opacity-100 shadow-[0_12px_60px_rgba(245,154,87,0.55)]";
              } else if (isHovered) {
                styleClass = "border-[#F59A57] scale-118 opacity-100 shadow-[0_6px_35px_rgba(245,154,87,0.35)]";
              } else if (isAnyHovered) {
                styleClass = "border-white/5 opacity-30 scale-95 blur-[0.5px]";
              }

              const cardWidth = idx === 1 
                ? "w-[160px] md:w-[195px]" 
                : "w-[145px] md:w-[175px]";

              const displayClass = idx === 3 ? "hidden md:block" : "";
              const offsetClass = idx === 0 || idx === 2 ? "translate-y-6" : idx === 1 ? "-translate-y-8" : "-translate-y-4";

              return (
                <div
                  key={card.num}
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  className={`${cardWidth} aspect-[9/16] rounded-2xl border overflow-hidden relative ${offsetClass} ${zClass} ${styleClass} transition-all duration-500 ease-out bg-gradient-to-b from-[#1C1C21] to-[#0A0A0C] shadow-lg cursor-pointer first:ml-0 -ml-8 ${displayClass}`}
                >
                  {/* Poster Image */}
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${isActive ? "opacity-0 pointer-events-none" : "opacity-90"}`}
                    style={{ 
                      backgroundImage: `url('${card.img}')`
                    }} 
                  />

                  {/* Video */}
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

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none z-0" : "z-15 opacity-100"}`} />

                  {/* Center Play Icon */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className={`w-11 h-11 rounded-full border border-white/50 bg-white/10 flex items-center justify-center text-white text-xs pl-0.5 backdrop-blur-sm shadow-md transition-transform duration-300 ${isHovered ? "scale-110 bg-[#F59A57] border-[#F59A57] text-black" : ""}`}>
                        ▶
                      </div>
                    </div>
                  )}

                  {/* Text Overlay Info */}
                  <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${isActive ? "opacity-0 pointer-events-none z-0" : "z-20 opacity-100"}`}>
                    <p className="text-[9.5px] leading-tight text-white/90 italic mb-2 line-clamp-2">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                    <div className="border-t border-white/10 pt-2 mb-1.5">
                      <span className="text-[10px] text-white font-bold block leading-none">{card.name}</span>
                      <span className="text-[8px] text-white/60 block mt-0.5">{card.role}</span>
                    </div>
                    <div>
                      <span className={`text-[15px] font-extrabold block leading-none ${card.color}`}>{card.growth}</span>
                      <span className="text-[8px] text-white/60 block mt-0.5 leading-none">{card.growthLabel}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Google Review Trust Badge (Bottom Right style - Desktop Only) */}
          <div className="hidden lg:block absolute -bottom-36 right-0 lg:right-6 z-30 transition-all hover:scale-105 hover:-translate-y-1 duration-300 select-none cursor-pointer">
            <img 
              src="/google-reviews-png.png" 
              alt="Google 5.0 Rating 13 Google Reviews" 
              className="w-[250px] md:w-[300px] h-auto drop-shadow-[0_12px_30px_rgba(245,154,87,0.3)]" 
              loading="lazy"
              draggable={false}
              style={{
                WebkitUserDrag: "none",
                userDrag: "none"
              } as any}
            />
          </div>
        </div>

      </div>

      {/* Bottom Content Area: Trusted Brands */}
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 mt-8 z-10">
        
        {/* Trusted By Brands horizontal bar */}
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono-custom text-[10px] tracking-[0.2em] text-[#6E716F] uppercase whitespace-nowrap">
              TRUSTED BY BUSINESSES ACROSS INDIA
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
              HK DESIGNS
            </span>
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
              <span className="font-sans text-[7px] tracking-[0.2em] font-bold text-white pl-0.5">MERAKI</span>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-sans font-light text-[18px] text-white">theka</span>
              <span className="font-mono text-[6px] tracking-widest text-[#F59A57]">COFFEE</span>
            </div>
            <span className="font-sans font-black tracking-widest text-[15px] text-white">
              FITLEAF
            </span>
            <span className="font-serif tracking-wide text-[16px] text-white uppercase font-bold">
              Manish Hospitals
            </span>
            <span className="font-sans tracking-[0.15em] text-[13px] text-white font-extrabold uppercase">
              Torino Automobiles
            </span>
          </div>
        </div>

        {/* Statistics Bar */}
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
