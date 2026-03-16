'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState, useCallback, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { LABS_HERO } from '../content/labs';
import { CLOUDINARY_ASSETS } from '@/lib/cloudinary';
import { TextReveal } from '@/modules/shared/components/TextReveal';

gsap.registerPlugin(ScrollTrigger);
import { BlurVignette } from '@/components/ui/BlurVignette';
// Lazy-load heavy components so they don't block first paint
const ImageTrail = lazy(() => import('../../../components/ImageTrail'));

const FRAME_COUNT = 240;

// CSS keyframes injected once for the ambient shimmer (pure CSS, no JS runtime cost)
const ambientStyles = `
@keyframes labsAmbientPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.08); }
}
@keyframes labsShimmerSweep {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}
`;

export function LabsHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const eyebrowRef = useRef<HTMLDivElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const rafRef = useRef<number>(0);
    const lastFrameRef = useRef<number>(-1);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Parallax text effect (moves slightly slower than the mask)
    const textY = useTransform(scrollYProgress, [0.7, 1], [0, -150]);

    // Masking shape effect (comes up from bottom)
    const maskY = useTransform(scrollYProgress, [0.7, 1], ['100%', '0%']);

    // Set canvas dimensions only on mount and resize — never per-frame
    const syncCanvasSize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2x to save GPU
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Only resize if dimensions actually changed (avoids clearing canvas)
        if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctxRef.current?.scale(dpr, dpr);
        }
    }, []);

    const drawFrame = useCallback((index: number) => {
        const img = imagesRef.current[index - 1];
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!img || !img.complete || !canvas || !ctx) return;

        // Skip if we already painted this exact frame
        if (lastFrameRef.current === index) return;
        lastFrameRef.current = index;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const canvasW = canvas.width / dpr;
        const canvasH = canvas.height / dpr;

        const canvasRatio = canvasW / canvasH;
        const imgRatio = img.naturalWidth / img.naturalHeight;

        let drawWidth = canvasW;
        let drawHeight = canvasH;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
            drawWidth = canvasH * imgRatio;
            offsetX = (canvasW - drawWidth) / 2;
        } else {
            drawHeight = canvasW / imgRatio;
            offsetY = (canvasH - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvasW, canvasH);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, []);

    // RAF-batched draw — prevents multiple draws in the same frame
    const requestDraw = useCallback((index: number) => {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(index));
    }, [drawFrame]);

    useEffect(() => {
        // Cache the canvas context once
        const canvas = canvasRef.current;
        if (canvas) {
            ctxRef.current = canvas.getContext('2d', { alpha: false });
        }

        syncCanvasSize();

        const images: HTMLImageElement[] = [];
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new window.Image();
            img.decoding = 'async';
            images.push(img);
        }
        imagesRef.current = images;        // 1. Load the First Frame with high priority
        const firstImg = images[0];
        firstImg.fetchPriority = 'high';
        
        const onFirstFrameLoad = () => {
            syncCanvasSize();
            // Ensure canvas is ready for the first draw
            requestAnimationFrame(() => {
                drawFrame(1);
                setIsLoaded(true);
                
                // Redundant draw after short delay to catch any race conditions with mounting/layout
                setTimeout(() => drawFrame(1), 50);
            });

            // 2. Load all remaining frames after a small buffer
            setTimeout(() => {
                for (let i = 2; i <= FRAME_COUNT; i++) {
                    const img = images[i - 1];
                    img.onload = () => {
                        if (Math.round(frameIndex.get()) === i) {
                            requestDraw(i);
                        }
                    };

                    const frameNum = i.toString().padStart(4, '0');
                    const cloudinaryUrl = CLOUDINARY_ASSETS.labsFrame(frameNum);
                    const localUrl = `/background/labs/frames_webp/frame_${frameNum}.webp`;
                    img.onerror = () => { if (img.src !== localUrl) img.src = localUrl; };
                    img.src = cloudinaryUrl;
                }
            }, 150);
        };

        firstImg.onload = onFirstFrameLoad;

        // Trigger first frame load with Cloudinary primary + local fallback
        const localFirst = `/background/labs/frames_webp/frame_0001.webp`;
        firstImg.onerror = () => { 
            if (firstImg.src !== localFirst) {
                firstImg.src = localFirst; 
            }
        };
        firstImg.src = CLOUDINARY_ASSETS.labsFrame('0001');

        const handleResize = () => {
            syncCanvasSize();
            lastFrameRef.current = -1; // force redraw
            const currentFrame = Math.round(frameIndex.get());
            requestDraw(currentFrame);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Use RAF-batched drawing for scroll events
    useMotionValueEvent(frameIndex, 'change', (latest) => {
        requestDraw(Math.round(latest));
    });

    // GSAP Text Reveal Animation
    useEffect(() => {
        if (!headlineRef.current || !eyebrowRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=1200",
                scrub: 1,
            }
        });

        tl.to(eyebrowRef.current, { y: -50, opacity: 0 }, 0);
        tl.to(headlineRef.current, {
            opacity: 0,
            letterSpacing: '-0.05em',
            scale: 0.95
        }, 0);

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-[300vh]">
            {/* Inject CSS keyframes (zero-cost, no re-renders) */}
            <style dangerouslySetInnerHTML={{ __html: ambientStyles }} />

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                <BlurVignette
                    radius="0px"
                    inset="0px"
                    transitionLength="150px"
                    blur="16px"
                    className="absolute inset-0 z-20 pointer-events-none"
                />

                {/* ═══ BACKGROUND LAYER ═══ */}
                <div className="absolute inset-0 z-0">

                    {/* 
                      Ambient Background — always rendered, pure CSS.
                      Looks like an intentional dark cinematic atmosphere.
                      Once the canvas loads it covers this completely.
                    */}
                    <div className="absolute inset-0 bg-white">
                        {/* 
                          Static Fallback Image — Frame 1 (local)
                          Provides immediate visual feedback even before JS runs or Cloudinary responds.
                        */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen transition-opacity duration-1000"
                            style={{ 
                                backgroundImage: 'url("/background/labs/frames_webp/frame_0001.webp")',
                                opacity: isLoaded ? 0 : 0.4
                            }}
                        />

                        {/* Centered radial glow - switched to a light variant */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,1)_70%)]" />

                        {/* Soft ambient orb — CSS animation, no JS */}
                        <div
                            className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full will-change-transform"
                            style={{
                                background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
                                animation: 'labsAmbientPulse 6s ease-in-out infinite',
                            }}
                        />

                        {/* Subtle shimmer sweep — pure CSS, zero JS cost */}
                        <div
                            className="absolute inset-0 pointer-events-none will-change-transform"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.015) 35%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.015) 65%, transparent 100%)',
                                animation: 'labsShimmerSweep 3s ease-in-out infinite',
                            }}
                        />
                    </div>

                    {/* Canvas — fades in smoothly over the ambient background */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out will-change-[opacity]"
                        style={{ opacity: isLoaded ? 1 : 0 }}
                    />

                    {/* Texture overlay */}
                    <div className="absolute inset-0 z-10 opacity-[0.10] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("/noise.png")' }} />
                </div>

                {/* Image Trail - Lazy-loaded, only renders after hero is visible */}
                <div className="absolute inset-0 z-[30] opacity-40 pointer-events-none">
                    <Suspense fallback={null}>
                        <ImageTrail
                            variant={4}
                            items={[
                                '/assets/mockups/Gemini_Generated_Image_m6ev2fm6ev2fm6ev.png',
                                '/assets/mockups/Gemini_Generated_Image_p2gmifp2gmifp2gm.png',
                                '/assets/mockups/WhatsApp Image 2026-02-05 at 12.11.55 AM.jpeg',
                                '/assets/mockups/WhatsApp Image 2026-02-05 at 12.12.28 AM.jpeg'
                            ]}
                        />
                    </Suspense>
                </div>

                {/* ── MAIN LAYOUT: pinned full-screen ── */}
                <div className="relative z-10 w-full h-full flex flex-col pointer-events-none">

                    {/* TOP ROW — empty padding */}
                    <div className="pt-10 md:pt-16"></div>

                    {/* CENTRE — large serif headline and eyebrows */}
                    <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-16 pb-32 md:pb-40 text-center relative z-20">
                        {/* ── Background Shadow Glow ── */}
                        {/* ── Background Shadow Glow Removed ── */}

                        <TextReveal delay={0.1}>
                            <div
                                ref={eyebrowRef}
                                className="mb-8 flex items-center justify-center gap-3"
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
                        </TextReveal>

                        {/* Overflow hidden for the mask effect */}
                        <div className="overflow-hidden p-4 -m-4">
                            <h1
                                ref={headlineRef}
                                className="text-4xl md:text-5xl lg:text-7xl xl:text-[5rem] font-semibold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 max-w-5xl mx-auto origin-bottom"
                                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                            >
                                <span className="hero-word inline-block">Create</span>{' '}
                                <span className="hero-word inline-block">at</span>{' '}
                                <span className="hero-word inline-block">the</span>{' '}
                                <span
                                    className="hero-word italic font-normal text-white inline-block"
                                    style={{
                                        fontFamily: 'var(--font-playfair)',
                                        WebkitTextFillColor: 'white'
                                    }}
                                >
                                    Speed
                                </span>{' '}
                                <br className="block md:hidden" />
                                <span className="hero-word inline-block">of</span>{' '}
                                <span className="hero-word inline-block">Imagination.</span>
                            </h1>
                        </div>
                    </div>

                    {/* BOTTOM ROW — tagline bottom-left, keywords + CTAs bottom-right */}
                    <div className="px-8 md:px-16 pb-14 md:pb-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-8">

                        {/* BOTTOM-LEFT: supporting tagline */}
                        <div
                            className="max-w-xs md:max-w-sm relative z-20 mt-8 md:mt-0 text-center md:text-left"
                        >
                            <TextReveal delay={0.6} duration={1.2}>
                                <p
                                    className="text-sm md:text-base text-white/70 leading-relaxed font-light"
                                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                                >
                                    {LABS_HERO.supportingLine}
                                </p>
                            </TextReveal>
                        </div>

                        {/* BOTTOM-RIGHT: keyword tags + CTA buttons */}
                        <motion.div
                            style={{ y: textY }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.75 }}
                            className="flex flex-col items-center md:items-end gap-5 md:gap-5 relative z-20 mt-6 md:mt-0"
                        >
                            <div
                                className="text-center md:text-right text-[10px] md:text-xs text-white/60 tracking-[0.2em] uppercase leading-[1.8] font-light"
                                style={{ fontFamily: 'var(--font-manrope)' }}
                            >
                                <TextReveal delay={0.8}>
                                    <p>
                                        {LABS_HERO.reinforcementLine.split('\n').map((line, i) => (
                                            <span key={i} className="block">{line}</span>
                                        ))}
                                    </p>
                                </TextReveal>
                            </div>

                            {/* CTA Buttons — square with rounded corners, side by side */}
                            <TextReveal delay={1}>
                                <div className="flex flex-row justify-center md:justify-end gap-2 md:gap-3 pointer-events-auto w-full">
                                    <a
                                        href={LABS_HERO.primaryCTA.href}
                                        className="inline-flex items-center justify-center px-3 py-2.5 md:px-6 md:py-3 bg-white text-gray-900 rounded-lg font-semibold text-[10px] md:text-sm hover:bg-white/90 hover:scale-105 transition-all duration-300"
                                        style={{ fontFamily: 'var(--font-manrope)' }}
                                    >
                                        {LABS_HERO.primaryCTA.text}
                                    </a>
                                    <a
                                        href={LABS_HERO.secondaryCTA.href}
                                        className="inline-flex items-center justify-center px-3 py-2.5 md:px-6 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold text-[10px] md:text-sm hover:bg-white/20 transition-all duration-300"
                                        style={{ fontFamily: 'var(--font-manrope)' }}
                                    >
                                        {LABS_HERO.secondaryCTA.text}
                                    </a>
                                </div>
                            </TextReveal>
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
