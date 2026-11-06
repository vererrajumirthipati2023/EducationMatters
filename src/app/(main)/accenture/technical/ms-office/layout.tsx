import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Application & MS Office Practice | Accenture Round 2",
  description:
    "Practice MS Office, Excel formulas, Word formatting, and common workplace applications questions for Accenture technical assessment preparation.",
  alternates: {
    canonical: "/accenture/technical/ms-office",
  },
  openGraph: {
    title: "Common Application & MS Office Practice | Accenture Round 2 | Education Matters",
    description:
      "Practice MS Office, Excel formulas, Word formatting, and common workplace applications questions for Accenture technical assessment preparation.",
    url: "/accenture/technical/ms-office",
  },
};

export default function MsOfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}