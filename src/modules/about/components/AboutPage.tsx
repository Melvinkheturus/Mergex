'use client';

import { HeroSection } from './HeroSection';
import { ProblemSection as WhyMergexSection } from './whymergex';
import { FoundersInsight } from './FoundersInsight';
import { TheProblem } from './TheProblem';
import { WhatWeBuild } from './WhatWeBuild';
import { WhatWeBelieve } from './WhatWeBelieve';
import { RealOutcomes } from './RealOutcomes';
import { TeamSection } from './TeamSection';
import { VisionMission } from './VisionMission';
import { CTASection } from './CTASection';

/**
 * AboutPage - Strategic Positioning Page
 * 
 * Structure:
 * 1. About Mergex (Hero)
 * 2. Why Mergex
 * 3. The founder's insight
 * 4. The problem we solve
 * 5. What we build
 * 6. What we believe
 * 7. Real outcomes
 * 8. team
 * 9. Where we're going (vission and mission)
 * 10. cta
 */
export function AboutPage() {
    return (
        <div className="bg-white">
            <HeroSection />
            <WhyMergexSection />
            <FoundersInsight />
            <TheProblem />
            <WhatWeBuild />
            <WhatWeBelieve />
            <RealOutcomes />
            <TeamSection />
            <VisionMission />
            <CTASection />
        </div>
    );
}
