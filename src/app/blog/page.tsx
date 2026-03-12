export default function BlogPage() {
    return (
        <main className="pt-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">Blog & Insights</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Tech articles, AI insights, and build-in-public stories from the Mergex team
                    </p>
                </div>

                {/* Placeholder - Will be populated with blog module */}
                <div className="text-center py-20">
                    <p className="text-gray-500 dark:text-gray-400">
                        Blog posts coming soon - Module: `modules/blog/`
                    </p>
                </div>
            </div>
        </main>
    );
}
