import { CASE_STUDY_METRICS } from '../constants';

export default function CaseStudySection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="bg-gray-900 rounded-2xl p-8 md:p-16 text-white relative flex flex-col md:flex-row items-center gap-12">
                    {/* Background decorative element */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-r-2xl hidden md:block" />

                    <div className="flex-1 relative z-10">
                        <div className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">
                            Featured Case Study
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Redefining Payment Infrastructure for PayFlow
                        </h2>
                        <p className="text-gray-300 font-body mb-8 max-w-lg leading-relaxed">
                            We transformed a legacy payment gateway into a modern, API-first powerhouse. The result was a seamless integration experience for developers and instant settlement for merchants.
                        </p>
                        <a
                            className="inline-flex items-center text-white font-bold border-b border-white pb-1 hover:text-primary hover:border-primary transition-all"
                            href="#"
                        >
                            Read Full Story
                        </a>
                    </div>

                    <div className="flex-1 w-full relative z-10">
                        <div className="grid grid-cols-2 gap-4">
                            {CASE_STUDY_METRICS.map((metric) => (
                                <div
                                    key={metric.id}
                                    className={`bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 ${metric.colSpan === 'full' ? 'col-span-2' : ''
                                        }`}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm text-gray-400">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
