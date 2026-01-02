import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [cursorVariant, setCursorVariant] = useState("default");
    
    const cursors = Array.from({ length: 5 });

    const springs = cursors.map((_, i) => ({
        damping: 30 - i * 5,
        stiffness: 300 - i * 50,
        mass: 1 - i * 0.1,
    }));

    const cursorPositions = springs.map(() => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        return { x, y };
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorPositions.forEach(({ x, y }) => {
                x.set(e.clientX);
                y.set(e.clientY);
            });
        };

        const handleMouseEnterText = () => setCursorVariant("text");
        const handleMouseLeaveText = () => setCursorVariant("default");
        const handleMouseEnterButton = () => setCursorVariant("button");
        const handleMouseLeaveButton = () => setCursorVariant("default");


        window.addEventListener('mousemove', handleMouseMove);

        document.querySelectorAll('a, button').forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnterButton);
            el.addEventListener('mouseleave', handleMouseLeaveButton);
        });

        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span').forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnterText);
            el.addEventListener('mouseleave', handleMouseLeaveText);
        });


        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a, button').forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnterButton);
                el.removeEventListener('mouseleave', handleMouseLeaveButton);
            });
            document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span').forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnterText);
                el.removeEventListener('mouseleave', handleMouseLeaveText);
            });
        };
    }, [cursorPositions]);

    const cursorVariants = {
        default: {
            height: 20,
            width: 20,
            backgroundColor: 'rgba(0, 191, 255, 0.5)',
            mixBlendMode: 'difference',
        },
        text: {
            height: 50,
            width: 2,
            backgroundColor: 'rgba(0, 191, 255, 0.8)',
        },
        button: {
            height: 80,
            width: 80,
            backgroundColor: 'rgba(0, 191, 255, 0.2)',
            border: '2px solid rgba(0, 191, 255, 0.5)',
        }
    };

    return (
        <>
            {cursorPositions.map(({ x, y }, index) => {
                const springX = useSpring(x, springs[index]);
                const springY = useSpring(y, springs[index]);
                return (
                    <motion.div
                        key={index}
                        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
                        style={{
                            translateX: springX,
                            translateY: springY,
                            opacity: 1 - index * 0.2,
                            scale: 1 - index * 0.1,
                        }}
                        variants={cursorVariants}
                        animate={cursorVariant}
                    />
                )
            })}
        </>
    );
};


export default CustomCursor;
