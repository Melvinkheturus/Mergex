import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FullCaseStudy, CASE_STUDIES } from '@/modules/caseStudies';

interface CaseStudyPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return CASE_STUDIES.filter((cs) => cs.fullCase).map((cs) => ({
        slug: cs.slug,
    }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
    const caseStudy = CASE_STUDIES.find((cs) => cs.slug === params.slug);

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found - Mergex',
        };
    }

    return {
        title: `${caseStudy.title} - Case Study | Mergex`,
        description: caseStudy.problemSummary,
        openGraph: {
            title: caseStudy.title,
            description: caseStudy.problemSummary,
            type: 'article',
        },
    };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
    const caseStudy = CASE_STUDIES.find((cs) => cs.slug === params.slug);

    if (!caseStudy || !caseStudy.fullCase) {
        notFound();
    }

    return (
        <main>
            <FullCaseStudy caseStudy={caseStudy} />
        </main>
    );
}
