'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { TextRoll } from '@/components/ui/skiper-ui/skiper58';

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="block py-0.5">
            <TextRoll
                className="text-white hover:text-white transition-colors tracking-widest"
                style={{ lineHeight: '1.2', textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}
            >
                {label}
            </TextRoll>
        </Link>
    );
}

const FOOTER_LINKS = {
    solutions: [
        { label: 'Mergex Systems', href: '/systems' },
        { label: 'Mergex Labs', href: '/labs' },
    ],
    insights: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
    ],
    company: [
        { label: 'About Mergex', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partner With Us', href: '/partner' },
        { label: 'Contact', href: '/contact' },
    ],
};

const SOCIAL_LINKS = [
    { icon: 'linkedin', href: 'https://linkedin.com/mergex.co', label: 'LinkedIn' },
    { icon: 'x', href: 'https://x.com/mergexco', label: 'X' },
    { icon: 'instagram', href: 'https://www.instagram.com/mergexco', label: 'Instagram' },
    { icon: 'threads', href: 'https://threads.com/mergex.co', label: 'Threads' },
    { icon: 'whatsapp', href: 'https://wa.me/919042172025', label: 'WhatsApp' },
    { icon: 'dribbble', href: 'https://dribbble.com/mergex', label: 'Dribbble' },
    { icon: 'behance', href: 'https://behance.net/mergex', label: 'Behance' },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} as const;

const menuItemFadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
} as const;

const menuStaggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3
        }
    }
};

import { useLenisScroll } from '@/lib/lenis-provider';

// ... (existing imports/constants)


// ... (existing imports/constants)


const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

