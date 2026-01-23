import { ECOSYSTEM_CARDS } from '../constants';
import EcosystemCard from './EcosystemCard';

export default function EcosystemSnapshot() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ecosystem Snapshot</h2>
                        <p className="text-gray-600 max-w-xl font-body">
                            Our four pillars of innovation designed to cover every aspect of the digital lifecycle.
                        </p>
                    </div>
                    <a
                        className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
                        href="#"
                    >
                        View Full Ecosystem <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ECOSYSTEM_CARDS.map((card) => (
                        <EcosystemCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
