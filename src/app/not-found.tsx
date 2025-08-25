"use client";

import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background py-10">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-bold md:text-8xl lg:text-9xl leading-tight bg-linear-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent animate-gradient-move">
          Oops!
        </h1>
        <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4 max-w-4xl leading-relaxed">
          Looks like this page got lost in the Merge.
        </h2>
        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          But don’t worry we’ll get you back on track.
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Link href="/">
            <button className="rounded-lg bg-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50">
              Back to Home
            </button>
          </Link>
          <Link href="/services">
            <button className="rounded-lg border border-purple-600 px-8 py-3 text-lg font-semibold text-purple-400 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50">
              View Our Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}