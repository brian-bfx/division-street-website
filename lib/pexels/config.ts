/** Pexels is dev-first: on by default in development when an API key is set. */
export function isPexelsEnabled(): boolean {
  if (!process.env.PEXELS_API_KEY) return false;
  if (process.env.USE_PEXELS === "false") return false;
  return (
    process.env.USE_PEXELS === "true" ||
    process.env.NODE_ENV === "development"
  );
}

export function getPexelsApiKey(): string {
  const key = process.env.PEXELS_API_KEY;
  if (!key) {
    throw new Error("PEXELS_API_KEY is not set");
  }
  return key;
}
