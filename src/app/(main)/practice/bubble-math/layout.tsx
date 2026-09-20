import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bubble Math Practice Tests",
  description:
    "Sharpen mental arithmetic and numerical reasoning with interactive timed Bubble Math practice tests.",
  alternates: {
    canonical: "/practice/bubble-math",
  },
  openGraph: {
    title: "Bubble Math Practice Tests | Education Matters",
    description:
      "Sharpen mental arithmetic and numerical reasoning with interactive timed Bubble Math practice tests.",
    url: "/practice/bubble-math",
  },
};

export default function BubbleMathPracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
