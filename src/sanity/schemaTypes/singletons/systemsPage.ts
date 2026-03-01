import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

/**
 * Systems Page Singleton
 * Maps to: src/modules/systems/content/systems.ts
 * Contains all section content for the Systems page
 */
export const systemsPageType = defineType({
    name: 'systemsPage',
    title: 'Systems Page',
    type: 'document',
    icon: CogIcon,
    description: 'Manage all content sections for the Systems (Solution Partner) page',
    groups: [
        { name: 'hero', title: '🦸 Hero', default: true },
        { name: 'whatWeSolve', title: '🎯 What We Solve' },
        { name: 'solutions', title: '💡 Solutions' },
        { name: 'speed', title: '⚡ Speed Advantage' },
        { name: 'process', title: '🔄 How We Work' },
        { name: 'proof', title: '🛠️ Tech Stack & Proof' },
        { name: 'engagement', title: '🤝 Engagement Models' },
        { name: 'cta', title: '📣 CTA' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        // ── Hero Section ──
        defineField({
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'text',
            rows: 2,
            group: 'hero',
            description: 'Main headline for the Systems hero section',
            validation: (Rule) => Rule.max(120),
        }),
        defineField({
            name: 'heroSubheadline',
            title: 'Hero Subheadline',
            type: 'string',
            group: 'hero',
            description: 'Supporting text under the hero headline',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'heroKeyDifferentiator',
            title: 'Key Differentiator',
            type: 'string',
            group: 'hero',
            description: 'e.g., "MVPs in weeks, not months"',
        }),
        defineField({
            name: 'heroEyebrow',
            title: 'Eyebrow Text',
            type: 'string',
            group: 'hero',
            description: 'Small text above the headline (e.g., "Mergex Systems · Software, Automation & Digital Infrastructure")',
        }),
        defineField({
            name: 'heroPrimaryCTA',
            title: 'Primary CTA Text',
            type: 'string',
            group: 'hero',
        }),
        defineField({
            name: 'heroSecondaryCTA',
            title: 'Secondary CTA Text',
            type: 'string',
            group: 'hero',
        }),

        // ── What We Solve ──
        defineField({
            name: 'whatWeSolveHeadline',
            title: 'Headline',
            type: 'string',
            group: 'whatWeSolve',
        }),
        defineField({
            name: 'whatWeSolveSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'whatWeSolve',
        }),
        defineField({
            name: 'whatWeSolvePrimaryCTA',
            title: 'Primary CTA Text',
            type: 'string',
            group: 'whatWeSolve',
        }),
        defineField({
            name: 'whatWeSolveProofCards',
            title: 'Proof Cards',
            type: 'array',
            group: 'whatWeSolve',
            description: 'Statistics and proof points (e.g., "20+ Projects delivered")',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', title: 'Type', options: { list: ['metric', 'text'] } },
                        { name: 'value', type: 'string', title: 'Value' },
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'value' },
                    },
                },
            ],
        }),

        // ── Our Solutions ──
        defineField({
            name: 'solutionsHeadline',
            title: 'Headline',
            type: 'string',
            group: 'solutions',
        }),
        defineField({
            name: 'solutionsSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'solutions',
        }),
        defineField({
            name: 'solutionsPillars',
            title: 'Solution Pillars',
            type: 'array',
            group: 'solutions',
            description: '5 core solution areas with capabilities and outcomes',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'navLabel', type: 'string', title: 'Nav Label' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'capabilities', type: 'array', title: 'Capabilities', of: [{ type: 'string' }] },
                        { name: 'outcomes', type: 'array', title: 'Outcomes', of: [{ type: 'string' }] },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'navLabel' },
                    },
                },
            ],
        }),

        // ── Speed Advantage ──
        defineField({
            name: 'speedHeadline',
            title: 'Headline',
            type: 'string',
            group: 'speed',
        }),
        defineField({
            name: 'speedSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'speed',
        }),
        defineField({
            name: 'speedTraditional',
            title: 'Traditional Timeline',
            type: 'string',
            group: 'speed',
            description: 'e.g., "3-6 months for an MVP"',
        }),
        defineField({
            name: 'speedMergex',
            title: 'Mergex Timeline',
            type: 'string',
            group: 'speed',
            description: 'e.g., "2-4 weeks, fully functional"',
        }),
        defineField({
            name: 'speedHowWeDoIt',
            title: 'How We Do It',
            type: 'array',
            group: 'speed',
            of: [{ type: 'string' }],
            description: 'List of reasons for speed advantage',
        }),

        // ── How We Work ──
        defineField({
            name: 'processHeadline',
            title: 'Headline',
            type: 'string',
            group: 'process',
        }),
        defineField({
            name: 'processSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'process',
        }),
        defineField({
            name: 'processPhases',
            title: 'Phases',
            type: 'array',
            group: 'process',
            description: '5-phase delivery system',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'number', type: 'string', title: 'Phase Number' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'timeframe', type: 'string', title: 'Timeframe' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'outcome', type: 'text', title: 'Outcome' },
                        { name: 'deliverables', type: 'array', title: 'Deliverables', of: [{ type: 'string' }] },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'timeframe' },
                        prepare({ title, subtitle }) {
                            return { title, subtitle: `⏱️ ${subtitle}` }
                        },
                    },
                },
            ],
        }),

        // ── Tech Stack & Proof ──
        defineField({
            name: 'techStackHeadline',
            title: 'Headline',
            type: 'string',
            group: 'proof',
        }),
        defineField({
            name: 'techStackSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'proof',
        }),
        defineField({
            name: 'techStack',
            title: 'Tech Stack Items',
            type: 'array',
            group: 'proof',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Technology Name' },
                        { name: 'category', type: 'string', title: 'Category', options: { list: ['Frontend', 'Backend', 'AI/ML', 'Analytics', 'Cloud', 'CI/CD', 'Monitoring'] } },
                        { name: 'descriptor', type: 'string', title: 'Descriptor' },
                    ],
                    preview: {
                        select: { title: 'name', subtitle: 'category' },
                    },
                },
            ],
        }),
        defineField({
            name: 'techStackTrustStatement',
            title: 'Trust Statement',
            type: 'text',
            rows: 3,
            group: 'proof',
        }),

        // ── Engagement Model ──
        defineField({
            name: 'engagementHeadline',
            title: 'Headline',
            type: 'string',
            group: 'engagement',
        }),
        defineField({
            name: 'engagementSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'engagement',
        }),
        defineField({
            name: 'engagementModels',
            title: 'Engagement Models',
            type: 'array',
            group: 'engagement',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'tagline', type: 'string', title: 'Tagline' },
                        { name: 'priceRange', type: 'string', title: 'Price Range' },
                        { name: 'duration', type: 'string', title: 'Duration' },
                        { name: 'includes', type: 'array', title: 'Includes', of: [{ type: 'string' }] },
                        { name: 'idealFor', type: 'text', title: 'Ideal For' },
                        { name: 'bestFor', type: 'string', title: 'Best For' },
                        { name: 'featured', type: 'boolean', title: 'Featured?', initialValue: false },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'priceRange' },
                    },
                },
            ],
        }),
        defineField({
            name: 'engagementPhilosophy',
            title: 'Pricing Philosophy',
            type: 'text',
            rows: 2,
            group: 'engagement',
        }),
        defineField({
            name: 'engagementCTA',
            title: 'Section CTA Text',
            type: 'string',
            group: 'engagement',
        }),

        // ── CTA ──
        defineField({
            name: 'ctaHeadline',
            title: 'CTA Headline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaSubheadline',
            title: 'CTA Subheadline',
            type: 'text',
            rows: 2,
            group: 'cta',
        }),
        defineField({
            name: 'ctaPrimaryCTA',
            title: 'Primary CTA Text',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaSecondaryCTA',
            title: 'Secondary CTA Text',
            type: 'string',
            group: 'cta',
        }),

        // ── SEO ──
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            group: 'seo',
            fields: [
                { name: 'metaTitle', type: 'string', title: 'Meta Title', validation: (Rule) => Rule.max(60) },
                { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3, validation: (Rule) => Rule.max(160) },
                { name: 'ogImage', type: 'image', title: 'Social Share Image' },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Systems Page',
                subtitle: 'Solution partner services & process',
            }
        },
    },
})
