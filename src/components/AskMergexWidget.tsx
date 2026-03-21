'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import {
    X,
    SendHorizontal,
    ChevronDown,
    ArrowRight,
    Plus,
    Trash2,
    MessageSquare,
    LoaderIcon,
    ChevronRight,
    Volume2,
    VolumeX,
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MergexOrb } from '@/modules/shared/components/AskMergex';
import { TypingAnimation } from '@/components/ui/typing-animation';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

interface Session {
    id: string;
    title: string;
    createdAt: number;
    messages: Message[];
}

// ─── Constants ────────────────────────────────────────────────────────────────
const SESSIONS_KEY = 'mergex_ai_sessions';
const MAX_SESSIONS = 30;

const SUGGESTIONS = [
    'Which Mergex solution fits my business?',
    'How can Mergex automate my workflows?',
    'What can Mergex build for my company?',
    'Should I start with Labs or Systems?',
];

const PLACEHOLDERS = [
    'Describe your challenge...',
];

const GUIDED_QUESTIONS = [
    {
        id: 'intent',
        question: 'What are you trying to do right now?',
        options: [
            { label: 'Explore AI for my business', value: 'explore' },
            { label: 'Build a product or platform', value: 'systems' },
            { label: 'Automate workflows', value: 'systems' },
            { label: 'Create AI-powered content', value: 'labs' },
        ],
    },
    {
        id: 'stage',
        question: 'Where are you in your journey?',
        options: [
            { label: 'Just exploring possibilities', value: 'exploring' },
            { label: 'Planning a solution', value: 'planning' },
            { label: 'Actively building something', value: 'building' },
            { label: 'Looking to scale an existing system', value: 'scaling' },
        ],
    },
    {
        id: 'need',
        question: 'What would help you most right now?',
        options: [
            { label: 'A clear system architecture', value: 'systems' },
            { label: 'AI tools or automation', value: 'systems' },
            { label: 'Creative AI content', value: 'labs' },
            { label: 'A technical partner to build it', value: 'contact' },
        ],
    },
];

const INTENT_WORDS = [
    'build',
    'automation',
    'system',
    'website',
    'platform',
    'pricing',
    'project',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function createSession(): Session {
    return {
        id: `session-${Date.now()}`,
        title: 'New Conversation',
        createdAt: Date.now(),
        messages: [],
    };
}

function loadSessions(): Session[] {
    if (typeof window === 'undefined') return [];
    try {
        const raw = localStorage.getItem(SESSIONS_KEY);
        if (!raw) return [];
        return JSON.parse(raw) as Session[];
    } catch {
        return [];
    }
}

function saveSessions(sessions: Session[]) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions.slice(0, MAX_SESSIONS)));
}

function formatDate(ts: number) {
    const diff = Date.now() - ts;
    if (diff < 60_000) return 'Just now';
    if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
    if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
    return `${Math.floor(diff / 86_400_000)}d ago`;
}

function getTopicCTAs(text: string) {
    const lower = text.toLowerCase();
    const ctas: { label: string; href: string }[] = [];
    if (lower.match(/automation|workflow|scaling|platform|system|architecture/))
        ctas.push({ label: 'View Mergex Systems', href: '/systems' });
    if (lower.match(/visual|ai|avatar|creative|media|generative|labs/))
        ctas.push({ label: 'View Mergex Labs', href: '/labs' });
    if (lower.match(/pricing|cost|budget|how much/))
        ctas.push({ label: 'View Pricing', href: '/pricing' });
    if (ctas.length === 0) ctas.push({ label: 'Talk to Our Team', href: '/contact' });

    // Always append "Talk to Our Team" if not present and less than 2 CTAs
    if (!ctas.some(c => c.href === '/contact') && ctas.length < 2) {
        ctas.push({ label: 'Talk to Our Team', href: '/contact' });
    }

    return ctas.slice(0, 2);
}

