import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import {
  HeroSection,
  ShowreelSection,
  ProblemFragmentation,
  EcosystemSnapshot,
  ProcessSection,
} from '@/modules/homepage';
import HomeScrollRegistrar from '@/modules/homepage/components/HomeScrollRegistrar';

const ArchitectureSection = dynamic(() => import('@/modules/homepage/components/ArchitectureSection').then(mod => mod.ArchitectureSection));
const MarqueeStrip = dynamic(() => import('@/modules/homepage/components/MarqueeStrip').then(mod => mod.MarqueeStrip));
const ThreeDMarqueeDemo = dynamic(() => import('@/modules/homepage/components/ThreeDMarqueeDemo').then(mod => mod.ThreeDMarqueeDemo));
const FAQSection = dynamic(() => import('@/modules/homepage/components/FAQSection').then(mod => mod.FAQSection));
const TestimonialsSection = dynamic(() => import('@/modules/shared/components/TestimonialsSection').then(mod => mod.TestimonialsSection));

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


      {/* 6. Explore Ecosystem — Choice Architecture */}
      <div id="ecosystem">
        <EcosystemSnapshot />
      </div>

      {/* 7. Process — Step by Step Flow */}
      <div id="process">
        <ProcessSection />
      </div>

      {/* 5. Work Gallery — 3D Marquee Showcase */}
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
