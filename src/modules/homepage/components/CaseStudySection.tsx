'use client';

import { StackedCaseCards } from '@/modules/caseStudies/components/StackedCaseCards';
import { STACKED_CASE_STUDIES } from '@/modules/caseStudies/content/stackedCases';

export default function CaseStudySection() {
    return (
        <StackedCaseCards
            cards={STACKED_CASE_STUDIES}
            sectionTitle="Featured Work"
            sectionSubtitle="Building systems that solve real problems"
        />
    );
}

