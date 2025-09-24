"use client";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/ui/sectionHeader";
import { techStack } from "@/data/techStack";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TechStackSection = () => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 16; // Show first 16 items initially

  const displayedTechStack = showAll
    ? techStack
    : techStack.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreItems = techStack.length > INITIAL_DISPLAY_COUNT;

  // Debug: Log the current state
  console.log('TechStack Debug:', {
    showAll,
    totalItems: techStack.length,
    displayedCount: displayedTechStack.length,
    hasMoreItems
  });

  return (
    <SectionWrapper id="tech-stack">
      <SectionHeader title="Tech Stack" subtitle="Technologies I work with" />
      
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
        {displayedTechStack.map((tech, index) => {
          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center group cursor-pointer"
              aria-label={`Technology: ${tech.name}`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-3 relative overflow-hidden rounded-lg card-minimal p-2 sm:p-3">
                <Image
                  src={tech.href}
                  fill
                  alt={`${tech.name} logo`}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                />
              </div>
              <span className="text-xs sm:text-sm text-center text-foreground/70 group-hover:text-foreground transition-colors duration-300 font-light">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>

      {hasMoreItems && (
        <motion.div 
          className="flex flex-col items-center mt-12 sm:mt-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="w-full h-px bg-border/30"></div>
          <button
            onClick={() => {
              console.log('Button clicked! Current showAll:', showAll, 'Will change to:', !showAll);
              setShowAll(!showAll);
            }}
            className="px-10 py-4 text-base font-medium text-foreground/90 hover:text-foreground border-2 border-foreground/40 hover:border-foreground/60 rounded-lg transition-all duration-300 hover:bg-foreground/5 hover:scale-105 active:scale-95 bg-background shadow-sm hover:shadow-md"
          >
            {showAll
              ? "Show Less"
              : `Show ${techStack.length - INITIAL_DISPLAY_COUNT} More Technologies`}
          </button>
          <div className="text-xs text-foreground/50">
            {showAll ? "Click to hide additional technologies" : "Click to see all technologies"}
          </div>
        </motion.div>
      )}
    </SectionWrapper>
  );
};

export default TechStackSection;
