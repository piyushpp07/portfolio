import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const BentoCard = ({ children, className, ...props }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlight = useTransform(
        [mouseX, mouseY],
        ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(145, 94, 255, 0.3), transparent 80%)`
    );

    return (
        <motion.div
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }}
            onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
            }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(145, 94, 255, 0.5)' }}
            className={`relative p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 ${className}`}
            {...props}
        >
            <div
                className="absolute inset-0"
                style={{
                    background: spotlight,
                }}
            />
            {children}
        </motion.div>
    );
};
