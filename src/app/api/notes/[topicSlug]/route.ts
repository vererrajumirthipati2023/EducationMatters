import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ topicSlug: string }> }) {
  try {
    const { topicSlug: oldSlug } = await params;
    const body = await req.json();
    const db = await getDatabase();

    // If slug is changing, check for conflicts
    if (body.topicSlug && body.topicSlug !== oldSlug) {
      const conflict = await db.collection("notes").findOne({ topicSlug: body.topicSlug });
      if (conflict) {
        return NextResponse.json({ error: "New URL slug is already taken." }, { status: 400 });
      }
      
      // Cascade: update children that point to this folder
      await db.collection("notes").updateMany(
        { parentTopicSlug: oldSlug },
        { $set: { parentTopicSlug: body.topicSlug } }
      );
    }

    const updateData = {
      subjectSlug: body.subjectSlug,
      topicSlug: body.topicSlug,
      topicName: body.topicName,
      parentTopicSlug: body.parentTopicSlug || null,
      position: Number(body.position) || 1,
      metaTitle: body.metaTitle || null,
      metaDescription: body.metaDescription || null,
      content: body.content || "",
      quiz: body.quiz || [],
      status: body.status === "public" ? "public" : "private",
    };

    const result = await db.collection("notes").updateOne(
      { topicSlug: oldSlug },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update topic" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ topicSlug: string }> }) {
  try {
    const { topicSlug } = await params;
    const db = await getDatabase();

    // 1. Check if this topic has subtopics
    const childCount = await db.collection("notes").countDocuments({ parentTopicSlug: topicSlug });
    
    if (childCount > 0) {
      return NextResponse.json(
        { error: `Cannot delete. This folder contains ${childCount} subtopic(s). Delete them first.` },
        { status: 400 }
      );
    }

    // 2. Safe to delete
    const result = await db.collection("notes").deleteOne({ topicSlug });
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete topic" }, { status: 500 });
  }
}