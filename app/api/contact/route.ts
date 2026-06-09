import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const { allowed } = checkRateLimit(`contact:${ip}`);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

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

    if (parsed.data.website) {
      return NextResponse.json({ success: true });
    }

    const result = await sendContactEmail(parsed.data);
    if (!result.ok) {
      return NextResponse.json(
        { error: "Unable to send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message. Please try again." },
      { status: 500 }
    );
  }
}
