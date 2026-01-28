'use client';

import { useEffect, useState } from 'react';

/**
 * FooterFadeTransition Component
 * Toggles dark mode on the entire page when scrolling past CTA section
 * Creates a seamless light-to-dark color scheme transition
 */
export function FooterFadeTransition() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const lenis = (window as any).lenis;
        if (!lenis) return;

        const handleScroll = () => {
            // Target the CTA section (Get Started section)
            const ctaSection = document.querySelector('section[class*="py-20"]') as HTMLElement;
            if (!ctaSection) return;

            const ctaSectionTop = ctaSection.getBoundingClientRect().top + window.scrollY;
            const ctaSectionHeight = ctaSection.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // Trigger dark mode when CTA section is 40% visible
            const triggerPoint = ctaSectionTop - windowHeight * 0.6;

            if (scrollY >= triggerPoint) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        };

        // Listen to Lenis scroll event for smooth tracking
        lenis.on('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            lenis.off('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Toggle dark class on document root
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return null; // No visual component needed
}
