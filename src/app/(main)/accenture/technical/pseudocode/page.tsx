"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldAlert, 
  Zap, 
  Target, 
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  PlayCircle,
  Clock3,
  HelpCircle,
  Code2,
  Variable,
  Repeat,
  GitBranch,
  Binary
} from "lucide-react";
import { TechnicalPractice } from "@/components/technical/TechnicalPractice";
import { pseudocodeQuestions } from "@/data/technical/pseudocode";

export default function PseudocodePracticePage() {
  const [hasStarted, setHasStarted] = useState(false);

  // =========================================================================
  // VIEW 1: THE QUIZ
  // =========================================================================
  if (hasStarted) {
    return (
      <div className="flex flex-col min-h-screen bg-[#f4f7fb]">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
          <button
            onClick={() => setHasStarted(false)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Prep Guide
          </button>
        </div>

        <TechnicalPractice
          title="Pseudocode"
          subtitle="Round 2 Technical Assessment Practice"
          category="Accenture Technical Assessment"
          questions={pseudocodeQuestions}
          backHref="/accenture"
        />
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: THE PREP GUIDE
  // =========================================================================
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f7fb] py-6 sm:py-8">
      
      {/* TOP NAVIGATION */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6">
        <Link
          href="/accenture"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
        >
          <ArrowLeft className="h-4 w-4 text-[#d97706]" />
          Back to Assessment
        </Link>
      </div>

      {/* 1. THE PREP GUIDE */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-[#0f2b5c] p-5 sm:p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Guide
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-bold border border-white/20">
                  <HelpCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" /> 10 Questions
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-bold border border-white/20">
                  <Clock3 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" /> Approx 10 Minutes
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Mastering Pseudocode Tracing
              </h2>
              <p className="text-blue-100 mt-3 sm:mt-4 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed">
                The Pseudocode round tests your ability to read and execute logic without a compiler. You must dry-run loops and conditions in your head to predict the final output. Read the guide, then test yourself.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-8 md:p-12 space-y-8 sm:space-y-12">
            
            {/* The 4 Pillars Grid */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f2b5c] mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-[#d97706]" /> 
                The 4 Core Pillars
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                {/* Variables */}
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-emerald-100 rounded-lg text-emerald-700">
                      <Variable className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-[#0f2b5c] text-base sm:text-lg">Variables & Math</h4>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700 flex-1">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">•</span> <strong>Integer Division:</strong> 12 / 5 = 2 (not 2.4).</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">•</span> <strong>Modulo (%):</strong> 12 MOD 5 = 2 (remainder).</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">•</span> <strong>Assignment:</strong> `x = x + 1` updates the variable.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">•</span> <strong>Bitwise:</strong> Know AND (&), OR (|), XOR (^), and Left/Right shifts.</li>
                  </ul>
                </div>

                {/* Control Flow */}
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg text-blue-700">
                      <GitBranch className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-[#0f2b5c] text-base sm:text-lg">Conditionals</h4>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700 flex-1">
                    <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">•</span> <strong>If / Else:</strong> Only one block executes.</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">•</span> <strong>Logical Operators:</strong> AND, OR, NOT.</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">•</span> <strong>Nested Ifs:</strong> Conditions inside conditions.</li>
                  </ul>
                </div>

                {/* Loops */}
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-amber-100 rounded-lg text-amber-700">
                      <Repeat className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-[#0f2b5c] text-base sm:text-lg">Loops</h4>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700 flex-1">
                    <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">•</span> <strong>For Loop:</strong> Runs a fixed number of times.</li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">•</span> <strong>While Loop:</strong> Runs until the condition is false.</li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">•</span> <strong>Nested Loops:</strong> Inner loop completes for every outer iteration.</li>
                  </ul>
                </div>

                {/* Tracing */}
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-purple-300 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg text-purple-700">
                      <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-[#0f2b5c] text-base sm:text-lg">Functions & Arrays</h4>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700 flex-1">
                    <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">•</span> <strong>Array Index:</strong> Usually starts at 0 or 1.</li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">•</span> <strong>Pass by Value:</strong> Changes inside a function don't affect the original variable.</li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">•</span> <strong>Recursion:</strong> Tracing a function that calls itself.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategy / Pro Tips Section */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-indigo-200 rounded-lg text-indigo-800">
                  <Zap className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#0f2b5c]">Exam Strategy & Pro-Tips</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Create a Trace Table
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    On rough paper, draw columns for each variable. Write down the value of each variable at every step of the loop. This prevents silly calculation errors.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Watch Integer Division
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    This is the biggest trap. If a question says "Assume integer division", 5 / 2 is equal to 2, not 2.5. Always check the data type.
                  </p>
                </div>
                
                {/* NEW: BITWISE PRO-TIP */}
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <Binary className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Bitwise Operators
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    Accenture frequently tests bitwise operations. Convert the numbers to binary. For example, 6 & 3 becomes 110 & 011 = 010 (which is 2).
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Check Loop Bounds
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    Pay close attention to &lt;= vs &lt;. "For i = 1 to 5" runs 5 times. "For i = 1 to &lt;5" runs only 4 times. 
                  </p>
                </div>

                {/* NEW: INFINITE LOOPS PRO-TIP */}
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Watch for Infinite Loops
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    In a "While" loop, ensure the variable inside the loop is actually being updated. If not, the loop will never end.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Dry Run the Last Iteration
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    Sometimes you don't need to trace every single step. Just run the code for the final iteration of the loop to see the final output value.
                  </p>
                </div>
              </div>
            </div>

            {/* THE BIG START BUTTON */}
            <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to test your knowledge?</h3>
                <p className="text-slate-400 mb-6 sm:mb-8 max-w-lg text-xs sm:text-base">
                  You have reviewed the core concepts and exam traps. It is time to put your skills to the test with our simulated assessment.
                </p>
                <button
                  onClick={() => {
                    setHasStarted(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base sm:text-lg rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
                >
                  <PlayCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  Start Practice Test
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mt-2 sm:mt-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <ShieldAlert className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[10px] sm:text-xs md:text-sm text-amber-900 m-0 leading-relaxed">
                  <strong>Disclaimer:</strong> Education Matters is an independent educational platform. We are not affiliated with, endorsed by, or sponsored by Accenture or any other company. All company names and trademarks are the property of their respective owners. Our practice tests are simulations designed for educational purposes only.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}