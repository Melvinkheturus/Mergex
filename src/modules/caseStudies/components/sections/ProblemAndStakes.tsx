import React from 'react';
import { CaseStudy } from '../../types';

interface ProblemAndStakesProps {
    study: CaseStudy;
}

export function ProblemAndStakes({ study }: ProblemAndStakesProps) {
    return (
        <>
            {/* The Problem - Empathy */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-manrope">The Challenge</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {study.problem.narrative}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-red-500 mb-6">Key Pain Points</h3>
                            <ul className="space-y-4">
                                {study.problem.painPoints.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm font-bold">!</span>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Stakes - Loss Aversion */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-2xl font-bold mb-8 font-manrope">What Was At Stake?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {study.stakes.map((stake, index) => (
                            <div key={index} className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors duration-300">
                                <p className="font-medium text-gray-300">{stake}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
