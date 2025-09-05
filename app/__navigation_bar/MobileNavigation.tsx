import React from "react";
import NavigationLinks from "./NavigationLinks";

interface MobileNavigationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeSection: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  open,
  setOpen,
  activeSection,
}) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 top-28 bg-background border-t z-40 transition-transform duration-300",
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <nav className="flex flex-col p-8">
        <NavigationLinks
          closeNav={() => setOpen(false)}
          activeSection={activeSection}
          className="items-start"
        />
      </nav>
    </div>
  );
};

export default MobileNavigation;
