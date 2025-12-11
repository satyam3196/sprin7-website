import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, interest, message } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
New Demo Request from Sprin7 Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Interest: ${interest}
Message: ${message || 'No message provided'}

---
Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
    `.trim();

    // For now, we'll just log it. You can integrate with an email service later
    console.log('Demo Request Received:', emailContent);

    // TODO: Integrate with email service (e.g., SendGrid, AWS SES, Nodemailer)
    // Example with SendGrid:
    // await sendEmail({
    //   to: 'team@sprin7.com',
    //   subject: `New Demo Request from ${name}`,
    //   text: emailContent
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request received! We will contact you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
