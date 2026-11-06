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
import { 
  ArrowLeft, 
  Calculator, 
  Sparkles, 
  ShieldAlert, 
  Lightbulb, 
  PlayCircle,
  Monitor
} from "lucide-react";
import { useGameSessionStore } from "@/lib/store/game-session";
import { PracticeConfig } from "@/lib/games/core/types";
import { registerBubbleMath } from "@/lib/games/bubble-math";
import { persistence } from "@/lib/games/core/persistence";
import { useAuth } from "@/lib/auth/auth-context";

export const BUBBLE_MATH_VARIANTS: Record<
  string,
  Partial<PracticeConfig> & { label?: string }
> = {
  "practice-1": {
    variantId: "practice-1",
    difficulty: "EASY",
    timeLimitSeconds: 15,
    itemCount: 10,
  },
  "practice-2": {
    variantId: "practice-2",
    difficulty: "MEDIUM",
    timeLimitSeconds: 15,
    itemCount: 15,
  },
  "practice-3": {
    variantId: "practice-3",
    difficulty: "HARD",
    timeLimitSeconds: 15,
    itemCount: 20,
  },
  "full-challenge": {
    variantId: "full-challenge",
    difficulty: "HARD",
    timeLimitSeconds: 15,
    itemCount: 28,
    label: "Full Challenge",
  },
  "full-mock-test": {
    variantId: "full-mock-test",
    difficulty: "HARD",
    timeLimitSeconds: 15,
    itemCount: 28,
    label: "Full Mock Test",
  },
  "full-bubble-mock-test": {
    variantId: "full-bubble-mock-test",
    difficulty: "HARD",
    timeLimitSeconds: 15,
    itemCount: 28,
    label: "Full Bubble Mock Test",
  },
};

const VARIANTS = BUBBLE_MATH_VARIANTS;

