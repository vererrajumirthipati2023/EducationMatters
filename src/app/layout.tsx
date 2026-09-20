import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://theeducationmatters.in"),
  title: {
    template: "%s | Education Matters",
    default: "Education Matters | Practice Tests, Cognitive Games & Career Preparation",
  },
  description:
    "Free interactive cognitive, technical, and aptitude assessment simulations designed to help students and job seekers build speed, accuracy, memory, and problem-solving skills.",
  keywords: [
    "aptitude test practice",
    "cognitive assessment simulator",
    "path finder practice",
    "bubble math test",
    "memory maze assessment",
    "accenture assessment practice",
    "placement preparation",
    "gamified aptitude assessment",
    "education matters",
    "interactive mock tests",
  ],
  authors: [{ name: "Education Matters", url: "https://theeducationmatters.in" }],
  creator: "Education Matters",
  publisher: "Education Matters",
  alternates: {
    canonical: "https://theeducationmatters.in",
  },
  openGraph: {
    title: "Education Matters | Practice Tests, Cognitive Games & Career Preparation",
    description:
      "Free interactive cognitive, technical, and aptitude assessment simulations designed to help students and job seekers build speed, accuracy, memory, and problem-solving skills.",
    url: "https://theeducationmatters.in",
    siteName: "Education Matters",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/education-matters-logo.jpg",
        width: 800,
        height: 600,
        alt: "Education Matters Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Matters | Practice Tests, Cognitive Games & Career Preparation",
    description:
      "Free interactive cognitive, technical, and aptitude assessment simulations designed to help students and job seekers build speed, accuracy, memory, and problem-solving skills.",
    images: ["/education-matters-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { AuthProvider } from "@/lib/auth/auth-context";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://theeducationmatters.in/#organization",
      name: "Education Matters",
      url: "https://theeducationmatters.in",
      logo: {
        "@type": "ImageObject",
        url: "https://theeducationmatters.in/education-matters-logo.jpg",
      },
      sameAs: ["https://www.youtube.com/@Education_Matters"],
      description:
        "Interactive cognitive assessment simulations and practice modules designed to help students and candidates prepare for campus placements, aptitude tests, and technical assessments.",
    },
    {
      "@type": "WebSite",
      "@id": "https://theeducationmatters.in/#website",
      url: "https://theeducationmatters.in",
      name: "Education Matters",
      description:
        "Free interactive cognitive, technical, and aptitude assessment simulations for job seekers and students.",
      publisher: {
        "@id": "https://theeducationmatters.in/#organization",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
