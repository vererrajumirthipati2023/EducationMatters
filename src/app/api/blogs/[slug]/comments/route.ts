import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const db = await getDatabase();
    const comments = await db.collection("comments")
      .find({ blogSlug: slug })
      .sort({ createdAt: 1 })
      .toArray();
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const body = await req.json();
    const db = await getDatabase();

    if (!body.content || !body.userEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Look up the user in DB to check if they are admin
    const user = await db.collection("users").findOne({ email: body.userEmail });
    const isAdmin = user?.role === "admin";
    
    // Mask the name if admin
    const displayName = isAdmin ? "Education Matters" : body.userEmail.split("@")[0];

    const newComment = {
      _id: new ObjectId(),
      blogSlug: slug,
      userEmail: body.userEmail,
      userName: displayName, 
      content: body.content,
      parentId: body.parentId || null,
      likes: [],                       
      createdAt: new Date(),
    };

    await db.collection("comments").insertOne(newComment);
    return NextResponse.json({ success: true, comment: newComment });
  } catch (error) {
    return NextResponse.json({ error: "Failed to post comment" }, { status: 500 });
  }
}