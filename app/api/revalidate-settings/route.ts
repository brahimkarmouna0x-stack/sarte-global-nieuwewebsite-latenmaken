import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

/**
 * On-demand revalidation for the site settings.
 *
 * Lets the Supabase admin (or a database hook/trigger) refresh the footer
 * instantly after editing settings, instead of waiting for the ISR window.
 * Protected by a shared secret.
 *
 *   POST /api/revalidate-settings?secret=YOUR_SECRET
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("settings", "max");

  return NextResponse.json({ ok: true, revalidated: true, tag: "settings" });
}
