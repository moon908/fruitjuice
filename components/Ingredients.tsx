"use client"

import { motion } from 'framer-motion'
import { Leaf, Droplets, Sun, Zap, ShieldCheck, HeartPulse } from 'lucide-react'

const INGREDIENTS = [
    {
        id: 1,
        name: "Sun-Ripened Oranges",
        description: "Hand-picked from organic groves at the peak of sweetness for maximum vitamin C.",
        icon: <Sun className="w-8 h-8 text-orange-500" />,
        color: "from-orange-100 to-orange-200",
        border: "border-orange-200"
    },
    {
        id: 2,
        name: "Pure Alpine Water",
        description: "Filtered through mineral-rich mountain layers for a crisp, clean base.",
        icon: <Droplets className="w-8 h-8 text-blue-500" />,
        color: "from-blue-100 to-blue-200",
        border: "border-blue-200"
    },
    {
        id: 3,
        name: "Natural Electrolytes",
        description: "Essential minerals for rapid hydration and sustained energy levels.",
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        color: "from-yellow-100 to-yellow-200",
        border: "border-yellow-200"
    },
    {
        id: 4,
        name: "Organic Honey",
        description: "A touch of wild-flower nectar for gentle, natural sweetness without the crash.",
        icon: <HeartPulse className="w-8 h-8 text-red-500" />,
        color: "from-red-100 to-red-200",
        border: "border-red-200"
    },
    {
        id: 5,
        name: "Antioxidant Boost",
        description: "Infused with botanical extracts to protect cells and boost immunity.",
        icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
        color: "from-green-100 to-green-200",
        border: "border-green-200"
    },
    {
        id: 6,
        name: "Fresh Herbs",
        description: "Micro-infused mint and basil for a sophisticated, refreshing finish.",
        icon: <Leaf className="w-8 h-8 text-emerald-500" />,
        color: "from-emerald-100 to-emerald-200",
        border: "border-emerald-200"
    }
]

const Ingredients = () => {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        <Leaf className="w-4 h-4" />
                        What's Inside Matters
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter"
                    >
                        CRAFTED WITH <br />
                        <span className="bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">PURE INTENTION.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-500 max-w-2xl mx-auto font-medium"
                    >
                        We believe in radical transparency. Every ingredient in our juice is
                        sourced responsibly and serves a purpose for your body.
                    </motion.p>
                </div>

                {/* Ingredients Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INGREDIENTS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative p-8 rounded-[2.5rem] bg-linear-to-br ${item.color} border-2 ${item.border} transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]`}
                        >
                            {/* Icon Container */}
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/40 blur-lg rounded-full animate-pulse" />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-neutral-900 tracking-tight leading-tight">
                                    {item.name}
                                </h3>
                                <p className="text-neutral-600 font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Abstract Geometric Decoration */}
                            <div className="absolute top-4 right-4 text-white/20 font-black text-6xl select-none pointer-events-none group-hover:text-white/40 transition-colors">
                                0{item.id}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-1 bg-linear-to-r from-orange-400 via-yellow-400 to-orange-400 rounded-full"
                >
                    <div className="bg-white rounded-full px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-neutral-100">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="font-bold text-neutral-900 tracking-tight">
                                Over <span className="text-orange-600">50,000+</span> bottles shipped this month.
                            </p>
                        </div>
                        <button className="px-8 py-4 bg-neutral-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer">
                            View Full Nutrition Facts
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Ingredients