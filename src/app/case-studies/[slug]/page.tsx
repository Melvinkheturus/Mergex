import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, CASE_STUDIES } from '@/modules/caseStudies';
import { CaseStudyDetail } from '@/modules/caseStudies/components/CaseStudyDetail';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return CASE_STUDIES.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        return {
            title: 'Case Study Not Found',
        };
    }

    return {
        title: `${study.title} | Mergex Case Study`,
        description: study.outcome,
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        notFound();
    }

    return <CaseStudyDetail study={study} />;
}
