import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const db = await getDatabase();

    if (!body.subjectSlug || !body.topicSlug) {
      return NextResponse.json({ error: "Subject and Topic slug are required" }, { status: 400 });
    }

    // Ensure topic slug is globally unique
    const existing = await db.collection("notes").findOne({ topicSlug: body.topicSlug });
    if (existing) {
      return NextResponse.json({ error: "A topic with this URL already exists." }, { status: 400 });
    }

    // Auto-assign position
    const siblingCount = await db.collection("notes").countDocuments({
      subjectSlug: body.subjectSlug,
      parentTopicSlug: body.parentTopicSlug || null,
    });

    await db.collection("notes").insertOne({
      subjectSlug: body.subjectSlug,
      topicSlug: body.topicSlug,
      topicName: body.topicName,
      parentTopicSlug: body.parentTopicSlug || null,
      metaTitle: body.metaTitle || null,
      metaDescription: body.metaDescription || null,
      content: body.content || "",
      quiz: body.quiz || [],
      position: Number(body.position) || (siblingCount + 1),
      status: body.status === "public" ? "public" : "private",
      publishedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save topic" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await getDatabase();
    // Sort by subject, then by position
    const notes = await db.collection("notes")
      .find({})
      .sort({ subjectSlug: 1, position: 1 })
      .toArray();
      
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch topics" }, { status: 500 });
  }
}