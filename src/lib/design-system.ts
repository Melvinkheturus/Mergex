// Design System Constants for Mergex
// Centralized design tokens for consistent styling across the application

export const COLORS = {
    // Brand Colors
    primary: {
        purple: '#8b5cf6',
        purpleDark: '#7c3aed',
        purpleLight: '#f8f6ff',
        lavender: '#ede7f6',
        accent: '#c4b5fd',
    },

    // Background
    background: {
        light: '#f7f6f8',
        dark: '#191022',
        muted: '#f9fafb',
    },

    // Text
    text: {
        dark: '#141118',
        light: '#ededed',
        muted: '#6b7280',
    },

    // Glassmorphism
    glass: {
        bg: 'rgba(255, 255, 255, 0.7)',
        bgStrong: 'rgba(255, 255, 255, 0.85)',
        border: 'rgba(255, 255, 255, 0.3)',
    },

    // Division Colors
    divisions: {
        labs: '#8b5cf6', // Purple for innovation
        systems: '#3b82f6', // Blue for reliability
        platform: '#10b981', // Green for growth
    },
} as const;

export const TYPOGRAPHY = {
    fonts: {
        display: 'var(--font-space-grotesk), system-ui, sans-serif',
        body: 'var(--font-noto-sans), system-ui, sans-serif',
    },

    sizes: {
        // Hero Headlines
        hero: {
            mobile: '2.5rem', // 40px
            tablet: '3.5rem', // 56px
            desktop: '4.5rem', // 72px
        },

        // Section Headlines
        h1: {
            mobile: '2rem', // 32px
            tablet: '2.75rem', // 44px
            desktop: '3.5rem', // 56px
        },

        h2: {
            mobile: '1.75rem', // 28px
            tablet: '2.25rem', // 36px
            desktop: '3rem', // 48px
        },

        h3: {
            mobile: '1.5rem', // 24px
            tablet: '1.875rem', // 30px
            desktop: '2.25rem', // 36px
        },

        // Body Text
        body: {
            large: '1.25rem', // 20px
            base: '1rem', // 16px
            small: '0.875rem', // 14px
        },
    },

    weights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
} as const;

export const SPACING = {
    section: {
        mobile: '4rem', // 64px
        tablet: '6rem', // 96px
        desktop: '8rem', // 128px
    },

    container: {
        padding: {
            mobile: '1.5rem', // 24px
            tablet: '2rem', // 32px
            desktop: '3rem', // 48px
        },
        maxWidth: '1280px', // Max content width
    },

    gap: {
        xs: '0.5rem', // 8px
        sm: '1rem', // 16px
        md: '1.5rem', // 24px
        lg: '2rem', // 32px
        xl: '3rem', // 48px
        '2xl': '4rem', // 64px
    },
} as const;

export const BREAKPOINTS = {
    mobile: '640px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    wide: '1536px',
} as const;

export const ANIMATIONS = {
    duration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms',
        slower: '800ms',
    },

    easing: {
        ease: 'ease',
        easeIn: 'ease-in',
        easeOut: 'ease-out',
        easeInOut: 'ease-in-out',
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    },
} as const;

export const SHADOWS = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    glow: {
        purple: '0 0 30px rgba(139, 92, 246, 0.3)',
        purpleSm: '0 0 15px rgba(139, 92, 246, 0.2)',
    },
} as const;

export const BORDER_RADIUS = {
    sm: '0.375rem', // 6px
    base: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    full: '9999px',
} as const;

// Content for Marketing Copy
export const BRAND_VOICE = {
    tagline: 'Empower the Makers',
    mission: 'We help businesses build and grow faster through AI-powered creativity and enterprise technology.',

    divisions: {
        labs: {
            name: 'Mergex Labs',
            tagline: 'Explore Innovation',
            description: 'AI content studio & experimentation',
            longDescription: 'Turn imagination into visuals—ads, products, content—all powered by AI.',
        },
        systems: {
            name: 'Mergex Systems',
            tagline: 'Build & Automate',
            description: 'Software development & AI automation services',
            longDescription: 'Enterprise development and intelligent automation that scales with your ambition.',
        },
        platform: {
            name: 'Mergex Platform',
            tagline: 'Our Products',
            description: 'SaaS products built by makers, for makers',
            longDescription: 'Production-ready SaaS tools that solve real problems for growing businesses.',
        },
    },
} as const;
