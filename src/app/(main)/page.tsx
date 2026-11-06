"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Timer,
  Award,
  Building2,
  Library,
  FileText,
  Sparkles,
  Gamepad2,
  CheckCircle2,
  Target,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================================================
// SCROLL REVEAL HOOK
// ============================================================================
function useScrollReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ============================================================================
// COUNT-UP HOOK (animated stats)
// ============================================================================
function useCountUp(target: number, isVisible: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isVisible, duration]);
  return count;
}

// ============================================================================
// DATA (Updated to reflect actual project content)
// ============================================================================
const RESOURCE_TABS = [
  {
    id: "notes" as const,
    label: "Study Notes",
    icon: Library,
    heading: "Structured Study Notes",
    description: "Deep-dive into core engineering subjects with concise, exam-focused notes.",
    items: [
      { title: "Advanced Data Structures", meta: "Space Complexity, Time Complexity" },
      { title: "Operating Systems", meta: "Coming Soon" },
      { title: "DBMS & SQL", meta: "Coming Soon" },
      { title: "Computer Networks", meta: "Coming Soon" },
    ],
    ctaLabel: "Browse Study Notes",
    href: "/notes",
  },
  {
    id: "blog" as const,
    label: "Placement Blog",
    icon: FileText,
    heading: "Placement & Career Guides",
    description: "Real advice, hiring process breakdowns, and interview strategies.",
    items: [
      { title: "Accenture Hiring Process 2026", meta: "8 min read" },
      { title: "On-Campus vs Off-Campus Guide", meta: "Coming Soon" },
      { title: "Resume Tips for Freshers", meta: "Coming Soon" },
      { title: "Common Interview Questions", meta: "Coming Soon" },
    ],
    ctaLabel: "Read Articles",
    href: "/blog",
  },
  {
    id: "games" as const,
    label: "Game Practice",
    icon: Gamepad2,
    heading: "Cognitive Mini-Games",
    description: "Train your brain with interactive spatial, numerical, and memory-based assessments.",
    items: [
      { title: "Path Finder", meta: "Spatial Reasoning" },
      { title: "Bubble Math", meta: "Numerical Agility" },
      { title: "Memory Maze", meta: "Working Memory" },
      { title: "Full Mock Tests", meta: "Simulate the real exam" },
    ],
    ctaLabel: "Start Playing",
    href: "/practice",
  },
];

type TabId = (typeof RESOURCE_TABS)[number]["id"];

