import type { EcosystemCard, WorkItem, CaseStudyMetric, TrustedCompany, ProblemItem, SolutionItem } from './types';

export const NAVIGATION_LINKS = [
    { label: 'Solutions', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Academy', href: '#' },
    { label: 'About', href: '#' },
] as const;

export const TRUSTED_COMPANIES: TrustedCompany[] = [
    { id: '1', icon: 'pentagon', name: 'Acme Corp' },
    { id: '2', icon: 'diamond', name: 'GemTech' },
    { id: '3', icon: 'token', name: 'BlockSys' },
    { id: '4', icon: 'polyline', name: 'Vertex' },
    { id: '5', icon: 'hub', name: 'Nexus' },
];

export const ECOSYSTEM_CARDS: EcosystemCard[] = [
    {
        id: 'software-core',
        icon: 'terminal',
        iconBgColor: 'bg-blue-50',
        iconTextColor: 'text-blue-600',
        title: 'Software Core',
        description: 'Custom enterprise development and scalable cloud architectures tailored for high-growth.',
    },
    {
        id: 'mergex-labs',
        icon: 'science',
        iconBgColor: 'bg-purple-50',
        iconTextColor: 'text-primary',
        title: 'Mergex Labs',
        description: 'Experimental R&D division focusing on AI, Machine Learning, and predictive analytics.',
    },
    {
        id: 'saas-ventures',
        icon: 'rocket_launch',
        iconBgColor: 'bg-green-50',
        iconTextColor: 'text-green-600',
        title: 'SaaS Ventures',
        description: 'Incubating and launching internal SaaS products to solve specific market gaps.',
    },
    {
        id: 'tech-academy',
        icon: 'school',
        iconBgColor: 'bg-orange-50',
        iconTextColor: 'text-orange-600',
        title: 'Tech Academy',
        description: 'Upskilling the next generation of engineers with our proprietary curriculum.',
    },
];

export const PROBLEMS: ProblemItem[] = [
    { id: '1', text: 'Fragmented development teams' },
    { id: '2', text: 'Opaque pricing & timelines' },
    { id: '3', text: 'Tech debt from day one' },
];

export const SOLUTIONS: SolutionItem[] = [
    { id: '1', text: 'Unified ecosystem approach' },
    { id: '2', text: 'Clear milestones & scalable architecture' },
    { id: '3', text: 'Future-proof code standards' },
];

export const FEATURED_WORK: WorkItem[] = [
    {
        id: 'nova-finance',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq6F2Giz_c5WPOMSQLo7rCdWwUPAoKCK4yZbjJ2PyN9Yk5Bn0P3vfkcUFFyNp8Q_-aGfeYxsqZdLdKZdoZco30QB53K8eYmVZ_bXcQ0y4v7yVwEUJ1m3seBeOWMvG98Awg5ui-g_vZ51ci6uopbLacnDxNQRe_CV3dg4ip8ZdafTx8X1yP5byjgKDw3DACZZHTowa3jGfPIIQgexccrwGUFfwImav-Gg8aKFTK0foWTticfiMMovb6dFIyePxaa2tZP4ImuydOPPE',
        imageAlt: 'Dark mode fintech dashboard interface with data charts',
        title: 'Nova Finance',
        category: 'Mobile Banking App • UX/UI',
    },
    {
        id: 'core-ai',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5Mn7fChsx716YyuMaupteAeKS5TNf495Su2fv8Ka93fc5mqlDopFrbFDyIFSmddykfv7ETntr5yMPjU540oLiZUtS9b7sYaRgdUfC2H2MxyMy8qt-YXND4xwO1ZOVHXP6Epr12FJX_61p_QhrAjk_tQ6klDTPJuOuP43br7eGLA5lMe8T8xqFyG-KNd62FEBC1X_B5vmuJhLLUcordd7JU4o_nPFqsdJwF3PPAzXqrNle4IiJOcBCS_YLLxgiiW6p1GdQjbkTjU8',
        imageAlt: 'Abstract visualization of AI data nodes and connections',
        title: 'Core AI',
        category: 'Data Visualization Platform • SaaS',
    },
    {
        id: 'vital-sync',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPlqwWxEGs6E8jSzU5FEi_B1uhgjLdUX6tJSyJi8cJ5MlmKdcQq3G8POt8f2wNCTuvOxguLzMUkqZbwuJOD-O5cch8XApea3qp4iL-reoEwuAsO1X2jpVLMWMwiB2ESwWT2SFX5nFtujrIQn47uRzWEOeFXz0HhRebbby-fGZpzltjDPT6xIvziiZ2VpaAmba00n48DFBnyXUtxc2w_lJ9-LqchjFyN8w-OmTPtkhpYkzQc3FkCryYDDNHAVoiwWTyzKbKaUP0crA',
        imageAlt: 'Clean minimal interface for health wearable tracking',
        title: 'Vital Sync',
        category: 'Healthcare Wearable • IoT',
    },
];

export const CASE_STUDY_METRICS: CaseStudyMetric[] = [
    { id: 'retention', value: '+200%', label: 'User Retention' },
    { id: 'processing', value: '3x', label: 'Faster Processing' },
    { id: 'monthly', value: '$50M', label: 'Processed Monthly', colSpan: 'full' },
];

export const FOOTER_LINKS = {
    platform: [
        { label: 'Software Core', href: '#' },
        { label: 'Mergex Labs', href: '#' },
        { label: 'SaaS Ventures', href: '#' },
        { label: 'Unisynk', href: '#' },
    ],
    company: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
    ],
    connect: [
        { label: 'Twitter / X', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'GitHub', href: '#' },
    ],
} as const;
