"use client";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/ui/sectionHeader";
import { techStack } from "@/data/techStack";
import Image from "next/image";
import React, { useState } from "react";

const TechstackSection = () => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 10; // Show first 10 items initially

  const displayedTechStack = showAll
    ? techStack
    : techStack.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreItems = techStack.length > INITIAL_DISPLAY_COUNT;

  return (
    <Section>
      <div id="tect-stack">
        <SectionHeader title="Tech Stack" subtitle="What I use and know?" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 lg:gap-20 items-start ">
          {displayedTechStack.map((tech, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center group"
                aria-label={`Technology: ${tech.name}`}
              >
                <Image
                  src={tech.href}
                  height={600}
                  width={600}
                  alt={`Preview of ${tech.name}`}
                  className={`w-full h-auto aspect-square mb-4 grayscale group-hover:grayscale-0 transition-all duration-300`}
                  aria-hidden="true"
                />
                <span className="text-xs text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {hasMoreItems && (
          <div className="flex justify-end mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 text-sm font-medium text-foreground/70 hover:text-foreground border border-foreground/20 hover:border-foreground/40 rounded-lg transition-all duration-300 hover:bg-foreground/5"
            >
              {showAll
                ? "Show Less"
                : `Show More (${
                    techStack.length - INITIAL_DISPLAY_COUNT
                  } more)`}
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default TechstackSection;
