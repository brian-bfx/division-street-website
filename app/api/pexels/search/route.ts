import { NextResponse } from "next/server";
import type { ImageAspect } from "@/content/images";
import { isPexelsEnabled } from "@/lib/pexels/config";
import { searchPexelsPhotos } from "@/lib/pexels/client";

export async function GET(request: Request) {
  if (!isPexelsEnabled()) {
    return NextResponse.json(
      { error: "Pexels is disabled. Set PEXELS_API_KEY in .env.local." },
      { status: 403 },
    );
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json({ error: "Missing q query parameter" }, { status: 400 });
  }

  const aspect = searchParams.get("aspect") as ImageAspect | null;
  const photos = await searchPexelsPhotos({
    query,
    aspect: aspect ?? undefined,
    perPage: 8,
  });

  return NextResponse.json({ query, photos });
}
