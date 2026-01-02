import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { animate } from 'framer-motion';

interface AnimatedCounterProps {
    to: number;
    from?: number;
    duration?: number;
}

const AnimatedCounter = ({ to, from = 0, duration = 1.5 }: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            animate(from, to, {
                duration,
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = value.toFixed(0);
                    }
                },
            });
        }
    }, [inView, from, to, duration]);

    return <span ref={ref} />;
};

export default AnimatedCounter;
