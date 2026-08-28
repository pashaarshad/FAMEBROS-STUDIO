"use client";

const existPillars = [
  {
    title: "Transparency",
    desc: "You see what we're doing, why we're doing it, and what it cost. No hidden work, no vague updates.",
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Strategy first",
    desc: "Nothing gets made until we know what it's supposed to achieve. Content without a reason is just expense.",
    icon: (
      <svg className="w-5 h-5 text-[#249E98]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: "Execution",
    desc: "A 25-person team that delivers every month, on schedule. Not promises followed by silence.",
    icon: (
      <svg className="w-5 h-5 text-[#F59A57]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Accountability",
    desc: "A monthly report with real numbers. If something isn't working, we tell you before you have to ask.",
    icon: (
      <svg className="w-5 h-5 text-[#249E98]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function WhyWeExist() {
  return (
    <section className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Brand Glowing background sweeps */}
      <div className="absolute left-[-15%] top-[-10%] w-[50%] h-[70%] rounded-full bg-gradient-to-tr from-[#DC2626]/12 via-[#FF3B30]/8 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[-10%] w-[50%] h-[70%] rounded-full bg-gradient-to-bl from-[#249E98]/8 via-[#DC2626]/6 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          
          {/* Left Column: Heading Statement */}
          <div className="space-y-8">
            <div>
              <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-5">
                WHY WE EXIST
              </p>
              <h2 className="font-display font-extrabold text-white text-[32px] md:text-[42px] leading-[1.1] mb-6">
                Most brands come to us <br />
                after being <span className="text-[#249E98]">let down.</span>
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg">
                Too many businesses have paid an agency for months and received nothing they can point to. No strategy, no reporting, no growth — just invoices, screenshots and excuses. Some feel they were quietly looted.
              </p>
            </div>
            
            <div className="border-l-2 border-[#F59A57] pl-5 py-1">
              <p className="text-[#F59A57] font-display font-extrabold text-lg md:text-xl">
                We built Famebros Studio to be the opposite of that experience.
              </p>
            </div>
          </div>

          {/* Right Column: Grid of 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {existPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-[#121215] border border-white/5 rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.2)] hover:border-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-xs md:text-[13px] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Statement */}
        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-white/5 pt-10">
          <p className="text-white/70 text-sm md:text-[15px] italic leading-relaxed">
            &ldquo;We won&apos;t promise you a million views or overnight sales. We&apos;ll tell you honestly what&apos;s achievable, then build toward it every month.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