export default function Footer() {
    const scrollTo = useLenisScroll();
    const pathname = usePathname();
    const isLabsOrSystems = pathname === '/labs' || pathname === '/systems';

    return (
        <>
            {/* Footer */}
            <footer className="bg-black pt-12 lg:pt-16 pb-8 lg:pb-10 relative overflow-hidden">


                <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-4 md:px-10 lg:px-16 xl:px-20 relative z-20">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 mb-4 lg:mb-6 mt-12 lg:mt-16">
                        {/* Brand Column */}
                        <motion.div
                            className="md:col-span-4 lg:col-span-5 xl:col-span-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.div
                                className="mb-4 inline-block cursor-pointer"
                                variants={fadeInUp}
                                onClick={() => scrollTo(0)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src="/logo/flat_logo.png"
                                    alt="Mergex"
                                    width={160}
                                    height={54}
                                    className="h-10 w-auto"
                                />
                            </motion.div>
                            <motion.p variants={fadeInUp} className="text-lg text-gray-300 font-body leading-relaxed mb-4 max-w-sm">
                                Where ideas merge with innovation
                            </motion.p>

                            {/* Social Icons */}
                            <motion.div
                                variants={staggerContainer}
                                className="flex gap-4 overflow-x-auto hide-scrollbar"
                                style={{ WebkitOverflowScrolling: 'touch' }}
                            >
                                {SOCIAL_LINKS.map((link) => (
                                    <motion.a
                                        variants={fadeInUp}
                                        key={link.icon}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center text-white"
                                        aria-label={link.label}
                                    >
                                        {link.icon === 'linkedin' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        )}
                                        {link.icon === 'x' && (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        )}
                                        {link.icon === 'instagram' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                            </svg>
                                        )}
                                        {link.icon === 'threads' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
                                                <path d="M427.5 299.7C429.7 300.6 431.7 301.6 433.8 302.5C463 316.6 484.4 337.7 495.6 363.9C511.3 400.4 512.8 459.7 465.3 507.1C429.1 543.3 385 559.6 322.7 560.1L322.4 560.1C252.2 559.6 198.3 536 162 489.9C129.7 448.9 113.1 391.8 112.5 320.3L112.5 319.8C113 248.3 129.6 191.2 161.9 150.2C198.2 104.1 252.2 80.5 322.4 80L322.7 80C393 80.5 447.6 104 485 149.9C503.4 172.6 517 199.9 525.6 231.6L485.2 242.4C478.1 216.6 467.4 194.6 453 177C423.8 141.2 380 122.8 322.5 122.4C265.5 122.9 222.4 141.2 194.3 176.8C168.1 210.1 154.5 258.3 154 320C154.5 381.7 168.1 429.9 194.3 463.3C222.3 498.9 265.5 517.2 322.5 517.7C373.9 517.3 407.9 505.1 436.2 476.8C468.5 444.6 467.9 405 457.6 380.9C451.5 366.7 440.5 354.9 425.7 346C422 372.9 413.9 394.3 401 410.8C383.9 432.6 359.6 444.4 328.3 446.1C304.7 447.4 282 441.7 264.4 430.1C243.6 416.3 231.4 395.3 230.1 370.8C227.6 322.5 265.8 287.8 325.3 284.4C346.4 283.2 366.2 284.1 384.5 287.2C382.1 272.4 377.2 260.6 369.9 252C359.9 240.3 344.3 234.3 323.7 234.2L323 234.2C306.4 234.2 284 238.8 269.7 260.5L235.3 236.9C254.5 207.8 285.6 191.8 323.1 191.8L323.9 191.8C386.5 192.2 423.8 231.3 427.6 299.5L427.4 299.7L427.5 299.7zM271.5 368.5C272.8 393.6 299.9 405.3 326.1 403.8C351.7 402.4 380.7 392.4 385.6 330.6C372.4 327.7 357.8 326.2 342.2 326.2C337.4 326.2 332.6 326.3 327.8 326.6C284.9 329 270.6 349.8 271.6 368.4L271.5 368.5z" />
                                            </svg>
                                        )}
                                        {link.icon === 'whatsapp' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                        )}
                                        {link.icon === 'dribbble' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
                                                <path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM484 186.4C513.5 222.4 531.4 268.4 531.8 318.4C524.8 316.9 454.8 302.7 384.3 311.6C378.5 297.6 373.1 285.2 365.7 270C444 238 479.5 192.5 484 186.5zM460.4 161.9C456.6 167.3 424.7 210.2 349.4 238.4C314.7 174.6 276.2 122.2 270.4 114.4C337.6 98.2 408.4 115.7 460.5 161.9zM229.9 128.6C235.5 136.3 273.3 188.7 308.4 251.1C209.3 277.4 122 277 112.6 276.9C126.3 211.2 170.6 156.5 229.9 128.6zM108.2 320.3C108.2 318.1 108.2 316 108.3 313.8C117.6 314 220.2 315.3 326 283.7C332.1 295.6 337.9 307.6 343.2 319.6C266.6 341.2 197 403.1 162.7 461.9C128.9 424.3 108.2 374.7 108.2 320.3zM190 487.4C212.1 442.2 272.2 383.8 357.6 354.6C387.3 431.9 399.6 496.7 402.8 515.2C334.7 544.2 252.8 536.3 190 487.3zM438.4 495.9C436.2 483 425 421 397.2 344.9C463.6 334.3 521.9 351.7 529.1 354C519.7 412.9 485.8 463.8 438.3 496z" />
                                            </svg>
                                        )}
                                        {link.icon === 'behance' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
                                                <path d="M264 301.2C295.8 286 312.4 263 312.4 227.2C312.4 156.6 259.8 139.4 199.1 139.4L32 139.4L32 493.8L203.8 493.8C268.2 493.8 328.7 462.9 328.7 390.9C328.7 346.4 307.6 313.5 264 301.2zM109.9 199.9L183 199.9C211.1 199.9 236.4 207.8 236.4 240.4C236.4 270.5 216.7 282.6 188.9 282.6L109.9 282.6L109.9 199.9zM193.2 433.6L109.9 433.6L109.9 336L194.8 336C229.1 336 250.8 350.3 250.8 386.6C250.8 422.4 224.9 433.6 193.2 433.6zM551.7 192.9L408 192.9L408 158L551.7 158L551.7 192.9zM608 369.2C608 293.3 563.6 230 483.1 230C404.9 230 351.8 288.8 351.8 365.8C351.8 445.7 402.1 500.5 483.1 500.5C544.4 500.5 584.1 472.9 603.2 414.2L541 414.2C534.3 436.1 506.7 447.7 485.3 447.7C444 447.7 422.3 423.5 422.3 382.4L607.4 382.4C607.7 378.2 608 373.7 608 369.2zM422.4 338C424.7 304.3 447.1 283.2 480.9 283.2C516.3 283.2 534.1 304 537.1 338L422.4 338z" />
                                            </svg>
                                        )}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Menu Group - Right Aligned */}
                        <motion.div
                            className="md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-6 xl:col-span-8 xl:col-start-5 flex flex-col md:flex-row justify-end gap-6 md:gap-8 lg:gap-12 xl:gap-16 md:pr-8 lg:pr-12 xl:pr-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {/* Solutions Column */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={menuStaggerContainer}
                            >
                                <h4 className="font-[family-name:var(--font-playfair)] font-semibold mb-4 text-white text-lg tracking-wide" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}>Solutions</h4>
                                <ul className="space-y-4 text-sm font-body">
                                    {FOOTER_LINKS.solutions.map((link) => (
                                        <motion.li key={link.label} variants={menuItemFadeUp}>
                                            <FooterLink href={link.href} label={link.label} />
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Insights Column */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={menuStaggerContainer}
                            >
                                <h4 className="font-[family-name:var(--font-playfair)] font-semibold mb-4 text-white text-lg tracking-wide" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}>Insights</h4>
                                <ul className="space-y-4 text-sm font-body">
                                    {FOOTER_LINKS.insights.map((link) => (
                                        <motion.li key={link.label} variants={menuItemFadeUp}>
                                            <FooterLink href={link.href} label={link.label} />
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Company Column */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={menuStaggerContainer}
                            >
                                <h4 className="font-[family-name:var(--font-playfair)] font-semibold mb-4 text-white text-lg tracking-wide" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}>Company</h4>
                                <ul className="space-y-4 text-sm font-body">
                                    {FOOTER_LINKS.company.map((link) => (
                                        <motion.li key={link.label} variants={menuItemFadeUp}>
                                            <FooterLink href={link.href} label={link.label} />
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Big Text Name */}
                </div>

                <div className="w-full mt-4 lg:mt-6 mb-0 relative z-10 overflow-hidden">
                    <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-4 md:px-10 lg:px-16 xl:px-20 relative z-20">
                        <div className={`flex flex-col md:flex-row items-center ${isLabsOrSystems ? 'justify-center' : 'md:items-end justify-between'} gap-8 md:gap-12 pb-8`}>
                            <div className={`relative ${isLabsOrSystems ? 'text-center' : 'text-left'}`}>
                                {/* Gradient wrapper: bg-clip-text breaks GSAP SplitText spans, so we use a CSS mask-image gradient on a wrapper div instead */}
                                <div
                                    style={{
                                        WebkitMaskImage: 'linear-gradient(to bottom, white 40%, rgba(255,255,255,0.45) 100%)',
                                        maskImage: 'linear-gradient(to bottom, white 40%, rgba(255,255,255,0.45) 100%)',
                                    }}
                                >
                                    <div className={`flex flex-row items-baseline ${isLabsOrSystems ? 'justify-center' : 'justify-center md:justify-start'} whitespace-nowrap`}>
                                        <SplitText
                                            text="Mergex"
                                            tag="h1"
                                            className="text-[14vw] md:text-[13vw] leading-none font-medium text-white tracking-[0.01em] select-none font-[family-name:var(--font-playfair)] pb-10"
                                            splitType="chars"
                                            delay={80}
                                            duration={1.2}
                                            ease="power3.out"
                                            from={{ opacity: 0, y: 60 }}
                                            to={{ opacity: 1, y: 0 }}
                                            threshold={0.1}
                                            rootMargin="-50px"
                                            textAlign="center"
                                        />
                                        {(pathname === '/labs' || pathname === '/systems') && (
                                            <div className="flex flex-row items-baseline ml-[0.3em]">
                                                <SplitText
                                                    text={pathname === '/labs' ? 'L' : 'S'}
                                                    tag="span"
                                                    className="text-[14vw] md:text-[13vw] leading-none font-normal text-white select-none overflow-visible px-[0.1em] pb-10"
                                                    style={{ fontFamily: "'Great Vibes', cursive" }}
                                                    splitType="chars"
                                                    delay={200}
                                                    duration={1.2}
                                                    ease="power3.out"
                                                    from={{ opacity: 0, y: 60 }}
                                                    to={{ opacity: 1, y: 0 }}
                                                    threshold={0.1}
                                                    rootMargin="-50px"
                                                    textAlign="center"
                                                />
                                                <SplitText
                                                    text={pathname === '/labs' ? 'abs' : 'ystems'}
                                                    tag="span"
                                                    className="text-[10vw] md:text-[9vw] leading-none font-medium text-white tracking-[0.01em] select-none font-[family-name:var(--font-playfair)] ml-[-0.05em] pb-10"
                                                    splitType="chars"
                                                    delay={300}
                                                    duration={1.2}
                                                    ease="power3.out"
                                                    from={{ opacity: 0, y: 60 }}
                                                    to={{ opacity: 1, y: 0 }}
                                                    threshold={0.1}
                                                    rootMargin="-50px"
                                                    textAlign="center"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {pathname !== '/labs' && pathname !== '/systems' && (
                                <motion.div
                                    className="max-w-sm lg:max-w-md text-center md:text-right flex flex-col items-center md:items-end gap-6 md:mb-10"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={staggerContainer}
                                >
                                    <style jsx global>{`
                                        @keyframes gradient-x {
                                            0% { background-position: 0% 50%; }
                                            100% { background-position: 200% 50%; }
                                        }
                                        .animate-gradient-x {
                                            animation: gradient-x 3s linear infinite;
                                        }
                                    `}</style>
                                    <motion.p variants={fadeInUp} className="text-white text-sm lg:text-base leading-relaxed font-body" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                                        Mergex is a business architecture company replacing fragmented growth with engineered scale.
                                    </motion.p>
                                    <motion.div variants={fadeInUp}>
                                        <Link
                                            href="/pitch-deck.pdf"
                                            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg border border-white/20 overflow-hidden"
                                        >
                                            <span className="relative z-10 font-medium tracking-wide text-sm">Download Pitch Deck</span>
                                            <svg
                                                className="w-4 h-4 relative z-10 transition-transform group-hover:translate-y-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >

                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                                            </svg>
                                        </Link>
                                    </motion.div>
                                    <motion.p variants={fadeInUp} className="block md:hidden opacity-100 font-medium text-gray-300 text-center text-sm">We believe good systems outlast trends.</motion.p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-4 md:px-10 lg:px-16 xl:px-20 relative z-20">

                    <motion.div
                        className="pt-15 pb-0 flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6 text-sm lg:text-base text-gray-400 font-body relative z-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                            <p>© 2026 Mergex. All rights reserved.</p>
                            <span className="hidden md:block text-gray-500">|</span>
                            <p className="hidden md:block opacity-100 font-medium text-gray-300 text-center md:text-left">We believe good systems outlast trends.</p>
                        </div>
                        <div className="flex gap-6">
                            <a className="hover:text-white transition-colors" href="#">
                                Privacy Policy
                            </a>
                            <a className="hover:text-white transition-colors" href="#">
                                Terms & Conditions
                            </a>
                            <button
                                onClick={() => scrollTo(0)}
                                className="ml-2 w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center text-white group"
                                aria-label="Back to Top"
                            >
                                {/* Arrow-up-to-line icon: a top bar + upward arrow */}
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="5" y1="4" x2="19" y2="4" />
                                    <path d="M12 8v12" />
                                    <path d="M7 13l5-5 5 5" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </>
    );
}
