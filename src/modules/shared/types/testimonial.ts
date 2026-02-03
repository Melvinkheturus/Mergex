/**
 * Testimonial Types
 * Used across parent site for trust-building social proof
 */

export interface Testimonial {
    id: string;
    quote: string;
    author: {
        name: string;        // First name + Last initial (e.g., "Sarah K.")
        role?: string;       // Optional role (e.g., "Product Lead")
        company?: string;    // Optional company name
    };
}

export interface TestimonialsSectionProps {
    className?: string;
}
