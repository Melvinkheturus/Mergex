import type { Metadata } from 'next';
import {
  HeroSection,
  ProblemContext,
  EcosystemSnapshot,
  WhatWeBuildSection,
  HowWeWorkSection,
  ProofSection,
  ProductsGlimpseSection,
  FAQSection,
} from '@/modules/homepage';
import { FeaturedCasePreview, CASE_STUDIES } from '@/modules/caseStudies';

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

export default function Home() {
  return (
    <main className="">
      {/* 1. Hero - Solution Partner Positioning */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. Problem Context - Pain Point Understanding */}
      <div id="problem-context">
        <ProblemContext />
      </div>

      {/* 3. Ecosystem Portal Gallery - Core Navigation Hub */}
      <div id="ecosystem">
        <EcosystemSnapshot />
      </div>

      {/* 4. What We Build - Problem-Solution Showcase */}
      <div id="what-we-build">
        <WhatWeBuildSection />
      </div>

      {/* 5. How We Work - Process Confidence */}
      <div id="how-we-work">
        <HowWeWorkSection />
      </div>

      {/* 6. Proof - Tech Stack Showcase */}
      <div id="proof">
        <ProofSection />
      </div>

      {/* 7. Featured Case Study - Social Proof */}
      <div id="featured-case">
        <FeaturedCasePreview caseStudy={CASE_STUDIES[0]} />
      </div>

      {/* 8. Products Glimpse - Future Vision */}
      <div id="products">
        <ProductsGlimpseSection />
      </div>

      {/* 9. FAQ - Final CTA (DO NOT MODIFY) */}
      <div id="faq">
        <FAQSection />
      </div>
    </main>
  );
}
