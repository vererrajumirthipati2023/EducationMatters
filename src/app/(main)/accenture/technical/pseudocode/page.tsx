import React from "react";
import { Metadata } from "next";
import { TechnicalPractice } from "@/components/technical/TechnicalPractice";
import { pseudocodeQuestions } from "@/data/technical/pseudocode";

export const metadata: Metadata = {
  title: "Pseudocode Practice | Accenture Round 2",
  description:
    "Practice pseudocode tracing, output prediction, loops, conditional logic, and algorithmic reasoning questions for Accenture technical assessment preparation.",
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
