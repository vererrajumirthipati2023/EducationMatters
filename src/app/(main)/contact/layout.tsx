import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Education Matters",
  description: "Get in touch with the Education Matters team. We are here to answer your questions, listen to your feedback, and help you with your placement preparation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Education Matters",
    description: "Get in touch with the Education Matters team for support, feedback, or inquiries.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}