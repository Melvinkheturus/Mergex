'use client';

import { WHAT_IS_LABS } from '../content/labs';
import { TextReveal } from '@/components/ui/text-reveal';

interface WhatIsLabsProps {
    content?: typeof WHAT_IS_LABS;
}

/**
 * WhatIsLabs - Clear definition section with text reveal animation
 */
export function WhatIsLabs({ content }: WhatIsLabsProps = {}) {
    const data = content || WHAT_IS_LABS;
    const headline = data.headline || WHAT_IS_LABS.headline;
    const description = data.description || WHAT_IS_LABS.description;

    return (
        <section className="-mt-24 md:-mt-40 relative z-20">
            <TextReveal
                className="h-[80vh]"
                offset={["start 0.5", "end 0.0"]}
                header={
                    <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.8em] text-foreground/90 mb-4">
                        {headline}
                    </h2>
                }
                textClassName="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed max-w-4xl mx-auto"
            >
                {description}
            </TextReveal>
        </section>
    );
}
