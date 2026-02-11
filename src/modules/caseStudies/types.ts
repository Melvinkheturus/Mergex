export interface Metric {
    label: string;
    value: string;
    prefix?: string;
    suffix?: string;
    description?: string;
}

export interface Stat {
    label: string;
    value: string;
}

export interface ClientInfo {
    industry: string;
    location: string;
    companySize: string;
    service: string;
    website?: string;
}

export interface CaseStudySection {
    title: string;
    content: string | string[];
}

export interface ProblemSection {
    narrative: string;
    painPoints: string[];
}

export interface StrategyPoint {
    title: string;
    description: string;
    icon?: string;
}

export interface ExecutionStep {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
}

export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    client: ClientInfo;
    heroImage: string;
    heroImageAlt: string;
    outcome: string; // "From [pain] to [measurable outcome] in [timeframe]"

    // Section Data
    problem: ProblemSection;
    stakes: string[]; // Loss aversion bullet points
    strategy: StrategyPoint[];
    execution: ExecutionStep[];
    results: Metric[];
    testimonial?: Testimonial;

    // Meta
    categories: string[];
    techStack: string[];
    publishDate: string;

    // "Is This For You?" Filter
    fitCriteria: {
        idealFor: string[];
        notIdealFor: string[];
    };
}
