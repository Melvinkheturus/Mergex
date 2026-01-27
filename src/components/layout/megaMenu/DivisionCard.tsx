import Link from 'next/link';

interface DivisionCardProps {
    name: string;
    tagline: string;
    features: string[];
    ctaText: string;
    ctaHref: string;
    accentColor: 'blue' | 'purple';
}

export function DivisionCard({ name, tagline, features, ctaText, ctaHref, accentColor }: DivisionCardProps) {
    const accentColors = {
        blue: {
            border: 'border-blue-200',
            bg: 'bg-blue-50',
            hoverBg: 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100',
            text: 'text-blue-600',
            ctaBg: 'bg-blue-600 hover:bg-blue-700',
        },
        purple: {
            border: 'border-purple-200',
            bg: 'bg-purple-50',
            hoverBg: 'hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100',
            text: 'text-purple-600',
            ctaBg: 'bg-purple-600 hover:bg-purple-700',
        }
    };

    const colors = accentColors[accentColor];

    return (
        <div className={`group p-6 rounded-xl border ${colors.border} ${colors.bg} ${colors.hoverBg} transition-all duration-300 hover:shadow-lg`}>
            <div className="space-y-4">
                {/* Header */}
                <div>
                    <h4 className={`text-lg font-bold ${colors.text} mb-1`}>
                        {name}
                    </h4>
                    <p className="text-sm font-medium text-gray-700">
                        {tagline}
                    </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    href={ctaHref}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${colors.ctaBg} text-white text-sm font-medium transition-all duration-200 hover:shadow-md group-hover:scale-[1.02]`}
                >
                    {ctaText}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
