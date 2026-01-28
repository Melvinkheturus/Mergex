'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, GitBranch, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { CAREER_PATHS } from '../content/careers';

const iconMap = {
    briefcase: Briefcase,
    users: Users,
    'git-branch': GitBranch,
    rocket: Rocket,
} as const;

export function CareerPaths() {
    return (
        <section className="bg-white py-20" id="opportunities">
            <div className="container mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        {CAREER_PATHS.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {CAREER_PATHS.subheadline}
                    </p>
                </motion.div>

                {/* Paths Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {CAREER_PATHS.paths.map((path, index) => {
                        const Icon = iconMap[path.icon as keyof typeof iconMap];
                        const isInternship = path.id === 'internships';

                        return (
                            <motion.div
                                key={path.id}
                                id={path.id === 'internships' ? 'internships' : undefined}
                                className={`relative rounded-2xl border-2 p-8 ${isInternship
                                        ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg'
                                        : 'border-gray-200 bg-white'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Icon & Title */}
                                <div className="mb-6">
                                    <div className="mb-4 flex items-start justify-between">
                                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${isInternship ? 'bg-purple-600' : 'bg-gray-900'
                                            } text-white`}>
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isInternship
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {path.tagline}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{path.title}</h3>
                                </div>

                                {/* Description */}
                                <p className="mb-6 leading-relaxed text-gray-600">{path.description}</p>

                                {/* Roles (Full-Time) */}
                                {'roles' in path && path.roles && (
                                    <div className="mb-6">
                                        <h4 className="mb-3 font-semibold text-gray-900">Open Roles:</h4>
                                        <ul className="space-y-2">
                                            {path.roles.map((role, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600"></span>
                                                    {role}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Internship Details */}
                                {'whoItsFor' in path && path.whoItsFor && (
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h4 className="mb-2 font-semibold text-gray-900">Who It's For:</h4>
                                            <ul className="space-y-1">
                                                {path.whoItsFor.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {'whatTheyGet' in path && path.whatTheyGet && (
                                            <div>
                                                <h4 className="mb-2 font-semibold text-gray-900">What You Get:</h4>
                                                <ul className="space-y-1">
                                                    {path.whatTheyGet.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {'whatWeExpect' in path && path.whatWeExpect && (
                                            <div>
                                                <h4 className="mb-2 font-semibold text-gray-900">What We Expect:</h4>
                                                <ul className="space-y-1">
                                                    {path.whatWeExpect.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600"></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* How It Works (Contributors) */}
                                {'howItWorks' in path && path.howItWorks && (
                                    <div className="mb-6">
                                        <h4 className="mb-3 font-semibold text-gray-900">How It Works:</h4>
                                        <ul className="space-y-2">
                                            {path.howItWorks.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        {'note' in path && path.note && (
                                            <p className="mt-3 text-xs italic text-gray-600">{path.note}</p>
                                        )}
                                    </div>
                                )}

                                {/* Status */}
                                <div className="mb-6 rounded-lg bg-gray-100 p-3">
                                    <p className="text-sm font-medium text-gray-700">
                                        <span className="font-semibold">Status:</span> {path.status}
                                    </p>
                                </div>

                                {/* CTA */}
                                {path.ctaLink !== '#newsletter' && (
                                    <a
                                        href={path.ctaLink}
                                        className={`group inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all ${isInternship
                                                ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg'
                                                : 'border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white'
                                            }`}
                                    >
                                        {path.ctaText}
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
