type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateLimitEntry>();

/**
 * Best-effort in-memory rate limit for serverless.
 * Resets per instance — good enough to catch casual spam bursts.
 */
export function checkRateLimit(
  key: string,
  limit = 5,
  windowMs = 60_000
): { allowed: boolean } {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (entry.count >= limit) {
    return { allowed: false };
  }

  entry.count += 1;
  return { allowed: true };
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}
