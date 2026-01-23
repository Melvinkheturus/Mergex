import { Brain, Zap, Shield } from 'lucide-react';

export default function ProblemSolution() {
    const solutions = [
        {
            id: 1,
            icon: Brain,
            problem: 'Struggling with AI integration?',
            solution: 'We build AI-powered systems that actually work',
            description: 'No hype, no buzzwords. Just practical AI that solves real problems.',
        },
        {
            id: 2,
            icon: Zap,
            problem: 'Need custom software fast?',
            solution: 'Rapid development without cutting corners',
            description: 'Modern tech stack, agile process, and quality code that scales.',
        },
        {
            id: 3,
            icon: Shield,
            problem: 'Want innovation without risk?',
            solution: 'Labs experiments before production',
            description: 'Test new ideas in a controlled environment before full deployment.',
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">How We Help</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
                        We solve the problems that keep you up at night
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>

                                {/* Problem */}
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 font-display">
                                    {item.problem}
                                </h3>

                                {/* Solution */}
                                <p className="text-lg font-bold text-primary mb-4">{item.solution}</p>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-body">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
