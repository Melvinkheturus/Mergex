import { defineField, defineType } from 'sanity'
import { TransferIcon } from '@sanity/icons'

export const referralType = defineType({
    name: 'referral',
    title: 'Referral Submission',
    type: 'document',
    icon: TransferIcon,
    description: 'Referral tracking (Phase 1 — will move to Supabase later)',
    fields: [
        defineField({
            name: 'referrerName',
            title: 'Referrer Name',
            type: 'string',
            description: 'Who sent the referral?',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'referrerEmail',
            title: 'Referrer Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'referredName',
            title: 'Referred Person/Company',
            type: 'string',
            description: 'Who is being referred?',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'referredEmail',
            title: 'Referred Email',
            type: 'string',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'referredCompany',
            title: 'Referred Company',
            type: 'string',
        }),
        defineField({
            name: 'projectDetails',
            title: 'Project Details',
            type: 'text',
            rows: 4,
            description: 'What does the referred client need?',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: '⏳ Pending', value: 'pending' },
                    { title: '📞 Contacted', value: 'contacted' },
                    { title: '✅ Qualified', value: 'qualified' },
                    { title: '🎉 Converted', value: 'converted' },
                    { title: '❌ Not Qualified', value: 'not-qualified' },
                ],
            },
            initialValue: 'pending',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'notes',
            title: 'Internal Notes',
            type: 'text',
            rows: 3,
            description: '🔒 Only visible to your team',
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'referredName',
            referrer: 'referrerName',
            status: 'status',
        },
        prepare({ title, referrer, status }) {
            const statusEmoji: Record<string, string> = {
                pending: '⏳', contacted: '📞', qualified: '✅', converted: '🎉', 'not-qualified': '❌',
            }
            return {
                title: `${statusEmoji[status] || ''} ${title}`,
                subtitle: `Referred by ${referrer || 'Unknown'}`,
            }
        },
    },
})
