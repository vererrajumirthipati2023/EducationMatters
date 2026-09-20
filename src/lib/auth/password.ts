import bcrypt from "bcryptjs";

export interface PasswordValidationResult {
  valid: boolean;
  errorMessage?: string;
}

export function validatePassword(password: string): PasswordValidationResult {
  if (!password || typeof password !== "string") {
    return {
      valid: false,
      errorMessage: "Password is required.",
    };
  }

  if (password.length < 8 || password.length > 128) {
    return {
      valid: false,
      errorMessage: "Password must be between 8 and 128 characters.",
    };
  }

  return { valid: true };
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  if (!password || !hash) return false;
  return bcrypt.compare(password, hash);
}
