"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/case-studies") {
      setActiveItem("Case Studies");
    } else if (pathname === "/influencer") {
      setActiveItem("Influencer Marketing");
    } else if (pathname === "/creator") {
      setActiveItem("For Creators");
    } else if (pathname === "/shoot" || pathname === "/book-shoot") {
      setActiveItem("Paid Trial Shoot");
    } else if (pathname === "/") {
      setActiveItem("Home");
    }
  }, [pathname]);

  const isLightPage = pathname === "/case-studies" || pathname === "/shoot" || pathname === "/book-shoot";
  const isScrolledOrLight = scrolled || isLightPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledOrLight
          ? "bg-white/95 backdrop-blur-md py-3.5 border-b border-black/5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-1 flex-shrink-0">
          <Image
            src="/imp-doc/logo.png"
            alt="Famebros Studio"
            width={180}
            height={60}
            className="h-10 md:h-[54px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Items - 2XL Screen Spacing */}
        <nav className="hidden 2xl:flex items-center gap-4 2xl:gap-6">
          {[
            { label: "Home", href: "/" },
            { label: "Business Growth", href: "/#why-choose-us" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Influencer Marketing", href: "/influencer" },
            { label: "Paid Trial Shoot", href: "/shoot" },
            { label: "For Creators", href: "/creator" },
            { label: "Our Clients", href: "/#clients" },
            { label: "Founder", href: "/#founder" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`relative px-1.5 py-1.5 text-[12.5px] 2xl:text-[13.5px] font-bold transition-all duration-200 whitespace-nowrap ${
                activeItem === item.label 
                  ? "text-[#F59A57]" 
                  : isScrolledOrLight 
                    ? "text-[#0A0A0A] hover:text-[#F59A57]" 
                    : "text-white/90 hover:text-[#F59A57]"
              }`}
            >
              {item.label}
              {activeItem === item.label && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-[2.5px] bg-[#F59A57] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Medium to Large Screen Navigation (Compact XL) */}
        <nav className="hidden xl:flex 2xl:hidden items-center gap-3.5">
          {[
            { label: "Home", href: "/" },
            { label: "Business Growth", href: "/#why-choose-us" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Influencer", href: "/influencer" },
            { label: "Trial Shoot", href: "/shoot" },
            { label: "Creators", href: "/creator" },
            { label: "Clients", href: "/#clients" },
            { label: "Founder", href: "/#founder" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`relative px-1 py-1 text-[12px] font-bold transition-all duration-200 whitespace-nowrap ${
                activeItem === item.label || (activeItem === "Case Studies" && item.label === "Case Studies")
                  ? "text-[#F59A57]" 
                  : isScrolledOrLight 
                    ? "text-[#0A0A0A] hover:text-[#F59A57]" 
                    : "text-white/90 hover:text-[#F59A57]"
              }`}
            >
              {item.label}
              {(activeItem === item.label || (activeItem === "Case Studies" && item.label === "Case Studies")) && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-[2.5px] bg-[#F59A57] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Let's Talk */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#F59A57] text-white hover:bg-[#FF8A3D] rounded-lg text-[13px] font-extrabold tracking-wider transition-all shadow-[0_4px_15px_rgba(245,154,87,0.2)]"
          >
            Let&apos;s Talk
            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-[10px]">
              &rarr;
            </span>
          </Link>
          <button
            className={`xl:hidden text-2xl font-bold p-1 transition-colors ${
              isScrolledOrLight ? "text-[#0A0A0A]" : "text-white"
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
        <div className="xl:hidden bg-white border-t border-black/5 px-6 py-5 flex flex-col gap-3.5 shadow-lg animate-fadeIn">
          {[
            { label: "Home", href: "/" },
            { label: "Business Growth", href: "/#why-choose-us" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Influencer Marketing", href: "/influencer" },
            { label: "Paid Trial Shoot", href: "/shoot" },
            { label: "For Creators", href: "/creator" },
            { label: "Our Clients", href: "/#clients" },
            { label: "Founder", href: "/#founder" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[14px] py-1 font-bold transition-colors ${
                activeItem === item.label ? "text-[#F59A57]" : "text-[#0A0A0A] hover:text-[#F59A57]"
              }`}
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
