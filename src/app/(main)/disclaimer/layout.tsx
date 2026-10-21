import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Education Matters",
  description: "Read the Disclaimer for Education Matters. Understand the educational purpose of our simulations, trademark policies, and limitation of liability.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | Education Matters",
    description: "Read the Disclaimer for Education Matters.",
    url: "/disclaimer",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}