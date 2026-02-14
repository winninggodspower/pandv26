'use client';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 22, className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HeroFloat({ children, className = '', delay = 0.2 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14, filter: 'blur(6px)' }}
      animate={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: -5, filter: 'blur(0px)' }
      }
      transition={
        reduceMotion
          ? { duration: 0.01 }
          : {
              opacity: { duration: 1, delay, ease },
              filter: { duration: 1, delay, ease },
              y: {
                duration: 2.3,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse',
                delay: delay + 0.45,
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function ScrollCue({ children, className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: [0.8, 1, 0.8], y: [0, 8, 0] }}
      transition={reduceMotion ? { duration: 0.01 } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
