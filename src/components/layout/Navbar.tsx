"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E0E11]/90 backdrop-blur-md py-4 border-b border-border-dark"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-extrabold text-white text-lg tracking-tight flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-orange rounded-sm block"></span>
          FAMEBROS STUDIO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-sm text-text-secondary hover:text-white transition-colors">
            Home
          </Link>
          <div className="relative group cursor-pointer text-sm text-text-secondary hover:text-white transition-colors">
            What We Do ▾
          </div>
          <Link href="#work" className="text-sm text-text-secondary hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#creators" className="text-sm text-text-secondary hover:text-white transition-colors">
            Creators
          </Link>
          <Link href="#founder" className="text-sm text-text-secondary hover:text-white transition-colors">
            Founder
          </Link>
          <Link href="#about" className="text-sm text-text-secondary hover:text-white transition-colors">
            About
          </Link>
        </nav>

        {/* CTA & Mobile Burger */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-orange text-bg-primary rounded-lg text-sm font-semibold hover:bg-orange-bright hover:-translate-y-[1px] transition-all"
          >
            Let&apos;s Talk &rarr;
          </Link>
          <button className="md:hidden text-white text-2xl">
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}
