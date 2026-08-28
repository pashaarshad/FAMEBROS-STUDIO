"use client";

const pillars = [
  {
    num: "01",
    title: "Cinematic Authority",
    desc: "Average content attracts average customers. Our premium cinematic production establishes immediate brand authority, allowing you to charge premium prices.",
    color: "border-[#F59A57]"
  },
  {
    num: "02",
    title: "Organic-First Lead Engine",
    desc: "Paid campaigns stop running the second you stop paying. We build organic distribution channels that continue generating customers for months and years.",
    color: "border-[#249E98]"
  },
  {
    num: "03",
    title: "Comment-to-Sales Funnels",
    desc: "Views are vanity metrics. We construct message automation, landing pages, and WhatsApp funnels that turn raw social media attention into trackable revenue.",
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
                We don&apos;t count views.<br />
                We grow your <span className="text-[#F59A57]">bottom line.</span>
              </h2>
            </div>
            
            <p className="text-[#55555A] text-sm md:text-base leading-relaxed max-w-md">
              Most agencies focus on likes and followers. We focus on the metric that actually matters: **revenue growth**. Whether you run a resort, a restaurant chain, a fitness brand, or a retail showroom, we turn your physical space into a digital customer magnet.
            </p>

            {/* Growth Stat Board */}
            <div className="bg-white/60 backdrop-blur-sm border border-black/5 rounded-2xl p-6 grid grid-cols-2 gap-6 max-w-sm shadow-sm">
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
