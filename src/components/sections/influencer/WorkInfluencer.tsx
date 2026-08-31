"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const workItems = [
  {
    videoUrl: "/vedios/Shoot testimonial/Video-74349.mp4",
    img: "/vedios/Shoot testimonial/Video-7411_poster.jpg", // fallback to active video poster extracted in same directory
    line1: "Influencer",
    line2: "Shoot 01",
  },
  {
    videoUrl: "/vedios/Shoot testimonial/Video-74384.mp4",
    img: "/vedios/Shoot testimonial/Video-15097_poster.jpg",
    line1: "Product",
    line2: "Shoot 02",
  },
  {
    videoUrl: "/vedios/Shoot testimonial/Video-74404.mp4",
    img: "/vedios/Shoot testimonial/Video-15430_poster.jpg",
    line1: "Event",
    line2: "Production",
  },
  {
    videoUrl: "/vedios/Creator growth testimonial/Video-33139.mp4",
    img: "/vedios/Creator growth testimonial/Video-16374_poster.jpg",
    line1: "Creator",
    line2: "Growth 01",
  },
  {
    videoUrl: "/vedios/Creator growth testimonial/Video-33494.mp4",
    img: "/vedios/Creator growth testimonial/Video-20051_poster.jpg",
    line1: "Creator",
    line2: "Growth 02",
  },
  {
    videoUrl: "/vedios/Creator growth testimonial/Video-33850.mp4",
    img: "/vedios/Creator growth testimonial/Video-20338_poster.jpg",
    line1: "Branded",
    line2: "Podcast",
  },
];

export default function WorkInfluencer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  const handleMouseEnter = (idx: number) => {
    if (activeIdx === idx) return; 
    const video = videoRefs.current[idx];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (idx: number) => {
    if (activeIdx === idx) return; 
    const video = videoRefs.current[idx];
    if (video) {
      video.pause();
    }
  };

  const handleCardClick = (idx: number) => {
    if (activeIdx === idx) {
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

    if (activeIdx !== null) {
      const prevVideo = videoRefs.current[activeIdx];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.muted = true;
      }
    }

    setActiveIdx(idx);

    setTimeout(() => {
      const video = videoRefs.current[idx];
      if (video) {
        video.muted = false;
        video.play().catch(() => {});
      }
    }, 50);
  };

  return (
    <section id="work" className="bg-bg-primary py-24 border-t border-black/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#F59A57] mb-4">
              RECENT WORK
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[40px] leading-[1.1] mb-3">
              Work that <span className="text-[#F59A57]">speaks</span><br />
              before we do.
            </h2>
            <p className="text-[#55555A] text-sm font-semibold">
              Real content. Real campaigns. Real stories.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A] hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll left"
              suppressHydrationWarning
            >
              ←
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A] hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll right"
              suppressHydrationWarning
            >
              →
            </button>
          </div>
        </div>

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
                <div className={`relative aspect-[9/16] rounded-2xl border transition-all duration-300 overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-[#E5E7EB] shadow-lg ${isActive ? 'border-[#F59A57] scale-102 shadow-[0_4px_30px_rgba(245,154,87,0.15)]' : 'border-black/5 group-hover:-translate-y-1.5 group-hover:border-[#F59A57]/40'}`}>
                  
                  <img 
                    src={item.img} 
                    alt={`${item.line1} ${item.line2}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out z-0 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-80 group-hover:opacity-20'}`}
                  />

                  <video
                    ref={(el) => { videoRefs.current[idx] = el; }}
                    src={item.videoUrl}
                    loop={!isActive}
                    muted={!isActive}
                    controls={isActive}
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'z-20 opacity-100' : 'z-10 opacity-0 group-hover:opacity-95 pointer-events-none'}`}
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />

                  <div className={`absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="w-11 h-11 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-[#050505] transition-all backdrop-blur-sm shadow-md">
                      ▶
                    </div>
                  </div>

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
            className="inline-flex items-center gap-3 px-6 py-2.5 border border-black/15 text-[#0A0A0A] rounded-full text-[14px] font-bold hover:border-black/35 hover:bg-black/5 transition-all"
          >
            View More Work
            <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
