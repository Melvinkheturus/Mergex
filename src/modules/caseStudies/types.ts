export interface Metric {
    label: string;
    value: string;
    prefix?: string;
    suffix?: string;
    description?: string;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    progressBar?: number;
    tag?: string;
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
    painPoints?: string[];
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
    layoutType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    title: string;
    subtitle: string;
    client: ClientInfo;
    heroImage: string;
    heroImageAlt: string;
    outcome: string;

    // Section Data
    problem: ProblemSection;
    stakes?: string[];
    strategy?: StrategyPoint[];
    execution?: ExecutionStep[];
    metrics?: Metric[];
    results?: Metric[];
    testimonial?: Testimonial;
    transformationResult?: {
        title: string;
        description: string;
    };
    growthVelocity?: {
        title: string;
        description: string;
        metrics: {
            label: string;
            value: string;
            trend: string;
            progressBar: number;
        }[];
    };

    // Meta
    categories: string[];
    techStack: string[];
    publishDate?: string;
    externalUrl?: string;

    // "Is This For You?" Filter
    fitCriteria?: {
        idealFor: string[];
        notIdealFor: string[];
    };
}
