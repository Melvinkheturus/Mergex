'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../content/caseStudies';

export function LabsExperiments() {
    // Show only labs experiments
    const experiments = CASE_STUDIES.filter((cs) => cs.type === 'labs-experiment');

    return (
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
            <div className="container mx-auto max-w-6xl px-6">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        Recent Experiments
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Exploring the edge of what's possible with AI and creative tech.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {experiments.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="group rounded-xl border-2 border-purple-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-purple-400 hover:shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Speed Badge */}
                            <div className="mb-4 flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                                    <Sparkles className="h-4 w-4 text-purple-600" />
                                </div>
                                <span className="text-sm font-semibold text-purple-600">{exp.speedIndicator}</span>
                            </div>

                            {/* Title */}
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{exp.title}</h3>

                            {/* Problem */}
                            <p className="mb-4 text-sm text-gray-600">{exp.problemSummary}</p>

                            {exp.experiment && (
                                <>
                                    {/* Concept */}
                                    <div className="mb-3 rounded-lg bg-purple-50 p-3">
                                        <p className="text-xs font-semibold text-purple-900 mb-1">Concept</p>
                                        <p className="text-sm text-purple-800">{exp.experiment.concept}</p>
                                    </div>

                                    {/* Before/After */}
                                    {exp.experiment.beforeAfter && (
                                        <div className="mb-3 grid gap-2 text-xs">
                                            <div className="rounded-lg bg-red-50 p-2">
                                                <p className="font-semibold text-red-900 mb-1">Before</p>
                                                <p className="text-red-800">{exp.experiment.beforeAfter.before}</p>
                                            </div>
                                            <div className="rounded-lg bg-green-50 p-2">
                                                <p className="font-semibold text-green-900 mb-1">After</p>
                                                <p className="text-green-800">{exp.experiment.beforeAfter.after}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Tools */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.experiment.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
