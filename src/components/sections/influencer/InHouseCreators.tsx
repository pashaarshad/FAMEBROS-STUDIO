"use client";

import Link from "next/link";

interface FeaturedInfluencer {
  name: string;
  handle: string;
  instagramUrl: string;
  followers: string;
  niche: string;
  location: string;
  startingPrice: string;
}

const featuredInfluencers: FeaturedInfluencer[] = [
  {
    name: "Ahsan Khan",
    handle: "@iamahsan.k",
    instagramUrl: "https://www.instagram.com/iamahsan.k/",
    followers: "125K+",
    niche: "Fashion & Lifestyle",
    location: "Mumbai",
    startingPrice: "₹15,000",
  },
  {
    name: "Farhan Khan",
    handle: "@modelfarhan01",
    instagramUrl: "https://www.instagram.com/modelfarhan01/",
    followers: "95K+",
    niche: "Fitness & Fashion",
    location: "Mumbai",
    startingPrice: "₹12,500",
  },
  {
    name: "Elmaa Khan",
    handle: "@elmaakhan.__",
    instagramUrl: "https://www.instagram.com/elmaakhan.__/",
    followers: "180K+",
    niche: "Beauty & Lifestyle",
    location: "Mumbai",
    startingPrice: "₹20,000",
  },
  {
    name: "Sanu Khan",
    handle: "@sanu_khan27",
    instagramUrl: "https://www.instagram.com/sanu_khan27/",
    followers: "140K+",
    niche: "Entertainment & Fashion",
    location: "Mumbai",
    startingPrice: "₹15,000",
  },
  {
    name: "Fiza Khan",
    handle: "@itsfizakhan711",
    instagramUrl: "https://www.instagram.com/itsfizakhan711/",
    followers: "210K+",
    niche: "Fashion, Glam & Beauty",
    location: "Mumbai",
    startingPrice: "₹25,000",
  },
  {
    name: "Sanu Shaikh",
    handle: "@sanu.shaikh.__",
    instagramUrl: "https://www.instagram.com/sanu.shaikh.__/",
    followers: "110K+",
    niche: "Lifestyle & Content Creation",
    location: "Mumbai",
    startingPrice: "₹15,000",
  },
];

export default function InHouseCreators() {
  return (
    <section className="bg-[#0A0A0C] text-white py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#F59A57]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#249E98]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-3">
            FEATURED INFLUENCERS
          </p>
          <h2 className="font-display font-extrabold text-white text-[34px] md:text-[48px] leading-[1.08] mb-4">
            Meet a few creators from our network.
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Explore selected influencers connected with Famebros Studio across different niches and audiences.
          </p>
        </div>

        {/* 6 Influencer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {featuredInfluencers.map((influencer) => (
            <div
              key={influencer.handle}
              className="bg-[#121215] border border-white/10 hover:border-[#F59A57]/50 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Name & Handle Header */}
                <div className="flex items-start justify-between gap-3 mb-6 pb-5 border-b border-white/10">
                  <div>
                    <h3 className="font-display font-extrabold text-white text-xl md:text-2xl mb-1 group-hover:text-[#F59A57] transition-colors">
                      {influencer.name}
                    </h3>
                    <a
                      href={influencer.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-custom text-xs font-bold text-[#F59A57] hover:underline inline-flex items-center gap-1"
                    >
                      {influencer.handle}
                    </a>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-[#F59A57] group-hover:border-[#F59A57]/40 transition-all flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </span>
                </div>

                {/* Info List */}
                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs font-semibold">Followers</span>
                    <span className="font-display font-extrabold text-white text-base">{influencer.followers}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs font-semibold">Niche</span>
                    <span className="text-white/90 text-xs font-bold text-right">{influencer.niche}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs font-semibold">Location</span>
                    <span className="text-white/90 text-xs font-bold">{influencer.location}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-white/50 text-xs font-semibold">Starting From</span>
                    <span className="font-mono-custom font-extrabold text-[#F59A57] text-sm">{influencer.startingPrice}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-2">
                <a
                  href={influencer.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  View Instagram ↗
                </a>

                <Link
                  href="#contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F59A57] hover:bg-[#FF8A3D] text-[#050505] font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center shadow-md"
                >
                  Get Collaboration Quote &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Lead Gen Box */}
        <div className="bg-[#121215] border border-[#249E98]/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#249E98]/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="font-display font-extrabold text-white text-2xl md:text-3xl mb-3">
            Looking for someone different?
          </h3>
          
          <p className="text-[#F59A57] font-bold text-sm md:text-base mb-4">
            Our influencer network goes beyond the creators shown here.
          </p>

          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-4">
            Tell us your location, audience, niche, campaign requirement and budget, and the Famebros Studio team will help shortlist suitable influencers for your brand.
          </p>

          <p className="text-white/40 text-xs italic mb-8">
            More creators available across multiple cities, niches and follower ranges.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#249E98] hover:bg-[#1E8580] text-white font-bold rounded-full text-sm transition-all shadow-[0_4px_20px_rgba(36,158,152,0.25)] hover:scale-105"
          >
            Find Influencers For My Brand &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
