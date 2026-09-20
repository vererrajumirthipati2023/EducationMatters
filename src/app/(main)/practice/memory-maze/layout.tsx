import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Maze Practice Tests",
  description:
    "Improve spatial memory and sequence recall with interactive Memory Maze practice tests.",
  alternates: {
    canonical: "/practice/memory-maze",
  },
  openGraph: {
    title: "Memory Maze Practice Tests | Education Matters",
    description:
      "Improve spatial memory and sequence recall with interactive Memory Maze practice tests.",
    url: "/practice/memory-maze",
  },
};

export default function MemoryMazePracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
