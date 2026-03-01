import type { Metadata } from 'next';
import { AboutPage } from '@/modules/about';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';
import type { AboutPageContent } from '@/modules/about/components/AboutPage';

export const metadata: Metadata = {
    title: 'About Mergex | One Ecosystem for Modern Businesses',
    description: 'Mergex is built for problems that don\'t fit neatly into boxes. We work across AI, software, content, automation, and growth as one connected system.',
};

// ── GROQ Query for About Page Singleton ──
const ABOUT_PAGE_QUERY = `
    *[_type == "aboutPage"][0] {
        heroHeadlineLine1,
        heroHeadlineLine2,
        heroSupportShort,
        heroSupportLong1,
        heroSupportLong2,
        teamEyebrow,
        teamHeadline,
        teamBody1,
        teamBody2,
        ecosystemHeadline,
        ecosystemCards[] { title, description, href, ctaText },
        principlesHeadline,
        principles[] { text },
        whyHeadline,
        whyLine1,
        whyLine2,
        whyClosing,
        ctaHeadline,
        ctaGuidanceLine1,
        ctaGuidanceLine2,
        ctaPrimaryText,
        ctaSecondaryText
    }
`;

export default async function Page() {
    const content = await fetchWithFallback<AboutPageContent | null>(
        ABOUT_PAGE_QUERY,
        null,
        'aboutPage'
    );

    return <AboutPage content={content ?? undefined} />;
}
