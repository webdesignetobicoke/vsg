import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure your email settings here
// For development, you can use Ethereal Email (fake SMTP service)
// For production, use your actual SMTP service (Gmail, Sendgrid, etc.)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, organization, email, phone, role, type, message } = body;

    // Validate required fields
    if (!name || !organization || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a transporter using your email service
    // IMPORTANT: Replace these credentials with your actual email service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content to Michael
    const emailToMichael = `
      <h2>New VSG Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Role:</strong> ${role || 'Not provided'}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
    `;

    // Email content for confirmation to the user
    const emailToUser = `
      <h2>Thank you for contacting Villani Sports Group</h2>
      <p>Hi ${name},</p>
      <p>We've received your inquiry and it has been sent to michael@villanisportsgroup.com.</p>
      <p>Michael Villani will personally follow up within 1–2 business days to schedule your introductory discussion.</p>
      <p>Best regards,<br>Villani Sports Group Team</p>
    `;

    // Send email to Michael
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'michael@villanisportsgroup.com',
      subject: `New VSG Inquiry from ${name}`,
      html: emailToMichael,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'We received your inquiry - Villani Sports Group',
      html: emailToUser,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
