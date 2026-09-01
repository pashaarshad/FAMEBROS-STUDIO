"use client";

import { useState } from "react";
import Link from "next/link";
import Contact from "@/components/sections/Contact";

export default function BookPaidTrialShootPage() {
  const [activeTab, setActiveTab] = useState<"business" | "creator">("business");

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

          {/* 2 Clear Options Toggle */}
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

      {/* Option Details Section */}
      <section className="py-20 bg-[#0A0A0C] border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          
          {/* Business / Brand Option */}
          {activeTab === "business" && (
            <div className="bg-[#121215] border border border-white/10 rounded-3xl p-8 md:p-12 animate-fadeIn">
              <div className="max-w-3xl">
                <span className="inline-block font-mono-custom text-[11px] font-bold tracking-widest text-[#F59A57] bg-[#F59A57]/10 px-3.5 py-1.5 rounded-md uppercase mb-6">
                  OPTION 01 &bull; FOR BUSINESSES &amp; BRANDS
                </span>
                <h2 className="font-display font-extrabold text-white text-[32px] md:text-[44px] leading-[1.1] mb-6">
                  Test our content quality, shooting style and Reel strategy.
                </h2>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                  Designed for business owners, restaurants, D2C brands, and service businesses who want to evaluate our camera crew, story direction, and high-converting Reel production before committing to a monthly retainer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl">
                    <h3 className="font-bold text-white text-base mb-2 text-[#F59A57]">What We Shoot</h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      Product highlights, behind-the-scenes, founder story on camera, and customer experience walkthroughs.
                    </p>
                  </div>
                  <div className="bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl">
                    <h3 className="font-bold text-white text-base mb-2 text-[#F59A57]">Deliverables</h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      5 to 8 ready-to-post vertical Reels with captions, hooks, background score, and 48-hour edit delivery.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#F59A57] text-[#050505] rounded-xl text-sm font-bold hover:bg-[#FF8A3D] transition-all shadow-[0_4px_20px_rgba(245,154,87,0.25)]"
                  >
                    Enquire for Business Trial Shoot &rarr;
                  </a>
                  <span className="text-white/40 text-xs font-mono">1 Shoot Session &bull; Fast Delivery</span>
                </div>
              </div>
            </div>
          )}

          {/* Creator Option */}
          {activeTab === "creator" && (
            <div className="bg-[#121215] border border border-white/10 rounded-3xl p-8 md:p-12 animate-fadeIn">
              <div className="max-w-3xl">
                <span className="inline-block font-mono-custom text-[11px] font-bold tracking-widest text-[#249E98] bg-[#249E98]/10 px-3.5 py-1.5 rounded-md uppercase mb-6">
                  OPTION 02 &bull; FOR CREATORS &amp; INFLUENCERS
                </span>
                <h2 className="font-display font-extrabold text-white text-[32px] md:text-[44px] leading-[1.1] mb-6">
                  Experience our content planning, shoot direction and Reel production.
                </h2>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                  Designed for creators, actors, singers, and personal brands who want to experience our batch shooting, script hooks, on-camera direction, and trend editing to boost their profile reach.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl">
                    <h3 className="font-bold text-white text-base mb-2 text-[#249E98]">What We Plan</h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      Pre-shoot hook scripting, outfit styling consultation, lighting setups, and multi-angle camera direction.
                    </p>
                  </div>
                  <div className="bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl">
                    <h3 className="font-bold text-white text-base mb-2 text-[#249E98]">Deliverables</h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      5 to 8 high-engagement vertical Reels edited with trending audio, smooth transitions, and color grading.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
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

      {/* Behind The Scenes Reel Rail */}
      <section className="py-20 bg-[#121215] border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="max-w-xl mb-12">
            <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
              BEHIND THE SCENES
            </p>
            <h2 className="font-display font-extrabold text-white text-2xl md:text-3xl">
              See exactly how a trial shoot runs.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Planning Shot List", desc: "Pre-shoot strategy before camera arrives", video: "/vedios/Shoot testimonial/Video-7411.mp4", poster: "/vedios/Shoot testimonial/Video-7411_poster.jpg" },
              { title: "Lighting & Camera Setup", desc: "Professional gear brought directly to location", video: "/vedios/Shoot testimonial/Video-15097.mp4", poster: "/vedios/Shoot testimonial/Video-15097_poster.jpg" },
              { title: "On-Camera Direction", desc: "Directing first-time founders & creators", video: "/vedios/Shoot testimonial/Video-15430.mp4", poster: "/vedios/Shoot testimonial/Video-15430_poster.jpg" },
              { title: "Final Edited Reel", desc: "High-converting vertical Reel delivered", video: "/vedios/Shoot testimonial/Video-21539.mp4", poster: "/vedios/Shoot testimonial/Video-21539_poster.jpg" }
            ].map((bts, idx) => (
              <div key={idx} className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-4">
                <div className="aspect-[9/16] rounded-xl overflow-hidden mb-3 relative bg-black/40 border border-white/5">
                  <img src={bts.poster} alt={bts.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 bg-[#F59A57] text-black font-mono-custom text-[8px] font-extrabold px-2 py-0.5 rounded">
                    BTS 0{idx + 1}
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{bts.title}</h4>
                <p className="text-white/50 text-xs">{bts.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

    </div>
  );
}
