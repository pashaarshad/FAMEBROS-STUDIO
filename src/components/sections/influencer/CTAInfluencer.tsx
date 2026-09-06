"use client";

import Link from "next/link";

export default function CTAInfluencer() {
  return (
    <section className="bg-[#FAF6F0] py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        <div className="bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[80%] h-[160%] bg-radial from-[#F59A57]/20 to-transparent blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold block mb-4">
              START YOUR CAMPAIGN
            </span>
            <h2 className="font-display font-extrabold text-white text-[32px] md:text-[46px] leading-[1.1] mb-5">
              Grow your brand with influencers.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
              Every campaign is built around your objective, your customer and your budget. Tell us what you&apos;re trying to achieve and we&apos;ll design it from there.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F59A57] text-[#050505] hover:bg-[#FF8A3D] font-bold rounded-xl text-[15px] transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(245,154,87,0.25)]"
              >
                Start a Campaign &rarr;
              </Link>
              <a 
                href="https://wa.me/919892384424?text=Hi%2C%20I%20visited%20your%20website.%20I%20want%20to%20grow%20my%20brand%20with%20influencers.%20Please%20contact%20me%20back."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white hover:border-[#25D366] hover:text-[#25D366] hover:bg-white/5 font-bold rounded-xl text-[15px] transition-all hover:-translate-y-0.5"
              >
                Talk on WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
