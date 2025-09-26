import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "John Lester Escarlan - Full Stack Developer",
  description: "Portfolio website of John Lester Escarlan, a passionate full stack developer specializing in modern web technologies and innovative solutions.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="wrapper" role="main">
          <div>{children}</div>
        </main>
        <Footer />
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
