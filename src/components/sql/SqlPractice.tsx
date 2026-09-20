"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SqlPracticeQuestion } from "@/data/sql/types";
import { SqlSchemaDiagram } from "./SqlSchemaDiagram";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Code2,
  Check,
  Copy,
  HelpCircle,
  Sparkles,
  RotateCcw,
  Database,
  Table as TableIcon,
} from "lucide-react";

interface SqlPracticeProps {
  questions: SqlPracticeQuestion[];
  backHref?: string;
}

export function SqlPractice({
  questions,
  backHref = "/accenture",
}: SqlPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const handleCopyQuery = () => {
    if (!currentQuestion) return;
    navigator.clipboard.writeText(currentQuestion.answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowAnswer(false);
      setCopied(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
      setCopied(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleTryAgain = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setCopied(false);
    setIsComplete(false);
  };

  // Fallback if no questions
  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 text-center">
        <div className="max-w-md p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <Database className="w-12 h-12 mx-auto text-amber-500 mb-4" />
          <h2 className="text-xl font-bold text-[#0f2b5c] mb-2">No SQL Questions Available</h2>
          <p className="text-sm text-slate-600 mb-6">
            There are currently no practice questions configured for this section.
          </p>
          <Button asChild className="bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white">
            <Link href={backHref}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Assessment
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // PRACTICE COMPLETE SCREEN
  // =========================================================================
  if (isComplete) {
    return (
      <div className="flex-1 bg-[#f4f7fb] py-10 sm:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-[#d97706]" />
              Back to Accenture Assessment
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#0f2b5c] to-[#1e3a8a] text-white p-6 sm:p-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Practice Complete
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                SQL Practice Complete
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                You have reviewed both SQL practice questions and relational database schemas.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 text-center">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Understanding schema entity-relationships and multi-level nested queries is essential for clearing technical recruitment SQL assessments.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={handleTryAgain}
                  variant="outline"
                  className="h-11 border-slate-300 font-semibold text-[#0f2b5c] hover:bg-slate-50 gap-2 rounded-xl"
                >
                  <RotateCcw className="h-4 w-4 text-[#d97706]" />
                  Practice Again
                </Button>

                <Button
                  asChild
                  className="h-11 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold gap-2 rounded-xl shadow-xs"
                >
                  <Link href={backHref}>
                    Back to Accenture Assessment
                    <ArrowRight className="h-4 w-4 text-amber-300" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SQL QUESTION SCREEN
  // =========================================================================
  return (
    <div className="flex-1 bg-[#f4f7fb] py-8 sm:py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Navigation / Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-[#d97706]" />
            Back to Assessment
          </Link>

          <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-[#0f2b5c]" />
            Accenture Coding: SQL Practice
          </span>
        </div>

        {/* Section Title & Question Counter */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#0f2b5c] tracking-tight">
                SQL Practice
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Relational schema analysis & query formulation
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs font-extrabold text-[#0f2b5c] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-lg">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
            </div>
          </div>
        </div>

        {/* Question Specification Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Question Text */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-[#0f2b5c] font-bold text-xs">
                Q{currentIndex + 1}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#0f2b5c]">
                {currentQuestion.title}
              </h2>
            </div>

            <div className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200">
              {currentQuestion.prompt}
            </div>
          </div>

          {/* Expected Output Format Table */}
          {currentQuestion.expectedColumns && currentQuestion.expectedColumns.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                <TableIcon className="h-3.5 w-3.5 text-[#d97706]" />
                Expected Output Columns
              </div>

              <div className="overflow-x-auto">
                <div className="inline-flex border border-slate-300 rounded-lg overflow-hidden shadow-2xs">
                  {currentQuestion.expectedColumns.map((col, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-slate-100 border-r last:border-r-0 border-slate-300 text-xs font-mono font-bold text-[#0f2b5c]"
                    >
                      {col}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Database Schema Diagram Canvas */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-[#d97706]" />
              Database Schema Diagram
            </div>

            <SqlSchemaDiagram schema={currentQuestion.schema} />
          </div>

          {/* Show / Hide Answer Button */}
          <div className="pt-2">
            <Button
              type="button"
              onClick={handleToggleAnswer}
              className={`h-11 px-5 font-bold rounded-xl gap-2 transition-all ${
                showAnswer
                  ? "bg-slate-800 hover:bg-slate-900 text-white"
                  : "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xs"
              }`}
            >
              <Lightbulb className="h-4 w-4" />
              {showAnswer ? "Hide Answer" : "💡 Show Answer"}
            </Button>
          </div>

          {/* Expanded Answer Section */}
          {showAnswer && (
            <div className="pt-2 space-y-5 animate-in fade-in-50 duration-300">
              {/* Correct SQL Query */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 text-white overflow-hidden shadow-md">
                <div className="px-4 py-2.5 bg-slate-900 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Correct SQL Query
                    </span>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyQuery}
                    className="h-7 px-2.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800 gap-1.5 rounded-md"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>

                <div className="p-4 sm:p-5 overflow-x-auto bg-[#070e1b]">
                  <pre className="text-xs sm:text-sm font-mono text-emerald-300 leading-relaxed">
                    <code>{currentQuestion.answer}</code>
                  </pre>
                </div>
              </div>

              {/* Explanation Card */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f2b5c] mb-2">
                  <HelpCircle className="h-4 w-4 text-[#d97706]" />
                  Explanation
                </div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {currentQuestion.explanation}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-6 flex items-center justify-between border-t border-slate-200">
            <Button
              type="button"
              variant="outline"
              onClick={handlePreviousQuestion}
              disabled={currentIndex === 0}
              className="h-11 px-5 border-slate-300 font-semibold text-[#0f2b5c] hover:bg-slate-50 gap-2 rounded-xl disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button
              type="button"
              onClick={handleNextQuestion}
              className="h-11 px-6 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-bold rounded-xl shadow-xs gap-2"
            >
              {currentIndex + 1 < totalQuestions ? (
                <>
                  Next Question
                  <ArrowRight className="h-4 w-4 text-amber-300" />
                </>
              ) : (
                <>
                  Finish Practice
                  <ArrowRight className="h-4 w-4 text-amber-300" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
