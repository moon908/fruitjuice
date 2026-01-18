"use client"
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle } from 'lucide-react'

const Contact = () => {
    return (
        <section className="relative py-32 px-6 bg-white overflow-hidden">
            {/* Vibrant Background Decorations */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[120px] opacity-60" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-yellow-100 rounded-full blur-[150px] opacity-60" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">

                    {/* Left Side: Vibrant Info & Visual */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-widest"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Let's Talk Fresh
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-6xl md:text-7xl font-black text-neutral-900 leading-none tracking-tighter"
                            >
                                READY TO <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500">GET JUICY?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-neutral-500 font-medium max-w-lg leading-relaxed"
                            >
                                Whether you're looking for a refresh, a bulk order, or just want to say hi,
                                our team is ready to squeeze every drop of excellence for you.
                            </motion.p>
                        </div>

                        {/* Contact Cards */}
                        <div className="grid gap-6">
                            {[
                                { icon: <Mail />, label: "Email Us", value: "hello@fruitz.com", color: "bg-blue-50 text-blue-600" },
                                { icon: <Phone />, label: "Call Us", value: "+1 (800) FRESH-JUICE", color: "bg-green-50 text-green-600" },
                                { icon: <MapPin />, label: "Visit Us", value: "123 Sunshine Blvd, CA", color: "bg-purple-50 text-purple-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-6 p-6 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 transition-all group"
                                >
                                    <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[2px] text-neutral-400">{item.label}</p>
                                        <p className="text-lg font-black text-neutral-800">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: The Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative Blobs for Form */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

                        <div className="relative z-10 h-full bg-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(255,140,0,0.15)] border border-white/60">
                            <div className="flex flex-col h-full space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-neutral-900 tracking-tight">Send a Squeeze</h3>
                                    <p className="text-neutral-500 font-medium">We usually reply within 24 fresh hours.</p>
                                </div>

                                <form className="space-y-6 flex-1">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="w-full px-8 py-5 bg-white border-2 border-neutral-100 rounded-2xl focus:border-orange-500 focus:outline-none transition-all font-bold placeholder:text-neutral-400 shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full px-8 py-5 bg-white border-2 border-neutral-100 rounded-2xl focus:border-orange-500 focus:outline-none transition-all font-bold placeholder:text-neutral-400 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <select className="w-full px-8 py-5 bg-white border-2 border-neutral-100 rounded-2xl focus:border-orange-500 focus:outline-none transition-all font-bold text-neutral-400 shadow-sm appearance-none">
                                            <option>What are you craving?</option>
                                            <option>Bulk Order Inquiry</option>
                                            <option>Partnership Opportunity</option>
                                            <option>Feedback & Love</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us everything..."
                                            className="w-full px-8 py-5 bg-white border-2 border-neutral-100 rounded-2xl focus:border-orange-500 focus:outline-none transition-all font-bold placeholder:text-neutral-400 shadow-sm resize-none"
                                        />
                                    </div>

                                    <button className="w-full py-6 bg-linear-to-r from-orange-600 to-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-4 cursor-pointer">
                                        Submit Request
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Floating "Fresh" Badge */}
                        <motion.div
                            animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full items-center justify-center shadow-2xl z-20 hidden md:flex"
                        >
                            <Sparkles className="text-white w-10 h-10" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact