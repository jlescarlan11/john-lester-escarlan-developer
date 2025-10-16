"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/ui/sectionHeader";
import CornerLogo from "@/components/ui/corner-logo";
import { educationEntries } from "@/data/education";
import { experienceEntries } from "@/data/experience";
import Image from "next/image";

const AboutSection = () => {
  // Curated tech stack - only high-demand technologies
  const curatedTechStack = [
    { name: "TypeScript", href: "https://icon.icepanel.io/Technology/svg/TypeScript.svg" },
    { name: "React", href: "https://icon.icepanel.io/Technology/svg/React.svg" },
    { name: "Next.js", href: "https://icon.icepanel.io/Technology/svg/Next.js.svg" },
    { name: "Java", href: "https://icon.icepanel.io/Technology/svg/Java.svg" },
    { name: "Spring Boot", href: "https://icon.icepanel.io/Technology/svg/Spring.svg" },
    { name: "PostgreSQL", href: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg" },
    { name: "AWS", href: "https://icon.icepanel.io/Technology/svg/AWS.svg" },
    { name: "Docker", href: "https://icon.icepanel.io/Technology/svg/Docker.svg" },
  ];

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

  return (
    <SectionWrapper id="about-me">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <SectionHeader title="About Me" subtitle="My professional journey and expertise" />

        {/* Intentionally Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Left Column - Bold Statement Quote (3 columns) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-lg h-full min-h-[320px] bg-foreground text-background p-8 lg:p-12 flex items-center justify-center">
              {/* Subtle texture/pattern background */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
                                   repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              {/* Animated code pattern - more subtle */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04]">
                <div className="space-y-3 w-full px-8">
                  {[
                    { code: "const findPattern = (data) => {", delay: 0 },
                    { code: "  return data.filter(item =>", delay: 0.5 },
                    { code: "    item.value > threshold", delay: 1 },
                    { code: "  ).map(optimize);", delay: 1.5 },
                    { code: "};", delay: 2 },
                  ].map((line, index) => (
                    <motion.div
                      key={`code-${index}`}
                      className="font-mono text-sm px-4 py-2"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ 
                        opacity: [0, 1, 1, 1],
                        x: [-30, 0, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: line.delay,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <span>{line.code}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quote - The star of the show */}
              <blockquote className="relative z-10 text-2xl lg:text-4xl font-bold leading-tight text-center max-w-2xl">
                &ldquo;Identify patterns that others might miss&rdquo;
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column - Education & Experience (2 columns stacked) */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 relative overflow-hidden group cursor-pointer h-full min-h-[160px] transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm">
                <CornerLogo 
                  src={educationEntries[0].image} 
                  alt="UP CS Logo" 
                  size="md"
                  parentHover={true}
                />
                
                <div className="flex flex-col h-full relative z-10 justify-center">
                  <div className="space-y-2">
                    <h3>
                      {educationEntries[0].title}
                    </h3>
                    <h4>
                      {educationEntries[0].organization}
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                        College Scholar
                      </span>
                      <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">
                        DOST Scholar
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 relative overflow-hidden group cursor-pointer h-full min-h-[160px] transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm">
                <CornerLogo 
                  src={experienceEntries[0].image} 
                  alt={`${experienceEntries[0].organization} Logo`} 
                  size="md"
                  parentHover={true}
                />
                
                <div className="flex flex-col h-full relative z-10 justify-center">
                  <div className="space-y-2">
                    <h3 >
                      {experienceEntries[0].title}
                    </h3>
                    <h4 >
                      {experienceEntries[0].organization}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
                        1+ Year Industry Experience
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Row - Full Width */}
        <div className="mt-6">
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {curatedTechStack.map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="group/tech relative"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex items-center justify-center w-full aspect-square">
                      <Image
                        src={tech.href}
                        alt={`${tech.name} icon`}
                        className="w-full h-full object-contain grayscale hover:grayscale-0 group-hover/tech:scale-110 transition-all duration-300 opacity-70 hover:opacity-100"
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
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;