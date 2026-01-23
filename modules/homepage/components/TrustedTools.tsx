export default function TrustedToolsSection() {
    const toolCategories = [
        {
            category: 'Frontend',
            tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            color: 'blue',
        },
        {
            category: 'Backend',
            tools: ['Node.js', 'Python', 'Express', 'FastAPI'],
            color: 'green',
        },
        {
            category: 'AI/ML',
            tools: ['OpenAI', 'Anthropic', 'LangChain', 'TensorFlow'],
            color: 'purple',
        },
        {
            category: 'Cloud & DevOps',
            tools: ['Vercel', 'AWS', 'Docker', 'GitHub Actions'],
            color: 'orange',
        },
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            blue: 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400',
            green: 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400',
            purple: 'bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400',
            orange: 'bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400',
        };
        return colors[color as keyof typeof colors] || colors.blue;
    };

    return (
        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                        Technologies & Platforms We Master
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
                        Built with confidence through association with industry-leading tools
                    </p>
                </div>

                {/* Tool Categories */}
                <div className="grid md:grid-cols-2 gap-8">
                    {toolCategories.map((category) => (
                        <div
                            key={category.category}
                            className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                        >
                            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100 font-display">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className={`px-4 py-2 rounded-lg border font-medium text-sm ${getColorClasses(category.color)}`}
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Technologies Note */}
                <div className="text-center mt-12">
                    <p className="text-base text-gray-600 dark:text-gray-400 font-body">
                        This is just a glimpse. We constantly evaluate and adopt new technologies that deliver value.
                    </p>
                </div>
            </div>
        </section>
    );
}
