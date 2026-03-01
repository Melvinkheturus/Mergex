'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY_LABS_EXISTS } from '../content/labs';

gsap.registerPlugin(ScrollTrigger);

/**
 * WhyLabsExists – Scroll-triggered 3D card flip animation
 *
 * Phases:
 *  1. Cards start flush (zero gap), seamless front face image.
 *  2. Scroll: cards separate + title fades in.
 *  3. Cards FLIP (rotateY 180°) — mid-flip each card bends inward via scaleX → 0 → 1.
 *  4. Simultaneously as flip, left/right fan out (rotateZ) + slight y-drop.
 *  5. Final state: dark bg, cards displayed fanned with subtle bottom-corner overlap.
 */
export function WhyLabsExists() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const pinned = pinnedRef.current;
        const title = titleRef.current;
        const wrapper = wrapperRef.current;
        if (!section || !pinned || !title || !wrapper) return;

        const cards = wrapper.querySelectorAll<HTMLElement>('.flip-card');
        const cardInners = wrapper.querySelectorAll<HTMLElement>('.flip-card-inner');
        const cardLeft = wrapper.querySelector<HTMLElement>('.flip-card-left');
        const cardMiddle = wrapper.querySelector<HTMLElement>('.flip-card-middle');
        const cardRight = wrapper.querySelector<HTMLElement>('.flip-card-right');

        // Pivot from bottom so Z-rotation fans tops out while bases stay close → bottom-corner overlap
        gsap.set([cardLeft, cardRight, cardMiddle], { transformOrigin: 'bottom center' });

        // ─── Master Timeline ───────────────────────────────────────────
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

        // Phase 1 — Separate cards (0 → 1s) — small gap, bases will still be close
        tl.to(cards, {
            margin: '0 8px',
            duration: 1,
            ease: 'power1.out',
        }, 0);

        tl.to(title, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
        }, 0);

        // ── Phase 2 (t=1→3): Flip + Bend ──────────────────────────────
        // The "bend" is a scaleX keyframe: full → 0 at mid-flip → full again,
        // all happening inside the card-inner while it rotates.
        // We animate rotateY on the inner but the scaleX on the whole .flip-card
        // so the outer shape "squeezes" then restores.
        tl.to(cardInners, {
            rotateY: 180,
            duration: 2,
            ease: 'power2.inOut',
        }, 1);

        // Bend inward: card squeezes to 0 width at the midpoint of the flip then back
        // We use a keyframe-style approach with two tweens on the flip-card wrappers
        tl.to(cards, {
            scaleX: 0.05,
            duration: 1,        // first half: from normal → edge-on
            ease: 'power2.in',
        }, 1);
        tl.to(cards, {
            scaleX: 1,
            duration: 1,        // second half: edge-on → fully revealed back
            ease: 'power2.out',
        }, 2);

        // ── Phase 2b (t=1.5→3): Fan-out DURING the flip ───────────────
        // Pivot is from bottom center — tops fan outward, bases stay overlapping
        if (cardLeft) {
            tl.to(cardLeft, {
                rotateZ: -10,
                x: -10,   // minimal horizontal shift; rotation does the work
                y: 0,
                duration: 1.5,
                ease: 'power2.out',
            }, 1.5);
        }
        if (cardRight) {
            tl.to(cardRight, {
                rotateZ: 10,
                x: 10,
                y: 0,
                duration: 1.5,
                ease: 'power2.out',
            }, 1.5);
        }



        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => {
                if (t.vars.trigger === section) t.kill();
            });
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            id="why-labs-exists"
            style={{ height: '320vh', position: 'relative' }}
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


                {/* ── Headline ── */}
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

                {/* ── Cards Wrapper ── */}
                <div
                    ref={wrapperRef}
                    style={{
                        display: 'flex',
                        gap: 0,
                        perspective: 1400,
                        perspectiveOrigin: '50% 40%',
                        position: 'relative',
                        zIndex: 2,
                        alignItems: 'flex-end', // bottom-align so overlap appears at bottom
                    }}
                >
                    {/* Card 1 — Silver / Light */}
                    <FlipCard
                        position="left"
                        frontBgPos="0% center"
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

                    {/* Card 2 — Purple */}
                    <FlipCard
                        position="middle"
                        frontBgPos="50% center"
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

                    {/* Card 3 — Black */}
                    <FlipCard
                        position="right"
                        frontBgPos="100% center"
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
    );
}

/* ─────────────────────── FlipCard ─────────────────────── */

interface FlipCardProps {
    position: 'left' | 'middle' | 'right';
    frontBgPos: string;
    backBg: string;
    backTextColor: string;
    title: string;
    description: string;
    subtext: string;
    iconSvg: React.ReactNode;
}

function FlipCard({ position, frontBgPos, backBg, backTextColor, title, description, subtext, iconSvg }: FlipCardProps) {
    const posClass = `flip-card flip-card-${position}`;

    // Cards sized proportionally; middle card is slightly taller to act as focal
    const cardH = position === 'middle' ? 420 : 400;

    return (
        <div
            className={posClass}
            style={{
                width: 260,
                height: cardH,
                margin: 0,
                flexShrink: 0,
            }}
        >
            <div
                className="flip-card-inner"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* ── FRONT FACE — seamless image ── */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        borderRadius: 14,
                        overflow: 'hidden',
                        backgroundImage: 'url(/assets/mockups/genai.jpg.jpeg)',
                        backgroundSize: '300% 100%',
                        backgroundPosition: frontBgPos,
                    }}
                />

                {/* ── BACK FACE — content ── */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        borderRadius: 14,
                        overflow: 'hidden',
                        background: backBg,
                        color: backTextColor,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '26px 24px 24px',
                    }}
                >
                    {/* Icon top-left */}
                    <div style={{ marginBottom: 'auto', opacity: 0.45 }}>
                        {iconSvg}
                    </div>

                    {/* Title — mid-card */}
                    <h3 style={{
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                        marginBottom: 14,
                        color: backTextColor,
                    }}>
                        {title}
                    </h3>

                    {/* Description — bottom */}
                    <p style={{
                        fontSize: 11,
                        lineHeight: 1.65,
                        opacity: 0.5,
                        fontWeight: 400,
                        marginBottom: 14,
                        color: backTextColor,
                    }}>
                        {description}
                    </p>

                    {/* Subtext label */}
                    <p style={{
                        fontSize: 9,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        opacity: 0.38,
                        color: backTextColor,
                    }}>
                        {subtext}
                    </p>
                </div>
            </div>
        </div>
    );
}
