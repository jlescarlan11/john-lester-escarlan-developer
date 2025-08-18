"use client";
import React, { useEffect, useState } from "react";
import Logo from "./_components/Logo";
import {
  DesktopNavigation,
  MobileNavigationToggle,
  MobileNavigation,
} from "./_components/Navigation";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const handleEscape = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-background">
      <nav className="h-28 flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-0">
        <Logo />
        <div className="flex items-center">
          <DesktopNavigation setOpen={setOpen} />
          <MobileNavigationToggle open={open} setOpen={setOpen} />
        </div>
      </nav>
      <MobileNavigation open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavigationBar;
