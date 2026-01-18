import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
            <div className="bg-white/80 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full px-8 py-4 flex items-center justify-between transition-all duration-300">
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500 overflow-hidden border-2 border-white">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOxDvTJh87c1xqUMK3XZn3cJKq8VBFb_TxQ&s"
                            alt="logo"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                    <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                        FRUITZ
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex gap-10 text-neutral-800 font-bold text-sm uppercase tracking-widest">
                        <li>
                            <a href="#" className="hover:text-orange-500 transition-colors relative group">
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 transition-colors relative group">
                                Flavors
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 transition-colors relative group">
                                Shop
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 transition-colors relative group">
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                    <button className="hidden sm:block text-neutral-700 font-bold text-sm uppercase tracking-widest hover:text-orange-500 transition-colors cursor-pointer">
                        Account
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_4px_14px_0_rgba(255,118,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,118,0,0.23)] hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer border-none">
                        Order Now
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
