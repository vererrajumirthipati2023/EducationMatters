import React from "react";
import { Metadata } from "next";
import { TechnicalPractice } from "@/components/technical/TechnicalPractice";
import { computerScienceQuestions } from "@/data/technical/computer-science";

export const metadata: Metadata = {
  title: "Computer Science Practice | Accenture Round 2",
  description:
    "Practice data structures, algorithms, OOP, DBMS, SQL, and operating systems questions for Accenture technical assessment preparation.",
};

export default function ComputerSciencePracticePage() {
  return (
    <TechnicalPractice
      title="Computer Science"
      subtitle="Round 2 Technical Assessment Practice"
      category="Accenture Technical Assessment"
      questions={computerScienceQuestions}
      backHref="/accenture"
    />
  );
}
