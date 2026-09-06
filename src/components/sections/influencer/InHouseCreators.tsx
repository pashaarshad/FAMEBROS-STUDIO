"use client";

import { useRef, useState } from "react";

const inHouseCreators = [
  {
    name: "Aarav Sharma",
    handle: "@aarav_vlogs",
    niche: "Lifestyle & Travel",
    video: "/vedios-For Creators/1.mp4",
    poster: "/vedios-For Creators/1_poster.jpg",
  },
  {
    name: "Pooja Mehta",
    handle: "@poojastyles",
    niche: "Fashion & Beauty",
    video: "/vedios-For Creators/2.mp4",
    poster: "/vedios-For Creators/2_poster.jpg",
  },
  {
    name: "Kabir Verma",
    handle: "@kabirfitness",
    niche: "Fitness & Nutrition",
    video: "/vedios-For Creators/3.mp4",
    poster: "/vedios-For Creators/3_poster.jpg",
  },
  {
    name: "Simran Kaur",
    handle: "@simranbakes",
    niche: "Food & Culinary",
    video: "/vedios-For Creators/4.mp4",
    poster: "/vedios-For Creators/4_poster.jpg",
  },
  {
    name: "Rohan Patel",
    handle: "@rohan_tech",
    niche: "Tech & Gadgets",
    video: "/vedios-For Creators/5.mp4",
    poster: "/vedios-For Creators/5_poster.jpg",
  },
  {
    name: "Ananya Roy",
    handle: "@ananya_music",
    niche: "Music & Performing Arts",
    video: "/vedios-For Creators/6.mp4",
    poster: "/vedios-For Creators/6_poster.jpg",
  },
  {
    name: "Zaid Shaikh",
    handle: "@zaid_drives",
    niche: "Automobile & Luxury",
    video: "/vedios-For Creators/7.mp4",
    poster: "/vedios-For Creators/7_poster.jpg",
  },
  {
    name: "Tanvi Deshmukh",
    handle: "@tanvi_wellness",
    niche: "Mindfulness & Yoga",
    video: "/vedios-For Creators/8.mp4",
    poster: "/vedios-For Creators/8_poster.jpg",
  },
  {
    name: "Vikram Malhotra",
    handle: "@vikram_biz",
    niche: "Business & Finance",
    video: "/vedios-For Creators/9.mp4",
    poster: "/vedios-For Creators/9_poster.jpg",
  },
  {
    name: "Neha Joshi",
    handle: "@neha_daily",
    niche: "Parenting & Home",
    video: "/vedios-For Creators/10.mp4",
    poster: "/vedios-For Creators/10_poster.jpg",
  },
];

export default function InHouseCreators() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 280, behavior: "smooth" });
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
    <section className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
              OUR IN-HOUSE CREATORS
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[44px] leading-[1.1] mb-4">
              We don&apos;t only find creators. We build them.
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              These creators are managed by us, shot by us and grown by us. When your brand works with them, you&apos;re working with people whose audience quality and content standard we already know.
            </p>
          </div>

          <div className="flex items-center gap-3">
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

        {/* Creators Video Rail */}
        <div
          ref={containerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
        >
          {inHouseCreators.map((creator, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="flex-shrink-0 w-[240px] md:w-[260px] snap-start group cursor-pointer"
              >
                <div
                  className={`bg-[#121215] border rounded-2xl p-4 transition-all duration-300 ${
                    isActive
                      ? "border-[#F59A57] bg-[#18181E] shadow-[0_4px_30px_rgba(245,154,87,0.25)]"
                      : "border-white/10 hover:border-[#F59A57]/50"
                  }`}
                >
                  <div className="aspect-[9/16] rounded-xl overflow-hidden mb-3.5 relative bg-black border border-white/5">
                    <img
                      src={creator.poster}
                      alt={creator.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 z-0 ${
                        isActive
                          ? "opacity-0 pointer-events-none"
                          : "opacity-85 group-hover:opacity-30"
                      }`}
                    />

                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                      }}
                      src={creator.video}
                      loop={!isActive}
                      muted={!isActive}
                      controls={isActive}
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        isActive
                          ? "z-20 opacity-100"
                          : "z-10 opacity-0 group-hover:opacity-100 pointer-events-none"
                      }`}
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-15 transition-opacity duration-300 ${
                        isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    />

                    <span className="absolute top-2.5 left-2.5 bg-[#F59A57] text-[#0A0A0C] font-mono-custom text-[9px] font-extrabold px-2 py-0.5 rounded z-30 shadow-md uppercase tracking-wider">
                      In-House
                    </span>

                    <div
                      className={`absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 ${
                        isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                      <div className="w-11 h-11 rounded-full border border-white/40 bg-black/50 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-black transition-all backdrop-blur-sm shadow-md">
                        ▶
                      </div>
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-white text-base mb-0.5">
                    {creator.name}
                  </h4>
                  <p className="text-[#F59A57] font-mono-custom text-xs mb-1">
                    {creator.handle}
                  </p>
                  <p className="text-white/50 text-xs">{creator.niche}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
