'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const showcaseData = [
    {
        place: 'AI Product Photography',
        title: 'E-COMMERCE',
        title2: 'VISUALS',
        description: 'Generated 500+ product lifestyle shots in 3 days using AI. Traditional photoshoot would take 2 weeks and $15K. AI solution: 3 days, <$2K cost.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'AI Video Production',
        title: 'BRAND',
        title2: 'CAMPAIGNS',
        description: 'Created dynamic video content for social media campaigns using AI tools. From concept to final edit in hours, not weeks.',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'Generative Design',
        title: 'UI/UX',
        title2: 'CONCEPTS',
        description: 'Rapid prototyping of user interfaces using AI-assisted design tools. Explore 10 variations in the time it takes to manually create one.',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'AI Content Creation',
        title: 'SOCIAL',
        title2: 'MEDIA',
        description: 'Automated content generation for multi-platform social media presence. Consistent quality, on-brand messaging, infinite variations.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'AI Animation',
        title: 'MOTION',
        title2: 'GRAPHICS',
        description: 'Transform static designs into engaging animations using AI-powered motion tools. Bring brand stories to life faster than ever.',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'AI Marketing Assets',
        title: 'CAMPAIGN',
        title2: 'MATERIALS',
        description: 'Complete marketing asset libraries generated in days. Banners, ads, social posts—all on-brand, all optimized, all AI-enhanced.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    },
];

