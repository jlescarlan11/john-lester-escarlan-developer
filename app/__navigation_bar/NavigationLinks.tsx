"use client";

import { Button } from "@/components/ui/button";
import sections from "@/data/navigationSection";
import { cn } from "@/lib/utils";
import { NavigationLinksProps } from "@/types/navigationProps";
import { smoothScrollToSection } from "@/utils/smoothScroll";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";

// Separate the component that uses useSearchParams
const NavigationLinksContent: React.FC<NavigationLinksProps> = ({
  closeNav,
  activeSection,
  className,
}) => {
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

// Loading fallback component
const NavigationSkeleton = () => (
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-6 w-16 bg-muted rounded animate-pulse" />
    ))}
    <div className="h-10 w-20 bg-muted rounded animate-pulse" />
  </div>
);

// Main component with Suspense boundary
const NavigationLinks: React.FC<NavigationLinksProps> = (props) => {
  return (
    <Suspense fallback={<NavigationSkeleton />}>
      <NavigationLinksContent {...props} />
    </Suspense>
  );
};

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

export default NavigationLinks;
