
import type { Metadata } from 'next';

import {
    SystemsHero,
    SystemsPageShell,
    WhatWeSolve,
    OurSolutions,
    HowWeWorkSystems,
    EngagementModel,
    SystemsFAQ,
    ImpactSection,
    CaseStudySection,
    SpeedAdvantage,
} from '@/modules/systems';
import { FAQSection } from '@/modules/homepage';
import { PageTransition } from '@/components/transitions/PageTransition';

import SystemsScrollRegistrar from '@/modules/systems/components/SystemsScrollRegistrar';

import TargetCursorWrapper from '@/components/TargetCursorWrapper';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';
import type { CaseStudy } from '@/modules/caseStudies';

export const metadata: Metadata = {
    title: 'Mergex Systems - Solution Partner | Custom Software & AI Automation',
    description: 'Building and automating systems that help businesses scale. MVPs in weeks, not months. Custom software, AI automation, design, and marketing solutions.',
    keywords: ['custom software development', 'MVP development', 'AI automation', 'solution partner', 'web app development', 'mobile app development', 'business automation'],
    openGraph: {
        title: 'Mergex Systems - Your Solution Partner',
        description: 'MVPs in weeks, not months. Building systems that scale.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mergex Systems - Solution Partner',
        description: 'Building and automating systems that help businesses scale',
    },
};

// ── GROQ Query for Case Studies ──
const CASE_STUDIES_QUERY = `
    *[_type == "caseStudy"] | order(publishedAt desc) {
        "id": _id,
        "slug": slug.current,
        title,
        "subtitle": coalesce(subtitle, ""),
        "heroImage": featuredImage.asset->url,
        "heroImageAlt": coalesce(featuredImage.alt, title),
        "outcome": coalesce(pt::text(outcome), ""),
        "client": {
            "industry": industry,
            "location": "",
            "companySize": "",
            "service": coalesce(division, "")
        },
        "problem": { "narrative": "", "painPoints": [] },
        "stakes": [],
        "strategy": [],
        "execution": [],
        "results": coalesce(metrics[]{ label, value, "suffix": "" }, []),
        "testimonial": null,
        "categories": [],
        "techStack": [],
        "publishDate": coalesce(string(publishedAt), ""),
        "fitCriteria": { "idealFor": [], "notIdealFor": [] }
    }
`;

// ── GROQ Query for Systems Page Singleton ──
const SYSTEMS_PAGE_QUERY = `
    *[_type == "systemsPage"][0] {
        "hero": {
            "headline": heroHeadline,
            "subheadline": heroSubheadline,
            "eyebrow": heroEyebrow,
            "keyDifferentiator": heroKeyDifferentiator,
            "primaryCTA": heroPrimaryCTA,
            "secondaryCTA": heroSecondaryCTA
        },
        "whatWeSolve": {
            "headline": whatWeSolveHeadline,
            "subheadline": whatWeSolveSubheadline,
            "primaryCTA": whatWeSolvePrimaryCTA,
            "proofCards": whatWeSolveProofCards
        },
        "solutions": {
            "headline": solutionsHeadline,
            "subheadline": solutionsSubheadline,
            "pillars": solutionsPillars
        },
        "speed": {
            "headline": speedHeadline,
            "subheadline": speedSubheadline,
            "comparison": {
                "traditional": speedTraditional,
                "systems": speedMergex
            },
            "howWeDoIt": speedHowWeDoIt
        },
        "process": {
            "headline": processHeadline,
            "subheadline": processSubheadline,
            "phases": processPhases
        },
        "proof": {
            "headline": techStackHeadline,
            "subheadline": techStackSubheadline,
            "techStack": techStack,
            "trustStatement": techStackTrustStatement
        },
        "engagement": {
            "headline": engagementHeadline,
            "subheadline": engagementSubheadline,
            "models": engagementModels,
            "philosophy": engagementPhilosophy,
            "cta": engagementCTA
        },
        "cta": {
            "headline": ctaHeadline,
            "subheadline": ctaSubheadline,
            "primaryCTA": ctaPrimaryCTA,
            "secondaryCTA": ctaSecondaryCTA
        }
    }
`;

export default async function SystemsPage() {
    // 1. Fetch case studies from Sanity
    const sanityCaseStudies = await fetchWithFallback<CaseStudy[]>(
        CASE_STUDIES_QUERY,
        [],
        'Systems Page Case Studies'
    );

    // 2. Fetch the systems page singleton
    const pageData = await fetchWithFallback<any>(
        SYSTEMS_PAGE_QUERY,
        null,
        'Systems Page Singleton'
    );

    return (
        <PageTransition>

            <SystemsScrollRegistrar />
            <SystemsPageShell>
                <main className="bg-white text-gray-900">
                    {/* 1. Systems Hero — Relief */}
                    <div id="systems-hero" className="systems-section">
                        <SystemsHero content={pageData?.hero} />
                    </div>

                    {/* 2. What We Solve — Problem Alignment */}
                    <div id="pain-points" className="systems-section">
                        <WhatWeSolve content={pageData?.whatWeSolve} />
                    </div>

                    {/* 3. Our System Types — NOT Services */}
                    <div id="solutions" className="systems-section">
                        <OurSolutions content={pageData?.solutions} />
                    </div>

                    {/* 4. Speed Without Fragility */}
                    <div id="speed" className="systems-section">
                        <SpeedAdvantage content={pageData?.speed} />
                    </div>

                    {/* 5. How We Work — Risk Reduction */}
                    <div id="process" className="systems-section">
                        <HowWeWorkSystems content={pageData?.process} />
                    </div>

                    {/* 5. Case Studies — Proof */}
                    <div id="case-overview" className="systems-section">
                        <CaseStudySection caseStudies={sanityCaseStudies.length > 0 ? sanityCaseStudies : undefined} />
                    </div>

                    {/* 6. Impact — Measurable Results */}
                    <div id="impact" className="systems-section">
                        <ImpactSection content={pageData?.proof} />
                    </div>

                    {/* 8. Engagement Models — Pricing Philosophy */}
                    <div id="engagement" className="systems-section">
                        <EngagementModel content={pageData?.engagement} />
                    </div>

                    {/* 9. FAQs — Objection Handling */}
                    <div id="faq" className="systems-section">
                        <FAQSection variant="systems" />
                    </div>
                </main>
            </SystemsPageShell>
        </PageTransition>
    );
}

