import type { Metadata } from 'next';
import { CaseStudyHub } from '@/modules/caseStudies';

export const metadata: Metadata = {
    title: 'Case Studies - Mergex | Real Problems, Real Solutions',
    description: 'See how we help businesses build MVPs faster, automate operations, and scale without friction. Real case studies with measurable outcomes.',
    keywords: ['case studies', 'client success stories', 'MVP development', 'automation case studies', 'business transformation'],
    openGraph: {
        title: 'Case Studies - Mergex',
        description: 'Real businesses. Real challenges. Real outcomes.',
        type: 'website',
    },
};

export default function CaseStudiesPage() {
    return (
        <main>
            <CaseStudyHub />
        </main>
    );
}
