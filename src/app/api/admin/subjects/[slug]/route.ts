import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: oldSlug } = await params;
    const body = await req.json();
    const db = await getDatabase();

    // If slug is changing, cascade to all notes in this subject
    if (body.slug && body.slug !== oldSlug) {
      const conflict = await db.collection("subjects").findOne({ slug: body.slug });
      if (conflict) {
        return NextResponse.json({ error: "New slug is taken" }, { status: 400 });
      }
      // Update notes to use the new subjectSlug
      await db
        .collection("notes")
        .updateMany({ subjectSlug: oldSlug }, { $set: { subjectSlug: body.slug } });
    }

    const result = await db.collection("subjects").updateOne(
      { slug: oldSlug },
      {
        $set: {
          name: body.name,
          slug: body.slug,
          status: body.status,
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const db = await getDatabase();

    const noteCount = await db.collection("notes").countDocuments({ subjectSlug: slug });
    if (noteCount > 0) {
      return NextResponse.json(
        { error: `Cannot delete: ${noteCount} topics exist under this subject. Delete them first.` },
        { status: 400 }
      );
    }

    await db.collection("subjects").deleteOne({ slug });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}