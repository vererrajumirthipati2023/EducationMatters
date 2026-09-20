"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";

export function Header() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(false);
  const [isGamePracticeOpen, setIsGamePracticeOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAssessmentsOpen(false);
    setIsGamePracticeOpen(false);
  };

  // Close dropdowns when clicking anywhere outside the header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsAssessmentsOpen(false);
        setIsGamePracticeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================================================================
            MAIN HEADER
            ================================================================ */}
        <div className="flex h-16 items-center px-4 md:px-8">

          {/* ==============================================================
              LOGO
              ============================================================== */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center space-x-3"
          >
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

            <div className="flex flex-col">
              <span className="text-sm font-extrabold leading-tight tracking-tight text-[#0f2b5c] transition-colors group-hover:text-blue-700 sm:text-base">
                EDUCATION{" "}
                <span className="font-black text-[#d97706]">
                  MATTERS
                </span>
              </span>

              
            </div>
          </Link>

          {/* ==============================================================
              DESKTOP NAVIGATION
              ============================================================== */}
          <nav className="ml-8 hidden items-center gap-2 text-sm font-medium md:flex">

            {/* ============================================================
                ASSESSMENTS DROPDOWN
                ============================================================ */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsAssessmentsOpen((prev) => !prev);
                  setIsGamePracticeOpen(false);
                }}
                aria-expanded={isAssessmentsOpen}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 transition-colors ${
                  isAssessmentsOpen
                    ? "bg-slate-100 text-[#0f2b5c]"
                    : "text-foreground/70 hover:bg-slate-50 hover:text-foreground"
                }`}
              >
                Assessments

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isAssessmentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isAssessmentsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">

                  <Link
                    href="/accenture"
                    onClick={() => setIsAssessmentsOpen(false)}
                    className="flex items-center rounded-lg px-3 py-3 transition-colors hover:bg-slate-50"
                  >
                    <div>
                      <div className="font-semibold text-[#0f2b5c]">
                        Accenture
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Assessment Practice
                      </div>
                    </div>

                    <ChevronDown className="ml-auto h-4 w-4 -rotate-90 text-slate-400" />
                  </Link>

                </div>
              )}
            </div>

            {/* ============================================================
                GAME PRACTICE DROPDOWN
                ============================================================ */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsGamePracticeOpen((prev) => !prev);
                  setIsAssessmentsOpen(false);
                }}
                aria-expanded={isGamePracticeOpen}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 transition-colors ${
                  isGamePracticeOpen
                    ? "bg-slate-100 text-[#0f2b5c]"
                    : "text-foreground/70 hover:bg-slate-50 hover:text-foreground"
                }`}
              >
                Game Practice

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isGamePracticeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isGamePracticeOpen && (
                <div className="absolute left-0 top-full mt-2 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">

                  {/* Path Finder */}
                  <Link
                    href="/practice/path-finder"
                    onClick={() => setIsGamePracticeOpen(false)}
                    className="flex items-center rounded-lg px-3 py-3 transition-colors hover:bg-slate-50"
                  >
                    <div>
                      <div className="font-semibold text-[#0f2b5c]">
                        Path Finder
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Spatial Reasoning
                      </div>
                    </div>

                    <ChevronDown className="ml-auto h-4 w-4 -rotate-90 text-slate-400" />
                  </Link>

                  {/* Bubble Math */}
                  <Link
                    href="/practice/bubble-math"
                    onClick={() => setIsGamePracticeOpen(false)}
                    className="flex items-center rounded-lg px-3 py-3 transition-colors hover:bg-slate-50"
                  >
                    <div>
                      <div className="font-semibold text-[#0f2b5c]">
                        Bubble Math
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Numerical Reasoning
                      </div>
                    </div>

                    <ChevronDown className="ml-auto h-4 w-4 -rotate-90 text-slate-400" />
                  </Link>

                  {/* Memory Maze */}
                  <Link
                    href="/practice/memory-maze"
                    onClick={() => setIsGamePracticeOpen(false)}
                    className="flex items-center rounded-lg px-3 py-3 transition-colors hover:bg-slate-50"
                  >
                    <div>
                      <div className="font-semibold text-[#0f2b5c]">
                        Memory Maze
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Memory &amp; Recall
                      </div>
                    </div>

                    <ChevronDown className="ml-auto h-4 w-4 -rotate-90 text-slate-400" />
                  </Link>

                </div>
              )}
            </div>

            {/* ============================================================
                ABOUT
                ============================================================ */}
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-foreground/70 transition-colors hover:bg-slate-50 hover:text-foreground"
            >
              About
            </Link>
          </nav>

          {/* ==============================================================
              DESKTOP AUTHENTICATION CONTROLS
              ============================================================== */}
          <div className="ml-auto hidden items-center gap-3 md:flex">
            {!isLoading && (
              isAuthenticated && user ? (
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-1 pl-2 pr-3 text-xs font-semibold text-[#0f2b5c]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0f2b5c] text-white">
                      <User className="h-3 w-3" />
                    </div>

                    <span
                      className="max-w-[140px] truncate"
                      title={user.email}
                    >
                      {user.email}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => logout()}
                    className="h-8 gap-1.5 rounded-lg border-slate-200 text-xs font-semibold text-slate-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="h-8.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0f2b5c]"
                  >
                    <Link href="/signin">Sign In</Link>
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    className="h-8.5 rounded-lg bg-[#0f2b5c] px-3.5 text-xs font-bold text-white shadow-xs hover:bg-[#163b78] transition-colors"
                  >
                    <Link href="/register">Register</Link>
                  </Button>
                </div>
              )
            )}
          </div>

          {/* ==============================================================
              MOBILE MENU BUTTON
              ============================================================== */}
          <div className="ml-auto flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* ================================================================
            MOBILE NAVIGATION
            ================================================================ */}
        {isMenuOpen && (
          <div className="border-t bg-background md:hidden">
            <nav className="flex flex-col px-4 py-3">

              {/* ==========================================================
                  MOBILE ASSESSMENTS
                  ========================================================== */}
              <button
                type="button"
                onClick={() =>
                  setIsAssessmentsOpen(!isAssessmentsOpen)
                }
                aria-expanded={isAssessmentsOpen}
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              >
                <span>Assessments</span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isAssessmentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isAssessmentsOpen && (
                <div className="ml-3 border-l border-slate-200 pl-3">
                  <Link
                    href="/accenture"
                    onClick={closeMenu}
                    className="flex items-center rounded-md px-3 py-3 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <div>
                      <div className="font-medium">
                        Accenture
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Assessment Practice
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* ==========================================================
                  MOBILE GAME PRACTICE
                  ========================================================== */}
              <button
                type="button"
                onClick={() =>
                  setIsGamePracticeOpen(!isGamePracticeOpen)
                }
                aria-expanded={isGamePracticeOpen}
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              >
                <span>Game Practice</span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isGamePracticeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isGamePracticeOpen && (
                <div className="ml-3 border-l border-slate-200 pl-3">

                  {/* Path Finder */}
                  <Link
                    href="/practice/path-finder"
                    onClick={closeMenu}
                    className="flex items-center rounded-md px-3 py-3 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <div>
                      <div className="font-medium">
                        Path Finder
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Spatial Reasoning
                      </div>
                    </div>
                  </Link>

                  {/* Bubble Math */}
                  <Link
                    href="/practice/bubble-math"
                    onClick={closeMenu}
                    className="flex items-center rounded-md px-3 py-3 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <div>
                      <div className="font-medium">
                        Bubble Math
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Numerical Reasoning
                      </div>
                    </div>
                  </Link>

                  {/* Memory Maze */}
                  <Link
                    href="/practice/memory-maze"
                    onClick={closeMenu}
                    className="flex items-center rounded-md px-3 py-3 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <div>
                      <div className="font-medium">
                        Memory Maze
                      </div>

                      <div className="mt-0.5 text-xs text-slate-500">
                        Memory &amp; Recall
                      </div>
                    </div>
                  </Link>

                </div>
              )}

              {/* ==========================================================
                  ABOUT
                  ========================================================== */}
              <div className="mt-2 border-t pt-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <Link
                    href="/about"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </Button>
              </div>

              {/* ==========================================================
                  MOBILE AUTHENTICATION
                  ========================================================== */}
              <div className="mt-3 border-t border-slate-200 pt-3">
                {!isLoading && (
                  isAuthenticated && user ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 text-xs font-semibold text-[#0f2b5c]">
                        <User className="h-4 w-4 text-[#0f2b5c]" />
                        <span className="truncate">
                          {user.email}
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          logout();
                          closeMenu();
                        }}
                        className="w-full gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Link
                          href="/signin"
                          onClick={closeMenu}
                        >
                          Sign In
                        </Link>
                      </Button>

                      <Button
                        asChild
                        size="sm"
                        className="w-full bg-[#0f2b5c] text-white hover:bg-[#163b78]"
                      >
                        <Link
                          href="/register"
                          onClick={closeMenu}
                        >
                          Register
                        </Link>
                      </Button>
                    </div>
                  )
                )}
              </div>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}