import type { Metadata } from 'next';
import { AboutPage } from '@/modules/about';

export const metadata: Metadata = {
    title: 'About Mergex | One Ecosystem for Modern Businesses',
    description: 'Mergex is built for problems that don\'t fit neatly into boxes. We work across AI, software, content, automation, and growth as one connected system.',
};

export default function Page() {
    return <AboutPage />;
}
