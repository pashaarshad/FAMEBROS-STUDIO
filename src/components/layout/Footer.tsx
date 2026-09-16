"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0C] text-white/80 pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Top Colorful Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F59A57] via-[#8B5CF6] to-[#F59A57]" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Location Summary */}
          <div className="sm:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block select-none">
              <img 
                src="/imp-doc/logo.png" 
                alt="Famebros Studio - Social Media Agency in Mulund & Mumbai" 
                className="h-12 md:h-[60px] w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-white/70 leading-relaxed max-w-sm">
              <strong className="text-white">Famebros Studio</strong> is a social media marketing and content production agency based in Mulund, Mumbai. We provide social media management, content creation, influencer marketing, Meta Ads, brand shoots and performance marketing to turn attention into real business growth.
            </p>
            <div className="text-[12px] text-white/60 flex flex-col gap-1 pt-1">
              <span className="text-[#F59A57] font-semibold">📍 Location:</span>
              <span>Mulund West, Mumbai, Maharashtra 400080, India</span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[12px] font-extrabold text-white tracking-wider uppercase text-[#F59A57]">
              Services
            </h4>
            <div className="flex flex-col gap-2 text-[12px]">
              <Link href="/social-media-management" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Social Media Management
              </Link>
              <Link href="/content-creation-agency-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Content Creation Agency
              </Link>
              <Link href="/reels-production-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Reels Production Mumbai
              </Link>
              <Link href="/influencer-marketing-agency-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Influencer Marketing
              </Link>
              <Link href="/meta-ads-agency-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Meta Ads Agency
              </Link>
              <Link href="/brand-shoots-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Brand & Commercial Shoots
              </Link>
              <Link href="/performance-marketing-agency-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Performance Marketing
              </Link>
            </div>
          </div>

          {/* Column 3: Location Hubs */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[12px] font-extrabold text-white tracking-wider uppercase text-[#F59A57]">
              Locations
            </h4>
            <div className="flex flex-col gap-2 text-[12px]">
              <Link href="/social-media-agency-mulund" className="text-white/70 hover:text-[#F59A57] transition-colors font-medium">
                Social Media Agency Mulund
              </Link>
              <Link href="/social-media-agency-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors font-medium">
                Social Media Agency Mumbai
              </Link>
              <Link href="/shoot" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Book Trial Shoot (Mumbai)
              </Link>
              <Link href="/about-famebros-studio" className="text-white/70 hover:text-[#F59A57] transition-colors">
                About Famebros Studio
              </Link>
              <Link href="/case-studies" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Case Studies & Work
              </Link>
            </div>
          </div>

          {/* Column 4: Industry Solutions */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[12px] font-extrabold text-white tracking-wider uppercase text-[#F59A57]">
              Industries
            </h4>
            <div className="flex flex-col gap-2 text-[12px]">
              <Link href="/restaurant-social-media-marketing-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Restaurant Marketing
              </Link>
              <Link href="/salon-social-media-marketing-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Salon & Beauty Marketing
              </Link>
              <Link href="/fashion-social-media-agency-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Fashion & Clothing Agency
              </Link>
              <Link href="/resort-social-media-marketing" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Resort & Travel Marketing
              </Link>
              <Link href="/jewellery-social-media-marketing-mumbai" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Jewellery Brand Marketing
              </Link>
              <Link href="/creator" className="text-white/70 hover:text-[#F59A57] transition-colors">
                Join Creator Network
              </Link>
            </div>
          </div>

          {/* Column 5: Contact & Google Business Details */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[12px] font-extrabold text-white tracking-wider uppercase text-[#F59A57]">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-[12px] text-white/70">
              <a 
                href="tel:+919137923145" 
                className="hover:text-[#F59A57] transition-colors"
              >
                📞 +91 91379 23145
              </a>
              <a 
                href="tel:+919324076369" 
                className="hover:text-[#F59A57] transition-colors"
              >
                📞 +91 93240 76369
              </a>
              <a 
                href="mailto:growth@famebrosstudio.com" 
                className="hover:text-[#F59A57] transition-colors break-all"
              >
                ✉️ growth@famebrosstudio.com
              </a>

              {/* WhatsApp Quick Link */}
              <a 
                href="https://wa.me/919137923145?text=Hi%2C%20I%20found%20Famebros%20Studio%20online.%20I%20want%20to%20grow%20my%20business." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-[11px] bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 rounded-lg px-2.5 py-1.5 hover:bg-[#25D366]/25 transition-all self-start mt-1 font-semibold"
              >
                💬 Chat on WhatsApp
              </a>

              {/* Social links */}
              <div className="flex gap-2.5 pt-2">
                <a 
                  href="https://www.instagram.com/famebros.studio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-white/15 hover:border-[#F59A57] flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/5"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/famebros-studio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-white/15 hover:border-[#F59A57] flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/5"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@famebrosstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-white/15 hover:border-[#F59A57] flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/5"
                  aria-label="YouTube Channel"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.52 3.526 12 3.526 12 3.526s-7.52 0-9.388.528A3.003 3.003 0 00.502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 002.11 2.108C4.48 20.474 12 20.474 12 20.474s7.52 0 9.388-.528a3.003 3.003 0 002.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and location indicator bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-white/50">
          <p>© 2026 Famebros Studio. Social Media Marketing & Content Agency in Mulund, Mumbai.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Mulund Office
            </Link>
            <span>&bull;</span>
            <Link href="/" className="hover:text-white transition-colors">
              Mumbai HQ
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
