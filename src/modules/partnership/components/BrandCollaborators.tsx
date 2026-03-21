import { motion } from 'framer-motion';
import { Target, Gift, Radio } from 'lucide-react';

const COLLAB_TYPES = [
    {
        icon: Target,
        title: 'Product Collabs',
        description: 'Have an audience but need a product? We co-create and co-launch digital products, sharing the revenue and the success.'
    },
    {
        icon: Gift,
        title: 'Open Source Tools',
        description: 'Partner with us to build free, high-value public tools for the community that build goodwill and brand awareness.'
    },
    {
        icon: Radio,
        title: 'Tech Content & Media',
        description: 'From co-hosted hackathons to technical webinars, we love participating in content that pushes the industry forward.'
    }
];

export function BrandCollaborators() {
    return (
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-(family-name:--font-playfair) font-bold mb-6">
                        We love building cool things<br />
                        <span className="text-violet-400">with cool people.</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Whether you&apos;re a designer with a vision, a creator with an audience, or a community leader, let&apos;s build something exceptional together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {COLLAB_TYPES.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <motion.div
                                key={type.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6">
                                    <Icon className="w-7 h-7 text-violet-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {type.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
