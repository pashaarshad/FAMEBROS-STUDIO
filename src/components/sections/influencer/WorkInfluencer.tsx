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
    const video = videoRefs.current[idx];
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
    }
  };

  return (
    <div id="work" className="bg-[#FFFFFF]">
      {/* 1. CAMPAIGN WORK VIDEO CAROUSEL */}
      <section className="py-24 border-t border-black/5 relative">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
                CAMPAIGN WORK
              </p>
              <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[44px] leading-[1.1] mb-3">
                Recent collaborations.
              </h2>
              <p className="text-[#55555A] text-base leading-relaxed">
                Every reel below was conceptualised, directed, and produced by our in-house team.
              </p>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A] hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
                aria-label="Scroll left"
                suppressHydrationWarning
              >
                &larr;
              </button>
              <button 
                onClick={scrollRight}
                className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A] hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
                aria-label="Scroll right"
                suppressHydrationWarning
              >
                &rarr;
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
                  <div className={`relative aspect-[9/16] rounded-2xl border transition-all duration-300 overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-[#E5E7EB] shadow-lg ${isActive ? 'border-[#F59A57] scale-102 shadow-[0_4px_30px_rgba(245,154,87,0.25)]' : 'border-black/5 group-hover:-translate-y-1.5 group-hover:border-[#F59A57]/40'}`}>
                    
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

                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />

                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-20 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                      <div className="w-12 h-12 rounded-full border border-white/40 bg-black/40 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-black transition-all backdrop-blur-sm shadow-md">
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

          {/* 3 Campaign Metrics Highlights from sample HTML */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#FAFAFA] border border-black/10 rounded-2xl p-7">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#F59A57] mb-4" />
              <h4 className="font-display font-bold text-[#0A0A0A] text-lg mb-2">D2C Brand Launch</h4>
              <p className="text-[#55555A] text-sm mb-4">12 verified micro creators over six weeks, all content produced in-house.</p>
              <div className="font-display text-[32px] font-extrabold text-[#F59A57] leading-none">1.4M</div>
              <p className="font-mono-custom text-xs text-[#55555A] mt-1.5">combined organic reach</p>
            </div>

            <div className="bg-[#FAFAFA] border border-black/10 rounded-2xl p-7">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#249E98] mb-4" />
              <h4 className="font-display font-bold text-[#0A0A0A] text-lg mb-2">Retail Store Campaign</h4>
              <p className="text-[#55555A] text-sm mb-4">Local creators paired with a founder-led organic content push.</p>
              <div className="font-display text-[32px] font-extrabold text-[#249E98] leading-none">3.1&times;</div>
              <p className="font-mono-custom text-xs text-[#55555A] mt-1.5">increase in weekend footfall</p>
            </div>

            <div className="bg-[#FAFAFA] border border-black/10 rounded-2xl p-7">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#F59A57] mb-4" />
              <h4 className="font-display font-bold text-[#0A0A0A] text-lg mb-2">Celebrity Product Launch</h4>
              <p className="text-[#55555A] text-sm mb-4">One celebrity collaboration, amplified across owned channels.</p>
              <div className="font-display text-[32px] font-extrabold text-[#F59A57] leading-none">18K</div>
              <p className="font-mono-custom text-xs text-[#55555A] mt-1.5">new followers in 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL BUSINESS CASE STUDIES (Directly from Sample PDF) */}
      <section className="py-24 bg-[#FAF6F0] border-t border-black/5 relative">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-3">
              FAMEBROS STUDIO &bull; CASE STUDIES
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] text-[34px] md:text-[46px] leading-[1.08] mb-5">
              REAL BUSINESSES.<br />
              REAL CAMPAIGNS.<br />
              REAL GROWTH.
            </h2>
            <p className="text-[#55555A] text-base md:text-lg leading-relaxed">
              A collection of client growth stories from Famebros Studio, built around strategy, content, campaigns, referrals and long-term trust.
            </p>
          </div>

          {/* Core Stat Callout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white border border-black/10 rounded-2xl p-7 text-center shadow-sm">
              <div className="font-display text-4xl font-extrabold text-[#F59A57] mb-2">50+</div>
              <div className="font-mono-custom text-xs uppercase tracking-wider text-[#55555A] font-bold">CLIENTS</div>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-7 text-center shadow-sm">
              <div className="font-display text-4xl font-extrabold text-[#249E98] mb-2">80%</div>
              <div className="font-mono-custom text-xs uppercase tracking-wider text-[#55555A] font-bold">NEW CLIENTS FROM REFERRALS</div>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-7 text-center shadow-sm">
              <div className="font-display text-4xl font-extrabold text-[#F59A57] mb-2">36K+</div>
              <div className="font-mono-custom text-xs uppercase tracking-wider text-[#55555A] font-bold">COMBINED JEWELLERY AUDIENCE</div>
            </div>
          </div>

          <div className="bg-white border-l-4 border-[#249E98] border-y border-r border-black/10 rounded-2xl p-8 mb-16 shadow-sm max-w-3xl mx-auto text-center">
            <p className="font-display font-bold text-[#0A0A0A] text-xl md:text-2xl leading-relaxed">
              &ldquo;The goal is not simply to make social media bigger. The goal is to use social media to help make the business bigger.&rdquo;
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-8">
            {/* CASE STUDY 01 */}
            <div className="bg-white border border-black/10 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="font-mono-custom text-xs font-bold text-[#F59A57] uppercase tracking-wider">
                  CASE STUDY 01 &bull; JEWELLERY RETAIL
                </span>
                <span className="px-3 py-1 bg-[#249E98]/10 text-[#249E98] font-mono-custom text-xs font-bold rounded-md">
                  1 Year+ Partnership
                </span>
              </div>
              <h3 className="font-display font-extrabold text-[#0A0A0A] text-2xl md:text-3xl mb-3">
                Shree Mahalaxmi Jewellers Group
              </h3>
              <p className="text-[#249E98] font-semibold text-base mb-6">
                One store became three. Small pages became a 36K+ combined audience. A trial became a long-term partnership.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#55555A] text-sm leading-relaxed mb-8">
                <div>
                  <h4 className="font-bold text-[#0A0A0A] text-base mb-2">How It Started &amp; Scaled</h4>
                  <p className="mb-4">
                    The client started with a trial of just one jewellery store to test whether our social media strategy could genuinely make a difference. After experiencing our planning, content strategy and execution, they trusted Famebros Studio with all three jewellery stores the very next month.
                  </p>
                  <p>
                    When we started, each page had approximately 500 to 1,000 followers. We shifted the focus from pure product photos to founder stories, jewellery buying behaviour, and festive marketing campaigns.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0A0A0A] text-base mb-2">The Real In-Store Result</h4>
                  <p className="mb-4">
                    When we first started, there were times when the stores were simply waiting for customers to walk in. Today, there are periods when the teams are continuously busy attending customers and managing stronger footfall.
                  </p>
                  <div className="p-4 bg-[#FAF6F0] rounded-xl border border-black/5 font-mono-custom text-xs space-y-1 text-[#0A0A0A]">
                    <div>&bull; Shree Mahalaxmi Jewellers, Kurla: <strong className="text-[#F59A57]">15K+</strong></div>
                    <div>&bull; Kanchanmala Jewellers, Chembur: <strong className="text-[#249E98]">12K+</strong></div>
                    <div>&bull; Mahalaxmi Jewellers: <strong className="text-[#F59A57]">9K+</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE STUDY 02 */}
            <div className="bg-white border border-black/10 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="font-mono-custom text-xs font-bold text-[#F59A57] uppercase tracking-wider">
                  CASE STUDY 02 &bull; FESTIVE FOOTFALL
                </span>
                <span className="px-3 py-1 bg-[#F59A57]/10 text-[#F59A57] font-mono-custom text-xs font-bold rounded-md">
                  Viral Retail Campaign
                </span>
              </div>
              <h3 className="font-display font-extrabold text-[#0A0A0A] text-2xl md:text-3xl mb-3">
                Hazel Dryfruit &amp; Sweets
              </h3>
              <p className="text-[#F59A57] font-semibold text-base mb-6">
                The campaign where the owner asked us to stop boosting.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#55555A] text-sm leading-relaxed">
                <div>
                  <h4 className="font-bold text-[#0A0A0A] text-base mb-2">What Famebros Studio Did</h4>
                  <p className="mb-4">
                    Hazel Dryfruit &amp; Sweets was located outside Mumbai. Location did not stop Famebros from arranging a local freelance production team, writing high-hook scripts, coordinating the shoot with the owner, and launching targeted influencer marketing and Meta Ads around Raksha Bandhan buying behavior.
                  </p>
                  <p className="font-semibold text-[#0A0A0A]">
                    The objective was straightforward: bring more customers into the store.
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="p-6 bg-[#FAF6F0] rounded-2xl border-l-4 border-[#F59A57]">
                    <div className="font-display font-extrabold text-2xl md:text-3xl text-[#0A0A0A] mb-2">
                      &ldquo;Stop boosting. It&apos;s overcrowded.&rdquo;
                    </div>
                    <p className="text-xs text-[#55555A]">
                      Just one day before Raksha Bandhan, the store experienced extremely heavy footfall, moving people directly from their screens into the physical store.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE STUDY 03 & 04 GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CASE 03 */}
              <div className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm">
                <span className="font-mono-custom text-xs font-bold text-[#249E98] uppercase tracking-wider block mb-3">
                  CASE STUDY 03 &bull; REACH BREAKTHROUGH
                </span>
                <h3 className="font-display font-bold text-[#0A0A0A] text-2xl mb-2">
                  Raj Laxmi Jewellers
                </h3>
                <p className="text-[#249E98] font-semibold text-sm mb-4">
                  A struggling page. Then 300K+ views on the first business reel.
                </p>
                <p className="text-[#55555A] text-sm leading-relaxed mb-6">
                  Raj Laxmi Jewellers approached Famebros Studio with a page struggling to get reel reach. We coordinated with a local videographer, restructured the scripting, and optimized the hook &mdash; crossing 300,000+ views on the very first reel.
                </p>
                <div className="inline-block px-4 py-2 bg-[#249E98]/10 text-[#249E98] font-bold text-xs rounded-lg">
                  300K+ Views on First New Reel
                </div>
              </div>

              {/* CASE 04 */}
              <div className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm">
                <span className="font-mono-custom text-xs font-bold text-[#F59A57] uppercase tracking-wider block mb-3">
                  CASE STUDY 04 &bull; FASHION RETAIL
                </span>
                <h3 className="font-display font-bold text-[#0A0A0A] text-2xl mb-2">
                  Devi &amp; Company, Kanpur
                </h3>
                <p className="text-[#F59A57] font-semibold text-sm mb-4">
                  Two established stores. A third store opening campaign.
                </p>
                <p className="text-[#55555A] text-sm leading-relaxed mb-6">
                  Devi &amp; Company is a family fashion business in Kanpur. When opening their third store, they trusted Famebros Studio with complete launch strategy, shoot planning, promotional creatives, and digital distribution.
                </p>
                <div className="inline-block px-4 py-2 bg-[#F59A57]/10 text-[#F59A57] font-bold text-xs rounded-lg">
                  Opening Campaign &bull; Complete Distribution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY & THE 5-STEP GROWTH SYSTEM (From Sample PDF) */}
      <section className="py-24 bg-[#0A0A0C] text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl mb-16">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#249E98] font-bold mb-3">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-display font-extrabold text-white text-[34px] md:text-[46px] leading-[1.1] mb-5">
              We measure what happens after the content.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
              At Famebros Studio, we do not measure success only by followers, likes or one viral reel. For us, the bigger questions are:
            </p>
            <div className="space-y-3 font-display font-semibold text-lg text-white/90">
              <div className="flex items-center gap-3"><span className="text-[#249E98] font-bold">&bull;</span> Did more people discover the business?</div>
              <div className="flex items-center gap-3"><span className="text-[#249E98] font-bold">&bull;</span> Did the brand become more trusted?</div>
              <div className="flex items-center gap-3"><span className="text-[#249E98] font-bold">&bull;</span> Did enquiries increase?</div>
              <div className="flex items-center gap-3"><span className="text-[#249E98] font-bold">&bull;</span> Did customers walk into the store?</div>
              <div className="flex items-center gap-3"><span className="text-[#249E98] font-bold">&bull;</span> Did the business grow?</div>
            </div>
          </div>

          <div className="p-8 bg-[#121215] border-l-4 border-[#F59A57] rounded-2xl mb-16">
            <p className="font-display font-extrabold text-xl md:text-2xl text-white">
              That is the kind of growth we work towards.
            </p>
          </div>

          {/* 5-Step System */}
          <div className="mb-16">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-8">
              THE FAMEBROS STUDIO GROWTH SYSTEM
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  num: "01",
                  title: "Understand",
                  desc: "We study the business, audience, competitors, market and current social media position.",
                },
                {
                  num: "02",
                  title: "Strategise",
                  desc: "We create a marketing and content direction based on the actual business objective.",
                },
                {
                  num: "03",
                  title: "Create",
                  desc: "Famebros Studio develops concepts, scripts, shoots, reels, creatives and campaign content.",
                },
                {
                  num: "04",
                  title: "Distribute",
                  desc: "We use the right combination of organic social media, influencer marketing and paid advertising.",
                },
                {
                  num: "05",
                  title: "Optimise",
                  desc: "We study performance, understand what customers are responding to and continuously improve.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-[#121215] border border-white/10 rounded-2xl p-6 hover:border-[#249E98]/40 transition-all"
                >
                  <span className="font-mono-custom text-xs font-bold text-[#F59A57] block mb-3">
                    {step.num}
                  </span>
                  <h4 className="font-display font-bold text-white text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 80% Referrals Callout */}
          <div className="bg-[#16161C] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">
                Around 80% of our new clients come through referrals.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                One of the strongest signs that clients trust Famebros Studio is how many new businesses reach us through recommendations. A business starts working with us, experiences our execution, and recommends us to another business owner.
              </p>
            </div>
            <div className="flex gap-6 flex-shrink-0 text-center">
              <div>
                <div className="font-display text-4xl font-extrabold text-[#F59A57]">80%</div>
                <div className="font-mono-custom text-[10px] text-white/50 tracking-wider uppercase mt-1">Via Referrals</div>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <div className="font-display text-4xl font-extrabold text-[#249E98]">50+</div>
                <div className="font-mono-custom text-[10px] text-white/50 tracking-wider uppercase mt-1">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
