"use client";

import React, { memo, useMemo } from "react";

type CountdownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type PartProps = {
  value: number;
  label: string;
};

const Part = memo(function Part({ value, label }: PartProps) {
  const formatted = useMemo(() => String(value).padStart(2, "0"), [value]);
  return (
    <div className="group relative flex flex-1 min-w-[70px] max-w-[160px] select-none items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-md transition will-change-transform hover:translate-y-[-2px] hover:border-violet-400/40 hover:bg-white/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-60" />
      <time className="block text-3xl font-extrabold tracking-tighter text-violet-200 md:text-4xl">
        {formatted}
      </time>
      <span className="mt-1 block text-xs uppercase tracking-wider text-white/60 md:text-sm">
        {label}
      </span>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-20 rounded-[40px] bg-[radial-gradient(200px_80px_at_center,rgba(139,92,246,0.18),transparent_60%)]" />
      </div>
    </div>
  );
});

const CountdownTimer = memo(function CountdownTimer({ days, hours, minutes, seconds }: CountdownProps) {
  return (
    <div className="grid w-full grid-cols-2 items-center gap-3 sm:grid-cols-4">
      <Part value={days} label="Days" />
      <Part value={hours} label="Hours" />
      <Part value={minutes} label="Minutes" />
      <Part value={seconds} label="Seconds" />
    </div>
  );
});

export default CountdownTimer;