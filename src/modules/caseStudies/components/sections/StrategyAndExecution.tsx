import React from 'react';
import { CaseStudy } from '../../types';
import Image from 'next/image';

interface StrategyAndExecutionProps {
    study: CaseStudy;
}

export function StrategyAndExecution({ study }: StrategyAndExecutionProps) {
    return (
        <>
            {/* Strategy */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-manrope">The Strategy</h2>
                        <p className="text-gray-500">How we transformed obstacles into opportunities</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {study.strategy.map((item, index) => (
                            <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-violet-100">
                                <div className="text-5xl font-bold text-gray-100 group-hover:text-violet-100 mb-6 transition-colors">0{index + 1}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Execution */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-24">
                        {study.execution.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                                <div className="flex-1 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg group">
                                    <Image
                                        src={step.image}
                                        alt={step.imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
