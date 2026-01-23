export default function TechStackSection() {
    const techStack = [
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Python', category: 'Backend' },
        { name: 'Supabase', category: 'Database' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'OpenAI', category: 'AI/ML' },
        { name: 'Anthropic', category: 'AI/ML' },
        { name: 'Vercel', category: 'Cloud' },
        { name: 'AWS', category: 'Cloud' },
    ];

    return (
        <section id="tech-stack" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                        Built With Tools Trusted by Modern Teams
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 font-body">
                        Enterprise-grade tech stack for scalable solutions
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-200 hover:shadow-lg cursor-default"
                        >
                            <div className="text-center">
                                <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-primary transition-colors">
                                    {tech.name}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subtext */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
                        And many more technologies tailored to your specific needs
                    </p>
                </div>
            </div>
        </section>
    );
}
