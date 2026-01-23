import { TRUSTED_COMPANIES } from '../constants';

export default function TrustStrip() {
    return (
        <section className="py-8 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">
                    Trusted by innovative teams worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {TRUSTED_COMPANIES.map((company) => (
                        <div
                            key={company.id}
                            className="flex items-center gap-2 text-xl font-bold text-black"
                        >
                            <span className="material-symbols-outlined">{company.icon}</span> {company.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
