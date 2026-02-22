'use client';

import { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * CinematicPortalSection — GSAP ScrollTrigger powered
 *
 * Scroll sequence (section is PINNED throughout):
 * 1. Card 1 (Systems) fills the viewport — full-screen, no border-radius.
 * 2. Card 1 scales down + gains rounded corners + slides left.
 * 3. Card 2 (Labs) enters from the right, scales UP to full-screen.
 * 4. Card 2 stays full-screen briefly.
 * 5. Card 2 scales down + rounded corners, section unpins.
 */

const SYSTEMS_CARD = {
    title: 'Mergex Systems',
    tagline: 'Solution Partner',
    description: 'Building and automating systems that scale',
    image: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
    href: '/systems',
    accent: '#3B82F6',
};

const LABS_CARD = {
    title: 'Mergex Labs',
    tagline: 'AI Content Studio',
    description: 'Where creativity meets intelligent systems',
    image: '/assets/mockups/Gemini_Generated_Image_vvlwccvvlwccvvlw.png',
    href: '/labs',
    accent: '#8B5CF6',
};

interface CardData {
    title: string;
    tagline: string;
    description: string;
    image: string;
    href: string;
    accent: string;
}

function PortalCard({ card, id }: { card: CardData; id: string }) {
    return (
        <Link
            href={card.href}
            id={id}
            className="absolute inset-0 overflow-hidden"
            style={{
                willChange: 'transform, border-radius, opacity',
            }}
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content (No button) */}
            <div
                className="portal-card-content absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-10"
            >
                <div className="max-w-2xl">
                    <p
                        className="text-sm md:text-base font-semibold uppercase tracking-widest mb-3"
                        style={{ color: card.accent }}
                    >
                        {card.tagline}
                    </p>
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight pointer-events-none">
                        {card.title}
                    </h2>
                    <p className="text-gray-300 text-base md:text-xl mb-8 leading-relaxed pointer-events-none">
                        {card.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default function CinematicPortalSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinContainerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const pinContainer = pinContainerRef.current;
        const cursor = cursorRef.current;
        if (!section || !pinContainer || !cursor) return;

        const card1 = document.getElementById('portal-card-1');
        const card2 = document.getElementById('portal-card-2');
        if (!card1 || !card2) return;

        const card1Content = card1.querySelector('.portal-card-content') as HTMLElement;
        const card2Content = card2.querySelector('.portal-card-content') as HTMLElement;

        // Custom Cursor Logic
        const moveCursor = (e: MouseEvent) => {
            const rect = pinContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(cursor, {
                x: x + 20, // Offset to show the normal cursor
                y: y + 20,
                duration: 0.6,
                ease: 'power3.out'
            });

            // Update cursor text based on which card is "active" or visible
            // Since card2 starts at xPercent 100, we can check its transform
            const card2X = gsap.getProperty(card2, "xPercent") as number;
            const cursorText = cursor.querySelector('.cursor-text') as HTMLElement;

            if (card2X < 50) {
                cursorText.innerText = 'Enter Labs';
            } else {
                cursorText.innerText = 'Enter Systems';
            }
        };

        const hideCursor = () => gsap.to(cursor, { opacity: 0, scale: 0.5, duration: 0.3 });
        const showCursor = () => gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 });

        pinContainer.addEventListener('mousemove', moveCursor);
        pinContainer.addEventListener('mouseenter', showCursor);
        pinContainer.addEventListener('mouseleave', hideCursor);

        // Initial state: Card 1 is full-screen, Card 2 is off-screen right
        gsap.set(card2, { xPercent: 100, scale: 0.75, borderRadius: '32px' });
        gsap.set(card2Content, { opacity: 0 });
        gsap.set(cursor, { opacity: 0, scale: 0.5 });

        // Master timeline pinned to the section
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=300%',
                pin: pinContainer,
                scrub: 1,
                pinSpacing: true,
                anticipatePin: 1,
                // More robust navbar visibility toggles
                onToggle: (self) => {
                    window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', {
                        detail: { hidden: self.isActive }
                    }));
                },
                onRefresh: (self) => {
                    if (self.isActive) {
                        window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: true } }));
                    }
                }
            },
        });

        tl.to({}, { duration: 0.5 });

        // ── Phase 2: Card 1 shrinks but stays centered ──────────────────
        tl.to(card1, {
            scale: 0.85,
            borderRadius: '48px',
            duration: 1,
            ease: 'power2.inOut'
        });

        // ── Phase 3: Card 1 slides left + Card 2 slides to center ────────
        tl.to(card1, {
            xPercent: -120,
            scale: 0.65,
            duration: 1.5,
            ease: 'power2.inOut'
        });

        tl.to(card1Content, { opacity: 0, duration: 0.5, ease: 'power1.out' }, '<');

        tl.to(card2, {
            xPercent: 0,
            duration: 1.5,
            ease: 'power2.inOut'
        }, '<'); // Slide together

        // ── Phase 4: Card 2 scales up to full-screen ────────────────────
        tl.to(card2, {
            scale: 1,
            borderRadius: '0px',
            duration: 1,
            ease: 'power2.inOut'
        });

        tl.to(card2Content, { opacity: 1, duration: 0.5, ease: 'power1.in' }, '<0.2');

        tl.to({}, { duration: 0.5 });
        tl.to(card2, { scale: 0.75, borderRadius: '32px', duration: 1, ease: 'power2.inOut' });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
            pinContainer.removeEventListener('mousemove', moveCursor);
            pinContainer.removeEventListener('mouseenter', showCursor);
            pinContainer.removeEventListener('mouseleave', hideCursor);
            window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: false } }));
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative z-[55] bg-white">
            <div
                ref={pinContainerRef}
                className="relative h-screen w-full overflow-hidden bg-white"
            >
                {/* Custom Label (following the cursor) */}
                <div
                    ref={cursorRef}
                    className="fixed top-0 left-0 w-36 h-10 bg-white rounded-lg z-50 pointer-events-none flex items-center justify-center shadow-2xl"
                >
                    <span className="cursor-text text-neutral-900 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap" />
                </div>

                {/* Card 1: Mergex Systems */}
                <PortalCard card={SYSTEMS_CARD} id="portal-card-1" />

                {/* Card 2: Mergex Labs */}
                <PortalCard card={LABS_CARD} id="portal-card-2" />

                {/* Progress dots */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900/20" />
                </div>
            </div>
        </section>
    );
}
