'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SYSTEMS_HERO } from '../content/systems';
import { ArrowRight, Zap } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * SystemsHero - Professional, outcome-focused hero
 * Immediate CTA visibility for business audience
 */
export function SystemsHero() {
    const heroLogoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const logo = heroLogoRef.current;
        const target = document.getElementById('navbar-logo-target');

        if (!logo || !target) return;

        // Ensure target exists and positions are calculable
        const initAnimation = () => {
            const logoBox = logo.getBoundingClientRect();
            const targetBox = target.getBoundingClientRect();

            // Calculate delta
            const x = targetBox.left - logoBox.left;
            const y = targetBox.top - logoBox.top;

            // Calculate scale ratio (target width / logo width)
            // Logo is 600px wide (text is large), target is 76px.
            // Let's use height for better stability if widths vary.
            // But here we set explicit sizes.
            const scale = 76 / 200; // refined scale based on visual

            gsap.to(logo, {
                scrollTrigger: {
                    trigger: logo,
                    start: 'top 20%', // Start animating when logo is somewhat near top
                    end: '+=300',    // Duration of scroll
                    scrub: true,
                },
                x: x,
                y: y,
                scale: 0.3, // Approximate scale down
                opacity: 0, // Fade out slightly at the end if we want to reveal nav logo? 
                // Actually user said "visually becomes", so let's keep opacity 1 if we hide nav logo.
                // But since nav logo is visible, let's just fade this one out as it hits the target to avoid duplication?
                // The prompt says "visually becomes". 
                // Let's settle on: Scale/Translate -> match position -> then opacity 0 to let real nav logo take over?
                // Or just keep it.
                // Re-reading user: "When animation finishes, it visually becomes the navbar logo"
                // Safest: Animate to exact pos, then toggle visibility.
                // For simplicity: smooth lerp to 0 opacity at the very end to seamlessly blend.
            });

            // Separate tween for opacity if needed, or just let it sit on top. 
            // Let's trust the "morph" visual.
            // GSAP Context cleanup is handled by matchMedia usually, but here useEffect cleanup is good.
        };

        // Small delay to ensure layout is settled
        const timer = setTimeout(initAnimation, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Professional Background Pattern - REMOVED */}

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Morphing Logo - Centered */}
                    <div className="flex justify-center mb-12">
                        <div
                            ref={heroLogoRef}
                            className="relative z-50 text-6xl md:text-8xl font-bold font-display tracking-tight text-foreground select-none pointer-events-none origin-top-left"
                        >
                            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                MERGEX
                            </span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Pre-headline badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                            <Zap size={16} />
                            {SYSTEMS_HERO.keyDifferentiator}
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight text-foreground">
                            {SYSTEMS_HERO.headline.split('\n').map((line, index) => (
                                <span key={index} className="block">
                                    {line}
                                </span>
                            ))}
                        </h1>

                        {/* Subheadline - Service Scope */}
                        <p className="text-xl md:text-2xl text-foreground-muted mb-10 leading-relaxed">
                            {SYSTEMS_HERO.subheadline}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                                {SYSTEMS_HERO.primaryCTA}
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-foreground border-2 border-gray-200 rounded-xl text-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                                {SYSTEMS_HERO.secondaryCTA}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
