"use client";

const storyTimeline = [
  "The Beginning",
  "Behind the Scenes",
  "Struggles",
  "Failures",
  "Rebuilding",
  "Growth",
  "Success"
];

const storyPillars = [
  {
    title: "The real people",
    desc: "Founders, staff, karigars, the person who opens the shutter at 8am. Audiences connect with people far faster than with products.",
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "The honest parts",
    desc: "The struggles and the failures are usually the most watched content we make. Nobody shares a perfect story — they share a real one.",
    icon: (
      <svg className="w-5 h-5 text-[#249E98]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "The journey, month after month",
    desc: "Told consistently, your business stops being a shop people pass and becomes a story people follow.",
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function Storytelling() {
  return (
    <section className="bg-[#FAF6F0] py-24 border-t border-black/5 relative overflow-hidden">
      
      {/* Background abstract layout elements */}
      <div className="absolute right-[-10%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-[#249E98]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="head mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#249E98] font-bold mb-4">
            BUSINESS STORYTELLING
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[42px] leading-[1.1] mb-5">
            We don&apos;t just create content. <br />
            We build your <span className="text-[#F59A57]">story.</span>
          </h2>
          <p className="text-[#55555A] text-sm md:text-base leading-relaxed max-w-2xl">
            Every business has a story worth telling &mdash; how it started, what nearly ended it, and what it took to keep going. That story is what people remember. Promotional posts are what they scroll past.
          </p>
        </div>

        {/* Timeline Flow Steps */}
        <div className="mb-20 bg-white/60 border border-black/5 rounded-3xl p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
          <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#55555A] mb-6 font-bold text-center">
            THE ANATOMY OF A BRAND STORY
          </p>
          
          {/* Desktop Flow Layout */}
          <div className="hidden md:flex items-center justify-between gap-1 max-w-5xl mx-auto">
            {storyTimeline.map((step, idx) => (
              <div key={idx} className="flex items-center flex-1 last:flex-none">
                <div 
                  className={`px-4 py-3 rounded-xl text-[12px] font-bold text-center flex-grow transition-all duration-300 ${
                    idx === storyTimeline.length - 1
                      ? "bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-white shadow-[0_4px_15px_rgba(245,154,87,0.2)]"
                      : "bg-[#FAFAFA] border border-black/10 text-[#0A0A0A]/70 hover:border-[#F59A57]/30 hover:text-[#0A0A0A]"
                  }`}
                >
                  {step}
                </div>
                {idx < storyTimeline.length - 1 && (
                  <span className="text-[#F59A57] text-[14px] font-bold px-1 select-none">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow Layout */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-2 max-w-sm mx-auto">
            {storyTimeline.map((step, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <div 
                  className={`px-3 py-2.5 rounded-lg text-[10px] font-bold text-center ${
                    idx === storyTimeline.length - 1
                      ? "bg-[#F59A57] text-white shadow-sm"
                      : "bg-[#FAFAFA] border border-black/10 text-[#0A0A0A]/75"
                  }`}
                >
                  {step}
                </div>
                {idx < storyTimeline.length - 1 && (
                  <span className="text-[#F59A57] text-[11px] font-bold select-none">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3-Column Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {storyPillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-black/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[#F59A57]/20 transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-[#0A0A0A] text-base mb-3 group-hover:text-[#F59A57] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[#55555A] text-xs md:text-[13px] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
