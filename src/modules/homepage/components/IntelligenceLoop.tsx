'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * IntelligenceLoop - "A Continuous Intelligence Loop"
 * 
 * A single continuous circular ribbon-like form, gently swirling around 
 * an invisible center. The shape is smooth, organic, and intentionally 
 * imperfect, creating a sense of intelligent flow rather than randomness.
 * 
 * Motion is slow and controlled, with subtle internal deformation that 
 * suggests thought and convergence. The overall feeling is calm, premium, 
 * and system-oriented.
 * 
 * Visual metaphor: "intelligence organizing itself — slowly, deliberately, 
 * and continuously"
 */

// Simplex noise function for GLSL
const noiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

// Vertex shader with noise-based deformation
const vertexShader = `
${noiseGLSL}

uniform float uTime;
uniform float uScroll;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vNoise;

void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    
    // Slow, organic deformation using noise
    float noiseFreq = 0.8;
    float noiseAmp = 0.15;
    
    // Time-based noise for breathing effect
    float noise = snoise(vec3(
        position.x * noiseFreq + uTime * 0.15,
        position.y * noiseFreq + uTime * 0.12,
        position.z * noiseFreq + uTime * 0.1
    ));
    
    // Secondary layer for complexity
    float noise2 = snoise(vec3(
        position.x * noiseFreq * 2.0 - uTime * 0.08,
        position.y * noiseFreq * 2.0 + uTime * 0.1,
        position.z * noiseFreq * 2.0
    )) * 0.3;
    
    // Combine noise layers
    float totalNoise = noise + noise2;
    vNoise = totalNoise;
    
    // Scroll-reactive tightening (subtle)
    float scrollInfluence = 1.0 - uScroll * 0.15;
    
    // Apply deformation along normal
    vec3 newPosition = position + normal * totalNoise * noiseAmp * scrollInfluence;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

// Fragment shader with premium translucent material
const fragmentShader = `
uniform float uTime;
uniform float uScroll;
uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vNoise;

void main() {
    // Fresnel effect for soft edge highlights
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 2.5);
    
    // Base color with subtle noise-driven variation
    vec3 baseColor = mix(uColorA, uColorB, vNoise * 0.5 + 0.5);
    
    // Light-driven segmentation (not geometry breaks)
    float lightPattern = sin(vPosition.x * 3.0 + vPosition.y * 2.0 + uTime * 0.3) * 0.5 + 0.5;
    
    // Soft internal glow
    float glow = smoothstep(0.0, 0.8, lightPattern);
    
    // Combine for final color
    vec3 color = baseColor + fresnel * vec3(0.4, 0.35, 0.5); // Purple-tinted highlights
    color += glow * 0.15; // Subtle internal glow
    
    // Premium translucency
    float alpha = 0.65 + fresnel * 0.25 + glow * 0.1;
    
    gl_FragColor = vec4(color, alpha);
}
`;

interface IntelligenceLoopProps {
    scrollProgress?: number;
}

export function IntelligenceLoop({ scrollProgress = 0 }: IntelligenceLoopProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    // Premium color palette (muted purple/violet)
    const colorA = useMemo(() => new THREE.Color('#6b5b95'), []); // Muted purple
    const colorB = useMemo(() => new THREE.Color('#4a4e69'), []); // Deep slate purple

    // Shader uniforms
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uColorA: { value: colorA },
        uColorB: { value: colorB },
    }), [colorA, colorB]);

    // Animation loop - slow and controlled
    useFrame((state) => {
        if (!meshRef.current) return;

        // Very slow time progression for calm motion
        uniforms.uTime.value = state.clock.elapsedTime * 0.5;
        uniforms.uScroll.value = scrollProgress;

        // Slow orbital rotation (breathing, not spinning)
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
        meshRef.current.rotation.y += 0.001; // Extremely slow constant rotation
        meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.08) * 0.05;
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
            {/* Torus knot for continuous ribbon-like form */}
            <torusKnotGeometry args={[1.8, 0.4, 256, 64, 2, 3]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                side={THREE.DoubleSide}
                depthWrite={false}
            />
        </mesh>
    );
}

/**
 * Secondary subtle ring for depth layering
 */
export function IntelligenceRing({ scrollProgress = 0 }: IntelligenceLoopProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Counter-rotation for visual interest
        meshRef.current.rotation.x = Math.PI * 0.5 + Math.sin(state.clock.elapsedTime * 0.07) * 0.1;
        meshRef.current.rotation.z -= 0.0005;
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -0.5]} scale={1.5}>
            <torusGeometry args={[2.2, 0.08, 64, 128]} />
            <meshPhysicalMaterial
                color="#5a4a7a"
                transparent
                opacity={0.25}
                roughness={0.3}
                metalness={0.1}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}
