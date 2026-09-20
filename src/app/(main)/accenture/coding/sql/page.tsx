import React from "react";
import { Metadata } from "next";
import { SqlPractice } from "@/components/sql/SqlPractice";
import { sqlPracticeQuestions } from "@/data/sql/questions";

export const metadata: Metadata = {
  title: "SQL Practice | Accenture Round 3 Coding Assessment",
  description:
    "Practice SQL query formulation, subqueries, relational joins, and database schema analysis for Accenture coding assessment preparation.",
};

export default function SqlPracticePage() {
  return <SqlPractice questions={sqlPracticeQuestions} backHref="/accenture" />;
}
