"use client";

const processCards = [
  {
    id: 1,
    title: "Reels & content creation",
    desc: "We plan, shoot, and create reels and social content that feels natural to your brand. Every piece is made for the platform, the audience, and the story you want to tell.",
    tags: ["✓ Reels & short-form", "✓ Creative direction", "✓ Video editing"],
    stat: "50+",
    statLabel: "Brands & businesses",
    bg: "bg-[#3B82F6]", // Sky Blue
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    img: "/engine_create.jpg",
    stickyTop: "top-24 sm:top-28",
    leftOffset: "ml-0"
  },
  {
    id: 2,
    title: "Social media strategy",
    desc: "We build a clear content direction around your brand, audience, and goals — so your social media feels consistent, purposeful, and easier to grow.",
    tags: ["✓ Content strategy", "✓ Platform planning", "✓ Audience-focused content"],
    stat: "360°",
    statLabel: "Social media strategy",
    bg: "bg-[#F472B6]", // Pink
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    img: "/engine_strategise.jpg",
    stickyTop: "top-28 sm:top-32",
    leftOffset: "ml-0 sm:ml-5"
  },
  {
    id: 3,
    title: "Brand shoots & video production",
    desc: "From the first shot to the final edit, we produce visual content that gives your brand a stronger presence online — from brand films and campaigns to product, food, and event shoots.",
    tags: ["✓ Brand shoots", "✓ Video production", "✓ Professional editing"],
    stat: "100+",
    statLabel: "Shoots executed",
    bg: "bg-[#10B981]", // Emerald Green
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      </svg>
    ),
    img: "/engine_analyse.jpg",
    stickyTop: "top-32 sm:top-36",
    leftOffset: "ml-0 sm:ml-10"
  },
  {
    id: 4,
    title: "Social account management",
    desc: "From content calendar to caption to publish button, we run your social presence end to end. Consistent posting, platform-native content, and monthly performance reviews so nothing flies blind.",
    tags: ["✓ 30-day content calendar", "✓ Daily publishing", "✓ Monthly analytics"],
    stat: "3X",
    statLabel: "Avg. posting frequency",
    bg: "bg-[#F59E0B]", // Amber / Warm Orange
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    img: "/engine_distribute.jpg",
    stickyTop: "top-36 sm:top-40",
    leftOffset: "ml-0 sm:ml-15"
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
            Our process for <span className="text-[#249E98] font-bold">predictable scaling.</span> A structured 4-step system built to scale your business consistently.
          </p>
        </div>

        {/* Scroll-Driven Sticky Cards Stacking Deck */}
        <div className="relative max-w-4xl mx-auto flex flex-col gap-24 sm:gap-36 pb-24">
          {processCards.map((card, idx) => {
            const zIndexClass = idx === 0 ? "z-10" : idx === 1 ? "z-20" : idx === 2 ? "z-30" : "z-40";

            return (
              <div
                key={card.id}
                className={`sticky ${card.stickyTop} ${card.leftOffset} ${zIndexClass} transition-all duration-300`}
              >
                <div
                  className={`w-full ${card.bg} text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-white/20 hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] transition-all duration-300`}
                >
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="font-mono-custom text-[11px] sm:text-xs tracking-[0.2em] font-extrabold uppercase text-white/80">
                      STEP 0{card.id} / 04
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
