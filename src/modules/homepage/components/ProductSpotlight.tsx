import Image from 'next/image';

export default function ProductSpotlight() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Gradient Border Container */}
                <div className="rounded-3xl bg-gradient-to-br from-primary via-purple-400 to-pink-400 p-1 shadow-2xl">
                    <div className="glass-strong rounded-[calc(1.5rem-1px)] p-8 md:p-14">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Content */}
                            <div className="flex-1 order-2 md:order-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-6">
                                    New from Mergex
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                                    Unisynk: Build Like a Team of Ten
                                </h2>
                                <p className="text-gray-700 font-body mb-8 text-lg md:text-xl leading-relaxed">
                                    Never build an integration from scratch again. Unisynk gives solo founders and small teams instant access to every major SaaS tool through one unified API—cutting development time by 70% so you can focus on what matters: your product.
                                </p>
                                <button className="h-12 px-8 rounded-xl bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30">
                                    Try Unisynk Free
                                </button>
                            </div>

                            {/* Product Visual */}
                            <div className="flex-1 w-full order-1 md:order-2 flex justify-center">
                                <div className="relative w-full max-w-lg aspect-square">
                                    <Image
                                        src="/assets/icons/unisynk-visual.png"
                                        alt="Unisynk API Integration"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
