import type { Metadata } from 'next';
import ContactPageContent from '@/modules/contact/components/ContactPageContent';

export const metadata: Metadata = {
    title: 'Contact — Let\'s Build Something That Scales',
    description: 'Tell us about your project, challenge, or idea. If there\'s a system to build, we\'ll help architect it.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background relative pt-32 pb-24 overflow-hidden">
            {/* Subtle background glow effect matching Mergex theme */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none -z-10" />

            <ContactPageContent />
        </main>
    );
}
