"use client";

export default function ProblemTwo() {
  const matchSteps = [
    { num: "01", label: "Business" },
    { num: "02", label: "Product / Service" },
    { num: "03", label: "Target Customer" },
    { num: "04", label: "Location" },
    { num: "05", label: "Objective" },
    { num: "06", label: "Creator Niche" },
    { num: "07", label: "Audience Quality" },
  ];

  return (
    <section className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-radial from-[#F59A57]/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-radial from-[#249E98]/10 to-transparent blur-[140px] pointer-events-none" />

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

        <div className="bg-[#121215] border border-white/10 rounded-3xl p-8 md:p-12 mb-10 shadow-2xl">
          <div className="font-mono-custom text-[11px] uppercase tracking-[0.2em] text-[#249E98] font-bold mb-6">
            HOW WE MATCH &bull; THE AUDIENCE ALGORITHM
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {matchSteps.map((step, idx, arr) => {
              const isLast = idx === arr.length - 1;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className={`px-5 py-3 rounded-xl font-display text-sm md:text-base font-bold transition-all border ${
                      isLast
                        ? "bg-[#F59A57] text-[#050505] border-[#F59A57] shadow-[0_4px_25px_rgba(245,154,87,0.35)]"
                        : "bg-[#18181E] text-white border-white/10 hover:border-white/30"
                    }`}
                  >
                    <span className="font-mono-custom text-xs mr-2 opacity-60">
                      {step.num}
                    </span>
                    {step.label}
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
  );
}
