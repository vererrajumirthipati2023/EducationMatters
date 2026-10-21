"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  Target,
  Mail,
  ShieldAlert,
  Compass,
  Calculator,
  FileText,
  Layers,
  Building2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f4f7fb]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(#0f2b5c_1px,transparent_1px),linear-gradient(90deg,#0f2b5c_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <main className="relative">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(#0f2b5c_1px,transparent_1px),linear-gradient(90deg,#0f2b5c_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-48 left-1/4 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              {/* LEFT CONTENT */}
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Education Matters
                </div>

                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-[#0f2b5c] sm:text-5xl lg:text-6xl">
                  Your complete hub for
                  <span className="block">
                    <span className="text-[#d97706]">placements</span> & academics.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  Education Matters brings learning, exam preparation, and practical assessment practice together. From B.Tech academic subjects to multi-company placement tests, we are building the ultimate ecosystem to help students build knowledge, confidence, and the skills they need for their next opportunity.
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {["B.Tech Students", "Placement Aspirants", "Job Seekers", "Lifelong Learners"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/practice"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f2b5c] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#163b78] hover:shadow-lg"
                  >
                    Explore Practice
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://www.youtube.com/@Education_Matters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0f2b5c] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50/40"
                  >
                    <PlayCircle className="h-5 w-5 text-red-600" />
                    Watch on YouTube
                  </a>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] p-5 shadow-2xl shadow-slate-900/10 sm:p-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                    <div>

                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Your Learning Journey
                      </div>
                      <div className="mt-1 text-xl font-extrabold text-[#0f2b5c]">
                        Learn → Practise → Improve
                      </div>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f2b5c] shadow-sm">
                      <GraduationCap className="h-5 w-5 text-amber-400" />
                    </div>
                  </div>

                  <div className="group mt-5 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <BookOpen className="h-5 w-5 text-[#0f2b5c]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#0f2b5c]">Learn</div>
                      <div className="mt-0.5 text-xs leading-5 text-slate-500">
                        Access study materials, cheat sheets, and concept guides.
                      </div>
                    </div>
                  </div>

                  <div className="group mt-3 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                      <Brain className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#0f2b5c]">Practise</div>
                      <div className="mt-0.5 text-xs leading-5 text-slate-500">
                        Apply your knowledge with company-specific mock tests and games.
                      </div>
                    </div>
                  </div>

                  <div className="group mt-3 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                      <Target className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#0f2b5c]">Improve</div>
                      <div className="mt-0.5 text-xs leading-5 text-slate-500">
                        Track your progress and build confidence for exam day.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR STORY
        ========================================================== */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 text-center">
            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-[#d97706]">
              Our Story
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f2b5c] sm:text-4xl">
              Why we built Education Matters
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Education Matters was born out of a simple realization: traditional preparation is broken. Students spend hours reading textbooks and watching videos, but when it comes to actual placements or exams, they freeze. They lack the hands-on, timed experience required to succeed under pressure.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We started by building highly accurate, interactive simulations for recruitment assessments. But our vision doesn't stop there. We are rapidly expanding our platform to become a one-stop destination for all engineering students. Soon, you will find comprehensive study materials for B.Tech subjects, preparation guides for multiple top-tier companies, quick-revision cheat sheets, and a dedicated blog to keep you updated on everything happening in the academic and placement world.
            </p>
          </div>
        </section>

        {/* =========================================================
            WHAT WE PROVIDE (Expanded for the future vision)
        ========================================================== */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 text-sm font-bold uppercase tracking-wider text-[#d97706]">
                What We Provide
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0f2b5c]">
                An ecosystem designed for learners
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                Education Matters is more than just a practice site. We are building a comprehensive resource library for every stage of your engineering journey.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Building2, title: "Multi-Company Prep", description: "Interactive mock tests and previous-year questions for top recruiters beyond just Accenture." },
                { icon: FileText, title: "B.Tech Study Materials", description: "Subject-wise notes, important questions, and study resources for engineering students." },
                { icon: Layers, title: "Cheatsheets & Guides", description: "Quick revision cheat sheets and concept guides for aptitude, coding, and core subjects." },
                { icon: Brain, title: "Assessment Practice", description: "Interactive cognitive, spatial, and numerical assessments to simulate real test environments." },
                { icon: BookOpen, title: "Blog & Insights", description: "Regular articles covering exam updates, preparation strategies, and career guidance." },
                { icon: Target, title: "Focused Practice", description: "Structured practice designed to help learners improve accuracy, speed, and confidence." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50/30 hover:shadow-lg">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f2b5c] shadow-sm transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5 text-amber-400" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[#0f2b5c]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            UNDERSTANDING THE ASSESSMENTS
        ========================================================== */}
        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f2b5c] sm:text-4xl">
              Understanding Cognitive Assessments
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Modern recruitment processes, especially for top-tier technology and consulting firms, have moved beyond simple pen-and-paper aptitude tests. Today, companies use sophisticated, game-based cognitive assessments to measure your raw problem-solving abilities. 
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Compass className="h-6 w-6 text-[#0f2b5c]" />
                <h3 className="text-xl font-bold text-[#0f2b5c]">Spatial Reasoning (Path Finder)</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Spatial reasoning tests evaluate your ability to visualize objects in 2D and 3D space, understand their rotation, and mentally manipulate them. In our Path Finder game, you must create a continuous path by rotating tiles and changing directional arrows. These tests are crucial for roles in engineering, architecture, and software development where spatial awareness is key.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="h-6 w-6 text-[#0f2b5c]" />
                <h3 className="text-xl font-bold text-[#0f2b5c]">Numerical Ability (Bubble Math)</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Numerical reasoning assesses your ability to quickly process numbers and solve mathematical problems under strict time constraints. Our Bubble Math module forces you to mentally calculate expressions and select them in ascending order within seconds. This measures not just your math skills, but your mental agility and ability to perform under pressure, which is highly sought after in finance, analytics, and consulting roles.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="h-6 w-6 text-[#0f2b5c]" />
                <h3 className="text-xl font-bold text-[#0f2b5c]">Perceptual Memory (Memory Maze)</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Memory and recall tests measure your short-term working memory and perceptual speed. In the Memory Maze, you must quickly memorize the layout of invisible walls and key locations before navigating to the exit. Companies use these tests to identify candidates who can rapidly absorb new information, retain complex instructions, and adapt to dynamic environments.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            NEW: FREQUENTLY ASKED QUESTIONS (Great for SEO & AdSense)
        ========================================================== */}
        <section className="border-t border-slate-200 bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0f2b5c]">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
                <h3 className="text-lg font-bold text-[#0f2b5c]">Is Education Matters completely free to use?</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Yes. Our core practice tests, cognitive games, and study resources are designed to be accessible and free for all students. Our goal is to democratize placement and academic preparation.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
                <h3 className="text-lg font-bold text-[#0f2b5c]">Are these the actual questions asked in the Accenture exam?</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Our tests are official-style simulations designed to mimic the pattern, difficulty level, and time pressure of real recruitment assessments. While the specific questions may vary, practicing with our platform will give you a massive advantage.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
                <h3 className="text-lg font-bold text-[#0f2b5c]">Will you be adding tests for other companies?</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Absolutely. We are actively developing full simulation suites for TCS, Infosys, Wipro, Cognizant, and other major mass recruiters. We are also expanding into core B.Tech subject materials and cheat sheets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            YOUTUBE CHANNEL
        ========================================================== */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#0f2b5c] shadow-xl">
            <div className="relative">
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                    <PlayCircle className="h-4 w-4" /> Our YouTube Channel
                  </div>

                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Learn with Education Matters
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    Our YouTube channel is a core part of Education Matters. We create educational videos to help students understand complex concepts, practice important question models, and stay informed about upcoming examinations and placement drives.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {["Placement preparation", "B.Tech subject concepts", "Previous-year question practice", "Exam updates & guidance"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" /> {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://www.youtube.com/@Education_Matters"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-[#0f2b5c] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl"
                    >
                      <PlayCircle className="h-5 w-5" />
                      Visit Our YouTube Channel
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="hidden lg:flex lg:justify-end">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl sm:h-36 sm:w-36">
                    <PlayCircle className="h-14 w-14 text-amber-400 sm:h-20 sm:w-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT & DISCLAIMER
        ========================================================== */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm mb-4">
                <Mail className="h-6 w-6 text-[#0f2b5c]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0f2b5c]">Have any doubts or suggestions?</h2>
              <p className="mt-2 text-slate-600">
                We would love to hear from you. Feel free to reach out to us directly at:
              </p>
              <a 
                href="mailto:edumatters2021@gmail.com" 
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0f2b5c] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#163b78] transition-colors"
              >
                edumatters2021@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <ShieldAlert className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f2b5c]">Disclaimer & Trademark Notice</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Education Matters is an independent educational platform. We are not affiliated with, endorsed by, or sponsored by Accenture, or any other company mentioned on this site. All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. The practice tests and simulations provided are for educational purposes only and do not guarantee employment or specific assessment results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

             {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2b5c]">
              <GraduationCap className="h-7 w-7 text-amber-400" />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-[#0f2b5c] sm:text-3xl">
              Start preparing with Education Matters
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore our educational content, practise assessment skills and keep building your confidence one step at a time.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/practice"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f2b5c] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#163b78] transition-all"
              >
                Explore Game Practice
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* RESTORED YOUTUBE BUTTON HERE */}
              <a
                href="https://www.youtube.com/@Education_Matters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#0f2b5c] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50/40 hover:shadow-md"
              >
                <PlayCircle className="h-4 w-4 text-red-600" />
                Visit YouTube
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}