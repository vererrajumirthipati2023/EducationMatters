import { NextRequest, NextResponse } from "next/server";
import { getDatabase, UserDocument } from "@/lib/db/mongodb";
import { normalizeEmail } from "@/lib/auth/email-validation";
import { verifyPassword } from "@/lib/auth/password";
import { createSessionToken, getSessionCookieOptions } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/auth/rate-limit";

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 10 login attempts per 15 minutes per IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous-ip";
    const rateLimit = checkRateLimit(`login:${ip}`, 10, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many sign-in attempts. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || !body.email || !body.password) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 400 });
    }

    const cleanEmail = normalizeEmail(body.email);
    const rawPassword = body.password;

    const db = await getDatabase();
    const usersCollection = db.collection<UserDocument>("users");

    const user = await usersCollection.findOne({ email: cleanEmail });
    if (!user || !user.passwordHash) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const isMatch = await verifyPassword(rawPassword, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    // Update last login timestamp
    const now = new Date();
    await usersCollection.updateOne({ _id: user._id }, { $set: { lastLoginAt: now } });

    const userId = user._id ? user._id.toString() : "";
    const token = await createSessionToken({
      sub: userId,
      email: user.email,
      referralSource: user.referralSource,
    });

    const cookieOptions = getSessionCookieOptions();
    const response = NextResponse.json({
      success: true,
      user: {
        id: userId,
        email: user.email,
        referralSource: user.referralSource,
      },
    });

    response.cookies.set(cookieOptions.name, token, cookieOptions);
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
