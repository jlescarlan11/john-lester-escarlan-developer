import React from "react";
import NavigationLinks from "./NavigationLinks";

interface DesktopNavigationProps {
  setOpen: (open: boolean) => void;
  activeSection: string;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  setOpen,
  activeSection,
}) => {
  return (
    <div className="hidden lg:block">
      <NavigationLinks
        closeNav={() => setOpen(false)}
        activeSection={activeSection}
      />
    </div>
  );
};

export default DesktopNavigation;
