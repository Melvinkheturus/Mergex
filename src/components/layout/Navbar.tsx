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


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50
        transition-all duration-500 ease-in-out transform
        ${scrolled
          ? "w-[80%] py-2 px-6 top-2 backdrop-blur-xl bg-black/30 border border-white/10 rounded-lg shadow-md scale-100 opacity-100 translate-y-0"
          : "w-[90%] py-1 px-12 top-4 bg-black/30 md:bg-transparent border-transparent scale-105 rounded-lg opacity-90 translate-y-0"
        }`} 
    >
      <div className="flex items-center justify-between w-full px-3 md:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 ml-[-2rem] md:ml-0">
          <div className={`relative ${scrolled ? "h-8 w-8" : "h-10 w-10"} transition-all duration-300`}>
            <Image
              src="/Logo/Mergex.png"
              alt="Mergex logo"
              fill
              sizes="(max-width: 768px) 40px, 48px"
              className="object-contain"
              priority
            />
          </div>
          <span className={`font-bold tracking-tight ${scrolled ? "text-xl" : "text-2xl"} transition-all duration-300`}>
            MERGE<span className="bg-linear-to-tl from-purple-400 to-purple-600 bg-clip-text text-transparent">X</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {[
            { href: "/About", label: "About" },
            { href: "/Services", label: "Services" },
            { href: "/pricing", label: "Pricing" },
            { href: "/Portfolio", label: "Portfolio" },
            { href: "/Contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={`text-white/80 ${scrolled ? "text-sm" : "text-base"} 
                transition-all duration-300 hover:text-purple-400 whitespace-nowrap`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/Contact" className="hidden md:block">
          <Button
            className={`${scrolled ? "py-2.5 text-sm" : "py-3 text-base"} 
            rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold 
            hover:scale-105 hover:translate-y-[-2px] transition-all duration-300`}
            size={scrolled ? "sm" : "md"}
          >
            Start Project
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-1 rounded-full transition-all relative z-60 order-3 ml-44 cursor-pointer"
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

{/* Mobile Dropdown Menu */}
 <div 
   className={`md:hidden absolute left-1/2 top-16 w-[90%] max-w-sm -translate-x-1/2 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 ${
     mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4" 
   }`}
 > 
   <div className="flex flex-col items-start space-y-4 p-6"> 
     {[
            { href: "/About", label: "About" },
            { href: "/Services", label: "Services" },
            { href: "/pricing", label: "Pricing" },
            { href: "/Portfolio", label: "Portfolio" },
            { href: "/Contact", label: "Contact" },
     ].map(({ href, label }) => ( 
       <Link 
         key={label} 
         href={href} 
         onClick={() => setMobileMenuOpen(false)} 
         className="text-lg font-medium text-white/90 hover:text-purple-400 transition-all" 
       > 
         {label} 
       </Link> 
     ))} 
 
     <Link href="/Contact" className="w-full"> 
       <Button 
         onClick={() => setMobileMenuOpen(false)}
         className="w-full mt-4 py-2.5 rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300" 
       > 
         Start Project 
       </Button> 
     </Link> 
   </div> 
 </div>
    </nav>
  );
};

export default Navbar;