// ============================================================================
// PAGE
// ============================================================================
export default function HomePage() {
  const [heroMounted, setHeroMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHeroMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const howItWorksReveal = useScrollReveal(0.15);
  const platformsReveal = useScrollReveal(0.12);
  const resourcesReveal = useScrollReveal(0.12);
  const seoReveal = useScrollReveal(0.1);

  // Animated hero stats
  const stat1 = useCountUp(500, heroMounted);
  const stat2 = useCountUp(3, heroMounted);
  const stat3 = useCountUp(50, heroMounted);
  const stat4 = useCountUp(100, heroMounted);

  // Resources tabs
  const [activeTab, setActiveTab] = useState<TabId>("notes");
  const currentTab = RESOURCE_TABS.find((t) => t.id === activeTab)!;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      
      {/* =====================================================================
          1. HERO SECTION
          ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-[#0f2b5c] to-[#0a1f44] text-white py-16 sm:py-24 border-b border-blue-800/60">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div
            className={`relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-amber-300 shadow-xl mb-6 bg-white p-1 transition-all duration-700 ease-out ${
              heroMounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4"
            }`}
          >
            <Image
              src="/education-matters-logo.jpg"
              alt="Education Matters Logo"
              width={96}
              height={96}
              className="object-contain rounded-full"
              priority
            />
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-4 transition-all duration-700 delay-100 ease-out ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            Your Complete Placement & Study Hub
          </div>

          <h1
            className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 transition-all duration-700 delay-200 ease-out ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Practice. Improve. Perform.
          </h1>

          <p
            className={`text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 transition-all duration-700 delay-300 ease-out ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            The complete platform for mastering cognitive assessments, placement
            tests, and academic study notes.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center w-full transition-all duration-700 delay-400 ease-out ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Button
              size="lg"
              asChild
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold h-12 px-8 text-base rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <Link href="#platforms">
                Explore Platforms <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold h-12 px-8 text-base rounded-xl backdrop-blur-sm"
            >
              <Link href="/notes">Read Study Notes</Link>
            </Button>
          </div>

          {/* Animated Stats */}
          <div
            className={`mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl transition-all duration-700 delay-500 ease-out ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {[
              { value: stat1, suffix: "+", label: "Practice Questions" },
              { value: stat2, suffix: "", label: "Core Mini-Games" },
              { value: stat3, suffix: "+", label: "Study Notes" },
              { value: stat4, suffix: "%", label: "Free Access" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-xl sm:text-2xl font-black text-amber-300">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. HOW IT WORKS
          ===================================================================== */}
      <section
        id="how-it-works"
        ref={howItWorksReveal.ref}
        className="py-16 sm:py-20 bg-white border-b border-slate-200/80"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out ${
              howItWorksReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d97706] mb-2">
              Platform Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2b5c]">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Learn the game. Practise with timed tests. Test yourself with a
              full mock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "Learn",
                desc: "Understand the rules and mechanics of each assessment experience without time pressure.",
                icon: BookOpen,
                color: "amber",
              },
              {
                num: "02",
                title: "Practise",
                desc: "Use individual practice experiences to build speed and accuracy under timed conditions.",
                icon: Timer,
                color: "blue",
              },
              {
                num: "03",
                title: "Simulate",
                desc: "Take full mock assessments under timed conditions to test real test readiness.",
                icon: Award,
                color: "amber",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-start transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-amber-300 ${
                  howItWorksReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className={`text-3xl font-black font-mono ${step.color === "amber" ? "text-[#d97706]" : "text-[#0f2b5c]"}`}>
                    {step.num}
                  </span>
                  <div className={`p-2 rounded-lg ${step.color === "amber" ? "bg-amber-100 text-[#d97706]" : "bg-blue-100 text-[#0f2b5c]"}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#0f2b5c] mb-1.5 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. PLATFORMS (ACCENTURE)
          ===================================================================== */}
      <section
        id="platforms"
        ref={platformsReveal.ref}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl w-full bg-slate-50"
      >
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out ${
            platformsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0f2b5c] text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 className="h-3.5 w-3.5 text-blue-600" /> Assessment Platforms
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2b5c]">
            Explore Assessment Platforms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Choose an assessment platform to begin practising.
          </p>
        </div>

        <div
          className={`rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform ${
            platformsReveal.isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.98] translate-y-8"
          }`}
        >
          <div className="h-2.5 w-full bg-gradient-to-r from-[#0f2b5c] via-[#1e3a8a] to-[#fbbf24]" />
          <div className="p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-[#d97706] text-xs font-bold uppercase tracking-wider border border-amber-200">
                • Assessment Practice
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] tracking-tight">
                  ACCENTURE
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                  Explore the assessment procedure and available practice
                  experiences for Accenture recruitment cognitive tests.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-600 font-medium">
                {["Spatial Reasoning", "Numerical Reasoning", "Memory & Recall", "Timed Assessment"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-bold h-12 px-8 text-base rounded-xl shadow-md transition-all hover:scale-[1.02]"
              >
                <Link href="/accenture">
                  Explore Assessment <ArrowRight className="ml-2 h-4 w-4 text-amber-400" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. BEYOND PRACTICE TESTS (TABBED)
          ===================================================================== */}
      <section
        ref={resourcesReveal.ref}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl w-full border-t border-slate-200 bg-white"
      >
        <div
          className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ease-out ${
            resourcesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2b5c]">
            Beyond Practice Tests
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Notes, guides, and interactive games — explore whatever matches your goal.
          </p>
        </div>

        {/* Tab buttons */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-6 transition-all duration-700 ${
            resourcesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {RESOURCE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#0f2b5c] text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#0f2b5c] hover:text-[#0f2b5c]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        <div
          className={`rounded-3xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden transition-all duration-700 ${
            resourcesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f2b5c] mb-1">
              {currentTab.heading}
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              {currentTab.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {currentTab.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-slate-200"
                >
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-[#0f2b5c] truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {item.meta}
                    </div>
                  </div>
                  {/* Arrows removed here */}
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-bold h-11 px-6 rounded-xl"
            >
              <Link href={currentTab.href}>
                {currentTab.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. SEO / WHY EDUCATION MATTERS
          ===================================================================== */}
      <section
        ref={seoReveal.ref}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl w-full border-t border-slate-200 bg-slate-50 text-center"
      >
        <div
          className={`transition-all duration-700 ease-out ${
            seoReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-[#0f2b5c] mb-4">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2b5c] mb-4">
            Why Education Matters?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Education Matters is a completely free platform designed to bridge the gap between academic learning and corporate expectations. Whether you are preparing for your campus placements, struggling with core engineering subjects, or looking to master the cognitive games used by top recruiters like Accenture, we have you covered.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Our platform combines interactive simulations, structured study notes, and real-world hiring insights to give you the ultimate competitive edge. No paywalls. No sign-up required to start. Just pure, accessible education.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 mb-2" />
              <span className="font-bold text-slate-800 text-sm">100% Free</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <Zap className="h-6 w-6 text-amber-500 mb-2" />
              <span className="font-bold text-slate-800 text-sm">Realistic Simulations</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <BookOpen className="h-6 w-6 text-blue-500 mb-2" />
              <span className="font-bold text-slate-800 text-sm">Expert Notes</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}