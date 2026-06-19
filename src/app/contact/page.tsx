'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { leadSchema, type LeadFormData } from '@/lib/validations/lead'

export default function ContactPage() {
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
    <div className="min-h-screen flex">
      <div className="hidden md:block md:w-1/2 relative">
        <Image src="/images/nature-2.jpg" alt="Colombia" fill className="object-cover" sizes="50vw" priority />
        <div className="absolute inset-0 bg-[#2D3B2A]/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-16">
          <p className="font-serif text-4xl text-white mb-4 leading-tight">
            Your new chapter<br />begins here.
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Fill out the form and we will reach out personally within 24 hours.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 bg-[#FAF7F2]">
        <a href="/" className="text-[#B8924A] text-xs tracking-widest uppercase mb-12 hover:text-[#2D3B2A] transition-colors">
          Back to Tropical Roots
        </a>
        <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-4">Get Started</p>
        <h1 className="font-serif text-4xl text-[#2D3B2A] mb-2">Request Information</h1>
        <p className="text-[#4A5E45] text-sm mb-10">Our team will reach out within 24 hours.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              {...register('name')}
              placeholder="Your full name"
              className="w-full px-0 py-4 border-b border-[#E8DFD0] bg-transparent text-[#2D3B2A] placeholder-[#4A5E45]/40 focus:outline-none focus:border-[#B8924A] transition-all text-sm"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Your email"
              className="w-full px-0 py-4 border-b border-[#E8DFD0] bg-transparent text-[#2D3B2A] placeholder-[#4A5E45]/40 focus:outline-none focus:border-[#B8924A] transition-all text-sm"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="border-b border-[#E8DFD0] focus-within:border-[#B8924A] transition-all">
            <Controller
              name="whatsapp"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  international
                  defaultCountry="US"
                  placeholder="Your WhatsApp number"
                  className="phone-input-light"
                />
              )}
            />
            {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp.message}</p>}
          </div>
          <div>
            <select
              {...register('interest_type')}
              className="w-full px-0 py-4 border-b border-[#E8DFD0] bg-transparent text-[#2D3B2A] focus:outline-none focus:border-[#B8924A] transition-all text-sm"
            >
              <option value="">I am interested in...</option>
              <option value="retirement">Retirement Home</option>
              <option value="vacation_home">Vacation Property</option>
              <option value="investment">Investment</option>
              <option value="relocation">Permanent Relocation</option>
            </select>
            {errors.interest_type && <p className="text-red-400 text-xs mt-1">{errors.interest_type.message}</p>}
          </div>
          <div>
            <textarea
              {...register('message')}
              placeholder="Any questions? (optional)"
              rows={3}
              className="w-full px-0 py-4 border-b border-[#E8DFD0] bg-transparent text-[#2D3B2A] placeholder-[#4A5E45]/40 focus:outline-none focus:border-[#B8924A] transition-all text-sm resize-none"
            />
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D3B2A] text-white py-4 text-sm tracking-widest uppercase hover:bg-[#B8924A] transition-all duration-300 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Request Information'}
            </button>
          </div>
          <p className="text-center text-xs text-[#4A5E45]/50">No spam. No pressure. We will reach out personally.</p>
        </form>
      </div>

      <style jsx global>{`
        .phone-input-light { display: flex; align-items: center; gap: 8px; padding: 16px 0; }
        .phone-input-light .PhoneInputCountrySelect { background: transparent; border: none; color: #2D3B2A; font-size: 14px; cursor: pointer; outline: none; }
        .phone-input-light .PhoneInputCountrySelect option { background: white; color: #2D3B2A; }
        .phone-input-light .PhoneInputInput { background: transparent; border: none; color: #2D3B2A; font-size: 14px; outline: none; width: 100%; }
        .phone-input-light .PhoneInputInput::placeholder { color: rgba(74,94,69,0.4); }
      `}</style>
    </div>
  )
}