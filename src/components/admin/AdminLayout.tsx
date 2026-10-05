"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/check');
        const data = await res.json();

        if (!data.authenticated && pathname !== '/admin/login') {
          router.push('/admin/login');
        } else {
          setAuthChecked(true);
        }
      } catch (e) {
        console.error(e);
        router.push('/admin/login');
      }
    }
    checkAuth();
  }, [pathname, router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-[#0A0A0C] text-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-sm font-mono text-[#F59A57]">
          <span className="w-4 h-4 rounded-full border-2 border-[#F59A57] border-t-transparent animate-spin" />
          Authenticating Admin Access...
        </div>
      </div>
    );
  }

  const navLinks = [
    { href: '/admin', label: '📊 Overview' },
    { href: '/admin/site-content', label: '✏️ Site Content' },
    { href: '/admin/case-studies', label: '📈 Case Studies' },
    { href: '/admin/portfolio', label: '🎬 Portfolio & Media' },
    { href: '/admin/brands', label: '🏷️ Brand Logos' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white flex flex-col font-sans">
      {/* Admin Header Navbar */}
      <header className="bg-[#121216] border-b border-white/10 sticky top-0 z-50 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="flex items-center gap-3">
            <img src="/imp-doc/logo.png" alt="Famebros Studio" className="h-8 object-contain" />
            <span className="font-display font-extrabold text-sm uppercase tracking-widest text-[#F59A57] hidden xs:inline-block">
              Site Manager
            </span>
          </Link>

          <span className="text-white/20 hidden md:inline-block">|</span>

          {/* Nav Tabs */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    active
                      ? 'bg-[#F59A57] text-black shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="text-xs text-white/60 hover:text-white transition-colors border border-white/15 px-3 py-1.5 rounded-lg hidden sm:inline-block"
          >
            ↗ View Public Site
          </Link>
          <button
            onClick={handleLogout}
            className="text-xs font-bold bg-red-500/15 text-red-400 border border-red-500/30 px-3.5 py-1.5 rounded-lg hover:bg-red-500/25 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Mobile Subnav */}
      <nav className="md:hidden flex overflow-x-auto bg-[#16161c] px-4 py-2 border-b border-white/10 gap-2 scrollbar-none">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-md text-[11px] font-bold whitespace-nowrap ${
                active ? 'bg-[#F59A57] text-black' : 'text-white/70 bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Main Content Body */}
      <main className="flex-grow max-w-[1400px] w-full mx-auto px-4 sm:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#121216] border-t border-white/10 py-4 text-center text-xs text-white/40">
        Famebros Studio &bull; Content Management System (CMS) &bull; Mulund, Mumbai
      </footer>
    </div>
  );
}
