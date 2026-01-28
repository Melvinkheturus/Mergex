import type { Metadata } from 'next';
import {
    CareersHero,
    WhatWorkingMeans,
    HowWeWorkCareers,
    CareerPaths,
    LearningGrowth,
    WhatWeDontOffer,
    HowToApply,
    FinalNote,
} from '@/modules/careers';

export const metadata: Metadata = {
    title: 'Careers at Mergex - Build Systems. Learn Fast. Grow With Intent.',
    description: 'Join a team that values clarity, ownership, and curiosity. Explore full-time roles, internships, and opportunities to build real systems with modern tech.',
    keywords: ['careers', 'jobs at Mergex', 'internships', 'software engineering jobs', 'AI careers', 'tech jobs'],
    openGraph: {
        title: 'Careers at Mergex',
        description: 'For people who like solving real problems.',
        type: 'website',
    },
};

export default function CareersPage() {
    return (
        <main>
            {/* 1. Hero - Set the Tone */}
            <CareersHero />

            {/* 2. What Working Means - Define Culture */}
            <WhatWorkingMeans />

            {/* 3. How We Work - Systems Mindset */}
            <HowWeWorkCareers />

            {/* 4. Career Paths - 4 Clear Categories */}
            <CareerPaths />

            {/* 5. Learning & Growth - Long-Term Value */}
            <LearningGrowth />

            {/* 6. What We Don't Offer - Honesty */}
            <WhatWeDontOffer />

            {/* 7. How to Apply - Low Friction */}
            <HowToApply />

            {/* 8. Final Note - Human Touch */}
            <FinalNote />
        </main>
    );
}
