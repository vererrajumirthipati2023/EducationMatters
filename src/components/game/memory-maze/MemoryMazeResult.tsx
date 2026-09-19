"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGameSessionStore } from "@/lib/store/game-session";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Trophy,
  Clock,
  Zap,
  Target,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

export function MemoryMazeResult() {
  const { currentSession } = useGameSessionStore();

  if (
    !currentSession ||
    !["COMPLETED", "TIMEOUT"].includes(currentSession.status)
  ) {
    return null;
  }

  // N2 scoring logic extraction (simplified)
  let correct = 0;
  let timeouts = 0;
  let totalTime = 0;

  currentSession.actions.forEach((a) => {
    if (
      a.payload &&
      (a.payload as { isTimeout?: boolean }).isTimeout
    ) {
      timeouts++;
    } else if (a.valid) {
      correct++;
    }

    totalTime += a.responseTimeMs;
  });

  const total = currentSession.totalItems;
  const incorrect = total - correct - timeouts;
  const accuracy =
    total > 0 ? Math.round((correct / total) * 100) : 0;
  const avgTime =
    total > 0 ? (totalTime / total / 1000).toFixed(1) : "0.0";

  // Basic practice score
  const score = Math.round(accuracy * 10 + correct * 50);

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden bg-[#f4f7fb] px-4 py-10 sm:px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#0f2b5c_1px,transparent_1px),linear-gradient(90deg,#0f2b5c_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <Card className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        {/* Top accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] via-blue-700 to-[#f59e0b]" />

        {/* Header */}
        <CardHeader className="bg-[#0f2b5c] px-6 pb-10 pt-10 text-center text-white sm:px-10">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <Trophy className="h-10 w-10 text-[#fbbf24]" />
          </div>

          <CardTitle className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Practice Complete
          </CardTitle>

          <p className="mt-2 text-sm text-blue-100">
            Memory Maze
          </p>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-blue-100/80">
            Review your navigation accuracy, response time and overall
            practice performance.
          </p>

          {/* Score */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-7xl font-black tracking-tight text-white">
              {score}
            </span>

            <span className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              Practice Score
            </span>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <Target className="h-4 w-4 text-[#fbbf24]" />
              {accuracy}% Accuracy
            </div>
          </div>
        </CardHeader>

        {/* Metrics */}
        <CardContent className="space-y-6 px-6 py-8 sm:px-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Accuracy */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Accuracy
                  </span>

                  <div className="mt-2 text-3xl font-extrabold text-[#0f2b5c]">
                    {accuracy}%
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                  <Target className="h-5 w-5 text-blue-700" />
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
                <div
                  className="h-full rounded-full bg-blue-700 transition-all"
                  style={{ width: `${accuracy}%` }}
                />
              </div>
            </div>

            {/* Correct */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Correct
                  </span>

                  <div className="mt-2 text-3xl font-extrabold text-emerald-700">
                    {correct}
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </div>
              </div>

              <p className="mt-3 text-xs text-emerald-700/70">
                Correct maze responses
              </p>
            </div>

            {/* Incorrect */}
            <div className="rounded-2xl border border-red-100 bg-red-50/70 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Incorrect
                  </span>

                  <div className="mt-2 text-3xl font-extrabold text-red-700">
                    {incorrect}
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
              </div>

              <p className="mt-3 text-xs text-red-700/70">
                Incorrect maze responses
              </p>
            </div>

            {/* Average Time */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Avg Response Time
                  </span>

                  <div className="mt-2 text-3xl font-extrabold text-amber-800">
                    {avgTime}s
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                  <Clock className="h-5 w-5 text-amber-700" />
                </div>
              </div>

              <p className="mt-3 text-xs text-amber-700/70">
                Average time per item
              </p>
            </div>
          </div>

          {/* Timeout message */}
          {timeouts > 0 && (
            <div className="flex justify-center pt-1">
              <Badge
                variant="outline"
                className="rounded-full border-amber-300 bg-amber-50 px-4 py-2 text-amber-700"
              >
                <Clock className="mr-2 h-3.5 w-3.5" />
                {timeouts}{" "}
                {timeouts === 1 ? "Timeout" : "Timeouts"}
              </Badge>
            </div>
          )}

          {/* Performance feedback */}
          
        </CardContent>

        {/* Actions */}
        <CardFooter className="flex flex-col gap-4 border-t border-slate-100 bg-slate-50/70 px-6 py-7 sm:flex-row sm:justify-center sm:px-10">
          <Link
            href="/practice"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-xl border-slate-300 bg-white px-7 font-bold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0f2b5c] hover:bg-blue-50 hover:text-[#0f2b5c] sm:w-auto"
            >
              Back to Practice
            </Button>
          </Link>

          <Link
            href="/practice/memory-maze"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="h-12 w-full rounded-xl bg-[#0f2b5c] px-7 font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#163b78] hover:shadow-lg sm:w-auto"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Play Again
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>

        {/* Footer branding */}
        <div className="border-t border-slate-100 bg-white px-6 py-4 text-center">
          <p className="text-xs font-medium text-slate-400">
            Education Matters{" "}
            <span className="mx-1">•</span>{" "}
            Practice. Improve. Perform.
          </p>
        </div>
      </Card>
    </div>
  );
}