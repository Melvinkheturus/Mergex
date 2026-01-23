export default function ResourcesHubPage() {
    return (
        <main className="pt-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">Resources</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Free templates, guides, and tools to help you build better.
                    </p>
                </div>

                {/* Placeholder - will be populated with resources module */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold mb-4">Templates</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Ready-to-use website templates, UI kits, and landing pages
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon</p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold mb-4">Free Resources</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Guides, playbooks, checklists, and case study PDFs
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon</p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold mb-4">For Builders</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Open-source tools, experiments, and frameworks
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
