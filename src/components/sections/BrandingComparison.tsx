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

export default function BrandingComparison() {
  return (
    <section className="bg-white py-16 border-t border-black/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Main Flex Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr_1fr] items-stretch gap-8 lg:gap-4">
          
          {/* 1. LEFT CARD: WITHOUT BRANDING (Dark chevron card) */}
          <div 
            className="bg-[#121214] text-white p-8 pr-12 relative flex flex-col justify-center min-h-[260px] shadow-lg md:clip-chevron-right"
            style={{
              clipPath: "polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%)"
            }}
          >
            <div className="max-w-[85%]">
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-[#F59A57] font-black uppercase block mb-6">
                WITHOUT BRANDING
              </span>
              <ul className="space-y-4">
                {withoutItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] text-white/80 font-medium">
                    <span className="text-[#F59A57] font-bold text-sm leading-none mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chevron Arrow Icon */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#F59A57] text-xl font-bold hidden md:block select-none">
              &gt;
            </div>
          </div>

          {/* 2. CENTER STATEMEMT BLOCK */}
          <div className="flex flex-col justify-center items-center text-center px-4 py-6 lg:py-0">
            <h3 className="font-display font-extrabold text-[#0A0A0A] text-[26px] md:text-[30px] leading-[1.2] max-w-xs">
              With strong branding, people are willing to pay what your{" "}
              <span className="text-[#249E98]">brand is</span>{" "}
              <span className="text-[#F59A57]">worth.</span>
            </h3>
          </div>

          {/* 3. RIGHT CARD: WITH STRONG BRANDING (White card with orange arrow) */}
          <div className="bg-[#FAF6F0] border border-black/5 rounded-3xl p-8 pl-12 relative flex flex-col justify-center min-h-[260px] shadow-[0_4px_25px_rgba(0,0,0,0.01)] group hover:border-[#249E98]/30 transition-all duration-300">
            
            {/* Left Chevron Indicator */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F59A57] text-xl font-bold hidden md:block select-none group-hover:translate-x-0.5 transition-transform">
              &gt;
            </div>

            <div>
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-[#249E98] font-black uppercase block mb-6">
                WITH STRONG BRANDING
              </span>
              <ul className="space-y-4">
                {withItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] text-[#55555A] font-semibold">
                    <span className="text-[#249E98] font-bold text-sm leading-none mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
