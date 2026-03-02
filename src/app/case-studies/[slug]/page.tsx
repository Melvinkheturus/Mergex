import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';
import type { CaseStudy } from '@/modules/caseStudies';
import { getCaseStudyBySlug, CaseStudyDetail } from '@/modules/caseStudies';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// ── GROQ Queries ──
const ALL_CASE_STUDY_SLUGS_QUERY = `
    *[_type == "caseStudy" && defined(slug.current)]{
        "slug": slug.current
    }
`;

const CASE_STUDY_BY_SLUG_QUERY = `
    *[_type == "caseStudy" && slug.current == $slug][0]{
        "id": _id,
        "slug": slug.current,
        title,
        "subtitle": coalesce(subtitle, ""),
        "heroImage": featuredImage.asset->url,
        "heroImageAlt": coalesce(featuredImage.alt, title),
        "outcome": coalesce(outcome, ""),
        "client": {
            "industry": industry,
            "location": coalesce(location, ""),
            "companySize": coalesce(companySize, ""),
            "service": coalesce(division, "")
        },
        "problem": {
            "narrative": coalesce(pt::text(problem), ""),
            "painPoints": []
        },
        "stakes": [],
        "strategy": [],
        "execution": [],
        "results": coalesce(metrics[]{ label, value, "suffix": "" }, []),
        "testimonial": null,
        "categories": [],
        "techStack": [],
        "publishDate": coalesce(string(publishedAt), ""),
        "fitCriteria": {
            "idealFor": [],
            "notIdealFor": []
        }
    }
`;

export async function generateStaticParams() {
    // Try to get slugs from Sanity, fallback to hardcoded
    const sanitySlugs = await fetchWithFallback<{ slug: string }[]>(
        ALL_CASE_STUDY_SLUGS_QUERY,
        [],
        'Case Study Slugs'
    );

    // Merge Sanity slugs with hardcoded slugs for complete coverage
    const hardcodedSlugs = CASE_STUDIES.map((study) => ({ slug: study.slug }));
    const allSlugs = [...hardcodedSlugs];

    // Add any Sanity-only slugs
    for (const s of sanitySlugs) {
        if (!allSlugs.find((h) => h.slug === s.slug)) {
            allSlugs.push(s);
        }
    }

    return allSlugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    // Try Sanity first
    const sanityStudy = await fetchWithFallback<CaseStudy | null>(
        CASE_STUDY_BY_SLUG_QUERY,
        null,
        `Case Study Metadata: ${slug}`,
        { slug }
    );

    const study = sanityStudy || getCaseStudyBySlug(slug);

    if (!study) {
        return {
            title: 'Case Study Not Found',
        };
    }

    return {
        title: `${study.title} | Mergex`,
        description: study.subtitle,
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;

    // Try Sanity first, then fallback to hardcoded
    const sanityStudy = await fetchWithFallback<CaseStudy | null>(
        CASE_STUDY_BY_SLUG_QUERY,
        null,
        `Case Study Detail: ${slug}`,
        { slug }
    );

    const study = sanityStudy || getCaseStudyBySlug(slug);

    if (!study) {
        notFound();
    }

    return <CaseStudyDetail key={slug} study={study} />;
}
