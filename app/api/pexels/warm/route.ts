import { NextResponse } from "next/server";
import { isPexelsEnabled } from "@/lib/pexels/config";
import { warmPexelsCache } from "@/lib/pexels/resolve";

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Warm cache is dev-only" }, { status: 403 });
  }

  if (!isPexelsEnabled()) {
    return NextResponse.json(
      { error: "Pexels is disabled. Set PEXELS_API_KEY in .env.local." },
      { status: 403 },
    );
  }

  const summary = await warmPexelsCache();
  return NextResponse.json(summary);
}
