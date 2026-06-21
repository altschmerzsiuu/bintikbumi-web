import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export default function RevealWrapper({
  children,
  delay = 0,
  className = '',
  duration = 0.9,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // premium ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
