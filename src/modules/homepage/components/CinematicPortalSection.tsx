'use client';

import { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CLOUDINARY_ASSETS } from '@/lib/cloudinary';

gsap.registerPlugin(ScrollTrigger);

/**
 * CinematicPortalSection - GSAP ScrollTrigger powered
 *
 * Scroll sequence (section is PINNED throughout):
 * 1. Card 1 (Systems) fills the viewport - full-screen, no border-radius.
 * 2. Card 1 scales down + gains rounded corners + slides left.
 * 3. Card 2 (Labs) enters from the right, scales UP to full-screen.
 * 4. Card 2 stays full-screen briefly.
 * 5. Card 2 scales down + rounded corners, section unpins.
 */

const SYSTEMS_CARD = {
    title: 'Mergex Systems',
    tagline: 'Solution Partner',
    description: 'Building and automating systems that scale',
    image: CLOUDINARY_ASSETS.ecosystemSystemsVideo.replace('.mp4', '.jpg'), // Using Cloudinary auto-poster if possible
    video: CLOUDINARY_ASSETS.ecosystemSystemsVideo,
    fallbackVideo: '/background/parent/divition/Human and Robot Handshake.mp4',
    href: '/systems',
    accent: '#3B82F6',
};

const LABS_CARD = {
    title: 'Mergex Labs',
    tagline: 'AI Content Studio',
    description: 'Where creativity meets intelligent systems',
    image: CLOUDINARY_ASSETS.ecosystemLabsVideo.replace('.mp4', '.jpg'),
    video: CLOUDINARY_ASSETS.ecosystemLabsVideo,
    fallbackVideo: '/background/parent/divition/Flamingo Labs.mp4',
    href: '/labs',
    accent: '#8B5CF6',
};

interface CardData {
    title: string;
    tagline: string;
    description: string;
    image: string;
    video?: string;
    fallbackVideo?: string;
    href: string;
    accent: string;
}

function PortalCard({ card, id }: { card: CardData; id: string }) {
    return (
        <Link
            href={card.href}
            id={id}
            className="relative md:absolute inset-0 m-auto aspect-[4/5] md:aspect-none w-[90%] h-auto md:w-full md:h-full overflow-hidden shadow-2xl md:shadow-none rounded-2xl md:rounded-none"
            style={{
                willChange: 'transform, border-radius, opacity',
            }}
        >
            {/* Background */}
            {card.video ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={card.image}
                >
                    <source src={card.video} type="video/mp4" />
                    {card.fallbackVideo && <source src={card.fallbackVideo} type="video/mp4" />}
                </video>
            ) : (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content (No button) */}
            <div
                className="portal-card-content absolute inset-0 flex flex-col justify-end p-6 md:p-16 z-10"
            >
                <div className="max-w-2xl">
                    <p
                        className="text-[10px] md:text-base font-semibold uppercase tracking-widest mb-1 md:mb-3"
                        style={{ color: card.accent }}
                    >
                        {card.tagline}
                    </p>
                    <h2 className="text-2xl md:text-7xl font-bold text-white mb-2 md:mb-4 leading-tight pointer-events-none">
                        {card.title}
                    </h2>
                    <p className="text-gray-300 text-xs md:text-xl mb-4 md:mb-8 leading-relaxed pointer-events-none">
                        {card.description}
                    </p>

                    {/* Mobile Button - Only visible on mobile */}
                    <div className="md:hidden mt-2">
                        <span
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider text-white shadow-xl backdrop-blur-md border border-white/20 transition-all active:scale-95"
                            style={{
                                backgroundColor: `${card.accent}40`,
                                boxShadow: `0 4px 24px 0 ${card.accent}40`
                            }}
                        >
                            Enter
                            <ArrowRight size={16} />
                        </span>
                    </div>

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
        let cursorInitialized = false;
        const moveCursor = (e: MouseEvent) => {
            const rect = pinContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (!cursorInitialized) {
                gsap.set(cursor, {
                    x: x + 20,
                    y: y + 20,
                    opacity: 1,
                    scale: 1
                });
                cursorInitialized = true;
            } else {
                gsap.to(cursor, {
                    x: x + 20, // Offset to show the normal cursor
                    y: y + 20,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            }

            // Update cursor text based on which card is "active" or visible
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

        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isDesktop } = context.conditions as gsap.Conditions;

            if (!isDesktop) {
                // RESET FOR MOBILE - No animations, simple stack
                gsap.set([card1, card2], { xPercent: 0, x: 0, y: 0, scale: 1, opacity: 1, clearProps: "all" });
                gsap.set([card1Content, card2Content], { opacity: 1, clearProps: "all" });
                return;
            }

            // --- DESKTOP ANIMATIONS ---
            // Initial state
            gsap.set(card2, { xPercent: 100, scale: 0.75, borderRadius: '32px' });
            gsap.set(card2Content, { opacity: 0 });
            gsap.set(cursor, { opacity: 0, scale: 0.5 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=300%',
                    pin: pinContainer,
                    scrub: 1,
                    pinSpacing: true,
                    anticipatePin: 1,
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

            // ── Phase 2: Card 1 shrinks ──────────────────
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
            }, '<');

            // ── Phase 4: Card 2 scales up ────────────────────
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
            };
        });

        return () => {
            mm.revert();
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
                className="relative h-auto md:h-screen w-full overflow-hidden bg-white flex flex-col md:block items-center justify-start gap-8 py-12 md:py-0 px-4 md:px-0"
            >
                {/* Custom Label (following the cursor) */}
                <div
                    ref={cursorRef}
                    className="fixed top-0 left-0 w-36 h-10 bg-white rounded-lg z-50 pointer-events-none hidden md:flex items-center justify-center shadow-2xl opacity-0"
                >
                    <span className="cursor-text text-neutral-900 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap" />
                </div>

                {/* Card 1: Mergex Systems */}
                <PortalCard card={SYSTEMS_CARD} id="portal-card-1" />

                {/* Card 2: Mergex Labs */}
                <PortalCard card={LABS_CARD} id="portal-card-2" />

                {/* Progress dots (Hidden on mobile) */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-30">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900/20" />
                </div>
            </div>
        </section>
    );
}
