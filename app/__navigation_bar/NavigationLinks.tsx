import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import section from "@/data/navigationSection";

const NavigationLinks = ({ closeNav }: { closeNav: () => void }) => {
  return (
    <>
      {section.map(([sectionLink, label]) => (
        <Link
          key={sectionLink}
          onClick={() => closeNav()}
          href={`#${sectionLink}`}
          className="group flex flex-col items-center gap-1 relative"
        >
          <span className="text-lg lg:text-sm">{label}</span>
          <div className="absolute bottom-0 w-0 group-hover:w-6 h-px bg-primary transition-all duration-300" />
        </Link>
      ))}
      <Button size="lg" variant="outline">
        <span className="text-lg lg:text-sm">Resume</span>
      </Button>
    </>
  );
};

export default NavigationLinks;
