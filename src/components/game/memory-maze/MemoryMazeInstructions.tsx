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
import {
  Key,
  DoorOpen,
  Compass,
  Clock,
  Navigation,
} from "lucide-react";

interface MemoryMazeInstructionsProps {
  onStart: () => void;
}

export function MemoryMazeInstructions({
  onStart,
}: MemoryMazeInstructionsProps) {
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
            Memory Maze Instructions
          </CardTitle>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Navigation &amp; Key-Door Assessment
          </p>
        </CardHeader>

        {/* Instructions */}
        <CardContent className="space-y-6 px-5 pb-6 sm:px-8 sm:pb-8">

          {/* Main Objective */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-lg bg-white p-2 text-[#0f2b5c] shadow-sm">
                <Compass className="h-5 w-5" />
              </div>

              <div>
                <h3 className="mb-1 text-sm font-bold text-[#0f2b5c]">
                  Objective
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  <strong className="text-slate-800">Goal:</strong> Navigate
                  through the maze, remember the correct route, collect the
                  required key, and reach the door. Complete the maze
                  accurately while using the available time efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f2b5c]">
                How to Play
              </h3>
            </div>

            <div className="grid gap-3.5 text-sm sm:text-[15px]">

              {/* Collect Key */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-amber-200 hover:bg-amber-50/30">
                <div className="shrink-0 rounded-lg bg-amber-50 p-2 text-amber-700">
                  <Key className="h-5 w-5" />
                </div>

                <div className="pt-0.5">
                  <p className="font-semibold text-slate-800">
                    Collect KEY
                  </p>

                  <p className="mt-0.5 leading-relaxed text-slate-500">
                    Navigate your player through the maze, collect the required
                    key(s).
                  </p>
                </div>
              </div>

              {/* Reach Door */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="shrink-0 rounded-lg bg-blue-50 p-2 text-blue-700">
                  <DoorOpen className="h-5 w-5" />
                </div>

                <div className="pt-0.5">
                  <p className="font-semibold text-slate-800">
                    Reach the DOOR
                  </p>

                  <p className="mt-0.5 leading-relaxed text-slate-500">
                    After collecting the key, navigate to the door to solve
                    the maze. Reaching the door before getting the key will
                    not open it.
                  </p>
                </div>
              </div>

              {/* Directional Controls */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="shrink-0 rounded-lg bg-blue-50 p-2 text-blue-700">
                  <Navigation className="h-5 w-5" />
                </div>

                <div className="pt-0.5">
                  <p className="font-semibold text-slate-800">
                    Directional Controls
                  </p>

                  <p className="mt-0.5 leading-relaxed text-slate-500">
                    Use the on-screen arrow buttons (↑, ↓, ←, →) or keyboard
                    arrow keys to move one cell at a time.
                  </p>
                </div>
              </div>

              {/* Timer */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="shrink-0 rounded-lg bg-slate-100 p-2 text-slate-700">
                  <Clock className="h-5 w-5" />
                </div>

                <div className="pt-0.5">
                  <p className="font-semibold text-slate-800">
                    Countdown Timer
                  </p>

                  <p className="mt-0.5 leading-relaxed text-slate-500">
                    The timer is displayed at the bottom of the screen. If
                    time expires, the game progresses automatically.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="border-t border-slate-100 bg-slate-50/70 px-5 py-5 sm:px-8">
          <Button
            size="lg"
            aria-label="Start Memory Maze practice"
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