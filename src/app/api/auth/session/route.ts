import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/db/mongodb";
import { getSessionFromCookies } from "@/lib/auth/session";

export async function GET(req: NextRequest) {
  try {
    const session = await getSessionFromCookies();
    if (!session) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const db = await getDatabase();
    const user = await db.collection("users").findOne({ email: session.email });

    if (!user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user._id.toString(),
        email: user.email,
        isAdmin: user.role === "admin", // Checks DB on refresh
      },
    });
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}