export function WorkGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const orderRef = useRef([0, 1, 2, 3, 4, 5]);
    const detailsEvenRef = useRef(true);
    const loopIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const { innerHeight: height, innerWidth: width } = window;
        const offsetTop = height - 430;
        const offsetLeft = width - 830;
        const cardWidth = 200;
        const cardHeight = 300;
        const gap = 40;
        const numberSize = 50;
        const ease = 'sine.inOut';

        const getCard = (index: number) => `#card-${index}`;
        const getCardContent = (index: number) => `#card-content-${index}`;
        const getSliderItem = (index: number) => `#slide-item-${index}`;

        // INIT FUNCTION
        const init = () => {
            const [active, ...rest] = orderRef.current;
            const detailsActive = detailsEvenRef.current ? '#details-even' : '#details-odd';
            const detailsInactive = detailsEvenRef.current ? '#details-odd' : '#details-even';

            gsap.set('#pagination', {
                top: offsetTop + 330,
                left: offsetLeft,
                y: 0,
                opacity: 1,
                zIndex: 60,
            });

            gsap.set(getCard(active), {
                x: 0,
                y: 0,
                width: width,
                height: height,
                zIndex: 20,
            });
            gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
            gsap.set(detailsActive, { opacity: 1, zIndex: 22, x: 0 });
            gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
            gsap.set(`${detailsInactive} .text`, { y: 100 });
            gsap.set(`${detailsInactive} .title-1`, { y: 100 });
            gsap.set(`${detailsInactive} .title-2`, { y: 100 });
            gsap.set(`${detailsInactive} .desc`, { y: 50 });
            gsap.set(`${detailsInactive} .cta`, { y: 60 });

            gsap.set('.progress-sub-foreground', {
                width: 500 * (1 / orderRef.current.length) * (active + 1),
            });

            rest.forEach((i, index) => {
                gsap.set(getCard(i), {
                    x: offsetLeft + index * (cardWidth + gap),
                    y: offsetTop,
                    width: cardWidth,
                    height: cardHeight,
                    zIndex: 30,
                    borderRadius: '10px',
                });
                gsap.set(getCardContent(i), {
                    x: offsetLeft + index * (cardWidth + gap),
                    zIndex: 40,
                    y: offsetTop + cardHeight - 100,
                });
                gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
            });

            gsap.set('.indicator', { x: -width });
        };

        // STEP FUNCTION - THE KEY ANIMATION SEQUENCE
        const step = (): Promise<void> => {
            return new Promise((resolve) => {
                // Rotate order array
                orderRef.current.push(orderRef.current.shift()!);
                detailsEvenRef.current = !detailsEvenRef.current;

                const order = orderRef.current;
                const detailsActive = detailsEvenRef.current ? '#details-even' : '#details-odd';
                const detailsInactive = detailsEvenRef.current ? '#details-odd' : '#details-even';

                // Update text content for active details
                const activeData = showcaseData[order[0]];
                const detailsActiveEl = document.querySelector(detailsActive);
                if (detailsActiveEl) {
                    const placeText = detailsActiveEl.querySelector('.place-box .text');
                    const title1 = detailsActiveEl.querySelector('.title-1');
                    const title2 = detailsActiveEl.querySelector('.title-2');
                    const desc = detailsActiveEl.querySelector('.desc');
                    if (placeText) placeText.textContent = activeData.place;
                    if (title1) title1.textContent = activeData.title;
                    if (title2) title2.textContent = activeData.title2;
                    if (desc) desc.textContent = activeData.description;
                }

                // Animate active details in
                gsap.set(detailsActive, { zIndex: 22 });
                gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
                gsap.to(`${detailsActive} .text`, {
                    y: 0,
                    delay: 0.1,
                    duration: 0.7,
                    ease,
                });
                gsap.to(`${detailsActive} .title-1`, {
                    y: 0,
                    delay: 0.15,
                    duration: 0.7,
                    ease,
                });
                gsap.to(`${detailsActive} .title-2`, {
                    y: 0,
                    delay: 0.15,
                    duration: 0.7,
                    ease,
                });
                gsap.to(`${detailsActive} .desc`, {
                    y: 0,
                    delay: 0.3,
                    duration: 0.4,
                    ease,
                });
                gsap.to(`${detailsActive} .cta`, {
                    y: 0,
                    delay: 0.35,
                    duration: 0.4,
                    onComplete: resolve,
                    ease,
                });
                gsap.set(detailsInactive, { zIndex: 12 });

                const [active, ...rest] = order;
                const prv = rest[rest.length - 1];

                // Z-index and scale for previous card
                gsap.set(getCard(prv), { zIndex: 10 });
                gsap.set(getCard(active), { zIndex: 20 });
                gsap.to(getCard(prv), { scale: 1.5, ease }); // IMPORTANT: Scale up previous card

                // Hide active card content
                gsap.to(getCardContent(active), {
                    y: offsetTop + cardHeight - 10,
                    opacity: 0,
                    duration: 0.3,
                    ease,
                });

                // Slider numbers animation
                gsap.to(getSliderItem(active), { x: 0, ease });
                gsap.to(getSliderItem(prv), { x: -numberSize, ease });
                gsap.to('.progress-sub-foreground', {
                    width: 500 * (1 / order.length) * (active + 1),
                    ease,
                });

                // MAIN ANIMATION: Expand active card to full screen
                gsap.to(getCard(active), {
                    x: 0,
                    y: 0,
                    ease,
                    width: width,
                    height: height,
                    borderRadius: 0,
                    onComplete: () => {
                        // After expansion, reposition previous card to end of stack
                        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
                        gsap.set(getCard(prv), {
                            x: xNew,
                            y: offsetTop,
                            width: cardWidth,
                            height: cardHeight,
                            zIndex: 30,
                            borderRadius: '10px',
                            scale: 1,
                        });

                        gsap.set(getCardContent(prv), {
                            x: xNew,
                            y: offsetTop + cardHeight - 100,
                            opacity: 1,
                            zIndex: 40,
                        });
                        gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

                        // Reset inactive details
                        gsap.set(detailsInactive, { opacity: 0 });
                        gsap.set(`${detailsInactive} .text`, { y: 100 });
                        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
                        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
                        gsap.set(`${detailsInactive} .desc`, { y: 50 });
                        gsap.set(`${detailsInactive} .cta`, { y: 60 });
                    },
                });

                // Animate remaining cards
                rest.forEach((i, index) => {
                    if (i !== prv) {
                        const xNew = offsetLeft + index * (cardWidth + gap);
                        gsap.set(getCard(i), { zIndex: 30 });
                        gsap.to(getCard(i), {
                            x: xNew,
                            y: offsetTop,
                            width: cardWidth,
                            height: cardHeight,
                            ease,
                            delay: 0.1 * (index + 1),
                        });

                        gsap.to(getCardContent(i), {
                            x: xNew,
                            y: offsetTop + cardHeight - 100,
                            opacity: 1,
                            zIndex: 40,
                            ease,
                            delay: 0.1 * (index + 1),
                        });
                        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
                    }
                });
            });
        };

        // LOOP FUNCTION
        const loop = async () => {
            await gsap.to('.indicator', { x: 0, duration: 2, ease });
            await gsap.to('.indicator', {
                x: width,
                duration: 0.8,
                delay: 0.3,
                ease,
            });
            gsap.set('.indicator', { x: -width });
            await step();
            loop();
        };

        // Initialize and start loop
        init();
        setTimeout(() => {
            loop();
        }, 500);

        // Cleanup
        return () => {
            if (loopIntervalRef.current) {
                clearTimeout(loopIntervalRef.current);
            }
            gsap.killTweensOf('*');
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-gray-900">
            {/* Progress Indicator */}
            <div className="indicator fixed left-0 right-0 top-0 z-50 h-1 bg-purple-500" />

            {/* Cards */}
            {showcaseData.map((item, index) => (
                <div
                    key={index}
                    id={`card-${index}`}
                    className="absolute left-0 top-0 bg-cover bg-center shadow-2xl"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${item.image})`,
                    }}
                />
            ))}

            {/* Card Content Overlays (small labels on thumbnails) */}
            {showcaseData.map((item, index) => (
                <div
                    key={`content-${index}`}
                    id={`card-content-${index}`}
                    className="absolute left-0 top-0 pl-4 text-white"
                >
                    <div className="mb-1.5 h-1 w-8 rounded-full bg-white/90" />
                    <div className="text-sm font-medium">{item.place}</div>
                    <div className="font-['Oswald',sans-serif] text-xl font-semibold">{item.title}</div>
                    <div className="font-['Oswald',sans-serif] text-xl font-semibold">{item.title2}</div>
                </div>
            ))}

            {/* Details Even */}
            <div id="details-even" className="absolute left-[60px] top-[240px] z-20 text-white">
                <div className="place-box mb-6 h-[46px] overflow-hidden">
                    <div className="text relative pt-4 text-xl font-medium before:absolute before:left-0 before:top-0 before:h-1 before:w-8 before:rounded-full before:bg-white">
                        {showcaseData[0].place}
                    </div>
                </div>
                <div className="title-box-1 mb-1 h-[100px] overflow-hidden">
                    <div className="title-1 font-['Oswald',sans-serif] text-7xl font-semibold leading-none">
                        {showcaseData[0].title}
                    </div>
                </div>
                <div className="title-box-2 mb-4 h-[100px] overflow-hidden">
                    <div className="title-2 font-['Oswald',sans-serif] text-7xl font-semibold leading-none">
                        {showcaseData[0].title2}
                    </div>
                </div>
                <div className="desc mb-6 w-[500px] leading-relaxed text-white/90">
                    {showcaseData[0].description}
                </div>
                <div className="cta flex w-[500px] items-center gap-4">
                    <button className="grid h-9 w-9 place-items-center rounded-full bg-purple-500 transition-transform hover:scale-110">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button className="rounded-full border border-white bg-transparent px-6 py-2 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-white hover:text-gray-900">
                        View Project
                    </button>
                </div>
            </div>

            {/* Details Odd */}
            <div id="details-odd" className="absolute left-[60px] top-[240px] z-10 text-white opacity-0">
                <div className="place-box mb-6 h-[46px] overflow-hidden">
                    <div className="text relative pt-4 text-xl font-medium before:absolute before:left-0 before:top-0 before:h-1 before:w-8 before:rounded-full before:bg-white">
                        {showcaseData[1].place}
                    </div>
                </div>
                <div className="title-box-1 mb-1 h-[100px] overflow-hidden">
                    <div className="title-1 font-['Oswald',sans-serif] text-7xl font-semibold leading-none">
                        {showcaseData[1].title}
                    </div>
                </div>
                <div className="title-box-2 mb-4 h-[100px] overflow-hidden">
                    <div className="title-2 font-['Oswald',sans-serif] text-7xl font-semibold leading-none">
                        {showcaseData[1].title2}
                    </div>
                </div>
                <div className="desc mb-6 w-[500px] leading-relaxed text-white/90">
                    {showcaseData[1].description}
                </div>
                <div className="cta flex w-[500px] items-center gap-4">
                    <button className="grid h-9 w-9 place-items-center rounded-full bg-purple-500 transition-transform hover:scale-110">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button className="rounded-full border border-white bg-transparent px-6 py-2 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-white hover:text-gray-900">
                        View Project
                    </button>
                </div>
            </div>

            {/* Pagination Controls */}
            <div id="pagination" className="absolute flex items-center gap-5">
                <button className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/30 transition-all hover:border-white/60 hover:bg-white/10">
                    <svg
                        className="h-6 w-6 text-white/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/30 transition-all hover:border-white/60 hover:bg-white/10">
                    <svg
                        className="h-6 w-6 text-white/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <div className="progress-sub-container ml-6 flex h-12 w-[500px] items-center">
                    <div className="progress-sub-background h-[3px] w-full rounded-full bg-white/20">
                        <div className="progress-sub-foreground h-[3px] rounded-full bg-purple-500" />
                    </div>
                </div>
                <div className="slide-numbers relative h-12 w-12 overflow-hidden">
                    {showcaseData.map((_, index) => (
                        <div
                            key={index}
                            id={`slide-item-${index}`}
                            className="item absolute left-0 top-0 grid h-12 w-12 place-items-center text-3xl font-bold text-white"
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
