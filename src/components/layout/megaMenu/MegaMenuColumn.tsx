interface MegaMenuColumnProps {
    type: 'context' | 'content' | 'action';
    heading?: string;
    subheading?: string;
    children?: React.ReactNode;
}

export function MegaMenuColumn({ type, heading, subheading, children }: MegaMenuColumnProps) {
    return (
        <div className="space-y-4">
            {heading && (
                <div className="space-y-4">
                    <h3 className={`
                        uppercase tracking-wider font-bold
                        ${type === 'context' ? 'text-xs text-primary mb-2' : 'text-sm text-foreground'}
                    `}>
                        {heading}
                    </h3>
                    {subheading && (
                        <p className={`
                            leading-tight
                            ${type === 'context'
                                ? 'text-3xl md:text-4xl font-serif font-medium text-gray-900 !leading-[1.1] max-w-[300px]'
                                : 'text-sm text-gray-600 leading-relaxed'}
                        `}>
                            {subheading}
                        </p>
                    )}
                </div>
            )}
            {children && (
                <div className={type === 'content' ? 'space-y-3' : ''}>
                    {children}
                </div>
            )}
        </div>
    );
}
