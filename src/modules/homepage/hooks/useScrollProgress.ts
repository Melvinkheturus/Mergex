'use client';

import { RefObject, useEffect, useState } from 'react';

/**
 * useScrollProgress - Track scroll progress within a ref element (0 → 1)
 * Synced with Lenis smooth scroll via requestAnimationFrame
 * 
 * @param ref - React ref to the scroll wrapper element
 * @returns progress - Normalized scroll progress (0 at start, 1 at end)
 */
export function useScrollProgress(ref: RefObject<HTMLElement>) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;
        let rafId: number;

        function update() {
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const elementHeight = element.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Calculate progress: how far element has scrolled from top
            // When top of element reaches top of viewport = 0
            // When bottom of element reaches top of viewport = 1
            const scrollDistance = elementHeight - viewportHeight;
            const currentScroll = -rect.top;

            const normalized = Math.min(
                Math.max(currentScroll / scrollDistance, 0),
                1
            );

            setProgress(normalized);

            // Continue RAF loop
            rafId = requestAnimationFrame(update);
        }

        // Start RAF loop
        rafId = requestAnimationFrame(update);

        // Cleanup
        return () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [ref]);

    return progress;
}
