// components/MobileNavigationToggle.tsx
import { NavigationProps } from "@/types/navigationProps";
import React from "react";
import { MdMenu, MdClose } from "react-icons/md";

const MobileNavigationToggle: React.FC<NavigationProps> = ({
  open,
  setOpen,
}) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="lg:hidden z-50 p-2 -m-2 rounded-md hover:bg-accent transition-colors"
      aria-label={open ? "Close menu" : "Open menu"}
      type="button"
    >
      {open ? <MdClose size={24} /> : <MdMenu size={24} />}
    </button>
  );
};

export default MobileNavigationToggle;
