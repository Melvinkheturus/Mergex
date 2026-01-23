import type { EcosystemCard as EcosystemCardType } from '../types';

interface EcosystemCardProps {
    card: EcosystemCardType;
}

export default function EcosystemCard({ card }: EcosystemCardProps) {
    return (
        <div className="bg-white p-8 rounded-lg border border-transparent shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
            <div
                className={`w-12 h-12 rounded-lg ${card.iconBgColor} ${card.iconTextColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
                <span className="material-symbols-outlined text-2xl">{card.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-sm text-gray-500 font-body leading-relaxed">{card.description}</p>
        </div>
    );
}
