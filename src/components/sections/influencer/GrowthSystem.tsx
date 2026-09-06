"use client";

export default function GrowthSystem() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "We study the business, audience, competitors, market and current social media position.",
    },
    {
      num: "02",
      title: "Strategise",
      desc: "We create a marketing and content direction based on the actual business objective.",
    },
    {
      num: "03",
      title: "Create",
      desc: "Famebros Studio develops concepts, scripts, shoots, reels, creatives and campaign content.",
    },
    {
      num: "04",
      title: "Distribute",
      desc: "We use the right combination of organic social media, influencer marketing and paid advertising.",
    },
    {
      num: "05",
      title: "Optimise",
      desc: "We study performance, understand what customers are responding to and continuously improve.",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0C] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background glow sweeps */}
      <div className="absolute left-[-15%] top-[-10%] w-[50%] h-[70%] rounded-full bg-radial from-[#F59A57]/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[-10%] w-[50%] h-[70%] rounded-full bg-radial from-[#249E98]/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#249E98] font-bold mb-3">
            OUR PHILOSOPHY
          </p>
          <h2 className="font-display font-extrabold text-white text-[34px] md:text-[46px] leading-[1.1] mb-5">
            We measure what happens after the content.
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
            At Famebros Studio, we do not measure success only by followers, likes or one viral reel. For us, the bigger questions are:
          </p>
          <div className="space-y-3 font-display font-semibold text-lg text-white/90">
            <div className="flex items-center gap-3">
              <span className="text-[#249E98] font-bold">&bull;</span> Did more people discover the business?
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#249E98] font-bold">&bull;</span> Did the brand become more trusted?
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#249E98] font-bold">&bull;</span> Did enquiries increase?
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#249E98] font-bold">&bull;</span> Did customers walk into the store?
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#249E98] font-bold">&bull;</span> Did the business grow?
            </div>
          </div>
        </div>

        <div className="p-8 bg-[#121215] border-l-4 border-[#F59A57] rounded-2xl mb-16">
          <p className="font-display font-extrabold text-xl md:text-2xl text-white">
            That is the kind of growth we work towards.
          </p>
        </div>

        {/* 5-Step System */}
        <div className="mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-8">
            THE FAMEBROS STUDIO GROWTH SYSTEM
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#121215] border border-white/10 rounded-2xl p-6 hover:border-[#249E98]/40 transition-all"
              >
                <span className="font-mono-custom text-xs font-bold text-[#F59A57] block mb-3">
                  {step.num}
                </span>
                <h4 className="font-display font-bold text-white text-lg mb-2">
                  {step.title}
                </h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 80% Referrals Callout */}
        <div className="bg-[#121215] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">
              Around 80% of our new clients come through referrals.
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              One of the strongest signs that clients trust Famebros Studio is how many new businesses reach us through recommendations. A business starts working with us, experiences our execution, and recommends us to another business owner.
            </p>
          </div>
          <div className="flex gap-6 flex-shrink-0 text-center">
            <div>
              <div className="font-display text-4xl font-extrabold text-[#F59A57]">80%</div>
              <div className="font-mono-custom text-[10px] text-white/50 tracking-wider uppercase mt-1">Via Referrals</div>
            </div>
            <div className="w-[1px] bg-white/10" />
            <div>
              <div className="font-display text-4xl font-extrabold text-[#249E98]">50+</div>
              <div className="font-mono-custom text-[10px] text-white/50 tracking-wider uppercase mt-1">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
