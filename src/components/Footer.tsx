import Image from 'next/image';

const FOOTER_LINKS = {
    products: [
        { label: 'Unisynk', href: '#' },
        { label: 'Coming Soon', href: '#' },
        { label: 'Labs Tools', href: '#' },
    ],
    services: [
        { label: 'Mergex Software', href: '#' },
        { label: 'Mergex Labs', href: '#' },
        { label: 'Media', href: '#' },
        { label: 'Academy', href: '#' },
    ],
    company: [
        { label: 'About Mergex', href: '#', isPrimary: true },
        { label: 'Partner With Us', href: '#', isPrimary: true },
        { label: 'Careers', href: '#', isPrimary: true },
        { label: 'Contact', href: '#' },
    ],
};

const SOCIAL_LINKS = [
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'twitter', href: '#', label: 'Twitter/X' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
];

export default function Footer() {
    return (
        <>
            {/* CTA Section */}
            <section className="py-20 bg-white text-center border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Have a problem worth solving?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Software. AI. Products. Delivered with accountability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="h-12 px-8 rounded-full bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30">
                            Post Your Problem
                        </button>
                        <button className="h-12 px-8 rounded-full bg-white border-2 border-gray-200 text-gray-900 text-base font-medium hover:border-primary hover:text-primary transition-all">
                            Book a Strategy Call
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                        {/* Brand Column */}
                        <div className="md:col-span-4">
                            <div className="mb-4">
                                <Image
                                    src="/logo/typo-mergex.png"
                                    alt="Mergex"
                                    width={160}
                                    height={54}
                                    className="h-12 w-auto"
                                />
                            </div>
                            <p className="text-sm text-gray-600 font-body leading-relaxed mb-6 max-w-sm">
                                A technology ecosystem for building software, AI systems, and digital products.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-gray-700"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-gray-700"
                                    aria-label="Twitter/X"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-gray-700"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Products Column */}
                        <div className="md:col-span-2 md:col-start-6">
                            <h4 className="font-bold mb-4 text-gray-900 text-sm">Products</h4>
                            <ul className="space-y-3 text-sm text-gray-600 font-body">
                                {FOOTER_LINKS.products.map((link) => (
                                    <li key={link.label}>
                                        <a className="hover:text-primary transition-colors" href={link.href}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Column */}
                        <div className="md:col-span-2">
                            <h4 className="font-bold mb-4 text-gray-900 text-sm">Services</h4>
                            <ul className="space-y-3 text-sm text-gray-600 font-body">
                                {FOOTER_LINKS.services.map((link) => (
                                    <li key={link.label}>
                                        <a className="hover:text-primary transition-colors" href={link.href}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="md:col-span-2">
                            <h4 className="font-bold mb-4 text-gray-900 text-sm">Company</h4>
                            <ul className="space-y-3 text-sm font-body">
                                {FOOTER_LINKS.company.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            className={`transition-colors ${link.isPrimary
                                                ? 'text-primary hover:text-primary/80 font-medium'
                                                : 'text-gray-600 hover:text-primary'
                                                }`}
                                            href={link.href}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-body">
                        <p>© 2026 Mergex. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="hover:text-gray-700 transition-colors" href="#">
                                Privacy Policy
                            </a>
                            <a className="hover:text-gray-700 transition-colors" href="#">
                                Terms & Conditions
                            </a>
                        </div>
                    </div>

                    {/* Attribution */}
                    <div className="text-center mt-6">
                        <p className="text-xs text-gray-400">Built by Mergex Labs.</p>
                    </div>
                </div>

                {/* Large Background Logo */}
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden" style={{ height: '400px' }}>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end">
                        <div className="relative" style={{ width: '100%', maxWidth: '1600px', height: '400px' }}>
                            <Image
                                src="/logo/typo-mergex.png"
                                alt=""
                                fill
                                className="object-contain object-bottom opacity-[0.05]"
                                style={{
                                    filter: 'brightness(0) saturate(100%) invert(29%) sepia(85%) saturate(4844%) hue-rotate(262deg) brightness(91%) contrast(98%)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

