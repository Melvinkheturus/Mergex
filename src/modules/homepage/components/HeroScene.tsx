'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

/**
 * HeroScene - Premium 3D background with Convergence Ring
 * 
 * "High-end motion doesn't impress. It reassures."
 * 
 * Features:
 * - Multiple discrete glass panels moving as a system
 * - 4-phase animation cycle (REST → DISPERSE → ORBIT → RESOLVE)
 * - Premium lighting and environment
 * - Performance optimized with viewport pause
 */

function Fallback() {
    return null;
}

export function HeroScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    // Pause when not visible (performance)
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full">
            <Canvas
                camera={{
                    position: [0, 0, 8],
                    fov: 42,
                    near: 0.1,
                    far: 100
                }}
                dpr={[1, 1.5]} // Cap DPR for performance
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                frameloop={isVisible ? 'always' : 'never'}
            >
                {/* Premium lighting setup */}
                <ambientLight intensity={0.4} />

                {/* Key light */}
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1}
                    color="#ffffff"
                />

                {/* Fill light with purple accent */}
                <directionalLight
                    position={[-4, -2, 4]}
                    intensity={0.4}
                    color="#a78bfa"
                />

                {/* Rim light for edge definition */}
                <directionalLight
                    position={[0, -5, -5]}
                    intensity={0.3}
                    color="#c4b5fd"
                />

                {/* Point light for center glow */}
                <pointLight position={[0, 0, 2]} intensity={0.4} color="#ddd6fe" />

                {/* Environment for reflections */}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
