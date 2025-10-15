"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/ui/sectionHeader";
import CornerLogo from "@/components/ui/corner-logo";
import info from "@/data/info";
import { educationEntries } from "@/data/education";
import { experienceEntries } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

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

  // Refined card styles following Japanese minimalism (wabi-sabi)
  const cardBaseStyles = "group h-full bg-background border border-border/30 rounded-lg transition-all duration-300 hover:border-border/60 relative overflow-hidden";
  const largeCardStyles = "group h-full bg-background border border-border/30 rounded-lg transition-all duration-300 hover:border-border/60 relative overflow-hidden";
  const horizontalCardStyles = "group h-full bg-background border border-border/30 rounded-lg transition-all duration-300 hover:border-border/60 relative overflow-hidden";


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

  return (
    <SectionWrapper id="about-me">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <SectionHeader title="About Me" subtitle="My professional journey and expertise" />

        {/* Asymmetric Layout - Intro left, Right side 2x2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column - Intro text only */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <div className={`${largeCardStyles} p-8 lg:p-12`}>
              <div className="space-y-6">
                {info.personal.aboutMe.slice(0, 1).map((about: string, i: number) => (
                  <p key={i} className="text-foreground leading-relaxed text-base lg:text-lg">
                    {about}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - 2x2 Grid */}
          <div className="space-y-6">
            {/* Tech Stack - Top right */}
            <motion.div
              variants={itemVariants}
              className="w-full"
            >
              <div className={`${cardBaseStyles} p-6`}>
                <div className="space-y-6">
                  <div className="grid grid-cols-4 gap-4">
                    {curatedTechStack.map((tech, index) => (
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
                              // Fallback to first letter if icon fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          {/* Fallback letter */}
                          <div className="w-full h-full flex items-center justify-center text-primary font-bold text-3xl hidden">
                            {tech.name.charAt(0)}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education & Experience - Side by side below tech stack */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Education - Minimalist Badge-Free Design */}
              <div className={`${cardBaseStyles} p-6 relative overflow-hidden group cursor-pointer`}>
                <CornerLogo 
                  src={educationEntries[0].image} 
                  alt="UP CS Logo" 
                  size="md"
                  parentHover={true}
                />
                
                {/* Clean minimalist layout */}
                <div className="flex flex-col h-full relative z-10 justify-center">
                  <div className="space-y-2">
                    <h3>
                      {educationEntries[0].title}
                    </h3>
                    <h4>
                      {educationEntries[0].organization}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                        College Scholar
                      </span>
                      <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">
                        DOST Scholar
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Subtle hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Experience - Using Actual Data */}
              <div className={`${cardBaseStyles} p-6 relative overflow-hidden group cursor-pointer`}>
                <CornerLogo 
                  src={experienceEntries[0].image} 
                  alt={`${experienceEntries[0].organization} Logo`} 
                  size="md"
                  parentHover={true}
                />
                
                {/* Clean minimalist layout matching education */}
                <div className="flex flex-col h-full relative z-10 justify-center">
                  <div className="space-y-2">
                    <h3>
                      {experienceEntries[0].title}
                    </h3>
                    <h4>
                      {experienceEntries[0].organization}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
                        1+ Year Industry Experience
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Subtle hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;