// src/lib/email/templates.ts
// ================================================
// CHANGE WHEN DOMAIN IS READY:
// FROM_EMAIL = 'info@tropicalroots.co'
// REPLY_TO = 'info@tropicalroots.co'
// ================================================

export const FROM_EMAIL = 'onboarding@resend.dev'
export const FROM_NAME = 'Tropical Roots'
export const REPLY_TO = 'onboarding@resend.dev'

const WA_LINK = 'https://wa.me/573152693434?text=Hi%2C%20I%20just%20visited%20Tropical%20Roots%20and%20I%27m%20interested%20in%20Hacienda%20San%20Antonio.%20Could%20you%20please%20send%20me%20more%20information%3F'

export function notificationEmailTemplate(lead: {
  name: string
  email: string
  whatsapp: string
  country: string
  interest_type: string
  message?: string
}) {
  const interestLabels: Record<string, string> = {
    retirement: 'Retirement Home',
    vacation_home: 'Vacation Property',
    investment: 'Investment',
    relocation: 'Permanent Relocation',
  }

  return {
    subject: `New Lead — ${lead.name} from ${lead.country}`,
    html: `
      <div style="font-family:Georgia,serif;background:#FAF7F2;padding:32px 0;">
        <div style="max-width:600px;margin:0 auto;background:white;border:1px solid #E8DFD0;">

          <div style="background:#2D3B2A;padding:40px 48px;text-align:center;">
            <p style="color:#B8924A;font-size:11px;letter-spacing:4px;text-transform:uppercase;margin:0 0 8px 0;">New Lead</p>
            <h1 style="color:white;font-size:24px;margin:0;font-weight:normal;">Tropical Roots</h1>
          </div>

          <div style="padding:48px;">
            <h2 style="color:#2D3B2A;font-size:20px;margin:0 0 32px 0;font-weight:normal;">
              ${lead.name} is interested in Hacienda San Antonio
            </h2>

            <table style="width:100%;border-collapse:collapse;">
              ${[
                ['Name', lead.name],
                ['Email', lead.email],
                ['WhatsApp', lead.whatsapp],
                ['Country', lead.country],
                ['Interest', interestLabels[lead.interest_type] || lead.interest_type],
                ['Message', lead.message || 'Not provided'],
              ].map(([label, value]) => `
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #E8DFD0;color:#B8924A;font-size:11px;letter-spacing:2px;text-transform:uppercase;width:35%;">${label}</td>
                  <td style="padding:12px 0;border-bottom:1px solid #E8DFD0;color:#2D3B2A;font-size:14px;">${value}</td>
                </tr>
              `).join('')}
            </table>

            <div style="margin-top:32px;display:flex;gap:12px;">
              <a href="mailto:${lead.email}" style="background:#2D3B2A;color:white;padding:12px 24px;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;">
                Reply by Email
              </a>
              <a href="https://wa.me/${lead.whatsapp.replace(/\D/g,'')}" style="background:#B8924A;color:white;padding:12px 24px;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;">
                Open WhatsApp
              </a>
            </div>
          </div>

          <div style="background:#2D3B2A;padding:24px 48px;text-align:center;">
            <p style="color:#B8924A;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0;">
              Tropical Roots — Lead Notification
            </p>
          </div>
        </div>
      </div>
    `
  }
}

