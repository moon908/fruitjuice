"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { image } from 'framer-motion/client'

const FLAVORS = [
    {
        id: 'orange',
        name: 'Orange Blast',
        color: '#FF6B00',
        bgColor: '#FFF5EB',
        accentColor: '#FF9F1C',
        image: 'https://images.unsplash.com/photo-1650460069032-3c410224fe55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9yYW5nZSUyMGp1aWNlfGVufDB8fDB8fHww',
        heading: 'SQUEEZE THE DAY',
        description: 'Pure sun-ripened oranges pressed into perfection. No added sugar, just pure citrus energy.'
    },
    {
        id: 'lemon',
        name: 'Lemon Zing',
        color: '#F9D423',
        bgColor: '#FFFDE7',
        accentColor: '#F6D365',
        image: 'https://images.unsplash.com/photo-1575596510825-f748919a2bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb24lMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D',
        heading: 'ZINGY & BRIGHT',
        description: 'A sharp, refreshing burst of sun-drenched lemons. The perfect pick-me-up for any time of day.'
    },
    {
        id: 'berry',
        name: 'Berry Wild',
        color: '#9D50BB',
        bgColor: '#FDF2F8',
        accentColor: '#6E48AA',
        image: 'https://images.unsplash.com/photo-1595981266686-0cf387d0a608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVycnklMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D',
        heading: 'WILDLY DELICIOUS',
        description: 'A dark blend of forest berries picked at their peak. Rich, antioxidant-packed, and bold.'
    }
]

const Products = () => {
    const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0])

    // Mouse Parallax Effect
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const dx = useSpring(mouseX, springConfig)
    const dy = useSpring(mouseY, springConfig)

    const rotateX = useTransform(dy, [-300, 300], [10, -10])
    const rotateY = useTransform(dx, [-300, 300], [-10, 10])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const x = clientX - window.innerWidth / 2
            const y = clientY - window.innerHeight / 2
            mouseX.set(x)
            mouseY.set(y)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 transition-colors duration-700" style={{ backgroundColor: activeFlavor.bgColor }}>

            {/* Background Aesthetic Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ backgroundColor: activeFlavor.color }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20"
                />
            </div>

            <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFlavor.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <span className="inline-block text-sm font-black uppercase tracking-[0.3em]" style={{ color: activeFlavor.color }}>
                                {activeFlavor.name}
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black text-neutral-900 leading-[0.9] tracking-tighter">
                                {activeFlavor.heading}
                            </h1>
                            <p className="max-w-md text-lg text-neutral-600 font-medium">
                                {activeFlavor.description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="flex items-center gap-2 text-white px-10 py-5 cursor-pointer rounded-full font-black text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: activeFlavor.color }}>
                                    Shop Now <ArrowRight size={18} />
                                </button>
                                <button className="flex items-center gap-2 bg-white text-neutral-900 cursor-pointer px-8 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl border-2 border-transparent hover:border-neutral-200 transition-all">
                                    Our Story
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Flavor Selector */}
                    <div className="flex gap-4 mt-16">
                        {FLAVORS.map(flavor => (
                            <button
                                key={flavor.id}
                                onClick={() => setActiveFlavor(flavor)}
                                className={`group relative p-1 rounded-full border-2 transition-all duration-300 ${activeFlavor.id === flavor.id ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                                style={{ borderColor: activeFlavor.id === flavor.id ? flavor.color : 'transparent' }}
                            >
                                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                                    <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover" />
                                </div>
                                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-opacity ${activeFlavor.id === flavor.id ? 'opacity-100' : 'opacity-0'}`} style={{ color: flavor.color }}>
                                    {flavor.id}
                                </span >
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3D Visual Section */}
                <div className="order-1 lg:order-2 flex justify-center perspective-1000 h-[500px] items-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFlavor.id}
                            initial={{ opacity: 0, scale: 0.8, rotate: -20, x: 100 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 20, x: -100 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            style={{ rotateX, rotateY }}
                            className="relative group cursor-grab active:cursor-grabbing w-full flex justify-center"
                        >
                            {/* Can Shadow */}
                            <motion.div
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/10 rounded-[100%] blur-[20px]"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Main Can Image Container */}
                            <div className="relative w-64 h-[450px] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-white/50 bg-white">
                                <img
                                    src={activeFlavor.image}
                                    alt={activeFlavor.name}
                                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20 pointer-events-none" />

                                {/* Can Labels / Content Overlay */}
                                <div className="absolute inset-x-0 bottom-12 px-6 text-center text-white">
                                    <p className="text-[10px] font-black tracking-[0.4em] uppercase opacity-80 mb-1">Premium</p>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                                        {activeFlavor.name.split(' ')[0]} <br />
                                        <span className="text-orange-400" style={{ color: activeFlavor.accentColor }}>{activeFlavor.name.split(' ')[1]}</span>
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Floating Fruit Elements (Abstract representation) */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute w-12 h-12 rounded-full blur-[2px]"
                                style={{ backgroundColor: activeFlavor.color, opacity: 0.2 }}
                                animate={{
                                    y: [0, -100, 0],
                                    x: [0, 50, 0],
                                    rotate: [0, 360],
                                    scale: [1, 1.5, 1]
                                }}
                                transition={{
                                    duration: 10 + i * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 3
                                }}
                                initial={{ top: `${20 + i * 20}%`, left: `${10 + i * 25}%` }}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[.3em] text-neutral-400">Discover More</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-px h-12 bg-gradient-to-b from-neutral-400 to-transparent"
                />
            </div>
        </section>
    )
}

export default Products
