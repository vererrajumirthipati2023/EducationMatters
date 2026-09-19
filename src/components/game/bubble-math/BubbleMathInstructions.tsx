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
import { Target, Clock } from "lucide-react";
import { MathBubble } from "./MathBubble";

interface BubbleMathInstructionsProps {
  onStart: () => void;
}

export function BubbleMathInstructions({
  onStart,
}: BubbleMathInstructionsProps) {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden bg-[#f4f7fb] px-3 py-8 sm:px-4 sm:py-10">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(#0f2b5c_1px,transparent_1px),linear-gradient(90deg,#0f2b5c_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* Blue atmospheric glow */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        {/* Amber atmospheric glow */}
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <Card className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-900/5">

        {/* Brand accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] via-blue-700 to-[#f59e0b]" />

        {/* Header */}
        <CardHeader className="bg-white px-6 py-7 text-center sm:px-8 sm:py-8">
          <CardTitle className="text-2xl font-extrabold tracking-tight text-[#0f2b5c] sm:text-3xl">
            Bubble Math Instructions
          </CardTitle>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Numerical Reasoning &amp; Calculation Assessment
          </p>
        </CardHeader>

        {/* Instructions */}
        <CardContent className="space-y-6 px-5 pb-6 sm:px-8 sm:pb-8">

          {/* Main Objective */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-lg bg-white p-2 text-[#0f2b5c] shadow-sm">
                <Target className="h-5 w-5" />
              </div>

              <div>
                <h3 className="mb-1 text-sm font-bold text-[#0f2b5c]">
                  Objective
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  <strong className="text-slate-800">Goal:</strong> Calculate
                  the expressions shown in the bubbles and select them in
                  ascending order, from the lowest value to the highest value.
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f2b5c]">
                How to Play
              </h3>
            </div>

            <div className="grid gap-3.5 text-sm sm:text-[15px]">

              {/* Instruction 1 */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">
                  1
                </div>

                <p className="pt-1 leading-relaxed text-slate-600">
                  Some bubbles are displayed. Select the bubbles in order from
                  <strong className="text-slate-800"> LOWEST to HIGHEST </strong>
                  value.
                </p>
              </div>

              {/* Instruction 2 */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                  2
                </div>

                <p className="pt-1 leading-relaxed text-slate-600">
                  You can select a bubble by clicking it once.
                </p>
              </div>

              {/* Instruction 3 */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                  3
                </div>

                <p className="pt-1 leading-relaxed text-slate-600">
                  The selected bubbles will be highlighted.
                </p>
              </div>

              {/* Instruction 4 */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-amber-200 hover:bg-amber-50/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-sm font-bold text-amber-700">
                  4
                </div>

                <p className="pt-1 leading-relaxed text-slate-600">
                  Click a selected bubble again to deselect it. After selecting
                  three bubbles, the game automatically moves forward.
                </p>
              </div>

              {/* Instruction 5 */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="shrink-0 rounded-lg bg-slate-100 p-2 text-slate-700">
                  <Clock className="h-5 w-5" />
                </div>

                <p className="pt-1 leading-relaxed text-slate-600">
                  You have{" "}
                  <strong className="text-slate-800">
                    15 seconds
                  </strong>{" "}
                  to answer each question.
                </p>
              </div>

              {/* Instruction 6 */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-amber-200 hover:bg-amber-50/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-sm font-bold text-amber-700">
                  6
                </div>

                <p className="pt-1 leading-relaxed text-slate-600">
                  If you do not select all three bubbles within the time limit,
                  the game will automatically move to the next question.
                </p>
              </div>

            </div>
          </div>

          {/* Example Bubbles */}
          <div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f2b5c]">
                Example
              </h3>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6">
              <div className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row">
                <MathBubble expression="8 + 4" selected={false} />
                <MathBubble expression="20 - 5" selected={false} />
                <MathBubble expression="7 × 3" selected={false} />
              </div>
            </div>
          </div>

          {/* Correct Order */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 sm:p-5">
            <div className="text-center">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#0f2b5c]">
                Correct Order
              </h3>

              <div className="flex flex-col items-center gap-1.5 text-sm text-slate-500 sm:text-base">
                <p>
                  1.{" "}
                  <span className="font-bold text-slate-800">
                    8 + 4
                  </span>{" "}
                  (12)
                </p>

                <p>
                  2.{" "}
                  <span className="font-bold text-slate-800">
                    20 - 5
                  </span>{" "}
                  (15)
                </p>

                <p>
                  3.{" "}
                  <span className="font-bold text-slate-800">
                    7 × 3
                  </span>{" "}
                  (21)
                </p>
              </div>
            </div>
          </div>

        </CardContent>

        {/* Footer */}
        <CardFooter className="border-t border-slate-100 bg-slate-50/70 px-5 py-5 sm:px-8">
          <Button
            size="lg"
            aria-label="Start Bubble Math practice"
            className="h-13 w-full rounded-xl bg-[#0f2b5c] text-base font-bold tracking-wide text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#163b78] hover:shadow-lg active:scale-[0.99]"
            onClick={onStart}
          >
            PRACTICE
          </Button>
        </CardFooter>

      </Card>

      {/* Small brand text */}
      <p className="relative mt-5 text-center text-xs text-slate-400">
        Education Matters • Practice. Improve. Perform.
      </p>
    </div>
  );
}