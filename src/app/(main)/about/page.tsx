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
                  Helping students
                  <span className="block">
                    <span className="text-[#d97706]">prepare</span> for what
                  </span>
                  comes next.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  Education Matters brings learning, exam preparation and
                  practical assessment practice together to help students
                  build knowledge, confidence and the skills they need for
                  their next opportunity.
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {[
                    "Students",
                    "Exam Aspirants",
                    "Job Seekers",
                    "Learners",
                  ].map((item) => (
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
                  {/* Card Header */}
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

                  {/* Learn */}
                  <div className="group mt-5 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <BookOpen className="h-5 w-5 text-[#0f2b5c]" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#0f2b5c]">
                        Learn
                      </div>

                      <div className="mt-0.5 text-xs leading-5 text-slate-500">
                        Understand concepts and discover useful preparation
                        resources.
                      </div>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Practise */}
                  <div className="group mt-3 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                      <Brain className="h-5 w-5 text-amber-600" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#0f2b5c]">
                        Practise
                      </div>

                      <div className="mt-0.5 text-xs leading-5 text-slate-500">
                        Apply what you learn through questions and interactive
                        assessments.
                      </div>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Improve */}
                  <div className="group mt-3 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                      <Target className="h-5 w-5 text-emerald-600" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#0f2b5c]">
                        Improve
                      </div>

                      <div className="mt-0.5 text-xs leading-5 text-slate-500">
                        Practise consistently and build confidence step by
                        step.
                      </div>
                    </div>

                    <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-emerald-500" />
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#0f2b5c] px-4 py-3.5">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                        Education Matters
                      </div>

                      <div className="mt-0.5 text-sm font-semibold text-white">
                        Your preparation starts here.
                      </div>
                    </div>

                    <PlayCircle className="h-7 w-7 text-amber-400" />
                  </div>
                </div>

                {/* Floating YouTube Badge */}
                <a
                  href="https://www.youtube.com/@Education_Matters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl transition-transform duration-200 hover:-translate-y-1 sm:flex"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50">
                    <PlayCircle className="h-5 w-5 text-red-600" />
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Learn with us
                    </div>

                    <div className="text-sm font-bold text-[#0f2b5c]">
                      Education Matters
                    </div>
                  </div>
                </a>

                {/* Focus Badge */}
                <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 shadow-lg sm:block">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Focus
                  </div>

                  <div className="mt-0.5 text-sm font-extrabold text-[#0f2b5c]">
                    Learn. Practise. Improve.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Audience Strip */}
            <div className="mt-14 border-t border-slate-200 pt-6">
              <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-slate-500">
                  Built for learners preparing for their next academic or
                  career opportunity.
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Learn
                  <span>•</span>
                  Practise
                  <span>•</span>
                  Improve
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR MISSION
        ========================================================== */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d97706]">
                <span className="h-px w-8 bg-amber-500" />
                Our Mission
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#0f2b5c] sm:text-4xl">
                Education should be accessible, practical and useful.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Education Matters focuses on creating learning resources that
                students can actually use — whether they are preparing for an
                entrance examination, improving their aptitude skills,
                understanding difficult concepts or getting ready for
                recruitment assessments.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Our approach is simple: explain concepts clearly, provide
                useful practice material and help learners understand what
                they need to do next.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Practical Learning
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Exam Preparation
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Continuous Practice
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Lightbulb className="h-6 w-6 text-[#0f2b5c]" />
                  </div>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                    EDUCATION MATTERS
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0f2b5c]">
                  From learning to practice
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  We are building an ecosystem where students can learn
                  concepts, access useful resources and practise the skills
                  required for academic and recruitment assessments.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Learn the concept",
                    "Practise with questions",
                    "Understand your mistakes",
                    "Build confidence through repetition",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-xs font-bold text-white">
                        {index + 1}
                      </div>

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT WE PROVIDE
        ========================================================== */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 text-sm font-bold uppercase tracking-wider text-[#d97706]">
                What We Provide
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#0f2b5c]">
                Resources designed around learners
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                Education Matters brings learning content and practice
                experiences together in one place.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: BookOpen,
                  title: "Exam Preparation",
                  description:
                    "Concept explanations, practice questions and preparation resources for competitive and entrance examinations.",
                },
                {
                  icon: GraduationCap,
                  title: "Career Guidance",
                  description:
                    "Useful information and guidance to help students understand examinations, opportunities and preparation paths.",
                },
                {
                  icon: Brain,
                  title: "Assessment Practice",
                  description:
                    "Interactive practice experiences for cognitive, numerical, spatial and memory-based assessment skills.",
                },
                {
                  icon: Target,
                  title: "Focused Practice",
                  description:
                    "Structured practice designed to help learners improve accuracy, speed and familiarity with assessment formats.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50/30 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f2b5c] shadow-sm transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5 text-amber-400" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#0f2b5c]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
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
                    <PlayCircle className="h-4 w-4" />
                    Our YouTube Channel
                  </div>

                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Learn with Education Matters
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    Our YouTube channel is a core part of Education Matters,
                    where we create educational videos to help students
                    understand concepts, practise important question models
                    and stay informed about examinations and preparation.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "Exam preparation",
                      "Quantitative & analytical topics",
                      "Previous-year question practice",
                      "Exam updates & guidance",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm font-medium text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                        {item}
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

                <div className="flex justify-center lg:justify-end">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl sm:h-36 sm:w-36">
                    <PlayCircle className="h-14 w-14 text-amber-400 sm:h-20 sm:w-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY THIS PLATFORM
        ========================================================== */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-wider text-[#d97706]">
                  Why This Platform?
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-[#0f2b5c] sm:text-4xl">
                  Practice should feel like preparation.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Traditional preparation often means reading about an
                  assessment without actually experiencing the type of task
                  involved. Education Matters aims to bridge that gap by
                  bringing interactive practice into the learning process.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  The goal is not simply to complete a practice test. It is to
                  become familiar with the task, understand the instructions,
                  practise repeatedly and track personal improvement.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <Brain className="h-6 w-6 text-[#0f2b5c]" />

                  <h3 className="mt-4 font-bold text-[#0f2b5c]">
                    Interactive
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Practise through tasks rather than relying only on
                    passive reading.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <Target className="h-6 w-6 text-[#0f2b5c]" />

                  <h3 className="mt-4 font-bold text-[#0f2b5c]">
                    Focused
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Focus on one assessment skill at a time and build
                    familiarity.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <Lightbulb className="h-6 w-6 text-[#0f2b5c]" />

                  <h3 className="mt-4 font-bold text-[#0f2b5c]">
                    Educational
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Use practice results as feedback for your own learning and
                    improvement.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <PlayCircle className="h-6 w-6 text-[#0f2b5c]" />

                  <h3 className="mt-4 font-bold text-[#0f2b5c]">
                    Accessible
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Bring learning resources and practice experiences together
                    in one accessible platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            EDUCATION MATTERS ECOSYSTEM
        ========================================================== */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-[#d97706]">
              One Education Ecosystem
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f2b5c] sm:text-4xl">
              Learn. Practise. Improve.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Education Matters connects educational content with practical
              preparation so that learners can move from understanding a
              concept to applying it.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Learn */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                  <PlayCircle className="h-6 w-6 text-red-600" />
                </div>

                <h3 className="mt-4 font-bold text-[#0f2b5c]">
                  Watch &amp; Learn
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Learn concepts and question-solving approaches through our
                  educational content.
                </p>
              </div>

              {/* Practise */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Brain className="h-6 w-6 text-[#0f2b5c]" />
                </div>

                <h3 className="mt-4 font-bold text-[#0f2b5c]">
                  Practise
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Apply your understanding through interactive assessment
                  practice.
                </p>
              </div>

              {/* Improve */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                  <Target className="h-6 w-6 text-amber-600" />
                </div>

                <h3 className="mt-4 font-bold text-[#0f2b5c]">
                  Improve
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Identify areas that need more practice and continue learning
                  at your own pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2b5c]">
              <GraduationCap className="h-7 w-7 text-amber-400" />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-[#0f2b5c] sm:text-3xl">
              Start preparing with Education Matters
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore our educational content, practise assessment skills and
              keep building your confidence one step at a time.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/practice"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f2b5c] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#163b78] hover:shadow-lg"
              >
                Explore Game Practice
                <ArrowRight className="h-4 w-4" />
              </Link>

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