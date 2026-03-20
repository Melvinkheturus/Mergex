// Mergex Legal Content
// Privacy Policy, Terms of Use, Cookie Policy, Disclaimer

export interface LegalSection {
    title: string;
    content: string | string[];
}

export interface LegalPolicy {
    id: string;
    label: string;
    lastUpdated: string;
    sections: LegalSection[];
}

export const LEGAL_CONTENT: LegalPolicy[] = [
    {
        id: 'privacy',
        label: 'Privacy Policy',
        lastUpdated: 'March 20, 2026',
        sections: [
            {
                title: 'At Mergex, we respect your privacy and are committed to protecting your data.',
                content: ''
            },
            {
                title: '1. Information We Collect',
                content: [
                    'Name, email address, phone number',
                    'Business details you share',
                    'Messages submitted via forms or chatbot',
                    'Usage data (pages visited, interactions)'
                ]
            },
            {
                title: '2. How We Use Your Information',
                content: [
                    'Respond to inquiries',
                    'Provide services and support',
                    'Improve our website and systems',
                    'Communicate updates or relevant information'
                ]
            },
            {
                title: '3. Data Sharing',
                content: [
                    'We do not sell your data.',
                    'We may share data with trusted tools/services for: Analytics, Communication, Hosting and infrastructure'
                ]
            },
            {
                title: '4. Cookies & Tracking',
                content: 'We use cookies to understand user behavior, improve experience, and measure performance. (See Cookie Policy for details)'
            },
            {
                title: '5. Data Security',
                content: 'We take reasonable measures to protect your data. However, no system is 100% secure.'
            },
            {
                title: '6. Your Rights',
                content: 'You may request to access, update or delete your data. Contact: hello@mergex.in'
            },
            {
                title: '7. Updates',
                content: 'We may update this policy periodically. Continued use means acceptance.'
            }
        ]
    },
    {
        id: 'terms',
        label: 'Terms of Use',
        lastUpdated: 'March 20, 2026',
        sections: [
            {
                title: 'By accessing Mergex, you agree to the following terms.',
                content: ''
            },
            {
                title: '1. Use of Website',
                content: [
                    'Use the site lawfully',
                    'Not misuse or attempt to disrupt services'
                ]
            },
            {
                title: '2. Intellectual Property',
                content: 'All content (design, text, systems, visuals) belongs to Mergex. You may not copy, reuse, or distribute without permission.'
            },
            {
                title: '3. Service Nature',
                content: [
                    'Business systems',
                    'Software & automation',
                    'AI-enabled solutions',
                    'All services are customized based on client requirements.'
                ]
            },
            {
                title: '4. No Guarantees',
                content: [
                    'We aim for high-quality outcomes.',
                    'However, we do not guarantee specific business results, revenue or growth outcomes.'
                ]
            },
            {
                title: '5. Limitation of Liability',
                content: [
                    'Mergex is not liable for indirect or consequential losses.',
                    'Mergex is not liable for business decisions made based on our services.'
                ]
            },
            {
                title: '6. Third-Party Tools',
                content: 'We may use third-party tools. We are not responsible for their policies or performance.'
            },
            {
                title: '7. Changes',
                content: 'We may update these terms at any time.'
            }
        ]
    },
    {
        id: 'cookies',
        label: 'Cookie Policy',
        lastUpdated: 'March 20, 2026',
        sections: [
            {
                title: 'Mergex uses cookies to improve your experience.',
                content: ''
            },
            {
                title: '1. What Are Cookies?',
                content: 'Cookies are small files stored on your device to track activity.'
            },
            {
                title: '2. How We Use Cookies',
                content: [
                    'Analyze traffic and usage',
                    'Improve performance',
                    'Personalize experience'
                ]
            },
            {
                title: '3. Types of Cookies',
                content: [
                    'Essential – Required for site functionality',
                    'Analytics – Understand user behavior',
                    'Performance – Improve speed and usability'
                ]
            },
            {
                title: '4. Managing Cookies',
                content: 'You can control cookies through your browser settings. Disabling cookies may affect functionality.'
            },
            {
                title: '5. Updates',
                content: 'We may update this policy as needed.'
            }
        ]
    },
    {
        id: 'disclaimer',
        label: 'Disclaimer',
        lastUpdated: 'March 20, 2026',
        sections: [
            {
                title: 'Mergex provides services designed to support business growth through systems, technology, and AI.',
                content: ''
            },
            {
                title: '1. No Guaranteed Outcomes',
                content: [
                    'Results vary based on market conditions, execution, and business decisions.',
                    'We do not guarantee revenue, growth, or specific outcomes.'
                ]
            },
            {
                title: '2. AI & Automation',
                content: [
                    'Some solutions involve AI and automation.',
                    'Outputs may vary; results are assisted, not absolute.',
                    'Human review is recommended.'
                ]
            },
            {
                title: '3. Informational Use',
                content: 'Content on this website is for general information only. It should not be considered professional or financial advice.'
            },
            {
                title: '4. External Links',
                content: 'We may link to third-party platforms. We are not responsible for their content or practices.'
            },
            {
                title: '5. Responsibility',
                content: 'Clients are responsible for final decisions and implementation outcomes.'
            }
        ]
    }
];
