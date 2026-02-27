'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ImageTrail from '../../../components/ImageTrail';
import { LABS_HERO } from '../content/labs';

gsap.registerPlugin(ScrollTrigger);
import { BlurVignette } from '@/components/ui/BlurVignette';

const FRAME_COUNT = 35;

/**
 * LabsHero - Cinematic hero for AI Content Studio
 * Features: Video frame sequence background, serif typography, editorial layout
 */
export function LabsHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const eyebrowRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Parallax text effect (moves slightly slower than the mask)
    const textY = useTransform(scrollYProgress, [0.7, 1], [0, -150]);

    // Masking shape effect (comes up from bottom)
    const maskY = useTransform(scrollYProgress, [0.7, 1], ['100%', '0%']);

    const drawFrame = (index: number) => {
        const img = imagesRef.current[index - 1];
        const canvas = canvasRef.current;
        if (img && img.complete && canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;

                let drawWidth = canvas.width;
                let drawHeight = canvas.height;
                let offsetX = 0;
                let offsetY = 0;

                if (imgRatio > canvasRatio) {
                    drawWidth = canvas.height * imgRatio;
                    offsetX = (canvas.width - drawWidth) / 2;
                } else {
                    drawHeight = canvas.width / imgRatio;
                    offsetY = (canvas.height - drawHeight) / 2;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        }
    };

    useEffect(() => {
        const images: HTMLImageElement[] = [];
        let loadedFrames = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new window.Image();
            const frameNum = i.toString().padStart(3, '0');
            img.src = `/assets/background/Labs-Hero_bg/ezgif-frame-${frameNum}.jpg`;
            img.onload = () => {
                loadedFrames++;
                if (loadedFrames === 1 || i === 1) {
                    drawFrame(1);
                }
            };
            images.push(img);
        }
        imagesRef.current = images;

        const handleResize = () => {
            const currentFrame = Math.round(frameIndex.get());
            drawFrame(currentFrame);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useMotionValueEvent(frameIndex, 'change', (latest) => {
        drawFrame(Math.round(latest));
    });

    // GSAP Text Reveal Animation
    useEffect(() => {
        if (!headlineRef.current || !eyebrowRef.current) return;

        // On-Scroll Fade Out
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=1200", // Fades out over the first 1200px of scroll
                scrub: 1,
            }
        });

        tl.to(eyebrowRef.current, { y: -50, opacity: 0 }, 0);

        // Unified contraction and fade out
        tl.to(headlineRef.current, {
            opacity: 0,
            letterSpacing: '-0.05em', // Contraction effect
            scale: 0.95
        }, 0);

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-[300vh]">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <BlurVignette
                    radius="0px"
                    inset="0px"
                    transitionLength="120px"
                    blur="8px"
                    className="absolute inset-0 z-20 pointer-events-none"
                />

                {/* Full Background Canvas */}
                <div className="absolute inset-0 z-0">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full"
                    />
                    {/* Dark gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
                    {/* Texture */}
                    <div className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("/noise.png")' }} />
                </div>

                {/* Image Trail - Interactive Layer */}
                <div className="absolute inset-0 z-[30] opacity-40 pointer-events-none">
                    <ImageTrail
                        variant={4}
                        items={[
                            '/assets/mockups/Gemini_Generated_Image_m6ev2fm6ev2fm6ev.png',
                            '/assets/mockups/Gemini_Generated_Image_p2gmifp2gmifp2gm.png',
                            '/assets/mockups/WhatsApp Image 2026-02-05 at 12.11.55 AM.jpeg',
                            '/assets/mockups/WhatsApp Image 2026-02-05 at 12.12.28 AM.jpeg'
                        ]}
                    />
                </div>

                {/* ── MAIN LAYOUT: pinned full-screen ── */}
                <div className="relative z-10 w-full h-full flex flex-col pointer-events-none">

                    {/* TOP ROW — empty padding */}
                    <div className="pt-10 md:pt-16"></div>

                    {/* CENTRE — large serif headline and eyebrows */}
                    <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-16 pb-20 md:pb-40 text-center">
                        <div
                            ref={eyebrowRef}
                            className="mb-8 flex items-center justify-center gap-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                        >
                            <p
                                className="text-[10px] md:text-xs tracking-[0.3em] text-white/80 uppercase font-medium"
                                style={{ fontFamily: 'var(--font-manrope)' }}
                            >
                                {LABS_HERO.eyebrow}
                            </p>
                            <span className="text-white/40 text-[10px] md:text-xs">|</span>
                            <p
                                className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-100 to-white"
                                style={{ fontFamily: 'var(--font-manrope)' }}
                            >
                                {LABS_HERO.subEyebrow}
                            </p>
                        </div>

                        {/* Overflow hidden for the mask effect */}
                        <div className="overflow-hidden p-4 -m-4">
                            <h1
                                ref={headlineRef}
                                className="text-4xl md:text-5xl lg:text-7xl xl:text-[5rem] font-semibold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)] max-w-5xl mx-auto origin-bottom"
                                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                            >
                                <span className="hero-word inline-block">Create</span>{' '}
                                <span className="hero-word inline-block">at</span>{' '}
                                <span className="hero-word inline-block">the</span>{' '}
                                <span
                                    className="hero-word italic font-normal text-white drop-shadow-sm inline-block"
                                    style={{
                                        fontFamily: 'var(--font-playfair)',
                                        WebkitTextFillColor: 'white' // overrides the gradient clip from the parent h1
                                    }}
                                >
                                    Speed
                                </span>{' '}
                                <span className="hero-word inline-block">of</span>{' '}
                                <span className="hero-word inline-block">Imagination.</span>
                            </h1>
                        </div>
                    </div>
                    {/* BOTTOM ROW — tagline bottom-left, keywords + CTAs bottom-right */}
                    <div className="px-8 md:px-16 pb-10 flex items-end justify-between gap-8">

                        {/* BOTTOM-LEFT: supporting tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.6 }}
                            className="max-w-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                        >
                            <p
                                className="text-sm md:text-base text-white/70 leading-relaxed font-light"
                                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                            >
                                {LABS_HERO.supportingLine}
                            </p>
                        </motion.div>

                        {/* BOTTOM-RIGHT: keyword tags + CTA buttons */}
                        <motion.div
                            style={{ y: textY }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.75 }}
                            className="flex flex-col items-end gap-5"
                        >
                            {/* Keyword tags */}
                            <div
                                className="text-right text-[11px] md:text-xs text-white/60 tracking-[0.2em] uppercase leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                                style={{ fontFamily: 'var(--font-manrope)' }}
                            >
                                <p>HUMAN STRATEGY · AI ACCELERATION · STRUCTURED CREATIVITY</p>
                                <p>GENERATIVE SYSTEMS · VISUAL INTELLIGENCE</p>
                            </div>

                            {/* CTA Buttons — square with rounded corners, side by side */}
                            <div className="flex flex-row gap-3 pointer-events-auto">
                                <a
                                    href={LABS_HERO.primaryCTA.href}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-white/90 hover:scale-105 transition-all duration-300"
                                    style={{ fontFamily: 'var(--font-manrope)' }}
                                >
                                    {LABS_HERO.primaryCTA.text}
                                </a>
                                <a
                                    href={LABS_HERO.secondaryCTA.href}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-300"
                                    style={{ fontFamily: 'var(--font-manrope)' }}
                                >
                                    {LABS_HERO.secondaryCTA.text}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* The Masking Shape */}
                <motion.div
                    style={{ y: maskY }}
                    className="absolute bottom-0 w-full h-[50vh] bg-background rounded-t-[50%] scale-x-150 z-[100] origin-bottom pointer-events-none"
                    initial={{ y: '100%' }}
                />
            </div>
        </section>
    );
}
