'use client';

import { HeroSection } from './HeroSection';
import { TeamSection } from './TeamSection';
import { EcosystemGlimpse } from './EcosystemGlimpse';
import { PrinciplesSection } from './PrinciplesSection';
import { WhySection } from './WhySection';
import { CTASection } from './CTASection';
import { TestimonialsSection } from '@/modules/shared';

export interface AboutPageContent {
    // Hero
    heroHeadlineLine1?: string;
    heroHeadlineLine2?: string;
    heroSupportShort?: string;
    heroSupportLong1?: string;
    heroSupportLong2?: string;
    // Team
    teamEyebrow?: string;
    teamHeadline?: string;
    teamBody1?: string;
    teamBody2?: string;
    // Ecosystem
    ecosystemHeadline?: string;
    ecosystemCards?: { title?: string; description?: string; href?: string; ctaText?: string }[];
    // Principles
    principlesHeadline?: string;
    principles?: { text: string }[];
    // Why
    whyHeadline?: string;
    whyLine1?: string;
    whyLine2?: string;
    whyClosing?: string;
    // CTA
    ctaHeadline?: string;
    ctaGuidanceLine1?: string;
    ctaGuidanceLine2?: string;
    ctaPrimaryText?: string;
    ctaSecondaryText?: string;
}

interface AboutPageProps {
    content?: AboutPageContent;
}

/**
 * AboutPage - Strategic Positioning Page
 *
 * Structure:
 * 1. Orientation (Hero)
 * 2. Human Proof (TeamSection)
 * 3. Ecosystem Glimpse (Labs/Systems)
 * 4. How We Work (Principles)
 * 5. Why We Exist (WhySection)
 * 6. Trust Building (Testimonials)
 * 7. Directional Check (CTASection)
 */
export function AboutPage({ content }: AboutPageProps) {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection content={content} />
            <TeamSection content={content} />
            <EcosystemGlimpse content={content} />
            <PrinciplesSection content={content} />
            <WhySection content={content} />
            <TestimonialsSection />
            <CTASection content={content} />
        </main>
    );
}
