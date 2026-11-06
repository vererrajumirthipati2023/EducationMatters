"use client";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2, CheckCircle2, Plus, Code2, Eye, Edit, ArrowLeft, Globe, Lock } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

function BlogEditor() {
  const searchParams = useSearchParams();
  const editSlug = searchParams.get("edit");

  const [formData, setFormData] = useState({
    title: "", 
    category: "Placement Guide", 
    excerpt: "", 
    coverImage: "", 
    author: "Education Matters", 
    metaTitle: "", 
    metaDescription: "", 
    content: "",
    status: "private" as "public" | "private",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [rawHtml, setRawHtml] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    if (editSlug) {
      setIsEditing(true);
      setIsFetchingData(true);
      
      fetch("/api/blogs")
        .then(res => res.json())
        .then(data => {
          const blogToEdit = data.find((b: any) => b.slug === editSlug);
          if (blogToEdit) {
            setFormData({
              title: blogToEdit.title || "",
              category: blogToEdit.category || "Placement Guide",
              excerpt: blogToEdit.excerpt || "",
              coverImage: blogToEdit.coverImage || "",
              author: blogToEdit.author || "Education Matters",
              metaTitle: blogToEdit.metaTitle || "",
              metaDescription: blogToEdit.metaDescription || "",
              content: blogToEdit.content || "",
              status: blogToEdit.status || "private",
            });
            setRawHtml(blogToEdit.content || "");
          }
        })
        .catch(err => console.error("Failed to fetch blogs", err))
        .finally(() => setIsFetchingData(false));
    }
  }, [editSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalContent = isHtmlMode ? rawHtml : formData.content;
    setStatus("loading");

    try {
      const url = isEditing ? `/api/blogs/${editSlug}` : "/api/blogs";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, content: finalContent }),
      });

      if (res.ok) {
        setStatus("success");
        if (isEditing) window.location.href = "/admin/blogs/list";
        else resetForm();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setFormData({ title: "", category: "Placement Guide", excerpt: "", coverImage: "", author: "Education Matters", metaTitle: "", metaDescription: "", content: "", status: "private" });
    setRawHtml("");
    setIsHtmlMode(false);
    setStatus("idle");
  };

  const toggleHtmlMode = () => {
    if (!isHtmlMode) {
      setRawHtml(formData.content);
      setIsHtmlMode(true);
    } else {
      setFormData({ ...formData, content: rawHtml });
      setIsHtmlMode(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
  };

  if (isFetchingData) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-12 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="h-10 w-10 animate-spin text-indigo-600 mb-4" />
        <p className="text-slate-500 font-medium">Loading article data...</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div className="flex items-center gap-2">
          {isEditing ? <Edit className="h-5 w-5 text-indigo-600" /> : <Plus className="h-5 w-5 text-indigo-600" />}
          <h2 className="text-lg font-bold text-slate-800">{isEditing ? "Edit Article" : "Write New Article"}</h2>
        </div>
        
        {isEditing && (
          <Link href="/admin/blogs/list" className="text-sm font-bold text-red-500 hover:text-red-700 flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Cancel Edit
          </Link>
        )}
      </div>

      {status === "success" && !isEditing && (
        <div className="mb-6 flex items-center gap-2 bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-200">
          <CheckCircle2 className="h-5 w-5" /> Article saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* STATUS TOGGLE */}
        <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <h3 className="font-bold text-sm">Visibility</h3>
            <p className="text-xs text-slate-500">Private articles are hidden from the public.</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, status: "private" })}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold border-2 transition-colors ${
                formData.status === "private" ? "border-slate-800 bg-white" : "border-transparent text-slate-500 hover:bg-slate-200"
              }`}
            >
              <Lock className="h-4 w-4" /> Private
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, status: "public" })}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold border-2 transition-colors ${
                formData.status === "public" ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "border-transparent text-slate-500 hover:bg-slate-200"
              }`}
            >
              <Globe className="h-4 w-4" /> Public
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Article Title</label>
              <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-slate-300 p-2.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Category</label>
              <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full border border-slate-300 p-2.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                <option>Placement Guide</option>
                <option>Company Process</option>
                <option>Technical Prep</option>
                <option>Career Advice</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Cover Image URL</label>
              <input type="url" value={formData.coverImage} onChange={e => setFormData({...formData, coverImage: e.target.value})} className="w-full border border-slate-300 p-2.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Author Name</label>
              <input type="text" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} className="w-full border border-slate-300 p-2.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Short Excerpt</label>
            <textarea required value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} className="w-full border border-slate-300 p-2.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" rows={2} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">SEO Title (Optional)</label>
              <input type="text" value={formData.metaTitle} onChange={e => setFormData({...formData, metaTitle: e.target.value})} className="w-full border border-slate-300 p-2.5 rounded-xl outline-none bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">SEO Description (Optional)</label>
              <input type="text" value={formData.metaDescription} onChange={e => setFormData({...formData, metaDescription: e.target.value})} className="w-full border border-slate-300 p-2.5 rounded-xl outline-none bg-white" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-bold text-slate-700">Article Content</label>
              <button type="button" onClick={toggleHtmlMode} className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-md transition-colors ${isHtmlMode ? "text-emerald-600 bg-emerald-50 hover:bg-emerald-100" : "text-indigo-600 bg-indigo-50 hover:bg-indigo-100"}`}>
                {isHtmlMode ? <><Eye className="h-3.5 w-3.5" /> Show Visual Editor</> : <><Code2 className="h-3.5 w-3.5" /> Paste Raw HTML</>}
              </button>
            </div>

            {isHtmlMode ? (
              <div className="bg-slate-900 rounded-xl overflow-hidden p-4">
                <textarea value={rawHtml} onChange={(e) => setRawHtml(e.target.value)} className="w-full h-96 bg-transparent text-emerald-400 font-mono text-sm outline-none resize-none" />
              </div>
            ) : (
              <div className="bg-white rounded-xl overflow-hidden border border-slate-300">
                <ReactQuill 
                  key={editSlug || "new"}
                  theme="snow" 
                  value={formData.content} 
                  onChange={(content) => setFormData({...formData, content})} 
                  modules={modules} 
                  className="h-96 mb-12" 
                />
              </div>
            )}
          </div>

        <button disabled={status === "loading"} type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-70 flex items-center gap-2 mt-4">
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "loading" ? "Saving..." : (isEditing ? "Update Article" : "Save Article")}
        </button>
      </form>
    </div>
  );
}

export default function AdminBlogsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Write a Blog</h1>
          <p className="text-slate-500 text-sm mt-1">Draft your new article here.</p>
        </div>
        <Link href="/admin/blogs/list" className="inline-flex items-center gap-2 bg-slate-200 text-slate-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-300">
          View All Posts
        </Link>
      </div>

      <Suspense fallback={<div className="p-8 flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-indigo-600" /></div>}>
        <BlogEditor />
      </Suspense>
    </div>
  );
}