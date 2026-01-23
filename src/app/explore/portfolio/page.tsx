export default function PortfolioPage() {
    return (
        <main className="pt-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">Our Portfolio</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Visual proof of what we've built. From websites to platforms, see our work in action.
                    </p>
                </div>

                {/* Placeholder - Will be populated with portfolio module */}
                <div className="text-center py-20">
                    <p className="text-gray-500 dark:text-gray-400">
                        Portfolio grid coming soon - Module: `modules/portfolio/`
                    </p>
                </div>
            </div>
        </main>
    );
}
