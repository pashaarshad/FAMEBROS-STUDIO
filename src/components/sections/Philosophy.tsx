const growthNodes = [
  { icon: "👁️", label: "VISIBILITY", row: 1, col: 1 },
  { icon: "🛡️", label: "TRUST", row: 1, col: 3 },
  { icon: "👥", label: "COMMUNITY", row: 1, col: 5 },
  { icon: "💎", label: "BRAND VALUE", row: 1, col: 7 },
  { icon: "🤝", label: "FOLLOWERS", row: 2, col: 2 },
  { icon: "👑", label: "AUTHORITY", row: 2, col: 4 },
  { icon: "🏘️", label: "COMMUNITY", row: 2, col: 6 },
  { icon: "🚀", label: "BUSINESS GROWTH", row: 2, col: 8 },
];

export default function Philosophy() {
  return (
    <section className="bg-[#050505] py-20 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left */}
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#F59A57] mb-5">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-display font-extrabold text-white mb-5 leading-[1.1]"
              style={{ fontSize: "clamp(28px, 3.2vw, 42px)" }}>
              Ads stop when<br />
              you stop paying.<br />
              <span className="text-[#F59A57]">A brand doesn&apos;t.</span>
            </h2>
            <p className="text-[#A7A7A2] text-[15px] leading-relaxed mb-8 max-w-sm">
              We build recognition, trust, community and organic reach first. Paid campaigns and influencer
              marketing become amplifiers — not replacements for a strong brand.
            </p>
            <a href="#engine"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg text-[14px] font-semibold hover:border-white/50 transition-all">
              Our Growth Engine &rarr;
            </a>
          </div>

          {/* Right – Growth Engine Nodes */}
          <div className="relative">
            {/* Top row */}
            <div className="grid grid-cols-4 gap-3 mb-3">
              {[
                { icon: "👁️", label: "VISIBILITY" },
                { icon: "🛡️", label: "TRUST" },
                { icon: "👥", label: "COMMUNITY" },
                { icon: "💎", label: "BRAND VALUE" },
              ].map((node, i) => (
                <div key={node.label}
                  className="flex flex-col items-center gap-2 bg-[#111416] border border-white/10 rounded-xl p-4 hover:border-[#F59A57]/40 transition-all group">
                  <span className="text-2xl">{node.icon}</span>
                  <span className="font-mono-custom text-[9px] tracking-widest text-[#A7A7A2] text-center leading-tight group-hover:text-white transition-colors">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Orange dashed arrows row */}
            <div className="flex justify-between px-6 mb-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  <div className="h-[1px] w-full border-t-2 border-dashed border-[#F59A57]/40" />
                  <span className="text-[#F59A57] text-xs ml-1">↘</span>
                </div>
              ))}
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: "🤝", label: "FOLLOWERS" },
                { icon: "👑", label: "AUTHORITY" },
                { icon: "🏘️", label: "COMMUNITY" },
                { icon: "🚀", label: "BUSINESS GROWTH" },
              ].map((node) => (
                <div key={node.label}
                  className="flex flex-col items-center gap-2 bg-[#111416] border border-white/10 rounded-xl p-4 hover:border-[#F59A57]/40 transition-all group">
                  <span className="text-2xl">{node.icon}</span>
                  <span className="font-mono-custom text-[9px] tracking-widest text-[#A7A7A2] text-center leading-tight group-hover:text-white transition-colors">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
