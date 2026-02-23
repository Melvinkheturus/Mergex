'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { WHAT_WE_CREATE } from '../content/labs';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

/**
 * WhatWeCreate — Services section
 * Triggers a global dark theme when the section enters.
 * Stays dark when scrolling DOWN past the section (into WorkGallery etc).
 * Reverts to white ONLY when scrolling back UP past the section top.
 */
export function WhatWeCreate() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const aboveSection = document.querySelector<HTMLElement>('#what-is-labs');

        // Everything that needs a color — sections above + this section
        const allTextEls = [
            ...Array.from(section.querySelectorAll<HTMLElement>('h2, h3, p, li, span')),
            ...Array.from(aboveSection?.querySelectorAll<HTMLElement>('h2, h3, p, li, span') ?? []),
        ];

        const TRANSITION = 'background-color 0.35s ease, color 0.35s ease';

        const applyDark = () => {
            document.body.style.transition = TRANSITION;
            document.body.style.backgroundColor = '#000000';
            section.style.transition = TRANSITION;
            section.style.backgroundColor = '#000000';
            if (aboveSection) {
                aboveSection.style.transition = TRANSITION;
                aboveSection.style.backgroundColor = '#000000';
            }
            allTextEls.forEach(el => {
                el.style.transition = TRANSITION;
                el.style.color = '#ffffff';
            });
        };

        const applyLight = () => {
            document.body.style.transition = TRANSITION;
            document.body.style.backgroundColor = '#ffffff';
            section.style.transition = TRANSITION;
            section.style.backgroundColor = '#ffffff';
            if (aboveSection) {
                aboveSection.style.transition = TRANSITION;
                aboveSection.style.backgroundColor = '#ffffff';
            }
            allTextEls.forEach(el => {
                el.style.transition = TRANSITION;
                el.style.color = '#0a0a0a';
            });
        };

        // Initial state
        applyLight();

        const trigger = ScrollTrigger.create({
            trigger: section,
            start: 'top 65%',      // go dark as section enters
            // No 'end' — we never auto-revert on scroll-down
            onEnter: applyDark,    // scrolling down into section → dark
            onLeaveBack: applyLight, // scrolling back UP past section top → light
        });

        return () => {
            trigger.kill();
            document.body.style.transition = '';
            document.body.style.backgroundColor = '';
            section.style.transition = '';
            section.style.backgroundColor = '';
            if (aboveSection) {
                aboveSection.style.transition = '';
                aboveSection.style.backgroundColor = '';
            }
            allTextEls.forEach(el => {
                el.style.transition = '';
                el.style.color = '';
            });
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32" style={{ willChange: 'background-color' }}>
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-sm uppercase tracking-wider mb-4">WHAT WE DO</p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">SERVICES</h2>
                    <p className="text-lg md:text-xl max-w-3xl">{WHAT_WE_CREATE.subheadline}</p>
                </motion.div>

                <div className="space-y-16 md:space-y-20">
                    {WHAT_WE_CREATE.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="grid grid-cols-12 gap-6 md:gap-12 items-start border-b pb-16 md:pb-20"
                            style={{ borderColor: 'rgba(128,128,128,0.3)' }}
                        >
                            <div className="col-span-2 md:col-span-1">
                                <span className="text-2xl md:text-3xl font-light opacity-40">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <div className="col-span-10 md:col-span-11 grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h3>
                                    <p className="text-lg leading-relaxed opacity-70">{category.description}</p>
                                </div>
                                <div className="flex items-center">
                                    <ul className="space-y-3">
                                        {category.capabilities.map((capability, idx) => (
                                            <li key={idx} className="leading-relaxed opacity-60">{capability}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
