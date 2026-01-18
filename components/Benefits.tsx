"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BatteryCharging, Sparkles, Smile, CheckCircle2 } from 'lucide-react'

const BENEFITS = [
    {
        id: 1,
        title: "Immune System Warrior",
        description: "Packed with over 200% of your daily Vitamin C needs to keep your defenses strong year-round.",
        icon: <Heart className="w-10 h-10 text-rose-500" />,
        stat: "200%",
        statLabel: "Vitamin C",
        color: "#FFF1F2"
    },
    {
        id: 2,
        title: "Sustained Natural Energy",
        description: "Zero added sugars means zero crashes. Get pure glucose from whole fruits for steady focus.",
        icon: <BatteryCharging className="w-10 h-10 text-emerald-500" />,
        stat: "8 hrs",
        statLabel: "Focus",
        color: "#ECFDF5"
    },
    {
        id: 3,
        title: "Glow From Within",
        description: "High antioxidant content fights free radicals, giving your skin that natural, healthy radiance.",
        icon: <Sparkles className="w-10 h-10 text-amber-500" />,
        stat: "100%",
        statLabel: "Natural",
        color: "#FFFBEB"
    },
    {
        id: 4,
        title: "Happy Gut, Happy You",
        description: "Natural fruit enzymes aid digestion and keep your metabolic system running smoothly.",
        icon: <Smile className="w-10 h-10 text-indigo-500" />,
        stat: "Easy",
        statLabel: "Digest",
        color: "#EEF2FF"
    }
]

const Benefits = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-neutral-50">
            {/* Background Aesthetic Shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-orange-100 rounded-full blur-[120px] opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-100 rounded-full blur-[120px] opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Image/Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)]">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fHww"
                                alt="Fresh juice lifestyle"
                                className="w-full h-auto object-cover"
                            />
                            {/* Floating Card on Image */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-black text-neutral-900 leading-tight">Scientifically Proven</p>
                                        <p className="text-sm text-neutral-600 font-medium tracking-tight">Daily consumption boosts vitality by 40%</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Background Blob */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-orange-400/10 rounded-[4rem] -rotate-3 z-0" />
                    </motion.div>

                    {/* Right Side: Benefits Content */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-orange-600 font-black text-sm uppercase tracking-[0.3em]"
                            >
                                Health First
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-6xl font-black text-neutral-900 leading-none tracking-tighter"
                            >
                                MORE THAN JUST <br />
                                <span className="bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">DELICIOUS.</span>
                            </motion.h2>
                        </div>

                        <div className="grid gap-8">
                            {BENEFITS.map((benefit, index) => (
                                <motion.div
                                    key={benefit.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="group flex gap-6 p-6 rounded-4xl hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/50 cursor-default"
                                >
                                    <div
                                        className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                                        style={{ backgroundColor: benefit.color }}
                                    >
                                        {benefit.icon}
                                    </div>
                                    <div className="space-y-2 pt-1 flex-1">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                                                {benefit.title}
                                            </h3>
                                            <span className="text-lg font-black text-orange-500">{benefit.stat}</span>
                                        </div>
                                        <p className="text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-700 transition-colors">
                                            {benefit.description}
                                        </p>

                                        {/* Animated Progress Bar */}
                                        <div className="h-1.5 w-full bg-neutral-100 rounded-full mt-3 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: index * 0.1 + 0.6 }}
                                                className="h-full bg-linear-to-r from-orange-400 to-orange-600 rounded-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits