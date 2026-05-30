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

  await resend.emails.send({
    from: 'Tropical Roots <onboarding@resend.dev>',
    to: process.env.NOTIFICATION_EMAIL!,
    replyTo: email,
    subject: `Welcome to Tropical Roots, ${name}!`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#2D3B2A;padding:32px;background:#FAF7F2">
        <div style="text-align:center;margin-bottom:32px">
          <h1 style="color:#B8924A;font-size:28px;margin-bottom:8px">Tropical Roots</h1>
          <p style="color:#4A5E45;font-size:12px;letter-spacing:4px;text-transform:uppercase">Live Slow. Live Free. Live Tropical.</p>
        </div>
        <h2 style="color:#2D3B2A;font-size:22px;margin-bottom:16px">Hi ${name}, welcome.</h2>
        <p style="color:#4A5E45;line-height:1.8;margin-bottom:16px">
          Thank you for your interest in living in Colombia. We received your information and we are excited to help you explore this incredible country.
        </p>
        <p style="color:#4A5E45;line-height:1.8;margin-bottom:24px">
          Here is what happens next:
        </p>
        <div style="background:white;padding:24px;border-left:3px solid #B8924A;margin-bottom:24px">
          <p style="margin:0 0 12px 0;color:#2D3B2A"><b>1.</b> We will review your information personally.</p>
          <p style="margin:0 0 12px 0;color:#2D3B2A"><b>2.</b> We will reach out within 24 hours via email or WhatsApp.</p>
          <p style="margin:0;color:#2D3B2A"><b>3.</b> We will answer all your questions about life in Colombia.</p>
        </div>
        <p style="color:#4A5E45;line-height:1.8;margin-bottom:32px">
          In the meantime, explore our Colombia guide to learn about regions, costs, visas and lifestyle.
        </p>
        <div style="text-align:center;margin-bottom:32px">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/colombia" style="background:#B8924A;color:white;padding:14px 32px;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase">
            Explore Colombia
          </a>
        </div>
        <div style="border-top:1px solid #E8DFD0;padding-top:24px;text-align:center">
          <p style="color:#4A5E45;font-size:12px;margin:0">Tropical Roots Colombia</p>
          <p style="color:#B8924A;font-size:11px;letter-spacing:2px;margin:4px 0 0 0">LIVE SLOW. LIVE FREE. LIVE TROPICAL.</p>
        </div>
      </div>
    `,
  })

  return NextResponse.json({ success: true })
}