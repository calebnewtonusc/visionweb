import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  orgName: z.string().min(1).max(200),
  orgDescription: z.string().min(10).max(2000),
  services: z.array(z.string()).min(1),
  timeline: z.string().min(1),
  contactName: z.string().min(1).max(200),
  contactEmail: z.string().email(),
  contactPhone: z.string().max(30).optional(),
  additionalNotes: z.string().max(2000).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = schema.safeParse(await req.json());
    if (!body.success) {
      return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
    }

    const { orgName, orgDescription, services, timeline, contactName, contactEmail, contactPhone, additionalNotes } = body.data;

    const emailBody = [
      `New Project Intake Submission`,
      ``,
      `Organization: ${orgName}`,
      `Description: ${orgDescription}`,
      `Services Requested: ${services.join(", ")}`,
      `Timeline: ${timeline}`,
      ``,
      `Contact: ${contactName}`,
      `Email: ${contactEmail}`,
      contactPhone ? `Phone: ${contactPhone}` : null,
      additionalNotes ? `\nAdditional Notes:\n${additionalNotes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "TTS Intake <noreply@usctts.com>",
          to: ["hello@usctts.com"],
          subject: `New Project Request: ${orgName}`,
          text: emailBody,
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[POST /api/intake]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
