'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * SystemsHero - Dark, immersive hero inspired by SIENNA reference
 * Features: Full-width images, text clipping mask, scroll animation to navbar
 */
export function SystemsHero() {
    const textRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);

    const menuItems = [
        { label: 'HOME', href: '/' },
        { label: 'ABOUT', href: '/about' },
        { label: 'SERVICES', href: '/services' },
        { label: 'WORK', href: '/labs' },
        { label: 'CONTACT', href: '/contact' },
    ];

    useEffect(() => {
        const text = textRef.current;
        const nav = navRef.current;

        if (!text || !nav) return;

        // GSAP scroll animation - move MERGEX text to navbar
        const ctx = gsap.context(() => {
            gsap.to(text, {
                scrollTrigger: {
                    trigger: text,
                    start: 'top top+=20', // Start closer to top
                    end: '+=300',
                    scrub: 1,
                },
                y: -15, // Move slightly up to align with nav
                scale: 0.15, // Scale down significantly
                transformOrigin: 'top center', // Scale from center
                ease: 'power2.out',
                onUpdate: (self) => {
                    // Optional: Fade in a real nav logo if we wanted, but here we morph the text itself
                }
            });
        });

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col bg-[#0a0a0a] text-white overflow-hidden">
            {/* Top Navigation Menu */}
            <nav ref={navRef} className="relative z-50 flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10 w-full">
                {menuItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="text-xs md:text-sm font-medium tracking-widest hover:text-gray-400 transition-colors uppercase"
                    >
                        {item.label}
                    </Link>
                ))}

                {/* Mobile Menu Button - hidden generally as we spread items, but kept for logic if screens too small */}
                {/* Actually user said "full width evenly", so let's just show mapped items. Mobile might need care. */}
            </nav>

            {/* Hero Content - Text Top, Images Bottom */}
            <div className="relative flex-1 flex flex-col pt-4 md:pt-8 pb-12 px-6 md:px-12">

                {/* Large MERGEX Text (Top) */}
                <div
                    ref={textRef}
                    className="relative z-20 w-full text-center mb-8 md:mb-12 origin-top"
                >
                    <h1
                        className="text-[25vw] font-black tracking-tighter leading-[0.8] text-white"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        MERGEX
                    </h1>
                </div>

                {/* Full-Width Image Gallery (Bottom) */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1920px] mx-auto min-h-[400px]">
                    {/* Image 1 */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all duration-500 group-hover:scale-110"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                            IMAGE 1
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-orange-900/30 to-red-900/30 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 transition-all duration-500 group-hover:scale-110"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                            IMAGE 2
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900/30 to-teal-900/30 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 transition-all duration-500 group-hover:scale-110"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                            IMAGE 3
                        </div>
                    </div>
                </div>

                {/* Pagination Indicator (Bottom Over Images) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-20 right-12 md:right-24 flex flex-col gap-2 z-30"
                >
                    {/* Simple dots tailored for new layout if needed, or remove if not in ref 2 */}
                </motion.div>
            </div>
        </section>
    );
}
