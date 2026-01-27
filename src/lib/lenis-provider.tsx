'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * LenisProvider - Global smooth scroll provider
 * Wraps the application to enable buttery smooth scrolling experience
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize Lenis with custom settings
        const lenis = new Lenis({
            duration: 1.2, // Scroll duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
            orientation: 'vertical', // Vertical scroll
            gestureOrientation: 'vertical',
            smoothWheel: true, // Smooth mouse wheel
            wheelMultiplier: 1, // Mouse wheel sensitivity
            touchMultiplier: 2,
            infinite: false,
        });

        // Request animation frame loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

/**
 * useLenisScroll - Hook to programmatically control scroll
 * Usage: const scrollTo = useLenisScroll();
 * scrollTo('#section-id', { offset: -100 });
 */
export function useLenisScroll() {
    return (target: string | number, options?: { offset?: number; duration?: number }) => {
        const lenis = (window as any).lenis;
        if (lenis) {
            lenis.scrollTo(target, {
                offset: options?.offset || 0,
                duration: options?.duration || 1.2,
            });
        }
    };
}
