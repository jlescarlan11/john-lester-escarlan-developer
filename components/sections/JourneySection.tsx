"use client";

import { motion } from "framer-motion";
import Card from "@/components/layout/card";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/ui/sectionHeader";
import info from "@/data/info";
import { Badge } from "@/components/ui/badge";

const JourneySection = () => {
  // Sort journey items by start date (most recent first)
  const sortedJourney = [...info.journey].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const getTypeLabel = (type: "experience" | "education") => {
    return type === "experience"
      ? "Professional Experience"
      : "Academic Foundation";
  };

  const getTypeColor = (type: "experience" | "education") => {
    return type === "experience"
      ? "bg-foreground text-background"
      : "bg-muted text-foreground";
  };

  return (
    <SectionWrapper id="journey">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <SectionHeader
          title="My Journey"
          subtitle="The path that shaped my expertise"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 w-px bg-border/30 left-0"></div>
          
          {sortedJourney.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No journey data available</p>
            </div>
          ) : (
            sortedJourney.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                variants={itemVariants}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative ${index !== sortedJourney.length - 1 ? "mb-8 sm:mb-12 lg:mb-16" : ""}`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-2 w-2 h-2 rounded-full left-0 transform -translate-x-1/2 ${
                  item.current ? "bg-foreground" : "bg-foreground/20"
                }`}></div>
                
                <div className="mb-3 sm:mb-4 ml-6">
                  <Badge
                    variant="secondary"
                    className={`${getTypeColor(
                      item.type
                    )} text-xs font-medium mb-2`}
                  >
                    {getTypeLabel(item.type)}
                  </Badge>
                  {item.current && (
                    <Badge variant="outline" className="ml-2 text-xs">
                      Current
                    </Badge>
                  )}
                </div>

                <Card
                  data={{
                    subInfo: item.organization,
                    mainInfo: item.title,
                    descriptions: item.description,
                    image: item.image,
                    skills: item.skills,
                    duration: item.duration,
                  }}
                />
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default JourneySection;
