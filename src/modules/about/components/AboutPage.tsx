'use client';

import { HeroSection } from './HeroSection';
import { ProblemSection } from './ProblemSection';
import { TeamSection } from './TeamSection';
import { EcosystemGlimpse } from './EcosystemGlimpse';
import { PrinciplesSection } from './PrinciplesSection';
import { WhySection } from './WhySection';
import { CTASection } from './CTASection';
import { TestimonialsSection } from '@/modules/shared';

/**
 * AboutPage - Strategic Positioning Page
 * 
 * Structure:
 * 1. Orientation (Hero)
 * 2. Problem Reframing (ProblemSection)
 * 3. Human Proof (TeamSection)
 * 4. Ecosystem Glimpse (Labs/Systems)
 * 5. How We Work (Principles)
 * 6. Why We Exist (WhySection)
 * 7. Trust Building (Testimonials)
 * 8. Directional Check (CTASection)
 */
export function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <TeamSection />
            <EcosystemGlimpse />
            <PrinciplesSection />
            <WhySection />
            <TestimonialsSection />
            <CTASection />
        </main>
    );
}
