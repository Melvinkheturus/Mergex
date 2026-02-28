import React from 'react';
import { Metadata } from 'next';
import { CASE_STUDIES, ShowcaseView } from '@/modules/caseStudies';

export const metadata: Metadata = {
    title: 'Transformations | Mergex Showcase',
    description: 'Immersive success stories of digital transformation and business growth.',
};

export default function CaseStudiesPage() {
    return (
        <ShowcaseView studies={CASE_STUDIES} />
    );
}
