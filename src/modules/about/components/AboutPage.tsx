'use client';

import { HeroSection } from './HeroSection';
import { ProblemSection } from './ProblemSection';
import { WhatIsSection } from './WhatIsSection';
import { ModelSection } from './ModelSection';
import { TeamSection } from './TeamSection';
import { PhilosophySection } from './PhilosophySection';
import { CTASection } from './CTASection';
import { TestimonialsSection } from '@/modules/shared';

/**
 * AboutPage - Strategic Positioning Page
 * 
 * Structure:
 * 1. Orientation (Hero)
 * 2. Problem (Chaos)
 * 3. What Mergex Is (The Fix)
 * 4. The Model (How it works)
 * 5. Philosophy (Why it works)
 * 6. Team (The Architects)
 * 7. Trust Building (Testimonials)
 * 8. Directional Check (CTASection)
 */
export function AboutPage() {
    return (
        <div className="bg-white">
            <HeroSection />
            <ProblemSection />
            <WhatIsSection />
            <ModelSection />
            <PhilosophySection />
            <TeamSection />
            {/* <TestimonialsSection /> */}
            <CTASection />
        </div>
    );
}
