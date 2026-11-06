"use client";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Loader2,
  CheckCircle2,
  ArrowLeft,
  Folder,
  FileText,
  Code2,
  Eye,
} from "lucide-react";
import { fetchJson } from "@/lib/fetch-json";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

// ---------- types ----------
type Subject = {
  slug: string;
  name: string;
  status: "public" | "private";
};

type ParentOption = {
  topicSlug: string;
  topicName: string;
  subjectSlug: string;
};

type NoteDoc = {
  subjectSlug: string;
  topicSlug: string;
  topicName: string;
  parentTopicSlug?: string | null;
  position?: number;
  order?: number;
  metaTitle?: string | null;
  metaDescription?: string | null;
  content?: string;
  status?: "public" | "private";
  quiz?: any[];
};

// ---------- helpers ----------
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function TopicEditor() {
  const searchParams = useSearchParams();
  const editSlug = searchParams.get("edit");
  const isEditing = !!editSlug;

  const [mode, setMode] = useState<"main" | "sub">("main");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [parentOptions, setParentOptions] = useState<ParentOption[]>([]);

  const [formData, setFormData] = useState({
    subjectSlug: "",
    topicName: "",
    topicSlug: "",
    parentTopicSlug: "",
    position: 1,
    metaTitle: "",
    metaDescription: "",
    content: "",
    status: "private" as "public" | "private",
    quiz: "[]", // <-- QUIZ IS ADDED HERE AS A STRING
  });

  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [rawHtml, setRawHtml] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // ---------- load subjects ----------
  useEffect(() => {
    fetchJson<Subject[]>("/api/admin/subjects").then(({ ok, data, error }) => {
      if (ok && data) {
        setSubjects(data);
      } else {
        console.warn("Failed to load subjects:", error);
        setSubjects([]);
      }
      setIsLoading(false);
    });
  }, []);

  // ---------- load parents when subject changes ----------
  useEffect(() => {
    if (!formData.subjectSlug) {
      setParentOptions([]);
      return;
    }
    fetchJson<ParentOption[]>(
      `/api/admin/notes/parents?subject=${encodeURIComponent(
        formData.subjectSlug
      )}`
    ).then(({ ok, data, error }) => {
      if (ok && data) {
        setParentOptions(data);
      } else {
        console.warn("Failed to load parents:", error);
        setParentOptions([]);
      }
    });
  }, [formData.subjectSlug]);

  // ---------- load note for editing ----------
  useEffect(() => {
    if (!editSlug) return;
    fetchJson<NoteDoc>(`/api/admin/notes/by-slug/${editSlug}`).then(
      ({ ok, data, error }) => {
        if (!ok || !data) {
          console.warn("Failed to load note:", error);
          setError("Failed to load note");
          return;
        }
        
        setFormData({
          subjectSlug: data.subjectSlug || "",
          topicName: data.topicName || "",
          topicSlug: data.topicSlug || "",
          parentTopicSlug: data.parentTopicSlug || "",
          position: data.position || data.order || 1,
          metaTitle: data.metaTitle || "",
          metaDescription: data.metaDescription || "",
          content: data.content || "",
          status: data.status || "private",
          quiz: data.quiz ? JSON.stringify(data.quiz, null, 2) : "[]", // <-- LOAD QUIZ
        });
        setRawHtml(data.content || "");
        setSlugTouched(true);
        setMode(data.parentTopicSlug ? "sub" : "main");
      }
    );
  }, [editSlug]);

  // ---------- auto slug ----------
  useEffect(() => {
    if (!slugTouched) {
      const base = slugify(formData.topicName);
      const full =
        mode === "sub" && formData.parentTopicSlug
          ? `${formData.parentTopicSlug}-${base}`
          : base;
      setFormData((f) => ({ ...f, topicSlug: full }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.topicName, formData.parentTopicSlug, mode, slugTouched]);

  // ---------- submit ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    let parsedQuiz = [];
    try {
      parsedQuiz = JSON.parse(formData.quiz || "[]");
    } catch (err) {
      setError("Invalid Quiz JSON format. Please check for typos.");
      setSaving(false);
      return;
    }

    const finalContent = isHtmlMode ? rawHtml : formData.content;
    const payload = {
      ...formData,
      parentTopicSlug: mode === "sub" ? formData.parentTopicSlug : null,
      content: finalContent,
      quiz: parsedQuiz, // <-- SEND PARSED QUIZ
    };

    const url = isEditing
      ? `/api/admin/notes/${editSlug}`
      : `/api/admin/notes`;
    const method = isEditing ? "PUT" : "POST";

    const { ok, data } = await fetchJson<{ error?: string }>(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!ok) {
      setError(data?.error || "Failed to save");
      setSaving(false);
      return;
    }

    setSaved(true);
    setTimeout(() => {
      window.location.href = "/admin/notes/list";
    }, 700);
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 p-12 text-slate-500">
        <Loader2 className="h-5 w-5 animate-spin" /> Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 pb-24">
      <Link
        href="/admin/notes"
        className="inline-flex items-center gap-2 text-sm text-slate-500 mb-6 hover:text-slate-800"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="text-2xl font-bold mb-1">
        {isEditing ? "Edit Topic" : "Create Topic"}
      </h1>
      <p className="text-slate-500 text-sm mb-6">
        A topic is a note that lives inside a subject.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: MODE */}
        <div className="bg-white border rounded-2xl p-6">
          <h2 className="text-sm font-bold text-slate-700 mb-3">
            Step 1 — What kind of topic is this?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setMode("main")}
              className={`rounded-xl border-2 p-4 text-left ${
                mode === "main"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-slate-200"
              }`}
            >
              <Folder className="h-5 w-5 mb-2 text-indigo-600" />
              <div className="font-bold text-sm">Main Topic</div>
              <p className="text-xs text-slate-600 mt-1">
                Top-level entry. Can act as a folder (contains subtopics) or
                standalone page.
              </p>
            </button>
            <button
              type="button"
              onClick={() => setMode("sub")}
              className={`rounded-xl border-2 p-4 text-left ${
                mode === "sub"
                  ? "border-emerald-600 bg-emerald-50"
                  : "border-slate-200"
              }`}
            >
              <FileText className="h-5 w-5 mb-2 text-emerald-600" />
              <div className="font-bold text-sm">Sub Topic</div>
              <p className="text-xs text-slate-600 mt-1">
                Page inside a main topic folder. Requires selecting a parent.
              </p>
            </button>
          </div>
        </div>

        {/* STEP 2: SUBJECT + PARENT */}
        <div className="bg-white border rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-slate-700">
            Step 2 — Where does it live?
          </h2>

          <div>
            <label className="block text-sm font-bold mb-1.5">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.subjectSlug}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  subjectSlug: e.target.value,
                  parentTopicSlug: "",
                })
              }
              className="w-full border rounded-xl p-2.5"
            >
              <option value="">— Select a subject —</option>
              {subjects.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name} {s.status === "private" ? "🔒" : ""}
                </option>
              ))}
            </select>
            {subjects.length === 0 && (
              <p className="text-xs text-amber-600 mt-1">
                No subjects exist yet. Create a subject first.
              </p>
            )}
          </div>

          {mode === "sub" && (
            <div>
              <label className="block text-sm font-bold mb-1.5">
                Parent topic <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.parentTopicSlug}
                onChange={(e) =>
                  setFormData({ ...formData, parentTopicSlug: e.target.value })
                }
                className="w-full border rounded-xl p-2.5"
                disabled={!formData.subjectSlug}
              >
                <option value="">— Select parent —</option>
                {parentOptions.map((p) => (
                  <option key={p.topicSlug} value={p.topicSlug}>
                    {p.topicName}
                  </option>
                ))}
              </select>
              {parentOptions.length === 0 && formData.subjectSlug && (
                <p className="text-xs text-amber-600 mt-1">
                  No main topics exist yet in this subject. Create one first.
                </p>
              )}
            </div>
          )}
        </div>

        {/* STEP 3: NAME + SLUG + POSITION */}
        <div className="bg-white border rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-slate-700">
            Step 3 — Name and URL
          </h2>

          <div>
            <label className="block text-sm font-bold mb-1.5">
              Topic Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              value={formData.topicName}
              onChange={(e) =>
                setFormData({ ...formData, topicName: e.target.value })
              }
              placeholder="e.g., What is an Algorithm?"
              className="w-full border rounded-xl p-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1.5">
              Slug (URL path)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm font-mono whitespace-nowrap">
                /notes/{formData.subjectSlug || "..."}/
              </span>
              <input
                required
                value={formData.topicSlug}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    topicSlug: slugify(e.target.value),
                  });
                  setSlugTouched(true);
                }}
                placeholder="what-is-an-algorithm"
                className="flex-1 border rounded-xl p-2.5 font-mono text-sm"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Auto-generated from the name. You can change it before saving —
              keep it lowercase and hyphenated.
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold mb-1.5">Position</label>
            <input
              type="number"
              min={1}
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: Number(e.target.value) })
              }
              className="w-32 border rounded-xl p-2.5"
            />
            <p className="text-xs text-slate-500 mt-1">
              Integer order within its parent. Use the up/down arrows in the
              list to reorder.
            </p>
          </div>
        </div>

        {/* STEP 4: VISIBILITY */}
        <div className="bg-white border rounded-2xl p-6 space-y-5">
          <h2 className="text-sm font-bold text-slate-700">
            Step 4 — Visibility
          </h2>

          <div>
            <label className="block text-sm font-bold mb-1.5">
              Visibility
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, status: "private" })}
                className={`flex-1 rounded-xl border-2 p-3 text-sm font-semibold ${
                  formData.status === "private"
                    ? "border-slate-800 bg-slate-50"
                    : "border-slate-200"
                }`}
              >
                🔒 Private
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, status: "public" })}
                className={`flex-1 rounded-xl border-2 p-3 text-sm font-semibold ${
                  formData.status === "public"
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-slate-200"
                }`}
              >
                🌐 Public
              </button>
            </div>
          </div>
        </div>

        {/* STEP 5: SEO */}
        <div className="bg-white border rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-slate-700">
            Step 5 — SEO (optional)
          </h2>
          <input
            placeholder="Meta title"
            value={formData.metaTitle}
            onChange={(e) =>
              setFormData({ ...formData, metaTitle: e.target.value })
            }
            className="w-full border rounded-xl p-2.5"
          />
          <input
            placeholder="Meta description"
            value={formData.metaDescription}
            onChange={(e) =>
              setFormData({ ...formData, metaDescription: e.target.value })
            }
            className="w-full border rounded-xl p-2.5"
          />
        </div>

        {/* STEP 6: CONTENT */}
        <div className="bg-white border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-700">
              Step 6 — Content
            </h2>
            <button
              type="button"
              onClick={() => {
                if (!isHtmlMode) {
                  setRawHtml(formData.content);
                  setIsHtmlMode(true);
                } else {
                  setFormData({ ...formData, content: rawHtml });
                  setIsHtmlMode(false);
                }
              }}
              className="text-xs font-bold px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 inline-flex items-center gap-1.5"
            >
              {isHtmlMode ? (
                <Eye className="h-3.5 w-3.5" />
              ) : (
                <Code2 className="h-3.5 w-3.5" />
              )}
              {isHtmlMode ? "Visual" : "Raw HTML"}
            </button>
          </div>

          {isHtmlMode ? (
            <textarea
              value={rawHtml}
              onChange={(e) => setRawHtml(e.target.value)}
              className="w-full h-96 bg-slate-900 text-emerald-400 font-mono text-sm p-4 rounded-xl resize-none outline-none"
            />
          ) : (
            <ReactQuill
              key={editSlug || "new"}
              theme="snow"
              value={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
              className="h-96 mb-12"
            />
          )}
        </div>

        {/* STEP 7: QUIZ */}
        <div className="bg-white border rounded-2xl p-6">
          <h2 className="text-sm font-bold text-slate-700 mb-1.5">
            Step 7 — Practice Quiz (Optional)
          </h2>
          <p className="text-xs text-slate-500 mb-3">
            Paste your quiz questions here in JSON format. To show the quiz, type <code>[QUIZ]</code> inside the Content box above. Leave as <code>[]</code> if no quiz is needed.
          </p>
          <textarea
            value={formData.quiz}
            onChange={(e) => setFormData({ ...formData, quiz: e.target.value })}
            className="w-full h-64 bg-slate-900 text-emerald-400 font-mono text-sm p-4 rounded-xl resize-y outline-none"
            placeholder="[]"
            spellCheck={false}
          />
        </div>

        {error && (
          <div className="text-red-700 bg-red-50 border border-red-200 rounded-xl p-3 text-sm">
            {error}
          </div>
        )}
        {saved && (
          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm">
            <CheckCircle2 className="h-4 w-4" /> Saved successfully!
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-[#0f2b5c] text-white py-3 rounded-xl font-bold disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {saving && <Loader2 className="h-4 w-4 animate-spin" />}
          {saving ? "Saving..." : isEditing ? "Update Topic" : "Create Topic"}
        </button>
      </form>
    </div>
  );
}

export default function NewTopicPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        </div>
      }
    >
      <TopicEditor />
    </Suspense>
  );
}