import { NextResponse } from "next/server";
import { sendSignupEmail } from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { signupSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const { allowed } = checkRateLimit(`signup:${ip}`);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: unknown = await request.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      return NextResponse.json({ error: "Validation failed", fieldErrors }, { status: 400 });
    }

    // Honeypot — bots fill hidden fields
    if (parsed.data.website) {
      return NextResponse.json({ success: true });
    }

    const result = await sendSignupEmail(parsed.data);
    if (!result.ok) {
      return NextResponse.json(
        { error: "Unable to send your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your request. Please try again." },
      { status: 500 }
    );
  }
}
