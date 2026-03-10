'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { ReferralSubmission } from '../types';
import { submitReferral } from '../services/api';

interface ReferralFormProps {
    onSuccess?: () => void;
}

export function ReferralForm({ onSuccess }: ReferralFormProps) {
    const [formData, setFormData] = useState<ReferralSubmission>({
        referrerName: '',
        referrerEmail: '',
        referrerPhone: '',
        clientName: '',
        clientPhone: '',
        services: 'IT',
        clientBusiness: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await submitReferral(formData);
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
                    <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Referral Submitted!</h3>
                <p className="text-gray-600">Thank you for the referral. We will review and reach out shortly.</p>
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
                            Your Name *
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.referrerName}
                            onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Email *
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.referrerEmail}
                            onChange={(e) => setFormData({ ...formData, referrerEmail: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Phone *
                        </label>
                        <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.referrerPhone}
                            onChange={(e) => setFormData({ ...formData, referrerPhone: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Client Name *
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Client contact name"
                            value={formData.clientName}
                            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Client Phone
                        </label>
                        <input
                            type="tel"
                            placeholder="Client contact number"
                            value={formData.clientPhone}
                            onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Services Needed *
                        </label>
                        <select
                            required
                            value={formData.services}
                            onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                        >
                            <option value="IT">IT Development</option>
                            <option value="DM">Digital Marketing</option>
                            <option value="Automation">Automation</option>
                            <option value="AI">AI Solutions</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Client Business/Company
                    </label>
                    <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.clientBusiness}
                        onChange={(e) => setFormData({ ...formData, clientBusiness: e.target.value })}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea
                        rows={5}
                        placeholder="Tell us about the project..."
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
                        'Submit Referral'
                    )}
                </button>
            </form>
        </div>
    );
}
