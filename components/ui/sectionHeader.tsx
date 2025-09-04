import React from "react";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex items-center gap-6 mb-16">
      <div className="">
        <h2 className="">{title}</h2>
        <p className="info-text">{subtitle}</p>
      </div>
      <div className="flex-1 h-px bg-foreground/20" />
    </div>
  );
};

export default SectionHeader;
