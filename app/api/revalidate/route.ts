import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { env } from "@/config/env";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || body.secret !== env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const path = typeof body.path === "string" ? body.path : "/";

  try {
    revalidatePath(path, body.type === "layout" ? "layout" : "page");
    return NextResponse.json({
      revalidated: true,
      path,
      timestamp: Date.now(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 }
    );
  }
}
