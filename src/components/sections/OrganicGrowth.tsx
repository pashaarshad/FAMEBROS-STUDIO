"use client";

const organicCheckmarks = [
  "A strong, consistent social media presence",
  "Followers who are actually your customers",
  "High-quality content, produced every single month",
  "Brand recognition in your market",
  "Trust and authority built over time",
  "An audience and community, not just a follower count",
  "Organic reach that compounds month on month",
  "Content built to be shared, not just seen",
  "Founders turned into recognisable faces, where it fits",
  "Long-term brand value that outlasts any campaign"
];

export default function OrganicGrowth() {
  return (
    <section className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Brand Glowing background sweeps */}
      <div className="absolute right-[-10%] top-[-10%] w-[50%] h-[70%] rounded-full bg-gradient-to-tr from-[#DC2626]/12 via-[#FF3B30]/8 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[50%] h-[70%] rounded-full bg-gradient-to-bl from-[#249E98]/8 via-[#DC2626]/6 to-transparent blur-[120px] pointer-events-none" />

      {/* Subtle diagonal branding light sweep across the section background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(135deg, #DC2626 0%, transparent 60%, #F59A57 100%)`
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          
          {/* Left Column: Bold Concept Card */}
          <div className="space-y-8">
            <div>
              <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-5">
                ORGANIC GROWTH — OUR FOUNDATION
              </p>
              <h2 className="font-display font-extrabold text-white text-[32px] md:text-[42px] leading-[1.1] mb-6">
                Ads stop the day <br />
                you stop paying. <br />
                <span className="text-[#249E98]">A brand doesn&apos;t.</span>
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                Anyone can buy attention. What we build is the kind that stays &mdash; an audience that follows you, content people share, and a name customers recognise before they ever see an advertisement.
              </p>
            </div>
            
            <div className="bg-[#121215] border border-[#249E98]/20 rounded-2xl p-6 md:p-8 shadow-inner relative overflow-hidden">
              <p className="font-display font-extrabold text-[#F59A57] text-lg leading-snug">
                We don&apos;t just bring you sales today. <br />
                We build a brand people remember tomorrow.
              </p>
            </div>
          </div>

          {/* Right Column: 10 Checkmarks List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {organicCheckmarks.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#121215] border border-white/5 rounded-xl p-4 flex items-start gap-3.5 hover:border-[#249E98]/25 transition-all duration-300"
              >
                <span className="w-5 h-5 rounded-full bg-[#249E98]/10 text-[#249E98] border border-[#249E98]/25 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 select-none">
                  ✓
                </span>
                <span className="text-white/80 text-[13px] md:text-[14px] font-medium leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
