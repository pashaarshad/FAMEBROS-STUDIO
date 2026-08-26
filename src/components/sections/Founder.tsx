import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="bg-[#050505] py-20 border-t border-white/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.4fr] gap-12 items-start mb-16">
          
          {/* Left Column */}
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#F59A57] mb-4">
              BEHIND FAMEBROS
            </p>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[40px] leading-[1.1] mb-5">
              The people who<br />
              turn your brand<br />
              into a <span className="text-[#249E98]">story.</span>
            </h2>
            <a href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg text-[14px] font-semibold hover:border-white/50 transition-all">
              Meet the Founders &rarr;
            </a>
          </div>

          {/* Right Column - Founder Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Bilal profile */}
            <div className="bg-[#111416]/50 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 hover:border-white/20 transition-all">
              {/* Image/Avatar container */}
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#1C1C21] to-[#0E0E11] flex-shrink-0 relative border border-white/10">
                {/* Fallback pattern or photo */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl">👨🏽‍💻</div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <span className="font-display font-extrabold text-[24px] text-white block">Bilal</span>
                <span className="text-[12px] text-[#A7A7A2] uppercase tracking-[0.1em] font-semibold block mb-4">FOUNDER</span>
                
                {/* Social integrations */}
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="https://www.instagram.com/s_bilal24/" target="_blank" rel="noreferrer"
                    className="text-xs text-[#A7A7A2] hover:text-white border border-white/10 px-3 py-1.5 rounded-md transition-all">
                    Instagram
                  </a>
                  <a href="https://www.youtube.com/@bilalsayed1993" target="_blank" rel="noreferrer"
                    className="text-xs text-[#A7A7A2] hover:text-white border border-white/10 px-3 py-1.5 rounded-md transition-all">
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Sultan Yunus profile */}
            <div className="bg-[#111416]/50 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 hover:border-white/20 transition-all">
              {/* Image/Avatar container */}
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#1C1C21] to-[#0E0E11] flex-shrink-0 relative border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center text-4xl">👨🏻‍💼</div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <span className="font-display font-extrabold text-[24px] text-white block">Sultan Yunus</span>
                <span className="text-[12px] text-[#A7A7A2] uppercase tracking-[0.1em] font-semibold block mb-4">FOUNDER</span>
                
                {/* Social integrations */}
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="https://www.instagram.com/sultanyunus.founder/" target="_blank" rel="noreferrer"
                    className="text-xs text-[#A7A7A2] hover:text-white border border-white/10 px-3 py-1.5 rounded-md transition-all">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Gallery / Story documentary titles */}
        <div className="border-t border-white/10 pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { tag: "EP 01", title: "The number I was embarrassed to share" },
            { tag: "EP 02", title: "Why I underpriced for five years" },
            { tag: "EP 03", title: "The client I should have refused" },
            { tag: "EP 04", title: "What a bad month actually looks like" },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#111416]/30 border border-white/5 rounded-xl p-5 hover:bg-[#111416]/80 transition-colors">
              <span className="font-mono-custom text-[9px] tracking-widest text-[#F59A57] font-bold block mb-2">{item.tag}</span>
              <p className="text-white text-xs font-semibold leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
