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
          ? "bg-white/95 backdrop-blur-md py-4 border-b border-black/5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-1 flex-shrink-0">
          <Image
            src="/imp-doc/logo.png"
            alt="Famebros Studio"
            width={200}
            height={80}
            className="h-15 md:h-[76px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Items - matching screenshot layout */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-7">
          {[
            { label: "Home", href: "/" },
            { label: "Business Growth", href: "/#why-choose-us" },
            { label: "Influencer Marketing", href: "/influencer" },
            { label: "Book a Shoot", href: "/influencer#contact" },
            { label: "Case Studies", href: "/#case-studies" },
            { label: "Our Clients", href: "/#clients" },
            { label: "Founder", href: "/influencer#founder" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`relative px-1 py-2 text-[13px] font-bold transition-all duration-200 whitespace-nowrap ${
                activeItem === item.label 
                  ? "text-[#F59A57]" 
                  : scrolled 
                    ? "text-[#0A0A0A] hover:text-[#F59A57]" 
                    : "text-white/90 hover:text-[#F59A57]"
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
            className="hidden md:inline-flex items-center gap-3 px-6 py-2.5 bg-[#F59A57] text-white hover:bg-[#FF8A3D] rounded-lg text-[13px] font-extrabold tracking-wider transition-all shadow-[0_4px_15px_rgba(245,154,87,0.2)]"
          >
            Let&apos;s Talk
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-xs">
              →
            </span>
          </Link>
          <button
            className={`xl:hidden text-2xl font-bold p-1 transition-colors ${
              scrolled ? "text-[#0A0A0A]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t border-black/5 px-6 py-5 flex flex-col gap-4 shadow-lg animate-fadeIn">
          {[
            { label: "Home", href: "/" },
            { label: "Business Growth", href: "/#why-choose-us" },
            { label: "Influencer Marketing", href: "/influencer" },
            { label: "Book a Shoot", href: "/influencer#contact" },
            { label: "Case Studies", href: "/#case-studies" },
            { label: "Our Clients", href: "/#clients" },
            { label: "Founder", href: "/influencer#founder" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] text-[#0A0A0A] hover:text-[#F59A57] py-1 font-bold transition-colors"
              onClick={() => {
                setActiveItem(item.label);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F59A57] text-white rounded-lg text-[14px] font-bold shadow-[0_4px_15px_rgba(245,154,87,0.2)]"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
