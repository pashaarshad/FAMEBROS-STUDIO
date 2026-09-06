"use client";

import { useRef, useState } from "react";

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
    line2: "Highlight 11",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-50669.mp4",
    img: "/vedios-for-RECENT WORK/Video-50669_poster.jpg",
    line1: "Influencer",
    line2: "Feature 12",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-51978.mp4",
    img: "/vedios-for-RECENT WORK/Video-51978_poster.jpg",
    line1: "Commercial",
    line2: "Shoot 13",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-60156.mp4",
    img: "/vedios-for-RECENT WORK/Video-60156_poster.jpg",
    line1: "Brand Story",
    line2: "Production 14",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-68531.mp4",
    img: "/vedios-for-RECENT WORK/Video-68531_poster.jpg",
    line1: "Client Work",
    line2: "Feature 15",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-70869.mp4",
    img: "/vedios-for-RECENT WORK/Video-70869_poster.jpg",
    line1: "Creator",
    line2: "Collab 16",
  },
  {
    videoUrl: "/vedios-for-RECENT WORK/Video-71381.mp4",
    img: "/vedios-for-RECENT WORK/Video-71381_poster.jpg",
    line1: "Campaign",
    line2: "Reel 17",
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

export default function CampaignReels() {
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
    const video = videoRefs.current[idx];
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
    }
  };

  return (
    <section id="work" className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
              CAMPAIGN WORK
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[44px] leading-[1.1] mb-3">
              Recent collaborations.
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Every reel below was conceptualised, directed, and produced by our in-house team.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] hover:bg-white/10 transition-all select-none"
              aria-label="Scroll left"
              suppressHydrationWarning
            >
              &larr;
            </button>
            <button 
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] hover:bg-white/10 transition-all select-none"
              aria-label="Scroll right"
              suppressHydrationWarning
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* 19-Reel Rail */}
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
                <div className={`relative aspect-[9/16] rounded-2xl border transition-all duration-300 overflow-hidden bg-[#121215] shadow-lg ${isActive ? 'border-[#F59A57] scale-102 shadow-[0_4px_30px_rgba(245,154,87,0.3)]' : 'border-white/10 group-hover:-translate-y-1.5 group-hover:border-[#F59A57]/50'}`}>
                  
                  <img 
                    src={item.img} 
                    alt={`${item.line1} ${item.line2}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out z-0 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-85 group-hover:opacity-20'}`}
                  />

                  <video
                    ref={(el) => { videoRefs.current[idx] = el; }}
                    src={item.videoUrl}
                    loop={!isActive}
                    muted={!isActive}
                    controls={isActive}
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'z-20 opacity-100' : 'z-10 opacity-0 group-hover:opacity-100 pointer-events-none'}`}
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />

                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-20 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-black/50 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-black transition-all backdrop-blur-sm shadow-md">
                      ▶
                    </div>
                  </div>

                  <div className={`absolute bottom-4 left-4 right-4 z-20 transition-all duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <span className="font-mono-custom text-[10px] uppercase tracking-wider text-[#F59A57] block font-bold">
                      {item.line1}
                    </span>
                    <h3 className="font-display font-bold text-white text-[15px] leading-tight">
                      {item.line2}
                    </h3>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Metric Cards in Dark Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#121215] border border-white/10 rounded-2xl p-7 hover:border-[#F59A57]/40 transition-all">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#F59A57] mb-4" />
            <h4 className="font-display font-bold text-white text-lg mb-2">D2C Brand Launch</h4>
            <p className="text-white/60 text-sm mb-4">12 verified micro creators over six weeks, all content produced in-house.</p>
            <div className="font-display text-[32px] font-extrabold text-[#F59A57] leading-none">1.4M</div>
            <p className="font-mono-custom text-xs text-white/40 mt-1.5">combined organic reach</p>
          </div>

          <div className="bg-[#121215] border border-white/10 rounded-2xl p-7 hover:border-[#249E98]/40 transition-all">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#249E98] mb-4" />
            <h4 className="font-display font-bold text-white text-lg mb-2">Retail Store Campaign</h4>
            <p className="text-white/60 text-sm mb-4">Local creators paired with a founder-led organic content push.</p>
            <div className="font-display text-[32px] font-extrabold text-[#249E98] leading-none">3.1&times;</div>
            <p className="font-mono-custom text-xs text-white/40 mt-1.5">increase in weekend footfall</p>
          </div>

          <div className="bg-[#121215] border border-white/10 rounded-2xl p-7 hover:border-[#F59A57]/40 transition-all">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#F59A57] mb-4" />
            <h4 className="font-display font-bold text-white text-lg mb-2">Celebrity Product Launch</h4>
            <p className="text-white/60 text-sm mb-4">One celebrity collaboration, amplified across owned channels.</p>
            <div className="font-display text-[32px] font-extrabold text-[#F59A57] leading-none">18K</div>
            <p className="font-mono-custom text-xs text-white/40 mt-1.5">new followers in 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
