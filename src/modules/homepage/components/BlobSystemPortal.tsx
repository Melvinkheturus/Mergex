'use client';

import React, { useMemo, useRef, useLayoutEffect, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { CLOUDINARY_ASSETS } from '@/lib/cloudinary';
import { Canvas, useFrame } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import { MathUtils, Vector3, Color } from 'three';
import * as THREE from 'three';
import { Environment, Lightformer, Html } from '@react-three/drei';
import { forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Extend the geometry to resolve the R3F warning
extend({ IcosahedronGeometry: THREE.IcosahedronGeometry });

const vertexShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

// Classic Perlin 3D Noise functions
vec4 permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P) {
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + vec3(1.0);
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
}

void main() {
    vUv = uv;

    vDisplacement = cnoise(position + vec3(2.0 * u_time));
  
    vec3 newPosition = position + normal * (u_intensity * vDisplacement);
  
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
  
    gl_Position = projectedPosition;
}
`;

const fragmentShader = `
uniform float u_intensity;
uniform float u_time;
uniform vec3 u_color;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = mix(u_color, vec3(1.0, 1.0, 1.0), distort);
    // Add somewhat high transparency for glassmorphism
    gl_FragColor = vec4(color, 0.45);
}
`;

const Blob: React.FC<{
    scaleProgress: React.MutableRefObject<number>;
    colorProgress: React.MutableRefObject<number>; // 0 for Systems, 1 for Labs
    labOrbTextRef: React.RefObject<HTMLDivElement | null>;
}> = ({ scaleProgress, colorProgress, labOrbTextRef }) => {
    const mesh = useRef<THREE.Mesh>(null);
    const hover = useRef(false);

    const systemsColor = useMemo(() => new Color(0xfdf4ff), []);
    const labsColor = useMemo(() => new Color(0x8B5CF6), []); // Labs accent purple

    const uniforms = useMemo(
        () => ({
            u_time: { value: 0 },
            u_intensity: { value: 0.2 },
            u_color: { value: systemsColor.clone() },
        }),
        [systemsColor]
    );

    const targetPosition = useRef(new Vector3(0, 0, 0));
    const currentPosition = useRef(new Vector3(0, 0, 0));

    useFrame((state) => {
        const { clock, mouse } = state;

        if (mesh.current) {
            const material = mesh.current.material as THREE.ShaderMaterial;

            material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

            material.uniforms.u_intensity.value = MathUtils.lerp(
                material.uniforms.u_intensity.value,
                hover.current ? 0.7 : 0.5,
                0.02
            );

            // Update color based on colorProgress
            material.uniforms.u_color.value.lerpColors(
                systemsColor,
                labsColor,
                colorProgress.current
            );

            // Mouse tracking
            targetPosition.current.set(mouse.x * 2, mouse.y * 2, 0);
            currentPosition.current.lerp(targetPosition.current, 0.05);

            mesh.current.position.copy(currentPosition.current);

            // Scroll scaling tracking
            const s = scaleProgress.current;
            mesh.current.scale.lerp(new Vector3(s, s, s), 0.1);
        }
    });

    return (
        <mesh
            ref={mesh}
            scale={0.1}
            position={[0, 0, 0]}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
        >
            <icosahedronGeometry args={[2, 20]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
            />

            {/* Attached Text to Orb */}
            <Html center distanceFactor={10}>
                <div
                    ref={labOrbTextRef}
                    className="pointer-events-none whitespace-nowrap"
                    style={{
                        transform: 'translate3d(0, 0, 0)',
                        opacity: 0 // Controlled by GSAP
                    }}
                >
                    <div className="text-center">
                        <span className="block text-black/40 font-manrope text-[10px] uppercase tracking-[0.3em] mb-1">Division</span>
                        <h3 className="text-black font-serif italic text-3xl md:text-5xl lg:text-6xl leading-tight">
                            AI Creative Studio
                        </h3>
                    </div>
                </div>
            </Html>
        </mesh>
    );
};

interface PortalCardProps {
    title: string;
    description: string;
    videoSrc: string;
    href: string;
    label: string;
    className?: string;
}

const PortalCard = forwardRef<HTMLDivElement, PortalCardProps>(({ title, description, videoSrc, href, label, className = "" }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div ref={ref} className={`relative flex-shrink-0 w-[92vw] md:w-[85vw] h-[78vh] md:h-[82vh] rounded-[12px] overflow-hidden bg-neutral-100 group shadow-2xl transition-transform duration-500 ${className}`}>
            <video
                src={videoSrc}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-[12px] transition-transform duration-1000"
                muted
                playsInline
                autoPlay
                loop={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-[8%] left-[8%] right-[8%] flex flex-col items-start gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">{label}</span>
                <h3 className="text-white font-manrope font-[400] text-4xl md:text-6xl leading-[1.1] tracking-tight">{title}</h3>
                <p className="text-white/70 font-manrope text-sm md:text-lg leading-relaxed max-w-md">{description}</p>

                <Link href={href} className="mt-4">
                    <button
                        ref={buttonRef}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onMouseMove={handleMouseMove}
                        className="relative inline-flex items-center justify-center px-12 py-5 overflow-hidden rounded-[8px] group/btn bg-white text-black font-manrope font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl cursor-none"
                    >
                        <span className="relative z-10">Enter Portal</span>

                        {/* Custom Cursor Tooltip */}
                        {isHovered && (
                            <div
                                className="fixed pointer-events-none z-[100] px-3 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full mix-blend-difference"
                                style={{
                                    left: mousePos.x + (buttonRef.current?.getBoundingClientRect().left || 0) + 10,
                                    top: mousePos.y + (buttonRef.current?.getBoundingClientRect().top || 0) + 10,
                                    transform: 'translate(-50%, -100%)'
                                }}
                            >
                                {label || 'Explore'}
                            </div>
                        )}

                        <div className="absolute inset-0 z-0 bg-neutral-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    </button>
                </Link>
            </div>
        </div>
    );
});
PortalCard.displayName = 'PortalCard';

export default function BlobSystemPortal() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const hubRef = useRef<HTMLDivElement>(null);
    const cardsWrapperRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const text1Ref = useRef<HTMLHeadingElement>(null);
    const text2Ref = useRef<HTMLHeadingElement>(null);

    // Card Refs
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const labOrbTextRef = useRef<HTMLDivElement>(null);

    const scaleProgress = useRef(0.1);
    const colorProgress = useRef(0);

    useEffect(() => {
        // Pre-warm the labs video
        // Video pre-warming is now handled by individual PortalCard components
    }, []);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=600%', // Enough space for hub reveal + horizontal scroll
                    pin: true,
                    scrub: 1,
                }
            });

            // Initial Setup
            gsap.set(text1Ref.current, { x: '-60vw', opacity: 0 });
            gsap.set(text2Ref.current, { x: '60vw', opacity: 0 });
            gsap.set(hubRef.current, { opacity: 1 });
            gsap.set(cardsWrapperRef.current, { opacity: 0, scale: 1.1 });
            gsap.set(cardsContainerRef.current, { x: 0 });
            gsap.set([card1Ref.current, card2Ref.current], { borderRadius: '12px' });

            scaleProgress.current = 0.1;

            // --- Phase 1: Hub Reveal ---
            tl.to(scaleProgress, {
                current: 1.6,
                duration: 1,
                ease: 'power1.inOut',
            }, 0);

            tl.to(text1Ref.current, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }, 0.2);

            tl.to(text2Ref.current, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }, 0.4);

            // Pause on Hub
            tl.to({}, { duration: 1.5 });

            // --- Phase 2: Hub Fade & Cards Reveal ---
            tl.to(hubRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                ease: 'power2.inOut'
            }, 'transition');

            tl.to(cardsWrapperRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: 'expo.out'
            }, 'transition+=0.4');

            // --- Phase 3: Horizontal Scroll ---
            // Centering Card 2: Move left by exactly card width + gap
            // Using a dynamic calculation to handle responsive card widths and fixed 32px gap
            tl.to(cardsContainerRef.current, {
                x: () => {
                    const isMobile = window.innerWidth < 768;
                    const cardWidth = isMobile ? window.innerWidth * 0.92 : window.innerWidth * 0.85;
                    const gap = 32;
                    return -(cardWidth + gap);
                },
                duration: 2,
                ease: 'none'
            });

            // Add parallax and scale effects to cards during scroll
            tl.to(card1Ref.current, {
                scale: 0.9,
                opacity: 0.6,
                borderRadius: '24px',
                duration: 1,
                ease: 'none'
            }, 'scroll-effects');

            // Removed video parallax to fix misalignment

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-screen bg-white overflow-hidden z-[60]">
            {/* Stage 1: Hub Reveal */}
            <div ref={hubRef} className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none overflow-hidden bg-white">
                <div
                    className="absolute inset-0 flex justify-center items-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none before:bg-[url('/noise.gif')]"
                >
                    {/* Blob Canvas Layer */}
                    <div className="blob-canvas-container absolute inset-0 z-0 transition-opacity">
                        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                            <planeGeometry args={[0.026, 0.5]} />
                            <Environment preset="studio" environmentIntensity={0.5} />
                            <Blob
                                scaleProgress={scaleProgress}
                                colorProgress={colorProgress}
                                labOrbTextRef={labOrbTextRef}
                            />
                            <Environment
                                files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr"
                                resolution={1024}
                            >
                                <group rotation={[-Math.PI / 3, 0, 0]}>
                                    <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                                    {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
                                        <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
                                    ))}
                                    <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
                                    <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
                                </group>
                            </Environment>
                        </Canvas>
                    </div>

                    {/* Systems Hub Text */}
                    <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full pointer-events-none gap-2 md:gap-4">
                        <h2 ref={text1Ref} className="text-black font-manrope font-[400] text-5xl md:text-8xl lg:text-[110px] leading-[1.1] tracking-wide whitespace-nowrap">
                            Systems that
                        </h2>
                        <h2 ref={text2Ref} className="text-black font-manrope font-[400] text-5xl md:text-8xl lg:text-[110px] leading-[1.1] tracking-wide whitespace-nowrap flex items-center justify-center gap-4">
                            <span className="font-serif italic font-[300] tracking-normal">Grow</span>
                            Business
                        </h2>
                    </div>
                </div>
            </div>

            {/* Stage 2: Horizontal Scroll Cards */}
            <div ref={cardsWrapperRef} className="absolute inset-0 z-50 flex items-center bg-white">
                <div ref={cardsContainerRef} className="flex gap-[32px] px-[4vw] md:px-[7.5vw] items-center transition-transform will-change-transform">
                    <PortalCard
                        ref={card1Ref}
                        label="MERGEX SYSTEMS"
                        title="Intelligent Core"
                        description="Scale your business with autonomous systems designed for the future of orchestration."
                        videoSrc={CLOUDINARY_ASSETS.ecosystemSystemsVideo}
                        href="/systems"
                    />
                    <PortalCard
                        ref={card2Ref}
                        label="MERGEX LABS"
                        title="Visual Future"
                        description="Where high-end production meets intelligent systems. Engineering immersive narratives."
                        videoSrc={CLOUDINARY_ASSETS.ecosystemLabsVideo}
                        href="/labs"
                    />
                </div>
            </div>
        </section>
    );
}
