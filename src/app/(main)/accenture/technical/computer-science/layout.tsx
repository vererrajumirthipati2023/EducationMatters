import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Science Practice | Accenture Round 2",
  description:
    "Practice data structures, algorithms, OOP, DBMS, SQL, and operating systems questions for Accenture technical assessment preparation.",
  alternates: {
    canonical: "/accenture/technical/computer-science",
  },
  openGraph: {
    title: "Computer Science Practice | Accenture Round 2 | Education Matters",
    description:
      "Practice data structures, algorithms, OOP, DBMS, SQL, and operating systems questions for Accenture technical assessment preparation.",
    url: "/accenture/technical/computer-science",
  },
};

export default function ComputerScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}