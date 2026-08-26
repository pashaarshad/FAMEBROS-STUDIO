const services = [
  {
    num: "01",
    icon: "📱",
    title: "Social Media\nGrowth",
    desc: "Strategy, content, posting, ads & analytics that drive real growth.",
    accent: "#F59A57",
    imgBg: "from-[#1a120a] to-[#050505]",
  },
  {
    num: "02",
    icon: "🎬",
    title: "Content\nProduction",
    desc: "Photos, Reels, Brand films, product shoots & commercial video production.",
    accent: "#F59A57",
    imgBg: "from-[#0a0f1a] to-[#050505]",
  },
  {
    num: "03",
    icon: "🤝",
    title: "Influencer\nMarketing",
    desc: "Right creators, real influence. Campaigns that connect & convert.",
    accent: "#F59A57",
    imgBg: "from-[#150a1a] to-[#050505]",
  },
  {
    num: "04",
    icon: "⭐",
    title: "Creator\nGrowth",
    desc: "We build creators, personal brands, and open doors to collaborations.",
    accent: "#F59A57",
    imgBg: "from-[#0a1a15] to-[#050505]",
  },
  {
    num: "05",
    icon: "🎥",
    title: "Reel\nShoots",
    desc: "One shoot day. A month of content. That's the FAMEBROS way.",
    accent: "#F59A57",
    imgBg: "from-[#1a1a0a] to-[#050505]",
  },
  {
    num: "06",
    icon: "🎪",
    title: "Event\nReel Shoots",
    desc: "Fast. Creative. Vertical. Capturing your events as they happen.",
    accent: "#F59A57",
    imgBg: "from-[#0a1520] to-[#050505]",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#050505] py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#A7A7A2] mb-4">
              WHAT WE DO
            </p>
            <h2 className="font-display font-extrabold text-white leading-[1.1]"
              style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}>
              Everything your brand needs to grow<br />
              in today&apos;s{" "}
              <span className="text-[#249E98]">digital world.</span>
            </h2>
          </div>
          <a href="#all-services"
            className="inline-flex items-center gap-2 text-[13px] text-[#A7A7A2] hover:text-white transition-colors whitespace-nowrap">
            Explore All Services &rarr;
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {services.map((svc) => (
            <div key={svc.num}
              className={`relative rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:-translate-y-1 hover:border-[#F59A57]/40 transition-all bg-gradient-to-b ${svc.imgBg}`}
              style={{ minHeight: "240px" }}>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 p-4 h-full flex flex-col justify-between" style={{ minHeight: "240px" }}>
                <div>
                  <span className="font-mono-custom text-[9px] tracking-[0.1em] text-[#A7A7A2]">{svc.num}</span>
                  <div className="text-2xl mt-2 mb-3">{svc.icon}</div>
                  <h3 className="font-display font-bold text-[#F59A57] text-[14px] leading-tight mb-2 whitespace-pre-line">
                    {svc.title}
                  </h3>
                  <p className="text-[#A7A7A2] text-[11px] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="mt-4 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white text-[11px] group-hover:border-[#F59A57] group-hover:text-[#F59A57] group-hover:translate-x-0.5 transition-all">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
