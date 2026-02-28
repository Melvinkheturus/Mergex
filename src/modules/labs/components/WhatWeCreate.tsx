'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const aboveSection = document.querySelector<HTMLElement>('#what-is-labs');

        // Everything that needs a color — sections above + this section
        const allTextEls = [
            ...Array.from(section.querySelectorAll<HTMLElement>('h2, h3, p, li, span:not(.indicator-icon)')),
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
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <p className="text-sm uppercase tracking-wider mb-4">WHAT WE DO</p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">SERVICES</h2>
                    <p className="text-lg md:text-xl max-w-3xl">{WHAT_WE_CREATE.subheadline}</p>
                </motion.div>

                <div className="flex flex-col">
                    {WHAT_WE_CREATE.categories.map((category, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="border-b"
                                style={{ borderColor: 'rgba(128,128,128,0.3)' }}
                            >
                                <div
                                    className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-12 items-center py-8 md:py-12 cursor-pointer group"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    <div className="col-span-2 md:col-span-1">
                                        <span className={`text-2xl md:text-3xl font-light transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="col-span-8 md:col-span-9 flex flex-col justify-center">
                                        <h3 className={`text-2xl md:text-4xl font-bold transition-all duration-300 ${isOpen ? '' : 'text-opacity-80'}`}>
                                            {category.title}
                                        </h3>
                                        <p className="text-lg md:text-xl leading-relaxed opacity-70 mt-2 md:mt-4 max-w-2xl">
                                            {category.description}
                                        </p>
                                    </div>
                                    <div className="col-span-2 md:col-span-2 flex justify-end items-center">
                                        <div
                                            className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-[1.5px] md:border-2 transition-all duration-500 ${isOpen
                                                ? 'bg-white text-black border-white opacity-100'
                                                : 'border-white text-white opacity-100 group-hover:bg-white group-hover:text-black hover:scale-105'
                                                }`}
                                            style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                                        >
                                            <span className="indicator-icon text-3xl md:text-4xl font-light leading-none mt-[-2px] mb-[2px] transition-all duration-300 group-hover:scale-125">+</span>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: isOpen ? 'auto' : 0,
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-12 pb-8 md:pb-12 pt-4 md:pt-6">
                                        <div className="col-span-2 md:col-span-1"></div>
                                        <div className="col-span-10 md:col-span-11 grid md:grid-cols-2 gap-8 items-center">
                                            <div className="flex flex-col justify-center">
                                                <motion.ul
                                                    initial="closed"
                                                    animate={isOpen ? "open" : "closed"}
                                                    variants={{
                                                        open: {
                                                            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                                                        },
                                                        closed: {
                                                            transition: { staggerChildren: 0.03, staggerDirection: -1 }
                                                        }
                                                    }}
                                                    className="space-y-4 md:space-y-6"
                                                >
                                                    {category.capabilities.map((capability, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            variants={{
                                                                open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                                                                closed: { opacity: 0, x: -10, transition: { duration: 0.2, ease: "easeIn" } }
                                                            }}
                                                            className="text-lg md:text-xl leading-relaxed opacity-60 flex items-start gap-4"
                                                        >
                                                            <span className="w-2 h-2 min-w-[8px] rounded-full bg-current opacity-40 mt-2.5 flex-shrink-0" />
                                                            <span>{capability}</span>
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            </div>
                                            {category.image && (
                                                <div className="flex justify-center md:justify-end mt-6 md:mt-0 relative w-full items-center">
                                                    <motion.div
                                                        initial={{ opacity: 0, clipPath: "inset(50% 50% 50% 50%)" }}
                                                        animate={{
                                                            opacity: isOpen ? 1 : 0,
                                                            clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(50% 50% 50% 50%)"
                                                        }}
                                                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                                        className="relative w-full max-w-[300px] md:max-w-[310px] lg:max-w-[330px] aspect-[4/4.5] rounded-2xl overflow-hidden shadow-2xl"
                                                    >
                                                        <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-300 pointer-events-none"></div>
                                                        <img
                                                            src={category.image}
                                                            alt={category.title}
                                                            loading="lazy"
                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                                        />
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
