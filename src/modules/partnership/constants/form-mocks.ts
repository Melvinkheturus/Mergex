export const FORM_MOCKS: Record<string, any> = {
    'partner-apply': {
        title: 'Apply as a Partner',
        description: 'Join our ecosystem and let\'s build something great together.',
        submitButtonText: 'Submit Application',
        fields: [
            {
                label: 'Full Name',
                fieldName: 'name',
                fieldType: 'text',
                required: true,
                placeholder: 'John Doe'
            },
            {
                label: 'Work Email',
                fieldName: 'email',
                fieldType: 'email',
                required: true,
                placeholder: 'john@company.com'
            },
            {
                label: 'Company Name',
                fieldName: 'company',
                fieldType: 'text',
                required: false,
                placeholder: 'Your Company'
            },
            {
                label: 'Partnership Type',
                fieldName: 'partnershipType',
                fieldType: 'select',
                required: true,
                options: ['Strategic Partner', 'Referral Partner']
            },
            {
                label: 'Message',
                fieldName: 'message',
                fieldType: 'textarea',
                required: false,
                placeholder: 'Tell us about your interest...'
            }
        ]
    },
    'referral-form': {
        title: 'Refer a Client',
        description: 'Help your network grow with Mergex\'s expert solutions.',
        submitButtonText: 'Submit Referral',
        fields: [
            {
                label: 'Referrer\'s Name',
                fieldName: 'referrerName',
                fieldType: 'text',
                required: true,
                placeholder: 'Your Name'
            },
            {
                label: 'Referrer\'s Email',
                fieldName: 'referrerEmail',
                fieldType: 'email',
                required: true,
                placeholder: 'your@email.com'
            },
            {
                label: 'Referrer\'s Phone',
                fieldName: 'referrerPhone',
                fieldType: 'tel',
                required: true,
                placeholder: '+1 (555) 000-0000'
            },
            {
                label: 'Client Name',
                fieldName: 'clientName',
                fieldType: 'text',
                required: true,
                placeholder: 'Client Name'
            },
            {
                label: 'Client Phone',
                fieldName: 'clientPhone',
                fieldType: 'tel',
                required: false,
                placeholder: '+1 (555) 000-0000'
            },
            {
                label: 'Services',
                fieldName: 'services',
                fieldType: 'select',
                required: true,
                options: ['IT', 'DM', 'Automation', 'AI', 'Other']
            },
            {
                label: 'Client Business/Company',
                fieldName: 'clientBusiness',
                fieldType: 'text',
                required: false,
                placeholder: 'Client Company Name'
            },
            {
                label: 'Additional Message',
                fieldName: 'message',
                fieldType: 'textarea',
                required: false,
                placeholder: 'Any specific requirements or context...'
            }
        ]
    }
};
