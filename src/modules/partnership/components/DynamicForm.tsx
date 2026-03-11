'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { FORM_MOCKS } from '../constants/form-mocks';
import { client } from '@/sanity/lib/client';

interface FormField {
    label: string;
    fieldName: string;
    fieldType: 'text' | 'email' | 'tel' | 'select' | 'textarea';
    required: boolean;
    placeholder?: string;
    options?: string[];
}

interface FormConfig {
    title: string;
    description: string;
    fields: FormField[];
    submitButtonText: string;
    successMessage: string;
}

interface DynamicFormProps {
    formId: string;
    onSubmitAction?: (data: any) => Promise<{ success: boolean; message?: string }>;
}

export function DynamicForm({ formId, onSubmitAction }: DynamicFormProps) {
    //  Instant Load: Using a function initializer for state to grab mocks 
    // immediately on the first render, preventing the "Loading..." flash.
    const [config, setConfig] = useState<FormConfig | null>(() => {
        return FORM_MOCKS[formId] || null;
    });

    const [formData, setFormData] = useState<Record<string, any>>(() => {
        const initialMock = FORM_MOCKS[formId];
        if (initialMock) {
            const initial: Record<string, any> = {};
            initialMock.fields.forEach((f: FormField) => initial[f.fieldName] = '');
            return initial;
        }
        return {};
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let isMounted = true;

        async function loadConfig() {
            try {
                // 1. Try to fetch from Sanity
                const query = `*[_type == "formConfig" && formId.current == $formId][0]{
                    title,
                    description,
                    fields[]{
                        label,
                        fieldName,
                        fieldType,
                        required,
                        placeholder,
                        options
                    },
                    submitButtonText,
                    successMessage
                }`;

                const sanityConfig = await client.fetch(query, { formId });

                if (isMounted && sanityConfig && sanityConfig.fields?.length > 0) {
                    console.log(`🔌 [Mergex] Synchronized ${formId} with Sanity`);
                    setConfig(sanityConfig);

                    // Update form data if new fields were added in Sanity
                    setFormData(prev => {
                        const newData = { ...prev };
                        sanityConfig.fields.forEach((field: FormField) => {
                            if (newData[field.fieldName] === undefined) {
                                newData[field.fieldName] = '';
                            }
                        });
                        return newData;
                    });
                }
            } catch (error) {
                // Fail silently: we already have the mock loaded for a fallback
            }
        }

        loadConfig();
        return () => { isMounted = false; };
    }, [formId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // 1. Custom action if provided
            if (onSubmitAction) {
                const result = await onSubmitAction(formData);
                if (result.success) {
                    setStatus('success');
                } else {
                    setStatus('error');
                    setErrorMessage(result.message || 'Something went wrong.');
                }
                return;
            }

            // 2. Standard Sanity-first API submission
            const response = await fetch('/api/forms/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ formId, data: formData }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'Submission failed.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Connection error. Please try again.');
        }
    };

    if (!config) {
        return (
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-violet-100 space-y-8 animate-pulse">
                <div className="space-y-3">
                    <div className="h-8 w-1/3 bg-gray-100 rounded-lg" />
                    <div className="h-4 w-2/3 bg-gray-50 rounded" />
                </div>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-3">
                        <div className="h-4 w-1/4 bg-gray-100 rounded" />
                        <div className="h-12 w-full bg-gray-50 rounded-xl" />
                    </div>
                ))}
                <div className="h-14 w-full bg-violet-50 rounded-xl" />
            </div>
        );
    }

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-violet-100 text-center"
            >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{config.successMessage}</h3>
                <p className="text-gray-600 mb-8">Our team will review your submission and get back to you shortly.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-violet-600 font-semibold hover:underline"
                >
                    Submit another response
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-violet-100">
            <div className="space-y-6">
                {config.fields.map((field, idx) => (
                    <div key={`${field.fieldName}-${idx}`}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {field.label} {field.required && <span className="text-violet-500">*</span>}
                        </label>

                        {field.fieldType === 'textarea' ? (
                            <textarea
                                name={field.fieldName}
                                value={formData[field.fieldName] || ''}
                                onChange={handleChange}
                                required={field.required}
                                placeholder={field.placeholder}
                                rows={4}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                            />
                        ) : field.fieldType === 'select' ? (
                            <select
                                name={field.fieldName}
                                value={formData[field.fieldName] || ''}
                                onChange={handleChange}
                                required={field.required}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8.%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat"
                            >
                                <option value="" disabled>Select {field.label}</option>
                                {field.options?.map((opt, oIdx) => (
                                    <option key={`${opt}-${oIdx}`} value={opt}>{opt}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.fieldType}
                                name={field.fieldName}
                                value={formData[field.fieldName] || ''}
                                onChange={handleChange}
                                required={field.required}
                                placeholder={field.placeholder}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                            />
                        )}
                    </div>
                ))}

                <AnimatePresence>
                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm"
                        >
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            {errorMessage}
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-violet-200"
                >
                    {status === 'submitting' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            {config.submitButtonText}
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
