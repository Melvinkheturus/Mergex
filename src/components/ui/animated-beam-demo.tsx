'use client';

import React, { forwardRef, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/ui/animated-beam';

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'z-10 flex size-12 items-center justify-center',
                className
            )}
        >
            {children}
        </div>
    );
});
Circle.displayName = 'Circle';

export function AnimatedBeamMultipleOutputDemo({
    className,
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                'relative flex min-h-[400px] w-full items-center justify-center overflow-hidden p-4 md:p-8',
                className
            )}
            ref={containerRef}
        >
            <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={div1Ref}>
                        <Icons.ai />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Icons.design />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Icons.development />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Icons.marketing />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.media />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div6Ref} className="size-16 rounded-full border-2 border-neutral-100 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                        <Icons.openai />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div7Ref}>
                        <Icons.growthArrow />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} />
        </div>
    );
}

const Icons = {
    ai: () => (
        <Image
            src="/icons/AI.png"
            alt="AI Icon"
            width={48}
            height={48}
            className="w-full h-full object-contain"
        />
    ),
    design: () => (
        <Image
            src="/icons/Design.png"
            alt="Design Icon"
            width={48}
            height={48}
            className="w-full h-full object-contain"
        />
    ),
    development: () => (
        <Image
            src="/icons/Development.png"
            alt="Development Icon"
            width={48}
            height={48}
            className="w-full h-full object-contain"
        />
    ),
    marketing: () => (
        <Image
            src="/icons/Marketing.png"
            alt="Marketing Icon"
            width={48}
            height={48}
            className="w-full h-full object-contain"
        />
    ),
    media: () => (
        <Image
            src="/icons/Media.png"
            alt="Media Icon"
            width={48}
            height={48}
            className="w-full h-full object-contain"
        />
    ),
    openai: () => (
        <Image
            src="/logo/mergex-logo.png"
            alt="Mergex Logo"
            width={128}
            height={128}
            className="w-full h-full object-contain drop-shadow-sm"
        />
    ),
    growthArrow: () => (
        <Image
            src="/icons/Growth Arrow.png"
            alt="Growth Arrow"
            width={80}
            height={80}
            className="w-full h-full object-contain"
        />
    ),
};
