"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react'

const FRUITS = [
    { id: 1, src: "https://pngimg.com/uploads/orange/orange_PNG780.png", x: "15%", delay: 0, size: "120px" },
    { id: 2, src: "https://pngimg.com/uploads/orange/orange_PNG801.png", x: "75%", delay: 1.5, size: "100px" },
    { id: 3, src: "https://pngimg.com/uploads/orange/orange_PNG780.png", x: "45%", delay: 3, size: "140px" },
    { id: 4, src: "https://pngimg.com/uploads/orange/orange_PNG801.png", x: "85%", delay: 4.5, size: "90px" },
]

const Hero = () => {
    const [splashes, setSplashes] = useState<{ id: number, x: string }[]>([])

    // Simulate splash effects synced with fruits
    useEffect(() => {
        const splashTimes = FRUITS.map(f => (f.delay + 0.8) * 1000)
        const timeouts = splashTimes.map((time, index) =>
            setTimeout(() => {
                setSplashes(prev => [...prev, { id: Date.now(), x: FRUITS[index].x }])
                // Remove splash after animation
                setTimeout(() => {
                    setSplashes(prev => prev.slice(1))
                }, 1000)
            }, time)
        )

        return () => timeouts.forEach(t => clearTimeout(t))
    }, [])

    return (
        <section className="relative min-h-screen w-full bg-[#FF8C00] overflow-hidden">
            {/* The Juice Pond (Video Background) */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-splashing-juice-in-slow-motion-4450-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-b from-orange-600/40 via-transparent to-orange-900/60" />
            </div>

            {/* Dropping Fruits */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {FRUITS.map((fruit) => (
                    <motion.div
                        key={fruit.id}
                        initial={{ y: -200, x: fruit.x, rotate: 0, opacity: 0 }}
                        animate={{
                            y: "85vh",
                            rotate: 360,
                            opacity: [0, 1, 1, 0],
                            scale: [1, 1, 1.2, 0.8]
                        }}
                        transition={{
                            duration: 1.2,
                            delay: fruit.delay,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: "easeIn"
                        }}
                        className="absolute"
                        style={{ width: fruit.size, height: fruit.size }}
                    >
                        <img src={fruit.src} alt="fruit" className="w-full h-full object-contain drop-shadow-2xl" />
                    </motion.div>
                ))}

                {/* Splash Particles */}
                <AnimatePresence>
                    {splashes.map((splash) => (
                        <motion.div
                            key={splash.id}
                            initial={{ scale: 0, opacity: 0.8 }}
                            animate={{ scale: 2.5, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-[10vh] border-4 border-white/40 rounded-full"
                            style={{
                                left: splash.x,
                                width: "100px",
                                height: "40px",
                                transform: "translateX(-50%)"
                            }}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Content Content Container */}
            <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-6 -mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm uppercase tracking-widest mx-auto mt-16">
                        <Sparkles className="w-5 h-5 animate-pulse text-yellow-300" />
                        Nature's Liquid Gold
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter text-white drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]">
                        DIVE INTO <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-b from-yellow-300 via-yellow-400 to-yellow-600">
                            FRESHNESS
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                        Plunge into a world of pure, sun-drenched flavors. 100% organic fruit juice
                        dropped straight into your glass. No secrets, just sunshine.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <button className="px-12 py-6 bg-white text-orange-600 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-110 active:scale-95 flex items-center gap-3 cursor-pointer border-none">
                            Shop All Flavors
                            <ArrowRight className="w-6 h-6" />
                        </button>
                        <button className="px-12 py-6 bg-orange-950/40 backdrop-blur-lg text-white border-2 border-white/40 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-orange-900/60 hover:scale-110 flex items-center gap-3 cursor-pointer">
                            <ShoppingBag className="w-6 h-6" />
                            Our Best Sellers
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Bottom Waves */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-10 pointer-events-none">
                <svg className="relative block w-[calc(100%+1.3px)] h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <motion.path
                        animate={{
                            d: [
                                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C56.2,103.59,236.28,72.19,321.39,56.44Z",
                                "M321.39,56.44c58,10.79,114.16,30.13,172,41.86,82.39,16.72,168.19,17.73,250.45.39C823.78,31,906.67,5,985.66,2c70.05-2.73,146.53,26.09,214.34,3V120H0V95.83C56.2,103.59,236.28,72.19,321.39,56.44Z",
                                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C56.2,103.59,236.28,72.19,321.39,56.44Z"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        fill="#FFFFFF" fillOpacity="1"
                    ></motion.path>
                </svg>
            </div>

            {/* Scroll Progress Line */}
            <motion.div
                className="absolute bottom-0 left-0 h-2 bg-yellow-400 z-50"
                style={{ scaleX: 0, transformOrigin: "0%" }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
        </section>
    )
}

export default Hero
