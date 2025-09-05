import { Button } from "@/components/ui/button";
import sections from "@/data/navigationSection";
import { cn } from "@/lib/utils";
import { NavigationLinksProps } from "@/types/navigationProps";
import { smoothScrollToSection } from "@/utils/smoothScroll";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  closeNav,
  activeSection,
  className,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle hash-based scrolling on page load
  useEffect(() => {
    if (!isHomePage) return;

    // Check for hash in URL
    const hash = window.location.hash.slice(1); // Remove the '#'
    if (hash) {
      // Small delay to ensure page is fully loaded
      const timer = setTimeout(() => smoothScrollToSection(hash), 100);
      return () => clearTimeout(timer);
    }
  }, [isHomePage]);

  const handleNavigation = (sectionId: string) => {
    closeNav();

    if (isHomePage) {
      // Update URL hash without triggering navigation
      window.history.replaceState(null, "", `#${sectionId}`);
      smoothScrollToSection(sectionId);
    } else {
      // Navigate to home page with hash
      router.push(`/#${sectionId}`);
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
