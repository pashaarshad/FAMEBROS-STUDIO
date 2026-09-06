"use client";

export default function NetworkTiers() {
  const tiers = [
    {
      tier: "TIER 01",
      title: "Micro influencers",
      desc: "Small, highly engaged audiences. Best cost-per-result and the most genuine trust. Ideal for local businesses and considered purchases.",
      tag: "High Engagement & Trust",
    },
    {
      tier: "TIER 02",
      title: "Macro influencers",
      desc: "Broad reach across a category. Used when a brand needs visibility quickly across a wider audience.",
      tag: "Mass Market Reach",
    },
    {
      tier: "TIER 03",
      title: "Celebrity collaborations",
      desc: "Actors, singers and public figures. For launches and moments where credibility must be borrowed instantly.",
      tag: "Instant Authority",
    },
    {
      tier: "TIER 04",
      title: "UGC creators",
      desc: "Creators who produce authentic footage for your own channels and ads &mdash; without needing an audience of their own.",
      tag: "Performance Content",
    },
  ];

  return (
    <section className="bg-[#FAF6F0] py-24 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="max-w-3xl mb-14">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
            THE NETWORK
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[44px] leading-[1.1] mb-5">
            Beyond our own creators.
          </h2>
          <p className="text-[#55555A] text-base md:text-lg leading-relaxed">
            We match the tier to the objective. More followers is not automatically more effect &mdash; and it is always more expensive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-black/10 rounded-2xl p-8 hover:border-[#F59A57]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#F59A57]" />
                  <span className="font-mono-custom text-[10px] text-[#55555A] font-bold tracking-wider">
                    {card.tier}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[#0A0A0A] text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-[#55555A] text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5">
                <span className="inline-block font-mono-custom text-[11px] font-semibold text-[#249E98]">
                  ✓ {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
