"use client"; // This component uses client-side features like useEffect

import { useEffect, useRef } from "react";
import { TextReveal } from "@/components/ui/text-reveal";
import { GeistMono } from "geist/font/mono";
import { ArrowRight, ChevronRight, Github, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedBatchText } from "@/components/ui/AnimatedBatch";
import Link from "next/link";

interface HomeHeroProps {
  badgeText?: string;
  title?: string;
  description?: string;
  primaryCTAText?: string;
  primaryCTALink?: string;
  secondaryCTAText?: string;
  secondaryCTALink?: string;
}

const HomeHero = ({
  badgeText = "Built for What's Next",
  title = "Where Ideas Merge with Innovation",
  
  // Add a new prop for the TextReveal component

  description = "We craft websites, AI tools, and digital strategies that don't just look good, they perform. From concept to launch, we build with precision, creativity, and speed.",
  primaryCTAText = "Start Your Project",
  primaryCTALink = "/contact",
  secondaryCTAText = "View Our Work",
  secondaryCTALink = "/portfolio",
}: HomeHeroProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>('.word');
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        word.style.animation = 'word-appear 0.8s ease-out forwards';
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + 'px';
        gradient.style.top = e.clientY - 192 + 'px';
        gradient.style.opacity = '1';
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = '0';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Word hover effects
    words.forEach((word) => {
      word.addEventListener('mouseenter', () => {
        word.style.textShadow = '0 0 20px rgba(200, 180, 160, 0.5)';
      });
      word.addEventListener('mouseleave', () => {
        word.style.textShadow = 'none';
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '4px';
      ripple.style.height = '4px';
      ripple.style.background = 'rgba(200, 180, 160, 0.6)';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'pulse-glow 1s ease-out forwards';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener('click', onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document
          .querySelectorAll<HTMLElement>('.floating-element')
          .forEach((el, index) => {
            setTimeout(() => {
              el.style.animationPlayState = 'running';
            }, index * 200);
          });
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="bg-background relative w-full overflow-hidden">
      {/* Mouse gradient */}
      <div 
        id="mouse-gradient" 
        ref={gradientRef} 
        className="pointer-events-none fixed h-96 w-96 rounded-full blur-3xl transition-all duration-500 ease-out" 
        style={{ 
          background: `radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 100%)`, 
          opacity: 0, // Ensure initial opacity is 0 for SSR consistency
          left: '-192px', // Initial off-screen position
          top: '-192px', // Initial off-screen position
        }} 
      ></div>
      
      {/* SVG Background */}
      <svg 
        className="absolute inset-0 h-full w-full" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="20%"
          className="grid-line"
          style={{ animationDelay: '0.5s' }}
        />
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="80%"
          className="grid-line"
          style={{ animationDelay: '1s' }}
        />
        <line
          x1="20%"
          y1="0"
          x2="20%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: '1.5s' }}
        />
        <line
          x1="80%"
          y1="0"
          x2="80%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: '2s' }}
        />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: '2.5s', opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: '3s', opacity: 0.05 }}
        />
        <circle
          cx="20%"
          cy="20%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: '3s' }}
        />
        <circle
          cx="80%"
          cy="20%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: '3.2s' }}
        />
        <circle
          cx="20%"
          cy="80%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: '3.4s' }}
        />
        <circle
          cx="80%"
          cy="80%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: '3.6s' }}
        />
        <circle
          cx="50%"
          cy="50%"
          r="1.5"
          className="detail-dot"
          style={{ animationDelay: '4s' }}
        />
      </svg>

      {/* Radial gradient overlay for depth - keeping original background colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none"></div>
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(1000px_circle_at_10%_-10%,rgba(168,85,247,0.25),transparent_50%),radial-gradient(800px_circle_at_110%_10%,rgba(79,70,229,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[16px_16px] opacity-15"></div>
      


      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-5xl flex flex-col items-center">
          {/* Badge */}
          <div
            className="mx-auto mb-6 flex justify-center"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm">
              <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <AnimatedBatchText className="text-sm font-medium">
                  {badgeText}
                </AnimatedBatchText>
                <ChevronRight
                  className="ml-1 size-4 stroke-neutral-500 transition-transform 
  duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <TextReveal
            className={cn(
              "from-white to-purple-800 bg-gradient-to-b bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl",
              GeistMono.className
            )}
          >
            {title}
          </TextReveal>

          {/* Description */}
          <p
            className="text-silver-white-300 mx-auto mt-6 max-w-2xl text-center text-lg"
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href={primaryCTALink}>
              <Button
                size="lg"
                className="group rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold relative overflow-hidden px-6 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span className="relative z-10 flex items-center">
                  {primaryCTAText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>

            <Link href={secondaryCTALink}>
              <Button
                size="lg"
                className="group border border-purple-400 text-purple-400 font-semibold relative overflow-hidden px-6 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
              >
                {secondaryCTAText}
              </Button>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HomeHero;
