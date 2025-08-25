"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import Marquee from "@/components/Animation/Marquee";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Marquee text="Set. Ship. Ready. Set" />
      <footer 
        className="relative pt-16 pb-8 text-white overflow-hidden"
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.0) 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Area */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/Logo/Mergex.png"
                  alt="Mergex logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold tracking-tight text-2xl">
                MERGE<span className="bg-linear-to-tl from-purple-400 to-purple-600 bg-clip-text text-transparent">X</span>
              </span>
            </div>
            <p className="text-gray-300 mt-2">Where Ideas Merge with Innovation.</p>
            <Link 
              href="/#contact"
              className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
            >
              Start a Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            {/* Contact Details */}
            <div className="flex flex-col space-y-2 mt-2">
              <Link href="tel:+919940398023" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <FaPhone className="h-4 w-4 text-purple-400" />
                <span>+91 9940398023</span>
              </Link>
              <Link href="mailto:contact@mergex.in" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <FaEnvelope className="h-4 w-4 text-purple-400" />
                <span>contact@mergex.in</span>
              </Link>
            </div>
            
            {/* Social Links - Relocated */}
            <div className="flex space-x-4 mt-2">
              {[
                { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
                { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
          
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-bold mb-2 text-white">Navigation</h3>
            <div className="flex flex-col space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/#products", label: "Products" },
                { href: "/#projects", label: "Portfolio" },
                { href: "/#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-300 font-normal hover:text-purple-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-bold mb-2 text-white">Resources</h3>
            <div className="flex flex-col space-y-2">
              {[
                { href: "/Blog", label: "Blog / Insights" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/faqs", label: "FAQs" },
                { href: "/merge-ui", label: "Mergex UI (Coming Soon)" },
                { href: "/help", label: "Help Center" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Legal & Partner */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-8"
          >
            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-2 text-white">Legal</h3>
              <div className="flex flex-col space-y-2">
                {[
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms & Conditions" },
                  { href: "/cookies", label: "Cookie Preferences" },
                ].map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Partner With Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-2 text-white">Partner With Us</h3>
              <p className="text-gray-300 text-sm">Let&apos;s collaborate.</p>
              <Link href="/Partner">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-purple-600 text-white hover:bg-purple-700 h-10 px-6 py-2 relative overflow-hidden group"
                >
                  <span className="relative z-10">Join Now</span>
                  <span className="absolute inset-0 bg-linear-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 animate-pulse bg-linear-to-r from-purple-400/30 to-purple-600/30 opacity-50"></span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>



        {/* Copyright Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800 text-sm text-gray-400">
          <p>© 2025 Mergex. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with ⚡ Innovation</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;