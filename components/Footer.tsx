const FOOTER_LINKS = {
    platform: [
        { label: 'Software Core', href: '#' },
        { label: 'Mergex Labs', href: '#' },
        { label: 'SaaS Ventures', href: '#' },
        { label: 'Unisynk', href: '#' },
    ],
    company: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
    ],
    connect: [
        { label: 'Twitter / X', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'GitHub', href: '#' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-gray-900 mb-6">
                            <span className="material-symbols-outlined text-primary">change_history</span>
                            <h2 className="text-xl font-bold">Mergex</h2>
                        </div>
                        <p className="text-sm text-gray-500 font-body leading-relaxed">
                            Architecting the future of technology through comprehensive ecosystems and innovative software solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-900">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-body">
                            {FOOTER_LINKS.platform.map((link) => (
                                <li key={link.label}>
                                    <a className="hover:text-primary transition-colors" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-900">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-body">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.label}>
                                    <a className="hover:text-primary transition-colors" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-900">Connect</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-body">
                            {FOOTER_LINKS.connect.map((link) => (
                                <li key={link.label}>
                                    <a className="hover:text-primary transition-colors" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-body">
                    <p>&copy; 2024 Mergex Ecosystems Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-gray-600 transition-colors" href="#">
                            Privacy Policy
                        </a>
                        <a className="hover:text-gray-600 transition-colors" href="#">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
