import React from "react";
import { Metadata } from "next";
import { TechnicalPractice } from "@/components/technical/TechnicalPractice";
import { pseudocodeQuestions } from "@/data/technical/pseudocode";

export const metadata: Metadata = {
  title: "Pseudocode Practice | Accenture Round 2",
  description:
    "Practice pseudocode tracing, output prediction, loops, conditional logic, and algorithmic reasoning questions for Accenture technical assessment preparation.",
  alternates: {
    canonical: "/accenture/technical/pseudocode",
  },
  openGraph: {
    title: "Pseudocode Practice | Accenture Round 2 | Education Matters",
    description:
      "Practice pseudocode tracing, output prediction, loops, conditional logic, and algorithmic reasoning questions for Accenture technical assessment preparation.",
    url: "/accenture/technical/pseudocode",
  },
};

export default function PseudocodePracticePage() {
  return (
    <TechnicalPractice
      title="Pseudocode"
      subtitle="Round 2 Technical Assessment Practice"
      category="Accenture Technical Assessment"
      questions={pseudocodeQuestions}
      backHref="/accenture"
    />
  );
}
