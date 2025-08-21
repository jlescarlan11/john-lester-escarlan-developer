import React from "react";

const RenderTechStackList = ({ technologies }: { technologies: string[] }) => {
  return (
    <div className="flex items-center space-x-4 pt-3">
      <div className="w-6 h-px bg-foreground/30" />
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs text-foreground/50 font-light">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RenderTechStackList;
