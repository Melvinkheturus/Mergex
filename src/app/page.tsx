
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

function useCountdown(targetTimestampMs: number): Countdown {
  const [timeLeftMs, setTimeLeftMs] = useState<number>(() => {
    return Math.max(targetTimestampMs - Date.now(), 0);
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const tick = () => {
      setTimeLeftMs(Math.max(targetTimestampMs - Date.now(), 0));
    };

    // Run immediately so we do not wait for the first interval
    tick();
    intervalRef.current = setInterval(tick, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [targetTimestampMs]);

  const totalSeconds = Math.floor(timeLeftMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
    completed: timeLeftMs === 0,
  };
}

export default function Home() {
  // Set your launch date here
  const targetDateMs = useMemo(() => Date.now() + 7 * 24 * 60 * 60 * 1000, []);
  const { days, hours, minutes, seconds, completed } = useCountdown(targetDateMs);

  return (
    <div className="relative min-h-dvh overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/30 to-black text-white">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(1000px_circle_at_10%_-10%,rgba(168,85,247,0.25),transparent_50%),radial-gradient(800px_circle_at_110%_10%,rgba(79,70,229,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <main className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6 py-20">
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl ring-1 ring-white/5 md:p-12">
          {/* Brand */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image
                src="/Mergex.png"
                alt="Mergex logo"
                fill
                sizes="(max-width: 768px) 48px, 56px"
                className="object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                priority
              />
            </div>
            <span className="text-2xl font-bold tracking-tight md:text-3xl">Mergex</span>
          </div>

          {/* Headline */}
          <h1 className="bg-gradient-to-r from-violet-300 via-white to-violet-200 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent md:text-5xl">
            We’re launching soon
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70 md:mt-4 md:text-base">
            We are crafting something delightful. Be the first to know when it’s live.
          </p>

          {/* Countdown */}
          <div className="mt-8 md:mt-10">
            {completed ? (
              <p className="text-center text-lg font-semibold text-emerald-300">We have launched!</p>
            ) : (
              <CountdownTimer days={days} hours={hours} minutes={minutes} seconds={seconds} />
            )}
          </div>

          {/* Email capture (optional UI only) */}
          <form className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email to get notified"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md focus:border-violet-400"
            />
            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Notify me
            </button>
          </form>

          {/* Socials */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {[
              {
                href: "https://x.com/",
                label: "X",
                svg: (
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path fill="currentColor" d="M18.9 2H22l-8.6 9.8L22.7 22h-7.1l-5.6-7.3L3.6 22H1l9.2-10.4L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.9L6.4 4H4.5l13.2 16Z" />
                  </svg>
                ),
              },
              {
                href: "https://www.instagram.com/mergexhq?igsh=bzlvYmNiOTEwZDhs",
                label: "Instagram",
                svg: (
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.6.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.6.4 1.4.5 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.5 2.6-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.6.3-1.4.4-2.6.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.6-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.6-.4-1.4-.5-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .5-2.6.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.6-.3 1.4-.4 2.6-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.7.2 3.9.6 3 .9 2.2 1.4 1.4 2.2.6 3 .1 3.8 0 4.7c-.4.8-.5 1.8-.6 3.1C-.6 9.1-.6 9.5-.6 12s0 2.9.1 4.2c.1 1.3.2 2.3.6 3.1.3.9.8 1.7 1.6 2.5.8.8 1.6 1.3 2.5 1.6.8.4 1.8.5 3.1.6C8.3 24 8.7 24 12 24s3.7 0 5-.1c1.3-.1 2.3-.2 3.1-.6.9-.3 1.7-.8 2.5-1.6.8-.8 1.3-1.6 1.6-2.5.4-.8.5-1.8.6-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.3-.6-3.1C22.6 1.6 22.1.8 21.3 0c-.8-.8-1.6-1.3-2.5-1.6-.8-.4-1.8-.5-3.1-.6C15.7 0 15.3 0 12 0Z" />
                    <circle cx="18" cy="6" r="1.2" fill="currentColor" />
                    <path fill="currentColor" d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 0 0 12 5.8m0 10.2A4 4 0 1 1 12 7.8a4 4 0 0 1 0 8.2Z" />
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com/",
                label: "LinkedIn",
                svg: (
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path fill="currentColor" d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.96v5.7H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                ),
              },
              {
                href: "https://github.com/",
                label: "GitHub",
                svg: (
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.56v-2c-3.26.7-3.95-1.4-3.95-1.4-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.68.08-.68 1.13.08 1.73 1.17 1.73 1.17 1.01 1.73 2.66 1.23 3.31.94.1-.75.4-1.23.73-1.52-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.16-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.2a11 11 0 0 1 5.83 0c2.22-1.5 3.2-1.2 3.2-1.2.63 1.65.23 2.87.12 3.17.75.83 1.2 1.88 1.2 3.16 0 4.51-2.74 5.5-5.35 5.8.41.36.77 1.06.77 2.14v3.17c0 .31.22.67.81.55A11.5 11.5 0 0 0 12 .5Z" />
                  </svg>
                ),
              },
            ].map(({ href, label, svg }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {svg}
              </a>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Mergex. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
