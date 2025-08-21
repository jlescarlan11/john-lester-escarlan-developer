"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

// Optional: Custom labels for specific routes
const routeLabels: Record<string, string> = {
  dashboard: "Dashboard",
  "user-profile": "User Profile",
  settings: "Settings",
  // Add more custom labels as needed
};

interface BreadcrumbProps {
  label?: string; // Label for the header
  maxItems?: number; // Limit visible breadcrumbs
  hideHome?: boolean; // Option to hide home link
}

const Header = ({
  label,
  maxItems,
  hideHome = false,
}: BreadcrumbProps = {}) => {
  const pathname = usePathname();

  // Filter out empty segments and decode URI components
  const pathSegments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));

  // Optionally limit the number of breadcrumbs shown
  const displaySegments = maxItems
    ? pathSegments.slice(-maxItems + 1)
    : pathSegments;

  const formatLabel = (segment: string): string => {
    // Check for custom label first
    if (routeLabels[segment]) {
      return routeLabels[segment];
    }

    // Default formatting: capitalize and replace hyphens/underscores with spaces
    return segment
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const buildPath = (index: number): string => {
    return "/" + pathSegments.slice(0, index + 1).join("/");
  };

  return (
    <header className="section-spacing layout">
      <Breadcrumb>
        <BreadcrumbList>
          {/* Home breadcrumb */}
          {!hideHome && (
            <BreadcrumbItem>
              {pathSegments.length === 0 ? (
                <BreadcrumbPage>Home</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          )}

          {/* Show ellipsis if segments are truncated */}
          {maxItems && pathSegments.length > maxItems && (
            <>
              {!hideHome && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                <span>...</span>
              </BreadcrumbItem>
            </>
          )}

          {/* Dynamic breadcrumbs */}
          {displaySegments.map((segment, index) => {
            const actualIndex = maxItems
              ? pathSegments.length - displaySegments.length + index
              : index;
            const path = buildPath(actualIndex);
            const isLast = index === displaySegments.length - 1;
            const label = formatLabel(segment);

            return (
              <Fragment key={path}>
                {(index > 0 || !hideHome) && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={path}>{label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-fit mt-8">
        <h1 className="">
          {label ? label : formatLabel(pathSegments[pathSegments.length - 1])}
        </h1>
        <div className="w-1/2 h-0.5 bg-foreground/40" />
      </div>
    </header>
  );
};

export default Header;
