import type { Metadata } from 'next';
import {
  HeroSection,
  ProblemContext,
  ProblemFragmentation,
  EcosystemSnapshot,
  WhatWeBuildSection,
  FAQSection,
} from '@/modules/homepage';
import { TestimonialsSection } from '@/modules/shared';
import HomeScrollRegistrar from '@/modules/homepage/components/HomeScrollRegistrar';

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
      <HomeScrollRegistrar />

      {/* 1. Hero — Belief Framing */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. Why Mergex Exists — Reframing the Problem */}
      <div id="problem-context">
        <ProblemContext />
      </div>

      {/* 3. Problem With Fragmentation — Pain Naming */}
      <div id="problem-fragmentation">
        <ProblemFragmentation />
      </div>

      {/* 4. Explore Ecosystem — Choice Architecture */}
      <div id="ecosystem">
        <EcosystemSnapshot />
      </div>

      {/* 5. What We Build — High-Level Outcomes Only */}
      <div id="what-we-build">
        <WhatWeBuildSection />
      </div>

      {/* 6. Testimonials — Belief-Based Only */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* 7. FAQ — Orientation */}
      <div id="faq">
        <FAQSection variant="parent" />
      </div>
    </main>
  );
}
