import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { stiffness: 180, damping: 18, mass: 0.6 };
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [16, -16]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-16, 16]), springConfig);
    const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

    const scale = useSpring(1, springConfig);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
        scale.set(1.03);
    }

    function handleMouseLeave() {
        mouseX.set(0.5);
        mouseY.set(0.5);
        scale.set(1);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, scale, transformPerspective: 600 }}
            className={`relative ${className}`}
        >
            {children}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, hsl(var(--primary) / 0.18), transparent 55%)`,
                }}
            />
        </motion.div>
    );
}