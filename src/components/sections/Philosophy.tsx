"use client";

import Link from "next/link";

const row1Nodes = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Visibility",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
      </svg>
    ),
    label: "Followers",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.599-3.75A11.952 11.952 0 0112 2.714z" />
      </svg>
    ),
    label: "Trust",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 21c-2.316 0-4.443-.69-6.221-1.873A4.013 4.013 0 018 15.75c1.474 0 2.81.774 3.57 1.968m1.93-2.158a4.966 4.966 0 001-2.935c0-2.268-1.503-4.185-3.57-4.807M15 7.5a3 3 0 11-6 0 3 3 0 016 0zm6.375 2.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "Community",
  },
];

const row2Nodes = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l2.25-9 4.5 4.5L12 3l3 4.5 4.5-4.5 2.25 9M2.25 12h19.5M2.25 12v6.75A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V12M12 16.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      </svg>
    ),
    label: "Authority",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
      </svg>
    ),
    label: "Community",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L12 3l6 9-6 9-6-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M6 12h12" />
      </svg>
    ),
    label: "Brand Value",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.59 2.5a14.98 14.98 0 00-6.16 12.12c0 2.29.51 4.46 1.43 6.39L9.59 14.37z" />
      </svg>
    ),
    label: "Business Growth",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-[#050505] py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_2.15fr] gap-12 lg:gap-16 items-center">

          {/* Left Column (Restored to original prominent alignment/text sizes) */}
          <div className="flex flex-col justify-center">
            <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#F59A57] mb-5">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-display font-extrabold text-white mb-6 leading-[1.1] text-[32px] md:text-[40px]">
              Ads stop when<br />
              you stop paying.<br />
              <span className="text-[#F59A57]">A brand doesn&apos;t.</span>
            </h2>
            <p className="text-[#A7A7A2] text-sm leading-relaxed mb-8 max-w-sm">
              We build recognition, trust, community and organic reach first. Paid campaigns and influencer
              marketing become amplifiers — not replacements for a strong brand.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-2.5 border border-white/20 text-white rounded-full text-[14px] font-bold hover:border-white/50 hover:bg-white/5 transition-all self-start"
            >
              Our Growth Engine
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#050505] font-bold text-xs">
                →
              </span>
            </Link>
          </div>

          {/* Right Column – Double Row Growth Flow with interconnecting vector arrows */}
          <div className="relative p-6">
            
            {/* Connection SVG Line Canvas */}
            <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full animate-pulse" viewBox="0 0 700 320" fill="none">
                {/* --- Row 1 Horizontal Connections --- */}
                {/* Vis -> Fol */}
                <path d="M 125 70 L 165 70" stroke="#F59A57" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 165 70 L 159 66 M 165 70 L 159 74" stroke="#F59A57" strokeWidth="1.2" />

                {/* Fol -> Trust */}
                <path d="M 285 70 L 325 70" stroke="#F59A57" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 325 70 L 319 66 M 325 70 L 319 74" stroke="#F59A57" strokeWidth="1.2" />

                {/* Trust -> Comm */}
                <path d="M 445 70 L 485 70" stroke="#F59A57" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 485 70 L 479 66 M 485 70 L 479 74" stroke="#F59A57" strokeWidth="1.2" />

                {/* --- Loop/Sweep Connection from Row 1 End to Row 2 Start --- */}
                <path d="M 605 70 C 685 70, 685 160, 350 160 C 15 160, 15 250, 65 250" stroke="#F59A57" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 65 250 L 59 246 M 65 250 L 59 254" stroke="#F59A57" strokeWidth="1.5" />

                {/* --- Row 2 Horizontal Connections --- */}
                {/* Auth -> Comm */}
                <path d="M 125 250 L 165 250" stroke="#F59A57" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 165 250 L 159 246 M 165 250 L 159 254" stroke="#F59A57" strokeWidth="1.2" />

                {/* Comm -> BrandVal */}
                <path d="M 285 250 L 325 250" stroke="#F59A57" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 325 250 L 319 246 M 325 250 L 319 254" stroke="#F59A57" strokeWidth="1.2" />

                {/* BrandVal -> Business Growth */}
                <path d="M 445 250 L 485 250" stroke="#F59A57" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 485 250 L 479 246 M 485 250 L 479 254" stroke="#F59A57" strokeWidth="1.2" />
              </svg>
            </div>

            {/* Compact Cards Container - Two Rows */}
            <div className="flex flex-col gap-16 relative z-10">
              
              {/* Row 1 Nodes */}
              <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-4">
                {row1Nodes.map((node, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-[120px] h-[120px] rounded-xl border border-[#F59A57]/20 p-3 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#111416]/95 to-[#050505]/98 shadow-[0_0_20px_rgba(245,154,87,0.04)] hover:border-[#F59A57]/60 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1C1C21]/80 flex items-center justify-center shadow-inner">
                      {node.icon}
                    </div>
                    <span className="font-sans font-bold text-[11px] text-white text-center tracking-wide leading-tight">
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Row 2 Nodes */}
              <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-4">
                {row2Nodes.map((node, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-[120px] h-[120px] rounded-xl border border-[#249E98]/10 p-3 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#111416]/95 to-[#050505]/98 shadow-[0_0_20px_rgba(36,158,152,0.03)] hover:border-[#249E98]/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1C1C21]/80 flex items-center justify-center shadow-inner">
                      {node.icon}
                    </div>
                    <span className="font-sans font-bold text-[11px] text-white text-center tracking-wide leading-tight">
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
