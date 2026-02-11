'use client';

import { Skiper34Component } from '@/components/ui/skiper-ui/skiper34';

const CASE_STUDIES = [
    {
        id: 1,
        image: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
        alt: 'E-Commerce Platform Case Study',
        title: 'E-Commerce Platform',
        description: 'Built a scalable e-commerce solution with AI-powered recommendations.',
    },
    {
        id: 2,
        image: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
        alt: 'Healthcare Management System',
        title: 'Healthcare Management System',
        description: 'Developed an integrated patient management platform.',
    },
    {
        id: 3,
        image: '/assets/mockups/Gemini_Generated_Image_q305hxq305hxq305.png',
        alt: 'Financial Dashboard',
        title: 'Financial Dashboard',
        description: 'Real-time analytics dashboard for financial services.',
    },
    {
        id: 4,
        image: '/assets/mockups/Gemini_Generated_Image_qx4kj5qx4kj5qx4k.png',
        alt: 'SaaS Platform',
        title: 'SaaS Platform',
        description: 'Multi-tenant SaaS application serving 10,000+ users.',
    },
    {
        id: 5,
        image: '/assets/mockups/Gemini_Generated_Image_rh4aggrh4aggrh4a.png',
        alt: 'Logistics Tracking System',
        title: 'Logistics Tracking System',
        description: 'Optimized delivery routes cutting costs by 35%.',
    },
    {
        id: 6,
        image: '/assets/mockups/Gemini_Generated_Image_vvlwccvvlwccvvlw.png',
        alt: 'Mobile App Platform',
        title: 'Mobile App Platform',
        description: 'Cross-platform mobile application with offline-first architecture.',
    },
];

export function CaseStudySection() {
    return <Skiper34Component cards={CASE_STUDIES} />;
}
