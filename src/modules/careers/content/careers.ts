// Careers Page Content
// Signal page to attract builders, not job hunters

export const CAREERS_HERO = {
    headline: 'Build Systems. Learn Fast. Grow With Intent.',
    subheadline: 'Mergex is a solution partner helping businesses build and scale through technology, AI, and systems. We\'re building a team that values clarity, ownership, and curiosity.',
    primaryCTA: 'View Opportunities',
    secondaryCTA: 'Explore Internships',
} as const;

export const WHAT_WORKING_MEANS = {
    headline: 'What Working at Mergex Means',
    subheadline: 'How work actually happens here—no buzzwords, just principles.',
    principles: [
        {
            title: 'We care about why before what',
            description: 'Understanding the problem is more valuable than rushing to solutions. We ask questions before writing code.',
        },
        {
            title: 'We build MVPs in weeks, not months',
            description: 'Speed without sloppiness. We ship fast, iterate based on real feedback, and avoid over-engineering.',
        },
        {
            title: 'We value clear thinking over loud opinions',
            description: 'Good ideas can come from anyone. What matters is the reasoning, not the seniority or volume.',
        },
        {
            title: 'We avoid unnecessary complexity',
            description: 'Simple solutions that work beat elaborate systems that impress. Elegance comes from restraint.',
        },
    ],
} as const;

export const HOW_WE_WORK = {
    headline: 'How We Work',
    subheadline: 'This is not a place where you wait for instructions.',
    workingPrinciples: [
        {
            title: 'Problem-First Thinking',
            description: 'Every project starts with deep understanding. We don\'t build features—we solve business problems.',
            icon: 'lightbulb',
        },
        {
            title: 'Small, Fast Iterations',
            description: 'Weekly demos. Continuous refinement. We learn by shipping, not by planning endlessly.',
            icon: 'zap',
        },
        {
            title: 'Ownership Over Task-Taking',
            description: 'You\'re not executing tickets. You own outcomes. That means thinking ahead, asking questions, and taking initiative.',
            icon: 'shield',
        },
        {
            title: 'Learning Through Real Projects',
            description: 'No dummy work. From day one, you contribute to real client systems, AI workflows, and product launches.',
            icon: 'trending-up',
        },
    ],
} as const;

export const CAREER_PATHS = {
    headline: 'Career Paths at Mergex',
    subheadline: 'We\'re selective about who we build with. Quality over quantity.',
    paths: [
        {
            id: 'full-time',
            title: 'Full-Time Roles',
            tagline: 'Currently Selective',
            icon: 'briefcase',
            description: 'We hire full-time team members who want to grow with Mergex long-term. These roles involve deep ownership, cross-functional work, and direct impact on client outcomes.',
            roles: [
                'Engineers (Full-Stack, Backend, Frontend)',
                'Designers (UI/UX, Product Design)',
                'AI & Automation Specialists',
                'Growth & Marketing',
            ],
            status: 'Opening roles as we scale. Check back regularly.',
            ctaText: 'Apply for Full-Time',
            ctaLink: '#apply',
        },
        {
            id: 'internships',
            title: 'Internships',
            tagline: 'Hands-On Learning',
            icon: 'users',
            description: 'Our internships are not coffee-fetching programs. You\'ll work on real projects, get mentorship, and build systems that ship to actual users.',
            whoItsFor: [
                'Students & early-career builders',
                'People who want hands-on experience, not theory',
                'Self-starters who learn by doing',
            ],
            whatTheyGet: [
                'Real projects (not dummy tasks)',
                'Exposure to systems, AI, and modern stacks',
                'Mentorship & actionable feedback',
                'Portfolio-worthy work',
            ],
            whatWeExpect: [
                'Curiosity and willingness to ask questions',
                'Commitment to learning fast',
                'Ownership over your work',
            ],
            status: 'Open on a rolling basis.',
            ctaText: 'Apply for Internship',
            ctaLink: '#apply',
        },
        {
            id: 'contributors',
            title: 'External Contributors',
            tagline: 'Invitation-Based',
            icon: 'git-branch',
            description: 'We occasionally collaborate with specialized external contributors for project-specific needs. This is invitation-based and behind-the-scenes.',
            howItWorks: [
                'Invitation-based (not open application)',
                'Project-specific engagements',
                'Clients always work with Mergex, not individual contributors',
            ],
            note: 'This protects our brand authority while allowing flexibility for specialized expertise.',
            status: 'Not currently accepting applications.',
            ctaText: 'Join Talent Network',
            ctaLink: '#talent-network',
        },
        {
            id: 'future',
            title: 'Future Opportunities',
            tagline: 'As We Scale',
            icon: 'rocket',
            description: 'As Mergex grows, we\'ll open more roles across engineering, AI, systems design, and go-to-market functions.',
            note: 'No promises. No hype. Just intentional growth.',
            status: 'Follow our journey.',
            ctaText: 'Stay Updated',
            ctaLink: '#newsletter',
        },
    ],
} as const;

export const LEARNING_GROWTH = {
    headline: 'Learning & Growth',
    subheadline: 'What you actually gain by working here.',
    benefits: [
        {
            title: 'Learning by Building Real Systems',
            description: 'You\'ll ship MVPs, automate workflows, and design AI systems—not toy projects. Real stakes, real learning.',
        },
        {
            title: 'Exposure to AI, Automation, and Modern Stacks',
            description: 'Work with cutting-edge tools: Next.js, AI APIs, automation platforms, cloud infrastructure. Stay ahead of the curve.',
        },
        {
            title: 'Cross-Domain Understanding',
            description: 'Learn how tech intersects with business. Understand client needs, delivery timelines, and outcome-driven development.',
        },
        {
            title: 'Mentorship from Experienced Builders',
            description: 'Get direct feedback from people who\'ve built and shipped systems at scale. No corporate bureaucracy.',
        },
    ],
    disclaimer: 'No certifications. No guaranteed placements. Just real skills from real work.',
} as const;

export const WHAT_WE_DONT_OFFER = {
    headline: 'What We Don\'t Offer',
    subheadline: 'Honesty over hype.',
    items: [
        'No micromanagement—we trust you to own your work',
        'No meaningless busywork—every task has a purpose',
        'No fake urgency—we move fast, but with intention',
        'No politics-driven growth—your work speaks louder than office games',
    ],
} as const;

export const HOW_TO_APPLY = {
    headline: 'How to Apply',
    subheadline: 'Keep it simple. We care about your thinking, not your résumé formatting.',
    applicationTypes: [
        {
            type: 'Full-Time Roles',
            description: 'Tell us what you\'ve built, why Mergex, and what you want to work on.',
            ctaText: 'Apply Now',
            ctaLink: '#full-time-form',
        },
        {
            type: 'Internships',
            description: 'Share your background, what you want to learn, and why you\'re curious about systems and AI.',
            ctaText: 'Apply Now',
            ctaLink: '#internship-form',
        },
        {
            type: 'Talent Network',
            description: 'Share your expertise and portfolio. We\'ll reach out if there\'s a fit.',
            ctaText: 'Join Network',
            ctaLink: '#talent-network-form',
        },
    ],
    note: 'We review every application thoughtfully. If there\'s a fit, we\'ll reach out within 2 weeks.',
} as const;

export const FINAL_NOTE = {
    message: 'We\'re still growing, and we\'re intentional about who we build with. If you\'re curious, thoughtful, and willing to learn by doing—we\'d like to hear from you.',
} as const;
