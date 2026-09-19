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
  CheckCircle2, 
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================================================
// LIGHTWEIGHT INTERSECTION OBSERVER HOOK FOR SCROLL REVEAL
// ============================================================================
function useScrollReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function HomePage() {
  // Hero entrance state for staggered animation on mount
  const [heroMounted, setHeroMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal hooks for sections
  const howItWorksReveal = useScrollReveal(0.15);
  const platformsReveal = useScrollReveal(0.12);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      
      {/* =====================================================================
          1. HERO SECTION (Restored Deep Blue Gradient Background + Staggered Entrance)
          ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-[#0f2b5c] to-[#0a1f44] text-white py-18 sm:py-28 border-b border-blue-800/60">
        
        {/* Subtle decorative gold dot grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Soft amber & blue atmospheric glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* 1. Logo Entrance Animation */}
          <div 
            className={`relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-amber-300 shadow-xl mb-6 bg-white p-1 transition-all duration-700 ease-out transform ${
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

          {/* 2. Brand Label Animation */}
          <div 
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-sm transition-all duration-700 delay-100 ease-out transform ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            Education Matters Assessment Platform
          </div>

          {/* 3. Main Slogan / Headline Animation */}
          <h1 
            className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 transition-all duration-700 delay-200 ease-out transform ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Practice. Improve. Perform.
          </h1>

          {/* 4. Description Animation */}
          <p 
            className={`text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 transition-all duration-700 delay-300 ease-out transform ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            A platform for practising game-based and cognitive assessment experiences.
          </p>

          {/* 5. Primary CTA Animation */}
          <div 
            className={`flex justify-center w-full transition-all duration-700 delay-400 ease-out transform ${
              heroMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Button 
              size="lg" 
              asChild 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold h-12 px-8 text-base rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <Link href="#platforms">
                Explore Assessment Platforms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>


      {/* =====================================================================
          2. HOW IT WORKS SECTION (Directly after the Hero)
          ===================================================================== */}
      <section 
        id="how-it-works"
        ref={howItWorksReveal.ref}
        className="py-16 sm:py-20 bg-white border-b border-slate-200/80"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div 
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out transform ${
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
              Learn the game. Practise with timed tests. Test yourself with a full mock.
            </p>
          </div>

          {/* 3 Numbered Steps with Staggered Scroll Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Step 01 */}
            <div 
              className={`p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col items-start transition-all duration-700 delay-100 ease-out transform hover:border-amber-300 hover:bg-amber-50/20 ${
                howItWorksReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-3xl font-black text-[#d97706] font-mono">01</span>
                <div className="p-2 rounded-lg bg-amber-100 text-[#d97706]">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-[#0f2b5c] mb-1.5 uppercase tracking-wide">
                Learn
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Understand the rules and mechanics of each assessment experience without time pressure.
              </p>
            </div>

            {/* Step 02 */}
            <div 
              className={`p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col items-start transition-all duration-700 delay-200 ease-out transform hover:border-blue-300 hover:bg-blue-50/20 ${
                howItWorksReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-3xl font-black text-[#0f2b5c] font-mono">02</span>
                <div className="p-2 rounded-lg bg-blue-100 text-[#0f2b5c]">
                  <Timer className="h-5 w-5" />
                </div>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-[#0f2b5c] mb-1.5 uppercase tracking-wide">
                Practise
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Use individual practice experiences to build speed and accuracy under timed conditions.
              </p>
            </div>

            {/* Step 03 */}
            <div 
              className={`p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col items-start transition-all duration-700 delay-300 ease-out transform hover:border-amber-300 hover:bg-amber-50/20 ${
                howItWorksReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-3xl font-black text-[#d97706] font-mono">03</span>
                <div className="p-2 rounded-lg bg-amber-100 text-[#d97706]">
                  <Award className="h-5 w-5" />
                </div>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-[#0f2b5c] mb-1.5 uppercase tracking-wide">
                Simulate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Take full mock assessments under timed conditions to test real test readiness.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================================
          3. ASSESSMENT PLATFORMS / COMPANIES SECTION (Multi-Company Ready)
          ===================================================================== */}
      <section 
        id="platforms"
        ref={platformsReveal.ref}
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl w-full"
      >
        
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out transform ${
            platformsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0f2b5c] text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 className="h-3.5 w-3.5 text-blue-600" />
            Assessment Platforms
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2b5c]">
            Explore Assessment Platforms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Choose an assessment platform to begin practising. Select a company module to explore its assessment procedure and available practice experiences.
          </p>
        </div>


        {/* ===================================================================
            ACCENTURE COMPANY CARD (Only Company Card, No Individual Games)
            =================================================================== */}
        <div 
          className={`rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-amber-300/80 transition-all duration-500 overflow-hidden mb-8 transform ${
            platformsReveal.isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.98] translate-y-8"
          }`}
        >
          {/* Card Top Accent Strip */}
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
                  Explore the assessment procedure and available practice experiences for Accenture recruitment cognitive tests.
                </p>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-600 font-medium">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                  Spatial Reasoning
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                  Numerical Reasoning
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                 Memory & Recall
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                  Timed Assessment
                </span>
              </div>
            </div>

            {/* Primary Action Button to Accenture Page */}
            <div className="shrink-0">
              <Button 
                size="lg" 
                asChild 
                className="w-full sm:w-auto bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-bold h-12 px-8 text-base rounded-xl shadow-md transition-all hover:scale-[1.02]"
              >
                <Link href="/accenture">
                  Explore Assessment
                  <ArrowRight className="ml-2 h-4 w-4 text-amber-400" />
                </Link>
              </Button>
            </div>

          </div>
        </div>


        {/* Future-Ready Platform Note */}
        <div className="text-center pt-2">
          <p className="text-xs text-slate-500">
            More company assessment platforms will be added over time.
          </p>
        </div>

      </section>

    </div>
  );
}
