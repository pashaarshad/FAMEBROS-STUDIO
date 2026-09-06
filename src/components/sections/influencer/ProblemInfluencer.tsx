"use client";

export default function ProblemInfluencer() {
  return (
    <>
      {/* SECTION 1: PROBLEM ONE */}
      <section className="bg-bg-primary py-24 border-t border-black/5 relative">
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
            {[
              {
                title: "Fake followers",
                desc: "Purchased accounts that inflate a profile and deliver nothing. Common, and easy to miss without checking.",
                tag: "HIGH RISK",
              },
              {
                title: "Bot-driven views",
                desc: "View counts that look impressive and represent no human attention at all.",
                tag: "NO ATTENTION",
              },
              {
                title: "Poor engagement",
                desc: "Large followings with almost no comments, saves or shares. A clear signal the audience isn't listening.",
                tag: "DEAD AUDIENCE",
              },
              {
                title: "Irrelevant audiences",
                desc: "Followers in cities you don't serve, in age groups that don't buy, with no interest in your category.",
                tag: "WRONG GEO",
              },
              {
                title: "Inflated numbers",
                desc: "Metrics presented selectively, or reach figures that don't survive a proper look.",
                tag: "MISLEADING",
              },
              {
                title: "Wrong customer profile",
                desc: "A genuine audience &mdash; just not yours. The most expensive mistake in influencer marketing.",
                tag: "WASTED BUDGET",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] border border-black/10 rounded-2xl p-7 hover:border-[#F59A57]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-3 h-3 rounded-sm bg-[#F59A57]" />
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

          <div className="p-6 md:p-8 bg-[#F59A57]/10 border border-[#F59A57]/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[#0A0A0A] font-bold text-base md:text-lg">
              We verify before we recommend. That single step protects most of your budget.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0C] text-white rounded-xl text-sm font-bold hover:bg-[#F59A57] hover:text-black transition-all whitespace-nowrap"
            >
              Verify Your Influencer Plan &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM TWO (Dark Theme) */}
      <section className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-radial from-[#F59A57]/15 to-transparent blur-[140px] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl mb-14">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-3">
              PROBLEM TWO
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[44px] leading-[1.1] mb-5">
              Most agencies match available influencers to available brands.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
              Whoever is free that week gets offered to whoever is paying that week. Nobody checks whether the creator&apos;s audience has anything to do with the business. The collaboration gets completed, the report looks fine, and nothing happens.
            </p>
            <p className="font-display font-bold text-[#F59A57] text-xl md:text-2xl">
              We study your business first. Then we find the influencer.
            </p>
          </div>

          <div className="mb-10">
            <div className="font-mono-custom text-[10.5px] uppercase tracking-[0.2em] text-white/50 mb-5">
              HOW WE MATCH
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {[
                "Business",
                "Product / Service",
                "Target Customer",
                "Location",
                "Objective",
                "Creator Niche",
                "Audience Quality",
              ].map((step, idx, arr) => {
                const isLast = idx === arr.length - 1;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`px-5 py-3 rounded-xl font-display text-sm md:text-base font-bold transition-all border ${
                        isLast
                          ? "bg-[#F59A57] text-[#050505] border-[#F59A57] shadow-[0_4px_20px_rgba(245,154,87,0.3)]"
                          : "bg-[#16161B] text-white border-white/10 hover:border-white/30"
                      }`}
                    >
                      {step}
                    </div>
                    {!isLast && (
                      <span className="text-[#F59A57] font-bold text-base select-none">
                        &rarr;
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-white/60 text-sm md:text-base max-w-3xl leading-relaxed">
            Only then do we shortlist. The objective isn&apos;t to complete a collaboration &mdash; it&apos;s relevant reach, real trust, usable content and enquiries that actually convert.
          </p>
        </div>
      </section>

      {/* SECTION 3: END TO END */}
      <section className="bg-[#FAF6F0] text-[#0A0A0A] py-24 border-t border-black/5 relative">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="max-w-3xl mb-12">
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#249E98] font-bold mb-3">
              END TO END EXECUTION
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[44px] leading-[1.1] mb-4">
              You shouldn&apos;t have to chase eleven creators yourself.
            </h2>
            <p className="text-[#55555A] text-base md:text-lg leading-relaxed">
              We handle the entire process from research to final reporting. You approve, we run it.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 md:gap-3.5 mb-10">
            {[
              "Strategy",
              "Research",
              "Shortlisting",
              "Verification",
              "Communication",
              "Negotiation",
              "Deliverables",
              "Content",
              "Approval",
              "Posting",
              "Reporting",
            ].map((node, i, all) => {
              const isLast = i === all.length - 1;
              return (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold border transition-all ${
                      isLast
                        ? "bg-[#249E98] text-white border-[#249E98] shadow-md"
                        : "bg-white text-[#0A0A0A] border-black/10 shadow-sm"
                    }`}
                  >
                    <span className="font-mono-custom text-[10px] opacity-50 mr-1.5">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </span>
                    {node}
                  </div>
                  {!isLast && (
                    <span className="text-[#249E98] font-bold text-xs select-none">
                      &rarr;
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-sm text-[#55555A]">
            Zero friction for your brand. Full accountability at every stage.
          </p>
        </div>
      </section>
    </>
  );
}
