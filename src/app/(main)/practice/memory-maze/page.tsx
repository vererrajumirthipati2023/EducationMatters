"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useGameSessionStore } from "@/lib/store/game-session";
import { MemoryMazeConfig } from "@/lib/games/memory-maze/types";
import { registerMemoryMaze } from "@/lib/games/memory-maze";

export const MEMORY_MAZE_VARIANTS: Record<
  string,
  Partial<MemoryMazeConfig> & { label?: string }
> = {
  "practice-1": {
    variantId: "practice-1",
    difficulty: "EASY",
    memoryMazeDifficulty: "EASY",
    timeLimitSeconds: 240,
    itemCount: 5,
    gridSize: 3,
    label: "Practice Test 1",
  },
  "practice-2": {
    variantId: "practice-2",
    difficulty: "MEDIUM",
    memoryMazeDifficulty: "MEDIUM",
    timeLimitSeconds: 240,
    itemCount: 5,
    gridSize: 4,
    label: "Practice Test 2",
  },
  "practice-3": {
    variantId: "practice-3",
    difficulty: "HARD",
    memoryMazeDifficulty: "HARD",
    timeLimitSeconds: 240,
    itemCount: 5,
    gridSize: 4,
    label: "Practice Test 3",
  },
  "full-memory-mock-test": {
    variantId: "full-memory-mock-test",
    difficulty: "HARD",
    memoryMazeDifficulty: "VERY_HARD",
    timeLimitSeconds: 240,
    itemCount: 5,
    gridSize: 3,
    label: "Full Memory Mock Test",
  },
};

import { useAuth } from "@/lib/auth/auth-context";

const VARIANTS = MEMORY_MAZE_VARIANTS;

export default function MemoryMazePracticeSetup() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { initializeSession } = useGameSessionStore();
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  useEffect(() => {
    registerMemoryMaze();
  }, []);

  const handleLaunch = () => {
    if (!selectedVariant) return;
    const variantConfig = VARIANTS[selectedVariant];
    if (!variantConfig) return;

    const config: MemoryMazeConfig = {
      gameId: "memory-maze",
      variantId: variantConfig.variantId!,
      difficulty: variantConfig.difficulty || "EASY",
      memoryMazeDifficulty: variantConfig.memoryMazeDifficulty || "EASY",
      mode: "TIMED_PRACTICE",
      itemCount: variantConfig.itemCount || 3,
      timeLimitSeconds: 240,
      instructionTimeSeconds: 0,
      gridSize: variantConfig.gridSize || 3,
      scoringConfig: {
        mode: "TIMED_PRACTICE",
        weights: { accuracy: 1, speed: 1, completion: 1 },
      },
      allowRestart: false,
      allowBacktrack: false,
    };

    const sessionId = `sess-${Date.now()}`;
    const seed = `seed-${Date.now()}`;

    initializeSession(sessionId, config, seed, () => {
      // Game handles timeout locally
    });

    if (selectedVariant === "full-memory-mock-test" && !isAuthenticated) {
      router.push(`/signin?next=/practice/memory-maze?variant=full-memory-mock-test`);
      return;
    }

    router.push("/assessment/memory-maze");
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f4f7fb]">

      {/* ================================================================
          BACKGROUND DECORATION
          ================================================================ */}
      <div className="pointer-events-none absolute inset-0">

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(#0f2b5c_1px,transparent_1px),linear-gradient(90deg,#0f2b5c_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* Blue atmospheric glow */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        {/* Amber atmospheric glow */}
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      {/* ================================================================
          MAIN CONTENT
          ================================================================ */}
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl flex-col items-center justify-center px-4 py-10 sm:px-6">

        {/* Back Link */}
        <div className="mb-5 w-full max-w-lg">
          <Link
            href="/practice"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#0f2b5c]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Game Practice
          </Link>
        </div>

        {/* ================================================================
            SETUP CARD
            ================================================================ */}
        <Card className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">

          {/* Brand Accent Strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] via-blue-700 to-[#f59e0b]" />

          {/* ==============================================================
              CARD HEADER
              ============================================================== */}
          <CardHeader className="pb-5 text-center">

            {/* Title */}
            <CardTitle className="text-3xl font-extrabold tracking-tight text-[#0f2b5c]">
              Memory Maze
            </CardTitle>

            {/* Description */}
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Select a practice configuration to begin your memory and
              sequence assessment preparation.
            </p>
          </CardHeader>

          {/* ==============================================================
              PRACTICE OPTIONS
              ============================================================== */}
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {Object.entries(VARIANTS).map(([key, variant]) => {
                const isSelected = selectedVariant === key;

                return (
                  <Button
                    key={key}
                    type="button"
                    variant={isSelected ? "default" : "outline"}
                    className={`min-h-[76px] w-full flex-col items-start justify-center gap-1 rounded-xl px-5 py-4 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-[#0f2b5c] bg-[#0f2b5c] text-white shadow-md hover:bg-[#163b78]"
                        : "border-slate-200 bg-white text-slate-800 hover:border-amber-300 hover:bg-amber-50/40 hover:text-[#0f2b5c]"
                    }`}
                    onClick={() => setSelectedVariant(key)}
                  >
                    <div className="font-bold text-base sm:text-lg">
                      {variant.label ||
                        key
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </div>

                    <div
                      className={`text-xs sm:text-sm ${
                        isSelected
                          ? "text-slate-300"
                          : "text-slate-500"
                      }`}
                    >
                      {variant.itemCount} mazes • {variant.gridSize}x
                      {variant.gridSize} grid • 4:00 timer
                    </div>
                  </Button>
                );
              })}
            </div>
          </CardContent>

          {/* ==============================================================
              LAUNCH BUTTON
              ============================================================== */}
          <CardFooter className="pt-2">
            <Button
              type="button"
              size="lg"
              className="h-13 w-full rounded-xl bg-[#0f2b5c] text-base font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#163b78] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handleLaunch}
              disabled={!selectedVariant}
            >
              Launch Practice
            </Button>
          </CardFooter>
        </Card>

        {/* ================================================================
            SMALL BRAND FOOTER
            ================================================================ */}
        <p className="mt-5 text-center text-xs text-slate-400">
          Education Matters • Practice. Improve. Perform.
        </p>
      </div>
    </div>
  );
}