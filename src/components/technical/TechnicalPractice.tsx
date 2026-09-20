"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TechnicalQuestion } from "@/data/technical/types";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  X,
  HelpCircle,
  Award,
  Sparkles,
} from "lucide-react";

interface TechnicalPracticeProps {
  title: string;
  subtitle?: string;
  category?: string;
  questions: TechnicalQuestion[];
  backHref?: string;
}

export function TechnicalPractice({
  title,
  subtitle = "Round 2 Technical Practice",
  category = "Accenture Technical Assessment",
  questions,
  backHref = "/accenture",
}: TechnicalPracticeProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const progressPercent = Math.round(
    ((currentQuestionIndex + (hasSubmitted ? 1 : 0)) / totalQuestions) * 100
  );

  // If question data is empty
  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 text-center">
        <div className="max-w-md p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <HelpCircle className="w-12 h-12 mx-auto text-amber-500 mb-4" />
          <h2 className="text-xl font-bold text-[#0f2b5c] mb-2">No Questions Available</h2>
          <p className="text-sm text-slate-600 mb-6">
            There are currently no practice questions configured for this section.
          </p>
          <Button asChild className="bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white">
            <Link href={backHref}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Technical
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Handle Option Selection
  const handleSelectOption = (index: number) => {
    if (hasSubmitted) return;
    setSelectedAnswer(index);
  };

  // Handle Answer Submission
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || hasSubmitted) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
    setHasSubmitted(true);
  };

  // Handle Next Question / Finish
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    } else {
      setIsComplete(true);
    }
  };

  // Reset / Try Again
  const handleTryAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setScore(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setIsComplete(false);
  };

  const optionLetters = ["A", "B", "C", "D"];

  // =========================================================================
  // RESULT SCREEN
  // =========================================================================
  if (isComplete) {
    const accuracy =
      totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    return (
      <div className="flex-1 bg-[#f4f7fb] py-10 sm:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Top Back Link */}
          <div className="mb-6">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-[#d97706]" />
              Back to Technical Assessment
            </Link>
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#0f2b5c] to-[#1e3a8a] text-white p-6 sm:p-8 text-center relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Practice Complete
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {title}
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {subtitle}
              </p>
            </div>

            {/* Score Summary */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Score */}
                <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-center flex flex-col items-center justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Score
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5c]">
                    {score} <span className="text-lg text-slate-400 font-semibold">/ {totalQuestions}</span>
                  </div>
                </div>

                {/* Accuracy */}
                <div className="rounded-xl border border-amber-100 bg-amber-50/60 p-5 text-center flex flex-col items-center justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Accuracy
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#d97706]">
                    {accuracy}%
                  </div>
                </div>
              </div>

             {/* Detailed Counts */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
  {/* Correct */}
  <div className="flex items-center gap-3.5 p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 min-w-0">
    <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
      <CheckCircle2 className="h-5 w-5" />
    </div>

    <div className="min-w-0">
      <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
        Correct
      </div>

      <div className="text-xl font-extrabold text-emerald-900">
        {correctCount}
      </div>
    </div>
  </div>

  {/* Incorrect */}
  <div className="flex items-center gap-3.5 p-4 rounded-xl border border-rose-200 bg-rose-50/50 min-w-0">
    <div className="h-10 w-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
      <XCircle className="h-5 w-5" />
    </div>

    <div className="min-w-0">
      <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
        Incorrect
      </div>

      <div className="text-xl font-extrabold text-rose-900">
        {incorrectCount}
      </div>
    </div>
  </div>
</div>

              {/* Feedback Note */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 mb-8 text-center">
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  {accuracy >= 80
                    ? "🎉 Outstanding performance! You have a solid grasp of this technical section."
                    : accuracy >= 50
                    ? "👍 Good effort! Review the question explanations to strengthen your concepts."
                    : "📚 Keep practicing! Review fundamental concepts and try the practice again."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={handleTryAgain}
                  variant="outline"
                  className="h-11 border-slate-300 font-semibold text-[#0f2b5c] hover:bg-slate-50 gap-2 rounded-xl"
                >
                  <RotateCcw className="h-4 w-4 text-[#d97706]" />
                  Try Again
                </Button>

                <Button
                  asChild
                  className="h-11 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold gap-2 rounded-xl shadow-xs"
                >
                  <Link href={backHref}>
                    Back to Technical Assessment
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
  // QUESTION PRACTICE SCREEN
  // =========================================================================
  const isSelectedCorrect =
    hasSubmitted && selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="flex-1 bg-[#f4f7fb] py-8 sm:py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Navigation Bar / Top Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-[#d97706]" />
            Back to Technical
          </Link>

          <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-[#0f2b5c]" />
            {category}
          </span>
        </div>

        {/* Header / Section Title & Progress */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#0f2b5c] tracking-tight">
                {title}
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-xs font-extrabold text-[#0f2b5c] bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between items-center text-[11px] font-semibold text-slate-500">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-gradient-to-r from-[#0f2b5c] via-blue-600 to-[#d97706] transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentQuestionIndex + (hasSubmitted ? 1 : 0)) / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* ===================================================================
            QUESTION CARD
            =================================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-6">
          {/* Question Text */}
          <div className="mb-6">
            <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
              {currentQuestion.question}
            </div>

             {currentQuestion.code && (
    <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950 overflow-hidden">
      <pre className="m-0 overflow-x-auto p-4 sm:p-5 text-left text-xs sm:text-sm leading-6 text-slate-100 font-mono whitespace-pre">
        <code>{currentQuestion.code}</code>
      </pre>
    </div>
  )}

  {currentQuestion.image && (
  <div className="mt-5 flex justify-center">
    <img
      src={currentQuestion.image}
      alt="Loading Image........."
      className="max-w-full rounded-lg border border-slate-200"
    />
  </div>
)}

</div>

          {/* Answer Choices */}
          <div className="space-y-3 mb-6" role="radiogroup" aria-label="Answer Options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = currentQuestion.correctAnswer === index;

              let optionClasses =
                "relative flex items-start gap-3.5 p-4 rounded-xl border text-left transition-all duration-200 w-full ";

              if (!hasSubmitted) {
                if (isSelected) {
                  optionClasses +=
                    "border-[#0f2b5c] bg-blue-50/80 text-[#0f2b5c] shadow-xs font-medium";
                } else {
                  optionClasses +=
                    "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50/60 cursor-pointer";
                }
              } else {
                // Post-submission styling
                if (isCorrectAnswer) {
                  optionClasses +=
                    "border-emerald-500 bg-emerald-50/90 text-emerald-950 font-medium shadow-xs";
                } else if (isSelected && !isCorrectAnswer) {
                  optionClasses +=
                    "border-rose-400 bg-rose-50/90 text-rose-950 font-medium shadow-xs";
                } else {
                  optionClasses += "border-slate-200 bg-slate-50/50 text-slate-400 opacity-70";
                }
              }

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectOption(index)}
                  disabled={hasSubmitted}
                  aria-checked={isSelected}
                  role="radio"
                  className={optionClasses}
                >
                  {/* Indicator Letter Badge */}
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      !hasSubmitted
                        ? isSelected
                          ? "bg-[#0f2b5c] text-white"
                          : "bg-slate-100 text-slate-600 border border-slate-300"
                        : isCorrectAnswer
                        ? "bg-emerald-600 text-white"
                        : isSelected
                        ? "bg-rose-600 text-white"
                        : "bg-slate-100 text-slate-400 border border-slate-200"
                    }`}
                  >
                    {hasSubmitted && isCorrectAnswer ? (
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    ) : hasSubmitted && isSelected ? (
                      <X className="h-3.5 w-3.5 stroke-[3]" />
                    ) : (
                      optionLetters[index]
                    )}
                  </span>

                  {/* Option Text */}
                  <span className="flex-1 text-xs sm:text-sm leading-relaxed pt-0.5 whitespace-pre-wrap text-left font-sans m-0">
                    {option}
                  </span>

                  {/* Badges for Submitted State */}
                  {hasSubmitted && isCorrectAnswer && (
                    <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md self-center">
                      <Check className="h-3 w-3" /> Correct Answer
                    </span>
                  )}
                  {hasSubmitted && isSelected && !isCorrectAnswer && (
                    <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md self-center">
                      <X className="h-3 w-3" /> Your Answer
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Submit Button (Before Submission) */}
          {!hasSubmitted && (
            <div className="pt-2 flex justify-end">
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="h-11 px-6 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-bold rounded-xl shadow-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </Button>
            </div>
          )}

          {/* =================================================================
              FEEDBACK & EXPLANATION (AFTER SUBMISSION)
              ================================================================= */}
          {hasSubmitted && (
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
              {/* Correct / Incorrect Status Banner */}
              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  isSelectedCorrect
                    ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                    : "bg-rose-50 border-rose-200 text-rose-900"
                }`}
              >
                {isSelectedCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                )}

                <div className="text-sm font-bold">
                  {isSelectedCorrect ? (
                    <span>✓ Correct!</span>
                  ) : (
                    <span>
                      ✕ Incorrect. The correct answer is Option{" "}
                      {optionLetters[currentQuestion.correctAnswer]}.
                    </span>
                  )}
                </div>
              </div>

              {/* Explanation Card */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f2b5c] mb-2">
                  <HelpCircle className="h-4 w-4 text-[#d97706]" />
                  Explanation
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>

              {/* Next Question / View Results Button */}
              <div className="pt-3 flex justify-end">
                <Button
                  onClick={handleNextQuestion}
                  className="h-11 px-6 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-bold rounded-xl shadow-xs gap-2"
                >
                  {currentQuestionIndex + 1 < totalQuestions ? (
                    <>
                      Next Question
                      <ArrowRight className="h-4 w-4 text-amber-300" />
                    </>
                  ) : (
                    <>
                      View Results
                      <Award className="h-4 w-4 text-amber-300" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
