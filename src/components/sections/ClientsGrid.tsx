"use client";

import Link from "next/link";
import { clientLogos } from "./Hero";

interface ClientsGridProps {
  isDark?: boolean;
}

export default function ClientsGrid({ isDark = false }: ClientsGridProps) {
  return (
    <section 
      id="clients" 
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
        <div className="absolute right-[-5%] bottom-[5%] w-[300px] h-[300px] rounded-full bg-[#F59A57]/5 blur-[80px] pointer-events-none" />
      )}

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            BRANDS &amp; PROJECTS
          </p>
          <h2 className="font-display font-extrabold text-inherit text-[32px] md:text-[42px] leading-[1.1] mb-5">
            Brands we&apos;ve <span className="text-[#249E98]">worked with.</span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${isDark ? "text-white/70" : "text-[#55555A]"}`}>
            From leading brands to entertainment and digital projects, we&apos;ve contributed through content, shoots, campaigns and creative execution.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mb-16">
          {clientLogos.map((logo, idx) => {
            const isJioMart = logo.name === "JioMart";
            const isRealme = logo.name === "Realme";
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px] hover:scale-[1.03] transition-all duration-300 group ${
                  isDark 
                    ? "bg-[#121215] border-white/5 hover:border-[#249E98]/30 shadow-[0_4px_25px_rgba(0,0,0,0.2)]" 
                    : "bg-white border-black/5 hover:border-[#249E98]/20 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                }`}
              >
                <div className="w-full h-12 flex items-center justify-center relative select-none pointer-events-none">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className={`max-h-full max-w-full object-contain opacity-95 group-hover:opacity-100 transition-all duration-300 ${
                      isJioMart ? "scale-145 md:scale-160" : ""
                    }`}
                    style={isRealme ? {
                      filter: "invert(1) sepia(1) saturate(5) hue-rotate(340deg) brightness(1.2)"
                    } : undefined}
                    draggable={false}
                  />
                </div>
                <span className={`text-[10px] font-mono-custom tracking-wider mt-4 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark ? "text-white/40" : "text-black/40"
                }`}>
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
