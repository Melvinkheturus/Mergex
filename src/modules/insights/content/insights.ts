// Insights Module - Static Content

export const INSIGHTS_HERO = {
    eyebrow: 'Mergex Intelligence',
    headline: 'Ideas Behind\nEngineered Scale',
    subtext:
        'Short explorations on systems, AI, automation, and growth architecture - built for builders, not casual readers.',
    microLine: 'Written for humans. Structured for machines.',
};

export const FEATURED_THINKING = [
    {
        id: 'architecture-of-engineered-scale',
        title: 'The Architecture of Engineered Scale',
        description:
            'Our core philosophy - how businesses move from chaos to compounding systems.',
        format: 'framework' as const,
        category: 'Systems',
        color: 'purple',
    },
    {
        id: 'fragmentation-problem',
        title: 'Why a Scattered Tool Ecosystem Kills Growth',
        description:
            'The hidden cost of stitching together 10 vendors when one system does the work.',
        format: 'strategic-note' as const,
        category: 'Scaling',
        color: 'blue',
    },
    {
        id: 'ai-creative-systems',
        title: 'AI Creative Systems Explained',
        description:
            'How generative AI changes the economics of content, brand, and production.',
        format: 'experiment' as const,
        category: 'AI',
        color: 'green',
    },
];

export const QUICK_TAKES = [
    'AI won\'t replace creativity - but it will replace slow creators.',
    'Most businesses don\'t need marketing. They need systems.',
    'Automation without architecture creates chaos at scale.',
    'The agency model is dying. Systems-led companies are winning.',
    'Your biggest competitive moat is speed of iteration, not budget.',
    'A scattered network of tools and partners is the #1 invisible tax on growing businesses.',
];

export const FORMAT_FILTERS = [
    { label: 'All', value: 'all' },
    { label: 'Frameworks', value: 'framework' },
    { label: 'Case Insights', value: 'case-insight' },
    { label: 'Experiments', value: 'experiment' },
    { label: 'Strategic Notes', value: 'strategic-note' },
];

export const CATEGORY_FILTERS = [
    'All',
    'Systems',
    'AI',
    'Automation',
    'Creative',
    'Scaling',
];

// Placeholder insights - shown when Sanity has no posts yet
export const PLACEHOLDER_INSIGHTS = [
    {
        _id: 'p1',
        title: 'The 0 → 1 → N Growth Architecture',
        slug: { current: 'growth-architecture' },
        excerpt:
            'How to think about building a business in three distinct phases - each requiring a completely different operating model.',
        insightFormat: 'framework' as const,
        categories: ['systems', 'scaling'],
        publishedAt: '2026-03-01T00:00:00Z',
        tldr: 'Phase 0 is survival, Phase 1 is repeatability, Phase N is leverage.',
        author: { name: 'Mergex Systems', role: 'Architecture Team' },
        readTime: '5 min read',
    },
    {
        _id: 'p2',
        title: 'What We Learned Building an AI Ad System',
        slug: { current: 'ai-ad-system-lessons' },
        excerpt:
            'Three months, two pivots, and one insight: the bottleneck isn\'t generation, it\'s curation.',
        insightFormat: 'case-insight' as const,
        categories: ['ai', 'creative'],
        publishedAt: '2026-02-20T00:00:00Z',
        tldr: 'Generating AI ads is easy. Knowing which ones work is the hard part.',
        author: { name: 'Mergex Labs', role: 'Creative AI Team' },
        readTime: '4 min read',
    },
    {
        _id: 'p3',
        title: 'AI Avatars vs Human Influencers',
        slug: { current: 'ai-avatars-vs-human-influencers' },
        excerpt:
            'We ran a 6-week test. The results surprised everyone - including us.',
        insightFormat: 'experiment' as const,
        categories: ['ai', 'creative', 'media'],
        publishedAt: '2026-02-10T00:00:00Z',
        tldr: 'AI avatars outperform humans in retention. Humans win on trust.',
        author: { name: 'Mergex Labs', role: 'Experiments' },
        readTime: '6 min read',
    },
    {
        _id: 'p4',
        title: 'Agencies Are Dying. Systems Are Winning.',
        slug: { current: 'agencies-dying-systems-winning' },
        excerpt:
            'A blunt take on why the traditional agency model can\'t survive the next decade of AI.',
        insightFormat: 'strategic-note' as const,
        categories: ['systems', 'ai'],
        publishedAt: '2026-02-01T00:00:00Z',
        tldr: 'Leverage beats headcount every time.',
        author: { name: 'Mergex Systems', role: 'Strategy' },
        readTime: '3 min read',
    },
    {
        _id: 'p5',
        title: 'The Business DNA Audit Framework',
        slug: { current: 'business-dna-audit' },
        excerpt:
            'Before we write a single line of code, we map the DNA of your business. Here\'s precisely how.',
        insightFormat: 'framework' as const,
        categories: ['systems', 'automation'],
        publishedAt: '2026-01-25T00:00:00Z',
        tldr: 'Systems that don\'t match your DNA will be rejected like a bad organ transplant.',
        author: { name: 'Mergex Systems', role: 'Architecture Team' },
        readTime: '7 min read',
    },
    {
        _id: 'p6',
        title: 'Why Most Automation Projects Fail',
        slug: { current: 'why-automation-fails' },
        excerpt:
            'It\'s almost never the technology. It\'s the absence of a process worth automating.',
        insightFormat: 'case-insight' as const,
        categories: ['automation', 'systems'],
        publishedAt: '2026-01-15T00:00:00Z',
        tldr: 'Automating chaos creates faster chaos.',
        author: { name: 'Mergex Systems', role: 'Systems Team' },
        readTime: '5 min read',
    },
];

export const FORMAT_META: Record<string, { label: string; color: string; bg: string; border: string }> = {
    framework: {
        label: 'Framework',
        color: 'text-violet-700',
        bg: 'bg-violet-50',
        border: 'border-violet-200',
    },
    'case-insight': {
        label: 'Case Insight',
        color: 'text-orange-700',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
    },
    experiment: {
        label: 'Experiment',
        color: 'text-emerald-700',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
    },
    'strategic-note': {
        label: 'Strategic Note',
        color: 'text-sky-700',
        bg: 'bg-sky-50',
        border: 'border-sky-200',
    },
};

export const ASK_MERGEX = {
    welcome:
        'Welcome to Mergex Intelligence. Ask me anything about business systems, AI workflows, automation, or scaling strategy.',
    suggestions: [
        'How can AI improve marketing workflows?',
        'When should a startup automate?',
        'What is business architecture?',
        'What does Mergex Systems do?',
        'How to fix vendor ecosystem chaos?',
    ],
    systemPrompt: `You are Mergex Intelligence - an AI assistant representing Mergex, a company that builds engineered business systems, AI-powered creative tools (Labs), and scalable software ecosystems.

You help founders, CTOs, and operators understand:
- Business systems architecture
- AI content and creative workflows  
- Automation strategy (when to automate, when not to)
- Scaling from 0→1→N
- Why a complex vendor ecosystem kills growth
- How Mergex Systems, Labs, and Software can help

Always give structured, direct answers. Think like a senior systems architect who also understands growth strategy. Reference Mergex frameworks and philosophy where relevant.

End answers with a natural invitation to discuss further if the topic relates to what Mergex can build.`,
};
