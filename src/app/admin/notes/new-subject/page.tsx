"use client";
import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function NewSubjectPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [status, setStatus] = useState<"public" | "private">("private");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  // Auto-generate slug until user manually edits it
  useEffect(() => {
    if (!slugTouched) {
      setSlug(slugify(name));
    }
  }, [name, slugTouched]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/admin/subjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, slug, status }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to create subject");
        setSaving(false);
        return;
      }

      setSaved(true);
      setTimeout(() => {
        window.location.href = "/admin/notes/list";
      }, 800);
    } catch {
      setError("Network error");
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Link
        href="/admin/notes"
        className="inline-flex items-center gap-2 text-sm text-slate-500 mb-6 hover:text-slate-800"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="text-2xl font-bold text-slate-900 mb-1">Create Subject</h1>
      <p className="text-slate-500 text-sm mb-8">
        Subjects are the top-level containers. Choose the slug carefully — it
        becomes part of the public URL: <code>/notes/your-slug/...</code>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white border rounded-2xl p-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Subject Name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., ADSA"
            className="w-full border rounded-xl p-2.5"
          />
          <p className="text-xs text-slate-500 mt-1">
            Short name shown in the sidebar.
          </p>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Slug (URL path)
          </label>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">/notes/</span>
            <input
              required
              value={slug}
              onChange={(e) => {
                setSlug(slugify(e.target.value));
                setSlugTouched(true);
              }}
              placeholder="adsa"
              className="flex-1 border rounded-xl p-2.5 font-mono"
            />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            URL will be <code>/notes/{slug || "..."}/...</code>. You can override
            the auto-generated slug — e.g., <em>Advanced Data Structures</em> → <code>adsa</code>.
          </p>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Visibility
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStatus("private")}
              className={`flex-1 rounded-xl border-2 p-3 text-sm font-semibold ${
                status === "private"
                  ? "border-slate-800 bg-slate-50"
                  : "border-slate-200"
              }`}
            >
              🔒 Private — hidden from public
            </button>
            <button
              type="button"
              onClick={() => setStatus("public")}
              className={`flex-1 rounded-xl border-2 p-3 text-sm font-semibold ${
                status === "public"
                  ? "border-emerald-600 bg-emerald-50"
                  : "border-slate-200"
              }`}
            >
              🌐 Public — visible to everyone
            </button>
          </div>
        </div>

        {error && (
          <div className="text-red-600 bg-red-50 border border-red-200 rounded-xl p-3 text-sm">
            {error}
          </div>
        )}

        {saved && (
          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm">
            <CheckCircle2 className="h-4 w-4" /> Subject created!
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-[#0f2b5c] text-white py-3 rounded-xl font-bold disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {saving && <Loader2 className="h-4 w-4 animate-spin" />}
          {saving ? "Creating..." : "Create Subject"}
        </button>
      </form>
    </div>
  );
}