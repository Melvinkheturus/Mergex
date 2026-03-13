import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import {
  HeroSection,
  ShowreelSection,
  ProblemFragmentation,
  EcosystemSnapshot,
} from '@/modules/homepage';
import HomeScrollRegistrar from '@/modules/homepage/components/HomeScrollRegistrar';

const ArchitectureSection = dynamic(() => import('@/modules/homepage/components/ArchitectureSection').then(mod => mod.ArchitectureSection));
const MarqueeStrip = dynamic(() => import('@/modules/homepage/components/MarqueeStrip').then(mod => mod.MarqueeStrip));
const ThreeDMarqueeDemo = dynamic(() => import('@/modules/homepage/components/ThreeDMarqueeDemo').then(mod => mod.ThreeDMarqueeDemo));
const FAQSection = dynamic(() => import('@/modules/homepage/components/FAQSection').then(mod => mod.FAQSection));
const TestimonialsSection = dynamic(() => import('@/modules/shared/components/TestimonialsSection').then(mod => mod.TestimonialsSection));

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

      {/* 2. Showreel — Visual Proof */}
      <div id="showreel">
        <ShowreelSection />
      </div>

      {/* 3. Problem With Fragmentation — Pain Naming */}
      <div id="problem-fragmentation">
        <ProblemFragmentation />
      </div>

      {/* Marquee Strip — floats as overlay on the section boundary */}
      <MarqueeStrip />

      {/* 4. Architecture — From Chaos to Clarity */}
      <div id="architecture">
        <ArchitectureSection />
      </div>

      {/* 5. Explore Ecosystem — Choice Architecture */}
      <div id="ecosystem">
        <EcosystemSnapshot />
      </div>


      {/* 7. Work Gallery — 3D Marquee Showcase */}
      <div id="work-gallery">
        <ThreeDMarqueeDemo />
      </div>

      {/* 8. Testimonials — Social Proof */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* 9. FAQ — Orientation */}
      <div id="faq">
        <FAQSection variant="parent" />
      </div>
    </main>
  );
}
