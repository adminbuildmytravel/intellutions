import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // max 5 requests
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitMap.get(identifier)

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false
  }

  userLimit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitize = (str: string) => str.trim().slice(0, 10000)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Intellutions Contact <onboarding@resend.dev>',
      to: process.env.TO_EMAIL || 'info@intellutions.ae',
      replyTo: email,
      subject: `New Contact Form Submission from ${sanitize(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2e2577; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: #f4f7fb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff9f1c;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitize(name)}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitize(email)}">${sanitize(email)}</a></p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">${sanitize(message)}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from the Intellutions contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${sanitize(name)}
        Email: ${sanitize(email)}
        
        Message:
        ${sanitize(message)}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

