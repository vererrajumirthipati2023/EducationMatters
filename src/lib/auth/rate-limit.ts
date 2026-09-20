/**
 * In-memory sliding window rate limiter.
 * Note: Suitable for single-instance or development. For large distributed production,
 * a Redis-backed store would be used.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Cleanup stale records periodically (every 10 minutes)
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < 15 * 60 * 1000);
      if (record.timestamps.length === 0) {
        rateLimitMap.delete(key);
      }
    }
  }, 10 * 60 * 1000);
}

export function checkRateLimit(
  identifier: string,
  maxAttempts: number,
  windowMs: number
): { allowed: boolean; remainingAttempts: number; retryAfterSeconds: number } {
  const now = Date.now();
  const windowStart = now - windowMs;

  let record = rateLimitMap.get(identifier);
  if (!record) {
    record = { timestamps: [] };
    rateLimitMap.set(identifier, record);
  }

  // Filter timestamps within current window
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= maxAttempts) {
    const oldestTimestamp = record.timestamps[0];
    const retryAfterSeconds = Math.ceil((oldestTimestamp + windowMs - now) / 1000);
    return {
      allowed: false,
      remainingAttempts: 0,
      retryAfterSeconds: Math.max(1, retryAfterSeconds),
    };
  }

  record.timestamps.push(now);
  return {
    allowed: true,
    remainingAttempts: maxAttempts - record.timestamps.length,
    retryAfterSeconds: 0,
  };
}
