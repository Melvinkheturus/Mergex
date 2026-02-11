'use client';
/**
 * SpeedAdvantage - High Velocity Edition
 * 
 * Premium design with distinctive typography and asymmetric layout.
 * Features Space Grotesk headlines and sophisticated visual composition.
 */
export function SpeedAdvantage() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#050505] to-[#0f0a15] overflow-hidden py-24 lg:py-32">

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
                {/* Header Section */}
                <div className="mb-16 lg:mb-24">
                    {/* Eyebrow with accent line */}
                    <div className="flex items-center gap-4 mb-8 animate-fadeIn">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-[#978aff] to-transparent" />
                        <span className="text-[#978aff] font-bold text-xs uppercase tracking-[0.3em]"
                            style={{ fontFamily: "var(--font-playfair)" }}>
                            Velocity Advantage
                        </span>
                    </div>

                    {/* Main Headline - Asymmetric Split */}
                    <div className="max-w-5xl animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-8"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            <span className="block text-white">We Build MVPs</span>
                            <span className="block bg-gradient-to-r from-[#978aff] via-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
                                in Weeks
                            </span>
                            <span className="block text-white/70 text-4xl md:text-5xl lg:text-6xl mt-4">Not Months</span>
                        </h2>

                        {/* Key Message */}
                        <div className="border-l-2 border-[#978aff] pl-6 mb-8 max-w-2xl">
                            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic"
                                style={{ fontFamily: "var(--font-manrope)" }}>
                                Speed isn't just a feature.<br />
                                <span className="text-[#978aff]">It's your survival strategy.</span>
                            </p>
                        </div>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            Traditional agencies sell you hours; we sell you <span className="text-white font-semibold">velocity</span>.
                            By leveraging pre-built modular architecture and zero-bureaucracy workflows, Mergex cuts the bloat
                            and ships market-ready software in weeks.
                        </p>
                    </div>

                    {/* Metric Badge - Floating */}
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#978aff]/10 via-[#ff79c6]/10 to-[#bd93f9]/10 
                                  border-2 border-[#978aff]/30 rounded-2xl px-10 py-6 mb-16 animate-fadeIn 
                                  hover:border-[#978aff]/60 hover:shadow-[0_0_40px_rgba(151,138,255,0.2)] 
                                  transition-all duration-500 group"
                        style={{ animationDelay: '0.2s' }}>
                        <div className="text-center">
                            <div className="text-6xl font-black bg-gradient-to-br from-[#978aff] to-[#ff79c6] bg-clip-text text-transparent 
                                          group-hover:scale-110 transition-transform duration-300"
                                style={{ fontFamily: "var(--font-manrope)" }}>
                                6×
                            </div>
                            <div className="text-[#978aff] text-xs font-bold uppercase tracking-wider mt-1"
                                style={{ fontFamily: "var(--font-playfair)" }}>
                                Velocity
                            </div>
                        </div>
                        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#978aff]/50 to-transparent" />
                        <div className="text-white/90 text-sm leading-tight max-w-[200px]"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            <span className="font-bold">Multiplier</span><br />
                            vs. Traditional Agencies
                        </div>
                    </div>
                </div>

                {/* The Mechanism Section */}
                <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    {/* Section Title */}
                    <div className="flex items-center gap-6 mb-12">
                        <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            The Mechanism
                        </h3>
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-[#978aff]/50 to-transparent" />
                    </div>

                    {/* Asymmetric Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Architecture - Spans 7 columns */}
                        <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl 
                                      bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm 
                                      border border-white/10 p-8 lg:p-10
                                      hover:border-[#978aff]/50 hover:shadow-[0_0_40px_rgba(151,138,255,0.15)]
                                      transition-all duration-500 animate-fadeIn"
                            style={{ animationDelay: '0.4s' }}>
                            {/* Number Badge */}
                            <div className="absolute top-6 right-6 text-8xl font-black text-white/[0.03] select-none"
                                style={{ fontFamily: "var(--font-manrope)" }}>
                                01
                            </div>

                            <div className="relative z-10">
                                <div className="text-[#978aff] text-xs font-bold uppercase tracking-[0.2em] mb-4"
                                    style={{ fontFamily: "var(--font-playfair)" }}>
                                    Architecture
                                </div>
                                <h4 className="text-white text-3xl lg:text-4xl font-bold mb-5 
                                             group-hover:text-[#978aff] transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                    Modular Component System
                                </h4>
                                <p className="text-gray-400 text-base lg:text-lg leading-relaxed"
                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                    We don't reinvent the button. We utilize our proprietary library of pre-tested UI components
                                    to build <span className="text-white font-semibold">4× faster</span>, focusing strictly on your unique business logic.
                                </p>
                            </div>
                        </div>

                        {/* Technology - Spans 5 columns */}
                        <div className="lg:col-span-5 group relative overflow-hidden rounded-3xl 
                                      bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm 
                                      border border-white/10 p-8 lg:p-10
                                      hover:border-[#ff79c6]/50 hover:shadow-[0_0_40px_rgba(255,121,198,0.15)]
                                      transition-all duration-500 animate-fadeIn"
                            style={{ animationDelay: '0.5s' }}>
                            <div className="absolute top-6 right-6 text-8xl font-black text-white/[0.03] select-none"
                                style={{ fontFamily: "var(--font-manrope)" }}>
                                02
                            </div>

                            <div className="relative z-10">
                                <div className="text-[#ff79c6] text-xs font-bold uppercase tracking-[0.2em] mb-4"
                                    style={{ fontFamily: "var(--font-playfair)" }}>
                                    Technology
                                </div>
                                <h4 className="text-white text-2xl lg:text-3xl font-bold mb-5 
                                             group-hover:text-[#ff79c6] transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                    Zero Legacy Baggage
                                </h4>
                                <p className="text-gray-400 text-base leading-relaxed"
                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                    No patching old frameworks. We build on the bleeding edge of Next.js and modern serverless infrastructure.
                                </p>
                            </div>
                        </div>

                        {/* Process - Spans 5 columns */}
                        <div className="lg:col-span-5 group relative overflow-hidden rounded-3xl 
                                      bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm 
                                      border border-white/10 p-8 lg:p-10
                                      hover:border-[#50fa7b]/50 hover:shadow-[0_0_40px_rgba(80,250,123,0.15)]
                                      transition-all duration-500 animate-fadeIn"
                            style={{ animationDelay: '0.6s' }}>
                            <div className="absolute top-6 right-6 text-8xl font-black text-white/[0.03] select-none"
                                style={{ fontFamily: "var(--font-manrope)" }}>
                                03
                            </div>

                            <div className="relative z-10">
                                <div className="text-[#50fa7b] text-xs font-bold uppercase tracking-[0.2em] mb-4"
                                    style={{ fontFamily: "var(--font-playfair)" }}>
                                    Process
                                </div>
                                <h4 className="text-white text-2xl lg:text-3xl font-bold mb-5 
                                             group-hover:text-[#50fa7b] transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                    Iterative Delivery
                                </h4>
                                <p className="text-gray-400 text-base leading-relaxed"
                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                    Ship → Measure → Learn. We get your product into users' hands while competitors write requirements.
                                </p>
                            </div>
                        </div>

                        {/* Team - Spans 7 columns */}
                        <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl 
                                      bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm 
                                      border border-white/10 p-8 lg:p-10
                                      hover:border-[#8be9fd]/50 hover:shadow-[0_0_40px_rgba(139,233,253,0.15)]
                                      transition-all duration-500 animate-fadeIn"
                            style={{ animationDelay: '0.7s' }}>
                            <div className="absolute top-6 right-6 text-8xl font-black text-white/[0.03] select-none"
                                style={{ fontFamily: "var(--font-manrope)" }}>
                                04
                            </div>

                            <div className="relative z-10">
                                <div className="text-[#8be9fd] text-xs font-bold uppercase tracking-[0.2em] mb-4"
                                    style={{ fontFamily: "var(--font-playfair)" }}>
                                    Team
                                </div>
                                <h4 className="text-white text-3xl lg:text-4xl font-bold mb-5 
                                             group-hover:text-[#8be9fd] transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                    The Anti-Agency Model
                                </h4>
                                <p className="text-gray-400 text-base lg:text-lg leading-relaxed"
                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                    Small, elite teams with direct founder access. No middle managers.
                                    No "let me circle back" meetings. <span className="text-white font-semibold">Just code and execution.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="mt-20 max-w-3xl animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                    <div className="relative">
                        <div className="absolute -left-4 top-0 text-6xl text-[#978aff]/20 font-serif">"</div>
                        <p className="text-white text-2xl lg:text-3xl font-medium leading-relaxed pl-8"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            Stop burning runway waiting for a launch date.{' '}
                            <span className="bg-gradient-to-r from-[#978aff] to-[#ff79c6] bg-clip-text text-transparent font-bold">
                                Let's build it now.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
