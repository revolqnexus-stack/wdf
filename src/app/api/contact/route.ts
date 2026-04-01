import { NextRequest, NextResponse } from 'next/server'
import { AGENCY } from '@/lib/data'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, projectDescription } = body
    
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: 'Name, email, and project description are required' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }
    
    // Log the contact form submission (in production, you'd send this to email, CRM, etc.)
    console.log('=== New Contact Form Submission ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone:', body.phone || 'Not provided')
    console.log('Service Interest:', body.service || 'Not specified')
    console.log('Budget:', body.budget || 'Not specified')
    console.log('Project Description:', projectDescription)
    console.log('Submitted at:', new Date().toISOString())
    console.log('=====================================')
    
    // In a real implementation, you would:
    // 1. Send an email notification to the team
    // 2. Add the contact to a CRM (HubSpot, Airtable, etc.)
    // 3. Send an automated confirmation email to the customer
    // 4. Store in a database for tracking
    
    // For now, we'll just log it and return success
    
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.',
    })
    
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
