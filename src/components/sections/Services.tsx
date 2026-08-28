"use client";

import Link from "next/link";

const businessServices = [
  {
    num: "01",
    title: "Cinematic F&B Production",
    desc: "Cinematic restaurant tours, menu showcases, and cooking reels that drive customers to book tables and order.",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "02",
    title: "Resorts & Real Estate Tours",
    desc: "Wide panoramic architectural captures, drone-like pans, and resort lifestyle walk-throughs designed for premium bookings.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "03",
    title: "Gym & Fitness Branding",
    desc: "Energetic workout pacing, client transformation success stories, and athletic profiles that boost memberships.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "04",
    title: "Retail & Showroom Campaigns",
    desc: "Premium lighting, detail focus, and product highlight reels showing store collections that drive footfall.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "05",
    title: "Founder & Executive Branding",
    desc: "Personal branding documentaries, thought leadership snippets, and podcasts establishing authority for business leaders.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "06",
    title: "Lead Generation Funnels",
    desc: "Snackable ad creative production integrated with comments, DM automated responses, and direct WhatsApp integrations.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0C] py-24 border-t border-white/10 relative text-white overflow-hidden">
      {/* Premium ambient branding glows & sweeps */}
      <div className="absolute left-[-10%] top-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-tr from-[#DC2626]/15 via-[#FF3B30]/10 to-[#F59A57]/6 blur-[130px] pointer-events-none z-0" />
      <div className="absolute right-[-10%] bottom-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-bl from-[#249E98]/10 via-[#DC2626]/8 to-[#F59A57]/6 blur-[130px] pointer-events-none z-0" />
      
      {/* Subtle diagonal branding light sweep across the section background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(135deg, #DC2626 0%, transparent 60%, #F59A57 100%)`
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#F59A57] mb-4">
              WHAT WE DO
            </p>
            <h2 className="font-display font-extrabold text-white leading-[1.1] text-[32px] md:text-[40px]">
              Tailored growth solutions for <span className="text-[#249E98]">every industry.</span>
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 text-[13px] font-bold text-[#A7A7A2] hover:text-white transition-colors whitespace-nowrap"
          >
            Request Custom Solution
            <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[#A7A7A2] hover:border-white text-xs">
              →
            </span>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {businessServices.map((svc) => (
            <div 
              key={svc.num}
              className="rounded-2xl border border-white/5 overflow-hidden bg-white/5 hover:border-[#F59A57]/45 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              style={{ minHeight: "330px" }}
            >
              {/* Image Block */}
              <div className="h-[140px] w-full relative overflow-hidden bg-gradient-to-br from-[#1C1C21] to-[#0E0E11]">
                <img 
                  src={svc.img} 
                  alt={svc.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500 ease-out" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Text Block */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-[#F59A57] text-[14px] leading-tight mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-white/60 text-[10.5px] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                
                <div className="flex justify-end pt-3">
                  <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white text-xs group-hover:border-[#F59A57] group-hover:text-[#F59A57] group-hover:translate-x-0.5 transition-all">
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
