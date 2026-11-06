import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";
import { BlogPost } from "@/lib/db/blog-types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const db = await getDatabase();
    
    const slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const existing = await db.collection("blogs").findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: "A blog post with this title already exists." }, { status: 400 });
    }

    const newPost: BlogPost = {
      title: body.title,
      slug,
      category: body.category,
      excerpt: body.excerpt,
      content: body.content,
      coverImage: body.coverImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      author: body.author || "Education Matters",
      metaTitle: body.metaTitle || null,
      metaDescription: body.metaDescription || null,
      publishedAt: new Date(),
      status: body.status === "public" ? "public" : "private", // <-- NEW
    };

    await db.collection("blogs").insertOne(newPost);
    return NextResponse.json({ success: true, slug });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save blog" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await getDatabase();
    const blogs = await db.collection("blogs").find({}).sort({ publishedAt: -1 }).toArray();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}