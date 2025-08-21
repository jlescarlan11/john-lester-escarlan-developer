import React, { PropsWithChildren } from "react";

const InfoText = ({ children }: PropsWithChildren) => {
  return (
    <span className="flex items-center gap-4  lg:text-left">
      <div className="w-8 h-px bg-foreground/40" />
      <span className="text-2">{children}</span>
    </span>
  );
};

export default InfoText;
