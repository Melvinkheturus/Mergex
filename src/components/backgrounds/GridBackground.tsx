'use client';

/**
 * GridBackground - Reusable grid overlay background
 * Matches the subtle grid pattern from Chainlink Labs reference
 */
interface GridBackgroundProps {
    children: React.ReactNode;
    className?: string;
    gridSize?: number;
    gridOpacity?: number;
}

export function GridBackground({
    children,
    className = '',
    gridSize = 40,
    gridOpacity = 0.05
}: GridBackgroundProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0, 0, 0, ${gridOpacity}) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, ${gridOpacity}) 1px, transparent 1px)
                    `,
                    backgroundSize: `${gridSize}px ${gridSize}px`,
                }}
            />
            {/* Content */}
            {children}
        </div>
    );
}
