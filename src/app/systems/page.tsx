import type { Metadata } from "next";

import {
  SystemsHero,
  SystemsPageShell,
  WhatWeSolve,
  OurSolutions,
  HowWeWorkSystems,
  EngagementModel,
  ImpactSection,
  CaseStudySection,
} from "@/modules/systems";
import { FAQSection } from "@/modules/homepage";
import { PageTransition } from "@/components/transitions/PageTransition";
import SystemsScrollRegistrar from "@/modules/systems/components/SystemsScrollRegistrar";

export const metadata: Metadata = {
  title: "Mergex Systems - Solution Partner | Custom Software & AI Automation",
  description:
    "Building and automating systems that help businesses scale. MVPs in weeks, not months. Custom software, AI automation, design, and marketing solutions.",
  keywords: [
    "custom software development",
    "MVP development",
    "AI automation",
    "solution partner",
    "web app development",
    "mobile app development",
    "business automation",
  ],
  openGraph: {
    title: "Mergex Systems - Your Solution Partner",
    description: "MVPs in weeks, not months. Building systems that scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mergex Systems - Solution Partner",
    description: "Building and automating systems that help businesses scale",
  },
};

export default function SystemsPage() {
  return (
    <PageTransition>
      <SystemsScrollRegistrar />
      <SystemsPageShell>
        <main className="text-gray-900">
          {/* 1) HERO */}
          <div id="systems-hero" className="systems-section">
            <SystemsHero />
          </div>

          {/* 2) BODY CONTENT */}
          <div className="bg-white">
            <div id="pain-points" className="systems-section">
              <WhatWeSolve />
            </div>

            <div id="solutions" className="systems-section">
              <OurSolutions />
            </div>

            <div id="process" className="systems-section">
              <HowWeWorkSystems />
            </div>

            <div id="case-overview" className="systems-section">
              <CaseStudySection />
            </div>

            <div id="impact" className="systems-section">
              <ImpactSection />
            </div>

            <div id="engagement" className="systems-section">
              <EngagementModel />
            </div>

            <div id="faq" className="systems-section">
              <FAQSection variant="systems" />
            </div>
          </div>
        </main>
      </SystemsPageShell>
    </PageTransition>
  );
}