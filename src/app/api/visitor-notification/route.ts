import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, timestamp } = await request.json();

    // Validate input
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedName = name.trim().slice(0, 50);
    const visitTime = new Date(timestamp).toLocaleString('en-US', {
      timeZone: 'America/Chicago', // Dallas timezone
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Create transporter (using Gmail - you'll need to configure this)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: '👋 Someone visited your portfolio!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">👋 Portfolio Visitor</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f8f9fa; border-left: 4px solid #667eea;">
            <h2 style="color: #333; margin-top: 0;">New Visitor Alert!</h2>
            <p style="font-size: 16px; color: #555; line-height: 1.6;">
              Someone just stopped by your portfolio website and wanted to let you know they were there!
            </p>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>👤 Name:</strong> ${sanitizedName}</p>
              <p><strong>🕒 Visit Time:</strong> ${visitTime}</p>
              <p><strong>🌐 Source:</strong> Portfolio Website</p>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              This notification was sent from your portfolio's "Let me know you were here" feature.
            </p>
          </div>
          
          <div style="padding: 15px; text-align: center; background-color: #e9ecef; color: #666; font-size: 12px;">
            Sent from your Next.js Portfolio • ${new Date().getFullYear()}
          </div>
        </div>
      `,
      text: `
        👋 Portfolio Visitor Alert!
        
        Someone just visited your portfolio website!
        
        Name: ${sanitizedName}
        Visit Time: ${visitTime}
        Source: Portfolio Website
        
        This notification was sent from your portfolio's visitor notification feature.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Notification sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending visitor notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}