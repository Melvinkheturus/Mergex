'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SystemsPageShellProps {
    children: ReactNode;
}

export function SystemsPageShell({ children }: SystemsPageShellProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Select sections but exclude #solutions which has its own ScrollTrigger
            const sections = gsap.utils.toArray<HTMLElement>('.systems-section:not(#solutions):not(#case-overview)');

            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { autoAlpha: 0, y: 32 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white text-gray-900">
            {children}
        </div>
    );
}
