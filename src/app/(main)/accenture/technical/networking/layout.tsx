import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundamentals of Networking Practice | Accenture Round 2",
  description:
    "Practice OSI model, TCP/IP, protocols, ports, IP addressing, and networking fundamentals questions for Accenture technical assessment preparation.",
  alternates: {
    canonical: "/accenture/technical/networking",
  },
  openGraph: {
    title: "Fundamentals of Networking Practice | Accenture Round 2 | Education Matters",
    description:
      "Practice OSI model, TCP/IP, protocols, ports, IP addressing, and networking fundamentals questions for Accenture technical assessment preparation.",
    url: "/accenture/technical/networking",
  },
};

export default function NetworkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}