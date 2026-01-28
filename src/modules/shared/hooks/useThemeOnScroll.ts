'use client';

import { useEffect, useRef } from 'react';

export function useThemeOnScroll(themeClass: string = 'dark') {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Only trigger when element is intersecting
                if (entry.isIntersecting) {
                    document.documentElement.classList.add(themeClass);
                } else {
                    document.documentElement.classList.remove(themeClass);
                }
            },
            {
                // Use threshold 0.5 - trigger when 50% of element is visible
                threshold: 0.5,
                // No rootMargin - let the 50% threshold determine center positioning
                rootMargin: '0px',
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            // Ensure we clean up when the component unmounts
            document.documentElement.classList.remove(themeClass);
        };
    }, [themeClass]);

    return ref;
}
