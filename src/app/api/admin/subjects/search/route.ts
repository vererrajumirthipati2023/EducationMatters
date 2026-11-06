import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  const db = await getDatabase();
  const subjects = await db
    .collection("subjects")
    .find({ name: { $regex: q, $options: "i" } })
    .sort({ order: 1 })
    .limit(50)
    .toArray();
  return NextResponse.json(subjects);
}