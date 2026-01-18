"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const REVIEWS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Fitness Coach",
        comment: "Absolutely the best orange juice I've ever tasted. It feels like I'm drinking liquid sunshine! No bitterness, just pure sweetness.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        id: 2,
        name: "Mark Thompson",
        role: "Professional Athlete",
        comment: "The electrolyte boost in these juices is a game changer for my morning runs. I feel more hydrated and energized throughout the day.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=mark"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Wellness Blogger",
        comment: "I love the transparency about the ingredients. It's so rare to find juice that actually tastes fresh and isn't loaded with hidden sugars.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=elena"
    },
    {
        id: 4,
        name: "David Chen",
        role: "Executive Chef",
        comment: "The flavor profile of the 'Berry Wild' is perfectly balanced. You can tell they use premium, ripe fruits. Simply world-class quality.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=david"
    }
]

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextStep = () => {
        setDirection(1)
        setIndex((prev) => (prev + 1) % REVIEWS.length)
    }

    const prevStep = () => {
        setDirection(-1)
        setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
    }

    useEffect(() => {
        const timer = setInterval(nextStep, 5000)
        return () => clearInterval(timer)
    }, [])

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        })
    }

    return (
        <section className="py-32 px-6 bg-orange-50/30 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-[100px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-orange-500 font-black text-sm uppercase tracking-[0.4em]"
                    >
                        Community Love
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter"
                    >
                        WHAT OUR <span className="text-orange-600">SIPPERS</span> SAY.
                    </motion.h2>
                </div>

                <div className="relative h-[450px] flex items-center justify-center">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevStep}
                        className="absolute left-0 z-30 p-4 bg-white rounded-full shadow-xl text-neutral-800 hover:text-orange-500 transition-all active:scale-90 cursor-pointer hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextStep}
                        className="absolute right-0 z-30 p-4 bg-white rounded-full shadow-xl text-neutral-800 hover:text-orange-500 transition-all active:scale-90 cursor-pointer hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Card */}
                    <div className="relative w-full max-w-4xl mx-auto h-full flex items-center justify-center overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 0.5 }
                                }}
                                className="absolute w-full px-4 md:px-0"
                            >
                                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(255,118,0,0.1)] border border-white relative">
                                    <Quote className="absolute top-10 right-10 w-20 h-20 text-orange-100/50" />

                                    <div className="grid md:grid-cols-[200px_1fr] gap-12 items-center">
                                        {/* Avatar and Rating */}
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl rotate-3">
                                                <img src={REVIEWS[index].image} alt={REVIEWS[index].name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex gap-1 text-orange-500">
                                                {[...Array(REVIEWS[index].rating)].map((_, i) => (
                                                    <Star key={i} size={18} fill="currentColor" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Review Content */}
                                        <div className="space-y-6 text-center md:text-left">
                                            <p className="text-xl md:text-3xl font-bold text-neutral-800 leading-tight tracking-tight italic">
                                                "{REVIEWS[index].comment}"
                                            </p>
                                            <div>
                                                <h4 className="text-2xl font-black text-neutral-900 tracking-tight">
                                                    {REVIEWS[index].name}
                                                </h4>
                                                <p className="text-orange-500 font-bold uppercase text-xs tracking-widest mt-1">
                                                    {REVIEWS[index].role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {REVIEWS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > index ? 1 : -1)
                                setIndex(i)
                            }}
                            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${index === i ? 'w-12 bg-orange-600' : 'w-2 bg-neutral-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews