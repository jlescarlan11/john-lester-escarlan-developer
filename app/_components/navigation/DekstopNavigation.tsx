import { NavigationProps } from "@/interface/navigation";
import React from "react";
import NavigationLinks from "./NavigationLinks";

const DesktopNavigation = ({ setOpen }: Pick<NavigationProps, "setOpen">) => {
  return (
    <div className="hidden lg:flex items-center gap-12">
      <nav className="flex items-center gap-8">
        <NavigationLinks closeNav={() => setOpen(false)} />
      </nav>
    </div>
  );
};

export default DesktopNavigation;
