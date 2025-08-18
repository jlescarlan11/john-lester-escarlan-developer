import React from "react";

// Reusable components
const Header = ({
  label,
  classname = "",
}: {
  label: string;
  classname?: string;
}) => (
  <div className={`flex items-center gap-6 mb-16 ${classname}`}>
    <div>
      <div className="text-2">{label}</div>
    </div>
    <div className="flex-1 h-px bg-foreground/20" />
  </div>
);

export default Header;
