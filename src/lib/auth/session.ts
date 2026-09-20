import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const AUTH_SECRET_STRING = process.env.AUTH_SECRET || "education_matters_default_jwt_secret_key_32bytes_long";
const SECRET_KEY = new TextEncoder().encode(AUTH_SECRET_STRING);

export const AUTH_COOKIE_NAME = "em_auth_session";
export const SESSION_DURATION_SECONDS = 7 * 24 * 60 * 60; // 7 days

export interface SessionPayload {
  sub: string; // userId
  email: string;
  referralSource?: string;
  [key: string]: unknown;
}

export async function createSessionToken(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(SECRET_KEY);
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY, {
      algorithms: ["HS256"],
    });
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export async function getSessionFromCookies(): Promise<SessionPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    if (!token) return null;
    return verifySessionToken(token);
  } catch {
    return null;
  }
}

export function getSessionCookieOptions() {
  return {
    name: AUTH_COOKIE_NAME,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  };
}
