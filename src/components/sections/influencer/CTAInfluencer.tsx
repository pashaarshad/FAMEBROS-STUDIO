"use client";

import Link from "next/link";

export default function CTAInfluencer() {
  return (
    <section className="bg-bg-primary pb-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        <div className="bg-[#FAFAFA] border border-[#249E98]/25 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden group shadow-sm">
          
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#249E98]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#F59A57]/3 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex-1">
            <h2 className="font-display font-light text-[#0A0A0A] text-[26px] md:text-[34px] leading-tight">
              Ready to build something <br className="hidden md:inline" />
              <span className="font-extrabold text-[#F59A57]">people remember?</span>
            </h2>
          </div>

          <div className="relative z-10 flex flex-col md:items-end gap-5">
            <p className="text-[#55555A] text-[13px] md:text-right leading-relaxed max-w-sm">
              Let&apos;s create content, influence and growth that <br className="hidden md:inline" />
              your brand will be known for.
            </p>
            
            <Link 
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#F59A57] text-[#050505] hover:bg-[#FF8A3D] font-bold rounded-full text-[14px] transition-all self-start md:self-end hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(245,154,87,0.15)]"
            >
              Start a Conversation
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#F59A57] font-bold text-xs">
                →
              </span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
