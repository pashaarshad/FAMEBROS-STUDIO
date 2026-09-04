"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Contact from "@/components/sections/Contact";

const btsItems = [
  { title: "Planning Shot List", desc: "Pre-shoot strategy before camera arrives", video: "/vedios-for-BEHIND THE SCENES/Copy of Video-64375.mp4", poster: "/vedios-for-BEHIND THE SCENES/Copy of Video-64375_poster.jpg" },
  { title: "Lighting & Camera Setup", desc: "Professional gear brought directly to location", video: "/vedios-for-BEHIND THE SCENES/Copy of igexport-DK4hA-5ovLc.mp4", poster: "/vedios-for-BEHIND THE SCENES/Copy of igexport-DK4hA-5ovLc_poster.jpg" },
  { title: "On-Camera Direction", desc: "Directing first-time founders & creators", video: "/vedios-for-BEHIND THE SCENES/Copy of igexport-DP1B1DAj86l.mp4", poster: "/vedios-for-BEHIND THE SCENES/Copy of igexport-DP1B1DAj86l_poster.jpg" },
  { title: "Final Edited Reel", desc: "High-converting vertical Reel delivered", video: "/vedios-for-BEHIND THE SCENES/Video-15470.mp4", poster: "/vedios-for-BEHIND THE SCENES/Video-15470_poster.jpg" },
  { title: "Creative Storyboarding", desc: "Concept framing and script direction", video: "/vedios-for-BEHIND THE SCENES/Video-42780.mp4", poster: "/vedios-for-BEHIND THE SCENES/Video-42780_poster.jpg" },
  { title: "Audio & Sound Capture", desc: "Crisp wireless mic & ambient sound", video: "/vedios-for-BEHIND THE SCENES/Video-49284.mp4", poster: "/vedios-for-BEHIND THE SCENES/Video-49284_poster.jpg" },
  { title: "B-Roll & Action Captures", desc: "Dynamic movement & lifestyle coverage", video: "/vedios-for-BEHIND THE SCENES/Video-50669.mp4", poster: "/vedios-for-BEHIND THE SCENES/Video-50669_poster.jpg" },
  { title: "Lighting Rig Setup", desc: "Studio quality portable LED panels", video: "/vedios-for-BEHIND THE SCENES/Video-59296.mp4", poster: "/vedios-for-BEHIND THE SCENES/Video-59296_poster.jpg" },
  { title: "Pacing & Speed Ramps", desc: "High retention vertical edit workflow", video: "/vedios-for-BEHIND THE SCENES/Video-70869.mp4", poster: "/vedios-for-BEHIND THE SCENES/Video-70869_poster.jpg" },
  { title: "Color Grading", desc: "Rich brand aesthetic & tone matching", video: "/vedios-for-BEHIND THE SCENES/igexport-C_PfGeSyxJi.mp4", poster: "/vedios-for-BEHIND THE SCENES/igexport-C_PfGeSyxJi_poster.jpg" },
  { title: "Hook & Transition Prep", desc: "First 3-second retention optimization", video: "/vedios-for-BEHIND THE SCENES/igexport-DA4_YZuSNuF.mp4", poster: "/vedios-for-BEHIND THE SCENES/igexport-DA4_YZuSNuF_poster.jpg" },
  { title: "Client Review & Polish", desc: "Collaborative feedback and final cut", video: "/vedios-for-BEHIND THE SCENES/igexport-DK_e5qASpU_.mp4", poster: "/vedios-for-BEHIND THE SCENES/igexport-DK_e5qASpU__poster.jpg" },
  { title: "Multi-Angle Filming", desc: "Dual camera coverage for dynamic reels", video: "/vedios-for-BEHIND THE SCENES/igexport-DR_vbooiFWV.mp4", poster: "/vedios-for-BEHIND THE SCENES/igexport-DR_vbooiFWV_poster.jpg" },
  { title: "Location Scouting", desc: "Optimizing natural light and backdrop", video: "/vedios-for-BEHIND THE SCENES/igexport-DS4gQZ4CJ-7.mp4", poster: "/vedios-for-BEHIND THE SCENES/igexport-DS4gQZ4CJ-7_poster.jpg" },
  { title: "On-Site Scripting", desc: "Real-time script tweaks for natural delivery", video: "/vedios-for-BEHIND THE SCENES/igexport-DSXrgRoiIcV.mp4", poster: "/vedios-for-BEHIND THE SCENES/igexport-DSXrgRoiIcV_poster.jpg" },
  { title: "Behind-The-Lens Production", desc: "Crew coordination and timeline tracking", video: "/vedios-for-BEHIND THE SCENES/igexport-DSewUY2iJXU.mp4", poster: "/vedios-for-BEHIND THE SCENES/igexport-DSewUY2iJXU_poster.jpg" },
  { title: "Master Export & Delivery", desc: "Ready-to-publish 4K vertical Reels", video: "/vedios-for-BEHIND THE SCENES/igexport-DV0pcB3iN0q.mp4", poster: "/vedios-for-BEHIND THE SCENES/igexport-DV0pcB3iN0q_poster.jpg" }
];

