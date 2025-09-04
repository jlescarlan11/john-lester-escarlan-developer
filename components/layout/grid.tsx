import React, { PropsWithChildren } from "react";

export const Grid = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start ">
      {children}
    </div>
  );
};

export const Col3 = ({ children }: PropsWithChildren) => {
  return <div className="lg:col-span-3 relative">{children}</div>;
};

export const Col2 = ({ children }: PropsWithChildren) => {
  return <div className="lg:col-span-2 relative ">{children}</div>;
};
