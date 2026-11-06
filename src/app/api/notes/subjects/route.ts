import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";

export async function GET() {
  try {
    const db = await getDatabase();
    
    // Fetch directly from the 'subjects' collection
    const subjects = await db.collection("subjects")
      .find({ status: "public" }) // Only show subjects marked as public
      .sort({ order: 1, name: 1 }) // Sort by your custom order first, then alphabetically
      .project({ 
        slug: 1, 
        name: 1, 
        _id: 0 // We only need slug and name for the header dropdown
      }) 
      .toArray();
    
    return NextResponse.json(subjects);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch subjects" }, { status: 500 });
  }
}