export default function BookPaidTrialShootPage() {
  const [activeTab, setActiveTab] = useState<"business" | "creator">("business");
  const btsContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const scrollLeft = () => {
    if (btsContainerRef.current) {
      btsContainerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (btsContainerRef.current) {
      btsContainerRef.current.scrollBy({ left: 280, behavior: "smooth" });
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
    <div className="flex flex-col min-h-screen bg-[#0A0A0C] text-white pt-24">
      
      {/* Hero Header */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#121215] to-[#0A0A0C] border-b border-white/5">
        <div className="absolute top-[-10%] left-[20%] w-[50%] h-[80%] bg-gradient-to-tr from-[#F59A57]/15 via-[#249E98]/10 to-transparent blur-[130px] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10 text-center">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            TEST OUR PRODUCTION QUALITY &bull; ZERO RISK
          </p>
          <h1 className="font-display font-extrabold text-white text-[38px] md:text-[60px] leading-[1.08] mb-6 max-w-3xl mx-auto">
            Book a <span className="text-[#F59A57]">Paid Trial Shoot</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Experience our end-to-end shoot direction, content strategy, and Reel production without signing a long-term contract.
          </p>

          <div className="inline-flex p-1.5 bg-[#1A1A20] border border-white/10 rounded-2xl max-w-md w-full shadow-2xl">
            <button
              onClick={() => setActiveTab("business")}
              className={`flex-1 py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "business"
                  ? "bg-[#F59A57] text-[#050505] shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
            >
              I&apos;m a Business / Brand
            </button>
            <button
              onClick={() => setActiveTab("creator")}
              className={`flex-1 py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "creator"
                  ? "bg-[#249E98] text-[#050505] shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
            >
              I&apos;m a Creator
            </button>
          </div>
        </div>
      </section>

      {/* Main Options Details Section */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          
          {/* TAB 1: BUSINESS / BRAND */}
          {activeTab === "business" && (
            <div className="bg-[#121215] border border-[#F59A57]/30 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
              <div className="max-w-3xl">
                <span className="inline-block font-mono-custom text-[10px] font-extrabold tracking-widest text-[#F59A57] bg-[#F59A57]/10 px-3.5 py-1.5 rounded-md uppercase mb-6">
                  OPTION 01 &bull; FOR BUSINESSES &amp; BRANDS
                </span>
                <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl mb-6 leading-tight">
                  Test our content quality, shooting style and Reel strategy.
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  Designed for brands that want to see how we plan, script, shoot, and edit before committing to a full retainer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-white text-base mb-2">What&apos;s Included</h3>
                    <ul className="text-sm text-white/70 space-y-2.5">
                      <li className="flex items-center gap-2"><span className="text-[#F59A57]">✓</span> 1 Planned Shoot Session</li>
                      <li className="flex items-center gap-2"><span className="text-[#F59A57]">✓</span> 3 High-Converting Vertical Reels</li>
                      <li className="flex items-center gap-2"><span className="text-[#F59A57]">✓</span> Complete Scripting &amp; Direction</li>
                      <li className="flex items-center gap-2"><span className="text-[#F59A57]">✓</span> High-Retention Editing &amp; Audio</li>
                    </ul>
                  </div>
                  <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-white text-base mb-2">Ideal For</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Restaurants, Showrooms, Gyms, Resorts, Real Estate, and Founders testing agency fit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#F59A57] text-[#050505] rounded-xl text-sm font-bold hover:bg-[#FF8A3D] transition-all shadow-[0_4px_20px_rgba(245,154,87,0.25)]"
                  >
                    Enquire for Business Trial Shoot &rarr;
                  </a>
                  <span className="text-white/40 text-xs font-mono">Zero Contract Commitment &bull; 100% Execution</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CREATOR */}
          {activeTab === "creator" && (
            <div className="bg-[#121215] border border-[#249E98]/30 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
              <div className="max-w-3xl">
                <span className="inline-block font-mono-custom text-[10px] font-extrabold tracking-widest text-[#249E98] bg-[#249E98]/10 px-3.5 py-1.5 rounded-md uppercase mb-6">
                  OPTION 02 &bull; FOR CREATORS &amp; INFLUENCERS
                </span>
                <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl mb-6 leading-tight">
                  Experience our content planning, shoot direction and Reel production.
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  For creators who want to upgrade their visual quality, increase engagement, and attract brand sponsorships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-white text-base mb-2">What&apos;s Included</h3>
                    <ul className="text-sm text-white/70 space-y-2.5">
                      <li className="flex items-center gap-2"><span className="text-[#249E98]">✓</span> Personal Brand Positioning Call</li>
                      <li className="flex items-center gap-2"><span className="text-[#249E98]">✓</span> 1 Studio or Outdoor Shoot</li>
                      <li className="flex items-center gap-2"><span className="text-[#249E98]">✓</span> 3 Premium Edited Creator Reels</li>
                      <li className="flex items-center gap-2"><span className="text-[#249E98]">✓</span> Hook &amp; Caption Optimization</li>
                    </ul>
                  </div>
                  <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-white text-base mb-2">Ideal For</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Lifestyle, Fashion, Fitness, Tech, Food, and Personal Brand Creators wanting real growth.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#249E98] text-[#050505] rounded-xl text-sm font-bold hover:bg-[#208B86] transition-all shadow-[0_4px_20px_rgba(36,158,152,0.25)]"
                  >
                    Enquire for Creator Trial Shoot &rarr;
                  </a>
                  <span className="text-white/40 text-xs font-mono">Batch Creator Session &bull; High Impact</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Behind The Scenes Reel Swiping Rail */}
      <section className="py-20 bg-[#121215] border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          
          {/* Section Header with Left / Right Navigation Buttons */}
          <div className="flex items-end justify-between mb-10">
            <div className="max-w-xl">
              <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
                BEHIND THE SCENES
              </p>
              <h2 className="font-display font-extrabold text-white text-2xl md:text-3xl">
                See exactly how a trial shoot runs.
              </h2>
            </div>

            {/* Swiping Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] hover:bg-white/10 transition-all select-none"
                aria-label="Scroll left"
                suppressHydrationWarning
              >
                &larr;
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:border-[#F59A57] hover:text-[#F59A57] hover:bg-white/10 transition-all select-none"
                aria-label="Scroll right"
                suppressHydrationWarning
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* Horizontally Swiping Reel Rail */}
          <div 
            ref={btsContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
          >
            {btsItems.map((bts, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div 
                  key={idx} 
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  className="flex-shrink-0 w-[240px] md:w-[260px] snap-start group cursor-pointer"
                >
                  <div className={`bg-[#0A0A0C] border rounded-2xl p-4 transition-all duration-300 ${
                    isActive ? "border-[#F59A57] bg-[#16161A] shadow-[0_4px_30px_rgba(245,154,87,0.15)]" : "border-white/5 hover:border-[#F59A57]/40"
                  }`}>
                    
                    <div className="aspect-[9/16] rounded-xl overflow-hidden mb-3 relative bg-black/60 border border-white/5">
                      <img 
                        src={bts.poster} 
                        alt={bts.title} 
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 z-0 ${
                          isActive ? "opacity-0 pointer-events-none" : "opacity-80 group-hover:opacity-30"
                        }`} 
                      />

                      <video
                        ref={(el) => { videoRefs.current[idx] = el; }}
                        src={bts.video}
                        loop={!isActive}
                        muted={!isActive}
                        controls={isActive}
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                          isActive ? "z-20 opacity-100" : "z-10 opacity-0 group-hover:opacity-95 pointer-events-none"
                        }`}
                      />

                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`} />

                      {/* BTS Badge */}
                      <span className="absolute top-2.5 left-2.5 bg-[#F59A57] text-black font-mono-custom text-[9px] font-extrabold px-2.5 py-1 rounded z-30 shadow-md">
                        BTS {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>

                      {/* Play Icon */}
                      <div className={`absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                        <div className="w-11 h-11 rounded-full border border-white/40 bg-black/40 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-[#050505] transition-all backdrop-blur-sm shadow-md">
                          ▶
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-white text-sm mb-1 line-clamp-1">{bts.title}</h4>
                    <p className="text-white/50 text-xs line-clamp-2">{bts.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <Contact />

    </div>
  );
}
