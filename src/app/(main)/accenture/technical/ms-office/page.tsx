import React from "react";
import { Metadata } from "next";
import { TechnicalPractice } from "@/components/technical/TechnicalPractice";
import { msOfficeQuestions } from "@/data/technical/ms-office";

export const metadata: Metadata = {
  title: "Common Application & MS Office Practice | Accenture Round 2",
  description:
    "Practice MS Office, Excel formulas, Word formatting, and common workplace applications questions for Accenture technical assessment preparation.",
};

export default function MsOfficePracticePage() {
  return (
    <TechnicalPractice
      title="Common Application & MS Office"
      subtitle="Round 2 Technical Assessment Practice"
      category="Accenture Technical Assessment"
      questions={msOfficeQuestions}
      backHref="/accenture"
    />
  );
}
