import Image from 'next/image';

export default function ClaritySection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-10">
                {/* Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium leading-relaxed text-gray-900 max-w-4xl mx-auto">
                        We believe the future belongs to the creators. That&apos;s why <span className="font-bold text-primary">Mergex</span> exists—so no founder, maker, or team is left behind.
                    </h2>
                </div>

                {/* Labs + Studio Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {/* Mergex Labs Card */}
                    <div className="group glass rounded-3xl p-10 md:p-12 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                        <div className="mb-6 relative w-24 h-24 mx-auto md:mx-0">
                            <Image
                                src="/assets/icons/labs-icon.png"
                                alt="Mergex Labs"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            Mergex <span className="text-primary">Labs</span>
                        </h3>
                        <p className="text-gray-700 font-body text-lg leading-relaxed">
                            Turn ideas into stunning visuals, ads, and content with AI—instantly. Perfect for founders who need a creative team without the budget.
                        </p>
                    </div>

                    {/* Mergex Studio Card */}
                    <div className="group glass rounded-3xl p-10 md:p-12 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer">
                        <div className="mb-6 relative w-24 h-24 mx-auto md:mx-0">
                            <Image
                                src="/assets/icons/studio-icon.png"
                                alt="Mergex Studio"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            Mergex <span className="text-blue-600">Studio</span>
                        </h3>
                        <p className="text-gray-700 font-body text-lg leading-relaxed">
                            We build powerful websites, apps, and automation systems that bring your vision to life—designed to scale as you grow.
                        </p>
                    </div>
                </div>

                {/* Bottom Statement */}
                <div className="text-center mt-12">
                    <p className="text-xl md:text-2xl font-medium text-gray-800">
                        One brand. Two engines. Built for ambitious underdogs ready to launch and scale.
                    </p>
                </div>
            </div>
        </section>
    );
}
