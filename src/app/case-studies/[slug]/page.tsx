import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FullCaseStudy, CASE_STUDIES } from '@/modules/caseStudies';

interface CaseStudyPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return CASE_STUDIES.filter((cs) => cs.fullCase || cs.detailedCase).map((cs) => ({
        slug: cs.slug,
    }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

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

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { slug } = await params;
    const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

    // Check for either fullCase or detailedCase content
    if (!caseStudy || (!caseStudy.fullCase && !caseStudy.detailedCase)) {
        notFound();
    }

    return (
        <main>
            <FullCaseStudy caseStudy={caseStudy} />
        </main>
    );
}
