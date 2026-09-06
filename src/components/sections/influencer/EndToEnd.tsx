"use client";

export default function EndToEnd() {
  const steps = [
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
  ];

  return (
    <section className="bg-[#FFFFFF] text-[#0A0A0A] py-24 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="max-w-3xl mb-12">
          <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#249E98] font-bold mb-3">
            END TO END
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[44px] leading-[1.1] mb-4">
            You shouldn&apos;t have to chase eleven creators yourself.
          </h2>
          <p className="text-[#55555A] text-base md:text-lg leading-relaxed">
            We handle the entire process from research to final reporting. You approve, we run it.
          </p>
        </div>

        <div className="bg-[#FAFAFA] border border-black/10 rounded-3xl p-6 md:p-10 mb-10 shadow-sm">
          <div className="font-mono-custom text-[10.5px] uppercase tracking-[0.2em] text-[#55555A] font-bold mb-6">
            11-STEP EXECUTION WORKFLOW
          </div>

          <div className="flex flex-wrap items-center gap-2.5 md:gap-3.5">
            {steps.map((node, i, all) => {
              const isLast = i === all.length - 1;
              return (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold border transition-all ${
                      isLast
                        ? "bg-[#249E98] text-white border-[#249E98] shadow-sm"
                        : "bg-white text-[#0A0A0A] border-black/10 hover:border-black/30 shadow-xs"
                    }`}
                  >
                    <span className="font-mono-custom text-[10px] text-[#F59A57] mr-1.5 font-extrabold">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#FAF6F0] rounded-2xl border border-black/5">
            <h4 className="font-display font-bold text-base text-[#0A0A0A] mb-1.5">
              Zero Effort for Founders
            </h4>
            <p className="text-xs text-[#55555A] leading-relaxed">
              No endless DMs or follow-ups. We manage briefing, shoot coordination, and timeline tracking.
            </p>
          </div>
          <div className="p-6 bg-[#FAF6F0] rounded-2xl border border-black/5">
            <h4 className="font-display font-bold text-base text-[#0A0A0A] mb-1.5">
              Content Rights &amp; Usage
            </h4>
            <p className="text-xs text-[#55555A] leading-relaxed">
              Clear contracts ensuring you retain digital ad usage and raw assets for repurposing.
            </p>
          </div>
          <div className="p-6 bg-[#FAF6F0] rounded-2xl border border-black/5">
            <h4 className="font-display font-bold text-base text-[#0A0A0A] mb-1.5">
              Transparent Reporting
            </h4>
            <p className="text-xs text-[#55555A] leading-relaxed">
              Real screenshots, link clicks, impressions, and engagement audits delivered upon campaign completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
