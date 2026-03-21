import { motion } from 'framer-motion';
import { ArrowRight, Code2, Play, Users } from 'lucide-react';

const SERVICE_MODELS = [
    {
        icon: Users,
        title: 'White-Label Build',
        description: 'We build entirely under your brand. You manage the client relationship, we act as your hidden engineering team.',
        color: 'violet'
    },
    {
        icon: Play,
        title: 'Co-Delivery',
        description: 'We partner openly with you to build and launch the project together, sharing credits and responsibilities.',
        color: 'purple'
    },
    {
        icon: Code2,
        title: 'Capability Extension',
        description: 'We act as your specialized technical arm for AI and complex engineering that your team doesn\'t have the bandwidth for.',
        color: 'indigo'
    }
];

export function ServicePartners() {
    return (
        <section className="py-20 md:py-28 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-(family-name:--font-playfair) font-bold text-gray-900 mb-6">
                            You bring the clients.<br />
                            <span className="text-violet-600">We bring the execution.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Mergex is the trusted execution partner for agencies, development shops, and consultancies worldwide. We adapt to your engagement model so you can scale revenue without the overhead of hiring full-time engineers.
                        </p>
                    </motion.div>

                    <div className="flex-1 w-full space-y-6">
                        {SERVICE_MODELS.map((model, index) => {
                            const Icon = model.icon;
                            return (
                                <motion.div
                                    key={model.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-200 transition-colors flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6 text-violet-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{model.title}</h3>
                                        <p className="text-gray-600">{model.description}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
