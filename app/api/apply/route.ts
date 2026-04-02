import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  major: z.string().min(1).max(100),
  year: z.enum(["Freshman", "Sophomore", "Junior", "Senior", "Graduate"]),
  track: z.enum(["Building", "Consulting", "Growing", "Unsure"]),
  why: z.string().min(10).max(1000),
});

export async function POST(req: NextRequest) {
  try {
    const body = schema.safeParse(await req.json());
    if (!body.success) {
      return NextResponse.json(
        { error: body.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, major, year, track, why } = body.data;

    // Wire to Supabase: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
    // then uncomment:
    //
    // const { createClient } = await import("@supabase/supabase-js");
    // const supabase = createClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!,
    // );
    // const { error } = await supabase
    //   .from("applications")
    //   .insert({ name, email, major, year, track, why });
    // if (error) throw new Error(error.message);

    console.log("[apply] new application:", {
      name,
      email,
      major,
      year,
      track,
    });
    void why;

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
