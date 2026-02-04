import React from "react";
import { cn } from "@/lib/utils";

interface BlurVignetteProps {
    radius?: string;
    inset?: string;
    transitionLength?: string;
    blur?: string;
    className?: string;
    children?: React.ReactNode;
}

export const BlurVignette = ({
    radius = "24px",
    inset = "20px",
    transitionLength = "44px",
    blur = "6px",
    className,
    children,
}: BlurVignetteProps) => {
    return (
        <div className={cn("relative overflow-hidden", className)}>
            {children}
            <div
                className="pointer-events-none absolute inset-0 transform-gpu"
                style={{
                    backdropFilter: `blur(${blur})`,
                    WebkitBackdropFilter: `blur(${blur})`,
                    maskImage: `radial-gradient(
            circle at center,
            transparent calc(100% - ${radius} - ${transitionLength} - ${inset}),
            black calc(100% - ${radius} - ${inset})
          )`,
                    WebkitMaskImage: `radial-gradient(
            circle at center,
            transparent calc(100% - ${radius} - ${transitionLength} - ${inset}),
            black calc(100% - ${radius} - ${inset})
          )`,
                }}
            />
        </div>
    );
};
