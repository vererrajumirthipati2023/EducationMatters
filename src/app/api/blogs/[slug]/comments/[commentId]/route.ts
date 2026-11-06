import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";
import { ObjectId } from "mongodb";

// UPDATE A COMMENT
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string; commentId: string }> }
) {
  try {
    const { commentId } = await params;
    const body = await req.json();
    const db = await getDatabase();

    if (!body.content || !body.userEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const comment = await db.collection("comments").findOne({ _id: new ObjectId(commentId) });
    if (!comment) return NextResponse.json({ error: "Comment not found" }, { status: 404 });

    if (comment.userEmail !== body.userEmail) {
      return NextResponse.json({ error: "Unauthorized to edit this comment" }, { status: 403 });
    }

    await db.collection("comments").updateOne(
      { _id: new ObjectId(commentId) },
      { $set: { content: body.content } }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update comment" }, { status: 500 });
  }
}

// DELETE A COMMENT
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string; commentId: string }> }
) {
  try {
    const { commentId } = await params;
    const { userEmail } = await req.json();
    const db = await getDatabase();

    if (!userEmail) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const comment = await db.collection("comments").findOne({ _id: new ObjectId(commentId) });
    if (!comment) return NextResponse.json({ error: "Comment not found" }, { status: 404 });

    // Check DB for role securely
    const user = await db.collection("users").findOne({ email: userEmail });
    const isAdmin = user?.role === "admin";
    const isOwner = comment.userEmail === userEmail;

    if (!isAdmin && !isOwner) {
      return NextResponse.json({ error: "Unauthorized to delete this comment" }, { status: 403 });
    }

    await db.collection("comments").deleteOne({ _id: new ObjectId(commentId) });
    await db.collection("comments").deleteMany({ parentId: commentId });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete comment" }, { status: 500 });
  }
}