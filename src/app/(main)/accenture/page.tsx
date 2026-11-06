import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  Calculator,
  Brain,
  ArrowRight,
  Code2,
  Network,
  Monitor,
  Database,
  UserRound,
  Clock3,
  ArrowLeft,
  HelpCircle,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accenture Assessment Practice | Education Matters",
  description:
    "Practice and prepare for the Accenture behavioural, cognitive, technical, and coding assessment rounds with our free simulations.",
  alternates: {
    canonical: "/accenture",
  },
  openGraph: {
    title: "Accenture Assessment Practice | Education Matters",
    description:
      "Practice and prepare for the Accenture behavioural, cognitive, technical, and coding assessment rounds with our free simulations.",
    url: "/accenture",
  },
};

export default function AccentureAssessmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* =====================================================================
          1. ACCENTURE HERO
          ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-[#0f2b5c] to-[#0a1f44] text-white py-14 sm:py-20 border-b border-blue-900">
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
                <UserRound className="h-3.5 w-3.5 text-amber-400" /> Behavioural
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-slate-200">
                <Brain className="h-3.5 w-3.5 text-amber-400" /> Cognitive
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-slate-200">
                <Monitor className="h-3.5 w-3.5 text-amber-400" /> Technical
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium text-slate-200">
                <Code2 className="h-3.5 w-3.5 text-amber-400" /> Coding
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. MAIN CONTENT & ROUNDS
          ===================================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl w-full">
        
        {/* SEO Intro Block */}
        <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0f2b5c] mb-4">Master the Accenture Hiring Process</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The Accenture recruitment process is designed to evaluate your cognitive agility, technical knowledge, and coding skills. It consists of three challenging rounds: the gamified Behavioural & Cognitive Assessment, the Technical MCQ Round, and the Coding Round. 
          </p>
          <p className="text-slate-600 leading-relaxed">
            Use our free, interactive simulations below to practice the exact game formats (Path Finder, Bubble Math, Memory Maze) and technical questions you will face in the real exam. Scroll down to read the complete preparation guide for each round.
          </p>
        </div>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d97706] mb-2">
            Assessment Structure
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] tracking-tight">
            Accenture Assessment Rounds
          </h2>
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
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0f2b5c] font-bold text-sm">01</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f2b5c]">Behavioural & Cognitive Assessment</h3>
                </div>
                <p className="text-sm text-slate-600 sm:ml-12">The first round consists of a behavioural assessment and three cognitive tasks.</p>
              </div>
              <div className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600">
                <Clock3 className="h-4 w-4 text-[#d97706]" /> Round 1
              </div>
            </div>

            {/* Behavioural Assessment */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 text-[#d97706] flex items-center justify-center shrink-0">
                    <UserRound className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f2b5c]">Behavioural Assessment</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Analyses aspects of personality.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">54 Questions</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">20 Minutes</span>
                  <Button asChild size="sm" className="bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                    <Link href="/accenture/behavioral">
                      Practice <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-amber-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Cognitive Assessment */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f2b5c]">Cognitive Assessment</h4>
                    <p className="text-xs text-slate-600 mt-0.5">The cognitive assessment contains three tasks.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">3 Tasks</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">25 Minutes</span>
                </div>
              </div>

              {/* Cognitive Tasks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Path Finder */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-amber-300 hover:shadow-sm transition-all duration-300 flex flex-col">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center mb-4">
                    <Compass className="h-5 w-5" />
                  </div>
                  <h5 className="font-bold text-[#0f2b5c]">Path Finder</h5>
                  <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-1 mb-2">Image Rotation Ability</p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    This task is designed to measure your image rotation ability. Instructions will be provided, and you will have a chance to practise before beginning.
                  </p>
                  <Button asChild size="sm" className="w-full mt-5 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                    <Link href="/practice/path-finder">
                      Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                    </Link>
                  </Button>
                </div>

                {/* Bubble Math */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-amber-300 hover:shadow-sm transition-all duration-300 flex flex-col">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center mb-4">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <h5 className="font-bold text-[#0f2b5c]">Bubble Math</h5>
                  <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-1 mb-2">Numerical Ability</p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    This task is designed to measure your numerical ability. Instructions will be provided, and you will have a chance to practise before beginning.
                  </p>
                  <Button asChild size="sm" className="w-full mt-5 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                    <Link href="/practice/bubble-math">
                      Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                    </Link>
                  </Button>
                </div>

                {/* Memory Maze */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-amber-300 hover:shadow-sm transition-all duration-300 flex flex-col">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center mb-4">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h5 className="font-bold text-[#0f2b5c]">Memory Maze</h5>
                  <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-1 mb-2">Perceptual Ability</p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    This task is designed to measure your perceptual ability. Instructions will be provided, and you will have a chance to practise before beginning.
                  </p>
                  <Button asChild size="sm" className="w-full mt-5 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                    <Link href="/practice/memory-maze">
                      Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* ROUND 1 SEO TEXT */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-[#0f2b5c] mb-3">Understanding the Behavioural & Cognitive Round</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                The first round of the Accenture assessment is designed to filter candidates based on their raw cognitive abilities and personality traits. Unlike traditional exams, this round uses gamified simulations. You will have to navigate through the <strong>Path Finder</strong> (testing image rotation and spatial awareness), <strong>Bubble Math</strong> (testing mental agility and numerical reasoning), and <strong>Memory Maze</strong> (testing short-term working memory and recall).
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Because the time limits are extremely strict (often just 15-25 seconds per question), the only way to pass this round is by familiarizing yourself with the game mechanics beforehand. Use the practice links above to build your muscle memory and speed.
              </p>
            </div>
          </div>
        </Card>

        {/* ===================================================================
            ROUND 2
            =================================================================== */}
        <Card className="bg-white rounded-2xl border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] to-[#fbbf24]" />

          <div className="p-6 sm:p-8">
            {/* Round Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0f2b5c] font-bold text-sm">02</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f2b5c]">Technical Assessment</h3>
                </div>
                <p className="text-sm text-slate-600 sm:ml-12">Test your knowledge across four technical sections.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200">45 Questions</span>
                <span className="px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200">45 Minutes</span>
              </div>
            </div>

            {/* Technical Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Common Application & MS Office */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col min-h-[245px]">
                <div className="h-10 w-10 rounded-lg bg-amber-100 text-[#d97706] flex items-center justify-center mb-4 shrink-0">
                  <Monitor className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#0f2b5c] text-sm min-h-[40px]">Common Application & MS Office</h4>
                <p className="text-xs text-slate-500 mt-2">7 Questions</p>
                <Button asChild size="sm" className="w-full mt-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                  <Link href="/accenture/technical/ms-office">
                    Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                  </Link>
                </Button>
              </div>

              {/* Pseudocode */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col min-h-[245px]">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center mb-4 shrink-0">
                  <Code2 className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#0f2b5c] text-sm min-h-[40px]">Pseudocode</h4>
                <p className="text-xs text-slate-500 mt-2">10 Questions</p>
                <Button asChild size="sm" className="w-full mt-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                  <Link href="/accenture/technical/pseudocode">
                    Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                  </Link>
                </Button>
              </div>

              {/* Networking */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col min-h-[245px]">
                <div className="h-10 w-10 rounded-lg bg-amber-100 text-[#d97706] flex items-center justify-center mb-4 shrink-0">
                  <Network className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#0f2b5c] text-sm min-h-[40px]">Fundamentals of Networking & Cloud</h4>
                <p className="text-xs text-slate-500 mt-2">14 Questions</p>
                <Button asChild size="sm" className="w-full mt-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                  <Link href="/accenture/technical/networking">
                    Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                  </Link>
                </Button>
              </div>

              {/* Computer Science */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col min-h-[245px]">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center mb-4 shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#0f2b5c] text-sm min-h-[40px]">Computer Science</h4>
                <p className="text-xs text-slate-500 mt-2">14 Questions</p>
                <Button asChild size="sm" className="w-full mt-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                  <Link href="/accenture/technical/computer-science">
                    Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* ROUND 2 SEO TEXT */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-[#0f2b5c] mb-3">Cracking the Technical Assessment</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                If you clear the cognitive round, you will face the Technical MCQ round. This section is a comprehensive test of your core computer science fundamentals. It is divided into four key areas: <strong>Common Application & MS Office</strong> (everyday workplace tools), <strong>Pseudocode</strong> (tracing algorithmic logic and output prediction), <strong>Networking & Cloud</strong> (OSI models, protocols, and cloud basics), and <strong>Computer Science</strong> (Data Structures, DBMS, and Operating Systems).
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                With 45 questions to solve in 45 minutes, time management is critical. Our practice modules are designed to help you quickly identify the correct answers by reinforcing core concepts and providing instant feedback.
              </p>
            </div>
          </div>
        </Card>

        {/* ===================================================================
            ROUND 3
            =================================================================== */}
        <Card className="bg-white rounded-2xl border-slate-200 shadow-sm overflow-hidden mb-14">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] to-[#fbbf24]" />

          <div className="p-6 sm:p-8">
            {/* Round Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0f2b5c] font-bold text-sm">03</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f2b5c]">Coding Round</h3>
                </div>
                <p className="text-sm text-slate-600 sm:ml-12">Solve coding problems across backend, SQL, and frontend.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200">3 Questions</span>
                <span className="px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200">60 Minutes</span>
              </div>
            </div>

            {/* Coding Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Backend */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col min-h-[245px]">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center mb-4 shrink-0">
                  <Code2 className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#0f2b5c]">Backend</h4>
                <p className="text-sm text-slate-600 mt-2">Backend coding assessment.</p>
                <Button asChild size="sm" className="w-full mt-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                  <Link href="/accenture/coding/backend">
                    Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                  </Link>
                </Button>
              </div>

              {/* SQL */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col min-h-[245px]">
                <div className="h-10 w-10 rounded-lg bg-amber-100 text-[#d97706] flex items-center justify-center mb-4 shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#0f2b5c]">SQL</h4>
                <p className="text-sm text-slate-600 mt-2">SQL coding and database problems.</p>
                <Button asChild size="sm" className="w-full mt-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                  <Link href="/accenture/coding/sql">
                    Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                  </Link>
                </Button>
              </div>

              {/* Frontend */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col min-h-[245px]">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-[#0f2b5c] flex items-center justify-center mb-4 shrink-0">
                  <Monitor className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#0f2b5c]">Frontend</h4>
                <p className="text-sm text-slate-600 mt-2">Frontend coding assessment.</p>
                <Button asChild size="sm" className="w-full mt-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg">
                  <Link href="/accenture/coding/frontend">
                    Start Practice <ArrowRight className="ml-2 h-3.5 w-3.5 text-amber-300" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* ROUND 3 SEO TEXT */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-[#0f2b5c] mb-3">Mastering the Coding Round</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                The final technical hurdle is the Coding Round. You will be presented with complex algorithmic problems that you must solve using languages like C, C++, Java, Python, or C#. Additionally, there is usually a dedicated <strong>SQL</strong> section testing your ability to write complex joins, subqueries, and schema analyses.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our technical practice modules here allow you to review common backend algorithms, understand database relationships, and practice writing optimized code before the real test.
              </p>
            </div>
          </div>
        </Card>

        {/* ===================================================================
            FAQ & DISCLAIMER SECTION
            =================================================================== */}
        <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10 mb-14">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#0f2b5c] mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-[#d97706]" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Is there negative marking in the Accenture assessment?</h3>
                <p className="text-slate-600 mt-1">Historically, Accenture does not apply negative marking in the cognitive or technical rounds. However, because the tests are highly timed, guessing wildly can waste valuable seconds. It is best to attempt only questions you are confident about.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Can I use a calculator during the Bubble Math test?</h3>
                <p className="text-slate-600 mt-1">No. The Bubble Math test is designed to measure your raw mental math and numerical agility. You will have to solve expressions mentally within the strict time limit per question.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">What is the cut-off for the Accenture exam?</h3>
                <p className="text-slate-600 mt-1">Accenture does not publish official cut-offs. However, based on candidate experiences, scoring above 80% in the cognitive games and solving at least 2 out of 3 coding questions is generally considered safe.</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-10">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 m-0">
                  <strong>Disclaimer:</strong> Education Matters is an independent educational platform. We are not affiliated with, endorsed by, or sponsored by Accenture. All company names and trademarks are the property of their respective owners. Our practice tests are simulations designed for educational purposes only.
                </p>
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
}