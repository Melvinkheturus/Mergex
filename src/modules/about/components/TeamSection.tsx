'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

/**
 * Note: Add team images to /public/images/team/
 * Images should be natural, candid working moments:
 * - Studio shots
 * - Whiteboards
 * - Laptops + discussions
 * NO stiff portraits or "arms crossed" poses
 */
interface TeamMember {
    id: string;
    image: string;
    alt: string;
    name: string;
    role: string;
    abbr: string;
    bio: string;
    socials: {
        twitter?: string;
        linkedin?: string;
        github?: string;
        instagram?: string;
    };
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'Manikandan',
        role: 'Founder & CEO',
        abbr: 'CEO',
        bio: 'I don’t just understand strategy, I understand why it fails, and how to make it work.',
        socials: { 
            twitter: 'https://x.com/melvinkheturus', 
            linkedin: 'https://www.linkedin.com/in/smk-manikandan', 
            instagram: 'https://instagram.com/melvinkheturus' 
        },
        image: 'https://res.cloudinary.com/mergex/image/upload/v1773041085/Manikandan_vqjeld.jpg',
        alt: 'Manikandan, Founder & CEO'
    },
    {
        id: '2',
        name: 'Sharukesh',
        role: 'Co-founder & CSO',
        abbr: 'CSO',
        bio: 'Strategic operator focused on building resilient systems that solve complex problems.',
        socials: { twitter: '#', linkedin: '#', instagram: '#' },
        image: 'https://res.cloudinary.com/mergex/image/upload/v1773201678/team/Sharukesh.jpg',
        alt: 'Sharukesh, Co-founder & CSO'
    },
    {
        id: '3',
        name: 'John Peter',
        role: 'CBO',
        abbr: 'CBO',
        bio: 'Driving growth through value-based partnerships and market expansion.',
        socials: { twitter: '#', linkedin: '#' },
        image: 'https://res.cloudinary.com/mergex/image/upload/v1773201629/team/Manikandan.jpg',
        alt: 'John Peter, CBO'
    },
    {
        id: '4',
        name: 'Muralidharan',
        role: 'CIO',
        abbr: 'CIO',
        bio: 'Building next-generation platforms that scale with architectural integrity.',
        socials: { twitter: '#', linkedin: '#' },
        image: 'https://res.cloudinary.com/mergex/image/upload/v1773041068/Muralidharan_lq5enk.jpg',
        alt: 'Muralidharan, CIO'
    },
    {
        id: '5',
        name: 'Yasshwanth',
        role: 'CPO',
        abbr: 'CPO',
        bio: 'Product visionary committed to refining user experience and system functionality.',
        socials: { twitter: '#', linkedin: '#', instagram: '#' },
        image: 'https://res.cloudinary.com/mergex/image/upload/v1773201735/team/Muralidharan.jpg',
        alt: 'Yasshwanth, CPO'
    }
];

const ROLE_FULL_FORMS: Record<string, string> = {
    'Founder & CEO': 'Chief Executive Officer',
    'Co-founder & CSO': 'Chief Strategy Officer',
    'CBO': 'Chief Business Officer',
    'CIO': 'Chief Innovation Officer',
    'CPO': 'Chief Product Officer'
};

/**
 * TeamMemberCard - Handles the fade-to-info interaction
 */
