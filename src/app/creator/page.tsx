"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import CelebrityGallery from "@/components/sections/CelebrityGallery";
import Contact from "@/components/sections/Contact";

const journeys = [
  {
    milestone: "0 → 50K · 5 MONTHS",
    quote: "I was posting every day and getting 200 views. I nearly stopped.",
    name: "Fashion & Lifestyle Creator",
    handle: "@mumbai_fashion_vibe",
    videoSrc: "/vedios-For Creators/1.mp4",
    poster: "/vedios-For Creators/1_poster.jpg"
  },
  {
    milestone: "50K 🎉 MILESTONE",
    quote: "The difference was having someone plan it instead of me guessing.",
    name: "Fitness & Wellness Creator",
    handle: "@fit_with_rohan",
    videoSrc: "/vedios-For Creators/2.mp4",
    poster: "/vedios-For Creators/2_poster.jpg"
  },
  {
    milestone: "0 → 100K · 9 MONTHS",
    quote: "The quality of the shoots made brands reach out directly.",
    name: "Lifestyle & Travel Creator",
    handle: "@ananya_diaries",
    videoSrc: "/vedios-For Creators/3.mp4",
    poster: "/vedios-For Creators/3_poster.jpg"
  },
  {
    milestone: "FIRST BRAND DEAL",
    quote: "Three months in, a brand messaged me. I hadn't approached anyone.",
    name: "Food & Culinary Creator",
    handle: "@mumbai_food_tales",
    videoSrc: "/vedios-For Creators/4.mp4",
    poster: "/vedios-For Creators/4_poster.jpg"
  },
  {
    milestone: "300K+ REACH",
    quote: "Consistent quality shoots turned views into real followers.",
    name: "Beauty & Style Creator",
    handle: "@glam_by_priya",
    videoSrc: "/vedios-For Creators/5.mp4",
    poster: "/vedios-For Creators/5_poster.jpg"
  },
  {
    milestone: "VIRAL REELS",
    quote: "Scripting and storytelling made all the difference.",
    name: "Tech & Gadgets Creator",
    handle: "@tech_insights",
    videoSrc: "/vedios-For Creators/6.mp4",
    poster: "/vedios-For Creators/6_poster.jpg"
  },
  {
    milestone: "COMMUNITY BUILT",
    quote: "Went from zero strategy to monthly paid brand deals.",
    name: "Luxury & Lifestyle Creator",
    handle: "@luxe_living_in",
    videoSrc: "/vedios-For Creators/7.mp4",
    poster: "/vedios-For Creators/7_poster.jpg"
  },
  {
    milestone: "10X ENGAGEMENT",
    quote: "Our engagement skyrocketed within 60 days of launching.",
    name: "Dance & Entertainment Creator",
    handle: "@rhythm_vibes",
    videoSrc: "/vedios-For Creators/8.mp4",
    poster: "/vedios-For Creators/8_poster.jpg"
  },
  {
    milestone: "CONSISTENT LEADS",
    quote: "People trust my recommendations because the content looks professional.",
    name: "Business & Career Creator",
    handle: "@growth_mentor_in",
    videoSrc: "/vedios-For Creators/9.mp4",
    poster: "/vedios-For Creators/9_poster.jpg"
  },
  {
    milestone: "NATIONAL CAMPAIGNS",
    quote: "We scaled from local reels to multi-city brand campaigns.",
    name: "Travel & Culture Creator",
    handle: "@india_uncovered",
    videoSrc: "/vedios-For Creators/10.mp4",
    poster: "/vedios-For Creators/10_poster.jpg"
  }
];

const creatorServices = [
  {
    num: "01",
    title: "Personal Branding",
    desc: "Positioning, content pillars, and a consistent identity brands can recognise and trust."
  },
  {
    num: "02",
    title: "Shoot Production",
    desc: "Monthly professional shoots — outfits, lifestyle, and personality-led content."
  },
  {
    num: "03",
    title: "Reel Production",
    desc: "Trend-based editing, hooks, transitions, audio selection and colour grading."
  },
  {
    num: "04",
    title: "Page Management",
    desc: "Posting, scheduling, captions, hashtags and complete monthly content planning."
  },
  {
    num: "05",
    title: "Collaboration Support",
    desc: "Barter and paid brand introductions through our own extensive brand network."
  },
  {
    num: "06",
    title: "Content Strategy",
    desc: "What to post, when, and why — planned a month ahead so you never run out of ideas."
  }
];