export default function BubbleMathPracticeSetup() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { initializeSession } = useGameSessionStore();
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  useEffect(() => {
    registerBubbleMath();
  }, []);

  const handleLaunch = () => {
    if (!selectedVariant) return;
    const variantConfig = VARIANTS[selectedVariant];
    if (!variantConfig) return;

    if (typeof window !== "undefined" && variantConfig.variantId) {
      sessionStorage.setItem(
        "bubble_math_variant",
        variantConfig.variantId
      );
      persistence.clearLatestResult(variantConfig.variantId);
    }

    const config: PracticeConfig = {
      gameId: "bubble-math",
      variantId: variantConfig.variantId!,
      difficulty: variantConfig.difficulty!,
      mode: "TIMED_PRACTICE",
      itemCount: variantConfig.itemCount!,
      timeLimitSeconds: variantConfig.timeLimitSeconds!,
      instructionTimeSeconds: 0,
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
      // No-op: Game component handles per-question timeout
    });

    const routeVariant =
      selectedVariant === "practice-1"
        ? "practice1"
        : selectedVariant === "practice-2"
        ? "practice2"
        : selectedVariant === "practice-3"
        ? "practice3"
        : selectedVariant;

    const isFullMock =
      selectedVariant === "full-mock-test" ||
      selectedVariant === "full-bubble-mock-test" ||
      selectedVariant === "full-challenge";

    if (isFullMock && !isAuthenticated) {
      router.push(`/signin?next=/assessment/bubble-math/${routeVariant}`);
      return;
    }

    router.push(`/assessment/bubble-math/${routeVariant}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f7fb] py-10 px-4 sm:px-6">
      {/* ================================================================
          BACKGROUND DECORATION
          ================================================================ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(#0f2b5c_1px,transparent_1px),linear-gradient(90deg,#0f2b5c_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      {/* ================================================================
          MAIN CONTENT
          ================================================================ */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        
        {/* Back Link */}
        <div className="w-full max-w-lg mb-5">
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
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] via-blue-700 to-[#f59e0b]" />

          <CardHeader className="pb-5 text-center">
            <CardTitle className="text-3xl font-extrabold tracking-tight text-[#0f2b5c]">
              Bubble Math
            </CardTitle>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Choose any practice test below to view the instructions and start playing. 
              To see the mock test visually, <strong>start the Full Bubble Mock Test</strong>. 
              Or scroll below to see the preparation guide.
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
           

            <div className="grid gap-3">
              {Object.entries(VARIANTS)
                .filter(
                  ([key]) =>
                    key !== "full-mock-test" &&
                    key !== "full-challenge"
                )
                .map(([key, variant]) => {
                  const isSelected = selectedVariant === key;
                  const isMockTest = key === "full-bubble-mock-test";

                  return (
                    <Button
                      key={key}
                      type="button"
                      variant={isSelected ? "default" : "outline"}
                      className={`relative min-h-[76px] w-full flex-col items-start justify-center gap-1 rounded-xl px-5 py-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-[#0f2b5c] bg-[#0f2b5c] text-white shadow-md hover:bg-[#163b78]"
                          : "border-slate-200 bg-white text-slate-800 hover:border-amber-300 hover:bg-amber-50/40 hover:text-[#0f2b5c]"
                      }`}
                      onClick={() => setSelectedVariant(key)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="font-bold text-base sm:text-lg">
                          {variant.label ||
                            key
                              .replace(/-/g, " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </div>
                        
                        {isMockTest && (
                          <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isSelected ? "bg-amber-400/20 text-amber-300" : "bg-amber-100 text-amber-700"
                          }`}>
                            <Monitor className="h-3 w-3" /> Real UI
                          </span>
                        )}
                      </div>

                      <div className={`text-xs sm:text-sm ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                        {variant.itemCount} questions • {variant.timeLimitSeconds}s per question • {variant.difficulty}
                      </div>
                    </Button>
                  );
                })}
            </div>
          </CardContent>

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

        <p className="mt-5 mb-10 text-center text-xs text-slate-400">
          Education Matters • Practice. Improve. Perform.
        </p>

        {/* =================================================================
            PREP GUIDE (For SEO & AdSense)
            ================================================================= */}
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden w-full max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              <Sparkles className="h-3.5 w-3.5" /> Prep Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c]">
              Mastering the Bubble Math Assessment
            </h2>
            <p className="text-slate-600 mt-3 max-w-3xl text-sm sm:text-base leading-relaxed">
              The Bubble Math test is a highly intensive numerical reasoning assessment. It tests your mental agility, quick calculation skills, and ability to process numbers under extreme time pressure. Learn how to clear this round efficiently.
            </p>
          </div>

          <div className="p-8 sm:p-10 space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-[#0f2b5c]">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f2b5c]">What is it?</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bubble Math presents you with a set of floating bubbles, each containing a mathematical expression (e.g., 12 + 5, 4 x 3). Your goal is to calculate the value of each expression in your head and click the bubbles in strictly ascending order (from lowest value to highest value) within a 15-second time limit per question.
                </p>
              </div>

              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f2b5c]">Why do companies use it?</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Companies use this test to evaluate your mental processing speed and numerical reasoning. It is highly predictive of success in roles requiring quick data analysis, financial calculations, and logical decision-making under pressure, such as consulting, finance, and tech operations.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0f2b5c]">Top Tips for Cracking Bubble Math</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-white font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Use Estimation</h4>
                    <p className="text-sm text-slate-600 mt-1">You don't always need the exact answer. If you see 19 x 4 (which is 76) and 80, you immediately know 76 is lower. Estimation saves you crucial seconds.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-white font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Master BODMAS</h4>
                    <p className="text-sm text-slate-600 mt-1">As you advance to harder levels, expressions will include brackets and multiple operators. Ensure you follow the order of operations flawlessly to avoid silly mistakes.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Skip and Come Back</h4>
                    <p className="text-sm text-slate-600 mt-1">If a complex decimal expression is taking too long, calculate the easier ones first. This builds momentum and ensures you get the easy points before the timer runs out.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-8">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-amber-900 m-0">
                  <strong>Disclaimer:</strong> Education Matters is an independent educational platform. We are not affiliated with, endorsed by, or sponsored by Accenture or any other company. All company names and trademarks are the property of their respective owners. Our practice tests are simulations designed for educational purposes only.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}