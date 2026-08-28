"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Social Media Growth",
    desc: "Strategy, content, posting, ads & analytics that drive real growth.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "02",
    title: "Content Production",
    desc: "Photos, Reels, Brand films, product shoots & commercial video production.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "03",
    title: "Influencer Marketing",
    desc: "Right creators, real influence. Campaigns that connect & convert.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "04",
    title: "Creator Growth",
    desc: "We build creators, personal brands, and open doors to collaborations.",
    img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "05",
    title: "Reel Shoots",
    desc: "One shoot day. A month of content. That's the FAMEBROS way.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "06",
    title: "Event Reel Shoots",
    desc: "Fast. Creative. Vertical. Capturing your events as they happen.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-primary py-24 border-t border-black/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Header matching exact layout details */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#55555A] mb-4">
              WHAT WE DO
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] leading-[1.1] text-[32px] md:text-[40px]">
              Everything your brand needs to grow<br />
              in today&apos;s <span className="text-[#249E98]">digital world.</span>
            </h2>
          </div>
          <Link
            href="#all-services"
            className="inline-flex items-center gap-3 text-[13px] font-bold text-[#55555A] hover:text-[#0A0A0A] transition-colors whitespace-nowrap"
          >
            Explore All Services
            <span className="w-6 h-6 rounded-full border border-black/15 flex items-center justify-center text-[#55555A] hover:border-black text-xs">
              →
            </span>
          </Link>
        </div>

        {/* Services Grid matching media_1787770160810.png exactly, height decreased slightly for snug look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {services.map((svc) => (
            <div 
              key={svc.num}
              className="rounded-2xl border border-black/5 overflow-hidden bg-[#FAFAFA] hover:border-[#F59A57]/45 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-sm"
              style={{ minHeight: "330px" }}
            >
              {/* Image Block (Top Half) - Removed grayscale, always colorful */}
              <div className="h-[150px] w-full relative overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-[#E5E7EB]">
                <img 
                  src={svc.img} 
                  alt={svc.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500 ease-out" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/40 via-transparent to-transparent" />
              </div>

              {/* Text Block (Bottom Half) */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-[#F59A57] text-[14px] leading-tight mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-[#55555A] text-[10.5px] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                
                <div className="flex justify-end pt-3">
                  <div className="w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-[#0A0A0A] text-xs group-hover:border-[#F59A57] group-hover:text-[#F59A57] group-hover:translate-x-0.5 transition-all">
                    →
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
