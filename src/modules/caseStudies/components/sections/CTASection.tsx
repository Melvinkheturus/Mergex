import React from 'react';
import { CaseStudy } from '../../types';

interface CTASectionProps {
    study: CaseStudy;
}

export function CTASection({ study }: CTASectionProps) {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            This approach is for you if:
                        </h3>
                        <ul className="space-y-3">
                            {study.fitCriteria.idealFor.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-gray-300 hover:shadow-md transition-shadow opacity-75 hover:opacity-100">
                        <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                            Not ideal if you:
                        </h3>
                        <ul className="space-y-3">
                            {study.fitCriteria.notIdealFor.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    <span className="text-gray-500">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 mb-8">
                        <div className="bg-white rounded-xl py-12 px-8 md:px-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-manrope">Want a similar outcome?</h2>
                            <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">Let&apos;s evaluate if this strategic approach fits your business goals.</p>
                            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full md:w-auto">
                                View Project Fit Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
