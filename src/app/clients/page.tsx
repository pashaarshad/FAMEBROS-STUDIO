"use client";

import Link from "next/link";

const clientLogos = [
  { name: "Audi", src: "/clients-logo/Audi.webp" },
  { name: "Cadbury", src: "/clients-logo/Cadbury-logo.png" },
  { name: "Cello Writing", src: "/clients-logo/Cello Writing-logo.png" },
  { name: "Filmfare", src: "/clients-logo/Filmfare-logo.png" },
  { name: "Flipkart", src: "/clients-logo/Flipkart-logo.png" },
  { name: "Hip-hop", src: "/clients-logo/Hip-hop-logo.jpg" },
  { name: "Indian Idol", src: "/clients-logo/Indian Idol-logo.png" },
  { name: "JioMart", src: "/clients-logo/JioMart-logo.png" },
  { name: "Laughter Chefs", src: "/clients-logo/Laughter Chefs-logo.png" },
  { name: "Launch Control", src: "/clients-logo/Launch Control-logo.png" },
  { name: "Meta", src: "/clients-logo/Meta-Logo.png" },
  { name: "Netflix", src: "/clients-logo/Netflix-logo.webp" },
  { name: "Pro Govinda India", src: "/clients-logo/Pro Govinda India-logo.png" },
  { name: "Red Chillies Entertainment", src: "/clients-logo/Red Chillies Entertainment-logo.webp" },
  { name: "Samsung", src: "/clients-logo/Samsung-logo.png" },
  { name: "Baskin Robbins", src: "/clients-logo/baskin-robbins-logo.png" },
  { name: "Realme", src: "/clients-logo/realme_logo.png" }
];

export default function ClientsPage() {
  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white pt-36 pb-24 relative overflow-hidden flex flex-col justify-between">
      
      {/* Brand Glowing background sweeps */}
      <div className="absolute left-[-10%] top-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-tr from-[#DC2626]/20 via-[#FF3B30]/12 to-[#F59A57]/8 blur-[130px] pointer-events-none z-0" />
      <div className="absolute right-[-10%] bottom-[-5%] w-[50%] h-[80%] rounded-full bg-gradient-to-bl from-[#249E98]/12 via-[#DC2626]/10 to-[#F59A57]/8 blur-[130px] pointer-events-none z-0" />

      {/* Subtle diagonal branding light sweep */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(135deg, #DC2626 0%, transparent 60%, #F59A57 100%)`
        }}
      />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-16 relative z-10 flex-grow">
        
        {/* Breadcrumb & Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            CLIENT PARTNERS
          </p>
          <h1 className="font-display font-extrabold text-white text-[36px] md:text-[52px] leading-[1.1] mb-5">
            Brands we have <span className="text-[#249E98]">grown.</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            We work with leading enterprises, digital-first D2C brands, hospitality groups and entertainment houses across India to build long-term brand value.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mb-20">
          {clientLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="bg-[#121215] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px] hover:border-[#249E98]/30 transition-all duration-300 group shadow-lg"
            >
              <div className="w-full h-12 flex items-center justify-center relative select-none pointer-events-none">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100"
                  draggable={false}
                />
              </div>
              <span className="text-[10px] font-mono-custom tracking-wider text-white/40 mt-4 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#121215] to-[#16161C] border border-white/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#F59A57]/5 blur-3xl pointer-events-none" />
          <h2 className="font-display font-extrabold text-white text-2xl md:text-3xl mb-4 relative z-10">
            Ready to become a household name?
          </h2>
          <p className="text-white/60 text-xs md:text-sm max-w-lg mx-auto mb-8 relative z-10">
            Let&apos;s build the strategy, organic foundation, and high-converting content structure that will scale your business.
          </p>
          <div className="relative z-10">
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#F59A57] text-[#050505] rounded-lg text-[14px] font-bold hover:bg-[#FF8A3D] transition-all shadow-[0_4px_20px_rgba(245,154,87,0.25)]"
            >
              Enquire Now &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
