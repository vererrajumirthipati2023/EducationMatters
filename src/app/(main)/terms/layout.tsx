import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Education Matters",
  description: "Read the Terms and Conditions for using Education Matters. Understand your rights and responsibilities when using our educational platform and assessment tools.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms and Conditions | Education Matters",
    description: "Read the Terms and Conditions for using Education Matters.",
    url: "/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}