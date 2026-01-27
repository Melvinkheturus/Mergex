import Link from 'next/link';

interface ProductCardProps {
    name: string;
    description: string;
    status: 'Live' | 'Beta' | 'Coming Soon';
    href?: string;
    icon?: React.ReactNode;
}

export function ProductCard({ name, description, status, href, icon }: ProductCardProps) {
    const statusColors = {
        'Live': 'bg-green-100 text-green-700 border-green-200',
        'Beta': 'bg-blue-100 text-blue-700 border-blue-200',
        'Coming Soon': 'bg-gray-100 text-gray-600 border-gray-200'
    };

    const content = (
        <div className="group relative p-5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-md cursor-pointer">
            {icon && (
                <div className="mb-3 text-primary">
                    {icon}
                </div>
            )}
            <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {name}
                </h4>
                <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${statusColors[status]} whitespace-nowrap`}>
                    {status}
                </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );

    if (href && status !== 'Coming Soon') {
        return (
            <Link href={href} className="block">
                {content}
            </Link>
        );
    }

    return content;
}
