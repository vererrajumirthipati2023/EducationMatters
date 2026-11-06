import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function GET(req: NextRequest) {
  try {
    const subject = req.nextUrl.searchParams.get("subject");
    if (!subject) {
      return NextResponse.json([]);
    }

    const db = await getDatabase();
    const parents = await db
      .collection("notes")
      .find({
        subjectSlug: subject,
        parentTopicSlug: null, // only main topics can be parents
      })
      .sort({ position: 1 })
      .project({ topicSlug: 1, topicName: 1, subjectSlug: 1, _id: 0 })
      .toArray();

    return NextResponse.json(parents);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch parents" },
      { status: 500 }
    );
  }
}