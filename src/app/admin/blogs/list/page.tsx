"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Loader2, Edit, Trash2, Search, PlusCircle, ExternalLink, Globe, Lock } from "lucide-react";

export default function ManageBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogs = async () => {
    setIsFetching(true);
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this blog post? This cannot be undone.")) return;

    try {
      const res = await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
      if (res.ok) {
        fetchBlogs();
      }
    } catch (err) {
      alert("Failed to delete the blog.");
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Blogs</h1>
          <p className="text-slate-500 text-sm mt-1">Search, edit, or delete existing articles.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/blog" target="_blank" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800">
            <ExternalLink className="h-4 w-4" /> View Live Blog
          </Link>
          <Link href="/admin/blogs" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700">
            <PlusCircle className="h-4 w-4" /> New Post
          </Link>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        
        <div className="relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-96 border border-slate-300 pl-10 pr-4 py-2.5 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        {isFetching ? (
          <div className="flex items-center gap-2 text-slate-500 py-8">
            <Loader2 className="h-5 w-5 animate-spin" /> Loading posts...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            {searchQuery ? "No blogs found matching your search." : "No blog posts created yet."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-sm font-bold text-slate-600 rounded-tl-lg">Title</th>
                  <th className="p-4 text-sm font-bold text-slate-600">Category</th>
                  <th className="p-4 text-sm font-bold text-slate-600">Status</th>
                  <th className="p-4 text-sm font-bold text-slate-600">Date</th>
                  <th className="p-4 text-sm font-bold text-slate-600 text-right rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog) => (
                  <tr key={blog.slug} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-slate-800 line-clamp-1">{blog.title}</div>
                      <div className="text-xs text-slate-500">/{blog.slug}</div>
                    </td>
                    <td className="p-4">
                      <span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md text-xs font-bold whitespace-nowrap">
                        {blog.category}
                      </span>
                    </td>
                    <td className="p-4">
                      {blog.status === "public" ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                          <Globe className="h-3 w-3" /> Public
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                          <Lock className="h-3 w-3" /> Private
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-slate-500 whitespace-nowrap">
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-right space-x-2 whitespace-nowrap">
                      <Link href={`/admin/blogs?edit=${blog.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
                        <Edit className="h-3.5 w-3.5" /> Edit
                      </Link>
                      <button onClick={() => handleDelete(blog.slug)} className="inline-flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-800 bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
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