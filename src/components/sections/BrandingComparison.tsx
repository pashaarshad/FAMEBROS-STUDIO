"use client";

const withoutItems = [
  "People negotiate your price",
  "Low visibility",
  "No trust or recognition",
  "Constant price comparison",
  "No customer loyalty"
];

const withItems = [
  "People pay what you're worth",
  "High visibility",
  "Instant trust & recognition",
  "Premium positioning",
  "Loyal customers & repeat business"
];

const flowSteps = [
  { label: "Visibility", accent: false },
  { label: "Followers", accent: false },
  { label: "Trust", accent: false },
  { label: "Authority", accent: false },
  { label: "Community", accent: false },
  { label: "Brand Value", accent: false },
  { label: "Business Growth", accent: true }
];

export default function BrandingComparison() {
  return (
    <section className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute right-[-10%] top-[-10%] w-[40%] h-[60%] rounded-full bg-[#F59A57]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[40%] h-[60%] rounded-full bg-[#249E98]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            THE POINT OF BRANDING
          </p>
          <h2 className="font-display font-extrabold text-white text-[32px] md:text-[42px] leading-[1.1] max-w-3xl mx-auto">
            Stop competing on price. <br className="hidden sm:inline" />
            Start competing on <span className="text-[#249E98]">trust.</span>
          </h2>
        </div>

        {/* Main Flex Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.8fr_1.1fr] items-stretch gap-8 lg:gap-6">
          
          {/* 1. LEFT CARD: WITHOUT BRANDING */}
          <div className="bg-[#121215] border border-red-500/10 rounded-3xl p-8 flex flex-col justify-center min-h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.3)] relative group hover:border-red-500/20 transition-all duration-300">
            <div className="absolute top-4 right-4 bg-red-500/10 text-red-500 text-[10px] font-mono-custom px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
              Negative Flow
            </div>
            <div>
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-[#A7A7A2] font-extrabold uppercase block mb-6">
                WITHOUT BRANDING
              </span>
              <ul className="space-y-4">
                {withoutItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-[14px] text-white/70 font-medium">
                    <span className="text-red-500 font-bold text-base leading-none mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. CENTER STATEMENT BLOCK */}
          <div className="flex flex-col justify-center items-center text-center px-4 py-8 lg:py-0">
            <h3 className="font-display font-extrabold text-white text-[24px] md:text-[28px] leading-[1.2] max-w-[260px]">
              With strong branding, people are willing to pay what your{" "}
              <span className="text-[#F59A57]">brand is worth.</span>
            </h3>
          </div>

          {/* 3. RIGHT CARD: WITH STRONG BRANDING */}
          <div className="bg-[#121215] border border-[#249E98]/20 rounded-3xl p-8 flex flex-col justify-center min-h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.3)] relative group hover:border-[#249E98]/40 transition-all duration-300">
            <div className="absolute top-4 right-4 bg-[#249E98]/10 text-[#249E98] text-[10px] font-mono-custom px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
              Positive Flow
            </div>
            <div>
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-[#249E98] font-extrabold uppercase block mb-6">
                WITH STRONG BRANDING
              </span>
              <ul className="space-y-4">
                {withItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-[14px] text-white/90 font-medium">
                    <span className="text-[#249E98] font-bold text-base leading-none mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* --- HOW BRAND VALUE IS BUILT FLOW --- */}
        <div className="mt-20 border-t border-white/5 pt-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-white/50 text-center mb-8 font-bold">
            HOW BRAND VALUE IS BUILT
          </p>

          {/* Desktop/Tablet Horizontal Flow */}
          <div className="hidden md:flex items-center justify-between gap-2 max-w-5xl mx-auto">
            {flowSteps.map((step, idx) => (
              <div key={idx} className="flex items-center flex-1 last:flex-none">
                {/* Node Pill */}
                <div 
                  className={`px-5 py-3.5 rounded-xl text-[12px] font-bold text-center flex-grow transition-all duration-300 shadow-sm flex items-center justify-center gap-2 ${
                    step.accent 
                      ? "bg-gradient-to-r from-[#FF8A3D] via-[#F59A57] to-[#FFC107] text-white border border-yellow-400/50 shadow-[0_0_25px_rgba(245,154,87,0.4)] hover:scale-105 hover:shadow-[0_0_35px_rgba(245,154,87,0.7)] cursor-pointer" 
                      : "bg-[#121215] border border-white/10 text-white/80 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {step.accent ? (
                    <>
                      <span>{step.label}</span>
                      <svg className="w-4 h-4 text-yellow-200 fill-current animate-bounce" viewBox="0 0 24 24">
                        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.48 4 4.9V19h-3v2h16v-2h-3v-4.1c2.28-.42 4-2.46 4-4.9V7c0-1.1-.9-2-2-2zM5 10V7h2v3H5zm14 0h-2V7h2v3z"/>
                      </svg>
                    </>
                  ) : (
                    step.label
                  )}
                </div>

                {/* Arrow */}
                {idx < flowSteps.length - 1 && (
                  <span className="text-[#F59A57] text-[15px] font-black px-2 select-none">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow (Stacks/Wraps) */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-3 max-w-sm mx-auto">
            {flowSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div 
                  className={`px-4 py-2.5 rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1.5 ${
                    step.accent 
                      ? "bg-gradient-to-r from-[#FF8A3D] to-[#F59A57] text-white border border-yellow-400/40 shadow-[0_0_15px_rgba(245,154,87,0.3)]" 
                      : "bg-[#121215] border border-white/10 text-white/80"
                  }`}
                >
                  {step.accent ? (
                    <>
                      <span>{step.label}</span>
                      <svg className="w-3.5 h-3.5 text-yellow-200 fill-current animate-bounce" viewBox="0 0 24 24">
                        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.48 4 4.9V19h-3v2h16v-2h-3v-4.1c2.28-.42 4-2.46 4-4.9V7c0-1.1-.9-2-2-2zM5 10V7h2v3H5zm14 0h-2V7h2v3z"/>
                      </svg>
                    </>
                  ) : (
                    step.label
                  )}
                </div>
                {idx < flowSteps.length - 1 && (
                  <span className="text-[#F59A57] text-[13px] font-bold select-none">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
