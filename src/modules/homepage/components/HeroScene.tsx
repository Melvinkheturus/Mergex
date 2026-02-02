'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { FloatingShapes } from './FloatingShapes';
import { Suspense } from 'react';

/**
 * HeroScene - 3D Canvas wrapper with lighting, effects, and optimization
 * Follows 3D Web Experience skill best practices
 */
export function HeroScene() {
    return (
        <Canvas
            camera={{
                position: [0, 0, 8],
                fov: 45,
            }}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
            }}
            dpr={[1, 2]} // Responsive pixel ratio
            className="!absolute !inset-0"
        >
            <Suspense fallback={null}>
                {/* Lighting Setup */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />

                {/* Environment map for reflections */}
                <Environment preset="city" />

                {/* Main 3D Content */}
                <FloatingShapes />

                {/* Subtle ground shadows */}
                <ContactShadows
                    position={[0, -2, 0]}
                    opacity={0.15}
                    scale={15}
                    blur={2}
                    far={3}
                />

                {/* Post-processing effects */}
                <EffectComposer>
                    <Bloom
                        intensity={0.4}
                        luminanceThreshold={0.9}
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />
                </EffectComposer>
            </Suspense>
        </Canvas>
    );
}
