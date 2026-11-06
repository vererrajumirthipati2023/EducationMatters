import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const db = await getDatabase();
    const note = await db.collection("notes").findOne({ topicSlug: slug });

    if (!note) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }

    // Convert ObjectId to string so Next.js doesn't crash
    const safeNote = {
      ...note,
      _id: note._id.toString(),
      // Fallback for older notes that don't have subjectSlug
      subjectSlug: note.subjectSlug || (note.subjectName ? note.subjectName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") : ""),
      position: note.position || note.order || 1,
    };

    return NextResponse.json(safeNote);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch note" },
      { status: 500 }
    );
  }
}