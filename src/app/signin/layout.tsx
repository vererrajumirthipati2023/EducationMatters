import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Education Matters account to access assessment simulations and track your progress.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/signin",
  },
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
