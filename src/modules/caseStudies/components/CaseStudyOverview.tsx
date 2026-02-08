'use client';

import { StackedCaseCards } from './StackedCaseCards';
import { STACKED_CASE_STUDIES } from '../content/stackedCases';

export function CaseStudyOverview() {
    return (
        <StackedCaseCards
            cards={STACKED_CASE_STUDIES}
            sectionTitle="Systems That Deliver"
            sectionSubtitle="Real projects. Real outcomes. Real impact."
        />
    );
}

