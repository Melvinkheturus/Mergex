'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Shield,
    Gauge,
    Lightbulb,
    Rocket,
    Target,
    AlertTriangle,
    TrendingUp,
    Code2,
    Database,
    Server,
    Wrench,
} from 'lucide-react';
import type { CaseStudy } from '../content/caseStudies';

interface DetailedCaseStudyProps {
    caseStudy: CaseStudy;
}

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export function DetailedCaseStudy({ caseStudy }: DetailedCaseStudyProps) {
    if (!caseStudy.detailedCase) {
        return <div>Detailed case study content not available</div>;
    }

    const { detailedCase } = caseStudy;

    return (
        <article className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 md:py-28">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_70%)]" />
                </div>
                <div className="container relative mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div {...fadeInUp}>
                            <div className="mb-4 flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                                    {detailedCase.projectStatus === 'production' ? '🟢 Production' : detailedCase.projectStatus}
                                </span>
                                {detailedCase.version && (
                                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                                        v{detailedCase.version}
                                    </span>
                                )}
                            </div>
                            <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                                {caseStudy.client}
                            </h1>
                            <p className="mb-6 text-xl text-purple-200">
                                {detailedCase.executiveSummary.projectAtGlance.projectType}
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                {caseStudy.problemSummary}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-2xl">
                                <Image
                                    src={detailedCase.heroImage}
                                    alt={`${caseStudy.client} Platform Preview`}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project at a Glance */}
            <section className="border-b border-gray-200 bg-gray-50 py-12">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        className="grid gap-4 sm:grid-cols-2 md:grid-cols-5"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {Object.entries(detailedCase.executiveSummary.projectAtGlance).map(([key, value]) => (
                            <motion.div
                                key={key}
                                variants={fadeInUp}
                                className="rounded-xl bg-white p-4 shadow-sm"
                            >
                                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </p>
                                <p className="font-semibold text-gray-900">{value}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Key Achievements */}
            <section className="py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Key Achievements</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {detailedCase.executiveSummary.keyAchievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4"
                                >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <p className="text-gray-800">{achievement}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Business Challenge */}
            <section className="border-t border-gray-200 bg-gray-50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <Target className="h-8 w-8 text-red-500" />
                            <h2 className="text-3xl font-bold text-gray-900">Business Challenge</h2>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Problems */}
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                                    The Problems
                                </h3>
                                <ul className="space-y-3">
                                    {detailedCase.businessChallenge.problems.map((problem, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 rounded-lg border-l-4 border-red-400 bg-white p-4"
                                        >
                                            <span className="text-gray-700">{problem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Objectives */}
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                                    <Rocket className="h-5 w-5 text-purple-500" />
                                    Business Objectives
                                </h3>
                                <ul className="space-y-3">
                                    {detailedCase.businessChallenge.objectives.map((objective, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 rounded-lg border-l-4 border-purple-400 bg-white p-4"
                                        >
                                            <span className="text-gray-700">{objective}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solution Overview */}
            <section className="py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <Lightbulb className="h-8 w-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold text-gray-900">Solution Overview</h2>
                        </div>

                        <p className="mb-10 max-w-3xl text-lg text-gray-600">
                            {detailedCase.solutionOverview.strategicApproach}
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            {detailedCase.solutionOverview.coreComponents.map((component, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 p-6"
                                >
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                        {component.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {component.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Architecture */}
            <section className="border-t border-gray-200 bg-gray-900 py-16 text-white">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-10 flex items-center gap-3">
                            <Code2 className="h-8 w-8 text-cyan-400" />
                            <h2 className="text-3xl font-bold">Technical Architecture</h2>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Frontend */}
                            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <Server className="h-5 w-5 text-blue-400" />
                                    <h3 className="text-lg font-semibold text-blue-400">Frontend</h3>
                                </div>
                                <div className="space-y-3">
                                    {detailedCase.techStack.frontend.map((tech, index) => (
                                        <div key={index} className="rounded-lg bg-white/5 p-3">
                                            <div className="flex items-baseline justify-between">
                                                <span className="font-medium text-white">{tech.name}</span>
                                                {tech.version && (
                                                    <span className="text-xs text-gray-400">{tech.version}</span>
                                                )}
                                            </div>
                                            {tech.description && (
                                                <p className="mt-1 text-sm text-gray-400">{tech.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <Database className="h-5 w-5 text-green-400" />
                                    <h3 className="text-lg font-semibold text-green-400">Backend Services</h3>
                                </div>
                                <div className="space-y-3">
                                    {detailedCase.techStack.backend.map((tech, index) => (
                                        <div key={index} className="rounded-lg bg-white/5 p-3">
                                            <div className="flex items-baseline justify-between">
                                                <span className="font-medium text-white">{tech.name}</span>
                                                {tech.version && (
                                                    <span className="text-xs text-gray-400">{tech.version}</span>
                                                )}
                                            </div>
                                            {tech.description && (
                                                <p className="mt-1 text-sm text-gray-400">{tech.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dev Tools */}
                            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <Wrench className="h-5 w-5 text-orange-400" />
                                    <h3 className="text-lg font-semibold text-orange-400">Dev Tools</h3>
                                </div>
                                <div className="space-y-3">
                                    {detailedCase.techStack.devTools.map((tech, index) => (
                                        <div key={index} className="rounded-lg bg-white/5 p-3">
                                            <div className="flex items-baseline justify-between">
                                                <span className="font-medium text-white">{tech.name}</span>
                                                {tech.version && (
                                                    <span className="text-xs text-gray-400">{tech.version}</span>
                                                )}
                                            </div>
                                            {tech.description && (
                                                <p className="mt-1 text-sm text-gray-400">{tech.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-10 flex items-center gap-3">
                            <Zap className="h-8 w-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold text-gray-900">Key Features Implemented</h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {detailedCase.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                                >
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="mb-4 text-gray-600">{feature.description}</p>
                                    {feature.subFeatures && (
                                        <ul className="space-y-2">
                                            {feature.subFeatures.map((subFeature, subIndex) => (
                                                <li key={subIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                                    {subFeature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Security */}
            {detailedCase.security && (
                <section className="border-t border-gray-200 bg-gray-50 py-16">
                    <div className="container mx-auto max-w-7xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-8 flex items-center gap-3">
                                <Shield className="h-8 w-8 text-blue-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Security Implementation</h2>
                            </div>

                            <p className="mb-6 text-lg text-gray-600">{detailedCase.security.authMethod}</p>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {detailedCase.security.securityMeasures.map((measure, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                                    >
                                        <Shield className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                                        <span className="text-gray-700">{measure}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Performance */}
            {detailedCase.performance && (
                <section className="py-16">
                    <div className="container mx-auto max-w-7xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-8 flex items-center gap-3">
                                <Gauge className="h-8 w-8 text-green-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Performance Optimization</h2>
                            </div>

                            <div className="mb-8">
                                <h3 className="mb-4 text-xl font-semibold text-gray-900">Core Web Vitals</h3>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                                    {detailedCase.performance.coreWebVitals.map((metric, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 text-center"
                                        >
                                            <p className="mb-1 text-2xl font-bold text-green-600">{metric.after}</p>
                                            <p className="mb-1 text-sm font-medium text-gray-900">{metric.label}</p>
                                            {metric.improvement && (
                                                <p className="text-xs text-green-600">{metric.improvement}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-semibold text-gray-900">Optimization Techniques</h3>
                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {detailedCase.performance.optimizations.map((optimization, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-3"
                                        >
                                            <Zap className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                                            <span className="text-sm text-gray-700">{optimization}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Results & Impact */}
            <section className="border-t border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-10 flex items-center gap-3">
                            <TrendingUp className="h-8 w-8 text-purple-600" />
                            <h2 className="text-3xl font-bold text-gray-900">Results & Impact</h2>
                        </div>

                        {/* Quantitative Metrics */}
                        <div className="mb-10">
                            <h3 className="mb-6 text-xl font-semibold text-gray-900">Business Outcomes</h3>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {detailedCase.results.quantitative.map((metric, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl bg-white p-6 shadow-sm"
                                    >
                                        <p className="mb-3 font-medium text-gray-900">{metric.label}</p>
                                        <div className="mb-2 flex items-center gap-2">
                                            {metric.before && (
                                                <>
                                                    <span className="text-gray-500 line-through">{metric.before}</span>
                                                    <ArrowRight className="h-4 w-4 text-gray-400" />
                                                </>
                                            )}
                                            <span className="text-lg font-bold text-purple-600">{metric.after}</span>
                                        </div>
                                        {metric.improvement && (
                                            <p className="text-sm font-medium text-green-600">{metric.improvement}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Qualitative Results */}
                        <div className="mb-10">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">Qualitative Benefits</h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {detailedCase.results.qualitative.map((result, index) => (
                                    <div key={index} className="flex items-start gap-2 rounded-lg bg-white p-4">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                                        <span className="text-gray-700">{result}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Achievements */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">Technical Achievements</h3>
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {detailedCase.results.technicalAchievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-2 rounded-lg bg-white p-4">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span className="text-gray-700">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Lessons Learned */}
            <section className="py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-8 text-3xl font-bold text-gray-900">Lessons Learned</h2>

                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* What Worked Well */}
                            <div>
                                <h3 className="mb-4 text-xl font-semibold text-green-700">What Worked Well</h3>
                                <div className="space-y-3">
                                    {detailedCase.lessonsLearned.whatWorkedWell.map((lesson, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-lg border-l-4 border-green-400 bg-green-50 p-4"
                                        >
                                            <span className="text-2xl font-bold text-green-400">{index + 1}</span>
                                            <p className="text-gray-700">{lesson}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Challenges Overcome */}
                            <div>
                                <h3 className="mb-4 text-xl font-semibold text-blue-700">Challenges Overcome</h3>
                                <div className="space-y-3">
                                    {detailedCase.lessonsLearned.challengesOvercome.map((challenge, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4"
                                        >
                                            <span className="text-2xl font-bold text-blue-400">{index + 1}</span>
                                            <p className="text-gray-700">{challenge}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Future Roadmap */}
            {detailedCase.futureRoadmap && (
                <section className="border-t border-gray-200 bg-gray-50 py-16">
                    <div className="container mx-auto max-w-7xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-8 flex items-center gap-3">
                                <Rocket className="h-8 w-8 text-purple-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Future Roadmap</h2>
                            </div>

                            <div className="grid gap-8 lg:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">Phase 2 Features</h3>
                                    <ul className="space-y-2">
                                        {detailedCase.futureRoadmap.phase2Features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">Technical Improvements</h3>
                                    <ul className="space-y-2">
                                        {detailedCase.futureRoadmap.technicalImprovements.map((improvement, index) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                                {improvement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-purple-600 to-blue-600 py-16">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                            Ready to Build Something Similar?
                        </h2>
                        <p className="mb-8 text-lg text-purple-100">
                            Let&apos;s discuss how we can help transform your business with a modern, scalable platform.
                        </p>
                        <a
                            href="https://calendly.com/mergex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all hover:scale-105"
                        >
                            Schedule a Discovery Call
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </article>
    );
}
