export interface HeroSection {
    id: number;
    heading: string;
    subheading: string;
    backgroundImage: string;
}

export const HERO_SECTIONS: HeroSection[] = [
    {
        id: 1,
        heading: 'Build Systems That Scale',
        subheading: 'Modern software solutions designed for growth, efficiency, and impact',
        backgroundImage: '/assets/hero/systems-hero-1.jpg',
    },
    {
        id: 2,
        heading: 'Expertise Meets Execution',
        subheading: 'Strategic partners ingrained in your business success',
        backgroundImage: '/assets/hero/systems-hero-2.jpg',
    },
    {
        id: 3,
        heading: 'Technology That Delivers',
        subheading: 'From concept to deployment, we build solutions that work',
        backgroundImage: '/assets/hero/systems-hero-3.jpg',
    },
];

