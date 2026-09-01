"use client";

const pillars = [
  {
    num: "01",
    title: "Brand Authority",
    desc: "Premium content that makes your business impossible to overlook and easier to trust.",
    color: "border-[#F59A57]"
  },
  {
    num: "02",
    title: "Organic + Paid Growth",
    desc: "Content and campaigns designed to consistently reach the right people and generate demand.",
    color: "border-[#249E98]"
  },
  {
    num: "03",
    title: "Attention-to-Sales Systems",
    desc: "DMs, WhatsApp, landing pages and automation that help turn attention into actual business.",
    color: "border-[#F59A57]"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#FAF6F0] py-24 border-t border-black/5 relative overflow-hidden">
      {/* Accent vector swirl */}
      <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="#000000">
          <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          
          {/* Left Column: Heading & Visual */}
          <div className="space-y-8">
            <div>
              <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#249E98] mb-4">
                WHY FAMEBROS
              </p>
              <h2 className="font-display font-extrabold text-[#0A0A0A] text-[34px] md:text-[44px] leading-[1.1]">
                We don&apos;t just grow views.<br />
                We grow <span className="text-[#F59A57]">businesses.</span>
              </h2>
            </div>
            
            <p className="text-[#55555A] text-sm md:text-base leading-relaxed max-w-md">
              Most agencies stop at likes, followers and reach. We go further, combining strategy, content and performance marketing to turn attention into trust, enquiries, customers and measurable business growth.
            </p>

            {/* Growth Stat Board */}
            <div className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-2xl p-6 grid grid-cols-2 gap-6 max-w-sm shadow-sm">
              <div>
                <span className="text-[28px] font-black text-[#F59A57] block leading-none">+300%</span>
                <span className="text-[10px] font-bold text-[#55555A] uppercase tracking-wider mt-1 block">Avg Organic Reach</span>
              </div>
              <div className="border-l border-black/5 pl-6">
                <span className="text-[28px] font-black text-[#249E98] block leading-none">4.5X</span>
                <span className="text-[10px] font-bold text-[#55555A] uppercase tracking-wider mt-1 block">Inbound Leads</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars Stacks */}
          <div className="space-y-6">
            {pillars.map((pillar) => (
              <div 
                key={pillar.num} 
                className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 flex items-start gap-5 md:gap-7 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-black/15 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] flex items-center justify-center font-mono font-bold text-[13px] text-[#0A0A0A] flex-shrink-0">
                  {pillar.num}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-[#0A0A0A] text-lg mb-2.5 group-hover:text-[#F59A57] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[#55555A] text-[13px] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
