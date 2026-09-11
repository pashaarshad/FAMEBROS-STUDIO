"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-[#FAF6F0] text-[#0A0A0A] py-24 border-t border-black/5 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F59A57]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#249E98]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            ABOUT FAMEBROS STUDIO
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[36px] sm:text-[46px] md:text-[54px] leading-[1.08] mb-6">
            We help businesses grow <br />
            through <span className="text-[#249E98]">social media.</span>
          </h2>
          <div className="space-y-4 text-[#55555A] text-base md:text-lg leading-relaxed">
            <p className="font-medium text-[#0A0A0A]">
              Famebros Studio is a social media marketing and growth agency helping brands with strategy, content, social media management, influencer marketing and performance marketing.
            </p>
            <p>
              We focus on more than likes and followers. Our goal is to help businesses build visibility, trust, enquiries and long-term growth.
            </p>
          </div>
        </div>

        {/* 3 Impact Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-xs">
            <div className="font-display text-4xl md:text-5xl font-extrabold text-[#F59A57] mb-2">
              50+
            </div>
            <div className="font-mono-custom text-xs uppercase tracking-wider text-[#0A0A0A] font-extrabold">
              Businesses Managed
            </div>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-xs">
            <div className="font-display text-4xl md:text-5xl font-extrabold text-[#249E98] mb-2">
              80%
            </div>
            <div className="font-mono-custom text-xs uppercase tracking-wider text-[#0A0A0A] font-extrabold">
              New Clients Through Referrals
            </div>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-xs">
            <div className="font-display text-4xl md:text-5xl font-extrabold text-[#F59A57] mb-2">
              Pan India
            </div>
            <div className="font-mono-custom text-xs uppercase tracking-wider text-[#0A0A0A] font-extrabold">
              Multiple Cities Across India
            </div>
          </div>
        </div>

        {/* Sub-section: Why Famebros Studio? */}
        <div className="mb-20">
          <div className="mb-10">
            <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#249E98] font-bold mb-2">
              OUR ADVANTAGE
            </p>
            <h3 className="font-display font-extrabold text-[#0A0A0A] text-2xl md:text-3xl">
              Why Famebros Studio?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm hover:border-[#F59A57]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#F59A57]/10 flex items-center justify-center text-[#F59A57] font-bold text-xl mb-6 group-hover:bg-[#F59A57] group-hover:text-black transition-all">
                01
              </div>
              <h4 className="font-display font-extrabold text-[#0A0A0A] text-xl mb-3">
                Business First
              </h4>
              <p className="text-[#55555A] text-sm leading-relaxed font-medium">
                We understand your business before creating content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm hover:border-[#249E98]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#249E98]/10 flex items-center justify-center text-[#249E98] font-bold text-xl mb-6 group-hover:bg-[#249E98] group-hover:text-white transition-all">
                02
              </div>
              <h4 className="font-display font-extrabold text-[#0A0A0A] text-xl mb-3">
                Complete Management
              </h4>
              <p className="text-[#55555A] text-sm leading-relaxed font-medium">
                Strategy, shoots, editing, posting, influencers and ads under one team.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm hover:border-[#F59A57]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#F59A57]/10 flex items-center justify-center text-[#F59A57] font-bold text-xl mb-6 group-hover:bg-[#F59A57] group-hover:text-black transition-all">
                03
              </div>
              <h4 className="font-display font-extrabold text-[#0A0A0A] text-xl mb-3">
                Built for Growth
              </h4>
              <p className="text-[#55555A] text-sm leading-relaxed font-medium">
                We focus on consistent business growth, not just viral views.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner Box */}
        <div className="bg-[#0A0A0C] text-white border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#F59A57] font-bold mb-2">
              START YOUR JOURNEY
            </p>
            <h3 className="font-display font-extrabold text-white text-2xl md:text-3xl">
              Let’s build your next growth story.
            </h3>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#F59A57] hover:bg-[#FF8A3D] text-[#050505] font-extrabold rounded-full text-sm transition-all shadow-[0_4px_20px_rgba(245,154,87,0.25)] whitespace-nowrap hover:scale-105"
          >
            Let’s Talk &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
