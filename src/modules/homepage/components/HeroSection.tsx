export default function HeroSection() {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* Orb Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] orb-gradient -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-10 text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    The Future Ecosystem
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl mb-6">
                    Architecting the <br />
                    <span className="text-primary">Future of Tech</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-body">
                    We build ecosystems, not just software. Bridging the gap between concept and scalable reality with AI-driven development and strategic innovation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button className="h-12 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        Book Strategy Call
                    </button>
                    <button className="h-12 px-8 rounded-lg bg-white border border-gray-200 text-gray-900 text-base font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        Explore What We Do
                        <span className="material-symbols-outlined text-sm">arrow_downward</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
