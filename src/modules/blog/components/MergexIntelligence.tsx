"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    Sparkles,
    Zap,
    ArrowRight,
    Volume2,
    VolumeX,
    Copy,
    Share2,
    ChevronDown,
    ChevronUp,
    ThumbsUp,
    ThumbsDown,
    History,
    Check,
    ExternalLink,
} from "lucide-react";
import { MergexOrb } from "@/modules/shared/components/AskMergex";

interface MergexIntelligenceProps {
    query: string;
    summary: string;
    keyPoints: string[];
}

const SOURCES = [
    { name: "Mergex Labs", url: "https://mergex.in/labs", desc: "Official research & product insights" },
    { name: "Industry Insights", url: "https://mergex.in/blog", desc: "Curated market analysis" },
    { name: "Strategy Guide", url: "https://mergex.in/systems", desc: "Systems & execution frameworks" },
];

export const MergexIntelligence = ({ query, summary, keyPoints }: MergexIntelligenceProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [copied, setCopied] = useState(false);
    const [shared, setShared] = useState(false);
    const [liked, setLiked] = useState<"up" | "down" | null>(null);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    // Clean up speech on unmount
    useEffect(() => {
        return () => {
            window.speechSynthesis?.cancel();
        };
    }, []);

    // ── Speaker ──────────────────────────────────────────────────────────────
    const handleSpeak = () => {
        if (!("speechSynthesis" in window)) return;

        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }

        const text = `Mergex Intelligence overview for "${query}". ${summary}. ${isExpanded ? keyPoints.join(". ") : ""}`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        utteranceRef.current = utterance;

        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
    };

    // ── Copy ─────────────────────────────────────────────────────────────────
    const handleCopy = async () => {
        const text = `Mergex Intelligence - "${query}"\n\n${summary}\n\nKey points:\n${keyPoints.map((p, i) => `${i + 1}. ${p}`).join("\n")}`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
            const el = document.createElement("textarea");
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // ── Share ─────────────────────────────────────────────────────────────────
    const handleShare = async () => {
        const shareData = {
            title: `Mergex Intelligence: ${query}`,
            text: summary,
            url: typeof window !== "undefined" ? window.location.href : "",
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
            }
            setShared(true);
            setTimeout(() => setShared(false), 2000);
        } catch {
            /* user cancelled */
        }
    };

    // ── Like / Dislike ────────────────────────────────────────────────────────
    const handleLike = (type: "up" | "down") => {
        setLiked((prev) => (prev === type ? null : type));
    };

    return (
        <section className="w-full relative">
            {/* ── Two-column wrapper ── */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                {/* ── LEFT: Main content ── */}
                <div className="flex-1 min-w-0">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-x-0 bottom-[-4px] h-2 bg-purple-500/20 blur-md rounded-full scale-x-75" />
                                <MergexOrb size={42} className="relative z-10" />
                            </div>
                            <div>
                                <span className="text-base font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-purple-400 to-purple-800 bg-size-[200%_auto] animate-text-gradient">
                                    Mergex Intelligence
                                </span>
                            </div>
                        </div>

                        {/* Speaker button in header */}
                        <button
                            onClick={handleSpeak}
                            title={isSpeaking ? "Stop speaking" : "Listen to summary"}
                            className={`p-2.5 border rounded-full transition-all ${
                                isSpeaking
                                    ? "bg-purple-50 border-purple-200 text-purple-600"
                                    : "bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-500 hover:text-gray-900"
                            }`}
                        >
                            {isSpeaking ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                        </button>
                    </div>

                    {/* Summary */}
                    <div className="space-y-6">
                        <div className={isExpanded ? "" : "relative max-h-[220px] overflow-hidden"}>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                                {summary}
                            </p>
                            {!isExpanded && (
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />
                            )}
                        </div>

                        {/* Actions row */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors py-2"
                            >
                                {isExpanded ? (
                                    <>Show less <ChevronUp className="size-4" /></>
                                ) : (
                                    <>Show more <ChevronDown className="size-4" /></>
                                )}
                            </button>

                            <div className="h-4 w-px bg-gray-200" />

                            {/* Copy */}
                            <button
                                onClick={handleCopy}
                                title="Copy summary"
                                className={`p-2 rounded-lg transition-all flex items-center gap-1.5 text-xs font-medium ${
                                    copied
                                        ? "text-green-600 bg-green-50"
                                        : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                            >
                                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                                {copied ? "Copied!" : "Copy"}
                            </button>

                            {/* Share */}
                            <button
                                onClick={handleShare}
                                title="Share this insight"
                                className={`p-2 rounded-lg transition-all flex items-center gap-1.5 text-xs font-medium ${
                                    shared
                                        ? "text-purple-600 bg-purple-50"
                                        : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                            >
                                {shared ? <Check className="size-4" /> : <Share2 className="size-4" />}
                                {shared ? "Shared!" : "Share"}
                            </button>

                            <div className="w-px h-4 bg-gray-200" />

                            {/* Like */}
                            <button
                                onClick={() => handleLike("up")}
                                title="Helpful"
                                className={`p-2 rounded-lg transition-all ${
                                    liked === "up"
                                        ? "text-green-600 bg-green-50"
                                        : "text-gray-400 hover:text-green-600 hover:bg-green-50"
                                }`}
                            >
                                <ThumbsUp className="size-4" />
                            </button>

                            {/* Dislike */}
                            <button
                                onClick={() => handleLike("down")}
                                title="Not helpful"
                                className={`p-2 rounded-lg transition-all ${
                                    liked === "down"
                                        ? "text-red-600 bg-red-50"
                                        : "text-gray-400 hover:text-red-600 hover:bg-red-50"
                                }`}
                            >
                                <ThumbsDown className="size-4" />
                            </button>
                        </div>

                        {/* Expanded key points */}
                        {isExpanded && (
                            <div className="pt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="p-1 px-3 bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wider rounded-full w-fit">
                                    Key Takeaways
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {keyPoints.map((point, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all duration-300"
                                        >
                                            <div className="shrink-0 size-6 rounded-full bg-purple-100 flex items-center justify-center">
                                                <Sparkles className="size-3 text-purple-600" />
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed font-light">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Conversion Bridge */}
                    <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-5">
                            <div className="size-14 bg-linear-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center border border-gray-800 shadow-2xl">
                                <Zap className="size-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-tight">
                                    Want a system built for this?
                                </h3>
                                <p className="text-sm text-gray-500 mt-1 font-light">
                                    Get a custom roadmap tailored to your specific needs.
                                </p>
                            </div>
                        </div>
                        <button className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-xl font-bold text-sm transition-all shadow-xl active:scale-95">
                            Guide Me
                        </button>
                    </div>
                </div>

                {/* ── RIGHT: Sources - stacked one by one ── */}
                <div className="lg:w-72 xl:w-80 shrink-0">
                    <div className="sticky top-8 space-y-4">
                        {/* Label */}
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">
                            <History className="size-3" />
                            <span>Sources explored</span>
                        </div>

                        {/* Sources listed one by one */}
                        {SOURCES.map((source, i) => (
                            <a
                                key={i}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={source.desc}
                                className="group flex items-center gap-3 p-4 bg-white hover:bg-purple-50/60 border border-gray-100 hover:border-purple-200 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
                                style={{ animationDelay: `${i * 120}ms` }}
                            >
                                {/* Source number badge */}
                                <div className="shrink-0 size-8 bg-gray-50 group-hover:bg-purple-100 rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-purple-200 transition-all font-bold text-xs text-gray-400 group-hover:text-purple-600">
                                    {i + 1}
                                </div>

                                {/* Source info */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-purple-700 transition-colors">
                                        {source.name}
                                    </p>
                                    <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                                        {source.desc}
                                    </p>
                                </div>

                                <ExternalLink className="size-3.5 text-gray-300 group-hover:text-purple-500 shrink-0 transition-colors" />
                            </a>
                        ))}

                        {/* Divider + count pill */}
                        <div className="pt-3 flex items-center gap-2">
                            <div className="flex-1 h-px bg-gray-100" />
                            <span className="text-[10px] text-gray-400 font-medium px-2">
                                {SOURCES.length} sources
                            </span>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
