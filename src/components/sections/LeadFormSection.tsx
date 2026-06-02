'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(6, 'Phone is required'),
  timeline: z.string().min(1, 'Please select an option'),
  interest: z.string().min(1, 'Please select an option'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function LeadFormSection() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError('')
    try {
      const parsed = parsePhoneNumber(data.phone)
      const country = parsed?.country || 'Unknown'
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          country,
          whatsapp: data.phone,
          timeline: data.timeline,
          message: `Interest: ${data.interest}. ${data.message || ''}`,
        }),
      })
      if (res.ok) router.push('/thank-you')
      else setError('Something went wrong. Please try again.')
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="py-32 px-6 bg-[#2F4F3E]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">Get In Touch</p>
          <h2 className="font-serif text-5xl text-white mb-6">Request Property Information</h2>
          <p className="text-white/50">
            Fill out the form and our team will reach out within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              {...register('name')}
              placeholder="Your full name"
              className="w-full px-0 py-4 border-b border-white/20 bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-[#B8924A] transition-all"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Your email address"
              className="w-full px-0 py-4 border-b border-white/20 bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-[#B8924A] transition-all"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="border-b border-white/20 pb-1">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  international
                  defaultCountry="US"
                  placeholder="Your WhatsApp number"
                  className="phone-input-dark"
                />
              )}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <select
              {...register('interest')}
              className="w-full px-0 py-4 border-b border-white/20 bg-transparent text-white focus:outline-none focus:border-[#B8924A] transition-all"
            >
              <option value="" className="bg-[#2F4F3E]">Reason for interest</option>
              <option value="retirement" className="bg-[#2F4F3E]">Retirement home</option>
              <option value="vacation" className="bg-[#2F4F3E]">Vacation property</option>
              <option value="investment" className="bg-[#2F4F3E]">Investment</option>
              <option value="relocation" className="bg-[#2F4F3E]">Permanent relocation</option>
              <option value="other" className="bg-[#2F4F3E]">Other</option>
            </select>
            {errors.interest && <p className="text-red-400 text-xs mt-1">{errors.interest.message}</p>}
          </div>
          <div>
            <select
              {...register('timeline')}
              className="w-full px-0 py-4 border-b border-white/20 bg-transparent text-white focus:outline-none focus:border-[#B8924A] transition-all"
            >
              <option value="" className="bg-[#2F4F3E]">Your timeline</option>
              <option value="exploring" className="bg-[#2F4F3E]">Just exploring</option>
              <option value="12months" className="bg-[#2F4F3E]">Within 12 months</option>
              <option value="6months" className="bg-[#2F4F3E]">Within 6 months</option>
              <option value="now" className="bg-[#2F4F3E]">Ready to act now</option>
            </select>
            {errors.timeline && <p className="text-red-400 text-xs mt-1">{errors.timeline.message}</p>}
          </div>
          <div>
            <textarea
              {...register('message')}
              placeholder="Any questions or comments? (optional)"
              rows={3}
              className="w-full px-0 py-4 border-b border-white/20 bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-[#B8924A] transition-all resize-none"
            />
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B8924A] text-white py-4 text-sm tracking-widest uppercase hover:bg-[#D4A96A] transition-all duration-300 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Request Information'}
            </button>
          </div>
          <p className="text-center text-xs text-white/30">
            No spam. No pressure. We will reach out personally.
          </p>
        </form>
      </div>

      <style jsx global>{`
        .phone-input-dark {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 0;
        }
        .phone-input-dark .PhoneInputCountrySelect {
          background: transparent;
          border: none;
          color: white;
          font-size: 14px;
          cursor: pointer;
          outline: none;
        }
        .phone-input-dark .PhoneInputInput {
          background: transparent;
          border: none;
          color: white;
          font-size: 14px;
          outline: none;
          width: 100%;
        }
        .phone-input-dark .PhoneInputInput::placeholder {
          color: rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  )
}