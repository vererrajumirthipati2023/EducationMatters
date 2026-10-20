import React from "react";
import { Metadata } from "next";
import { BehavioralPractice } from "@/components/behavioral/BehavioralPractice";

export const metadata: Metadata = {
  title: "Behavioural Assessment Practice | Accenture Round 1 | Education Matters",
  description:
    "Practice official-style behavioural assessment questions with a 7-point rating scale for Accenture Round 1 preparation.",
  alternates: {
    canonical: "/accenture/behavioral",
  },
  openGraph: {
    title: "Behavioural Assessment Practice | Accenture Round 1 | Education Matters",
    description:
      "Practice official-style behavioural assessment questions with a 7-point rating scale for Accenture Round 1 preparation.",
    url: "/accenture/behavioral",
  },
};

export default function BehavioralPracticePage() {
  return <BehavioralPractice backHref="/accenture" />;
}
