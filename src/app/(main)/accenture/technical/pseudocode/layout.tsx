import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pseudocode Practice | Accenture Round 2",
  description:
    "Practice pseudocode tracing, output prediction, loops, conditional logic, and algorithmic reasoning questions for Accenture technical assessment preparation.",
  alternates: {
    canonical: "/accenture/technical/pseudocode",
  },
  openGraph: {
    title: "Pseudocode Practice | Accenture Round 2 | Education Matters",
    description:
      "Practice pseudocode tracing, output prediction, loops, conditional logic, and algorithmic reasoning questions for Accenture technical assessment preparation.",
    url: "/accenture/technical/pseudocode",
  },
};

export default function PseudocodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}