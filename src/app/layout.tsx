import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://theducationmatters.in"),
  title: {
    template: "%s | Education Matters",
    default: "Education Matters | Assessment Practice Platform",
  },
  description:
    "Free interactive cognitive and aptitude assessment simulations designed to help students and job seekers build speed, accuracy, memory, and spatial reasoning.",
  keywords: [
    "aptitude test practice",
    "cognitive assessment simulator",
    "path finder practice",
    "bubble math test",
    "memory maze assessment",
    "placement preparation",
    "gamified aptitude assessment",
    "education matters",
    "interactive mock tests",
  ],
  authors: [{ name: "Education Matters", url: "https://theducationmatters.in" }],
  creator: "Education Matters",
  publisher: "Education Matters",
  alternates: {
    canonical: "https://theducationmatters.in",
  },
  openGraph: {
    title: "Education Matters | Assessment Practice Platform",
    description:
      "Free interactive cognitive and aptitude assessment simulations designed to help students and job seekers build speed, accuracy, memory, and spatial reasoning.",
    url: "https://theducationmatters.in",
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
    title: "Education Matters | Assessment Practice Platform",
    description:
      "Free interactive cognitive and aptitude assessment simulations designed to help students and job seekers build speed, accuracy, memory, and spatial reasoning.",
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
      "@id": "https://theducationmatters.in/#organization",
      name: "Education Matters",
      url: "https://theducationmatters.in",
      logo: {
        "@type": "ImageObject",
        url: "https://theducationmatters.in/education-matters-logo.jpg",
      },
      sameAs: ["https://www.youtube.com/@Education_Matters"],
      description:
        "Interactive cognitive assessment simulations designed to help students and candidates prepare for aptitude and reasoning assessments.",
    },
    {
      "@type": "WebSite",
      "@id": "https://theducationmatters.in/#website",
      url: "https://theducationmatters.in",
      name: "Education Matters",
      description:
        "Free interactive cognitive and aptitude assessment simulations for job seekers and students.",
      publisher: {
        "@id": "https://theducationmatters.in/#organization",
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
