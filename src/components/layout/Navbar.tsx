"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50
        transition-all duration-500 ease-in-out transform
        ${scrolled
          ? "w-[80%] py-2 px-6 top-2 backdrop-blur-xl bg-black/30 border border-white/10 rounded-lg shadow-md scale-100 opacity-100 translate-y-0"
          : "w-full py-2 px-16 top-4 bg-transparent border-transparent scale-105 opacity-90 translate-y-0"
        }`} 
    >
      <div className="flex items-center justify-between w-full px-3 md:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ml-1 md:ml-0">
          <div className={`relative ${scrolled ? "h-8 w-8" : "h-10 w-10"} transition-all duration-300`}>
            <Image
              src="/Mergex.png"
              alt="Mergex logo"
              fill
              sizes="(max-width: 768px) 40px, 48px"
              className="object-contain"
              priority
            />
          </div>
          <span className={`font-bold tracking-tight ${scrolled ? "text-xl" : "text-2xl"} transition-all duration-300`}>
            MERGE<span className="bg-gradient-to-tl from-purple-400 to-purple-600 bg-clip-text text-transparent">X</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { href: "/#services", label: "Services" },
            { href: "/#about", label: "About" },
            { href: "/#projects", label: "Projects" },
            { href: "/#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={`text-white/80 ${scrolled ? "text-sm" : "text-base"} 
                transition-all duration-300 hover:bg-gradient-to-tl hover:from-purple-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className={`hidden md:block ${scrolled ? "py-2.5 text-sm" : "py-3 text-base"} 
          rounded-xl bg-gradient-to-tl from-purple-400 to-purple-600 text-white font-semibold 
          hover:scale-105 hover:translate-y-[-2px] transition-all duration-300`}
          size={scrolled ? "sm" : "md"}
        >
          Start Project
        </Button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all relative z-[60] mr-0"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Full-screen Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
          <div className="flex flex-col items-center space-y-8 w-full px-4">
          {[
            { href: "/#services", label: "Services" },
            { href: "/#about", label: "About" },
            { href: "/#projects", label: "Projects" },
            { href: "/#contact", label: "Contact" },
          ].map(({ href, label }, index) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-white/90 hover:text-white transition-all hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              {label}
            </Link>
          ))}
          <Button 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 py-3 px-8 rounded-xl bg-gradient-to-tl from-purple-400 to-purple-600 text-white text-lg font-semibold hover:scale-105 transition-all duration-300 self-start animate-fadeIn"
            style={{ animationDelay: '0.5s' }}
          >
            Start Project
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;