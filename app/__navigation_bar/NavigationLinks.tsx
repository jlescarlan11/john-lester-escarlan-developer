import React, { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { smoothScrollToSection } from "@/utils/smoothScroll";
import sections from "@/data/navigationSection";
import { NavigationLinksProps } from "@/types/navigationProps";

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  closeNav,
  activeSection,
  className,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHomePage = pathname === "/";

  // Handle scrolling after navigation
  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo && isHomePage) {
      // Add delay to ensure DOM is ready and page starts at top
      setTimeout(() => {
        smoothScrollToSection(scrollTo);
      }, 500); // Increased delay to let page settle at top first
    }
  }, [pathname, searchParams, isHomePage]);

  const handleSectionClick = (sectionId: string): void => {
    closeNav();

    if (isHomePage) {
      smoothScrollToSection(sectionId);
    } else {
      // Navigate to home page with scrollTo parameter
      router.push(`/?scrollTo=${sectionId}`);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8",
        className
      )}
    >
      {sections.map(([sectionId, label]) => {
        const isActive = activeSection === sectionId;

        return (
          <button
            key={sectionId}
            onClick={() => handleSectionClick(sectionId)}
            className="group relative flex flex-col items-start lg:items-center gap-1"
            type="button"
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
      })}

      <Button
        size="lg"
        variant="outline"
        className="text-lg lg:text-sm mt-2 lg:mt-0"
      >
        Resume
      </Button>
    </div>
  );
};

export default NavigationLinks;
