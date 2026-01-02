import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Education', href: '#education' },
    { title: 'Achievements', href: '#achievements' },
    { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50"
            >
                <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <a href={link.href} className="text-white hover:text-purple-400 transition-colors">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.nav>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button onClick={toggleMenu} className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                    <Menu className="w-6 h-6 text-white" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-lg"
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={toggleMenu} className="p-2">
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>
                        <ul className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <a href={link.href} onClick={toggleMenu} className="text-white text-2xl font-bold">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
