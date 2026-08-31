"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0C] text-white/80 pt-24 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Top Colorful Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F59A57] via-[#249E98] to-[#F59A57]" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Five Column Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand details */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="inline-block select-none pointer-events-none">
              <img 
                src="/imp-doc/logo.png" 
                alt="FAMEBROS STUDIO Logo" 
                className="h-14 md:h-[70px] w-auto object-contain"
              />
            </Link>
            <p className="text-[12px] text-white/60 leading-relaxed max-w-[240px]">
              We build brands through powerful content, smart strategies and real influence. Designed to grow. Built to last.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="#about" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                About Us
              </Link>
              <Link href="#clients" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                Our Clients
              </Link>
              <Link href="#founder" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                Our Team
              </Link>
              <Link href="#contact" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Column 3: What We Do */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="#services" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                Social Media Growth
              </Link>
              <Link href="#services" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                Content Production
              </Link>
              <Link href="#services" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                Influencer Marketing
              </Link>
              <Link href="#services" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                Reel Shoots
              </Link>
            </div>
          </div>

          {/* Column 4: Work */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="#work" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                Case Studies
              </Link>
              <Link href="#faq" className="text-[12px] text-white/70 hover:text-[#F59A57] transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Column 5: Connect with Instagram & YouTube & WhatsApp direct */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase">
              Connect
            </h4>
            <div className="flex flex-col gap-3 text-[12px] text-white/70">
              {/* Phone number */}
              <a 
                href="tel:+919892384424" 
                className="hover:text-[#F59A57] transition-colors"
              >
                +91 98923 84424
              </a>

              {/* Email */}
              <a 
                href="mailto:famebros.studio@gmail.com" 
                className="hover:text-[#F59A57] transition-colors break-all"
              >
                famebros.studio@gmail.com
              </a>

              {/* Location details */}
              <div className="flex flex-col leading-tight pt-1">
                <span className="font-semibold text-white">Mumbai, Maharashtra</span>
                <span className="text-[11px] text-[#249E98] mt-0.5">Open 24 hours</span>
              </div>
              
              {/* WhatsApp Quick Chat */}
              <a 
                href="https://wa.me/919892384424?text=Hi%2C%20I%20visited%20your%20website.%20I%20want%20to%20grow%20my%20business.%20Please%20contact%20me%20back." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-[11px] bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-lg p-2 hover:bg-[#25D366]/20 transition-all self-start mt-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.884-6.949C16.528 2.021 14.069.996 11.45.996c-5.441 0-9.87 4.372-9.874 9.802-.001 1.77.476 3.498 1.381 5.012l-1.02 3.731 3.864-.997c1.517.844 3.197 1.288 4.866 1.288zm9.585-7.054c-.26-.13-1.534-.757-1.772-.843-.238-.087-.41-.13-.583.13-.172.26-.667.844-.818 1.017-.151.173-.303.195-.563.065-.26-.13-1.099-.405-2.094-1.291-.774-.69-1.297-1.543-1.449-1.803-.151-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.151.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.583-1.407-.798-1.927-.21-.505-.44-.436-.607-.444-.156-.008-.335-.009-.514-.009s-.47.067-.716.335c-.246.268-.94.92-.94 2.247s.965 2.607 1.1 2.79c.135.184 1.902 2.903 4.606 4.07.643.277 1.144.443 1.535.568.646.205 1.233.176 1.7.106.518-.077 1.534-.627 1.75-1.233.217-.606.217-1.125.151-1.233-.065-.108-.238-.173-.497-.303z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Dynamic Circular Outline Social Links */}
              <div className="flex gap-2.5 pt-3">
                <a 
                  href="https://www.instagram.com/famebrosstudio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-[#F59A57] flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/5 hover:scale-105"
                  aria-label="Instagram Link"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@bilalsayed1993" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-[#F59A57] flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/5 hover:scale-105"
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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-white/40">
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
