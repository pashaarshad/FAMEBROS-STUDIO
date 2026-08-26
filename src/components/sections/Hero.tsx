export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-bg-primary pt-32 pb-16 overflow-hidden flex items-center section-dark">
      {/* Background glow */}
      <div className="absolute top-[-25%] right-[-10%] w-[60%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(245,154,87,0.1),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <span className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-text-muted mb-6">
            <span className="text-orange">BRAND.</span> CONTENT. INFLUENCE. GROWTH.
          </span>
          
          <h1 className="font-display font-extrabold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] mb-6 text-white max-w-2xl">
            We build brands<br />
            designed to<br />
            <span className="text-orange">grow for years.</span>
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Content that connects. Strategies that scale. Influence that lasts. Growth that stays.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange text-bg-primary rounded-lg text-[15px] font-semibold hover:bg-orange-bright hover:-translate-y-[2px] transition-all"
            >
              Start a Conversation &rarr;
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/30 text-white rounded-lg text-[15px] font-semibold hover:border-white hover:-translate-y-[2px] transition-all"
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Right Visuals - 4 Video Cards */}
        <div className="relative flex justify-end items-center h-full pt-10 lg:pt-0">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md ml-auto">
            <div className="flex flex-col gap-4 mt-8">
              <VideoCard label="01" title="STRATEGY" />
              <VideoCard label="03" title="INFLUENCE" />
            </div>
            <div className="flex flex-col gap-4 -mt-8">
              <VideoCard label="02" title="CONTENT" hasPlay />
              <VideoCard label="04" title="GROWTH" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ label, title, hasPlay = false }: { label: string; title: string; hasPlay?: boolean }) {
  return (
    <div className="relative aspect-[9/16] rounded-2xl border border-border-dark overflow-hidden group bg-gradient-to-br from-[#1c1c21] to-[#050505]">
      {/* Texture overlay placeholder */}
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(118deg,transparent_0_24px,rgba(255,255,255,0.2)_24px_48px)] mix-blend-overlay"></div>
      
      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
        {hasPlay && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-[1.5px] border-white/40 flex items-center justify-center text-white/80 pl-1 group-hover:scale-110 group-hover:border-white/80 transition-all backdrop-blur-sm">
              &#9654;
            </div>
          </div>
        )}
        <div className="flex flex-col gap-1 relative z-10">
          <span className="font-mono text-[10px] tracking-widest text-white/50">{label}</span>
          <span className="font-sans font-bold text-sm tracking-wide text-white">{title}</span>
        </div>
      </div>
    </div>
  );
}
