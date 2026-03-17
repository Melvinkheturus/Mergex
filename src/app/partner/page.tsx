import type { Metadata } from 'next';
import { PartnerPageView } from '@/modules/partnership/components/PartnerPageView';

export const metadata: Metadata = {
    title: {
        absolute: 'Mergex - Build Together. Grow Together.'
    },
    description: 'Strategic partnerships and referral programs designed for growth. Build together, grow together with Mergex.',
    keywords: ['partnerships', 'referral program', 'strategic partnership', 'business growth', 'Mergex partner'],
    openGraph: {
        title: 'Mergex - Build Together. Grow Together.',
        description: 'Strategic partnerships and referral programs designed for growth.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mergex - Build Together. Grow Together.',
        description: 'Strategic partnerships and referral programs designed for growth.',
    },
};

export default function PartnerPage() {
    return <PartnerPageView />;
}
