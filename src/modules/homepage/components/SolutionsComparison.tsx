import { PROBLEMS, SOLUTIONS } from '../constants';

export default function SolutionsComparison() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Problem */}
                    <div className="bg-gray-50 p-10 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-9xl">block</span>
                        </div>
                        <h3 className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-6">
                            The Old Way
                        </h3>
                        <ul className="space-y-6">
                            {PROBLEMS.map((problem) => (
                                <li key={problem.id} className="flex items-start gap-4 opacity-60">
                                    <span className="material-symbols-outlined text-red-400 shrink-0">close</span>
                                    <span className="font-body">{problem.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Solution */}
                    <div className="bg-primary/5 p-10 rounded-xl border border-primary/20 relative">
                        <div className="absolute top-0 right-0 p-4 text-primary opacity-10">
                            <span className="material-symbols-outlined text-9xl">check_circle</span>
                        </div>
                        <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-6">
                            The Mergex Way
                        </h3>
                        <ul className="space-y-6">
                            {SOLUTIONS.map((solution) => (
                                <li key={solution.id} className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary shrink-0">check</span>
                                    <span className="font-body font-medium">{solution.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
