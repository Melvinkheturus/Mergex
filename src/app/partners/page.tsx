'use client';

import { Handshake, Users, Zap, Target } from 'lucide-react';

export default function PartnersPage() {
    return (
        <main className="pt-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-20">
                {/* Hero */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-8">
                        <Handshake className="w-4 h-4" />
                        Strategic Partnerships
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Build With Mergex</h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Strategic partnerships for agencies, founders, and enterprises looking for technical execution and
                        innovation expertise.
                    </p>
                </div>

                {/* Who Should Partner */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display">Who Should Partner</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Agencies</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                White-label development, technical co-execution, and capacity expansion for client projects
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Founders</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Technical co-founder alternative, MVP development, and scaling support for your vision
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Enterprises</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Innovation partner for AI experimentation, automation, and new technology evaluation
                            </p>
                        </div>
                    </div>
                </div>

                {/* What Partners Get */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-display">What Partners Get</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <h4 className="font-bold mb-2">Technical Execution</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Full-stack development, AI integration, and platform engineering
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <h4 className="font-bold mb-2">Innovation Access</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Early access to Mergex Labs experiments and new AI capabilities
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <h4 className="font-bold mb-2">Long-term Collaboration</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Strategic partnership, not transactional vendor relationship
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-12 px-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">Ready to Partner?</h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
                        Reach out → Discuss fit → Build together
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-hover transition-colors"
                    >
                        Start the Conversation
                    </a>
                </div>
            </div>
        </main>
    );
}
