"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E0E11]/92 backdrop-blur-lg py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/imp-doc/logo.png"
            alt="Famebros Studio"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "Home", href: "#" },
            { label: "What We Do ▾", href: "#services" },
            { label: "Work", href: "#work" },
            { label: "Creators", href: "#creators" },
            { label: "Founder", href: "#founder" },
            { label: "About", href: "#about" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-[13px] text-[#B8B8B2] hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#F59A57] text-[#050505] rounded-full text-[14px] font-semibold hover:bg-[#FF8A3D] transition-all"
          >
            Let&apos;s Talk &rarr;
          </Link>
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0D0E] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {["Home", "What We Do", "Work", "Creators", "Founder", "About"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[14px] text-[#B8B8B2] hover:text-white py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F59A57] text-[#050505] rounded-full text-[14px] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
