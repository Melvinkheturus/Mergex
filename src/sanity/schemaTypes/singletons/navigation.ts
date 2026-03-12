import { defineField, defineType } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export const navigationType = defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: MenuIcon,
    description: 'Configure the site navigation — navbar links, footer columns, and CTA buttons',
    groups: [
        { name: 'navbar', title: '🧭 Navbar', default: true },
        { name: 'footer', title: '🦶 Footer' },
        { name: 'cta', title: '🎯 CTA Button' },
        { name: 'announcement', title: '📢 Announcement Bar' },
    ],
    fields: [
        // ── Navbar ──
        defineField({
            name: 'navbarLinks',
            title: 'Navbar Links',
            type: 'array',
            group: 'navbar',
            description: 'Main navigation links in the header. Drag to reorder.',
            of: [
                {
                    type: 'object',
                    name: 'navLink',
                    title: 'Nav Link',
                    fields: [
                        {
                            name: 'label',
                            type: 'string',
                            title: 'Link Text',
                            description: 'What the user sees (e.g., "About Us")',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'href',
                            type: 'string',
                            title: 'Link URL',
                            description: 'Where it goes — use /about for internal, https://... for external',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'isExternal',
                            type: 'boolean',
                            title: 'Opens in New Tab?',
                            description: 'Check this for links to other websites',
                            initialValue: false,
                        },
                    ],
                    preview: {
                        select: {
                            title: 'label',
                            subtitle: 'href',
                        },
                    },
                },
            ],
        }),

        // ── Footer ──
        defineField({
            name: 'footerColumns',
            title: 'Footer Link Columns',
            type: 'array',
            group: 'footer',
            description: 'Organize footer links into columns. Each column has a heading and list of links.',
            of: [
                {
                    type: 'object',
                    name: 'footerColumn',
                    title: 'Footer Column',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Column Heading',
                            description: 'e.g., "Platform", "Company", "Connect"',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'links',
                            type: 'array',
                            title: 'Links',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'label',
                                            type: 'string',
                                            title: 'Link Text',
                                            validation: (Rule) => Rule.required(),
                                        },
                                        {
                                            name: 'href',
                                            type: 'string',
                                            title: 'Link URL',
                                            validation: (Rule) => Rule.required(),
                                        },
                                        {
                                            name: 'isExternal',
                                            type: 'boolean',
                                            title: 'External Link?',
                                            initialValue: false,
                                        },
                                    ],
                                    preview: {
                                        select: {
                                            title: 'label',
                                            subtitle: 'href',
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                    preview: {
                        select: { title: 'heading' },
                    },
                },
            ],
        }),
        defineField({
            name: 'footerTagline',
            title: 'Footer Tagline',
            type: 'string',
            group: 'footer',
            description: 'Short text shown at the bottom of the footer (e.g., "© 2026 Mergex. All rights reserved.")',
        }),

        // ── CTA Button ──
        defineField({
            name: 'ctaButton',
            title: 'Primary CTA Button',
            type: 'object',
            group: 'cta',
            description: 'The main call-to-action button shown in the navbar',
            fields: [
                {
                    name: 'text',
                    type: 'string',
                    title: 'Button Text',
                    description: 'e.g., "Get Started", "Book a Call"',
                },
                {
                    name: 'link',
                    type: 'string',
                    title: 'Button Link',
                    description: 'Where clicking the button leads',
                },
                {
                    name: 'style',
                    type: 'string',
                    title: 'Button Style',
                    options: {
                        list: [
                            { title: 'Primary (filled)', value: 'primary' },
                            { title: 'Secondary (outline)', value: 'secondary' },
                            { title: 'Ghost (text only)', value: 'ghost' },
                        ],
                    },
                    initialValue: 'primary',
                },
            ],
        }),

        // ── Announcement Bar ──
        defineField({
            name: 'announcementBarEnabled',
            title: 'Show Announcement Bar',
            type: 'boolean',
            group: 'announcement',
            description: 'Toggle the top banner on/off site-wide',
            initialValue: false,
        }),
        defineField({
            name: 'announcementBarMessage',
            title: 'Announcement Message',
            type: 'string',
            group: 'announcement',
            description: 'Short message displayed in the top banner',
            hidden: ({ parent }) => !parent?.announcementBarEnabled,
        }),
        defineField({
            name: 'announcementBarLink',
            title: 'Announcement Link',
            type: 'string',
            group: 'announcement',
            description: 'Optional: clicking the banner goes to this URL',
            hidden: ({ parent }) => !parent?.announcementBarEnabled,
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Navigation',
                subtitle: 'Navbar, footer, and CTA configuration',
            }
        },
    },
})
