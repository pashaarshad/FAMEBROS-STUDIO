"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const workItems = [
  { 
    line1: "FOUNDER", 
    line2: "STORY", 
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    videoUrl: "/vedios/business client testimonial/Video-37410.mp4"
  },
  { 
    line1: "PRODUCT", 
    line2: "FILM", 
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
    videoUrl: "/vedios/Shoot testimonial/Video-15097.mp4"
  },
  { 
    line1: "BRAND", 
    line2: "CAMPAIGN", 
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    videoUrl: "/vedios/Celeb shoot/Video-97955.mp4"
  },
  { 
    line1: "BTS", 
    line2: "CONTENT", 
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80",
    videoUrl: "/vedios/influencer shoot/Video-62911.mp4"
  },
  { 
    line1: "EVENT", 
    line2: "COVERAGE", 
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
    videoUrl: "/vedios/Shoot testimonial/Video-4203.mp4"
  },
  { 
    line1: "LAUNCH", 
    line2: "CAMPAIGN", 
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    videoUrl: "/vedios/Creator growth testimonial/Video-43663.mp4"
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleMouseEnter = (idx: number) => {
    if (activeIdx === idx) return; // Don't interrupt active audio card
    const video = videoRefs.current[idx];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (idx: number) => {
    if (activeIdx === idx) return; // Don't interrupt active audio card
    const video = videoRefs.current[idx];
    if (video) {
      video.pause();
    }
  };

  const handleCardClick = (idx: number) => {
    if (activeIdx === idx) {
      // Toggle pause/play or reset on clicking again
      const video = videoRefs.current[idx];
      if (video) {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.muted = true;
          setActiveIdx(null);
        }
      }
      return;
    }

    // Pause and mute previous active card
    if (activeIdx !== null) {
      const prevVideo = videoRefs.current[activeIdx];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.muted = true;
      }
    }

    // Set new active card
    setActiveIdx(idx);

    // Unmute and play the clicked video
    setTimeout(() => {
      const video = videoRefs.current[idx];
      if (video) {
        video.muted = false;
        video.play().catch(() => {});
      }
    }, 50);
  };

  return (
    <section id="work" className="bg-[#050505] py-24 border-t border-white/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Header with control arrows */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#F59A57] mb-4">
              RECENT WORK
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[40px] leading-[1.1] mb-3">
              Work that <span className="text-[#F59A57]">speaks</span><br />
              before we do.
            </h2>
            <p className="text-[#6E716F] text-sm font-semibold">
              Real content. Real campaigns. Real stories.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll left"
              suppressHydrationWarning
            >
              ←
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll right"
              suppressHydrationWarning
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div 
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
        >
          {workItems.map((item, idx) => {
            const isActive = activeIdx === idx;
            
            return (
              <div 
                key={idx}
                onClick={() => handleCardClick(idx)}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="flex-shrink-0 w-[220px] snap-start group cursor-pointer"
              >
                {/* Media Card with inline playing capabilities */}
                <div className={`relative aspect-[9/16] rounded-2xl border transition-all duration-300 overflow-hidden bg-gradient-to-br from-[#1C1C21] to-[#0E0E11] shadow-lg ${isActive ? 'border-[#F59A57] scale-102 shadow-[0_0_30px_rgba(245,154,87,0.2)]' : 'border-white/10 group-hover:-translate-y-1.5 group-hover:border-[#F59A57]/40'}`}>
                  
                  {/* Background Poster Image - hidden when active */}
                  <img 
                    src={item.img} 
                    alt={`${item.line1} ${item.line2}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out z-0 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-80 group-hover:opacity-20'}`}
                  />

                  {/* Inline Video Playback (Muted on hover, unmuted with controls when clicked active) */}
                  <video
                    ref={(el) => { videoRefs.current[idx] = el; }}
                    src={item.videoUrl}
                    loop={!isActive} // Loop on hover, let user control when active
                    muted={!isActive}
                    controls={isActive}
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isActive ? 'z-20 opacity-100' : 'z-10 opacity-0 group-hover:opacity-95 pointer-events-none'}`}
                  />

                  {/* Hover overlay gradient - hidden when active to not block controls */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />

                  {/* Play Button Overlay (Centered) - hidden when active */}
                  <div className={`absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="w-11 h-11 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-[#050505] transition-all backdrop-blur-sm shadow-md">
                      ▶
                    </div>
                  </div>

                  {/* Stacked text at the bottom left - hidden when active to not overlap controls */}
                  <div className={`absolute bottom-5 left-5 right-5 z-30 font-display font-extrabold leading-none tracking-tight transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <span className="text-[16px] text-white block uppercase mb-1">
                      {item.line1}
                    </span>
                    <span className="text-[16px] text-white block uppercase">
                      {item.line2}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="#contact"
            className="inline-flex items-center gap-3 px-6 py-2.5 border border-white/20 text-white rounded-full text-[14px] font-bold hover:border-white/50 hover:bg-white/5 transition-all"
          >
            View More Work
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#050505] font-bold text-xs">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
