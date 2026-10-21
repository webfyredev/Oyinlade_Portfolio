import type { MotionProps, Variants } from "framer-motion";

export const scrollUp: MotionProps = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [1, 1, 0.3, 1] },
  exit: { opacity: 0, y: 30},
};
export const scrollUpDelayed: MotionProps = {
    initial: { opacity: 0, y: 20, },
    animate: { opacity: 1, y: 0, },
    transition: { duration: 0.8, delay: 0.2, ease: [1, 1, 0.3, 1]},
    exit: { opacity: 0, y: 20, },
};

export const slideRight: MotionProps = {
  initial: { opacity: 0, x: 40, },
  animate: { opacity: 1, x: 0,},
  transition: { duration: 1, ease: [1, 1, 0.3, 1]},
  exit: { opacity: 0, x: 40,},
};

export const slideLeft: MotionProps = {
  initial: { opacity: 0, x: -40, },
  animate: { opacity: 1, x: 0,},
  transition: { duration: 1, ease: [1, 1, 0.3, 1]},
  exit: { opacity: 0, x: -40,},
};

export const scaleFade: MotionProps = {
  initial: { opacity: 0, scale: 0.95, },
  animate: {opacity: 1,scale: 1,},
  transition: {duration: 0.8, ease: [1, 1, 0.3, 1]},
  exit: { opacity: 0, scale: 0.95,},
};

export const statContainer:Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, },},
};

export const statItem:Variants = {
  initial: { opacity: 0, y: 20, },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.5, 1, 0.3, 1]},
  },
};