import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const db = await getDatabase();

    if (!body.subjectSlug || !body.topicSlug) {
      return NextResponse.json({ error: "Subject and Topic slug are required" }, { status: 400 });
    }

    const existing = await db.collection("notes").findOne({ topicSlug: body.topicSlug });
    if (existing) {
      return NextResponse.json({ error: "A topic with this URL already exists." }, { status: 400 });
    }

    const siblings = await db
      .collection("notes")
      .find({
        subjectSlug: body.subjectSlug,
        parentTopicSlug: body.parentTopicSlug || null,
      })
      .sort({ position: -1 })
      .limit(1)
      .toArray();
    const nextPosition = (siblings[0]?.position ?? 0) + 1;

    await db.collection("notes").insertOne({
      subjectSlug: body.subjectSlug,
      topicSlug: body.topicSlug,
      topicName: body.topicName,
      parentTopicSlug: body.parentTopicSlug || null,
      content: body.content || "",
      quiz: body.quiz || [],
      position: Number(body.position) || nextPosition,
      metaTitle: body.metaTitle || null,
      metaDescription: body.metaDescription || null,
      status: body.status === "public" ? "public" : "private",
      publishedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save topic" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await getDatabase();
    const notes = await db.collection("notes")
      .find({})
      .sort({ subjectSlug: 1, position: 1 })
      .toArray();
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch topics" }, { status: 500 });
  }
}