import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  Calculator,
  Brain,
  ArrowRight,
  BookOpen,
  Timer,
  CheckCircle2,
  ArrowLeft,
  Code2,
  Network,
  Monitor,
  Database,
  UserRound,
  Clock3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accenture Assessment Practice | Education Matters",
  description:
    "Practice and prepare for the Accenture behavioural, cognitive, technical, and coding assessment rounds.",
};

export default function AccentureAssessmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* =====================================================================
          1. ACCENTURE HERO
          ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-[#0f2b5c] to-[#0a1f44] text-white py-14 sm:py-20 border-b border-blue-900">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="flex justify-start mb-7">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Education Matters
            </Link>
          </div>

          {/* Centered Hero Content */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 mb-4">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Assessment Practice
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              ACCENTURE
            </h1>

            <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              Prepare across behavioural, cognitive, technical, and coding
              assessment rounds with structured practice experiences.
            </p>

            {/* Round Summary */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-slate-200">
                <UserRound className="h-3.5 w-3.5 text-amber-400" />
                Behavioural
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-slate-200">
                <Brain className="h-3.5 w-3.5 text-amber-400" />
                Cognitive
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-slate-200">
                <Monitor className="h-3.5 w-3.5 text-amber-400" />
                Technical
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-slate-200">
                <Code2 className="h-3.5 w-3.5 text-amber-400" />
                Coding
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. ASSESSMENT OVERVIEW
          ===================================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl w-full">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d97706] mb-2">
            Assessment Structure
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] tracking-tight">
            Accenture Assessment Rounds
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            The assessment consists of three rounds covering behavioural and
            cognitive assessment, technical knowledge, and coding skills.
          </p>
        </div>

        {/* ===================================================================
            ROUND 1
            =================================================================== */}
        <Card className="bg-white rounded-2xl border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] to-[#fbbf24]" />

          <div className="p-6 sm:p-8">
            {/* Round Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0f2b5c] font-bold text-sm">
                    01
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f2b5c]">
                    Behavioural & Cognitive Assessment
                  </h3>
                </div>

                <p className="text-sm text-slate-600 sm:ml-12">
                  The first round consists of a behavioural assessment and
                  three cognitive tasks.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600">
                <Clock3 className="h-4 w-4 text-[#d97706]" />
                Round 1
              </div>
            </div>

            {/* Behavioural Assessment */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 text-[#d97706] flex items-center justify-center">
                    <UserRound className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0f2b5c]">
                      Behavioural Assessment
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Analyses aspects of personality.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">
                    54 Questions
                  </span>

                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">
                    20 Minutes
                  </span>
                </div>
              </div>
            </div>

            {/* Cognitive Assessment */}
            {/* Cognitive Assessment */}
<div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-6">
  {/* Cognitive Assessment Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center">
        <Brain className="h-5 w-5" />
      </div>

      <div>
        <h4 className="font-bold text-[#0f2b5c]">
          Cognitive Assessment
        </h4>

        <p className="text-xs text-slate-600 mt-0.5">
          The cognitive assessment contains three tasks.
        </p>
      </div>
    </div>

    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
      <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">
        3 Tasks
      </span>

      <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">
        25 Minutes
      </span>
    </div>
  </div>

  {/* Cognitive Tasks */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    {/* Path Finder */}
    <div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-amber-300 hover:shadow-sm transition-all duration-300">
      <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center mb-4">
        <Compass className="h-5 w-5" />
      </div>

      <h5 className="font-bold text-[#0f2b5c]">
        Path Finder
      </h5>

      <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-1 mb-2">
        Image Rotation Ability
      </p>

      <p className="text-sm text-slate-600 leading-relaxed">
        This task is designed to measure your image rotation ability.
        Instructions will be provided, and you will have a chance to
        practise before beginning.
      </p>
    </div>

    {/* Bubble Math */}
    <div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-amber-300 hover:shadow-sm transition-all duration-300">
      <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center mb-4">
        <Calculator className="h-5 w-5" />
      </div>

      <h5 className="font-bold text-[#0f2b5c]">
        Bubble Math
      </h5>

      <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-1 mb-2">
        Numerical Ability
      </p>

      <p className="text-sm text-slate-600 leading-relaxed">
        This task is designed to measure your numerical ability.
        Instructions will be provided, and you will have a chance to
        practise before beginning.
      </p>
    </div>

    {/* Memory Maze */}
    <div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-amber-300 hover:shadow-sm transition-all duration-300">
      <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center mb-4">
        <Brain className="h-5 w-5" />
      </div>

      <h5 className="font-bold text-[#0f2b5c]">
        Memory Maze
      </h5>

      <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-1 mb-2">
        Perceptual Ability
      </p>

      <p className="text-sm text-slate-600 leading-relaxed">
        This task is designed to measure your perceptual ability.
        Instructions will be provided, and you will have a chance to
        practise before beginning.
      </p>
    </div>

  </div>
</div>
          </div>
        </Card>

        {/* ===================================================================
            ROUND 2
            =================================================================== */}
        <Card className="bg-white rounded-2xl border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] to-[#fbbf24]" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0f2b5c] font-bold text-sm">
                    02
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f2b5c]">
                    Technical Assessment
                  </h3>
                </div>

                <p className="text-sm text-slate-600 sm:ml-12">
                  Test your knowledge across four technical sections.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200">
                  45 Questions
                </span>

                <span className="px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200">
                  45 Minutes
                </span>
              </div>
            </div>

            {/* Technical Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Section 1 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-10 w-10 rounded-lg bg-amber-100 text-[#d97706] flex items-center justify-center mb-4">
                  <Monitor className="h-5 w-5" />
                </div>

                <h4 className="font-bold text-[#0f2b5c] text-sm">
                  Common Application & MS Office
                </h4>

                <p className="text-xs text-slate-500 mt-2">
                  7 Questions
                </p>
              </div>

              {/* Section 2 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center mb-4">
                  <Code2 className="h-5 w-5" />
                </div>

                <h4 className="font-bold text-[#0f2b5c] text-sm">
                  Pseudocode
                </h4>

                <p className="text-xs text-slate-500 mt-2">
                  10 Questions
                </p>
              </div>

              {/* Section 3 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-10 w-10 rounded-lg bg-amber-100 text-[#d97706] flex items-center justify-center mb-4">
                  <Network className="h-5 w-5" />
                </div>

                <h4 className="font-bold text-[#0f2b5c] text-sm">
                  Fundamentals of Networking
                </h4>

                <p className="text-xs text-slate-500 mt-2">
                  14 Questions
                </p>
              </div>

              {/* Section 4 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center mb-4">
                  <Database className="h-5 w-5" />
                </div>

                <h4 className="font-bold text-[#0f2b5c] text-sm">
                  Computer Science
                </h4>

                <p className="text-xs text-slate-500 mt-2">
                  14 Questions
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* ===================================================================
            ROUND 3
            =================================================================== */}
        <Card className="bg-white rounded-2xl border-slate-200 shadow-sm overflow-hidden mb-14">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] to-[#fbbf24]" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0f2b5c] font-bold text-sm">
                    03
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f2b5c]">
                    Coding Round
                  </h3>
                </div>

                <p className="text-sm text-slate-600 sm:ml-12">
                  Solve coding problems across backend, SQL, and frontend.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200">
                  3 Questions
                </span>

                <span className="px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200">
                  60 Minutes
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center mb-4">
                  <Code2 className="h-5 w-5" />
                </div>

                <h4 className="font-bold text-[#0f2b5c]">
                  Backend
                </h4>

                <p className="text-sm text-slate-600 mt-2">
                  Backend coding assessment.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-10 w-10 rounded-lg bg-amber-100 text-[#d97706] flex items-center justify-center mb-4">
                  <Database className="h-5 w-5" />
                </div>

                <h4 className="font-bold text-[#0f2b5c]">
                  SQL
                </h4>

                <p className="text-sm text-slate-600 mt-2">
                  SQL coding and database problems.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center mb-4">
                  <Monitor className="h-5 w-5" />
                </div>

                <h4 className="font-bold text-[#0f2b5c]">
                  Frontend
                </h4>

                <p className="text-sm text-slate-600 mt-2">
                  Frontend coding assessment.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* ===================================================================
            3. AVAILABLE PRACTICE GAMES
            =================================================================== */}
        <div className="mb-14">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d97706] mb-2">
              Cognitive Practice
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] tracking-tight">
              Games Available for Practice
            </h2>

            <p className="text-slate-600 text-sm mt-2">
              Practise the three cognitive tasks individually before attempting
              the assessment simulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* ===============================================================
                PATH FINDER
                =============================================================== */}
            <Card className="flex flex-col justify-between bg-white rounded-2xl border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 p-6 sm:p-7">
              <div>
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#0f2b5c] border border-blue-100 flex items-center justify-center mb-5">
                  <Compass className="h-6 w-6" />
                </div>

                <CardTitle className="text-lg font-bold text-[#0f2b5c] tracking-tight">
                  PATH FINDER
                </CardTitle>

                <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-0.5 mb-3">
                  Image Rotation Ability
                </p>

                <CardDescription className="text-sm text-slate-600 leading-relaxed mb-6">
                  Connect the path by rotating and changing directional tiles
                  on 3×3 and 4×4 grids from start to destination.
                </CardDescription>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium mb-4 flex items-center justify-between">
                  <span>5 Questions</span>
                  <span className="text-slate-400">•</span>
                  <span>Easy to Hard</span>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg h-10"
                >
                  <Link href="/practice/path-finder">
                    Start Practice
                    <ArrowRight className="ml-2 h-4 w-4 text-amber-300" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* ===============================================================
                BUBBLE MATH
                =============================================================== */}
            <Card className="flex flex-col justify-between bg-white rounded-2xl border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 p-6 sm:p-7">
              <div>
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#0f2b5c] border border-blue-100 flex items-center justify-center mb-5">
                  <Calculator className="h-6 w-6" />
                </div>

                <CardTitle className="text-lg font-bold text-[#0f2b5c] tracking-tight">
                  BUBBLE MATH
                </CardTitle>

                <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-0.5 mb-3">
                  Numerical Ability
                </p>

                <CardDescription className="text-sm text-slate-600 leading-relaxed mb-6">
                  Rapidly calculate mental math expressions and select bubbles
                  in strictly ascending order under time pressure.
                </CardDescription>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium mb-4 flex items-center justify-between">
                  <span>5 Questions</span>
                  <span className="text-slate-400">•</span>
                  <span>Timed Practice</span>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg h-10"
                >
                  <Link href="/practice/bubble-math">
                    Start Practice
                    <ArrowRight className="ml-2 h-4 w-4 text-amber-300" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* ===============================================================
                MEMORY MAZE
                =============================================================== */}
            <Card className="flex flex-col justify-between bg-white rounded-2xl border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 p-6 sm:p-7">
              <div>
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#0f2b5c] border border-blue-100 flex items-center justify-center mb-5">
                  <Brain className="h-6 w-6" />
                </div>

                <CardTitle className="text-lg font-bold text-[#0f2b5c] tracking-tight">
                  MEMORY MAZE
                </CardTitle>

                <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-0.5 mb-3">
                  Perceptual Ability
                </p>

                <CardDescription className="text-sm text-slate-600 leading-relaxed mb-6">
                  Memorize the grid obstacles and key locations before they
                  vanish, then navigate safely to the exit.
                </CardDescription>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium mb-4 flex items-center justify-between">
                  <span>5 Questions</span>
                  <span className="text-slate-400">•</span>
                  <span>Spatial Recall</span>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg h-10"
                >
                  <Link href="/practice/memory-maze">
                    Start Practice
                    <ArrowRight className="ml-2 h-4 w-4 text-amber-300" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* ===================================================================
            4. FULL MOCK
            =================================================================== */}
        
      </section>
    </div>
  );
}