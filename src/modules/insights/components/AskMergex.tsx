'use client';

import React, { useEffect, useRef, useCallback, useTransition, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, SendIcon, LoaderIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ASK_MERGEX } from '../content/insights';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

const STORAGE_KEY = 'mergex_chat_history';

// --- Textarea hooks and components ---
interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({ minHeight, maxHeight }: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;
            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }
            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY)
            );
            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    containerClassName?: string;
    showRing?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, containerClassName, showRing = true, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
        return (
            <div className={cn('relative', containerClassName)}>
                <textarea
                    className={cn(
                        'bg-transparent flex min-h-[60px] w-full rounded-md px-3 py-2 text-sm',
                        'transition-all duration-200 ease-in-out',
                        'placeholder:text-gray-400',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        showRing
                            ? 'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none'
                            : 'focus:outline-none border-none resize-none',
                        className
                    )}
                    ref={ref}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </div>
        );
    }
);
Textarea.displayName = 'Textarea';

function TypingDots() {
    return (
        <div className="ml-1 flex items-center">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="bg-violet-600 mx-0.5 h-1.5 w-1.5 rounded-full"
                    initial={{ opacity: 0.3 }}
                    animate={{
                        opacity: [0.3, 0.9, 0.3],
                        scale: [0.85, 1.1, 0.85],
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.15,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}

// --- Main component ---
export function AskMergex() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [value, setValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [inputFocused, setInputFocused] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [, startTransition] = useTransition();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    // Load history
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.length > 0) {
                    setMessages(parsed);
                    setHasStarted(true);
                }
            } catch (e) {
                console.error('Failed to parse chat history', e);
            }
        }
    }, []);

    // Save history
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (hasStarted) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping, hasStarted]);

    // Mouse glow effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSendMessage = async (textOverride?: string) => {
        const text = textOverride || value;
        if (!text.trim() || isTyping) return;

        if (!hasStarted) {
            setHasStarted(true);
        }

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
        setMessages((prev) => [...prev, userMsg]);
        setValue('');
        adjustHeight(true);
        setIsTyping(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text }),
            });
            const data = await res.json();
            const assistantMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.answer || 'Something went wrong. Please try again.',
            };
            setMessages((prev) => [...prev, assistantMsg]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { id: 'err', role: 'assistant', content: 'Unable to connect. Try again in a moment.' },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                handleSendMessage();
            }
        }
    };

    const clearHistory = () => {
        setMessages([]);
        setHasStarted(false);
        localStorage.removeItem(STORAGE_KEY);
    };

    return (
        <div className="relative w-full flex flex-col items-center min-h-[600px] overflow-hidden bg-white rounded-3xl border border-gray-100 mt-8 mb-20 shadow-sm">
            {/* Background gradients */}
            <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none z-0">
                <div className="bg-violet-400/10 absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full mix-blend-multiply blur-[128px]" />
                <div className="bg-fuchsia-400/10 absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full mix-blend-multiply blur-[128px] delay-700" />
                <div className="bg-violet-300/10 absolute top-1/4 right-1/3 h-64 w-64 animate-pulse rounded-full mix-blend-multiply blur-[96px] delay-1000" />
            </div>

            {inputFocused && !hasStarted && (
                <motion.div
                    className="pointer-events-none fixed z-0 h-[50rem] w-[50rem] rounded-full bg-gradient-to-r from-violet-200 via-violet-100 to-fuchsia-100 opacity-20 blur-[100px]"
                    animate={{
                        x: mousePosition.x - 400,
                        y: mousePosition.y - 400,
                    }}
                    transition={{
                        type: 'spring',
                        damping: 25,
                        stiffness: 150,
                        mass: 0.5,
                    }}
                />
            )}

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-3xl flex flex-col h-full pt-12 pb-6 px-4 md:px-8">

                {/* Intro Screen - Centered */}
                {!hasStarted && (
                    <motion.div
                        className="flex-1 flex flex-col justify-center items-center -mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-4 text-center mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="inline-block"
                            >
                                <span className="inline-flex items-center justify-center p-3 bg-violet-50 text-violet-600 rounded-2xl mb-6 shadow-sm border border-violet-100">
                                    <Sparkles className="w-6 h-6" />
                                </span>
                                <h2 className="pb-2 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                                    How can I help today?
                                </h2>
                                <motion.div
                                    className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent mx-auto"
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: '80%', opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                />
                            </motion.div>
                            <motion.p
                                className="text-gray-500 text-sm md:text-base max-w-sm mx-auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Ask about systems, growth architecture, or Mergex insights.
                            </motion.p>
                        </div>
                    </motion.div>
                )}

                {/* Chat History View */}
                {hasStarted && (
                    <div className="flex-1 overflow-y-auto mb-6 pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                        <div className="flex justify-between items-center mb-8 sticky top-0 bg-white/80 backdrop-blur-md py-4 z-10 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                    M
                                </span>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900">Mergex Intelligence</h3>
                                    <p className="text-[10px] text-gray-400">Powered by Groq · Llama 3.3</p>
                                </div>
                            </div>
                            <button
                                onClick={clearHistory}
                                className="text-xs text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-red-50 px-3 py-1.5 rounded-full border border-gray-100 hover:border-red-100"
                            >
                                Clear Chat
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={cn(
                                        "w-full flex",
                                        msg.role === 'user' ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className={cn(
                                        "max-w-[85%] md:max-w-[75%] px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed",
                                        msg.role === 'user'
                                            ? "bg-violet-600 text-white rounded-br-sm shadow-md shadow-violet-200"
                                            : "bg-gray-50 text-gray-800 border border-gray-100 rounded-bl-sm"
                                    )}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            <AnimatePresence>
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="flex justify-start w-full"
                                    >
                                        <div className="bg-white border border-violet-100 rounded-2xl rounded-bl-sm px-5 py-4 flex gap-3 items-center shadow-sm">
                                            <Sparkles className="text-violet-500 w-4 h-4 animate-pulse" />
                                            <p className="text-sm text-gray-500 font-medium tracking-wide">Synthesizing</p>
                                            <TypingDots />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} className="h-4" />
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <motion.div
                    layout
                    className={cn(
                        "w-full",
                        !hasStarted ? "mx-auto" : "mt-auto"
                    )}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* Pre-text suggestions */}
                    {!hasStarted && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center gap-2 mb-8"
                        >
                            {ASK_MERGEX.suggestions.map((suggestion, index) => (
                                <motion.button
                                    key={suggestion}
                                    onClick={() => handleSendMessage(suggestion)}
                                    className="group bg-white border border-gray-200 text-gray-500 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all shadow-sm"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <span>{suggestion}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}

                    {/* Input Container */}
                    <div className="relative group">
                        <div className={cn(
                            "absolute inset-0 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-200 rounded-2xl blur-lg transition-opacity duration-500 z-0",
                            inputFocused ? "opacity-40" : "opacity-0"
                        )} />

                        <div className="relative z-10 bg-white border border-gray-200 shadow-sm rounded-2xl p-2 transition-all duration-300 focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-500/10">
                            <Textarea
                                ref={textareaRef}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    adjustHeight();
                                }}
                                onKeyDown={handleKeyDown}
                                onFocus={() => setInputFocused(true)}
                                onBlur={() => setInputFocused(false)}
                                placeholder="Ask about systems, Mergex insights, or AI..."
                                className="w-full text-gray-900 px-4 py-2 text-base"
                                showRing={false}
                                disabled={isTyping}
                            />

                            <div className="flex items-center justify-end px-2 pt-2 border-t border-gray-50 mt-1">
                                <motion.button
                                    type="button"
                                    onClick={() => handleSendMessage()}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isTyping || !value.trim()}
                                    className={cn(
                                        'rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200',
                                        'flex items-center gap-2',
                                        value.trim() && !isTyping
                                            ? 'bg-violet-600 text-white shadow-md shadow-violet-200 hover:bg-violet-700'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    )}
                                >
                                    {isTyping ? (
                                        <LoaderIcon className="h-4 w-4 animate-[spin_2s_linear_infinite]" />
                                    ) : (
                                        <SendIcon className="h-4 w-4" />
                                    )}
                                    <span>Send</span>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
