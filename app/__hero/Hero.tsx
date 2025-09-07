"use client";
import { Col2, Col3, Grid } from "@/components/layout/grid";
import { Button } from "@/components/ui/button";
import StyledImage from "@/components/ui/image";
import Info from "@/components/ui/info";
import info from "@/data/info";
import socialLinks from "@/data/socialLinks";
import { smoothScrollToSection } from "@/utils/smoothScroll";
import Link from "next/link";

const HeroSection = () => {
  const handleClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToSection(sectionId);
  };

  return (
    <div
      id="hero"
      className="min-h-dvh flex items-center justify-center section-spacing lg:!mt-0"
    >
      <Grid>
        <Col3>
          <div className={`flex items-center gap-6 mb-8`}>
            <div>
              <div className="info-text">Hello, I am</div>
            </div>
            <div className="flex-1 h-px bg-foreground/20" />
          </div>
          <div className="space-y-8">
            <h1>John Lester Escarlan</h1>
            <p className="border-l-2 border-foreground/20 text-muted-foreground pl-4 text-1">
              {info.introduction}
            </p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
            <Link
              href="/john_lester_escarlan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                Resume
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={(e) => handleClick("contact-me", e)}
              className="relative group"
            >
              Contact Me
            </Button>

            <Info>Available for collaboration</Info>
          </div>
        </Col3>
        <Col2>
          <div className="relative">
            <StyledImage imageLink="/hero-image.png" label="Lester" />
          </div>
          <div className="absolute -bottom-4 right-12 flex gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
              >
                <Button variant="outline" className="rounded-full">
                  <Icon className="w-6 h-6" />
                </Button>
              </Link>
            ))}
          </div>
        </Col2>
      </Grid>
    </div>
  );
};

export default HeroSection;
