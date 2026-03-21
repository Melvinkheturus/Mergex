import type { Metadata } from 'next';
import { PartnerPageView } from '@/modules/partnership/components/PartnerPageView';

export const metadata: Metadata = {
    title: {
        absolute: 'Mergex - Build Together. Grow Together.'
    },
    description: 'Whether you’re an agency, consultant, or creator, Mergex is built for collaboration. Explore our partnership models: Service Partners, Referral Partners, and Brand Collaborators.',
    keywords: ['partnerships', 'referral program', 'strategic partnership', 'brand collaborators', 'Mergex partner'],
    openGraph: {
        title: 'Mergex - Build Together. Grow Together.',
        description: 'Whether you’re an agency, consultant, or creator, Mergex is built for collaboration.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mergex - Build Together. Grow Together.',
        description: 'Whether you’re an agency, consultant, or creator, Mergex is built for collaboration.',
    },
};

export default function PartnerPage() {
    return <PartnerPageView />;
}
