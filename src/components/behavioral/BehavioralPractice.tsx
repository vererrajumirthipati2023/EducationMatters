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
  HelpCircle,
  ShieldAlert,
  Lightbulb,
  Scale,
  Info,
  Clock,
  ListChecks,
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

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (optionValue: number) => {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionValue,
    }));

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

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

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
        <div className="mx-auto max-w-5xl space-y-8">
          
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

          {/* UPGRADED INSTRUCTION CARD */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            {/* Header Banner */}
            <div className="bg-[#0f2b5c] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Info className="h-6 w-6 text-amber-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Assessment Instructions
                </h2>
              </div>
              <p className="text-blue-200 text-sm">
                Please read the instructions carefully before starting the practice test.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Quick Stats Bar */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#d97706]" />
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Time Limit</div>
                    <div className="text-sm font-bold text-slate-800">Untimed</div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center gap-3">
                  <ListChecks className="h-5 w-5 text-[#d97706]" />
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Total Questions</div>
                    <div className="text-sm font-bold text-slate-800">10 Practice Qs</div>
                  </div>
                </div>
              </div>

              {/* Instruction Text */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  Behavioural questions demonstrate how you typically behave at work.
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  Your response should reflect how you behave, how you would like to be, or how you would like to be seen by others.
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  Once you select a response, you will automatically move on to the next statement. You can go back and review your answers.
                </p>
              </div>

              {/* Important Note Callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 text-sm">Practice Test Mode</h4>
                  <p className="text-amber-800 text-sm mt-1">
                    The actual Accenture assessment contains 54 statements. As this is a practice simulation, we are providing <strong>10 questions only</strong> to help you understand the format.
                  </p>
                </div>
              </div>

              {/* Start Button */}
              <div className="pt-4 border-t border-slate-100 flex justify-center sm:justify-end">
                <Button
                  type="button"
                  onClick={() => setHasStarted(true)}
                  className="w-full sm:w-auto h-12 px-8 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-bold text-base gap-2 rounded-xl shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Start Assessment
                  <ArrowRight className="h-5 w-5 text-amber-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* =================================================================
              EDITORIAL SEO GUIDE (Beautiful UI)
              ================================================================= */}
          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 p-8 sm:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
                <Sparkles className="h-3.5 w-3.5" /> Prep Guide
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c]">
                The Ultimate Guide to the Accenture Behavioural Assessment
              </h2>
              <p className="text-slate-600 mt-3 max-w-3xl text-sm sm:text-base leading-relaxed">
                While many candidates spend weeks preparing for technical coding rounds, they often overlook this initial stage. Understanding what this round evaluates and how to approach it is crucial for moving to the next stage.
              </p>
            </div>

            <div className="p-8 sm:p-10 space-y-10">
              
              {/* Grid Section: What & Why */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-[#0f2b5c]">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f2b5c]">What is it?</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Unlike technical exams, there are no strictly "right" or "wrong" answers here. The assessment presents you with 54 statements describing various workplace situations. You rate your agreement on a 7-point scale. The goal is to create a personality profile that Accenture uses to see if your natural work style aligns with their culture.
                  </p>
                </div>

                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f2b5c]">Is it an elimination round?</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    In most Accenture drives, there is no minimum score you need to "pass" this specific section. It is used as a supplementary data point during the final HR interview. If your cognitive and technical scores are high, a slightly different behavioural profile will rarely disqualify you.
                  </p>
                </div>
              </div>

              {/* 7-Point Scale Breakdown */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg text-[#d97706]">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f2b5c]">The 7-Point Rating Scale Explained</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  When answering, you will see options ranging from Strongly Disagree to Strongly Agree. Here is how you should approach them:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                    <span className="block text-2xl font-black text-red-500 mb-1">1 - 3</span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Disagree</span>
                    <p className="text-xs text-slate-500 mt-2">Use this if the statement does not sound like you at all.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                    <span className="block text-2xl font-black text-slate-400 mb-1">4</span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Neutral</span>
                    <p className="text-xs text-slate-500 mt-2">Use this sparingly. Being too neutral can make you look indecisive.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                    <span className="block text-2xl font-black text-emerald-500 mb-1">5 - 7</span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Agree</span>
                    <p className="text-xs text-slate-500 mt-2">Use this for traits that strongly describe you (e.g., "I am a confident leader").</p>
                  </div>
                </div>
              </div>

              {/* Top 3 Tips */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f2b5c]">Top 3 Tips for Cracking the Assessment</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Be Consistent</h4>
                      <p className="text-sm text-slate-600 mt-1">The system has a built-in consistency check. If you strongly agree with "I am a confident leader" early on, but later strongly disagree with "I like it when others follow my direction," it may flag your profile.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Be Honest (But Professional)</h4>
                      <p className="text-sm text-slate-600 mt-1">Do not try to guess what the company wants to hear. Answer as your professional self. If you exaggerate, you might land a role that doesn't fit your natural working style.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Use the STAR Method</h4>
                      <p className="text-sm text-slate-600 mt-1">When thinking about statements like "I am better at conceptual tasks," recall real-life examples from your academic projects or internships using the STAR method (Situation, Task, Action, Result).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-8">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-900 m-0">
                    <strong>Disclaimer:</strong> Education Matters is an independent educational platform. We are not affiliated with, endorsed by, or sponsored by Accenture. All company names and trademarks are the property of their respective owners. Our practice tests are simulations designed for educational purposes only.
                  </p>
                </div>
              </div>

            </div>
          </section>
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

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#d97706]">
              Question {currentIndex + 1} of {totalQuestions}
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f2b5c] tracking-tight leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Select your level of agreement:
            </div>

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
                      <div
                        className={`w-full py-1.5 font-bold text-xs sm:text-sm transition-colors border-b select-none flex items-center justify-center ${
                          isSelected
                            ? "bg-[#0f2b5c] text-white border-[#0f2b5c]"
                            : "bg-[#0f2b5c]/90 text-slate-100 group-hover:bg-[#0f2b5c] border-slate-700"
                        }`}
                      >
                        {option.value}
                      </div>

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