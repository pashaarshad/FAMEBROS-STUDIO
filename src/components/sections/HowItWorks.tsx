"use client";

const processCards = [
  {
    id: 1,
    stepNum: "STEP 01 / 05",
    title: "Social Media Strategy",
    desc: "We understand your brand, audience, competitors and business goals, then build a clear social media and content strategy designed for consistent growth.",
    tags: ["✓ Content strategy", "✓ Platform planning", "✓ Audience-focused content", "✓ Monthly content direction"],
    stat: "360°",
    statLabel: "Social Media Strategy",
    bg: "bg-[#3B82F6]", // Sky Blue
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    img: "/engine_strategise.jpg",
    stickyTop: "top-24 sm:top-28",
    leftOffset: "ml-0"
  },
  {
    id: 2,
    stepNum: "STEP 02 / 05",
    title: "Content Production, Shoots & Reels",
    desc: "We plan and execute brand shoots, then turn the footage into reels, creatives and professionally edited, ready-to-post content based on your strategy.",
    tags: ["✓ Brand shoots", "✓ Video production", "✓ Reel creation", "✓ Creative direction", "✓ Professional editing", "✓ Ready-to-post content"],
    stat: "50+",
    statLabel: "Reels & Short-Form / Month",
    bg: "bg-[#F472B6]", // Pink
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    img: "/engine_create.jpg",
    stickyTop: "top-28 sm:top-32",
    leftOffset: "ml-0 sm:ml-4"
  },
  {
    id: 3,
    stepNum: "STEP 03 / 05",
    title: "Social Media Management & Growth",
    desc: "From content calendar to publishing and optimisation, we manage your social media consistently and track performance to keep improving your brand presence.",
    tags: ["✓ Content calendar", "✓ Regular publishing", "✓ Page optimisation", "✓ Community management", "✓ Performance tracking", "✓ Monthly analytics"],
    stat: "3X",
    statLabel: "Avg. Posting Frequency",
    bg: "bg-[#10B981]", // Emerald Green
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    img: "/engine_distribute.jpg",
    stickyTop: "top-32 sm:top-36",
    leftOffset: "ml-0 sm:ml-8"
  },
  {
    id: 4,
    stepNum: "STEP 04 / 05",
    title: "Influencer Marketing",
    desc: "We connect your brand with the right creators and manage influencer campaigns designed to build trust, reach new audiences and generate stronger brand awareness.",
    tags: ["✓ Influencer research", "✓ Creator shortlisting", "✓ Campaign planning", "✓ Collaboration management", "✓ Content coordination", "✓ Campaign tracking"],
    stat: "100+",
    statLabel: "Creators Network",
    bg: "bg-[#F59E0B]", // Amber / Warm Orange
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    img: "/engine_analyse.jpg",
    stickyTop: "top-36 sm:top-40",
    leftOffset: "ml-0 sm:ml-12"
  },
  {
    id: 5,
    stepNum: "STEP 05 / 05",
    title: "Meta Ads Management",
    desc: "We plan, launch and optimise Meta advertising campaigns to help your business reach the right audience, generate enquiries and improve campaign performance.",
    tags: ["✓ Meta Ads strategy", "✓ Campaign setup", "✓ Audience targeting", "✓ Retargeting", "✓ Lead generation campaigns", "✓ Performance optimisation"],
    stat: "4.5X",
    statLabel: "Avg. Campaign ROAS",
    bg: "bg-[#8B5CF6]", // Vibrant Purple
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    img: "/engine_measure.jpg",
    stickyTop: "top-40 sm:top-44",
    leftOffset: "ml-0 sm:ml-16"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#FAF6F0] py-20 sm:py-28 border-t border-black/5 relative">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="font-mono-custom text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-3">
            THE FAMEBROS GROWTH ENGINE
          </p>
          <h2 className="font-display font-black text-[#0A0A0C] text-[36px] sm:text-[48px] md:text-[58px] leading-[1.02] uppercase tracking-tight">
            HOW WE GROW YOU
          </h2>
          <p className="text-[#55555C] text-sm sm:text-base md:text-lg mt-3 leading-relaxed font-medium">
            Our process for <span className="text-[#249E98] font-bold">predictable scaling.</span> A structured 5-step system built to scale your business consistently.
          </p>

          {/* Final Flow Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 shadow-xs text-[11px] sm:text-xs font-mono font-bold text-[#0A0A0C] flex-wrap justify-center">
            <span>Strategy</span>
            <span className="text-[#F59A57]">&rarr;</span>
            <span>Content Production</span>
            <span className="text-[#F59A57]">&rarr;</span>
            <span>Social Media Management</span>
            <span className="text-[#F59A57]">&rarr;</span>
            <span>Influencer Marketing</span>
            <span className="text-[#F59A57]">&rarr;</span>
            <span className="text-[#249E98] font-black">Meta Ads</span>
          </div>
        </div>

        {/* Scroll-Driven Sticky Cards Stacking Deck */}
        <div className="relative max-w-4xl mx-auto flex flex-col gap-24 sm:gap-36 pb-24">
          {processCards.map((card, idx) => {
            const zIndexClasses = ["z-10", "z-20", "z-30", "z-40", "z-50"];

            return (
              <div
                key={card.id}
                className={`sticky ${card.stickyTop} ${card.leftOffset} ${zIndexClasses[idx]} transition-all duration-300`}
              >
                <div
                  className={`w-full ${card.bg} text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-white/20 hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] transition-all duration-300`}
                >
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="font-mono-custom text-[11px] sm:text-xs tracking-[0.2em] font-extrabold uppercase text-white/80">
                      {card.stepNum}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-black/80 flex items-center justify-center border border-white/20 shadow-md">
                      {card.icon}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 items-center">
                    
                    {/* Text Details */}
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-3">
                          {card.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal max-w-md">
                          {card.desc}
                        </p>

                        {/* Tag Chips */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {card.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="bg-white/95 text-[#0A0A0C] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-xs border border-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stat Badge */}
                      <div>
                        <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-none block">
                          {card.stat}
                        </span>
                        <span className="text-xs text-white/80 font-medium mt-1 block">
                          {card.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Image Frame */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl bg-black/40">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
