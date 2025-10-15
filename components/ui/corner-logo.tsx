"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CornerLogoProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  parentHover?: boolean;
}

const CornerLogo = ({ src, alt, className = "", size = "md", parentHover = false }: CornerLogoProps) => {
  const sizeClasses = {
    sm: "w-36 h-36",
    md: "w-56 h-56", 
    lg: "w-60 h-60"
  };

  return (
    <motion.div
      className={`absolute -bottom-12 -right-12 z-0 ${sizeClasses[size]} ${className} ${parentHover ? 'group-hover:scale-110 group-hover:rotate-[-5deg] transition-transform duration-300' : ''}`}
      initial={{ scale: 0, rotate: 45 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={parentHover ? {} : { 
        scale: 1.1, 
        rotate: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: 0.2 
      }}
    >
      {/* Simple logo container */}
      <div className="relative w-full h-full">
        <div className="w-full h-full relative">
           <Image
             src={src}
             alt={alt}
             fill
             className="object-contain filter drop-shadow-sm opacity-15"
             onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.style.display = 'none';
             }}
           />
        </div>
      </div>
    </motion.div>
  );
};

export default CornerLogo;
