export default function ProductSpotlight() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-white p-1 border border-primary/10 shadow-lg">
                    <div className="bg-white/60 backdrop-blur-xl rounded-xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-6">
                                New Product
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Unisynk: The Integration Engine
                            </h2>
                            <p className="text-gray-600 font-body mb-8 text-lg">
                                Stop building integrations from scratch. Unisynk provides a unified API for all your third-party SaaS tools, cutting development time by 70%.
                            </p>
                            <button className="h-10 px-6 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                                Try Unisynk Free
                            </button>
                        </div>

                        <div className="flex-1 w-full order-1 md:order-2 flex justify-center">
                            {/* Abstract product illustration */}
                            <div className="w-full max-w-sm aspect-square bg-white rounded-full shadow-2xl flex items-center justify-center relative">
                                <div className="absolute inset-4 border border-gray-100 rounded-full" />
                                <div className="absolute inset-12 border border-gray-100 rounded-full" />
                                <div className="w-24 h-24 bg-primary rounded-2xl rotate-12 flex items-center justify-center shadow-lg text-white">
                                    <span className="material-symbols-outlined text-5xl">sync</span>
                                </div>
                                {/* Floating icons around */}
                                <div className="absolute top-10 right-10 w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center text-blue-500">
                                    <span className="material-symbols-outlined">cloud</span>
                                </div>
                                <div className="absolute bottom-10 left-10 w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center text-green-500">
                                    <span className="material-symbols-outlined">database</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
