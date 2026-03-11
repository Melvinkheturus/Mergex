'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY_LABS_EXISTS } from '../content/labs';
import { cloudinaryVideo } from '@/lib/cloudinary';

gsap.registerPlugin(ScrollTrigger);

/**
 * WhyLabsExists – Scroll-triggered 3D card flip animation (desktop only)
 * Mobile: Simple stacked card layout with Mountain Dew video as front face.
 */
export function WhyLabsExists() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // ── Video sync: keep all 3 front-face videos frame-perfect ─────────────
    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        // Wait for videos to be ready, then start sync loop
        let rafId: number;
        let started = false;

        const syncVideos = () => {
            const videos = Array.from(wrapper.querySelectorAll<HTMLVideoElement>('video'));
            if (videos.length < 2) { rafId = requestAnimationFrame(syncVideos); return; }

            const master = videos[0];

            if (!started) {
                // Force all to play from 0 together
                videos.forEach(v => { v.currentTime = 0; v.play().catch(() => { }); });
                started = true;
            }

            // Clamp drift: if any slave is more than 50ms off, snap it
            videos.slice(1).forEach(v => {
                if (Math.abs(v.currentTime - master.currentTime) > 0.05) {
                    v.currentTime = master.currentTime;
                }
            });

            rafId = requestAnimationFrame(syncVideos);
        };

        rafId = requestAnimationFrame(syncVideos);
        return () => cancelAnimationFrame(rafId);
    }, []);

    // ── GSAP scroll animations (desktop) ──────────────────────────────────
    useEffect(() => {
        const section = sectionRef.current;
        const pinned = pinnedRef.current;
        const title = titleRef.current;
        const wrapper = wrapperRef.current;
        if (!section || !pinned || !title || !wrapper) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const cards = wrapper.querySelectorAll<HTMLElement>('.flip-card');
            const cardInners = wrapper.querySelectorAll<HTMLElement>('.flip-card-inner');
            const cardLeft = wrapper.querySelector<HTMLElement>('.flip-card-left');
            const cardMiddle = wrapper.querySelector<HTMLElement>('.flip-card-middle');
            const cardRight = wrapper.querySelector<HTMLElement>('.flip-card-right');

            gsap.set([cardLeft, cardRight, cardMiddle], { transformOrigin: 'bottom center' });
            gsap.set(wrapper, { y: '50vh' });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.2,
                    pin: pinned,
                    pinSpacing: false,
                    anticipatePin: 1,
                },
            });

            tl.to(wrapper, { y: 0, duration: 1, ease: 'power2.out' }, 0);
            tl.to(cards, { margin: '0 8px', duration: 1, ease: 'power1.out' }, 1);
            tl.to(title, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 1);
            // Animate all face divs to fully-rounded corners as cards break apart
            const allFaces = wrapper.querySelectorAll<HTMLElement>('.flip-face');
            tl.to(allFaces, { borderRadius: 14, duration: 1, ease: 'power1.out' }, 1);

            tl.to(cardInners, { rotateY: 180, duration: 2, ease: 'power2.inOut' }, 2);
            tl.to(cards, { scaleX: 0.05, duration: 1, ease: 'power2.in' }, 2);
            tl.to(cards, { scaleX: 1, duration: 1, ease: 'power2.out' }, 3);

            if (cardLeft) tl.to(cardLeft, { rotateZ: -10, x: -10, y: 0, duration: 1.5, ease: 'power2.out' }, 2.5);
            if (cardRight) tl.to(cardRight, { rotateZ: 10, x: 10, y: 0, duration: 1.5, ease: 'power2.out' }, 2.5);

            return () => { tl.kill(); };
        });

        mm.add("(max-width: 767px)", () => {
            // Mobile: reset all transforms so the simple flex layout takes over
            const cards = wrapper.querySelectorAll<HTMLElement>('.flip-card');
            const cardInners = wrapper.querySelectorAll<HTMLElement>('.flip-card-inner');
            gsap.set([...Array.from(cards), ...Array.from(cardInners)], { clearProps: 'all' });
            gsap.set(wrapper, { clearProps: 'all' });
            gsap.set(title, { clearProps: 'all' });
        });

        return () => {
            mm.revert();
            ScrollTrigger.getAll().forEach(t => {
                if (t.vars.trigger === section) t.kill();
            });
        };
    }, []);

    return (
        <>
            {/* ───────────────── DESKTOP ───────────────── */}
            <div
                ref={sectionRef}
                id="why-labs-exists"
                className="hidden md:block"
                style={{ height: '400vh', position: 'relative' }}
            >
                <div
                    ref={pinnedRef}
                    style={{
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'sticky',
                        top: 0,
                        backgroundColor: '#ffffff',
                    }}
                >
                    <h2
                        ref={titleRef}
                        style={{
                            opacity: 0,
                            transform: 'translateY(-40px)',
                            marginBottom: 52,
                            fontFamily: 'var(--font-playfair)',
                            fontWeight: 300,
                            fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
                            color: '#0a0a0a',
                            letterSpacing: '-0.02em',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 2,
                        }}
                    >
                        Where Do You Need <em>Creative</em> Acceleration?
                    </h2>

                    <div
                        ref={wrapperRef}
                        style={{
                            display: 'flex',
                            gap: 0,
                            perspective: 1400,
                            perspectiveOrigin: '50% 40%',
                            position: 'relative',
                            zIndex: 2,
                            alignItems: 'flex-end',
                        }}
                    >
                        <FlipCard
                            position="left"
                            frontBgPos="0% center"
                            initialBorderRadius="14px 0 0 14px"
                            backBg="linear-gradient(160deg, #EAEAEA 0%, #C8C8C8 100%)"
                            backTextColor="#111111"
                            title={WHY_LABS_EXISTS.cards[0].title}
                            description={WHY_LABS_EXISTS.cards[0].description}
                            subtext={WHY_LABS_EXISTS.cards[0].subtext}
                            iconSvg={
                                <svg width="20" height="14" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="1,12 8,5 13,10 20,2" />
                                    <polyline points="16,2 20,2 20,6" />
                                </svg>
                            }
                        />
                        <FlipCard
                            position="middle"
                            frontBgPos="50% center"
                            initialBorderRadius="0"
                            backBg="linear-gradient(160deg, #9D68FF 0%, #5B21B6 100%)"
                            backTextColor="#ffffff"
                            title={WHY_LABS_EXISTS.cards[1].title}
                            description={WHY_LABS_EXISTS.cards[1].description}
                            subtext={WHY_LABS_EXISTS.cards[1].subtext}
                            iconSvg={
                                <svg width="20" height="16" viewBox="0 0 26 18" fill="currentColor">
                                    <circle cx="13" cy="4" r="2" />
                                    <circle cx="7" cy="13" r="2" />
                                    <circle cx="19" cy="13" r="2" />
                                </svg>
                            }
                        />
                        <FlipCard
                            position="right"
                            frontBgPos="100% center"
                            initialBorderRadius="0 14px 14px 0"
                            backBg="linear-gradient(160deg, #2A2A2A 0%, #080808 100%)"
                            backTextColor="#ffffff"
                            title={WHY_LABS_EXISTS.cards[2].title}
                            description={WHY_LABS_EXISTS.cards[2].description}
                            subtext={WHY_LABS_EXISTS.cards[2].subtext}
                            iconSvg={
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="13,6 19,12 13,18" />
                                    <line x1="5" y1="6" x2="5" y2="18" strokeWidth="1" strokeDasharray="2 2" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>

            {/* ───────────────── MOBILE ───────────────── */}
            <div
                id="why-labs-exists-mobile"
                className="md:hidden bg-white px-5 py-14"
            >
                {/* Section Title */}
                <h2
                    className="text-center mb-10 text-2xl font-light text-neutral-900 leading-snug tracking-tight"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                >
                    Where Do You Need <em>Creative</em> Acceleration?
                </h2>

                {/* Video Card — full-width hero */}
                <div className="relative w-full rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: '9/11' }}>
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={cloudinaryVideo('mockups/labs/Portfolio/mountain_dew_dynamic')} type="video/mp4" />
                    </video>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    {/* First card label on the video */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-1">{WHY_LABS_EXISTS.cards[0].subtext}</p>
                        <h3 className="text-xl font-normal text-white leading-tight mb-2">{WHY_LABS_EXISTS.cards[0].title}</h3>
                        <p className="text-xs text-white/50 leading-relaxed">{WHY_LABS_EXISTS.cards[0].description}</p>
                    </div>
                </div>

                {/* Remaining cards — stacked */}
                {[WHY_LABS_EXISTS.cards[1], WHY_LABS_EXISTS.cards[2]].map((card, i) => {
                    const gradients = [
                        'linear-gradient(160deg, #9D68FF 0%, #5B21B6 100%)',
                        'linear-gradient(160deg, #2A2A2A 0%, #080808 100%)',
                    ];
                    const textColors = ['#ffffff', '#ffffff'];
                    return (
                        <div
                            key={i}
                            className="relative w-full rounded-2xl overflow-hidden mb-4 p-5 flex flex-col justify-between"
                            style={{
                                background: gradients[i],
                                color: textColors[i],
                                minHeight: 180,
                            }}
                        >
                            <p className="text-[9px] font-semibold uppercase tracking-widest opacity-50 mb-3">{card.subtext}</p>
                            <div>
                                <h3 className="text-xl font-normal leading-tight mb-2" style={{ color: textColors[i] }}>{card.title}</h3>
                                <p className="text-xs leading-relaxed" style={{ color: textColors[i], opacity: 0.6 }}>{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

/* ─────────────────────── FlipCard (desktop only) ─────────────────────── */

interface FlipCardProps {
    position: 'left' | 'middle' | 'right';
    frontBgPos: string;
    backBg: string;
    backTextColor: string;
    title: string;
    description: string;
    subtext: string;
    iconSvg: React.ReactNode;
    initialBorderRadius: string;
}

function FlipCard({ position, frontBgPos, backBg, backTextColor, title, description, subtext, iconSvg, initialBorderRadius }: FlipCardProps) {
    const posClass = `flip-card flip-card-${position}`;
    const cardH = 420;

    return (
        <div
            className={posClass}
            style={{ width: 260, height: cardH, margin: 0, flexShrink: 0 }}
        >
            <div
                className="flip-card-inner"
                style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
            >
                {/* ── FRONT FACE — Mountain Dew video ── */}
                <div
                    className="flip-face"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        borderRadius: initialBorderRadius,
                        overflow: 'hidden',
                    }}
                >
                    <video
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: frontBgPos }}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={cloudinaryVideo('mockups/labs/Portfolio/mountain_dew_dynamic')} type="video/mp4" />
                    </video>
                </div>

                {/* ── BACK FACE — content ── */}
                <div
                    className="flip-face"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        borderRadius: initialBorderRadius,
                        overflow: 'hidden',
                        background: backBg,
                        color: backTextColor,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '26px 24px 24px',
                    }}
                >
                    <div style={{ marginBottom: 'auto', opacity: 0.45 }}>{iconSvg}</div>

                    <h3 style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 14, color: backTextColor }}>
                        {title}
                    </h3>

                    <p style={{ fontSize: 11, lineHeight: 1.65, opacity: 0.5, fontWeight: 400, marginBottom: 14, color: backTextColor }}>
                        {description}
                    </p>

                    <p style={{ fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', opacity: 0.38, color: backTextColor }}>
                        {subtext}
                    </p>
                </div>
            </div>
        </div>
    );
}
