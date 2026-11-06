"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"; // <--- 1. ADD THIS IMPORT
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User, LogOut, BookOpen, FileText, LayoutDashboard, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";

export function Header() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const pathname = usePathname(); // <--- 2. GET THE CURRENT PAGE URL

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(false);
  const [isGamePracticeOpen, setIsGamePracticeOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); 
  
  const [subjects, setSubjects] = useState<{ slug: string, name: string }[]>([]);
  const [isFetchingSubjects, setIsFetchingSubjects] = useState(true);

  const headerRef = useRef<HTMLElement>(null);
  const isAdmin = user?.isAdmin === true;

  useEffect(() => {
    fetch("/api/notes/subjects")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setSubjects(data);
      })
      .catch(err => console.error("Failed to load subjects", err))
      .finally(() => setIsFetchingSubjects(false));
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAssessmentsOpen(false);
    setIsGamePracticeOpen(false);
    setIsNotesOpen(false);
    setIsProfileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsAssessmentsOpen(false);
        setIsGamePracticeOpen(false);
        setIsNotesOpen(false);
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex h-16 items-center px-4 md:px-8">

          <Link href="/" onClick={closeMenu} className="group flex shrink-0 items-center space-x-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-amber-300 shadow-xs">
              <Image src="/education-matters-logo.jpg" alt="Logo" width={40} height={40} className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold leading-tight tracking-tight text-[#0f2b5c] transition-colors group-hover:text-blue-700 sm:text-base whitespace-nowrap">
                EDUCATION <span className="font-black text-[#d97706]">MATTERS</span>
              </span>
            </div>
          </Link>

          <nav className="ml-6 hidden items-center gap-1 text-sm font-medium md:flex">
            
            {/* Assessments */}
            <div className="relative">
              <button type="button" onClick={() => { setIsAssessmentsOpen(!isAssessmentsOpen); setIsGamePracticeOpen(false); setIsNotesOpen(false); setIsProfileOpen(false); }} className={`inline-flex items-center gap-1 rounded-md px-3 py-2 transition-colors whitespace-nowrap ${isAssessmentsOpen ? "bg-slate-100 text-[#0f2b5c]" : "text-foreground/70 hover:bg-slate-50"}`}>
                Assessments <ChevronDown className={`h-4 w-4 transition-transform ${isAssessmentsOpen ? "rotate-180" : ""}`} />
              </button>
              {isAssessmentsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <Link href="/accenture" onClick={closeMenu} className="flex items-center rounded-lg px-3 py-3 hover:bg-slate-50">
                    <div><div className="font-semibold text-[#0f2b5c]">Accenture</div><div className="text-xs text-slate-500">Assessment Practice</div></div>
                  </Link>
                </div>
              )}
            </div>

            {/* Game Practice */}
            <div className="relative">
              <button type="button" onClick={() => { setIsGamePracticeOpen(!isGamePracticeOpen); setIsAssessmentsOpen(false); setIsNotesOpen(false); setIsProfileOpen(false); }} className={`inline-flex items-center gap-1 rounded-md px-3 py-2 transition-colors whitespace-nowrap ${isGamePracticeOpen ? "bg-slate-100 text-[#0f2b5c]" : "text-foreground/70 hover:bg-slate-50"}`}>
                Game Practice <ChevronDown className={`h-4 w-4 transition-transform ${isGamePracticeOpen ? "rotate-180" : ""}`} />
              </button>
              {isGamePracticeOpen && (
                <div className="absolute left-0 top-full mt-2 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <Link href="/practice/path-finder" onClick={closeMenu} className="flex items-center rounded-lg px-3 py-3 hover:bg-slate-50"><div><div className="font-semibold text-[#0f2b5c]">Path Finder</div><div className="text-xs text-slate-500">Spatial Reasoning</div></div></Link>
                  <Link href="/practice/bubble-math" onClick={closeMenu} className="flex items-center rounded-lg px-3 py-3 hover:bg-slate-50"><div><div className="font-semibold text-[#0f2b5c]">Bubble Math</div><div className="text-xs text-slate-500">Numerical Reasoning</div></div></Link>
                  <Link href="/practice/memory-maze" onClick={closeMenu} className="flex items-center rounded-lg px-3 py-3 hover:bg-slate-50"><div><div className="font-semibold text-[#0f2b5c]">Memory Maze</div><div className="text-xs text-slate-500">Memory &amp; Recall</div></div></Link>
                </div>
              )}
            </div>

            {/* STUDY NOTES */}
            <div className="relative">
              <button type="button" onClick={() => { setIsNotesOpen(!isNotesOpen); setIsAssessmentsOpen(false); setIsGamePracticeOpen(false); setIsProfileOpen(false); }} className={`inline-flex items-center gap-1 rounded-md px-3 py-2 transition-colors whitespace-nowrap ${isNotesOpen ? "bg-slate-100 text-[#0f2b5c]" : "text-foreground/70 hover:bg-slate-50"}`}>
                Study Notes <ChevronDown className={`h-4 w-4 transition-transform ${isNotesOpen ? "rotate-180" : ""}`} />
              </button>
              {isNotesOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg max-h-96 overflow-y-auto">
                  <Link href="/notes" onClick={closeMenu} className="flex items-center rounded-lg px-3 py-2 mb-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <div className="font-bold">View All Subjects</div>
                  </Link>
                  <div className="h-px w-full bg-slate-100 my-1"></div>
                  
                  {isFetchingSubjects ? (
                    <div className="flex items-center gap-2 px-3 py-3 text-sm text-slate-500">
                      <Loader2 className="h-4 w-4 animate-spin" /> Loading...
                    </div>
                  ) : subjects.length === 0 ? (
                    <div className="px-3 py-3 text-sm text-slate-500">No subjects available yet.</div>
                  ) : (
                    subjects.map((sub) => (
                      <Link key={sub.slug} href={`/notes/${sub.slug}`} onClick={closeMenu} className="flex items-center rounded-lg px-3 py-3 hover:bg-slate-50">
                        <div className="font-semibold text-[#0f2b5c] line-clamp-1">{sub.name}</div>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>

            <Link href="/blog" onClick={closeMenu} className="rounded-md px-3 py-2 text-foreground/70 hover:bg-slate-50 flex items-center gap-1.5 whitespace-nowrap">
              <FileText className="h-4 w-4" /> Blog
            </Link>
            <Link href="/about" onClick={closeMenu} className="rounded-md px-3 py-2 text-foreground/70 hover:bg-slate-50 whitespace-nowrap">
              About
            </Link>
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            {!isLoading && (
              isAuthenticated && user ? (
                <div className="relative">
                  <button onClick={() => { setIsProfileOpen(!isProfileOpen); setIsAssessmentsOpen(false); setIsGamePracticeOpen(false); setIsNotesOpen(false); }} className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-1 pl-2 pr-3 text-xs font-semibold text-[#0f2b5c] hover:bg-slate-100 transition-colors">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f2b5c] text-white"><User className="h-3.5 w-3.5" /></div>
                    <span className="max-w-[120px] truncate" title={user.email}>{user.email}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isProfileOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                      {isAdmin && (
                        <Link href="/admin" onClick={closeMenu} className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors">
                          <LayoutDashboard className="h-4 w-4" /> Admin Portal
                        </Link>
                      )}
                      <div className="h-px w-full bg-slate-100 my-1"></div>
                      <button onClick={() => { logout(); closeMenu(); }} className="w-full flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors">
                        <LogOut className="h-4 w-4" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {/* 3. ADD ?next= TO THE DESKTOP BUTTONS */}
                  <Button asChild variant="ghost" size="sm" className="h-8.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0f2b5c]">
                    <Link href={`/signin?next=${encodeURIComponent(pathname)}`}>Sign In</Link>
                  </Button>
                  <Button asChild size="sm" className="h-8.5 bg-[#0f2b5c] px-3.5 text-xs font-bold text-white hover:bg-[#163b78]">
                    <Link href={`/register?next=${encodeURIComponent(pathname)}`}>Register</Link>
                  </Button>
                </div>
              )
            )}
          </div>

          <div className="ml-auto flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <div className="border-t bg-background md:hidden">
            <nav className="flex flex-col px-4 py-3 space-y-1">
              
              <button type="button" onClick={() => { setIsAssessmentsOpen(!isAssessmentsOpen); setIsGamePracticeOpen(false); setIsNotesOpen(false); }} className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/70 hover:bg-muted">
                <span>Assessments</span><ChevronDown className={`h-4 w-4 transition-transform ${isAssessmentsOpen ? "rotate-180" : ""}`} />
              </button>
              {isAssessmentsOpen && <div className="ml-3 border-l pl-3"><Link href="/accenture" onClick={closeMenu} className="flex py-3 text-sm text-foreground/70 hover:bg-muted">Accenture</Link></div>}

              <button type="button" onClick={() => { setIsGamePracticeOpen(!isGamePracticeOpen); setIsAssessmentsOpen(false); setIsNotesOpen(false); }} className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/70 hover:bg-muted">
                <span>Game Practice</span><ChevronDown className={`h-4 w-4 transition-transform ${isGamePracticeOpen ? "rotate-180" : ""}`} />
              </button>
              {isGamePracticeOpen && <div className="ml-3 border-l pl-3">
                <Link href="/practice/path-finder" onClick={closeMenu} className="flex py-3 text-sm text-foreground/70 hover:bg-muted">Path Finder</Link>
                <Link href="/practice/bubble-math" onClick={closeMenu} className="flex py-3 text-sm text-foreground/70 hover:bg-muted">Bubble Math</Link>
                <Link href="/practice/memory-maze" onClick={closeMenu} className="flex py-3 text-sm text-foreground/70 hover:bg-muted">Memory Maze</Link>
              </div>}

              <button type="button" onClick={() => { setIsNotesOpen(!isNotesOpen); setIsAssessmentsOpen(false); setIsGamePracticeOpen(false); }} className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/70 hover:bg-muted">
                <span>Study Notes</span><ChevronDown className={`h-4 w-4 transition-transform ${isNotesOpen ? "rotate-180" : ""}`} />
              </button>
              {isNotesOpen && (
                <div className="ml-3 border-l pl-3">
                  <Link href="/notes" onClick={closeMenu} className="flex py-3 text-sm text-indigo-700 font-bold hover:bg-muted">View All Subjects</Link>
                  {subjects.map((sub) => (
                    <Link key={sub.slug} href={`/notes/${sub.slug}`} onClick={closeMenu} className="flex py-3 text-sm text-foreground/70 hover:bg-muted">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/blog" onClick={closeMenu} className="flex items-center rounded-md px-3 py-3 text-sm font-medium text-foreground/70 hover:bg-muted">Blog</Link>
              <Link href="/about" onClick={closeMenu} className="flex items-center rounded-md px-3 py-3 text-sm font-medium text-foreground/70 hover:bg-muted">About</Link>

              <div className="mt-3 border-t border-slate-200 pt-3">
                {!isLoading && (
                  isAuthenticated && user ? (
                    <div className="space-y-2">
                      {isAdmin && <Button asChild variant="outline" className="w-full justify-start gap-2 border-blue-200 text-[#0f2b5c] bg-blue-50"><Link href="/admin" onClick={closeMenu}><LayoutDashboard className="h-4 w-4"/> Admin Portal</Link></Button>}
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 text-xs font-semibold text-[#0f2b5c]"><User className="h-4 w-4" /><span className="truncate">{user.email}</span></div>
                      <Button variant="outline" size="sm" onClick={() => { logout(); closeMenu(); }} className="w-full gap-2 border-red-200 text-red-600 hover:bg-red-50"><LogOut className="h-4 w-4" /> Sign Out</Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {/* 4. ADD ?next= TO THE MOBILE BUTTONS */}
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/signin?next=${encodeURIComponent(pathname)}`} onClick={closeMenu}>Sign In</Link>
                      </Button>
                      <Button asChild size="sm" className="w-full bg-[#0f2b5c] text-white hover:bg-[#163b78]">
                        <Link href={`/register?next=${encodeURIComponent(pathname)}`} onClick={closeMenu}>Register</Link>
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