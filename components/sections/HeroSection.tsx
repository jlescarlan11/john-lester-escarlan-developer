"use client";
import StyledImage from "@/components/ui/image";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      id="hero"
      className="min-h-dvh flex items-center justify-center lg:section-spacing lg:!mt-0 relative overflow-hidden pt-8 lg:pt-24"
      aria-label="Hero section - Introduction"
      role="banner"
    >
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-foreground/3 to-transparent rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-foreground/4 to-transparent rounded-full blur-lg -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-foreground/2 to-transparent rounded-full blur-md -z-10"></div>
        {/* Centered Layout - Embracing Ma (negative space) and Kanso (simplicity) */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto px-4">
          
          {/* Photo - Enhanced with better breathing room and subtle animations */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.02, rotate: 1 }}
          >
            
            {/* Circular photo with enhanced presence */}
            <div className="relative z-10 w-40 h-40 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-2 ring-foreground/15">
              <StyledImage 
                imageLink="/hero-image.svg" 
                label="John Lester Escarlan - Professional headshot"
              />
            </div>
            
          </motion.div>

          {/* Name - Primary Focus */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            role="heading"
            aria-level={1}
          >
            John Lester Escarlan
          </motion.h1>

          {/* Role and Personal Statement - Enhanced hierarchy */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide text-foreground/90">
              Software Engineer
            </h2>
            
            {/* Personal statement - direct and punchy */}
            <motion.p 
              className="text-base sm:text-lg text-foreground/75 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              Building thoughtful digital experiences
            </motion.p>
          </motion.div>

         
      </div>
    </motion.section>
  );
};

export default HeroSection;
