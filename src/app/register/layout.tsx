import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create a free Education Matters account to access mock tests and assessment preparation tools.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/register",
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
