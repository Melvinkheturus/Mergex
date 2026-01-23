export interface EcosystemCard {
    id: string;
    icon: string;
    iconBgColor: string;
    iconTextColor: string;
    title: string;
    description: string;
}

export interface WorkItem {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    category: string;
}

export interface CaseStudyMetric {
    id: string;
    value: string;
    label: string;
    colSpan?: 'full' | 'default';
}

export interface TrustedCompany {
    id: string;
    icon: string;
    name: string;
}

export interface ProblemItem {
    id: string;
    text: string;
}

export interface SolutionItem {
    id: string;
    text: string;
}
