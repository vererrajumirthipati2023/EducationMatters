"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/auth-context";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  ArrowLeft,
  ShieldAlert,
  Menu,
  X,
  List
} from "lucide-react";

const ADMIN_EMAIL = "edumatters2021@gmail.com"; // Replace with your email

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  
  // State for mobile sidebar toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || user?.email !== ADMIN_EMAIL) {
        router.push("/"); // Kick non-admins out
      }
    }
  }, [isLoading, isAuthenticated, user, router]);

  if (isLoading || !isAuthenticated || user?.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">
        <div className="text-center space-y-4">
          <ShieldAlert className="h-12 w-12 text-red-500 mx-auto animate-pulse" />
          <h1 className="text-2xl font-bold text-[#0f2b5c]">Verifying Admin Access...</h1>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Study Notes", href: "/admin/notes", icon: BookOpen },
    { name: "Blogs", href: "/admin/blogs", icon: FileText },
    { name: "Manage Blogs", href: "/admin/blogs/list", icon: List },
    { name: "Manage Notes", href: "/admin/notes/list", icon: List },
  ];

  const SidebarContent = () => (
    <>
      {/* Logo Area */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-amber-300 shadow-xs bg-white">
            <Image
              src="/education-matters-logo.jpg"
              alt="Education Matters Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="font-extrabold text-[#0f2b5c] leading-tight text-sm transition-colors group-hover:text-blue-700">
              EDUCATION <span className="text-[#d97706]">MATTERS</span>
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Admin Portal</div>
          </div>
        </Link>
        
        {/* Close button for mobile */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Platform Control</p>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive 
                  ? "bg-blue-50 text-[#0f2b5c]" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-[#0f2b5c]"
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "text-[#0f2b5c]" : "text-slate-400"}`} />
              {item.name}
            </Link>
          );
        })}

        <div className="mt-8 border-t border-slate-100 pt-4">
           <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-[#0f2b5c] transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-slate-400" />
              Back to Website
            </Link>
        </div>
      </nav>
    </>
  );

  return (
    <div className="flex min-h-screen bg-[#f4f7fb]">
      
      {/* DESKTOP SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 fixed h-full hidden md:flex flex-col z-50">
        <SidebarContent />
      </aside>

      {/* MOBILE SIDEBAR OVERLAY */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR DRAWER */}
      <aside 
        className={`w-64 bg-white border-r border-slate-200 fixed h-full flex flex-col z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 md:ml-64 flex flex-col w-full min-w-0 transition-all duration-300">
        
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="flex items-center text-sm font-medium text-slate-500">
              <span className="hidden sm:inline">Admin Workspace <span className="mx-2">/</span></span>
              <span className="text-[#0f2b5c] font-bold capitalize">
                {pathname.split("/").pop() === "admin" ? "Dashboard" : pathname.split("/").pop()}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold border border-emerald-200 whitespace-nowrap">
              <ShieldAlert className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> 
              <span className="hidden sm:inline">Logged in as Admin</span>
              <span className="sm:hidden">Admin</span>
            </span>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-8 w-full max-w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}