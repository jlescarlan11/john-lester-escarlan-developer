"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/components/ui/logo";
import { useActiveSection } from "@/hooks/useActiveSection";
import sections from "@/data/navigationSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { smoothScrollToSection } from "@/utils/smoothScroll";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Navigation Links Component
const NavigationLinks: React.FC<{
  closeNav: () => void;
  activeSection: string;
  className?: string;
}> = ({ closeNav, activeSection, className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      const timer = setTimeout(() => smoothScrollToSection(scrollTo), 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams, isHomePage]);

  const handleNavigation = (sectionId: string) => {
    closeNav();

    if (isHomePage) {
      smoothScrollToSection(sectionId);
    } else {
      router.push(`/?scrollTo=${sectionId}`);
    }
  };

  return (
    <nav
      className={cn(
        "flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8",
        className
      )}
    >
      {sections.map(([sectionId, label]) => (
        <NavLink
          key={sectionId}
          sectionId={sectionId}
          label={label}
          isActive={activeSection === sectionId}
          onClick={() => handleNavigation(sectionId)}
        />
      ))}

      <Button
        size="lg"
        variant="outline"
        className="text-lg lg:text-sm mt-2 lg:mt-0"
      >
        Resume
      </Button>
    </nav>
  );
};

// Individual Nav Link Component
const NavLink: React.FC<{
  sectionId: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="group relative flex flex-col items-start lg:items-center gap-1"
    type="button"
    aria-label={`Navigate to ${label} section`}
  >
    <span
      className={cn(
        "text-lg lg:text-sm transition-colors duration-200",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </span>
    <div
      className={cn(
        "absolute -bottom-1 left-0 lg:left-1/2 lg:-translate-x-1/2 h-px bg-primary transition-all duration-300",
        isActive ? "w-6" : "w-0 group-hover:w-6"
      )}
    />
  </button>
);

// Mobile Menu Toggle Component
const MobileMenuToggle: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => (
  <button
    onClick={() => setOpen(!open)}
    className="lg:hidden p-2 rounded-md hover:bg-foreground/5 transition-colors"
    aria-label="Toggle mobile menu"
    aria-expanded={open}
  >
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span
        className={cn(
          "block w-6 h-0.5 bg-foreground transition-all duration-300",
          open ? "rotate-45 translate-y-1" : "translate-y-0"
        )}
      />
      <span
        className={cn(
          "block w-6 h-0.5 bg-foreground transition-all duration-300 mt-1",
          open ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "block w-6 h-0.5 bg-foreground transition-all duration-300 mt-1",
          open ? "-rotate-45 -translate-y-1" : "translate-y-0"
        )}
      />
    </div>
  </button>
);

// Mobile Navigation Component
const MobileNavigation: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  activeSection: string;
}> = ({ open, setOpen, activeSection }) => (
  <div
    className={cn(
      "lg:hidden fixed inset-0 top-28 bg-background border-t z-40 transition-transform duration-300",
      open ? "translate-x-0" : "translate-x-full"
    )}
  >
    <nav className="flex flex-col p-8">
      <Suspense fallback={<NavigationSkeleton />}>
        <NavigationLinks
          closeNav={() => setOpen(false)}
          activeSection={activeSection}
          className="items-start"
        />
      </Suspense>
    </nav>
  </div>
);

// Loading skeleton for navigation
const NavigationSkeleton = () => (
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-6 w-16 bg-muted rounded animate-pulse" />
    ))}
    <div className="h-10 w-20 bg-muted rounded animate-pulse" />
  </div>
);

// Main Navigation Component
const Navigation: React.FC = () => {
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
          <div className="hidden lg:block">
            <Suspense fallback={<NavigationSkeleton />}>
              <NavigationLinks
                closeNav={() => setOpen(false)}
                activeSection={activeSection}
              />
            </Suspense>
          </div>
          <MobileMenuToggle open={open} setOpen={setOpen} />
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

export default Navigation;
