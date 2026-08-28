"use client";

import Link from "next/link";

export default function FounderInfluencer() {
  return (
    <section id="founder" className="bg-bg-primary py-24 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_2.1fr] gap-12 lg:gap-16 items-center mb-16">
          
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#249E98] mb-5">
              BEHIND FAMEBROS
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[40px] leading-[1.1] mb-6">
              The people who<br />
              turn your brand<br />
              into a <span className="text-[#249E98]">story.</span>
            </h2>
            <Link 
              href="#about"
              className="inline-flex items-center gap-3 px-6 py-2.5 border border-black/15 text-[#0A0A0A] rounded-full text-[14px] font-bold hover:border-black/35 hover:bg-black/5 transition-all"
            >
              Meet the Founders
              <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            <div className="bg-[#FAFAFA] border border-[#F59A57]/20 rounded-2xl flex flex-row items-stretch hover:border-[#F59A57]/40 transition-all duration-300 relative overflow-hidden group min-h-[220px] shadow-sm">
              <div className="w-[100px] xs:w-[125px] md:w-[155px] relative flex-shrink-0 select-none pointer-events-none">
                <img 
                  src="/Sultan photos-with-png.png" 
                  alt="Sultan Yunus" 
                  className="absolute left-0 bottom-0 w-full h-[100%] object-contain object-left-bottom filter brightness-105 z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 py-4 pr-4 pl-2 md:py-6 md:pr-6 md:pl-4 flex flex-col justify-center relative z-20">
                <div className="h-8 md:h-10 mb-1.5 relative select-none">
                  <img 
                    src="/Sultan sign.png" 
                    alt="Sultan Yunus Signature"
                    className="h-full object-contain object-left"
                    style={{ 
                      filter: "invert(72%) sepia(45%) saturate(1377%) hue-rotate(328deg) brightness(101%) contrast(93%)" 
                    }}
                  />
                </div>

                <h3 className="font-display font-extrabold text-[14px] md:text-[16px] text-[#0A0A0A] tracking-wider uppercase mb-0.5">
                  Sultan Yunus
                </h3>
                <span className="text-[11px] md:text-[12px] text-[#F59A57] font-bold block mb-3 md:mb-4">
                  Founder
                </span>

                <div className="flex gap-2">
                  <a 
                    href="https://www.instagram.com/sultanyunus.founder/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#F59A57]/30 hover:border-[#F59A57] flex items-center justify-center text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-all bg-black/5"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@bilalsayed1993" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#F59A57]/30 hover:border-[#F59A57] flex items-center justify-center text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-all bg-black/5"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.52 3.526 12 3.526 12 3.526s-7.52 0-9.388.528A3.003 3.003 0 00.502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 002.11 2.108C4.48 20.474 12 20.474 12 20.474s7.52 0 9.388-.528a3.003 3.003 0 002.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/famebrosstudio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#F59A57]/30 hover:border-[#F59A57] flex items-center justify-center text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-all bg-black/5"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAFA] border border-[#249E98]/20 rounded-2xl flex flex-row items-stretch hover:border-[#249E98]/40 transition-all duration-300 relative overflow-hidden group min-h-[220px] shadow-sm">
              <div className="w-[100px] xs:w-[125px] md:w-[155px] relative flex-shrink-0 select-none pointer-events-none">
                <img 
                  src="/Sultan photos-with-png.png" 
                  alt="Sultan Yunus" 
                  className="absolute left-0 bottom-0 w-full h-[100%] object-contain object-left-bottom filter brightness-105 z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 py-4 pr-4 pl-2 md:py-6 md:pr-6 md:pl-4 flex flex-col justify-center relative z-20">
                <div className="h-8 md:h-10 mb-1.5 relative select-none">
                  <img 
                    src="/Sultan sign.png" 
                    alt="Sultan Yunus Signature"
                    className="h-full object-contain object-left"
                    style={{ 
                      filter: "invert(56%) sepia(44%) saturate(718%) hue-rotate(133deg) brightness(91%) contrast(87%)" 
                    }}
                  />
                </div>

                <h3 className="font-display font-extrabold text-[14px] md:text-[16px] text-[#0A0A0A] tracking-wider uppercase mb-0.5">
                  Sultan Yunus
                </h3>
                <span className="text-[11px] md:text-[12px] text-[#249E98] font-bold block mb-3 md:mb-4">
                  Founder
                </span>

                <div className="flex gap-2">
                  <a 
                    href="https://www.instagram.com/sultanyunus.founder/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#249E98]/30 hover:border-[#249E98] flex items-center justify-center text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-all bg-black/5"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@bilalsayed1993" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#249E98]/30 hover:border-[#249E98] flex items-center justify-center text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-all bg-black/5"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.52 3.526 12 3.526 12 3.526s-7.52 0-9.388.528A3.003 3.003 0 00.502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 002.11 2.108C4.48 20.474 12 20.474 12 20.474s7.52 0 9.388-.528a3.003 3.003 0 002.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/famebrosstudio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#249E98]/30 hover:border-[#249E98] flex items-center justify-center text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-all bg-black/5"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
