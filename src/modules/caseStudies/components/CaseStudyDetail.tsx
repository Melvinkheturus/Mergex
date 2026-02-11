'use client';

import React from 'react';
import { CaseStudy } from '../types';
import { HeroSection } from './sections/HeroSection';
import { ClientSnapshot } from './sections/ClientSnapshot';
import { ProblemAndStakes } from './sections/ProblemAndStakes';
import { StrategyAndExecution } from './sections/StrategyAndExecution';
import { ResultsAndTestimonial } from './sections/ResultsAndTestimonial';
import { CTASection } from './sections/CTASection'; 

interface CaseStudyDetailProps {
    study: CaseStudy;
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
    return (
        <main className="bg-white min-h-screen">
            <HeroSection study={study} />
            <ClientSnapshot client={study.client} />
            <ProblemAndStakes study={study} />
            <StrategyAndExecution study={study} />
            <ResultsAndTestimonial study={study} />
            <CTASection study={study} />
        </main>
    );
}
