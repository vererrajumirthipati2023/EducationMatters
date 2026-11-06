"use client";
import Link from "next/link";
import { BookOpen, FileText } from "lucide-react";

export default function AdminNotesHub() {
  return (
    <div className="max-w-4xl mx-auto py-16 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">Content Studio</h1>
        <p className="text-slate-500 mt-2">What would you like to create?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/notes/new-subject"
          className="group bg-white border-2 border-slate-200 hover:border-indigo-400 rounded-2xl p-8 transition-all hover:shadow-lg"
        >
          <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Create Subject</h2>
          <p className="text-slate-600 text-sm">
            A top-level container like ADSA, DS, C, or Java. Set a custom slug
            (e.g. "adsa") and public/private status.
          </p>
        </Link>

        <Link
          href="/admin/notes/new-topic"
          className="group bg-white border-2 border-slate-200 hover:border-emerald-400 rounded-2xl p-8 transition-all hover:shadow-lg"
        >
          <FileText className="h-10 w-10 text-emerald-600 mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Create Topic</h2>
          <p className="text-slate-600 text-sm">
            A note inside a subject. Choose main topic (folder) or subtopic
            (page inside folder). Edit the slug before saving.
          </p>
        </Link>
      </div>

      <div className="text-center">
        <Link
          href="/admin/notes/list"
          className="text-sm text-slate-500 hover:text-slate-700 underline"
        >
          View all subjects and topics →
        </Link>
      </div>
    </div>
  );
}