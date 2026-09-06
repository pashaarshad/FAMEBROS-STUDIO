"use client";

export default function ProblemOne() {
  const problems = [
    {
      title: "Fake followers",
      desc: "Purchased accounts that inflate a profile and deliver nothing. Common, and easy to miss without proper verification.",
      tag: "HIGH RISK",
    },
    {
      title: "Bot-driven views",
      desc: "View counts that look impressive and represent no real human attention at all.",
      tag: "NO ATTENTION",
    },
    {
      title: "Poor engagement",
      desc: "Large followings with almost no genuine comments, saves or shares. A clear signal the audience isn't listening.",
      tag: "DEAD AUDIENCE",
    },
    {
      title: "Irrelevant audiences",
      desc: "Followers in cities you don't serve, in age groups that don't buy, with no interest in your product category.",
      tag: "WRONG GEO",
    },
    {
      title: "Inflated numbers",
      desc: "Metrics presented selectively, or reach figures that don't survive a professional audit.",
      tag: "MISLEADING",
    },
    {
      title: "Wrong customer profile",
      desc: "A genuine audience &mdash; just not yours. The single most expensive mistake brands make in influencer marketing.",
      tag: "WASTED BUDGET",
    },
  ];

  return (
    <section className="bg-[#FAF6F0] py-24 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="max-w-3xl mb-14">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
            PROBLEM ONE
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[44px] leading-[1.1] mb-5">
            A large following is not the same as a real audience.
          </h2>
          <p className="text-[#55555A] text-base md:text-lg leading-relaxed">
            There are thousands of influencers and vloggers on social media. Many of those numbers do not represent people who will ever notice your brand &mdash; let alone buy from it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/10 rounded-2xl p-7 hover:border-[#F59A57]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#F59A57]" />
                  <span className="font-mono-custom text-[9.5px] font-bold tracking-widest text-[#F59A57] bg-[#F59A57]/10 px-2.5 py-1 rounded">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[#0A0A0A] text-xl mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[#55555A] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-8 bg-white border-l-4 border-[#F59A57] border-y border-r border-black/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <p className="text-[#0A0A0A] font-bold text-base md:text-lg">
            We verify before we recommend. That single step protects most of your budget.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0C] text-white rounded-xl text-sm font-bold hover:bg-[#F59A57] hover:text-black transition-all whitespace-nowrap shadow-sm"
          >
            Verify Your Influencer Plan &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
