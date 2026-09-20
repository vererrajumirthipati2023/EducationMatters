"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  behavioralQuestions,
  behavioralOptions,
} from "@/data/behavioral/questions";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  UserRound,
  RotateCcw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface BehavioralPracticeProps {
  backHref?: string;
}

export function BehavioralPractice({
  backHref = "/accenture",
}: BehavioralPracticeProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = behavioralQuestions.length;
  const currentQuestion = behavioralQuestions[currentIndex];
  const selectedOptionValue = currentQuestion ? answers[currentQuestion.id] : undefined;

  // Calculate progress: Question 1 = 10%, Question 5 = 50%, Question 10 = 100%
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Handle auto-advancing option selection
  const handleSelectOption = (optionValue: number) => {
    if (!currentQuestion) return;

    // 1. Store the selected answer
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionValue,
    }));

    // 2. Immediately move to next question or complete
    if (currentIndex + 1 < totalQuestions) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 500);
    }
  };

  // Handle Previous Button
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Handle Try Again / Reset
  const handleTryAgain = () => {
    setCurrentIndex(0);
    setAnswers({});
    setIsCompleted(false);
  };

  // =========================================================================
  // INSTRUCTION SCREEN (INITIAL STATE)
  // =========================================================================
  if (!hasStarted) {
    return (
      <div className="flex-1 bg-[#f4f7fb] py-8 sm:py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Top Navigation & Breadcrumb */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-[#d97706]" />
              Back to Assessment
            </Link>

            <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold">
              <UserRound className="h-3.5 w-3.5 text-[#d97706]" />
              Accenture Round 1: Behavioural Assessment
            </span>
          </div>

          {/* Instruction Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#d97706]">
                INSTRUCTIONS
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Behavioural questions demonstrate how you typically behave at work.
                </p>
                <p>
                  It contains 54 statements describing workplace situations. It is not timed and should take around 10 minutes to complete.
                </p>
                <p>
                  Your response should reflect how you behave, how you would like to be, or how you would like to be seen by others.
                </p>
                <p>
                  Once you select a response, you will automatically move on to the next statement. If you want to, you can go back and review your answers.
                </p>
                <p className="font-medium text-slate-900">
                  As this is a practice test, we are providing 10 questions only.
                </p>
              </div>
            </div>

            {/* Bottom Action Row with Start Practice aligned Right */}
            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <Button
                type="button"
                onClick={() => setHasStarted(true)}
                className="h-10 sm:h-11 px-6 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold gap-2 rounded-xl shadow-xs cursor-pointer"
              >
                Start Practice
                <ArrowRight className="h-4 w-4 text-amber-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // COMPLETION SCREEN
  // =========================================================================
  if (isCompleted) {
    return (
      <div className="flex-1 bg-[#f4f7fb] py-10 sm:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-[#d97706]" />
              Back to Accenture Assessment
            </Link>
          </div>

          {/* Completion Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#0f2b5c] to-[#1e3a8a] text-white p-6 sm:p-8 text-center relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Practice Complete
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Behavioural Practice Complete
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                You have completed all {totalQuestions} behavioural assessment practice statements.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 text-center">
                <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-sm mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  All 10 Responses Recorded
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                  Behavioural assessments evaluate natural work styles, decision-making, leadership tendencies, and teamwork preferences using consistent rating scales. This is not an elimination round.
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
  // QUESTION SCREEN
  // =========================================================================
  return (
    <div className="flex-1 bg-[#f4f7fb] py-8 sm:py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Top Navigation & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-[#d97706]" />
            Back to Assessment
          </Link>

          <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold">
            <UserRound className="h-3.5 w-3.5 text-[#d97706]" />
            Accenture Round 1: Behavioural Assessment
          </span>
        </div>

        {/* Main Assessment Container Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          {/* Question Header & Statement */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#d97706]">
              Question {currentIndex + 1} of {totalQuestions}
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f2b5c] tracking-tight leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          {/* =================================================================
              EXACT 7-POINT RESPONSE CARDS (HORIZONTAL ROW ON DESKTOP)
              ================================================================= */}
          <div className="space-y-2">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Select your level of agreement:
            </div>

            {/* Scrollable Container on Mobile, 7-Column Grid on Desktop */}
            <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin">
              <div
                className="grid grid-cols-7 gap-2.5 sm:gap-3 min-w-[680px] sm:min-w-0"
                role="radiogroup"
                aria-label="7-point behavioural response scale"
              >
                {behavioralOptions.map((option) => {
                  const isSelected = selectedOptionValue === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelectOption(option.value)}
                      role="radio"
                      aria-checked={isSelected}
                      className={`group flex flex-col items-center rounded-xl border text-center transition-all duration-200 overflow-hidden cursor-pointer min-h-[145px] sm:min-h-[160px] ${
                        isSelected
                          ? "border-[#0f2b5c] bg-blue-50/80 shadow-md ring-2 ring-[#0f2b5c]/30"
                          : "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50/60 shadow-2xs"
                      }`}
                    >
                      {/* Top Number Badge Header */}
                      <div
                        className={`w-full py-1.5 font-bold text-xs sm:text-sm transition-colors border-b select-none flex items-center justify-center ${
                          isSelected
                            ? "bg-[#0f2b5c] text-white border-[#0f2b5c]"
                            : "bg-[#0f2b5c]/90 text-slate-100 group-hover:bg-[#0f2b5c] border-slate-700"
                        }`}
                      >
                        {option.value}
                      </div>

                      {/* Bottom Text Area */}
                      <div className="w-full flex-1 p-2.5 sm:p-3 flex items-center justify-center">
                        <span
                          className={`text-xs sm:text-sm font-semibold leading-tight transition-colors ${
                            isSelected
                              ? "text-[#0f2b5c] font-bold"
                              : "text-slate-700 group-hover:text-slate-900"
                          }`}
                        >
                          {option.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================================
              NAVIGATION & PREVIOUS BUTTON
              ================================================================= */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="h-10 px-4 border-slate-300 font-semibold text-[#0f2b5c] hover:bg-slate-50 gap-2 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            <span className="text-xs text-slate-500 font-medium">
              Click any option to proceed automatically
            </span>
          </div>

          {/* =================================================================
              PROGRESS INDICATOR
              ================================================================= */}
          <div className="pt-2 space-y-1.5">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-gradient-to-r from-[#0f2b5c] via-blue-600 to-[#d97706] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
