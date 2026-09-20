"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth/auth-context";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail, ArrowRight, AlertCircle, Loader2 } from "lucide-react";

function sanitizeNextUrl(rawNext: string | null): string {
  if (!rawNext) return "/accenture";
  // Only allow relative internal paths that do not start with // or contain ://
  if (rawNext.startsWith("/") && !rawNext.startsWith("//") && !rawNext.includes("://")) {
    return rawNext;
  }
  return "/accenture";
}

function SignInContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawNext = searchParams.get("next");
  const nextUrl = sanitizeNextUrl(rawNext);

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await login(cleanEmail, password);
      if (!result.success) {
        setError(result.error || "Invalid email or password.");
        setIsSubmitting(false);
        return;
      }

      router.push(nextUrl);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#F4F7FB] px-4 py-12">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#0f2b5c_1px,transparent_1px),linear-gradient(90deg,#0f2b5c_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          {/* Brand Accent Top Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0F2B5C] via-blue-700 to-[#F59E0B]" />

          <div className="p-6 sm:p-8">
            {/* Logo & Title */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center space-x-2.5 mb-4 group">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-amber-300 shadow-xs">
                  <Image
                    src="/education-matters-logo.jpg"
                    alt="Education Matters Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-extrabold leading-tight tracking-tight text-[#0F2B5C]">
                    EDUCATION <span className="text-[#d97706]">MATTERS</span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Assessment Hub
                  </span>
                </div>
              </Link>

              <h1 className="text-2xl font-black tracking-tight text-[#0F2B5C]">Welcome Back</h1>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
                Sign in to continue your assessment practice.
              </p>
            </div>

            {/* Error Notification */}
            {error && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs sm:text-sm text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-500" />
                <div className="flex-1 font-medium">{error}</div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="student@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2B5C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2B5C]/10 transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2B5C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2B5C]/10 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-xl bg-[#0F2B5C] text-sm font-bold text-white shadow-md hover:bg-[#163b78] hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Signing In...
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {/* Switch to Register */}
            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs sm:text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <Link
                  href={rawNext ? `/register?next=${encodeURIComponent(rawNext)}` : "/register"}
                  className="font-bold text-[#0F2B5C] hover:text-[#d97706] transition-colors"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <p className="mt-5 text-center text-xs text-slate-400">
          Education Matters • Practice. Improve. Perform.
        </p>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#F4F7FB]">Loading...</div>}>
        <SignInContent />
      </Suspense>
    </>
  );
}
