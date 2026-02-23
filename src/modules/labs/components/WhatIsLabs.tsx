'use client';

import { WHAT_IS_LABS } from '../content/labs';
import { TextReveal } from '@/components/ui/text-reveal';

/**
 * WhatIsLabs - Clear definition section with text reveal animation
 */
export function WhatIsLabs() {
    return (
        <section>
            <TextReveal
                className="h-[80vh]"
                offset={["start 0.5", "end 0.0"]}
                header={
                    <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.8em] text-foreground/90 mb-4">
                        {WHAT_IS_LABS.headline}
                    </h2>
                }
                textClassName="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed max-w-4xl mx-auto"
            >
                {WHAT_IS_LABS.description}
            </TextReveal>
        </section>
    );
}
