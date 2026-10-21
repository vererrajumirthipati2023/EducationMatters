import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Education Matters",
  description: "Read the Privacy Policy of Education Matters. Understand how we collect, use, and protect your data, including our use of cookies and Google AdSense.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Education Matters",
    description: "Read the Privacy Policy of Education Matters.",
    url: "/privacy-policy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}