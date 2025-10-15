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
  metadataBase: new URL('https://lester-escarlan.vercel.app'),
  title: {
    default: "John Lester Escarlan - Software Engineer",
    template: "%s | John Lester Escarlan"
  },
  description: "Portfolio website of John Lester Escarlan, a passionate software engineer specializing in modern web technologies and innovative solutions. View my projects, skills, and professional journey.",
  keywords: [
    "John Lester Escarlan", 
    "Full Stack Developer", 
    "Software Engineer", 
    "Portfolio", 
    "Web Development", 
    "React", 
    "Next.js", 
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Frontend Developer",
    "Backend Developer",
    "Software Development",
    "Programming",
    "Tech Stack",
    "Developer Portfolio"
  ],
  authors: [{ name: "John Lester Escarlan" }],
  creator: "John Lester Escarlan",
  publisher: "John Lester Escarlan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  alternates: {
    canonical: 'https://lester-escarlan.vercel.app',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lester-escarlan.vercel.app",
    siteName: "John Lester Escarlan - Portfolio",
    title: "John Lester Escarlan - Full Stack Developer",
    description: "Portfolio website of John Lester Escarlan, a passionate full stack developer specializing in modern web technologies and innovative solutions.",
    images: [
      {
        url: "https://lester-escarlan.vercel.app/hero-image.png",
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
    images: ["https://lester-escarlan.vercel.app/hero-image.png"],
    creator: "@jlescarlan11",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "John Lester Escarlan",
    "jobTitle": "Full Stack Developer",
    "description": "Passionate full stack developer specializing in modern web technologies and innovative solutions",
    "url": "https://lester-escarlan.vercel.app",
    "image": "https://lester-escarlan.vercel.app/hero-image.png",
    "sameAs": [
      "https://github.com/jlescarlan11",
      "https://linkedin.com/in/john-lester-escarlan"
    ],
    "knowsAbout": [
      "React",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Develops web applications using modern technologies"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
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
