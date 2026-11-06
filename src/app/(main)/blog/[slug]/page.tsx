import { getDatabase } from "@/lib/db/mongodb";
import { BlogPost } from "@/lib/db/blog-types";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, User, Calendar } from "lucide-react";
import Link from "next/link";
import { BlogComments } from "@/components/blog/BlogComments"; // <-- Added Import

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const db = await getDatabase();
  
  // Only fetch public posts for metadata
  const post = await db.collection("blogs").findOne({ slug, status: "public" }) as unknown as BlogPost;
  
  if (!post) return { title: "Article Not Found" };
  
  return {
    title: post.metaTitle || `${post.title} | Education Matters`,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `/blog/${slug}`,
      images: [{ url: post.coverImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c" }],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const db = await getDatabase();
  
  // Fetch the specific public post
  const post = await db.collection("blogs").findOne({ slug, status: "public" }) as unknown as BlogPost;

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-20 overflow-x-hidden">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative bg-slate-900">
        <img 
          src={post.coverImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
            <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-block mb-4">
              {post.category || "Article"}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" /> {post.author || "Education Matters"}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> 
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 min-w-0">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        {/* Renders the Rich Text from Admin */}
        <div 
          className="note-content prose prose-lg prose-slate max-w-none w-full break-normal overflow-x-auto prose-headings:text-[#0f2b5c] prose-a:text-indigo-600 prose-img:rounded-xl prose-pre:bg-slate-900" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Comment Section */}
        <BlogComments blogSlug={slug} />
        
      </div>
    </article>
  );
}