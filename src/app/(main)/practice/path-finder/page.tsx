"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PATH_FINDER_VARIANTS = [
  { id: "practice-1", label: "Practice Test 1" },
  { id: "practice-2", label: "Practice Test 2" },
  { id: "practice-3", label: "Practice Test 3" },
  { id: "full-mock-test", label: "Full Mock Test" },
];

export default function PathFinderPracticeSetup() {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  const handleLaunch = () => {
    if (!selectedVariant) return;

    router.push(`/assessment/path-finder/${selectedVariant}`);
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
              Path Finder
            </CardTitle>

            {/* Description */}
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Select a practice configuration to begin your assessment
              preparation.
            </p>
          </CardHeader>

          {/* ==============================================================
              PRACTICE OPTIONS
              ============================================================== */}
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {PATH_FINDER_VARIANTS.map((variant) => {
                const isSelected = selectedVariant === variant.id;

                return (
                  <Button
                    key={variant.id}
                    type="button"
                    variant={isSelected ? "default" : "outline"}
                    className={`min-h-[76px] w-full flex-col items-start justify-center gap-1 rounded-xl px-5 py-4 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-[#0f2b5c] bg-[#0f2b5c] text-white shadow-md hover:bg-[#163b78]"
                        : "border-slate-200 bg-white text-slate-800 hover:border-amber-300 hover:bg-amber-50/40 hover:text-[#0f2b5c]"
                    }`}
                    onClick={() => setSelectedVariant(variant.id)}
                  >
                    <div className="font-bold text-base sm:text-lg">
                      {variant.label}
                    </div>

                    <div
                      className={`text-xs sm:text-sm ${
                        isSelected
                          ? "text-slate-300"
                          : "text-slate-500"
                      }`}
                    >
                      {variant.id === "full-mock-test"
                        ? "5 Questions • Mixed Difficulty"
                        : "5 Questions • Easy"}
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