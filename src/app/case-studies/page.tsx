import React from 'react';
import { Metadata } from 'next';
import { CASE_STUDIES, ShowcaseView, CaseStudy } from '@/modules/caseStudies';

export const metadata: Metadata = {
    title: 'Transformations | Mergex Showcase',
    description: 'Immersive success stories of digital transformation and business growth.',
};

export default function CaseStudiesPage() {
    const featuredSlugs = [
        'mic-and-mac-digital-overhaul',
        'tarus-motors-ai-marketing',
        'e-commerce-platform'
    ];

    const displayedStudies = featuredSlugs
        .map(slug => CASE_STUDIES.find(s => s.slug === slug))
        .filter((s): s is CaseStudy => !!s);

    return (
        <ShowcaseView studies={displayedStudies} />
    );
}
