import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const careerRoleType = defineType({
    name: 'careerRole',
    title: 'Career Role',
    type: 'document',
    icon: UserIcon,
    description: 'Job postings and internship listings on the careers page',
    groups: [
        { name: 'role', title: '💼 Role Details', default: true },
        { name: 'requirements', title: '📋 Requirements' },
        { name: 'application', title: '📝 Application' },
    ],
    fields: [
        // ── Role Details ──
        defineField({
            name: 'roleTitle',
            title: 'Role Title',
            type: 'string',
            group: 'role',
            description: 'e.g., "Frontend Developer Intern", "Systems Analyst"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'role',
            options: { source: 'roleTitle', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'roleType',
            title: 'Role Type',
            type: 'string',
            group: 'role',
            options: {
                list: [
                    { title: '🎓 Internship', value: 'internship' },
                    { title: '💼 Full-time', value: 'fulltime' },
                    { title: '⏰ Part-time', value: 'parttime' },
                    { title: '📄 Contract', value: 'contract' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'division',
            title: 'Division',
            type: 'string',
            group: 'role',
            description: 'Which Mergex team is this role for?',
            options: {
                list: [
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems', value: 'systems' },
                    { title: 'Media', value: 'media' },
                    { title: 'Academy', value: 'academy' },
                    { title: 'General/All', value: 'general' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            group: 'role',
            description: 'e.g., "Remote", "Chennai", "Hybrid"',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            group: 'role',
            description: 'Only "Open" roles appear on the careers page',
            options: {
                list: [
                    { title: '🟢 Open', value: 'open' },
                    { title: '🔴 Closed', value: 'closed' },
                    { title: '🟡 On Hold', value: 'hold' },
                ],
                layout: 'radio',
            },
            initialValue: 'open',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Role Description',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'role',
            description: 'Overview of what this role involves',
        }),

        // ── Requirements ──
        defineField({
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'requirements',
            description: 'What will this person be doing? Add bullet points.',
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'requirements',
            description: 'Must-have skills and qualifications',
        }),
        defineField({
            name: 'niceToHave',
            title: 'Nice to Have',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'requirements',
            description: 'Bonus skills — not required but preferred',
        }),

        // ── Application ──
        defineField({
            name: 'applicationInstructions',
            title: 'Application Instructions',
            type: 'text',
            rows: 3,
            group: 'application',
            description: 'Tell candidates how to apply',
        }),
        defineField({
            name: 'applicationUrl',
            title: 'Application Form URL',
            type: 'url',
            group: 'application',
            description: 'External form link (Notion, Tally, Google Forms, etc.)',
        }),
        defineField({
            name: 'postedAt',
            title: 'Posted Date',
            type: 'datetime',
            group: 'application',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'roleTitle',
            division: 'division',
            status: 'status',
            roleType: 'roleType',
        },
        prepare({ title, division, status, roleType }) {
            const statusEmoji = status === 'open' ? '🟢' : status === 'closed' ? '🔴' : '🟡'
            const typeLabel = roleType === 'internship' ? 'Intern' : roleType === 'fulltime' ? 'FT' : roleType === 'parttime' ? 'PT' : 'Contract'
            return {
                title: `${statusEmoji} ${title}`,
                subtitle: `${division || 'General'} · ${typeLabel}`,
            }
        },
    },
})
