import React from "react";
import { Metadata } from "next";
import { BackendPractice } from "@/components/backend/BackendPractice";
import { backendQuestions } from "@/data/backend/questions";

export const metadata: Metadata = {
  title: "Backend Coding Practice | Accenture Round 3 Coding Assessment",
  description:
    "Practice backend coding algorithms, array manipulations, and problem solving for Accenture coding assessment preparation.",
  alternates: {
    canonical: "/accenture/coding/backend",
  },
  openGraph: {
    title: "Backend Coding Practice | Accenture Round 3 Coding Assessment | Education Matters",
    description:
      "Practice backend coding algorithms, array manipulations, and problem solving for Accenture coding assessment preparation.",
    url: "/accenture/coding/backend",
  },
};

export default function BackendPracticePage() {
  return <BackendPractice questions={backendQuestions} backHref="/accenture" />;
}
