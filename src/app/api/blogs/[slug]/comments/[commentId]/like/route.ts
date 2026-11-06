import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";
import { ObjectId } from "mongodb";

export async function POST(
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

    const hasLiked = comment.likes?.includes(userEmail);

    if (hasLiked) {
      await db.collection("comments").updateOne(
        { _id: new ObjectId(commentId) },
        { $pull: { likes: userEmail } as any }
      );
    } else {
      await db.collection("comments").updateOne(
        { _id: new ObjectId(commentId) },
        { $addToSet: { likes: userEmail } }
      );
    }

    return NextResponse.json({ success: true, liked: !hasLiked });
  } catch (error) {
    return NextResponse.json({ error: "Failed to like comment" }, { status: 500 });
  }
}