import { defineField, defineType } from 'sanity'
import { CreditCardIcon } from '@sanity/icons'

export const pricingBlockType = defineType({
    name: 'pricingBlock',
    title: 'Pricing Block',
    type: 'document',
    icon: CreditCardIcon,
    description: 'Pricing tier descriptions and positioning — NOT actual price numbers',
    groups: [
        { name: 'content', title: '📝 Content', default: true },
        { name: 'settings', title: '⚙️ Settings' },
    ],
    fields: [
        // ── Content ──
        defineField({
            name: 'tierName',
            title: 'Tier Name',
            type: 'string',
            group: 'content',
            description: 'e.g., "Starter", "Growth", "Enterprise"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: { source: 'tierName', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            group: 'content',
            description: 'What does this tier offer? One paragraph.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'engagementModel',
            title: 'Engagement Model',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'content',
            description: 'Explain how this engagement works (retainer, project-based, etc.)',
        }),
        defineField({
            name: 'featureHighlights',
            title: 'Feature Highlights',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'content',
            description: 'Bullet points of key features/benefits',
        }),
        defineField({
            name: 'idealFor',
            title: 'Ideal For',
            type: 'text',
            rows: 2,
            group: 'content',
            description: 'Who is this tier best suited for?',
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
            group: 'content',
            description: 'e.g., "Get Started", "Book a Call"',
        }),
        defineField({
            name: 'ctaLink',
            title: 'CTA Button Link',
            type: 'string',
            group: 'content',
        }),

        // ── Settings ──
        defineField({
            name: 'position',
            title: 'Position',
            type: 'number',
            group: 'settings',
            description: 'Order on the pricing page (lower = further left)',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'highlighted',
            title: 'Highlighted / Recommended',
            type: 'boolean',
            group: 'settings',
            description: 'Mark as "Popular" or "Recommended" — gets a visual highlight',
            initialValue: false,
        }),
        defineField({
            name: 'visible',
            title: 'Visible',
            type: 'boolean',
            group: 'settings',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'tierName',
            subtitle: 'description',
            highlighted: 'highlighted',
        },
        prepare({ title, subtitle, highlighted }) {
            return {
                title: `${highlighted ? '⭐ ' : ''}${title}`,
                subtitle: subtitle || 'No description',
            }
        },
    },
    orderings: [
        {
            title: 'Position',
            name: 'position',
            by: [{ field: 'position', direction: 'asc' }],
        },
    ],
})
