import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: CogIcon,
    description: 'Global site configuration — branding, contact, socials, SEO defaults',
    groups: [
        { name: 'branding', title: '🎨 Branding', default: true },
        { name: 'contact', title: '📞 Contact Info' },
        { name: 'social', title: '🔗 Social Media' },
        { name: 'seo', title: '🔍 SEO Defaults' },
    ],
    fields: [
        // ── Branding ──
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            group: 'branding',
            description: 'Your company name as displayed across the site (e.g., "Mergex")',
            initialValue: 'Mergex',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            group: 'branding',
            description: 'Short brand tagline shown in the footer or header (e.g., "Build. Scale. Dominate.")',
            validation: (Rule) => Rule.max(100),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            group: 'branding',
            description: 'Upload your main brand logo (SVG or PNG recommended)',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    initialValue: 'Mergex Logo',
                },
            ],
        }),
        defineField({
            name: 'logoDark',
            title: 'Logo (Dark Mode)',
            type: 'image',
            group: 'branding',
            description: 'Optional: alternate logo for dark backgrounds',
            options: { hotspot: true },
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            group: 'branding',
            description: 'Small icon shown in browser tabs (32×32 or 64×64 PNG)',
        }),

        // ── Contact Info ──
        defineField({
            name: 'email',
            title: 'Contact Email',
            type: 'string',
            group: 'contact',
            description: 'Primary business email shown on the site',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            group: 'contact',
            description: 'Include country code (e.g., +91 9876543210)',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
            rows: 3,
            group: 'contact',
            description: 'Full office address (optional)',
        }),

        // ── Social Media ──
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'object',
            group: 'social',
            description: 'Add your social media profile URLs',
            fields: [
                { name: 'linkedin', type: 'url', title: 'LinkedIn' },
                { name: 'twitter', type: 'url', title: 'Twitter / X' },
                { name: 'instagram', type: 'url', title: 'Instagram' },
                { name: 'github', type: 'url', title: 'GitHub' },
                { name: 'youtube', type: 'url', title: 'YouTube' },
            ],
        }),

        // ── SEO Defaults ──
        defineField({
            name: 'defaultSeo',
            title: 'Default SEO Settings',
            type: 'object',
            group: 'seo',
            description: 'Fallback SEO values used when pages don\'t have their own',
            fields: [
                {
                    name: 'metaTitleTemplate',
                    type: 'string',
                    title: 'Meta Title Template',
                    description: 'Use %s as placeholder for page title (e.g., "%s | Mergex")',
                    initialValue: '%s | Mergex',
                },
                {
                    name: 'metaDescription',
                    type: 'text',
                    title: 'Default Meta Description',
                    rows: 3,
                    description: 'Used when a page has no custom description (150-160 chars)',
                    validation: (Rule) => Rule.max(160),
                },
                {
                    name: 'ogImage',
                    type: 'image',
                    title: 'Default Open Graph Image',
                    description: 'Image shown when your site is shared on social media (1200×630 recommended)',
                },
            ],
        }),

        // ── Analytics (just IDs, not code) ──
        defineField({
            name: 'analyticsId',
            title: 'Google Analytics ID',
            type: 'string',
            group: 'seo',
            description: 'Your Google Analytics measurement ID (e.g., G-XXXXXXXXXX)',
        }),
        defineField({
            name: 'gtmId',
            title: 'Google Tag Manager ID',
            type: 'string',
            group: 'seo',
            description: 'Your GTM container ID (e.g., GTM-XXXXXXX)',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings',
                subtitle: 'Global configuration',
            }
        },
    },
})
