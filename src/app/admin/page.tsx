import { getDatabase } from "@/lib/db/mongodb";
import { BookOpen, FileText, Users, Target } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const db = await getDatabase();
  
  // Fetch real counts from MongoDB
  const notesCount = await db.collection("notes").countDocuments();
  const blogsCount = await db.collection("blogs").countDocuments();
  const usersCount = await db.collection("users").countDocuments();
  
  const metrics = [
    { 
      title: "Total Students", 
      value: usersCount, 
      sub: "Registered accounts", 
      icon: Users, 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      href: "#"
    },
    { 
      title: "Study Notes", 
      value: notesCount, 
      sub: "Curriculum modules", 
      icon: BookOpen, 
      color: "text-emerald-600", 
      bg: "bg-emerald-50",
      href: "/admin/notes"
    },
    { 
      title: "Articles & Blogs", 
      value: blogsCount, 
      sub: "Published writeups", 
      icon: FileText, 
      color: "text-indigo-600", 
      bg: "bg-indigo-50",
      href: "/admin/blogs/list"
    },
    { 
      title: "Practice Modules", 
      value: "3", 
      sub: "Path Finder, Math, Maze", 
      icon: Target, 
      color: "text-[#d97706]", 
      bg: "bg-amber-50",
      href: "/practice"
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl w-full">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] tracking-tight">Dashboard Overview</h1>
        <p className="text-sm sm:text-base text-slate-500 mt-1">Welcome back! Here is the real-time activity on Education Matters.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric, i) => (
          <Link 
            key={i} 
            href={metric.href}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0f2b5c]/30 transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{metric.title}</h3>
              <div className={`p-2 rounded-lg ${metric.bg} group-hover:scale-110 transition-transform`}>
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
              </div>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-[#0f2b5c]">{metric.value}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">{metric.sub}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-bold text-[#0f2b5c] mb-4">Quick Actions</h2>
        
        {/* Changed to flex-col on mobile, flex-row on desktop */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link 
            href="/admin/notes" 
            className="w-full sm:w-auto text-center bg-[#0f2b5c] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#163b78] transition-colors shadow-sm"
          >
            + Add New Study Note
          </Link>
          <Link 
            href="/admin/blogs" 
            className="w-full sm:w-auto text-center bg-white border border-slate-200 text-[#0f2b5c] px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm"
          >
            + Write New Blog
          </Link>
        </div>
      </div>
    </div>
  );
}