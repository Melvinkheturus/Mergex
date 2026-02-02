'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * FloatingShapes - Glassmorphic pills arranged in circular swirl motion
 * Inspired by Coda's circular motion and Aeos Labs' glassmorphism
 */
export function FloatingShapes() {
    const groupRef = useRef<THREE.Group>(null);

    // Configuration
    const shapeCount = 10;
    const radius = 3.5;

    // Mergex brand colors (purple/blue palette)
    const colors = [
        '#7c3aed', // purple-600
        '#8b5cf6', // purple-500
        '#3b82f6', // blue-500
        '#6366f1', // indigo-500
        '#a855f7', // purple-400
    ];

    // Create pill shapes in circular pattern
    const shapes = Array.from({ length: shapeCount }, (_, i) => {
        const angle = (i / shapeCount) * Math.PI * 2;
        const color = colors[i % colors.length];

        return {
            position: [
                Math.cos(angle) * radius,
                Math.sin(angle * 0.5) * 0.8, // Vertical variation
                Math.sin(angle) * radius,
            ] as [number, number, number],
            rotation: [
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI,
            ] as [number, number, number],
            color,
            scale: 0.8 + Math.random() * 0.4, // Varied sizes
            floatSpeed: 2 + Math.random() * 2,
        };
    });

    // Swirl animation
    useFrame((state, delta) => {
        if (groupRef.current) {
            // Slow circular rotation (swirl effect)
            groupRef.current.rotation.y += delta * 0.1;

            // Subtle breathing motion
            const breathe = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
            groupRef.current.scale.setScalar(1 + breathe);
        }
    });

    return (
        <group ref={groupRef}>
            {shapes.map((shape, i) => (
                <Float
                    key={i}
                    speed={shape.floatSpeed}
                    rotationIntensity={0.3}
                    floatIntensity={0.5}
                >
                    <mesh
                        position={shape.position}
                        rotation={shape.rotation}
                        scale={shape.scale}
                    >
                        {/* Pill/Capsule geometry */}
                        <capsuleGeometry args={[0.4, 0.8, 16, 32]} />

                        {/* Glassmorphic material */}
                        <MeshTransmissionMaterial
                            transmission={0.95}
                            thickness={0.3}
                            roughness={0.15}
                            chromaticAberration={0.05}
                            anisotropy={1}
                            color={shape.color}
                            transparent
                            opacity={0.8}
                            ior={1.45}
                            backside
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}
