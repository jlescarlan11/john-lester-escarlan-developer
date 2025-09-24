"use client";
import SectionWrapper from "@/components/common/SectionWrapper";
import Card from "@/components/layout/card";
import SectionHeader from "@/components/ui/sectionHeader";
import projectsData from "@/data/projects";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <SectionWrapper id="featured-projects">
      <SectionHeader title="Featured Project" subtitle="What did I do?" />
      <div className="space-y-24">
        {featuredProjects.map((project, index) => (
          <Card
            key={index}
            data={{
              subInfo: project.category,
              mainInfo: project.title,
              descriptions: project.description,
              image: project.image,
              skills: project.technologies,
              duration: project.date,
              links: project.link,
            }}
          />
        ))}
      </div>
      <motion.div
        className="flex flex-col items-center mt-12 sm:mt-16 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="w-full h-px bg-border/30"></div>
        <button
          onClick={() =>
            window.open(
              "https://github.com/stars/jlescarlan11/lists/projects",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="px-10 py-4 text-base font-medium text-foreground/90 hover:text-foreground border-2 border-foreground/40 hover:border-foreground/60 rounded-lg transition-all duration-300 hover:bg-foreground/5 hover:scale-105 active:scale-95 bg-background shadow-sm hover:shadow-md"
        >
          View All Projects
        </button>
        <div className="text-xs text-foreground/50">
          Click to see all projects on GitHub
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
