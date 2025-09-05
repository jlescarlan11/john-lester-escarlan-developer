"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/components/ui/logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigationToggle from "./MobileNavigationToggle";
import MobileNavigation from "./MobileNavigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import sections from "@/data/navigationSection";

const NavigationBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const sectionIds = sections.map(([id]) => id);
  const activeSection = useActiveSection(sectionIds);

  // Handle mobile menu effects
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      const handleEscape = (e: KeyboardEvent): void => {
        if (e.key === "Escape") setOpen(false);
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [open]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-background">
      <nav className="wrapper h-28 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <DesktopNavigation setOpen={setOpen} activeSection={activeSection} />
          <MobileNavigationToggle open={open} setOpen={setOpen} />
        </div>
      </nav>
      <MobileNavigation
        open={open}
        setOpen={setOpen}
        activeSection={activeSection}
      />
    </div>
  );
};

export default NavigationBar;
