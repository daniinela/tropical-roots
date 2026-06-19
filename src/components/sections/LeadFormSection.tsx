'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { leadSchema, type LeadFormData } from '@/lib/validations/lead'

const inputClass = "w-full px-0 py-4 border-b border-white/20 bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-[#B8924A] transition-all text-sm"
const selectClass = "w-full px-0 py-4 border-b border-white/20 bg-transparent text-white focus:outline-none focus:border-[#B8924A] transition-all text-sm"
const errorClass = "text-red-400 text-xs mt-1"

export default function LeadFormSection() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const { register, handleSubmit, control, formState: { errors } } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema)
  })

  const onSubmit = async (data: LeadFormData) => {
    setLoading(true)
    setError('')
    try {
      const parsed = parsePhoneNumber(data.whatsapp)
      const country = parsed?.country || 'Unknown'
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, country }),
      })
      if (res.ok) {
        router.push('/thank-you')
      } else {
        setError('Something went wrong. Please try again.')
      }
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
          <p className="text-white/50 text-lg">Our team will reach out within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <input {...register('name')} placeholder="Your full name" className={inputClass} />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>
          <div>
            <input {...register('email')} type="email" placeholder="Your email address" className={inputClass} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>
          <div className="border-b border-white/20 focus-within:border-[#B8924A] transition-all">
            <Controller
              name="whatsapp"
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
            {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
          </div>
          <div>
            <select {...register('interest_type')} className={selectClass}>
              <option value="" className="bg-[#2F4F3E]">I am interested in...</option>
              <option value="retirement" className="bg-[#2F4F3E]">Retirement Home</option>
              <option value="vacation_home" className="bg-[#2F4F3E]">Vacation Property</option>
              <option value="investment" className="bg-[#2F4F3E]">Investment</option>
              <option value="relocation" className="bg-[#2F4F3E]">Permanent Relocation</option>
            </select>
            {errors.interest_type && <p className={errorClass}>{errors.interest_type.message}</p>}
          </div>
          <div>
            <textarea
              {...register('message')}
              placeholder="Any questions? (optional)"
              rows={3}
              className="w-full px-0 py-4 border-b border-white/20 bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-[#B8924A] transition-all text-sm resize-none"
            />
          </div>
          {error && <p className={errorClass}>{error}</p>}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B8924A] text-white py-5 text-sm tracking-widest uppercase hover:bg-[#D4A96A] transition-all duration-300 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Request Property Information'}
            </button>
          </div>
          <p className="text-center text-xs text-white/30">No spam. No pressure. We will reach out personally within 24 hours.</p>
        </form>
      </div>

      <style jsx global>{`
        .phone-input-dark { display: flex; align-items: center; gap: 8px; padding: 16px 0; }
        .phone-input-dark .PhoneInputCountrySelect { background: transparent; border: none; color: white; font-size: 14px; cursor: pointer; outline: none; }
        .phone-input-dark .PhoneInputCountrySelect option { background-color: #2F4F3E; color: white; }
        .phone-input-dark .PhoneInputInput { background: transparent; border: none; color: white; font-size: 14px; outline: none; width: 100%; }
        .phone-input-dark .PhoneInputInput::placeholder { color: rgba(255,255,255,0.3); }
        .phone-input-dark .PhoneInputCountrySelectArrow { color: rgba(255,255,255,0.4); }
      `}</style>
    </section>
  )
}