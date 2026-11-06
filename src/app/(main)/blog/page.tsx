import React from "react";
import Link from "next/link";
import { getDatabase } from "@/lib/db/mongodb";
import { BlogPost } from "@/lib/db/blog-types";
import { ArrowRight, Clock } from "lucide-react";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Blog & Placement Guides | Education Matters",
  description: "Read the latest articles on placement preparation, company hiring processes, and technical interview tips.",
};

export default async function BlogFeedPage() {
  const db = await getDatabase();
  
  // ONLY FETCH PUBLIC POSTS
  const posts = (await db.collection("blogs")
    .find({ status: "public" })
    .sort({ publishedAt: -1 })
    .toArray()) as unknown as BlogPost[];

  return (
    <div className="min-h-screen bg-[#f4f7fb] py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5c] tracking-tight">Education Matters Blog</h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
            Expert guides on placement processes, technical interviews, and aptitude preparation.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-slate-500">No articles published yet. Check back soon!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow group">
                <Link href={`/blog/${post.slug}`} className="block relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[#0f2b5c] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {post.category}
                  </div>
                </Link>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-lg sm:text-xl font-bold text-[#0f2b5c] leading-tight mb-3 hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}