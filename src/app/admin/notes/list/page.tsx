"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Loader2, Edit, Trash2, Search, PlusCircle, ExternalLink, Globe, Lock } from "lucide-react";

export default function ManageNotesPage() {
  const [notes, setNotes] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNotes = async () => {
    setIsFetching(true);
    try {
      const res = await fetch("/api/notes");
      if (res.ok) {
        const data = await res.json();
        setNotes(data);
      }
    } catch (err) {
      console.error("Failed to fetch notes", err);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (topicSlug: string) => {
    if (!confirm("Are you sure you want to delete this topic? This cannot be undone.")) return;

    try {
      const res = await fetch(`/api/notes/${topicSlug}`, { method: "DELETE" });
      const data = await res.json();
      
      if (res.ok) {
        fetchNotes(); // Refresh the list
      } else {
        alert(data.error || "Failed to delete the topic.");
      }
    } catch (err) {
      alert("Network error. Failed to delete the topic.");
    }
  };

  // Filter notes based on search query
  const filteredNotes = notes.filter((note) =>
    note.topicName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.subjectSlug?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Study Notes</h1>
          <p className="text-slate-500 text-sm mt-1">Search, edit, or delete existing topics.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/notes" target="_blank" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800">
            <ExternalLink className="h-4 w-4" /> View Live Notes
          </Link>
          <Link href="/admin/notes/new-topic" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700">
            <PlusCircle className="h-4 w-4" /> New Topic
          </Link>
        </div>
      </div>

      {/* Search Bar & Table Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        
        <div className="relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search by topic or subject..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-96 border border-slate-300 pl-10 pr-4 py-2.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        {isFetching ? (
          <div className="flex items-center gap-2 text-slate-500 py-8">
            <Loader2 className="h-5 w-5 animate-spin" /> Loading topics...
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            {searchQuery ? "No topics found matching your search." : "No topics created yet."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-sm font-bold text-slate-600 rounded-tl-lg">Topic Name</th>
                  <th className="p-4 text-sm font-bold text-slate-600">Subject</th>
                  <th className="p-4 text-sm font-bold text-slate-600 text-center">Pos</th>
                  <th className="p-4 text-sm font-bold text-slate-600 text-center">Status</th>
                  <th className="p-4 text-sm font-bold text-slate-600 text-right rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotes.map((note) => (
                  <tr key={note.topicSlug} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-slate-800 line-clamp-1">
                        {note.parentTopicSlug ? "↳ " : "📁 "} {note.topicName}
                      </div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">/{note.topicSlug}</div>
                    </td>
                    <td className="p-4">
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-bold whitespace-nowrap">
                        {note.subjectSlug}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-500 text-center font-mono">
                      {note.position || 1}
                    </td>
                    <td className="p-4 text-center">
                      {note.status === "public" ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                          <Globe className="h-3 w-3" /> Public
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                          <Lock className="h-3 w-3" /> Private
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2 whitespace-nowrap">
                      <Link href={`/admin/notes/new-topic?edit=${note.topicSlug}`} className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
                        <Edit className="h-3.5 w-3.5" /> Edit
                      </Link>
                      <button onClick={() => handleDelete(note.topicSlug)} className="inline-flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-800 bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
                        <Trash2 className="h-3.5 w-3.5" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}