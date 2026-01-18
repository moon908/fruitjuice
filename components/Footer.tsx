"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook, Github, Heart, ArrowRight } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-white pt-24 pb-12 px-6 overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-orange-600/20 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-linear-to-tr from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                                <span className="font-black text-2xl text-white">F</span>
                            </div>
                            <h2 className="text-3xl font-black tracking-tighter">FRUITZ.</h2>
                        </div>
                        <p className="text-neutral-400 font-medium leading-relaxed max-w-xs">
                            Squeezing the best out of nature to deliver pure, sun-drenched happiness straight to your door.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook, Github].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors border border-white/10"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-black uppercase tracking-widest text-orange-500">Shop</h4>
                        <ul className="space-y-4">
                            {['All Flavors', 'Best Sellers', 'Gift Bundles', 'Subscriptions'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-neutral-400 hover:text-white hover:translate-x-2 transition-all inline-block font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-black uppercase tracking-widest text-yellow-500">Explore</h4>
                        <ul className="space-y-4">
                            {['Our Story', 'Ingredients', 'Health Benefits', 'Locate Store'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-neutral-400 hover:text-white hover:translate-x-2 transition-all inline-block font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-black uppercase tracking-widest text-orange-500">Get 10% Off</h4>
                        <p className="text-neutral-400 font-medium">Join our community for weekly fresh news and exclusive offers.</p>
                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all font-medium text-sm"
                            />
                            <button className="absolute right-2 top-2 p-2 bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors group-hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20 cursor-pointer">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-neutral-500 text-sm font-medium">
                        © 2026 Fruitz Juice Co. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8 text-neutral-500 text-sm font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
                        <span>Made with</span>
                        <Heart size={14} className="text-orange-500 fill-current" />
                        <span>for a fresher world</span>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-600 via-yellow-400 to-orange-600" />
        </footer>
    )
}

export default Footer