"use client";
import { motion } from "framer-motion";

interface TechStackItem {
  name: string;
  href: string;
}

interface TechStackGridProps {
  techStack: TechStackItem[];
}

const TechStackGrid = ({ techStack }: TechStackGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {techStack.map((tech, index) => (
        <motion.div
          key={`${tech.name}-${index}`}
          className="group/tech relative"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex items-center justify-center w-full h-24">
            <img
              src={tech.href}
              alt={`${tech.name} icon`}
              className="w-full h-full object-contain filter group-hover/tech:scale-110 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full flex items-center justify-center text-primary font-bold text-3xl hidden">
              {tech.name.charAt(0)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackGrid;
