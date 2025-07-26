import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Set SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, company, phone, services, budget, timeline, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !services.length || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Prepare email content for client (confirmation)
    const clientEmail = {
      to: email,
      from: "no-reply@devmaster.dev", // Replace with your verified sender email
      subject: "Thank You for Your Inquiry",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out to DevMaster. We've received your project inquiry and will get back to you within 24 hours.</p>
        <h3>Your Submission Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${company ? `<li><strong>Company:</strong> ${company}</li>` : ""}
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ""}
          <li><strong>Services:</strong> ${services.join(", ")}</li>
          ${budget ? `<li><strong>Budget:</strong> ${budget}</li>` : ""}
          ${timeline ? `<li><strong>Timeline:</strong> ${timeline}</li>` : ""}
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Best regards,<br>Muhammad Shah<br>DevMaster</p>
      `,
    };

    // Prepare email content for developer (notification)
    const developerEmail = {
      to: "contact@devmaster.dev", // Developer's email
      from: "no-reply@devmaster.dev", // Replace with your verified sender email
      subject: `New Project Inquiry: ${subject}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p>You have received a new inquiry from ${name}.</p>
        <h3>Submission Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${company ? `<li><strong>Company:</strong> ${company}</li>` : ""}
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ""}
          <li><strong>Services:</strong> ${services.join(", ")}</li>
          ${budget ? `<li><strong>Budget:</strong> ${budget}</li>` : ""}
          ${timeline ? `<li><strong>Timeline:</strong> ${timeline}</li>` : ""}
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(clientEmail),
      sgMail.send(developerEmail),
    ]);

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}