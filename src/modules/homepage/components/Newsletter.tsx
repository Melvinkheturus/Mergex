'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setEmail('');
    };

    return (
        <div className="relative group">
            {/* Background Accent */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-600">
                        <Send size={20} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-manrope)]">
                            Subscribe to the Newsletter
                        </h3>
                        <p className="text-sm text-gray-500">
                            Join 2,000+ others getting our latest insights.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'success' || status === 'loading'}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status !== 'idle'}
                        className={`
                            w-full py-3 rounded-xl font-medium transition-all duration-300
                            flex items-center justify-center gap-2
                            ${status === 'success' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-950 text-white hover:bg-gray-800 shadow-lg shadow-gray-200'}
                        `}
                    >
                        {status === 'loading' ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : status === 'success' ? (
                            <>
                                <CheckCircle2 size={20} />
                                <span>Subscribed!</span>
                            </>
                        ) : (
                            <span>Subscribe</span>
                        )}
                    </button>
                    
                    <p className="text-xs text-center text-gray-400">
                        Zero spam. Just high-signal intelligence. 
                        Unsubscribe any time.
                    </p>
                </form>
            </div>
        </div>
    );
}
