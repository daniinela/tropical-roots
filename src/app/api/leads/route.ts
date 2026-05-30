import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, country, whatsapp, timeline, message } = body

  const { error } = await supabase.from('leads').insert([
    { name, email, country, whatsapp, timeline, message }
  ])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  await resend.emails.send({
    from: 'Tropical Roots <onboarding@resend.dev>',
    to: process.env.NOTIFICATION_EMAIL!,
    subject: `New lead: ${name} from ${country}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#2D3B2A;padding:24px">
        <h2 style="color:#B8924A">New Lead - Tropical Roots</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>WhatsApp:</b> ${whatsapp}</p>
        <p><b>Timeline:</b> ${timeline}</p>
        <p><b>Message:</b> ${message || 'No message'}</p>
      </div>
    `,
  })

  return NextResponse.json({ success: true })
}