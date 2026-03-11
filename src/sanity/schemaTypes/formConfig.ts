import { defineField, defineType } from 'sanity'
import { ControlsIcon } from '@sanity/icons'

export const formConfig = defineType({
    name: 'formConfig',
    title: 'Form Configuration',
    type: 'document',
    icon: ControlsIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Form Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'formId',
            title: 'Form ID',
            type: 'slug',
            description: 'Unique identifier for the form (e.g., "partner-apply", "referral-form")',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'fields',
            title: 'Form Fields',
            type: 'array',
            of: [{ type: 'formField' }],
        }),
        defineField({
            name: 'submitButtonText',
            title: 'Submit Button Text',
            type: 'string',
            initialValue: 'Submit Application',
        }),
        defineField({
            name: 'successMessage',
            title: 'Success Message',
            type: 'string',
            initialValue: 'Thank you! Your submission has been received.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            formId: 'formId.current',
        },
        prepare({ title, formId }) {
            return {
                title,
                subtitle: `ID: ${formId}`,
            }
        },
    },
})
