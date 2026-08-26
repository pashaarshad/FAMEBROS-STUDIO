"use client";

import Image from "next/image";

const heroCards = [
  {
    num: "01",
    label: "STRATEGY",
    sub: "That Builds",
    bg: "from-[#1a1a1f] to-[#050505]",
  },
  {
    num: "02",
    label: "CONTENT",
    sub: "That Connects",
    bg: "from-[#1a1a1f] to-[#050505]",
    hasPlay: true,
    featured: true,
  },
  {
    num: "03",
    label: "INFLUENCE",
    sub: "That Converts",
    bg: "from-[#1a1a1f] to-[#050505]",
  },
  {
    num: "04",
    label: "GROWTH",
    sub: "That Lasts",
    bg: "from-[#1a1a1f] to-[#050505]",
  },
];

const trustLogos = [
  "PRESENCE",
  "THE BOMBAY BRONX",
  "HK",
  "MERAKI",
  "F BAR",
  "theka",
];

const stats = [
  { icon: "⭐", num: "6+", label: "Years of Experience" },
  { icon: "👥", num: "50+", label: "Brands Partnered" },
  { icon: "🏢", num: "25", label: "Team Members" },
  { icon: "🎬", num: "1000+", label: "Reels Created / Month" },
];

export default function Hero() {
  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative min-h-screen bg-[#050505] pt-28 pb-12 overflow-hidden flex items-center">
        {/* Orange radial glow */}
        <div className="absolute top-[-20%] right-[-5%] w-[55%] h-[130%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(245,154,87,0.13), transparent 62%)" }} />

        <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center">

            {/* Left */}
            <div>
              <p className="font-mono-custom text-[11px] tracking-[0.18em] uppercase text-[#A7A7A2] mb-6">
                BRAND. CONTENT. INFLUENCE. GROWTH.
              </p>

              <h1 className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}>
                We build brands<br />
                designed to<br />
                <span className="text-gradient-orange-teal">grow for years.</span>
              </h1>

              <p className="text-[#A7A7A2] mb-10 max-w-md leading-relaxed"
                style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}>
                Content that connects. Strategies that scale.<br />
                Influence that lasts. Growth that stays.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59A57] text-[#050505] rounded-full font-semibold text-[15px] hover:bg-[#FF8A3D] hover:-translate-y-[2px] transition-all">
                  Start a Conversation &rarr;
                </a>
                <a href="#work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-full font-semibold text-[15px] hover:border-white hover:-translate-y-[2px] transition-all">
                  See Our Work <span className="text-xs">▶</span>
                </a>
              </div>
            </div>

            {/* Right – 4 video cards */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="flex gap-3 items-end">
                {heroCards.map((card, i) => (
                  <div
                    key={card.num}
                    className={`relative rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 bg-gradient-to-b ${card.bg} group cursor-pointer`}
                    style={{
                      width: card.featured ? "145px" : "105px",
                      aspectRatio: "9/16",
                      marginTop: i === 1 ? "-24px" : i === 2 ? "16px" : i === 3 ? "8px" : "32px",
                    }}
                  >
                    {/* Grain texture */}
                    <div className="absolute inset-0 opacity-[0.04]"
                      style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"1\"/%3E%3C/svg%3E')" }} />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Play button for featured card */}
                    {card.hasPlay && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-12 h-12 rounded-full border-[1.5px] border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-sm pl-0.5 group-hover:scale-110 group-hover:border-white transition-all">
                          ▶
                        </div>
                      </div>
                    )}

                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                      <span className="font-mono-custom text-[9px] tracking-[0.1em] text-white/50 block mb-0.5">{card.num}</span>
                      <span className="font-semibold text-[11px] text-white block">{card.label}</span>
                      <span className="text-[10px] text-[#F59A57]">{card.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── TRUST + STATS ROW ─── */}
          <div className="mt-16 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Brand logos */}
            <div className="flex-1">
              <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#6E716F] mb-4">
                TRUSTED BY BRANDS ACROSS INDIA
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {trustLogos.map((logo) => (
                  <span key={logo}
                    className="font-display font-extrabold text-[13px] tracking-tight text-white/30 hover:text-white/60 transition-colors cursor-default whitespace-nowrap">
                    {logo}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats pill */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl border border-white/10 overflow-hidden">
                {stats.map((s) => (
                  <div key={s.num} className="bg-[#0B0D0E] px-5 py-4 flex flex-col gap-1">
                    <span className="text-[18px]">{s.icon}</span>
                    <span className="font-display font-extrabold text-[28px] leading-none tracking-tight text-white">{s.num}</span>
                    <span className="text-[12px] text-[#6E716F] leading-tight mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
