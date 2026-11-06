import { getDatabase } from "@/lib/db/mongodb";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AllNotesPage() {
  const db = await getDatabase();
  
  const subjects = await db.collection("subjects")
    .find({ status: 'public' })
    .sort({ order: 1, name: 1 })
    .toArray();

  // Count notes natively belonging to each subject
  const noteCounts = await db.collection("notes").aggregate([
    { $match: { status: 'public' } },
    { $group: { _id: "$subjectSlug", count: { $sum: 1 } } }
  ]).toArray();

  const countMap = noteCounts.reduce((acc, curr) => {
    acc[curr._id] = curr.count;
    return acc;
  }, {} as Record<string, number>);

  const subjectsList = subjects.map(sub => ({
    slug: sub.slug,
    name: sub.name,
    topicCount: countMap[sub.slug] || 0
  })).filter(sub => sub.topicCount > 0);

  return (
    <div className="min-h-screen bg-[#f4f7fb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#0f2b5c] mb-4 tracking-tight">Study Notes Library</h1>
          <p className="text-slate-600 text-lg">Select a subject to view all topics and start learning.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {subjectsList.map(sub => (
            <Link key={sub.slug} href={`/notes/${sub.slug}`} className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2b5c] via-blue-700 to-[#f59e0b] shrink-0" />
              <div className="p-6 flex flex-col flex-1">
                <div className="h-12 w-12 bg-blue-50 text-[#0f2b5c] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-[#0f2b5c] mb-2 flex-1 capitalize">{sub.name}</h2>
                <p className="text-sm font-medium text-slate-500 mb-6">{sub.topicCount} Topics Available</p>
                <div className="text-sm font-bold text-[#0f2b5c] group-hover:text-[#d97706] flex items-center gap-2 mt-auto transition-colors">
                  Start Studying <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}