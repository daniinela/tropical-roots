// src/app/api/leads/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { leadSchema } from '@/lib/validations/lead'
import {
  FROM_EMAIL,
  FROM_NAME,
  notificationEmailTemplate,
  confirmationEmailTemplate,
} from '@/lib/email/templates'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY!)
const NOTIFICATION_TO = process.env.NOTIFICATION_EMAIL!

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const result = leadSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const lead = result.data
    const country = body.country || 'Unknown'

    const { error: dbError } = await supabase.from('leads').insert([{
      name: lead.name,
      email: lead.email,
      whatsapp: lead.whatsapp,
      country,
      interest_type: lead.interest_type,
      message: lead.message || null,
      source: 'website',
      status: 'new',
    }])

    if (dbError) {
      console.error('Supabase error:', dbError)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    const notification = notificationEmailTemplate({ ...lead, country })
    await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: NOTIFICATION_TO,
      replyTo: lead.email,
      subject: notification.subject,
      html: notification.html,
    })

    const confirmation = confirmationEmailTemplate(lead.name)
    await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: NOTIFICATION_TO,
      replyTo: lead.email,
      subject: `[FOR: ${lead.email}] ${confirmation.subject}`,
      html: confirmation.html,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}