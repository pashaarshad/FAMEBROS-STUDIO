"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const businessWorkItems = [
  {
    videoUrl: "/vedios/business client testimonial/Video-60156.mp4",
    img: "/vedios/business client testimonial/Video-60156_poster.jpg",
    title: "Ali Salon",
    desc: "25 Years in Business. No Social Presence.",
    metric: "10X More Inquiries With Us"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-68531.mp4",
    img: "/vedios/business client testimonial/Video-68531_poster.jpg",
    title: "SK Furniture",
    desc: "Customer Queues Despite an Offbeat Location",
    metric: "10K+ Followers in 6 Months"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-71170.mp4",
    img: "/vedios/business client testimonial/Video-71170_poster.jpg",
    title: "Arabian Collection",
    desc: "Mumbai, Dubai & Hyderabad",
    metric: "600K+ Followers | 3 Years With Us"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-71381.mp4",
    img: "/vedios/business client testimonial/Video-71381_poster.jpg",
    title: "Jolly Honest Tailor",
    desc: "50 Years in Business",
    metric: "3 Years With Us"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-74493.mp4",
    img: "/vedios/business client testimonial/Video-74493_poster.jpg",
    title: "Manish Hospital",
    desc: "Doctor Profile Videos",
    metric: "Trust Rating: 4.9★"
  }
];

export default function Work() {
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
    <section id="case-studies" className="bg-[#FAF6F0] py-24 border-t border-black/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#F59A57] mb-4">
              SUCCESS VIDEOS & CASE STUDIES
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[40px] leading-[1.1] mb-3">
              Proof of <span className="text-[#F59A57]">growth</span> in action.
            </h2>
            <p className="text-[#55555A] text-sm font-semibold">
              Real businesses. Cinematic content. Real bottom line scaling.
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

        {/* Carousel container */}
        <div 
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
        >
          {businessWorkItems.map((item, idx) => {
            const isActive = activeIdx === idx;
            
            return (
              <div 
                key={idx}
                onClick={() => handleCardClick(idx)}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="flex-shrink-0 w-[220px] snap-start group cursor-pointer"
              >
                {/* Media Card */}
                <div className={`relative aspect-[9/16] rounded-2xl border transition-all duration-300 overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-[#E5E7EB] shadow-lg ${isActive ? 'border-[#F59A57] scale-102 shadow-[0_4px_30px_rgba(245,154,87,0.15)]' : 'border-black/5 group-hover:-translate-y-1.5 group-hover:border-[#F59A57]/40'}`}>
                  
                  <img 
                    src={item.img} 
                    alt={item.title} 
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

                  {/* Play Button Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="w-11 h-11 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-[#050505] transition-all backdrop-blur-sm shadow-md">
                      ▶
                    </div>
                  </div>

                  {/* Text Details Overlay */}
                  <div className={`absolute bottom-5 left-5 right-5 z-30 font-display transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <span className="text-[15px] font-extrabold text-white block uppercase tracking-wide mb-0.5">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-white/70 block mb-3 font-medium">
                      {item.desc}
                    </span>
                    <div className="bg-[#F59A57] text-[#050505] text-[9.5px] font-extrabold px-2.5 py-1 rounded-md inline-block uppercase tracking-wider">
                      {item.metric}
                    </div>
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
            Request Custom Case Studies
            <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
