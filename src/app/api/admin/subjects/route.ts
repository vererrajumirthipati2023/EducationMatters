import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function POST(req: NextRequest) {
  try {
    const { name, slug, status } = await req.json();
    const db = await getDatabase();

    if (!name || !slug) {
      return NextResponse.json(
        { error: "Name and slug are required" },
        { status: 400 }
      );
    }

    const existing = await db.collection("subjects").findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { error: `Slug "${slug}" is already taken by another subject` },
        { status: 400 }
      );
    }

    // Auto-assign next order
    const last = await db
      .collection("subjects")
      .find({})
      .sort({ order: -1 })
      .limit(1)
      .toArray();
    const nextOrder = (last[0]?.order ?? 0) + 1;

    await db.collection("subjects").insertOne({
      name,
      slug,
      status: status === "public" ? "public" : "private",
      order: nextOrder,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to create subject" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await getDatabase();
    const subjects = await db
      .collection("subjects")
      .find({})
      .sort({ order: 1 })
      .toArray();
    return NextResponse.json(subjects);
  } catch {
    return NextResponse.json({ error: "Failed to fetch subjects" }, { status: 500 });
  }
}