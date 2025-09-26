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
  keywords: ["John Lester Escarlan", "Full Stack Developer", "Software Engineer", "Portfolio", "Web Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "John Lester Escarlan" }],
  creator: "John Lester Escarlan",
  publisher: "John Lester Escarlan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://john-lester-escarlan.vercel.app", // Update this with your actual domain
    siteName: "John Lester Escarlan - Portfolio",
    title: "John Lester Escarlan - Full Stack Developer",
    description: "Portfolio website of John Lester Escarlan, a passionate full stack developer specializing in modern web technologies and innovative solutions.",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "John Lester Escarlan - Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Lester Escarlan - Full Stack Developer",
    description: "Portfolio website of John Lester Escarlan, a passionate full stack developer specializing in modern web technologies and innovative solutions.",
    images: ["/hero-image.png"],
    creator: "@jlescarlan11", // Update with your Twitter handle if you have one
  },
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