function TeamMemberCard({ member, index }: { member: TeamMember, index: number }) {
    const [isActive, setIsActive] = useState(false);
    const fullRole = ROLE_FULL_FORMS[member.role] || member.role;

    return (
        <div 
            className="relative w-[280px] shrink-0 snap-center md:w-full md:max-w-[220px] aspect-4/5 md:aspect-3/4 group cursor-pointer rounded-2xl overflow-hidden bg-neutral-950"
            onClick={() => setIsActive(!isActive)}
        >
            {/* Background Image - Fades completely out on click */}
            <motion.div
                initial={false}
                animate={{ 
                    opacity: isActive ? 0 : 1,
                    scale: isActive ? 1.1 : 1,
                    filter: isActive ? 'blur(10px)' : 'blur(0px)'
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                />
                {/* Bottom gradient overlay - only for inactive state to ensure text readability */}
                <motion.div 
                    animate={{ opacity: isActive ? 0 : 1 }}
                    className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" 
                />
            </motion.div>

            {/* Inactive Content: Name and Role (Visible by default) */}
            <motion.div 
                animate={{ 
                    opacity: isActive ? 0 : 1,
                    y: isActive ? 20 : 0
                }}
                className="absolute bottom-0 left-0 right-0 p-5 text-left z-10"
            >
                <h3 className="text-white font-semibold text-base md:text-lg leading-tight">{member.name}</h3>
                <p className="inline-block bg-linear-to-b from-purple-400 to-purple-800 bg-clip-text text-transparent text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 opacity-90">{member.role}</p>
            </motion.div>

            {/* Active Content Overlay: Bio, Socials, Watermark - Appears on solid background */}
            <motion.div
                initial={false}
                animate={{ 
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full p-6 flex flex-col justify-between z-20 pointer-events-none"
                style={{ pointerEvents: isActive ? 'auto' : 'none' }}
            >
                <div className="space-y-4">
                    <div className="pb-4 border-b border-white/5 space-y-1">
                        <h3 className="text-white font-bold text-lg leading-none">{member.name}</h3>
                        <p className="inline-block bg-linear-to-b from-purple-400 to-purple-800 bg-clip-text text-transparent text-[10px] tracking-widest uppercase font-black">{member.role}</p>
                        {fullRole !== member.role && (
                            <p className="text-[10px] text-neutral-500 font-medium tracking-wide block leading-none">{fullRole}</p>
                        )}
                    </div>
                    
                    <p className="text-[11px] md:text-xs text-neutral-300 leading-relaxed italic font-light">
                        &ldquo;{member.bio}&rdquo;
                    </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                    <div className="flex gap-3">
                        {member.socials.linkedin && (
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        )}
                        {member.socials.twitter && (
                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z"/></svg>
                            </a>
                        )}
                        {member.socials.instagram && (
                            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.555-.788.305-1.458.715-2.123 1.381-.666.666-1.076 1.335-1.381 2.123-.297.763-.498 1.634-.555 2.911-.059 1.28-.073 1.688-.073 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.555 2.911.305.788.715 1.458 1.381 2.123.666.666 1.335 1.076 2.123 1.381.763.297 1.634.498 2.911.555 1.28.059 1.688.073 4.947.073s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.555.788-.305-1.458-.715 2.123-1.381.666-.666 1.076-1.335 1.381-2.123.297-.763.498-1.634.555-2.911.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.555-2.911-.305-.788-.715-1.458-1.381-2.123-.666-.666-1.335-1.076-2.123-1.381-.763-.297-1.634-.498-2.911-.555-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                        )}
                    </div>
                    <span className="inline-block bg-linear-to-b from-purple-400 to-purple-800 bg-clip-text text-transparent text-[10px] font-bold uppercase tracking-widest">Connect</span>
                </div>

                {/* Stylized Role Watermark - Centered "Partial Fill" Effect */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
                    <span 
                        className="text-[120px] font-black italic tracking-tighter leading-none"
                        style={{ 
                            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
                            backgroundImage: 'linear-gradient(to top, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        {member.abbr}
                    </span>
                </div>
            </motion.div>
        </div>
    );
}

/**
 * TeamSection - Human Proof & Mergex Minds
 */
export function TeamSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative bg-white py-20 md:py-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] relative z-10 w-full overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-center w-full"
                >
                    {/* Centered Copy */}
                    <div className="max-w-3xl mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="block text-violet-600 font-medium tracking-widest text-sm md:text-base mb-4 uppercase"
                        >
                            Mergex Minds
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight italic"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            Minds Behind The Architects of Mergex
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 leading-relaxed mx-auto max-w-2xl px-4"
                        >
                            A team of builders designing systems, ideas, and technologies that power the Mergex ecosystem.
                        </motion.p>
                    </div>

                    {/* Team Members Display: Swiper for Mobile, Grid for Desktop */}
                    <div className="w-full mt-8">
                        {/* Mobile Carousel - Breakout to Full Width */}
                        <div className="md:hidden -mx-6 w-[calc(100%+3rem)] overflow-visible">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                slidesPerView={'auto'}
                                centeredSlides={true}
                                spaceBetween={20}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                className="pb-12! px-6!"
                            >
                                {TEAM_MEMBERS.map((member, index) => (
                                    <SwiperSlide key={`mobile-${member.id}`} className="w-[280px]!">
                                        <TeamMemberCard member={member} index={index} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Desktop Grid Layout */}
                        <div className="hidden md:flex gap-6 w-full justify-center">
                            {TEAM_MEMBERS.map((member, index) => (
                                <TeamMemberCard key={`desktop-${member.id}`} member={member} index={index} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}