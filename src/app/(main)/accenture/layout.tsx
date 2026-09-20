import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accenture Assessment Preparation & Full Mock Tests",
  description:
    "Prepare for Accenture cognitive and technical assessments with timed full mock tests covering Path Finder, Bubble Math, and Memory Maze modules.",
  alternates: {
    canonical: "/accenture",
  },
  openGraph: {
    title: "Accenture Assessment Preparation & Full Mock Tests | Education Matters",
    description:
      "Prepare for Accenture cognitive and technical assessments with timed full mock tests covering Path Finder, Bubble Math, and Memory Maze modules.",
    url: "/accenture",
  },
};

export default function AccentureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
