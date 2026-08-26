export default function Packages() {
  return (
    <section className="bg-[#050505] py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background camera glow placeholder */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[100%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(36,158,152,0.08), transparent 60%)" }} />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 items-start">
          
          {/* Left info column */}
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#249E98] mb-4">
              OUR SOLUTIONS
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[40px] leading-[1.1] mb-5">
              Social Media<br />
              Growth Packages
            </h2>
            <p className="text-[#A7A7A2] text-sm leading-relaxed mb-8 max-w-xs">
              Choose the level of support your brand needs. All packages are customized to your goals.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg text-[14px] font-semibold hover:border-white/50 transition-all">
              Let&apos;s Discuss Your Brand &rarr;
            </a>

            {/* Visual camera overlay at the bottom left */}
            <div className="mt-12 opacity-40 hover:opacity-75 transition-opacity max-w-[280px] hidden lg:block">
              {/* Representing a premium DSLR camera placeholder visually */}
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#111416] to-[#1C1C21] rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
                <span className="font-mono-custom text-[9px] tracking-widest text-[#249E98]">EQUIPMENT & CREATIVE</span>
                <span className="text-white text-xs font-semibold">Premium Camera Shoot Included</span>
              </div>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Package */}
            <div className="bg-[#111416]/50 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="font-mono-custom text-[11px] tracking-widest text-[#249E98] block">01 · BASIC</span>
                    <h3 className="font-display font-extrabold text-white text-[22px] mt-1">Social Media Growth</h3>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Instagram & Facebook Management",
                    "1 Professional Content Shoot / Month",
                    "13 – 15 Reels from Shoot",
                    "Up to 12 Additional Reels Editing",
                    "Content Planning, Captions, Hashtags",
                    "Meta Ads Management",
                    "Creatives When Needed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#A7A7A2]">
                      <span className="text-[#249E98] mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 border border-white/10 text-white rounded-lg text-sm font-semibold hover:bg-white/5 transition-all">
                Best for Growing Brands &rarr;
              </a>
            </div>

            {/* Elite Package */}
            <div className="bg-[#111416] border border-[#F59A57]/40 rounded-2xl p-8 flex flex-col justify-between relative hover:border-[#F59A57] transition-all">
              <span className="absolute -top-3 right-6 bg-[#F59A57] text-[#050505] font-mono-custom text-[9px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase">
                Most Comprehensive
              </span>
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="font-mono-custom text-[11px] tracking-widest text-[#F59A57] block">02 · ELITE</span>
                    <h3 className="font-display font-extrabold text-white text-[22px] mt-1">Social Media Growth</h3>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Instagram, Facebook & YouTube Shorts",
                    "2 Professional Content Shoots / Month",
                    "26 Reels Content Creation",
                    "Content Planning, Captions, Hashtags",
                    "Creatives When Needed",
                    "Meta Ads Management",
                    "Influencer Coordination & Support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white">
                      <span className="text-[#F59A57] mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#F59A57] text-[#050505] rounded-lg text-sm font-semibold hover:bg-[#FF8A3D] transition-all">
                Best for Scaling Brands &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
