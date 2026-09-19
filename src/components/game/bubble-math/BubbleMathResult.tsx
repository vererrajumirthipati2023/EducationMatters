"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  RotateCcw,
  Target,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GameResult } from "@/lib/games/core/types";
import { persistence } from "@/lib/games/core/persistence";
import { useRouter } from "next/navigation";

interface BubbleMathResultProps {
  result: GameResult;
  onRestart?: () => void;
}

export function BubbleMathResult({
  result,
  onRestart,
}: BubbleMathResultProps) {
  const router = useRouter();

  const { correct, incorrect, totalActions, averageResponseTimeMs } =
    result.rawMetrics;

  const accuracy = Math.round(result.accuracy * 100);
  const score = correct * 10;
  const averageTime = (averageResponseTimeMs / 1000).toFixed(1);

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden bg-[#f4f7fb] px-4 py-10 sm:px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(#0f2b5c_1px,transparent_1px),linear-gradient(90deg,#0f2b5c_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-3xl">
        <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
          {/* Top accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] via-blue-700 to-[#f59e0b]" />

          {/* =====================================================
              HEADER / SCORE
          ====================================================== */}
          <CardHeader className="relative overflow-hidden bg-[#0f2b5c] px-6 pb-10 pt-9 text-center sm:px-10 sm:pt-11">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative">
              {/* Completion icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg">
                <Trophy className="h-7 w-7 text-amber-400" />
              </div>

              <CardTitle className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Practice Complete
              </CardTitle>

              <p className="mt-2 text-sm text-slate-300">
                Here&apos;s how you performed in this Bubble Math practice.
              </p>

              {/* Score */}
              <div className="mx-auto mt-7 flex w-fit flex-col items-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Practice Score
                </span>

                <div className="mt-2 flex items-baseline">
                  <span className="text-6xl font-black leading-none text-white sm:text-7xl">
                    {score}
                  </span>

                  <span className="ml-2 text-lg font-semibold text-slate-400">
                    / 50
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5">
                  <Target className="h-4 w-4 text-amber-400" />

                  <span className="text-sm font-semibold text-slate-200">
                    {accuracy}% Accuracy
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>

          {/* =====================================================
              METRICS
          ====================================================== */}
          <CardContent className="px-5 py-7 sm:px-8 sm:py-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Accuracy */}
              <div className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Accuracy
                    </span>

                    <div className="mt-2 text-3xl font-extrabold text-[#0f2b5c]">
                      {accuracy}%
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <Target className="h-5 w-5 text-[#0f2b5c]" />
                  </div>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-[#0f2b5c] transition-all"
                    style={{
                      width: `${Math.min(Math.max(accuracy, 0), 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Correct */}
              <div className="group rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700/70">
                      Correct
                    </span>

                    <div className="mt-2 text-3xl font-extrabold text-emerald-700">
                      {correct}
                      <span className="ml-1 text-base font-semibold text-emerald-600/70">
                        / {totalActions}
                      </span>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>

                <p className="mt-3 text-xs font-medium text-emerald-700/70">
                  Correct responses
                </p>
              </div>

              {/* Incorrect */}
              <div className="group rounded-2xl border border-red-100 bg-red-50/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700/70">
                      Incorrect
                    </span>

                    <div className="mt-2 text-3xl font-extrabold text-red-600">
                      {incorrect}
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                </div>

                <p className="mt-3 text-xs font-medium text-red-700/70">
                  Responses to review
                </p>
              </div>

              {/* Response Time */}
              <div className="group rounded-2xl border border-amber-100 bg-amber-50/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700/70">
                      Avg Response Time
                    </span>

                    <div className="mt-2 text-3xl font-extrabold text-[#0f2b5c]">
                      {averageTime}
                      <span className="ml-1 text-base font-semibold text-slate-500">
                        sec
                      </span>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80">
                    <Clock3 className="h-5 w-5 text-amber-600" />
                  </div>
                </div>

                <p className="mt-3 text-xs font-medium text-amber-700/70">
                  Average time per response
                </p>
              </div>
            </div>

            {/* ===================================================
                FEEDBACK
            ==================================================== */}
            
          </CardContent>

          {/* =====================================================
              ACTIONS
          ====================================================== */}
          <CardFooter className="flex flex-col gap-3 border-t border-slate-200 bg-[#f8fafc] px-5 py-6 sm:flex-row sm:justify-center sm:px-8">
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-xl border-slate-300 bg-white px-6 font-bold text-[#0f2b5c] transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50/40 sm:w-auto"
              onClick={() => {
                if (result.variantId) {
                  persistence.clearLatestResult(result.variantId);
                }

                router.push("/practice/bubble-math");
              }}
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              Choose Another Practice
            </Button>

            {onRestart && (
              <Button
                size="lg"
                className="h-12 w-full rounded-xl bg-[#0f2b5c] px-6 font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#163b78] hover:shadow-lg sm:w-auto"
                onClick={onRestart}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Practice Again
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Footer label */}
        <p className="mt-5 text-center text-xs font-medium text-slate-400">
          Education Matters • Practice. Improve. Perform.
        </p>
      </div>
    </div>
  );
}