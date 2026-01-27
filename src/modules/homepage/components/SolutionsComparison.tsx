import Image from 'next/image';
import { PROBLEMS, SOLUTIONS } from '../constants';

export default function SolutionsComparison() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Problem - The Old Way */}
                    <div className="bg-gray-50 p-10 md:p-12 rounded-3xl relative overflow-hidden opacity-70">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <span className="material-symbols-outlined text-9xl">block</span>
                        </div>
                        <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-8">
                            The Old Way
                        </h3>
                        <ul className="space-y-6">
                            {PROBLEMS.map((problem) => (
                                <li key={problem.id} className="flex items-start gap-4">
                                    <div className="relative w-6 h-6 shrink-0 mt-1">
                                        <Image
                                            src="/assets/icons/cross-grey.png"
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-body text-gray-600 text-lg">{problem.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Solution - The Mergex Way */}
                    <div className="glass rounded-3xl p-10 md:p-12 border-2 border-primary/30 relative shadow-xl glow-purple-sm">
                        <div className="absolute top-0 right-0 p-4 text-primary opacity-5">
                            <span className="material-symbols-outlined text-9xl">check_circle</span>
                        </div>
                        <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-8">
                            The Mergex Way
                        </h3>
                        <ul className="space-y-6">
                            {SOLUTIONS.map((solution) => (
                                <li key={solution.id} className="flex items-start gap-4">
                                    <div className="relative w-8 h-8 shrink-0">
                                        <Image
                                            src="/assets/icons/check-glow.png"
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-body font-medium text-gray-900 text-lg">{solution.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
