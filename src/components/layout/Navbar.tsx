"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-1 flex-shrink-0">
          <Image
            src="/imp-doc/logo.png"
            alt="Famebros Studio"
            width={130}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
              onClick={() => setActiveItem(item.label)}
              className={`relative px-1 py-2 text-[14px] font-medium transition-colors whitespace-nowrap ${
                activeItem === item.label ? "text-white" : "text-[#A7A7A2] hover:text-white"
              }`}
            >
              {item.label}
              {activeItem === item.label && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#F59A57] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Let's Talk */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-3 px-6 py-2.5 bg-[#F59A57] text-[#050505] rounded-full text-[14px] font-bold hover:bg-[#FF8A3D] transition-all"
          >
            Let&apos;s Talk
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#F59A57] font-extrabold text-xs">
              →
            </span>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050505] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {["Home", "What We Do", "Work", "Creators", "Founder", "About"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[14px] text-[#A7A7A2] hover:text-white py-1"
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
