import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, whatsapp, subject, message } = await req.json();

        // 1. Transporter setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 2. Premium Email Template for Admin (You)
        const mailToAdmin = {
            from: `"Portfolio Alerts" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `🚀 New Inquiry: ${subject}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
                    <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: -0.5px;">New Project Inquiry</h1>
                    </div>
                    <div style="padding: 40px; color: #1e293b; line-height: 1.6;">
                        <p style="margin-top: 0;">You have received a new message from your portfolio website contact form.</p>
                        <div style="background: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #f1f5f9;">
                            <p style="margin: 0 0 10px 0;"><strong>Client Name:</strong> ${name}</p>
                            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
                            <p style="margin: 0 0 10px 0;"><strong>WhatsApp:</strong> ${whatsapp || 'Not provided'}</p>
                            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
                            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                            <p style="margin: 0;"><strong>Message Brief:</strong></p>
                            <p style="color: #475569; font-style: italic;">${message}</p>
                        </div>
                    </div>
                    <div style="background: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b;">
                        This inquiry was sent from Easin Arafat's Portfolio System.
                    </div>
                </div>
            `,
        };

        // 3. Premium Feedback Email for the Client (User)
        const mailToUser = {
            from: `"Easin Arafat" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Inquiry Received - ScaleUp Web`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; background-color: #ffffff;">
                    <div style="background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); padding: 40px; text-align: center;">
                        <h2 style="color: #ffffff; margin: 0; font-weight: 800; font-size: 28px;">Hello, ${name}!</h2>
                        <p style="color: #e0e7ff; margin-top: 10px; font-size: 16px;">We've received your message successfully.</p>
                    </div>
                    <div style="padding: 40px; color: #334155; line-height: 1.8;">
                        <p style="font-size: 16px;">Thank you for reaching out. I've received your inquiry regarding <strong>"${subject}"</strong>. My team at <b>ScaleUp Web</b> and I will review your requirements and get back to you within 24 hours.</p>
                        
                        <div style="margin-top: 40px; padding: 30px; background: #f8fafc; border-radius: 16px; border-left: 4px solid #2563eb;">
                            <h4 style="margin: 0 0 15px 0; color: #1e293b; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Contact Details</h4>
                            <p style="margin: 5px 0; font-size: 14px;"><strong>Agency:</strong> ScaleUp Web</p>
                            <p style="margin: 5px 0; font-size: 14px;"><strong>Developer:</strong> Easin Arafat</p>
                            <p style="margin: 5px 0; font-size: 14px;"><strong>Website:</strong> <a href="https://scaleupweb.netlify.app/" style="color: #2563eb; text-decoration: none;">scaleupweb.netlify.app</a></p>
                            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px dashed #cbd5e1;">
                                <p style="margin: 0; font-size: 14px; color: #dc2626;"><strong>Emergency Contact:</strong> +880 1645 650504</p>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 20px 40px 40px 40px; text-align: center;">
                        <p style="font-size: 14px; color: #94a3b8; margin-bottom: 20px;">Stay connected on our professional networks</p>
                        <div style="display: inline-block;">
                            <a href="https://linkedin.com/in/easin-arafat" style="text-decoration: none; padding: 10px 20px; background: #0077b5; color: white; border-radius: 8px; font-size: 12px; font-weight: bold; margin: 5px;">LinkedIn</a>
                            <a href="https://github.com/Easin-Dev" style="text-decoration: none; padding: 10px 20px; background: #1e293b; color: white; border-radius: 8px; font-size: 12px; font-weight: bold; margin: 5px;">GitHub</a>
                        </div>
                    </div>
                    <div style="background: #0f172a; padding: 20px; text-align: center; color: #475569; font-size: 11px;">
                        &copy; 2026 ScaleUp Web. All rights reserved.
                    </div>
                </div>
            `,
        };

        // Parallel execution
        await Promise.all([
            transporter.sendMail(mailToAdmin),
            transporter.sendMail(mailToUser)
        ]);

        return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
    }
}