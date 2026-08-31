"use client";

interface CelebrityGalleryProps {
  isDark?: boolean;
}

const row1Photos = [
  "/vedios/Photos with celebrity/1 (1).jpg",
  "/vedios/Photos with celebrity/1 (2).jpg",
  "/vedios/Photos with celebrity/1 (3).jpg",
  "/vedios/Photos with celebrity/1 (4).jpg",
  "/vedios/Photos with celebrity/1 (5).jpg",
  "/vedios/Photos with celebrity/1 (6).jpg",
  "/vedios/Photos with celebrity/1 (7).jpg"
];

const row2Photos = [
  "/vedios/Photos with celebrity/1 (8).jpg",
  "/vedios/Photos with celebrity/1 (9).jpg",
  "/vedios/Photos with celebrity/1 (10).jpg",
  "/vedios/Photos with celebrity/1 (11).jpg",
  "/vedios/Photos with celebrity/1 (12).jpg",
  "/vedios/Photos with celebrity/1 (13).jpg",
  "/vedios/Photos with celebrity/1 (14).jpg"
];

export default function CelebrityGallery({ isDark = false }: CelebrityGalleryProps) {
  return (
    <section 
      id="celebrity-shoots" 
      className={`py-24 border-t relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? "bg-[#0A0A0C] text-white border-white/10" 
          : "bg-[#FAF6F0] text-[#0A0A0A] border-black/5"
      }`}
    >
      
      {/* Brand Glowing backdrops (Only shown in Dark Mode) */}
      {isDark && (
        <>
          <div className="absolute left-[-10%] top-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-tr from-[#DC2626]/12 via-[#FF3B30]/8 to-transparent blur-[130px] pointer-events-none z-0" />
          <div className="absolute right-[-10%] bottom-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-bl from-[#249E98]/10 via-[#DC2626]/6 to-transparent blur-[130px] pointer-events-none z-0" />
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-screen"
            style={{
              backgroundImage: `linear-gradient(135deg, #DC2626 0%, transparent 60%, #F59A57 100%)`
            }}
          />
        </>
      )}

      {/* Subtle light mode accents */}
      {!isDark && (
        <div className="absolute left-[-5%] top-[5%] w-[300px] h-[300px] rounded-full bg-[#249E98]/5 blur-[80px] pointer-events-none" />
      )}

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 relative z-10 mb-16">
        
        {/* Header Block */}
        <div className="max-w-2xl">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            ON LOCATION &bull; CELEBRITY COLLABORATIONS
          </p>
          <h2 className="font-display font-extrabold text-inherit text-[32px] md:text-[42px] leading-[1.1] mb-5">
            Behind the scenes with <span className="text-[#249E98]">India&apos;s biggest icons.</span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${isDark ? "text-white/70" : "text-[#55555A]"}`}>
            We produce content for stars, singers, actors and top-tier influencers. The same camera rigs, production values, and creative standards go into every business brand we grow.
          </p>
        </div>
      </div>

      {/* Sliding Collage Area */}
      <div className="space-y-6 md:space-y-8 select-none pointer-events-none relative z-10">
        
        {/* Row 1: Scrolling Left */}
        <div className="w-full overflow-hidden relative">
          <div className="flex animate-marquee gap-6 md:gap-8 items-center">
            {/* Loop 1 */}
            {row1Photos.map((src, idx) => (
              <div 
                key={`row1-1-${idx}`} 
                className="flex-shrink-0 h-56 md:h-80 w-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-white/15 bg-white/5 relative group hover:scale-[1.02] transition-transform duration-300"
              >
                <img src={src} alt="Celebrity shoot" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
            {/* Loop 2 */}
            {row1Photos.map((src, idx) => (
              <div 
                key={`row1-2-${idx}`} 
                className="flex-shrink-0 h-56 md:h-80 w-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-white/15 bg-white/5 relative group hover:scale-[1.02] transition-transform duration-300"
              >
                <img src={src} alt="Celebrity shoot" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="w-full overflow-hidden relative">
          <div className="flex animate-marquee-reverse gap-6 md:gap-8 items-center">
            {/* Loop 1 */}
            {row2Photos.map((src, idx) => (
              <div 
                key={`row2-1-${idx}`} 
                className="flex-shrink-0 h-56 md:h-80 w-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-white/15 bg-white/5 relative group hover:scale-[1.02] transition-transform duration-300"
              >
                <img src={src} alt="Celebrity shoot" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
            {/* Loop 2 */}
            {row2Photos.map((src, idx) => (
              <div 
                key={`row2-2-${idx}`} 
                className="flex-shrink-0 h-56 md:h-80 w-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-white/15 bg-white/5 relative group hover:scale-[1.02] transition-transform duration-300"
              >
                <img src={src} alt="Celebrity shoot" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