// ─── TypingDots ───────────────────────────────────────────────────────────────
function TypingDots() {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3].map((d) => (
                <motion.div
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-violet-500"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.15, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
}

// ─── useAutoResizeTextarea ────────────────────────────────────────────────────
function useAutoResizeTextarea(minHeight: number, maxHeight: number) {
    const ref = useRef<HTMLTextAreaElement>(null);
    const adjust = useCallback(
        (reset?: boolean) => {
            const el = ref.current;
            if (!el) return;
            if (reset) { el.style.height = `${minHeight}px`; return; }
            el.style.height = `${minHeight}px`;
            el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
        },
        [minHeight, maxHeight]
    );
    useEffect(() => { if (ref.current) ref.current.style.height = `${minHeight}px`; }, [minHeight]);
    return { ref, adjust };
}

// ─── Main Widget ──────────────────────────────────────────────────────────────
export default function AskMergexWidget() {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState<'chat' | 'history'>('chat');

    const [isHovered, setIsHovered] = useState(false);
    const [hasInitialExpanded, setHasInitialExpanded] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasInitialExpanded(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const isExpanded = hasInitialExpanded || isHovered;

    // Sessions
    const [sessions, setSessions] = useState<Session[]>([]);
    const [activeSession, setActiveSession] = useState<Session>(createSession());

    // Chat
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [inputFocused, setInputFocused] = useState(false);

    // Speech states
    const [speakingId, setSpeakingId] = useState<string | null>(null);

    const toggleSpeech = useCallback((id: string, text: string) => {
        if (speakingId === id) {
            window.speechSynthesis.cancel();
            setSpeakingId(null);
        } else {
            window.speechSynthesis.cancel();

            // Clean markdown for clearer speech
            const cleanText = text
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // [label](url) -> label
                .replace(/(\*\*|__)(.*?)\1/g, '$2')      // bold
                .replace(/(\*|_)(.*?)\1/g, '$2')        // italic
                .replace(/`([^`]+)`/g, '$1');            // inline code

            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.onend = () => setSpeakingId(null);
            utterance.onerror = () => setSpeakingId(null);
            window.speechSynthesis.speak(utterance);
            setSpeakingId(id);
        }
    }, [speakingId]);

    // Guided flow
    const [guidedStep, setGuidedStep] = useState<number | null>(null);
    const [guidedAnswers, setGuidedAnswers] = useState<string[]>([]);
    const [leadData, setLeadData] = useState({ name: '', email: '', company: '' });

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { ref: textareaRef, adjust } = useAutoResizeTextarea(44, 140);

    // Load sessions on mount
    useEffect(() => {
        setSessions(loadSessions());
    }, []);


    // Scroll to bottom on new messages
    useEffect(() => {
        if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping, open]);

    // Handle closing speech
    useEffect(() => {
        if (!open) {
            window.speechSynthesis.cancel();
            setSpeakingId(null);
        }
    }, [open]);

    // ─── API ─────────────────────────────────────────────────────────────────
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
            return 'Unable to connect. Please try again in a moment.';
        }
    };

    // ─── Send ─────────────────────────────────────────────────────────────────
    const handleSend = async (textOverride?: string) => {
        const text = (textOverride ?? input).trim();
        if (!text || isTyping) return;

        const isFirst = !hasStarted;
        if (!hasStarted) setHasStarted(true);
        setInput('');
        adjust(true);
        setGuidedStep(null);

        const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', content: text };
        const updated = [...messages, userMsg];
        setMessages(updated);
        setIsTyping(true);
        let answer = '';

        // ── Priority Access trigger ──────────────────────────────────────────
        if (text.toLowerCase() === 'priority') {
            answer = `**Priority Architect Access - ₹299**

You can unlock priority access here:

[Unlock Priority Access →](https://rzp.io/l/mergex-priority)

This gives you:
- **Immediate attention** from a Mergex architect
- **Skip the queue** - no waiting
- **Direct review** of your project or system

**₹299 is fully credited toward your project if we work together.**

After payment, schedule your priority session at:
[cal.com/mergex/priority](https://cal.com/mergex/priority)

*We only accept a limited number of architecture projects each month.*`;

            // ── Connect trigger → show two-tier offer ───────────────────────────
        } else if (text.toLowerCase() === 'connect') {
            answer = `Here are two ways to connect with our team:

---

**Discovery Call** - Free

Schedule a call with our team. Ideal for most projects.

[Schedule a Free Call →](https://cal.com/mergex/discovery)

---

**Priority Architect Access** - ₹299

Skip the queue and get immediate attention from a Mergex architect. ₹299 is fully credited toward your project if we work together.

Type **"priority"** and I'll send the access link.

*We only accept a limited number of architecture projects each month.*`;

        } else {
            answer = await callAPI(text);

            // Add auto-follow-up CTA if intent is detected
            const hasIntent = INTENT_WORDS.some(word =>
                text.toLowerCase().includes(word)
            );

            if (hasIntent && !answer.toLowerCase().includes('connect')) {
                answer += '\n\nIf you\'d like to speak with our team, type **"connect"** - I\'ll show you a free discovery call and our Priority Architect Access option.';
            }
        }

        const aiMsg: Message = { id: `a-${Date.now()}`, role: 'assistant', content: answer };
        const final = [...updated, aiMsg];
        setMessages(final);
        setIsTyping(false);

        const updatedSession: Session = {
            ...activeSession,
            title: isFirst ? text.slice(0, 48) : activeSession.title,
            messages: final,
        };
        setActiveSession(updatedSession);
        setSessions(prev => {
            const next = [updatedSession, ...prev.filter(s => s.id !== updatedSession.id)];
            saveSessions(next);
            return next;
        });
    };

    // Listen for custom event to open chat
    const isAutoTypingRef = useRef(false);
    useEffect(() => {
        const handleOpenChat = async (e: any) => {
            if (isAutoTypingRef.current) return;

            const detail = (e as CustomEvent).detail;
            const textToType = detail?.chatPrompt || detail?.question || detail?.message;

            setOpen(true);

            if (textToType) {
                isAutoTypingRef.current = true;
                // Wait for the drawer/widget to open animation to complete
                await new Promise(resolve => setTimeout(resolve, 600));

                // Simulate typing
                let currentText = "";
                for (let i = 0; i <= textToType.length; i++) {
                    currentText = textToType.slice(0, i);
                    setInput(currentText);
                    // Force adjust height as we type
                    if (textareaRef.current) {
                        textareaRef.current.style.height = '48px';
                        const newHeight = Math.max(48, Math.min(textareaRef.current.scrollHeight, 160));
                        textareaRef.current.style.height = `${newHeight}px`;
                    }
                    await new Promise(resolve => setTimeout(resolve, 15 + Math.random() * 5));
                }

                // Brief pause before auto-sending
                await new Promise(resolve => setTimeout(resolve, 300));
                handleSend(textToType);
                isAutoTypingRef.current = false;
            }
        };

        window.addEventListener('mergex-open-chat', handleOpenChat as EventListener);
        return () => window.removeEventListener('mergex-open-chat', handleOpenChat as EventListener);
    }, [handleSend, textareaRef]);

    // ─── Conversation controls ────────────────────────────────────────────────
    const handleNewConversation = () => {
        setActiveSession(createSession());
        setMessages([]);
        setHasStarted(false);
        setInput('');
        setGuidedStep(null);
        setGuidedAnswers([]);
        setView('chat');
    };

    const handleLoadSession = (session: Session) => {
        setActiveSession(session);
        setMessages(session.messages);
        setHasStarted(session.messages.length > 0);
        setView('chat');
    };

    const handleDeleteSession = (e: React.MouseEvent, sessionId: string) => {
        e.stopPropagation();
        setSessions(prev => {
            const next = prev.filter(s => s.id !== sessionId);
            saveSessions(next);
            return next;
        });
        if (activeSession.id === sessionId) handleNewConversation();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (input.trim()) handleSend();
        }
    };

    // ─── Guided flow ──────────────────────────────────────────────────────────
    const handleGuidedAnswer = (value: string) => {
        const newAnswers = [...guidedAnswers, value];
        setGuidedAnswers(newAnswers);
        if (guidedStep! < 2) {
            setGuidedStep(guidedStep! + 1);
        } else {
            if (typeof window !== 'undefined') {
                localStorage.setItem('mergex_guided_answers', JSON.stringify(newAnswers));
            }
            setGuidedStep(3); // Go to lead capture
        }
    };

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setGuidedStep(4); // Go to results
    };

    const skipLeadCapture = () => {
        setGuidedStep(4); // Go to results
    };

    const getGuidedRecommendation = () => {
        const systemsVotes = guidedAnswers.filter(a => ['systems', 'scaling', 'planning', 'building'].includes(a)).length;
        const labsVotes = guidedAnswers.filter(a => ['labs', 'explore'].includes(a)).length;
        const isSystems = systemsVotes >= labsVotes;

        return isSystems
            ? {
                title: 'Based on what you shared, Mergex Systems is the best fit.',
                desc: 'We design and build scalable digital infrastructure, automation pipelines, and AI-enabled systems.',
                cta1: { label: 'Explore Mergex Systems', href: '/systems' },
                cta2: { label: 'Book a Strategy Call', href: '/contact' }
            }
            : {
                title: 'Looks like Mergex Labs is the right place for you.',
                desc: 'Labs is where we experiment with generative AI, creative automation, and digital experiences.',
                cta1: { label: 'Explore Mergex Labs', href: '/labs' },
                cta2: { label: 'Start a Creative Project', href: '/contact' }
            };
    };

    // ─── Render ───────────────────────────────────────────────────────────────
    return (
        <>
            {/* Backdrop Blur Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-118 bg-black/10 backdrop-blur-[6px]"
                    />
                )}
            </AnimatePresence>

            {/* ── FAB Button ── */}
            <motion.button
                layout
                onClick={() => setOpen(v => !v)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-120 overflow-hidden flex items-center bg-linear-to-b from-violet-300 to-violet-800 text-white text-[11px] md:text-[12px] font-medium select-none shadow-lg shadow-violet-900/30 rounded-[10px]"
                initial={false}
                animate={{
                    paddingLeft: isExpanded ? 14 : 10,
                    paddingRight: isExpanded ? 14 : 10,
                    paddingTop: isExpanded ? 10 : 10,
                    paddingBottom: isExpanded ? 10 : 10,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ filter: 'brightness(1.1)', y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ask Mergex"
            >
                {/* Shimmer sweep */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
                    }}
                    animate={{ x: ['-100%', '180%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                />

                <div className="flex items-center justify-center shrink-0 w-4 h-4">
                    <AnimatePresence mode="wait" initial={false}>
                        {open ? (
                            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex justify-center items-center">
                                <ChevronDown className="w-4 h-4" />
                            </motion.span>
                        ) : (
                            <motion.span key="orb" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.18 }} className="flex justify-center items-center">
                                <MergexOrb size={16} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                            animate={{ width: 'auto', opacity: 1, marginLeft: 6 }}
                            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden whitespace-nowrap"
                        >
                            Ask Mergex
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* ── Chat Panel ── */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="panel"
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 28, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.96 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="fixed bottom-[64px] right-4 md:bottom-[76px] md:right-6 z-119 flex flex-col pointer-events-auto"
                        style={{
                            width: 'min(420px, calc(100vw - 32px))',
                            height: 'min(600px, calc(100dvh - 100px))',
                            background: '#ffffff',
                            borderRadius: '20px',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(0,0,0,0.07)',
                            overflow: 'hidden',
                        }}
                    >
                        {/* ── Header ── */}
                        <div className="flex items-center justify-between px-3 md:px-4 py-3 border-b border-gray-100 bg-white shrink-0">
                            <div className="flex items-center gap-2 md:gap-2.5">
                                <MergexOrb size={24} className="md:w-[28px] md:h-[28px]" />
                                <div>
                                    <p className="text-[12px] md:text-[13px] font-bold text-gray-900 leading-none">Mergex</p>
                                    <p className="text-[10px] text-violet-500 font-semibold uppercase tracking-widest mt-0.5">Intelligence</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {/* History toggle */}
                                <button
                                    onClick={() => setView(v => v === 'history' ? 'chat' : 'history')}
                                    className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                                    aria-label="History"
                                    title="Chat history"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                </button>
                                {/* New chat */}
                                <button
                                    onClick={handleNewConversation}
                                    className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                                    aria-label="New conversation"
                                    title="New conversation"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                                {/* Close */}
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <AnimatePresence mode="wait" initial={false}>
                            {/* ── History View ── */}
                            {view === 'history' ? (
                                <motion.div
                                    key="history"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.18 }}
                                    className="flex-1 overflow-y-auto px-3 py-3 min-h-0"
                                    data-lenis-prevent="true"
                                >
                                    {sessions.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center h-full pb-8 text-center">
                                            <MessageSquare className="w-10 h-10 text-gray-200 mb-3" />
                                            <p className="text-sm text-gray-400">No conversations yet</p>
                                            <button
                                                onClick={handleNewConversation}
                                                className="mt-4 text-xs font-semibold text-violet-600 hover:text-violet-700"
                                            >
                                                Start one →
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Recent</p>
                                            {sessions.map(session => (
                                                <div
                                                    key={session.id}
                                                    onClick={() => handleLoadSession(session)}
                                                    role="button"
                                                    tabIndex={0}
                                                    onKeyDown={e => { if (e.key === 'Enter') handleLoadSession(session); }}
                                                    className={cn(
                                                        'w-full text-left px-3 py-2.5 rounded-xl group transition-all relative cursor-pointer',
                                                        activeSession.id === session.id
                                                            ? 'bg-violet-50 text-violet-700'
                                                            : 'hover:bg-gray-50 text-gray-600'
                                                    )}
                                                >
                                                    <p className="text-xs font-medium truncate pr-6 leading-snug">{session.title}</p>
                                                    <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(session.createdAt)}</p>
                                                    <button
                                                        onClick={e => handleDeleteSession(e, session.id)}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500 text-gray-400 transition-all"
                                                        aria-label="Delete"
                                                    >
                                                        <Trash2 className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            ))}
                                            {sessions.length > 0 && (
                                                <button
                                                    onClick={() => { setSessions([]); saveSessions([]); handleNewConversation(); }}
                                                    className="w-full mt-3 flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                                >
                                                    <Trash2 className="w-3 h-3" /> Clear all history
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            ) : (
                                /* ── Chat View ── */
                                <motion.div
                                    key="chat"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.18 }}
                                    className="flex-1 flex flex-col min-h-0"
                                >
                                    {/* Messages area */}
                                    <div className="flex-1 relative overflow-hidden min-h-0">
                                        <div className="h-full overflow-y-auto px-4 py-4 pb-32 scroll-smooth" data-lenis-prevent="true">

                                            {/* Empty / Welcome state */}
                                            {!hasStarted && (
                                                <AnimatePresence mode="wait">
                                                    {guidedStep === null ? (
                                                        <motion.div
                                                            key="welcome"
                                                            initial={{ opacity: 0, y: 8 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0 }}
                                                            className="flex flex-col items-center text-center pt-2 pb-4"
                                                        >
                                                            <div className="relative mb-4">
                                                                <div className="absolute inset-0 blur-2xl bg-violet-300/30 rounded-full scale-150" />
                                                                <MergexOrb size={52} className="relative z-10" />
                                                            </div>
                                                            <h2 className="text-[17px] font-semibold text-gray-900 mb-1 leading-snug">
                                                                Your AI Strategy Starts Here
                                                            </h2>
                                                            <p className="text-[13px] text-gray-400 mb-5 max-w-[260px] leading-relaxed">
                                                                Tell me what you're trying to build.<br />
                                                                I'll help you discover the fastest path

                                                            </p>

                                                            {/* Guided flow trigger */}
                                                            <button
                                                                onClick={() => { setGuidedStep(0); setGuidedAnswers([]); }}
                                                                className="mb-5 text-[12px] font-semibold text-violet-600 hover:text-violet-700 flex items-center gap-1 transition-colors"
                                                            >
                                                                Not sure where to begin? I’ll guide you in seconds. <ChevronRight className="w-3.5 h-3.5" />
                                                            </button>

                                                            {/* Suggestion chips */}
                                                            <div className="flex flex-col gap-2 w-full">
                                                                {SUGGESTIONS.map((s, i) => (
                                                                    <motion.button
                                                                        key={i}
                                                                        onClick={() => handleSend(s)}
                                                                        initial={{ opacity: 0, y: 4 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: 0.05 + i * 0.05 }}
                                                                        className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-gray-100 text-left text-[12px] font-medium text-gray-600 hover:border-violet-200 hover:text-violet-700 hover:bg-violet-50 transition-all group"
                                                                    >
                                                                        <span>{s}</span>
                                                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-violet-400 transition-all -translate-x-1 group-hover:translate-x-0" />
                                                                    </motion.button>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    ) : (
                                                        /* Guided flow */
                                                        <motion.div
                                                            key="guided"
                                                            initial={{ opacity: 0, scale: 0.97 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className="w-full"
                                                        >
                                                            {guidedStep < 3 ? (
                                                                <>
                                                                    <div className="flex justify-between items-center mb-5">
                                                                        <p className="text-[10px] font-bold text-violet-500 uppercase tracking-widest">
                                                                            Question {guidedStep + 1} of 3
                                                                        </p>
                                                                        <button onClick={() => setGuidedStep(null)} className="text-gray-400 hover:text-gray-600">
                                                                            <X className="w-3.5 h-3.5" />
                                                                        </button>
                                                                    </div>
                                                                    <p className="text-[15px] font-bold text-gray-900 mb-4">
                                                                        {GUIDED_QUESTIONS[guidedStep].question}
                                                                    </p>
                                                                    <div className="space-y-2">
                                                                        {GUIDED_QUESTIONS[guidedStep].options.map((opt, i) => (
                                                                            <button
                                                                                key={i}
                                                                                onClick={() => handleGuidedAnswer(opt.value)}
                                                                                className="w-full text-left px-4 py-3 rounded-xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 text-[12px] font-medium text-gray-600 hover:text-violet-700 transition-all flex items-center justify-between group"
                                                                            >
                                                                                {opt.label}
                                                                                <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-violet-400" />
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                </>
                                                            ) : guidedStep === 3 ? (
                                                                <div className="text-left py-2">
                                                                    <div className="flex justify-between items-center mb-5">
                                                                        <p className="text-[10px] font-bold text-violet-500 uppercase tracking-widest">
                                                                            Last Step
                                                                        </p>
                                                                        <button onClick={() => setGuidedStep(null)} className="text-gray-400 hover:text-gray-600">
                                                                            <X className="w-3.5 h-3.5" />
                                                                        </button>
                                                                    </div>
                                                                    <p className="text-[15px] font-bold text-gray-900 mb-2">Want help with this?</p>
                                                                    <p className="text-[12px] text-gray-500 mb-4">Leave your details and we'll send a quick plan specific to your answers.</p>

                                                                    <form onSubmit={handleLeadSubmit} className="space-y-2.5 mb-3">
                                                                        <input type="text" placeholder="Name" required value={leadData.name} onChange={e => setLeadData({ ...leadData, name: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5 text-[12px] outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-200" />
                                                                        <input type="email" placeholder="Work Email" required value={leadData.email} onChange={e => setLeadData({ ...leadData, email: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5 text-[12px] outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-200" />
                                                                        <button type="submit" className="w-full py-2.5 bg-violet-600 text-white rounded-xl font-bold text-[12px] shadow-md shadow-violet-200 hover:bg-violet-700 transition-all mt-1">Get My Custom Plan</button>
                                                                    </form>
                                                                    <button onClick={skipLeadCapture} className="w-full text-center text-[11px] text-gray-400 hover:text-gray-600 font-medium pb-2">Skip & see recommendation →</button>
                                                                </div>
                                                            ) : (
                                                                <div className="text-center py-4">
                                                                    <div className="w-12 h-12 bg-violet-100/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                                                        <Image src="/icons/sparkle star.png" alt="Sparkle" width={24} height={24} className="opacity-80" />
                                                                    </div>
                                                                    <p className="text-[15px] font-bold text-gray-900 mb-2">{getGuidedRecommendation().title}</p>
                                                                    <p className="text-[12px] text-gray-500 leading-relaxed mb-6">{getGuidedRecommendation().desc}</p>

                                                                    <div className="flex flex-col gap-2 mb-3">
                                                                        <Link href={getGuidedRecommendation().cta1.href} onClick={() => setOpen(false)} className="block w-full py-3 bg-violet-600 text-white rounded-xl font-bold text-[12px] shadow-md shadow-violet-200 hover:bg-violet-700 transition-all">
                                                                            {getGuidedRecommendation().cta1.label}
                                                                        </Link>
                                                                        <Link href={getGuidedRecommendation().cta2.href} onClick={() => setOpen(false)} className="block w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-[12px] hover:bg-gray-50 hover:border-gray-300 transition-all">
                                                                            {getGuidedRecommendation().cta2.label}
                                                                        </Link>
                                                                    </div>

                                                                    <button onClick={() => setGuidedStep(null)} className="text-[12px] text-gray-500 font-medium hover:text-gray-700">
                                                                        Back to Chat
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}

                                            {/* Messages */}
                                            {hasStarted && (
                                                <div className="space-y-4">
                                                    {messages.map((msg, idx) => (
                                                        <motion.div
                                                            key={msg.id}
                                                            initial={{ opacity: 0, y: 6 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                        >
                                                            {msg.role === 'user' ? (
                                                                <div className="flex justify-end">
                                                                    <div className="max-w-[80%] bg-linear-to-b from-violet-300 to-violet-800 text-white rounded-2xl rounded-br-md px-4 py-2.5 text-[13px] leading-relaxed shadow-lg shadow-violet-500/10">
                                                                        {msg.content}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="flex gap-2.5">
                                                                    <div className="shrink-0 mt-0.5">
                                                                        <MergexOrb size={22} />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="flex items-center justify-between mb-1">
                                                                            <p className="text-[10px] font-bold text-violet-500 uppercase tracking-wider">
                                                                                Mergex Intelligence
                                                                            </p>
                                                                            <button
                                                                                onClick={() => toggleSpeech(msg.id, msg.content)}
                                                                                className={cn(
                                                                                    "p-1.5 rounded-lg transition-all",
                                                                                    speakingId === msg.id
                                                                                        ? "bg-violet-100 text-violet-600 scale-110"
                                                                                        : "text-gray-300 hover:text-gray-500 hover:bg-gray-100"
                                                                                )}
                                                                            >
                                                                                {speakingId === msg.id ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                                                                            </button>
                                                                        </div>
                                                                        <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 text-[13.5px] text-gray-700 leading-relaxed shadow-sm">
                                                                            <div className="markdown-content prose-sm max-w-none">
                                                                                <ReactMarkdown
                                                                                    components={{
                                                                                        a: ({ node, ...props }) => {
                                                                                            const label = typeof props.children === 'string' && props.children.startsWith('/')
                                                                                                ? props.children.substring(1)
                                                                                                : props.children;
                                                                                            return (
                                                                                                <Link href={props.href || '#'} className="text-violet-600 font-bold hover:underline" onClick={(e) => { e.stopPropagation(); setOpen(false); }}>
                                                                                                    {label}
                                                                                                </Link>
                                                                                            );
                                                                                        },
                                                                                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                                                        strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                                                                                        em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
                                                                                    }}
                                                                                >
                                                                                    {msg.content}
                                                                                </ReactMarkdown>
                                                                            </div>
                                                                        </div>
                                                                        {/* Inline CTAs after last AI message */}
                                                                        {idx === messages.length - 1 && (
                                                                            <motion.div
                                                                                initial={{ opacity: 0, y: 4 }}
                                                                                animate={{ opacity: 1, y: 0 }}
                                                                                transition={{ delay: 0.4 }}
                                                                                className="mt-2.5 flex flex-col gap-1.5"
                                                                            >
                                                                                <p className="text-[11px] font-medium text-gray-500 ml-1">Want to explore this solution?</p>
                                                                                <div className="flex flex-wrap gap-1.5">
                                                                                    {getTopicCTAs(msg.content + (messages[idx - 1]?.content || '')).map((cta, ci) => (
                                                                                        <Link
                                                                                            key={ci}
                                                                                            href={cta.href}
                                                                                            onClick={() => setOpen(false)}
                                                                                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-gray-100 bg-white hover:border-violet-200 hover:bg-violet-50 transition-all group text-[11px] font-semibold text-gray-600 hover:text-violet-700 shadow-sm"
                                                                                        >
                                                                                            {cta.label}
                                                                                            <ArrowRight className="w-2.5 h-2.5 text-gray-300 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                                                                        </Link>
                                                                                    ))}
                                                                                </div>
                                                                            </motion.div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </motion.div>
                                                    ))}

                                                    {/* Typing indicator */}
                                                    <AnimatePresence>
                                                        {isTyping && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 6 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0 }}
                                                                className="flex gap-2.5"
                                                            >
                                                                <div className="flex-shrink-0 mt-0.5">
                                                                    <MergexOrb size={22} />
                                                                </div>
                                                                <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-md px-3.5 py-2.5 flex items-center gap-2 shadow-sm">
                                                                    <Image src="/icons/sparkle star.png" alt="Thinking" width={12} height={12} className="animate-pulse opacity-60" />
                                                                    <span className="text-[11px] text-gray-400">Thinking</span>
                                                                    <TypingDots />
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>

                                                    <div ref={messagesEndRef} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Gradient Fade */}
                                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/90 to-transparent pointer-events-none z-15" />
                                    </div>

                                    {/* ── Input area ── */}
                                    <div className="absolute bottom-0 left-0 right-0 px-3 py-6 z-20 pointer-events-none">
                                        <div className="pointer-events-auto">

                                            <div className="relative group z-10">
                                                {/* Intense Glow on focus */}
                                                <div className={cn(
                                                    'absolute -inset-1 bg-linear-to-r from-violet-400 via-fuchsia-300 to-indigo-400 rounded-xl blur-xl transition-all duration-500 z-0',
                                                    inputFocused ? 'opacity-30 scale-100' : 'opacity-0 scale-90 group-hover:opacity-10'
                                                )} />

                                                <div className={cn(
                                                    'relative z-10 bg-white/90 backdrop-blur-sm rounded-xl transition-all duration-300 shadow-sm',
                                                    inputFocused ? 'border-violet-300 shadow-md ring-1 ring-violet-200' : 'border border-gray-200 hover:border-gray-300'
                                                )}>
                                                    <div className="relative px-3 pt-2.5 pb-1.5">
                                                        <textarea
                                                            ref={textareaRef}
                                                            value={input}
                                                            onChange={e => { setInput(e.target.value); adjust(); }}
                                                            onKeyDown={handleKeyDown}
                                                            onFocus={() => setInputFocused(true)}
                                                            onBlur={() => setInputFocused(false)}
                                                            disabled={isTyping}
                                                            rows={1}
                                                            className="w-full bg-transparent resize-none outline-none text-[13px] text-gray-900 placeholder-transparent leading-relaxed min-h-[44px] pr-9"
                                                        />
                                                        {!input && (
                                                            <div className="absolute top-2.5 left-3 pointer-events-none">
                                                                <TypingAnimation
                                                                    words={PLACEHOLDERS}
                                                                    blinkCursor
                                                                    pauseDelay={2500}
                                                                    loop
                                                                    startOnView={false}
                                                                    className="text-[13px] text-gray-400 font-normal"
                                                                    duration={45}
                                                                    delay={80}
                                                                    deleteSpeed={25}
                                                                />
                                                            </div>
                                                        )}

                                                        {/* Send button - absolute inside textarea zone */}
                                                        <motion.button
                                                            type="button"
                                                            onClick={() => handleSend()}
                                                            whileHover={{ scale: 1.08 }}
                                                            whileTap={{ scale: 0.94 }}
                                                            disabled={isTyping || !input.trim()}
                                                            className={cn(
                                                                'absolute right-2 bottom-2 w-7 h-7 rounded-lg flex items-center justify-center transition-all',
                                                                input.trim() && !isTyping
                                                                    ? 'bg-linear-to-br from-violet-600 to-purple-700 text-white shadow-md'
                                                                    : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                                            )}
                                                        >
                                                            {isTyping
                                                                ? <LoaderIcon className="w-3.5 h-3.5 animate-[spin_2s_linear_infinite]" />
                                                                : <SendHorizontal className="w-3.5 h-3.5" />
                                                            }
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-center text-[10px] text-gray-300 mt-2.5 flex items-center justify-center gap-1.5 bg-white/40 backdrop-blur-sm py-1 rounded-full w-fit mx-auto px-3 border border-white/20">
                                                Powered by Mergex Intelligence
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
