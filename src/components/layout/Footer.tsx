"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-8 border-t border-white/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Five Column Grid Layout matching media_1787834047514.png exactly */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand details */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="inline-block select-none pointer-events-none">
              <img 
                src="/imp-doc/logo.png" 
                alt="FAMEBROS STUDIO Logo" 
                className="h-14 md:h-[70px] w-auto object-contain"
              />
            </Link>
            <p className="text-[12px] text-[#A7A7A2] leading-relaxed max-w-[240px]">
              We build brands through powerful content,<br />
              smart strategies and real influence.<br />
              Designed to grow. Built to last.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="#about" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#founder" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Our Team
              </Link>
              <Link href="#careers" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="#contact" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: What We Do */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase">
              What We Do
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="#services" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Social Media Growth
              </Link>
              <Link href="#services" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Content Production
              </Link>
              <Link href="#services" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Influencer Marketing
              </Link>
              <Link href="#services" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Creator Growth
              </Link>
              <Link href="#services" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Reel Shoots
              </Link>
              <Link href="#services" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Event Reel Shoots
              </Link>
            </div>
          </div>

          {/* Column 4: Work */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase">
              Work
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="#work" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Reels
              </Link>
              <Link href="#work" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Campaigns
              </Link>
              <Link href="#work" className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors">
                Case Studies
              </Link>
            </div>
          </div>

          {/* Column 5: Connect with Instagram & YouTube circular links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:famebros.studio@gmail.com" 
                className="text-[12px] text-[#A7A7A2] hover:text-white transition-colors break-words"
              >
                famebros.studio@gmail.com
              </a>
              
              {/* WhatsApp Sales Direct */}
              <a 
                href="https://wa.me/message/famebros-sales" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[12px] text-[#A7A7A2] hover:text-white transition-all leading-normal"
              >
                <span className="block font-semibold">Famebros Sales</span>
                <span className="text-[11px] text-[#6E716F] font-normal block">(Chat on WhatsApp)</span>
              </a>

              {/* Dynamic Circular Outline Social Links */}
              <div className="flex gap-2.5 pt-3">
                <a 
                  href="https://www.instagram.com/famebrosstudio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#F59A57] flex items-center justify-center text-white/70 hover:text-white transition-all bg-black/30 hover:scale-105"
                  aria-label="Instagram Link"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@bilalsayed1993" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#F59A57] flex items-center justify-center text-white/70 hover:text-white transition-all bg-black/30 hover:scale-105"
                  aria-label="YouTube Link"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.52 3.526 12 3.526 12 3.526s-7.52 0-9.388.528A3.003 3.003 0 00.502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 002.11 2.108C4.48 20.474 12 20.474 12 20.474s7.52 0 9.388-.528a3.003 3.003 0 002.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright alignment bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-[#6E716F]">
          <p>© 2026 Famebros Studio. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
