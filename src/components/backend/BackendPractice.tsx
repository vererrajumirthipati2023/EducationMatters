"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BackendQuestion } from "@/data/backend/questions";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Check,
  Copy,
  HelpCircle,
  Sparkles,
  RotateCcw,
  FileCode2,
  Terminal,
  Info,
} from "lucide-react";

interface BackendPracticeProps {
  questions: BackendQuestion[];
  backHref?: string;
}

export function BackendPractice({
  questions,
  backHref = "/accenture",
}: BackendPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  const handleCopyCode = () => {
    if (!currentQuestion?.starterCode?.csharp) return;
    navigator.clipboard.writeText(currentQuestion.starterCode.csharp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setCopied(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setCopied(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleTryAgain = () => {
    setCurrentIndex(0);
    setCopied(false);
    setIsComplete(false);
  };

  // Fallback if no questions
  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 text-center">
        <div className="max-w-md p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <Code2 className="w-12 h-12 mx-auto text-amber-500 mb-4" />
          <h2 className="text-xl font-bold text-[#0f2b5c] mb-2">
            No Backend Questions Available
          </h2>
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
                Backend Coding Practice Complete
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                You have completed all {totalQuestions} backend coding problem(s).
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 text-center">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Mastering data structure transformations, indexing edge cases, and algorithmic complexity is essential for clearing technical recruitment coding assessments.
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
  // BACKEND QUESTION SCREEN
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
            Accenture Round 3: Backend Coding
          </span>
        </div>

        {/* Section Title & Question Counter */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#0f2b5c] tracking-tight">
                Backend Coding Practice
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Problem solving, array manipulation & algorithm implementation
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs font-extrabold text-[#0f2b5c] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-lg">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
            </div>
          </div>
        </div>

        {/* Main Question Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Question Title & Problem Statement */}
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
              {currentQuestion.problemStatement}
            </div>

            {currentQuestion.note && (
              <div className="mt-3 flex items-start gap-2 text-xs font-medium text-amber-800 bg-amber-50/80 border border-amber-200 rounded-lg p-3">
                <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> {currentQuestion.note}
                </span>
              </div>
            )}
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Specification */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-[#d97706]" />
                Input Specification
              </div>
              <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800">input1:</strong>{" "}
                  {currentQuestion.inputSpecification.input1}
                </p>
                <p>
                  <strong className="text-slate-800">input2:</strong>{" "}
                  {currentQuestion.inputSpecification.input2}
                </p>
              </div>
            </div>

            {/* Output Specification */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <FileCode2 className="h-3.5 w-3.5 text-[#d97706]" />
                Output Specification
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentQuestion.outputSpecification}
              </p>
            </div>
          </div>

          {/* Examples Section */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-[#d97706]" />
              Examples & Explanations
            </div>

            <div className="space-y-4">
              {currentQuestion.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs"
                >
                  <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 border-b border-slate-200 flex items-center justify-between">
                    <span>Example {idx + 1}</span>
                  </div>

                  <div className="p-4 space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="font-semibold text-slate-500 text-[11px] uppercase tracking-wider mb-1">
                          Input
                        </div>
                        <div className="font-mono text-slate-800">
                          <div>Input 1: {ex.input1}</div>
                          <div>
                            Input 2:{" "}
                            {Array.isArray(ex.input2)
                              ? `(${ex.input2.join(", ")})`
                              : ex.input2}
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="font-semibold text-slate-500 text-[11px] uppercase tracking-wider mb-1">
                          Output
                        </div>
                        <div className="font-mono text-emerald-700 font-bold">
                          {Array.isArray(ex.output)
                            ? `(${ex.output.join(", ")})`
                            : ex.output}
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100 text-slate-700 leading-relaxed whitespace-pre-line">
                      <strong className="text-[#0f2b5c]">Explanation: </strong>
                      {ex.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
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
