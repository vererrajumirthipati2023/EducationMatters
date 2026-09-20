import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Education Matters, our mission to democratize quality aptitude assessment preparation, and our interactive cognitive simulators.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Education Matters",
    description:
      "Learn about Education Matters, our mission to democratize quality aptitude assessment preparation, and our interactive cognitive simulators.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
