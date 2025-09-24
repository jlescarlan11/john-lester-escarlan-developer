"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface AnimatedSectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
  delay?: number;
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight';
}

const AnimatedSection = ({ 
  children, 
  id, 
  className = "", 
  delay = 0,
  variant = 'fadeUp'
}: AnimatedSectionProps) => {
  
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 }
    }
  };

  return (
    <motion.div
      initial={variants[variant].initial}
      whileInView={variants[variant].animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Japanese-inspired easing
      }}
      id={id}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
