import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Famebros Studio",
  description: "The page you are looking for does not exist. Return to the Famebros Studio homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] bg-[#FAF9F6] pt-36 sm:pt-44 pb-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Background Soft Glow Accents Matching Site Theme */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#F59A57]/15 via-[#8B5CF6]/12 to-transparent rounded-full blur-[140px] pointer-events-none z-0" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-[-5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#249E98]/10 rounded-full blur-[120px] pointer-events-none z-0" 
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 rounded-full bg-white border border-black/10 shadow-xs mb-6">
          <span className="font-mono-custom text-[11px] sm:text-xs tracking-[0.2em] font-extrabold text-[#D46213] uppercase">
            404 • Page Not Found
          </span>
        </div>

        {/* Big Stylized 404 Headline */}
        <div className="relative mb-3 sm:mb-4">
          <span className="font-display font-black text-7xl sm:text-9xl md:text-[140px] leading-none tracking-[-0.05em] bg-gradient-to-r from-[#D46213] via-[#8B5CF6] to-[#249E98] bg-clip-text text-transparent block">
            404
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#0A0A0C] uppercase tracking-tight leading-[1.1] mb-4">
          Lost in the content?
          <br />
          <span className="text-[#D46213]">We can guide you back.</span>
        </h1>

        {/* Descriptive Body */}
        <p className="text-[#374151] text-sm sm:text-base md:text-lg max-w-lg mx-auto font-medium leading-relaxed mb-8 sm:mb-10">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back to growing your brand.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-[#0A0A0C] rounded-full text-sm sm:text-base font-extrabold hover:scale-105 active:scale-95 transition-all shadow-[0_8px_25px_rgba(245,154,87,0.35)] group"
          >
            <span className="w-6 h-6 rounded-full bg-[#0A0A0C] text-[#FAF9F6] flex items-center justify-center text-xs font-bold group-hover:-translate-x-0.5 transition-transform" aria-hidden="true">
              ←
            </span>
            <span>Go to Homepage</span>
          </Link>

          <Link
            href="/case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white border border-black/15 text-[#0A0A0C] rounded-full text-sm sm:text-base font-extrabold hover:border-[#D46213] hover:bg-[#FAF6F0] hover:scale-105 active:scale-95 transition-all shadow-xs"
          >
            <span>Explore Case Studies</span>
          </Link>
        </div>

        {/* Helpful Quick Links Footer */}
        <div className="pt-6 border-t border-black/10 w-full max-w-lg">
          <p className="font-mono-custom text-[11px] tracking-wider uppercase text-[#374151] font-bold mb-3">
            Helpful Destinations:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-bold text-[#0A0A0C]">
            <Link href="/social-media-management" className="hover:text-[#D46213] transition-colors underline underline-offset-4 decoration-black/20 hover:decoration-[#D46213]">
              Services
            </Link>
            <Link href="/influencer" className="hover:text-[#D46213] transition-colors underline underline-offset-4 decoration-black/20 hover:decoration-[#D46213]">
              Influencer Marketing
            </Link>
            <Link href="/shoot" className="hover:text-[#D46213] transition-colors underline underline-offset-4 decoration-black/20 hover:decoration-[#D46213]">
              Book Trial Shoot
            </Link>
            <Link href="/creator" className="hover:text-[#D46213] transition-colors underline underline-offset-4 decoration-black/20 hover:decoration-[#D46213]">
              Join Creators
            </Link>
            <Link href="/#contact" className="hover:text-[#D46213] transition-colors underline underline-offset-4 decoration-black/20 hover:decoration-[#D46213]">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
