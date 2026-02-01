'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTA_SECTION } from '../constants';
import { X, Send, Briefcase } from 'lucide-react';
import type { PartnerApplication, ReferralSubmission } from '../types';

type FormType = 'partner' | 'referral' | null;

export function PartnerCTA() {
    const [activeForm, setActiveForm] = useState<FormType>(null);

    return (
        <>
            <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50/30 to-white">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
                            {CTA_SECTION.headline}
                        </h2>
                        <p className="text-lg text-gray-600 mb-10">
                            {CTA_SECTION.subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setActiveForm('partner')}
                                className="
                                    group flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                                    bg-gradient-to-b from-violet-400 to-violet-900
                                    text-white font-semibold text-lg
                                    shadow-lg hover:shadow-xl
                                    transition-all duration-200
                                    hover:brightness-110 hover:-translate-y-0.5
                                    active:scale-95
                                "
                            >
                                <Briefcase className="w-5 h-5" />
                                <span>{CTA_SECTION.partnerButtonText}</span>
                            </button>

                            <button
                                onClick={() => setActiveForm('referral')}
                                className="
                                    group flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                                    bg-white border-2 border-violet-600
                                    text-violet-900 font-semibold text-lg
                                    shadow-lg hover:shadow-xl
                                    transition-all duration-200
                                    hover:bg-violet-50 hover:-translate-y-0.5
                                    active:scale-95
                                "
                            >
                                <Send className="w-5 h-5" />
                                <span>{CTA_SECTION.referralButtonText}</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Form Modals */}
            <AnimatePresence>
                {activeForm === 'partner' && (
                    <PartnerApplicationForm onClose={() => setActiveForm(null)} />
                )}
                {activeForm === 'referral' && (
                    <ReferralForm onClose={() => setActiveForm(null)} />
                )}
            </AnimatePresence>
        </>
    );
}

// Partner Application Form
function PartnerApplicationForm({ onClose }: { onClose: () => void }) {
    const [formData, setFormData] = useState<PartnerApplication>({
        name: '',
        email: '',
        company: '',
        partnershipType: 'strategic',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Partner Application:', formData);
        alert('Thank you for your interest! We will review your application and get back to you soon.');
        onClose();
    };

    return (
        <FormModal onClose={onClose} title="Apply as a Partner">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Partnership Type *
                    </label>
                    <select
                        required
                        value={formData.partnershipType}
                        onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value as 'strategic' | 'referral' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    >
                        <option value="strategic">Strategic Partner</option>
                        <option value="referral">Referral Partner</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your interest *
                    </label>
                    <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-b from-violet-400 to-violet-900 text-white font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                    Submit Application
                </button>
            </form>
        </FormModal>
    );
}

// Referral Form
function ReferralForm({ onClose }: { onClose: () => void }) {
    const [formData, setFormData] = useState<ReferralSubmission>({
        referrerName: '',
        referrerEmail: '',
        clientName: '',
        clientCompany: '',
        problemDescription: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Referral Submission:', formData);
        alert('Thank you for the referral! We will review and reach out if it\'s a good fit.');
        onClose();
    };

    return (
        <FormModal onClose={onClose} title="Refer a Client">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.referrerName}
                            onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Email *
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.referrerEmail}
                            onChange={(e) => setFormData({ ...formData, referrerEmail: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Client Name *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.clientName}
                            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Client Company *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.clientCompany}
                            onChange={(e) => setFormData({ ...formData, clientCompany: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Problem/Need Description *
                    </label>
                    <textarea
                        required
                        rows={4}
                        value={formData.problemDescription}
                        onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                        placeholder="What challenge is the client facing? What solution are they looking for?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-b from-violet-400 to-violet-900 text-white font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                    Submit Referral
                </button>
            </form>
        </FormModal>
    );
}

// Reusable Form Modal Component
function FormModal({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-8"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pr-12">
                    {title}
                </h2>

                {children}
            </motion.div>
        </motion.div>
    );
}
