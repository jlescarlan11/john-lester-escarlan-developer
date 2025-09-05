// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const { name, company, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Create plain text and HTML versions
    const textContent = `
    ${message}`.trim();

    const htmlContent = `
      <div>
        <p style="color: #000; margin: 0; white-space: pre-wrap;">${message.replace(
          /\n/g,
          "<br>"
        )}</p>
        
        <div style="color: #666; font-size: 10px; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
          This message was sent from your portfolio contact form.<br>
          Reply directly to this email to respond to ${name}.
        </div>
      </div>
    `;

    await resend.emails.send({
      from: `${name} ${
        company ? `from ${company}` : ``
      } <onboarding@resend.dev>`,
      to: ["jlescarlan11@gmail.com"],
      subject: subject,
      replyTo: email,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
