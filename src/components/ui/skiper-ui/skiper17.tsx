"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Clean, valid card elements only
      const cardElements = cardRefs.current.filter((el) => el !== null);
      const totalCards = cardElements.length;

      if (!cardElements[0] || !container.current) return;

      // 1. Initial Position & Z-Index Management
      // Card 0 at y=0, others at y=100
      gsap.set(cardElements, {
        y: (i) => (i === 0 ? "0%" : "100%"), // First card visible, others stack below
        zIndex: (i) => i,
        scale: 1,
        opacity: 1,
      });

      // 2. Create the Timeline with PINNING
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          // Based on transitions (totalCards - 1) with 1.5x buffer to ensure pin holds
          end: () => `+=${window.innerHeight * (totalCards - 1) * 1.5}`,
          pin: true,
          pinSpacing: true, // Explicitly enable pin spacing
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // 3. Animate Cards: Loop through pairs
      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];

        if (!currentCard || !nextCard) continue;

        scrollTimeline
          // Animate Current Card OUT
          .to(currentCard, {
            scale: 0.85,
            filter: "brightness(0.5)",
            duration: 1,
            ease: "none",
          })
          // Animate Next Card IN (simultaneously)
          .to(nextCard, {
            y: "0%",
            duration: 1,
            ease: "none",
          }, "<");
      }
    },
    { scope: container, dependencies: [cards] }
  );

  return (
    <div
      className={cn("relative h-screen w-full", className)}
      ref={container}
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div
          className={cn(
            "relative h-[80vh] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
            containerClassName
          )}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-3xl bg-black shadow-2xl will-change-transform"
            >
              <img
                src={card.image}
                alt={card.alt || ""}
                className={cn("h-full w-full object-cover", imageClassName)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                {card.title && (
                  <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
                )}
                {card.description && (
                  <p className="text-white/80">{card.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skiper17 = () => {
  const defaultCards = [
    { id: 1, image: "/images/lummi/img14.png" },
    { id: 2, image: "/images/lummi/img15.png" },
    { id: 3, image: "/images/lummi/img29.png" },
  ];

  return (
    <ReactLenis root>
      <StickyCard002 cards={defaultCards} />
    </ReactLenis>
  );
};

export { Skiper17, StickyCard002 };
