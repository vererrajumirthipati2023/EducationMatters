import { NextRequest, NextResponse } from "next/server";
import { getDatabase, UserDocument } from "@/lib/db/mongodb";
import { validateEmail } from "@/lib/auth/email-validation";
import { validatePassword, hashPassword } from "@/lib/auth/password";
import { createSessionToken, getSessionCookieOptions } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/auth/rate-limit";

const ALLOWED_REFERRAL_SOURCES = [
  "youtube",
  "google",
  "friend",
  "college",
  "instagram",
  "telegram",
  "linkedin",
  "other",
];

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 5 registration attempts per 15 minutes per IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous-ip";
    const rateLimit = checkRateLimit(`register:${ip}`, 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many registration attempts. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const { email, password, confirmPassword, referralSource, referralSourceOther } = body;

    // 1. Validate Email
    const emailResult = await validateEmail(email);
    if (!emailResult.valid) {
      return NextResponse.json(
        { error: emailResult.errorMessage || "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 2. Validate Password
    const passwordResult = validatePassword(password);
    if (!passwordResult.valid) {
      return NextResponse.json(
        { error: passwordResult.errorMessage || "Password must be between 8 and 128 characters." },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
    }

    // 3. Validate Referral Source
    const normalizedReferral = (referralSource || "").toLowerCase().trim();
    if (!ALLOWED_REFERRAL_SOURCES.includes(normalizedReferral)) {
      return NextResponse.json(
        { error: "Please select how you heard about Education Matters." },
        { status: 400 }
      );
    }

    let cleanReferralOther: string | null = null;
    if (normalizedReferral === "other") {
      cleanReferralOther = (referralSourceOther || "").trim();
      if (!cleanReferralOther || cleanReferralOther.length < 2) {
        return NextResponse.json(
          { error: "Please tell us how you heard about us." },
          { status: 400 }
        );
      }
      if (cleanReferralOther.length > 200) {
        cleanReferralOther = cleanReferralOther.substring(0, 200);
      }
    }

    // 4. Database Connection & Uniqueness Check
    const db = await getDatabase();
    const usersCollection = db.collection<UserDocument>("users");

    const existingUser = await usersCollection.findOne({ email: emailResult.normalizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // 5. Hash Password & Create User
    const passwordHash = await hashPassword(password);
    const now = new Date();

    const newUserDoc: UserDocument = {
      email: emailResult.normalizedEmail,
      passwordHash,
      referralSource: normalizedReferral,
      referralSourceOther: cleanReferralOther,
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now,
    };

    let insertedId: string;
    try {
      const result = await usersCollection.insertOne(newUserDoc);
      insertedId = result.insertedId.toString();
    } catch (err: unknown) {
      // Catch MongoDB duplicate key error code 11000 in case of race condition
      const code = (err as { code?: number })?.code;
      if (code === 11000) {
        return NextResponse.json(
          { error: "An account with this email already exists." },
          { status: 409 }
        );
      }
      throw err;
    }

    // 6. Create Session Token & Set Cookie
    const token = await createSessionToken({
      sub: insertedId,
      email: emailResult.normalizedEmail,
      referralSource: normalizedReferral,
    });

    const cookieOptions = getSessionCookieOptions();
    const response = NextResponse.json(
      {
        success: true,
        user: {
          id: insertedId,
          email: emailResult.normalizedEmail,
          referralSource: normalizedReferral,
        },
      },
      { status: 201 }
    );

    response.cookies.set(cookieOptions.name, token, cookieOptions);
    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
