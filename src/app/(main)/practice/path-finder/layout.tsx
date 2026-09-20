import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Path Finder Practice Tests",
  description:
    "Practice Path Finder spatial reasoning assessment questions with interactive grid puzzles, tile rotations, and instant validation.",
  alternates: {
    canonical: "/practice/path-finder",
  },
  openGraph: {
    title: "Path Finder Practice Tests | Education Matters",
    description:
      "Practice Path Finder spatial reasoning assessment questions with interactive grid puzzles, tile rotations, and instant validation.",
    url: "/practice/path-finder",
  },
};

export default function PathFinderPracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
