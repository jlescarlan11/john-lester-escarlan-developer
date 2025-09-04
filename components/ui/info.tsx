import React, { PropsWithChildren } from "react";

const Info = ({ children }: PropsWithChildren) => {
  return (
    <span className="flex items-center gap-4 justify-start">
      <div className="w-8 h-px bg-foreground/40" aria-hidden="true" />
      <span className="info-text">{children}</span>
    </span>
  );
};

export default Info;
