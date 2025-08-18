import pages from "@/data/navigationPages";
import Link from "next/link";
import Button from "./common/Button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  closeNav: () => void
) => {
  e.preventDefault();

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  closeNav();
};

const NavigationLinks = ({ closeNav }: { closeNav: () => void }) => {
  return (
    <>
      {pages.map(([id, label]) => (
        <Link
          key={id}
          onClick={(e) => handleNavClick(e, id, closeNav)}
          href={`#${id}`}
          className="group flex flex-col items-center gap-1 py-2"
        >
          <span className="label">{label}</span>
          <div className="w-0 group-hover:w-6 h-px bg-primary transition-all duration-300" />
        </Link>
      ))}
      <Button label="Resume" />
    </>
  );
};

export const DesktopNavigation = ({
  setOpen,
}: Pick<NavigationProps, "setOpen">) => {
  return (
    <div className="hidden lg:flex items-center gap-12">
      <nav className="flex items-center gap-8">
        <NavigationLinks closeNav={() => setOpen(false)} />
      </nav>
    </div>
  );
};

export const MobileNavigationToggle = ({ open, setOpen }: NavigationProps) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="lg:hidden z-50"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {open ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};

export const MobileNavigation = ({ open, setOpen }: NavigationProps) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 top-28 bg-background border-t z-40 flex flex-col transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
        <NavigationLinks closeNav={() => setOpen(false)} />
      </nav>
      <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 border-t border-foreground/5">
        John Lester Escarlan
      </div>
    </div>
  );
};
