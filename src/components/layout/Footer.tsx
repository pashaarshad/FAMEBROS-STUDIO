import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-primary text-white pt-20 pb-8 border-t border-border-dark">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-border-dark">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display font-extrabold text-white text-lg tracking-tight flex items-center gap-2 mb-4"
            >
              <span className="w-2.5 h-2.5 bg-orange rounded-sm block"></span>
              FAMEBROS STUDIO
            </Link>
            <p className="text-sm text-text-secondary max-w-xs mb-6 leading-relaxed">
              We don&apos;t just market businesses. We build brands designed to grow for years.
            </p>
          </div>

          {/* Company Col */}
          <div>
            <h5 className="font-mono text-[11px] tracking-widest uppercase text-text-muted mb-6 font-semibold">
              Company
            </h5>
            <div className="flex flex-col gap-3">
              <Link href="#about" className="text-sm text-text-secondary hover:text-orange transition-colors">About</Link>
              <Link href="#team" className="text-sm text-text-secondary hover:text-orange transition-colors">Our Team</Link>
              <Link href="#founder" className="text-sm text-text-secondary hover:text-orange transition-colors">Founder</Link>
              <Link href="#careers" className="text-sm text-text-secondary hover:text-orange transition-colors">Careers</Link>
              <Link href="#contact" className="text-sm text-text-secondary hover:text-orange transition-colors">Contact</Link>
            </div>
          </div>

          {/* What We Do Col */}
          <div>
            <h5 className="font-mono text-[11px] tracking-widest uppercase text-text-muted mb-6 font-semibold">
              What We Do
            </h5>
            <div className="flex flex-col gap-3">
              <Link href="#social" className="text-sm text-text-secondary hover:text-orange transition-colors">Social Media Growth</Link>
              <Link href="#content" className="text-sm text-text-secondary hover:text-orange transition-colors">Content Production</Link>
              <Link href="#influencer" className="text-sm text-text-secondary hover:text-orange transition-colors">Influencer Marketing</Link>
              <Link href="#creator" className="text-sm text-text-secondary hover:text-orange transition-colors">Creator Growth</Link>
              <Link href="#reels" className="text-sm text-text-secondary hover:text-orange transition-colors">Reel Shoots</Link>
              <Link href="#events" className="text-sm text-text-secondary hover:text-orange transition-colors">Event Reel Shoots</Link>
            </div>
          </div>

          {/* Work & Connect Col */}
          <div className="flex flex-col gap-8">
            <div>
              <h5 className="font-mono text-[11px] tracking-widest uppercase text-text-muted mb-6 font-semibold">
                Work
              </h5>
              <div className="flex flex-col gap-3">
                <Link href="#work" className="text-sm text-text-secondary hover:text-orange transition-colors">Reels</Link>
                <Link href="#campaigns" className="text-sm text-text-secondary hover:text-orange transition-colors">Campaigns</Link>
                <Link href="#cases" className="text-sm text-text-secondary hover:text-orange transition-colors">Case Studies</Link>
              </div>
            </div>
            <div>
              <h5 className="font-mono text-[11px] tracking-widest uppercase text-text-muted mb-6 font-semibold">
                Connect
              </h5>
              <div className="flex flex-col gap-3">
                <a href="mailto:famebros.studio@gmail.com" className="text-sm text-text-secondary hover:text-orange transition-colors">famebros.studio@gmail.com</a>
                <a href="#sales" className="text-sm text-text-secondary hover:text-orange transition-colors">Famebros Sales</a>
                <a href="https://www.instagram.com/famebrosstudio/" target="_blank" rel="noreferrer" className="text-sm text-text-secondary hover:text-orange transition-colors">Instagram</a>
                <a href="https://www.youtube.com/@bilalsayed1993" target="_blank" rel="noreferrer" className="text-sm text-text-secondary hover:text-orange transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-text-muted">
          <p>© 2026 Famebros Studio. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#privacy" className="hover:text-text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-text-secondary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
