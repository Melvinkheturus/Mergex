"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

interface CardData {
    id: number | string;
    image: string;
    alt?: string;
    title?: string;
    description?: string;
}

interface StickyCard003Props {
    cards: CardData[];
}

const StickyCard_003 = ({
    imgUrl,
    title,
    description,
    alt,
    index,
    totalCards,
    containerProgress,
}: {
    imgUrl: string;
    title?: string;
    description?: string;
    alt?: string;
    index: number;
    totalCards: number;
    containerProgress: any;
}) => {
    // Calculate when this card should be visible based on container scroll
    const start = index / totalCards;
    const end = (index + 1) / totalCards;

    const opacity = useTransform(
        containerProgress,
        [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        containerProgress,
        [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
        [0.8, 1, 0.9, 0.8]
    );

    const rotateZ = useTransform(
        containerProgress,
        [start, end],
        [0, -5]
    );

    return (
        <motion.div
            className="absolute inset-0 h-full w-full overflow-hidden rounded-3xl bg-black shadow-2xl will-change-transform"
            style={{
                opacity,
                scale,
                rotateZ,
                zIndex: index,
            }}
        >
            <img
                src={imgUrl}
                alt={alt || ""}
                className="h-full w-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                {title && <h3 className="mb-2 text-3xl font-bold">{title}</h3>}
                {description && <p className="text-white/80">{description}</p>}
            </div>
        </motion.div>
    );
};

const Skiper34Component = ({ cards }: StickyCard003Props) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: `${cards.length * 100}vh` }}>
            {/* Sticky container that holds all cards in the same position */}
            <div className="sticky top-0 flex h-screen w-full items-center justify-center px-4">
                {/* Card stack container */}
                <div className="relative h-[80vh] w-full max-w-4xl">
                    {cards.map((card, index) => (
                        <StickyCard_003
                            key={card.id}
                            imgUrl={card.image}
                            title={card.title}
                            description={card.description}
                            alt={card.alt}
                            index={index}
                            totalCards={cards.length}
                            containerProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Example usage component with default data
const Skiper34 = () => {
    const images = [
        "/images/lummi/img14.png",
        "/images/lummi/img30.png",
        "/images/lummi/img19.png",
        "/images/lummi/img21.png",
        "/images/lummi/img23.png",
        "/images/lummi/imgp2.png",
        "/images/lummi/img27.png",
    ];

    const defaultCards = images.map((img, idx) => ({
        id: idx,
        image: img,
        alt: `Card ${idx + 1}`,
    }));

    return <Skiper34Component cards={defaultCards} />;
};

export { Skiper34, StickyCard_003, Skiper34Component };

/**
 * Skiper 34 StickyCard_003 — React + framer motion
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
