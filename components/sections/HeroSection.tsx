"use client";
import { Col2, Col3, Grid } from "@/components/layout/grid";
import { Button } from "@/components/ui/button";
import StyledImage from "@/components/ui/image";
import Info from "@/components/ui/info";
import info from "@/data/info";
import socialLinks from "@/data/socialLinks";
import { smoothScrollToSection } from "@/utils/smoothScroll";
import Link from "next/link";
import { motion } from "motion/react";

const HeroSection = () => {
  const handleClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToSection(sectionId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      id="hero"
      className="min-h-dvh flex items-center justify-center section-spacing lg:!mt-0"
    >
      <Grid>
        <Col3>
          <motion.div 
            className={`flex items-center gap-4 sm:gap-6 ma-md`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div>
              <div className="info-text">Hello, I am</div>
            </div>
            <div className="flex-1 h-px bg-foreground/20" />
          </motion.div>
          
          <div className="space-y-6 sm:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              John Lester Escarlan
            </motion.h1>
            <motion.p 
              className="border-l border-foreground/30 text-foreground/85 pl-4 sm:pl-6 text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {info.personal.introduction}
            </motion.p>
          </div>

          <motion.div 
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href="/john_lester_escarlan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Resume
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={(e) => handleClick("contact-me", e)}
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>

            <Info>Available for collaboration</Info>
          </motion.div>
        </Col3>
        <Col2>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <StyledImage imageLink="/hero-image.png" label="Lester" />
          </motion.div>
          <motion.div 
            className="absolute -bottom-2 sm:-bottom-4 right-4 sm:right-12 flex gap-2 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {socialLinks.map(({ href, icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                >
                  <Button variant="outline" size="sm" className="rounded-full p-2">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Col2>
      </Grid>
    </motion.div>
  );
};

export default HeroSection;
