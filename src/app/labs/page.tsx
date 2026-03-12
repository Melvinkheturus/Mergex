import type { Metadata } from 'next';
import {
    LabsHero,
    WhatIsLabs,
    WhatWeCreate,
    ScrollZoomShowcase,
    WorkGallery,
    WhyLabsExists,
    LabsCTA,
    HowLabsWorks,
} from '@/modules/labs';

import { ExperimentsGallery } from '@/modules/labsPortfolio';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';

export const metadata: Metadata = {
    title: 'Mergex Labs - AI Content Studio | Creative AI Solutions',
    description: 'Where creativity meets intelligent systems. Gen-AI workflows for brands that need to move fast. AI-generated visuals, videos, campaigns, and brand assets.',
    keywords: ['AI content studio', 'generative AI', 'AI visuals', 'AI video creation', 'content automation', 'creative AI', 'brand assets'],
    openGraph: {
        title: 'Mergex Labs - AI Content Studio',
        description: 'Creative AI solutions for modern brands',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mergex Labs - AI Content Studio',
        description: 'Where creativity meets intelligent systems',
    },
};

import LabsScrollRegistrar from "@/modules/labs/components/LabsScrollRegistrar";

// ── GROQ Queries ──
const LABS_PAGE_QUERY = `
    *[_type == "labsPage"][0]{
        "hero": {
            "eyebrow": heroEyebrow,
            "subEyebrow": heroSubEyebrow,
            "headline": heroHeadline,
            "supportingLine": heroSupportingLine,
            "reinforcementLine": heroReinforcementLine,
            "primaryCTA": heroPrimaryCTA,
            "secondaryCTA": heroSecondaryCTA,
            "microcopy": heroMicrocopy
        },
        "whatIsLabs": {
            "headline": whatIsLabsHeadline,
            "description": whatIsLabsDescription
        },
        "whatWeCreate": {
            "headline": whatWeCreateHeadline,
            "subheadline": whatWeCreateSubheadline,
            "categories": whatWeCreateCategories
        },
        "gallery": {
            "headline": galleryHeadline,
            "subheadline": gallerySubheadline,
            "placeholderMessage": galleryPlaceholderMessage,
            "workGallery": {
                "headline": workGallery.headline,
                "images": workGallery.images[].asset->url
            }
        },
        "scrollShowcase": {
            "marqueeTexts": scrollShowcase.marqueeTexts,
            "badgeText": scrollShowcase.badgeText,
            "headlinePrefix": scrollShowcase.headlinePrefix,
            "headlineImageUrl": scrollShowcase.headlineImage.asset->url,
            "description": scrollShowcase.description,
            "socialLabel": scrollShowcase.socialLabel,
            "socialLinkText": scrollShowcase.socialLinkText,
            "socialLinkUrl": scrollShowcase.socialLinkUrl,
            "bodyText": scrollShowcase.bodyText,
            "metaItems": scrollShowcase.metaItems
        },
        "howItWorks": {
            "headline": howItWorksHeadline,
            "subheadline": howItWorksSubheadline,
            "steps": howItWorksSteps,
            "keyMessages": howItWorksKeyMessages
        },
        "whyExists": {
            "headline": whyExistsHeadline,
            "cards": whyExistsCards,
            "closingLine": whyExistsClosingLine
        },
        "cta": {
            "headline": ctaHeadline,
            "subheadline": ctaSubheadline,
            "primaryCTA": ctaPrimaryCTA,
            "secondaryCTA": ctaSecondaryCTA
        }
    }
`;

const LABS_CAROUSEL_MEDIA_QUERY = `
    *[_type == "labWork" && defined(thumbnail)] | order(displayOrder asc) {
        "src": coalesce(
            videoFile.asset->url,
            videoUrl,
            thumbnail.asset->url
        ),
        "alt": coalesce(thumbnail.alt, title),
        "type": select(
            mediaType == "video" => "video",
            "image"
        )
    }
`;

export default async function LabsPage() {
    // Fetch entire labs page config from Sanity (labsPage singleton)
    const pageConfig = await fetchWithFallback<any>(
        LABS_PAGE_QUERY,
        null,
        'Labs Page Config'
    );

    // Fetch carousel media from Sanity (labWork documents)
    const carouselMedia = await fetchWithFallback<{
        src: string;
        alt: string;
        type: 'video' | 'image';
    }[]>(
        LABS_CAROUSEL_MEDIA_QUERY,
        [],
        'Labs Carousel Media'
    );

    return (
        <main className="">
            <LabsScrollRegistrar />

            {/* 1. Labs Hero — Invitation */}
            <div id="labs-hero">
                <LabsHero content={pageConfig?.hero} />
            </div>

            {/* 2. What Labs Is — Philosophical */}
            <div id="what-is-labs">
                <WhatIsLabs content={pageConfig?.whatIsLabs} />
            </div>

            {/* 8. Why Labs Exists — Short Manifesto (Moved here) */}
            <div id="why-labs-exists">
                <WhyLabsExists />
            </div>

            {/* 3. What We Create — NOT Services */}
            <div id="capabilities">
                <WhatWeCreate content={pageConfig?.whatWeCreate} />
            </div>

            {/* 7. How Labs Works */}
            <div id="how-it-works">
                <HowLabsWorks content={pageConfig?.howItWorks} />
            </div>

            {/* 5. Work Gallery — CRITICAL Visual Proof */}
            <div id="work">
                <WorkGallery content={pageConfig?.gallery?.workGallery} />
            </div>

            {/* 4. Featured Experiments Gallery */}
            <div id="experiments">
                <ExperimentsGallery
                    galleryConfig={pageConfig?.gallery || undefined}
                    carouselMedia={carouselMedia.length > 0 ? carouselMedia : undefined}
                />
            </div>

            {/* 6. Madonna Reveal / Scroll Experience — After Proof */}
            <div id="featured-work">
                <ScrollZoomShowcase content={pageConfig?.scrollShowcase} />
            </div>

            {/* 9. Soft CTA */}
            <div id="cta">
                <LabsCTA content={pageConfig?.cta} />
            </div>
        </main>
    );
}

