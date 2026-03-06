'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface FooterRevealWrapperProps {
    children: ReactNode;
}

/**
 * Pins the footer to the bottom of the viewport (behind main content via z-index).
 * Measures footer height and writes it to --footer-height on :root so that
 * the main content can apply a matching margin-bottom, creating the curtain reveal effect.
 */
export default function FooterRevealWrapper({ children }: FooterRevealWrapperProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const syncHeight = () => {
            const height = el.offsetHeight;
            // Only set footer-height for desktop reveal effect
            if (window.innerWidth >= 768) {
                document.documentElement.style.setProperty('--footer-height', `${height}px`);
            } else {
                document.documentElement.style.setProperty('--footer-height', '0px');
            }
        };

        const handleScroll = () => {
            if (window.innerWidth < 768) return; // No reveal effect on mobile

            const height = el.offsetHeight;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const revealThreshold = maxScroll - height;
            const isRevealing = window.scrollY >= revealThreshold;

            window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', {
                detail: { hidden: isRevealing }
            }));
        };

        // Set immediately on mount
        syncHeight();

        // Re-sync on resize (text wrap changes on mobile)
        const observer = new ResizeObserver(syncHeight);
        observer.observe(el);

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', syncHeight, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', syncHeight);
            // Clean up the variable when the layout unmounts
            document.documentElement.style.removeProperty('--footer-height');
            // Ensure navbar is visible when leaving
            window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', {
                detail: { hidden: false }
            }));
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="w-full relative z-20 md:fixed md:bottom-0 md:left-0 md:z-[1]"
        >
            {children}
        </div>
    );
}
