"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const workItems = [
  {
    videoUrl: "/vedios-for-RECENT WORK/0904.mp4",
    img: "/vedios-for-RECENT WORK/0904_poster.jpg",
    line1: "Recent Work",
    line2: "Project 01",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Copy of igexport-DPD-PJoCNCZ.mp4",
    img: "/vedios-for-RECENT WORK/Copy of igexport-DPD-PJoCNCZ_poster.jpg",
    line1: "Influencer",
    line2: "Shoot 02",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Copy of Video-15430.mp4",
    img: "/vedios-for-RECENT WORK/Copy of Video-15430_poster.jpg",
    line1: "Brand Film",
    line2: "Project 03",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/igexport-DAV88kbIXgd.mp4",
    img: "/vedios-for-RECENT WORK/igexport-DAV88kbIXgd_poster.jpg",
    line1: "Creative",
    line2: "Campaign 04",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-11217.mp4",
    img: "/vedios-for-RECENT WORK/Video-11217_poster.jpg",
    line1: "Influencer",
    line2: "Shoot 05",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-17588.mp4",
    img: "/vedios-for-RECENT WORK/Video-17588_poster.jpg",
    line1: "Product",
    line2: "Shoot 06",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-19759.mp4",
    img: "/vedios-for-RECENT WORK/Video-19759_poster.jpg",
    line1: "Creator",
    line2: "Growth 07",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-22108.mp4",
    img: "/vedios-for-RECENT WORK/Video-22108_poster.jpg",
    line1: "Brand",
    line2: "Production 08",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-28271.mp4",
    img: "/vedios-for-RECENT WORK/Video-28271_poster.jpg",
    line1: "Event",
    line2: "Highlights 09",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-28950.mp4",
    img: "/vedios-for-RECENT WORK/Video-28950_poster.jpg",
    line1: "Lifestyle",
    line2: "Reel 10",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-45538.mp4",
    img: "/vedios-for-RECENT WORK/Video-45538_poster.jpg",
    line1: "Campaign",
    line2: "Shoot 11",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-45645.mp4",
    img: "/vedios-for-RECENT WORK/Video-45645_poster.jpg",
    line1: "Celebrity",
    line2: "Collaboration 12",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-45787.mp4",
    img: "/vedios-for-RECENT WORK/Video-45787_poster.jpg",
    line1: "Fashion",
    line2: "Production 13",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-62911.mp4",
    img: "/vedios-for-RECENT WORK/Video-62911_poster.jpg",
    line1: "Executive",
    line2: "Branding 14",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-63673.mp4",
    img: "/vedios-for-RECENT WORK/Video-63673_poster.jpg",
    line1: "Digital",
    line2: "Campaign 15",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-69537.mp4",
    img: "/vedios-for-RECENT WORK/Video-69537_poster.jpg",
    line1: "Retail",
    line2: "Showcase 16",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-7576.mp4",
    img: "/vedios-for-RECENT WORK/Video-7576_poster.jpg",
    line1: "Commercial",
    line2: "Shoot 17",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-9572.mp4",
    img: "/vedios-for-RECENT WORK/Video-9572_poster.jpg",
    line1: "Studio",
    line2: "Production 18",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-97955.mp4",
    img: "/vedios-for-RECENT WORK/Video-97955_poster.jpg",
    line1: "Social",
    line2: "Content 19",
  }
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
