import React from "react";
import { Metadata } from "next";
import { TechnicalPractice } from "@/components/technical/TechnicalPractice";
import { networkingQuestions } from "@/data/technical/networking";

export const metadata: Metadata = {
  title: "Fundamentals of Networking Practice | Accenture Round 2",
  description:
    "Practice OSI model, TCP/IP, protocols, ports, IP addressing, and networking fundamentals questions for Accenture technical assessment preparation.",
};

export default function NetworkingPracticePage() {
  return (
    <TechnicalPractice
      title="Fundamentals of Networking"
      subtitle="Round 2 Technical Assessment Practice"
      category="Accenture Technical Assessment"
      questions={networkingQuestions}
      backHref="/accenture"
    />
  );
}
