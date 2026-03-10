'use client';

import { useState } from 'react';
import { Briefcase, Loader2 } from 'lucide-react';
import { PartnerApplication } from '../types';
import { submitPartnerApplication } from '../services/api';

interface PartnerApplicationFormProps {
    onSuccess?: () => void;
}

export function PartnerApplicationForm({ onSuccess }: PartnerApplicationFormProps) {
    const [formData, setFormData] = useState<PartnerApplication>({
        name: '',
        email: '',
        company: '',
        partnershipType: 'strategic',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await submitPartnerApplication(formData);
            if (response.success && !response.note) {
                setStatus('success');
                onSuccess?.();
            } else {
                setStatus('error');
                setErrorMessage('Unable to process submission currently. Our team has been automatically notified.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('An unexpected error occurred. Please try again later.');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <div className="bg-green-100 text-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-600">Thank you for your interest. We will review your application and get back to you soon.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm mb-4">
                        {errorMessage}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Organization *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Partnership Type *
                    </label>
                    <select
                        required
                        value={formData.partnershipType}
                        onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value as 'strategic' | 'referral' })}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                    >
                        <option value="strategic">Strategic Partner</option>
                        <option value="referral">Referral Partner</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell us about your interest *
                    </label>
                    <textarea
                        required
                        rows={5}
                        placeholder="How can we help each other?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-violet-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                    {status === 'submitting' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        'Submit Application'
                    )}
                </button>
            </form>
        </div>
    );
}
