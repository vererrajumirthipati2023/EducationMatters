import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Practice & Assessment Modules",
  description:
    "Master cognitive assessment mini-games. Practice untimed and timed tests for Path Finder, Bubble Math, and Memory Maze.",
  alternates: {
    canonical: "/practice",
  },
  openGraph: {
    title: "Game Practice & Assessment Modules | Education Matters",
    description:
      "Master cognitive assessment mini-games. Practice untimed and timed tests for Path Finder, Bubble Math, and Memory Maze.",
    url: "/practice",
  },
};

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
