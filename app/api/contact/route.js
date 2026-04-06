import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { name, email, projectType, message } = body;

  // Basic server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { message: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: 'Invalid email address.' },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact${projectType ? ` — ${projectType}` : ''} from ${name}`,
      html: `
        <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f5f3ef; border-radius: 12px;">
          <h2 style="font-family: Georgia, serif; color: #1A1714; margin-bottom: 4px;">New message from your portfolio</h2>
          <p style="color: #8E8880; font-size: 13px; margin-top: 0;">Received via rajaramyadav.com.np/contact</p>
          <hr style="border: none; border-top: 1px solid #E2DDD6; margin: 20px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #5C5650; font-size: 13px; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #1A1714; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5C5650; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #1A1714;">
                <a href="mailto:${email}" style="color: #00D9F5;">${email}</a>
              </td>
            </tr>
            ${projectType ? `
            <tr>
              <td style="padding: 8px 0; color: #5C5650; font-size: 13px;">Project Type</td>
              <td style="padding: 8px 0; color: #1A1714;">${projectType}</td>
            </tr>` : ''}
          </table>

          <hr style="border: none; border-top: 1px solid #E2DDD6; margin: 20px 0;" />

          <p style="color: #5C5650; font-size: 13px; margin-bottom: 8px;">Message</p>
          <div style="background: #fff; border: 1px solid #E2DDD6; border-radius: 8px; padding: 16px; color: #1A1714; line-height: 1.7; white-space: pre-wrap;">
${message}
          </div>

          <p style="color: #8E8880; font-size: 12px; margin-top: 24px;">
            Reply directly to this email — it goes to ${email}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
