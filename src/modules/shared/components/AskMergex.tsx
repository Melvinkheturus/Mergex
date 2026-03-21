'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { SendHorizontal, LoaderIcon, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TypingAnimation } from "@/components/ui/typing-animation";

// ─── MergexOrb ────────────────────────────────────────────────────────────────
// Rotating mesh-gradient orb - the Mergex Intelligence visual identity.
// The outer shell is a static circle clip; two inner oversized layers rotate
// in opposite directions to create the oil-paint / marble mesh gradient effect.
export function MergexOrb({ size = 24, className }: { size?: number; className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 300, mass: 0.5 };
    const eyeX = useSpring(mouseX, springConfig);
    const eyeY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const orbCenterX = rect.left + rect.width / 2;
            const orbCenterY = rect.top + rect.height / 2;

            const deltaX = event.clientX - orbCenterX;
            const deltaY = event.clientY - orbCenterY;

            // Maximum distance the eyes can move from center (pupil range)
            const maxRange = size * 0.12;

            // Calculate vector length and angle
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const angle = Math.atan2(deltaY, deltaX);

            // Move eyes more as cursor gets further (within reason), but capped
            const moveDist = Math.min(distance / 12, maxRange);

            mouseX.set(Math.cos(angle) * moveDist);
            mouseY.set(Math.sin(angle) * moveDist);
        };

        const handleMouseLeave = () => {
            mouseX.set(0);
            mouseY.set(0);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [size, mouseX, mouseY]);

    // Inner rotating div is 150% of size - corners stay hidden during spin
    const inner = Math.round(size * 1.5);
    const blur = (f: number) => `${Math.max(0.5, size * f).toFixed(1)}px`;

    return (
        <div
            ref={containerRef}
            className={cn('relative shrink-0 rounded-full overflow-hidden bg-transparent', className)}
            style={{
                width: size,
                height: size,
                isolation: 'isolate',
                transform: 'translateZ(0)',
                WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                maskImage: 'radial-gradient(circle, white 100%, transparent 100%)'
            }}
        >
            {/* ── Layer 1: primary mesh gradient, rotates clockwise ──────────── */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: inner,
                    height: inner,
                    top: '50%',
                    left: '50%',
                    marginTop: -inner / 2,
                    marginLeft: -inner / 2,
                    background: `
                        radial-gradient(ellipse at 28% 28%, rgba(216, 180, 254, 1)   0%, transparent 52%),
                        radial-gradient(ellipse at 76% 22%, rgba(244, 162, 214, 0.9) 0%, transparent 46%),
                        radial-gradient(ellipse at 68% 74%, rgba(233, 213, 255, 1)   0%, transparent 54%),
                        radial-gradient(ellipse at 18% 74%, rgba(253, 204, 235, 0.8) 0%, transparent 46%),
                        radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1)   0%, transparent 70%),
                        linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(250, 245, 255, 1) 100%)
                    `,
                    filter: `blur(${blur(0.04)})`,
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            {/* ── Layer 2: depth mesh overlay, counter-rotates (multiply blend) ─ */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: inner,
                    height: inner,
                    top: '50%',
                    left: '50%',
                    marginTop: -inner / 2,
                    marginLeft: -inner / 2,
                    background: `
                        radial-gradient(ellipse at 62% 38%, rgba(192, 132, 252, 0.45) 0%, transparent 42%),
                        radial-gradient(ellipse at 28% 68%, rgba(232, 121, 249, 0.38) 0%, transparent 40%),
                        radial-gradient(ellipse at 72% 68%, rgba(255, 255, 255, 0.3) 0%, transparent 38%)
                    `,
                    mixBlendMode: 'multiply' as const,
                }}
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            {/* ── Edge vignette - gives the 3-D sphere rim ──────────────────── */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse at 50% 50%, transparent 44%, rgba(80, 50, 180, 0.3) 100%)',
                }}
            />

            {/* ── Specular highlight (static, top-left) ─────────────────────── */}
            <div
                style={{
                    position: 'absolute',
                    width: '38%',
                    height: '28%',
                    top: '10%',
                    left: '12%',
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, transparent 100%)',
                    filter: `blur(${blur(0.04)})`,
                }}
            />

            {/* ── Eyes (Orb Robot Personality) ── */}
            <div className="absolute inset-0 flex items-center justify-center gap-[18%] pointer-events-none z-20">
                {[0, 1].map((i) => (
                    <motion.div
                        key={i}
                        className="bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_2px_rgba(139,92,246,0.5)]"
                        style={{
                            width: size * 0.12,
                            height: size * 0.12,
                            x: eyeX,
                            y: eyeY
                        }}
                        animate={{
                            scaleY: [1, 1, 0.1, 1, 1], // Blink animation
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 5 + 3,
                            times: [0, 0.85, 0.9, 0.95, 1],
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

const STORAGE_KEY = 'mergex_chat_history';

// ─── Auto-resize hook ─────────────────────────────────────────────────────────
interface UseAutoResizeTextareaProps { minHeight: number; maxHeight?: number; }
function useAutoResizeTextarea({ minHeight, maxHeight }: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const adjustHeight = useCallback((reset?: boolean) => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        if (reset) { textarea.style.height = `${minHeight}px`; return; }
        textarea.style.height = `${minHeight}px`;
        const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY));
        textarea.style.height = `${newHeight}px`;
    }, [minHeight, maxHeight]);
    useEffect(() => { if (textareaRef.current) textareaRef.current.style.height = `${minHeight}px`; }, [minHeight]);
    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [adjustHeight]);
    return { textareaRef, adjustHeight };
}

// ─── Typing dots ──────────────────────────────────────────────────────────────
function TypingDots() {
    return (
        <div className="ml-1 flex items-center">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="bg-violet-600 mx-0.5 h-1.5 w-1.5 rounded-full"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.85, 1.1, 0.85] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.15, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
}

// ─── Rotating placeholders (minimal variant) ──────────────────────────────────
const ROTATING_PLACEHOLDERS = [
    'Ask Mergex Intelligence...',
    'What does Mergex Systems build?',
    'Should I start with Labs or Systems?',
    'How long does a typical project take?',
    'How is Mergex different from an agency?',
    'Do you work with startups?',
];

// ─── Suggested prompts (full variant default) ─────────────────────────────────
const DEFAULT_SUGGESTIONS = [
    'Should I start with Labs or Systems?',
    'Explain the Mergex methodology',
    'What can AI help my business automate?',
];

// ─── Props ────────────────────────────────────────────────────────────────────
interface AskMergexProps {
    suggestions?: string[];
    introTitle?: string;
    introDescription?: string;
    placeholder?: string;
    className?: string;
    variant?: 'full' | 'minimal';
    /** Full variant only - auto-sends this message once on mount */
    initialMessage?: string;
}

// ─── Main component ───────────────────────────────────────────────────────────
export function AskMergex({
    suggestions = DEFAULT_SUGGESTIONS,
    introTitle = 'Ask Mergex Intelligence',
    introDescription = 'Ask anything about systems, AI, or building with Mergex.',
    placeholder,
    className,
    variant = 'full',
    initialMessage,
}: AskMergexProps) {
    const isMinimal = variant === 'minimal';
    const router = useRouter();

    // ── Shared state ──────────────────────────────────────────────────────────
    const [value, setValue] = useState('');
    const [inputFocused, setInputFocused] = useState(false);

    // ── Full variant state ────────────────────────────────────────────────────
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 60, maxHeight: 200 });
    const initialSentRef = useRef(false);

    // ── Minimal variant state ─────────────────────────────────────────────────
    const inputRef = useRef<HTMLInputElement>(null);

    // ── Load / save chat history for full variant ─────────────────────────────
    useEffect(() => {
        if (isMinimal) return;
        // Only load saved history if no initialMessage (fresh query should start fresh)
        if (!initialMessage) {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.length > 0) { setMessages(parsed); setHasStarted(true); }
                } catch { /* ignore */ }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMinimal]);

    useEffect(() => {
        if (isMinimal || messages.length === 0) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }, [messages, isMinimal]);

    useEffect(() => {
        if (hasStarted) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping, hasStarted]);

    useEffect(() => {
        if (isMinimal) return;
        const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isMinimal]);

    // ── Auto-send initialMessage on mount (full variant) ─────────────────────
    useEffect(() => {
        if (isMinimal || !initialMessage || initialSentRef.current) return;
        initialSentRef.current = true;
        // Small delay so the UI mounts first
        const timer = setTimeout(() => handleSendMessage(initialMessage), 400);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMinimal, initialMessage]);

    // ── API call ──────────────────────────────────────────────────────────────
    const callAPI = async (text: string): Promise<string> => {
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text }),
            });
            const data = await res.json();
            return data.answer || 'Something went wrong. Please try again.';
        } catch {
            return 'Unable to connect. Try again in a moment.';
        }
    };

    // ── Full variant: send message ─────────────────────────────────────────────
    const handleSendMessage = async (textOverride?: string) => {
        const text = textOverride || value;
        if (!text.trim() || isTyping) return;

        if (!hasStarted) setHasStarted(true);
        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
        setMessages(prev => [...prev, userMsg]);
        setValue('');
        adjustHeight(true);
        setIsTyping(true);

        const answer = await callAPI(text);
        setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: answer }]);
        setIsTyping(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (value.trim()) handleSendMessage(); }
    };

    const clearHistory = () => {
        setMessages([]); setHasStarted(false);
        localStorage.removeItem(STORAGE_KEY);
    };

    // ── Minimal variant: redirect to /ask-mergex ──────────────────────────────
    const handleMinimalSubmit = (textOverride?: string) => {
        const text = textOverride || value;
        if (!text.trim()) return;

        // Dispatch custom event to open AskMergexWidget
        const event = new CustomEvent('mergex-open-chat', {
            detail: { message: text.trim() }
        });
        window.dispatchEvent(event);
        setValue(''); // Clear the minimal input
    };

    const handleMinimalKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value.trim()) handleMinimalSubmit();
    };

    // ─────────────────────────────────────────────────────────────────────────
    // MINIMAL VARIANT - clean entry point, redirects to /ask-mergex
    // ─────────────────────────────────────────────────────────────────────────
    if (isMinimal) {
        return (
            <div className={cn('w-full', className)}>
                {/* Identity badge */}
                <div className="flex flex-col items-center justify-center gap-2 mb-4 text-center">
                    <MergexOrb size={32} />
                    <div>
                        <p className="text-sm font-bold text-gray-900 leading-none mb-1.5">Ask Mergex</p>
                        <p className="text-[11px] text-gray-400 leading-none">AI-powered answers about our ecosystem</p>
                    </div>
                </div>

                {/* Command bar - redirects on submit */}
                <div className="relative group mt-4">
                    {/* 3D Purple Glow Underneath (Hover/Focus only) */}
                    <div className={cn(
                        'absolute -inset-1 bg-linear-to-r from-violet-400 via-fuchsia-300 to-indigo-400 rounded-lg blur-xl transition-all duration-500 z-0',
                        inputFocused ? 'opacity-40 scale-100' : 'opacity-0 scale-90 group-hover:opacity-20 group-hover:scale-95'
                    )} />

                    {/* Elevated Glossy Input Container (Less rounded) */}
                    <div className={cn(
                        'relative z-10 bg-white/95 backdrop-blur-md rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-200/80 flex items-center transition-all duration-300',
                        (inputFocused || value.trim() ? "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]" : "group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]")
                    )}>
                        <AnimatePresence mode="wait">
                            <motion.input
                                key="minimal-input"
                                ref={inputRef}
                                type="text"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                onKeyDown={handleMinimalKeyDown}
                                onFocus={() => setInputFocused(true)}
                                onBlur={() => setInputFocused(false)}
                                className="w-full h-12 pl-5 pr-14 text-sm text-gray-900 bg-transparent outline-none relative z-10 rounded-lg"
                            />
                            {!value && (
                                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none z-0">
                                    <TypingAnimation
                                        words={ROTATING_PLACEHOLDERS}
                                        blinkCursor={true}
                                        pauseDelay={2000}
                                        loop
                                        className="text-sm text-gray-400 font-normal"
                                        duration={50}
                                        delay={100}
                                        deleteSpeed={30}
                                    />
                                </div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => handleMinimalSubmit()}
                            disabled={!value.trim()}
                            className={cn(
                                'absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300',
                                value.trim()
                                    ? 'bg-black hover:bg-gray-900 cursor-pointer text-white shadow-md scale-100'
                                    : 'bg-black opacity-40 text-white cursor-not-allowed scale-95'
                            )}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // FULL VARIANT - dedicated AI conversation interface
    // ─────────────────────────────────────────────────────────────────────────
    return (
        <div className={cn(
            'relative w-full flex flex-col items-center overflow-hidden',
            'bg-white rounded-3xl border border-gray-100 shadow-sm min-h-[600px]',
            className
        )}>
            {/* Background blobs */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="bg-violet-400/10 absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full mix-blend-multiply blur-[128px]" />
                <div className="bg-fuchsia-400/10 absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full mix-blend-multiply blur-[128px] delay-700" />
            </div>

            {/* Mouse-tracking glow (when input is focused on intro screen) */}
            {inputFocused && !hasStarted && (
                <motion.div
                    className="pointer-events-none fixed z-0 h-200 w-200 rounded-full bg-linear-to-r from-violet-200 via-violet-100 to-fuchsia-100 opacity-20 blur-[100px]"
                    animate={{ x: mousePosition.x - 400, y: mousePosition.y - 400 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 150, mass: 0.5 }}
                />
            )}

            <div className="relative z-10 w-full flex flex-col h-full max-w-3xl pt-12 px-4 md:px-8">

                {/* ── Intro screen (before first message) ── */}
                {!hasStarted && (
                    <motion.div
                        className="flex-1 flex flex-col justify-center items-center -mt-10"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="space-y-4 text-center mb-10">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
                                <div className="flex justify-center mb-6">
                                    <MergexOrb size={64} />
                                </div>
                                <h1 className="pb-2 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">{introTitle}</h1>
                                <motion.div
                                    className="h-px bg-linear-to-r from-transparent via-violet-200 to-transparent mx-auto"
                                    initial={{ width: 0, opacity: 0 }} animate={{ width: '80%', opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                />
                            </motion.div>
                            <motion.p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                {introDescription}
                            </motion.p>
                        </div>
                    </motion.div>
                )}

                {/* ── Chat history ── */}
                {hasStarted && (
                    <div className="flex-1 relative overflow-hidden -mx-4 md:-mx-8">
                        <div className="h-full overflow-y-auto px-4 md:px-8 pb-32 scroll-smooth">
                            {/* Sticky header */}
                            <div className="flex justify-between items-center mb-6 sticky top-0 py-3 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <MergexOrb size={22} />
                                    <h3 className="text-xs font-bold text-gray-900">Mergex Intelligence</h3>
                                </div>
                                <button onClick={clearHistory} className="text-[10px] text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 px-2 py-1 rounded-full border border-gray-100 transition-colors">
                                    Clear
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex flex-col gap-4">
                                {messages.map(msg => (
                                    <motion.div key={msg.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                                        className={cn('w-full flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                                        <div className={cn(
                                            'max-w-[90%] px-4 py-2.5 rounded-xl text-sm leading-relaxed',
                                            msg.role === 'user'
                                                ? 'bg-violet-600 text-white rounded-br-none shadow-sm'
                                                : 'bg-gray-100 text-gray-800 border border-gray-200 rounded-bl-none'
                                        )}>
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing indicator */}
                                <AnimatePresence>
                                    {isTyping && (
                                        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="flex justify-start w-full">
                                            <div className="bg-white border border-violet-100 rounded-xl rounded-bl-none px-4 py-2 flex gap-2 items-center shadow-sm">
                                                <Sparkles className="text-violet-500 w-3 h-3 animate-pulse" />
                                                <p className="text-xs text-gray-500 font-medium tracking-wide">Thinking</p>
                                                <TypingDots />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div ref={messagesEndRef} className="h-2" />
                            </div>
                        </div>

                        {/* Bottom Gradient Overlay for text visibility */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/80 to-transparent pointer-events-none z-11" />
                    </div>
                )}

                {/* ── Input area ── */}
                <motion.div
                    layout
                    className={cn(
                        'w-full transition-all duration-500',
                        !hasStarted ? 'relative mx-auto mb-10' : 'absolute bottom-8 left-0 right-0 px-4 md:px-8 z-12'
                    )}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    {/* Suggested prompts (shown before first message) */}
                    {!hasStarted && suggestions.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center justify-center gap-2 mb-4"
                        >
                            {suggestions.map((s, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => handleSendMessage(s)}
                                    className="group bg-white border border-gray-200 text-gray-500 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition-all shadow-sm"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                >
                                    {s}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}

                    {/* Textarea input */}
                    <div className="relative group mx-2 mb-2 md:mx-0 md:mb-0">
                        {/* 3D Purple Glow Underneath (Hover/Focus only) */}
                        <div className={cn(
                            'absolute -inset-1.5 bg-linear-to-r from-violet-500 via-fuchsia-400 to-indigo-500 rounded-2xl blur-xl transition-all duration-500 z-0',
                            inputFocused ? 'opacity-60 scale-100' : 'opacity-0 scale-90 group-hover:opacity-30 group-hover:scale-95'
                        )} />

                        {/* Elevated Glossy Input Container (Less rounded) */}
                        <div className={cn(
                            'relative z-10 bg-white/95 backdrop-blur-md rounded-lg shadow-[0_6px_24px_rgba(0,0,0,0.05)] p-2 transition-all duration-300 border border-gray-200/80',
                            (inputFocused || value.trim() ? "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]" : "group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]")
                        )}>
                            <div className="relative">
                                <textarea
                                    ref={textareaRef}
                                    value={value}
                                    onChange={e => { setValue(e.target.value); adjustHeight(); }}
                                    onKeyDown={handleKeyDown}
                                    onFocus={() => setInputFocused(true)}
                                    onBlur={() => setInputFocused(false)}
                                    className="w-full text-gray-900 px-4 py-3 shadow-none border-none ring-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none text-base min-h-[60px] resize-none bg-transparent relative z-10"
                                    disabled={isTyping}
                                />
                                {!value && (
                                    <div className="absolute top-3 left-4 pointer-events-none z-0">
                                        <TypingAnimation
                                            words={[placeholder ?? 'Ask about systems, Mergex insights, or AI...']}
                                            blinkCursor={true}
                                            pauseDelay={2000}
                                            loop
                                            className="text-base text-gray-400 font-normal"
                                            duration={50}
                                            delay={100}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-end px-3 pb-2 mt-1 pt-1 border-t border-gray-100/50">
                                <motion.button
                                    type="button"
                                    onClick={() => handleSendMessage()}
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    disabled={isTyping || !value.trim()}
                                    className={cn(
                                        'rounded-lg flex items-center justify-center w-8 h-8 transition-all duration-200',
                                        value.trim() && !isTyping
                                            ? 'bg-black hover:bg-gray-900 cursor-pointer text-white shadow-sm'
                                            : 'bg-black opacity-40 text-white cursor-not-allowed'
                                    )}
                                >
                                    {isTyping
                                        ? <LoaderIcon className="h-4 w-4 animate-[spin_2s_linear_infinite]" />
                                        : <ArrowRight className="h-4 w-4" />
                                    }
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Back link */}
                    <div className="flex items-center justify-center mt-4">
                        <Link href="/" className="text-[11px] text-gray-300 hover:text-gray-400 transition-colors">
                            ← Back to Mergex
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
