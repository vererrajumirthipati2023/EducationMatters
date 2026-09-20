import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Assessment Test",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Education Matters Platform Header */}
      <Header />

      {/* Main Game Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {children}
      </main>
    </div>
  );
}
