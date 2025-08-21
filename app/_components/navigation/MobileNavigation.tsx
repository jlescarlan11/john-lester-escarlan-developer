import React from "react";
import { NavigationProps } from "@/interface/navigation";
import NavigationLinks from "./NavigationLinks";
import Footer from "@/app/Footer";

const MobileNavigation = ({ open, setOpen }: NavigationProps) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 top-28 bg-background border-t z-40 flex flex-col transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex-1 flex flex-col justify-center p-8 gap-2">
        <NavigationLinks closeNav={() => setOpen(false)} />
      </nav>
      <Footer variant="mobile" className="justify-between" />
    </div>
  );
};

export default MobileNavigation;
