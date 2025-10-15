"use client";
import React, { useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import sections from "@/data/navigationSection";
import { cn } from "@/lib/utils";
import { smoothScrollToSection } from "@/utils/smoothScroll";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Navigation Links Component
const NavigationLinks: React.FC<{
  activeSection: string;
  className?: string;
}> = ({ activeSection, className }) => {
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
    if (isHomePage) {
      smoothScrollToSection(sectionId);
    } else {
      router.push(`/?scrollTo=${sectionId}`);
    }
  };

  return (
    <nav
      className={cn(
        "flex items-center gap-6",
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
    className="group relative flex items-center justify-center px-3 py-2 transition-all duration-500 ease-out focus:outline-none rounded-lg hover:bg-gray-50/60 hover:scale-105"
    type="button"
    aria-label={`Navigate to ${label} section`}
  >
    <span
      className={cn(
        "text-sm font-medium transition-all duration-700 ease-in-out relative",
        isActive
          ? "text-foreground"
          : "text-foreground/60 hover:text-foreground/90"
      )}
    >
      {label}
    </span>
    
    {/* Active state indicator with smooth transition */}
    <div className={cn(
      "absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-foreground rounded-full transition-all duration-700 ease-in-out",
      isActive ? "w-8 opacity-100" : "w-0 opacity-0"
    )} />
    
    {/* Hover state indicator */}
    {!isActive && (
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-foreground/30 w-0 group-hover:w-6 rounded-full transition-all duration-500 ease-out" />
    )}
  </button>
);

// Main Navigation Component
const Navigation: React.FC = () => {
  const sectionIds = sections.map(([id]) => id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50" role="banner">
      <div className="bg-white/85 backdrop-blur-lg border border-gray-200/60 rounded-full shadow-lg shadow-black/8 px-6 py-3 relative">
        {/* Subtle inner glow for grounding */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/20 to-transparent rounded-full pointer-events-none" />
        
        <nav className="flex items-center justify-center relative z-10" role="navigation" aria-label="Main navigation">
          <Suspense fallback={<div className="flex items-center gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-5 w-12 bg-muted/50 rounded animate-pulse" />
            ))}
          </div>}>
            <NavigationLinks
              activeSection={activeSection}
            />
          </Suspense>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
