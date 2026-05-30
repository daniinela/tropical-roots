'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input'
import { parsePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(6, 'Phone number is required'),
  timeline: z.string().min(1, 'Please select an option'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
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
      const whatsapp = data.phone

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          country,
          whatsapp,
          timeline: data.timeline,
          message: data.message,
        }),
      })
      if (res.ok) {
        router.push('/thank-you')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (e) {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:block md:w-1/2 relative">
        <Image src="/images/hero.jpg" alt="Colombia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#2D3B2A]/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-16">
          <p className="font-serif text-4xl text-white mb-4 leading-tight">
            Your new chapter<br />begins here.
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Fill out the form and we will send you everything you need to know about living in Colombia.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 bg-[#FAF7F2]">
        <a href="/" className="text-[#B8924A] text-xs tracking-widest uppercase mb-12 hover:text-[#2D3B2A] transition-colors">
          Back to Tropical Roots
        </a>

        <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-4">Get Started</p>
        <h1 className="font-serif text-4xl text-[#2D3B2A] mb-2">Where Do You See Yourself?</h1>
        <p className="text-[#4A5E45] text-sm mb-10">We will send you our free Colombia Living Guide right away.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('name')}
              placeholder="Your full name"
              className="w-full px-5 py-4 border-b border-[#E8DFD0] bg-transparent text-[#2D3B2A] placeholder-[#4A5E45]/40 focus:outline-none focus:border-[#B8924A] transition-all"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register('email')}
              placeholder="Your email"
              type="email"
              className="w-full px-5 py-4 border-b border-[#E8DFD0] bg-transparent text-[#2D3B2A] placeholder-[#4A5E45]/40 focus:outline-none focus:border-[#B8924A] transition-all"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="border-b border-[#E8DFD0] pb-1">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  international
                  defaultCountry="US"
                  placeholder="Your WhatsApp number"
                  className="phone-input"
                />
              )}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <select
              {...register('timeline')}
              className="w-full px-5 py-4 border-b border-[#E8DFD0] bg-transparent text-[#2D3B2A] focus:outline-none focus:border-[#B8924A] transition-all"
            >
              <option value="">What is your timeline for Colombia?</option>
              <option value="exploring">Just exploring ideas</option>
              <option value="12months">Within the next 12 months</option>
              <option value="6months">Within the next 3-6 months</option>
              <option value="now">I am ready to take action now</option>
            </select>
            {errors.timeline && <p className="text-red-400 text-xs mt-1">{errors.timeline.message}</p>}
          </div>

          <div>
            <textarea
              {...register('message')}
              placeholder="What does your ideal life in Colombia look like? (optional)"
              rows={3}
              className="w-full px-5 py-4 border-b border-[#E8DFD0] bg-transparent text-[#2D3B2A] placeholder-[#4A5E45]/40 focus:outline-none focus:border-[#B8924A] transition-all resize-none"
            />
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D3B2A] text-white py-4 text-sm tracking-widest uppercase hover:bg-[#B8924A] transition-all duration-300 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Me the Free Guide'}
            </button>
          </div>
          <p className="text-center text-xs text-[#4A5E45]/50 pt-2">
            No spam. No pressure. Just real information.
          </p>
        </form>
      </div>

      <style jsx global>{`
        .phone-input {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 20px;
        }
        .phone-input .PhoneInputCountrySelect {
          background: transparent;
          border: none;
          color: #2D3B2A;
          font-size: 14px;
          cursor: pointer;
          outline: none;
        }
        .phone-input .PhoneInputInput {
          background: transparent;
          border: none;
          color: #2D3B2A;
          font-size: 14px;
          outline: none;
          width: 100%;
        }
        .phone-input .PhoneInputInput::placeholder {
          color: rgba(74, 94, 69, 0.4);
        }
      `}</style>
    </div>
  )
}