import type { Metadata } from 'next';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';
import {
  HeroSection,
  ProblemContext,
  ProblemFragmentation,
  EcosystemSnapshot,
  // WhatWeBuildSection,
  FAQSection,
} from '@/modules/homepage';
import { TestimonialsSection } from '@/modules/shared/components/TestimonialsSection';
import HomeScrollRegistrar from '@/modules/homepage/components/HomeScrollRegistrar';
import type { HomepageHeroContent } from '@/modules/homepage/components/HeroSection';

export const metadata: Metadata = {
  title: 'Mergex - Your All-in-One Solution Partner for AI, Automation & Growth',
  description: 'From AI-powered content to custom development—we help businesses build and scale faster. Explore Mergex Labs, Systems, and Platform divisions.',
  keywords: ['AI automation', 'custom software development', 'content creation', 'business solutions', 'MVP development', 'AI content studio'],
  openGraph: {
    title: 'Mergex - Your Solution Partner for AI & Growth',
    description: 'One partner. Multiple capabilities. Fast results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mergex - Your Solution Partner',
    description: 'AI, automation, and development solutions for modern businesses',
  },
};

const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    heroTagline,
    heroHeadline,
    heroSubheadline,
    heroCta { text, link },
    heroSecondaryCtaText,
    heroSecondaryCtaLink,
    showProblemContext,
    showProblemFragmentation,
    showEcosystem,
    showTestimonials,
    showFAQ,
    problemContextHeadline,
    problemContextSubheadline,
    problemContextProblems[] { title, description, icon },
    problemContextClosing,
    problemFragmentationHeadline,
    problemFragmentationSubheadline,
    problemFragmentationProblems[] { title, description, icon },
    problemFragmentationClosing,
    ecosystemLabsCard { title, tagline, description, "image": image.asset->url },
    faqHeadline,
    faqSubheadline,
    faqDescription,
    faqQuestions[] { question, answer },
    faqCtaText,
    faqCtaSubtext,
    faqButtonText,
    featuredTestimonials[]-> {
      id,
      quote,
      "author": {
        "name": authorName,
        "role": authorRole,
        company
      }
    }
  }
`;

interface HomepageData extends HomepageHeroContent {
  showProblemContext?: boolean;
  showProblemFragmentation?: boolean;
  showEcosystem?: boolean;
  showTestimonials?: boolean;
  showFAQ?: boolean;
  problemContextHeadline?: string;
  problemContextSubheadline?: string;
  problemContextProblems?: any[];
  problemContextClosing?: string;
  problemFragmentationHeadline?: string;
  problemFragmentationSubheadline?: string;
  problemFragmentationProblems?: any[];
  problemFragmentationClosing?: string;
  ecosystemSystemsCard?: any;
  ecosystemLabsCard?: any;
  faqHeadline?: string;
  faqSubheadline?: string;
  faqDescription?: string;
  faqQuestions?: { question: string; answer: string }[];
  faqCtaText?: string;
  faqCtaSubtext?: string;
  faqButtonText?: string;
  featuredTestimonials?: any[];
}

export default async function Home() {
  const content = await fetchWithFallback<HomepageData | null>(
    HOMEPAGE_QUERY,
    null,
    'homepage'
  );

  const showProblemContext = content?.showProblemContext ?? true;
  const showProblemFragmentation = content?.showProblemFragmentation ?? true;
  const showEcosystem = content?.showEcosystem ?? true;
  const showTestimonials = content?.showTestimonials ?? true;
  const showFAQ = content?.showFAQ ?? true;

  return (
    <main className="">
      <HomeScrollRegistrar />

      {/* 1. Hero — Belief Framing */}
      <div id="hero">
        <HeroSection content={content} />
      </div>

      {/* 2. Why Mergex Exists — Reframing the Problem */}
      {showProblemContext && (
        <div id="problem-context">
          <ProblemContext content={
            content?.problemContextHeadline ? {
              headline: content.problemContextHeadline,
              subheadline: content.problemContextSubheadline || '',
              problems: content.problemContextProblems?.length ? content.problemContextProblems : [],
              closingStatement: content.problemContextClosing || ''
            } : undefined
          } />
        </div>
      )}

      {/* 3. Problem With Fragmentation — Pain Naming */}
      {showProblemFragmentation && (
        <div id="problem-fragmentation">
          <ProblemFragmentation content={
            content?.problemFragmentationHeadline ? {
              headline: content.problemFragmentationHeadline,
              subheadline: content.problemFragmentationSubheadline || '',
              problems: content.problemFragmentationProblems?.length ? content.problemFragmentationProblems : [],
              closingStatement: content.problemFragmentationClosing || ''
            } : undefined
          } />
        </div>
      )}

      {/* 4. Explore Ecosystem — Choice Architecture */}
      {showEcosystem && (
        <div id="ecosystem">
          <EcosystemSnapshot content={{
            systemsCard: content?.ecosystemSystemsCard,
            labsCard: content?.ecosystemLabsCard
          }} />
        </div>
      )}

      {/* 5. What We Build — High-Level Outcomes Only */}
      <div id="what-we-build">
        {/* What We Build - Commented out */}
        {/* <WhatWeBuildSection /> */}
      </div>

      {/* 6. Testimonials — Belief-Based Only */}
      {showTestimonials && (
        <div id="testimonials">
          <TestimonialsSection testimonials={content?.featuredTestimonials} />
        </div>
      )}

      {/* 7. FAQ — Orientation */}
      {showFAQ && (
        <div id="faq">
          <FAQSection
            variant="parent"
            parentFaqData={
              content?.faqHeadline ? {
                headline: content.faqHeadline,
                subheadline: content.faqSubheadline,
                description: content.faqDescription,
                questions: content.faqQuestions?.length ? content.faqQuestions : undefined,
                ctaText: content.faqCtaText,
                ctaSubtext: content.faqCtaSubtext,
                buttonText: content.faqButtonText
              } : undefined
            }
          />
        </div>
      )}
    </main>
  );
}