export function confirmationEmailTemplate(name: string) {
  return {
    subject: 'Thank you for your interest in Tropical Roots',
    html: `
      <div style="font-family:Georgia,serif;background:#FAF7F2;padding:32px 0;">
        <div style="max-width:600px;margin:0 auto;background:white;border:1px solid #E8DFD0;">

          <div style="background:#2D3B2A;padding:48px;text-align:center;">
            <p style="color:#B8924A;font-size:11px;letter-spacing:4px;text-transform:uppercase;margin:0 0 12px 0;">Hacienda San Antonio</p>
            <h1 style="color:white;font-size:32px;margin:0 0 12px 0;font-weight:normal;">Tropical Roots</h1>
            <p style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0;">
              Live Slow. Live Free. Live Tropical.
            </p>
          </div>

          <div style="padding:48px;">
            <p style="color:#B8924A;font-size:11px;letter-spacing:4px;text-transform:uppercase;margin:0 0 16px 0;">Welcome</p>
            <h2 style="color:#2D3B2A;font-size:28px;margin:0 0 24px 0;font-weight:normal;line-height:1.3;">
              Thank you, ${name}.<br />Your journey begins here.
            </h2>
            <p style="color:#4A5E45;font-size:15px;line-height:1.8;margin:0 0 20px 0;">
              We have received your information and we are genuinely excited to share Hacienda San Antonio with you.
            </p>
            <p style="color:#4A5E45;font-size:15px;line-height:1.8;margin:0 0 36px 0;">
              This is not just a property — it is 100 years of Colombian history, surrounded by nature, waiting for someone who truly appreciates it.
            </p>

            <div style="border-top:1px solid #E8DFD0;border-bottom:1px solid #E8DFD0;padding:32px 0;margin:0 0 36px 0;">
              <p style="color:#B8924A;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 24px 0;">What happens next</p>
              ${[
                ['Within 24 hours', 'A member of our team will reach out personally via email or WhatsApp.'],
                ['Discovery Conversation', 'We will take the time to understand exactly what you are looking for.'],
                ['Full Property Package', 'We will send you detailed photos, information and legal documentation.'],
                ['Visit Colombia', 'When you are ready, we will arrange a personal visit to the estate.'],
              ].map(([step, desc], i) => `
                <div style="display:flex;gap:20px;margin-bottom:20px;align-items:flex-start;">
                  <span style="color:#B8924A;font-size:20px;font-family:Georgia,serif;min-width:32px;line-height:1.4;">0${i + 1}</span>
                  <div>
                    <p style="color:#2D3B2A;font-size:14px;margin:0 0 4px 0;font-weight:bold;">${step}</p>
                    <p style="color:#4A5E45;font-size:13px;margin:0;line-height:1.6;">${desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <div style="background:#f5f0e8;border-left:3px solid #B8924A;padding:24px;margin-bottom:24px;">
              <p style="color:#B8924A;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0 0 10px 0;">
                Priority Contact
              </p>
              <p style="color:#2D3B2A;font-size:15px;margin:0 0 6px 0;">
                <a href="${WA_LINK}" style="color:#2D3B2A;text-decoration:none;font-weight:bold;">
                  WhatsApp: +57 315 269 3434
                </a>
              </p>
              <p style="color:#4A5E45;font-size:12px;margin:0;line-height:1.6;">
                Message us on WhatsApp and mention <strong>Tropical Roots</strong> for priority response.
              </p>
              <div style="margin-top:16px;">
                <a href="${WA_LINK}" style="background:#2D3B2A;color:white;padding:10px 20px;text-decoration:none;font-size:11px;letter-spacing:2px;text-transform:uppercase;">
                  Message Us on WhatsApp
                </a>
              </div>
            </div>

            <p style="color:#4A5E45;font-size:13px;margin:0;line-height:1.8;opacity:0.7;">
              You can also reply directly to this email and we will get back to you as soon as possible.
            </p>
          </div>

          <div style="background:#2D3B2A;padding:32px 48px;text-align:center;">
            <p style="color:white;font-size:18px;margin:0 0 8px 0;font-family:Georgia,serif;">Tropical Roots</p>
            <p style="color:#B8924A;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin:0 0 16px 0;">
              Ginebra · Valle del Cauca · Colombia
            </p>
            <p style="color:rgba(255,255,255,0.3);font-size:11px;margin:0;">
              Live Slow. Live Free. Live Tropical.
            </p>
          </div>
        </div>
      </div>
    `
  }
}