export default function CreatorPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

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
    <div className="flex flex-col min-h-screen bg-[#0A0A0C] text-white pt-24">
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#121215] to-[#0A0A0C] border-b border-white/5">
        <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[70%] bg-gradient-to-br from-[#F59A57]/15 to-[#DC2626]/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
              FOR CREATORS &bull; CREATOR GROWTH
            </p>
            <h1 className="font-display font-extrabold text-white text-[38px] md:text-[58px] leading-[1.08] mb-6">
              We don&apos;t just advise creators.<br />
              <span className="text-[#249E98]">We build them.</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Managed, shot, and grown by our team — until the collaborations, brand deals, and audience trust start arriving on their own.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/shoot#creator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59A57] text-[#050505] rounded-xl text-sm font-bold hover:bg-[#FF8A3D] transition-all shadow-[0_4px_20px_rgba(245,154,87,0.2)]"
              >
                Book Creator Trial Shoot &rarr;
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-all"
              >
                Grow Your Personal Brand
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Journeys Section */}
      <section className="py-24 border-b border-white/5 bg-[#0A0A0C]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="max-w-2xl mb-16">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
              REAL JOURNEYS
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[42px] leading-[1.1] mb-4">
              Where they started. Where they are now.
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Creators we&apos;ve worked with — the struggles before, what changed, and how the audience actually grew.
            </p>
          </div>

          {/* Interactive Video Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeys.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div 
                  key={idx} 
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  className={`bg-[#121215] border rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group cursor-pointer ${
                    isActive ? "border-[#F59A57] bg-[#16161A] shadow-[0_4px_30px_rgba(245,154,87,0.15)]" : "border-white/5 hover:border-[#F59A57]/40"
                  }`}
                >
                  <div>
                    {/* Media Container */}
                    <div className="aspect-[9/16] rounded-xl overflow-hidden mb-4 relative bg-black/60 border border-white/5">
                      <img 
                        src={item.poster} 
                        alt={item.name} 
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 z-0 ${
                          isActive ? "opacity-0 pointer-events-none" : "opacity-80 group-hover:opacity-30"
                        }`}
                      />

                      <video
                        ref={(el) => { videoRefs.current[idx] = el; }}
                        src={item.videoSrc}
                        loop={!isActive}
                        muted={!isActive}
                        controls={isActive}
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                          isActive ? "z-20 opacity-100" : "z-10 opacity-0 group-hover:opacity-95 pointer-events-none"
                        }`}
                      />

                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`} />

                      {/* Milestone Tag */}
                      <div className="absolute top-3 left-3 bg-[#F59A57] text-[#050505] font-mono-custom text-[9px] font-extrabold px-2.5 py-1 rounded-md uppercase z-30 shadow-md">
                        {item.milestone}
                      </div>

                      {/* Play Icon Overlay */}
                      <div className={`absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                        <div className="w-12 h-12 rounded-full border border-white/40 bg-black/40 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-[#050505] transition-all backdrop-blur-sm shadow-md">
                          ▶
                        </div>
                      </div>
                    </div>

                    <p className="text-white/90 text-sm italic mb-4 leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <h3 className="text-white font-bold text-sm">{item.name}</h3>
                    <span className="text-[#249E98] text-xs font-mono">{item.handle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="py-24 bg-[#121215] border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="max-w-2xl mb-16">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#249E98] font-bold mb-3">
              CHOOSE YOUR PATH
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[42px] leading-[1.1] mb-4">
              Two ways to grow. Both built for results.
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Select the strategy that aligns with your current milestone and personal brand goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Path 1 */}
            <div className="bg-[#0A0A0C] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-[#F59A57]/40 transition-all">
              <div>
                <span className="inline-block font-mono-custom text-[10px] font-bold tracking-widest text-[#F59A57] bg-[#F59A57]/10 px-3.5 py-1.5 rounded-md uppercase mb-6">
                  SLOW GROWTH &bull; PREMIUM
                </span>
                <h3 className="font-display font-extrabold text-white text-2xl mb-4">
                  Professional Camera Shoot
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Cinematic, high-production content that positions you as a premium creator. Growth is slower, but the brand deals and collaborations that come are far bigger.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-white/80">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#F59A57]">✓</span> High-end RED/Sony cinematic video quality
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#F59A57]">✓</span> Studio lighting &amp; expert sound design
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#F59A57]">✓</span> Best for long-term brand authority
                  </li>
                </ul>
              </div>
              <Link 
                href="/shoot#creator"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-all"
              >
                Select Premium Shoot &rarr;
              </Link>
            </div>

            {/* Path 2 */}
            <div className="bg-[#0A0A0C] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-[#249E98]/40 transition-all">
              <div>
                <span className="inline-block font-mono-custom text-[10px] font-bold tracking-widest text-[#249E98] bg-[#249E98]/10 px-3.5 py-1.5 rounded-md uppercase mb-6">
                  FAST GROWTH &bull; REACH
                </span>
                <h3 className="font-display font-extrabold text-white text-2xl mb-4">
                  iPhone Influencer Style
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Real, relatable, trend-led content shot the way top creators actually shoot. Higher volume, faster reach, and stronger organic engagement.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-white/80">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#249E98]">✓</span> Native 4K iPhone 15 Pro Reel production
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#249E98]">✓</span> Fast-paced trend hooks &amp; viral audio matching
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#249E98]">✓</span> Best for rapid audience expansion
                  </li>
                </ul>
              </div>
              <Link 
                href="/shoot#creator"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#249E98] text-[#050505] rounded-xl text-sm font-bold hover:bg-[#208B86] transition-all"
              >
                Select Influencer Style &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0A0A0C] border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="max-w-2xl mb-16">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
              WHAT WE HANDLE
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[42px] leading-[1.1] mb-4">
              Everything except being you.
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              We manage the strategy, shoots, editing, and growth so you can focus on creating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorServices.map((service) => (
              <div 
                key={service.num}
                className="bg-[#121215] border border-white/5 rounded-2xl p-8 hover:border-[#249E98]/30 transition-all"
              >
                <span className="font-mono-custom text-xs font-bold text-[#F59A57] block mb-4">
                  {service.num}
                </span>
                <h3 className="font-display font-extrabold text-white text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrity & Top Creator Gallery */}
      <CelebrityGallery isDark={true} />

      {/* Contact Section */}
      <Contact />

    </div>
  );
}
