'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  country: z.string().min(2, 'Country is required'),
  whatsapp: z.string().min(6, 'WhatsApp is required'),
  timeline: z.string().min(1, 'Please select an option'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#B8924A] text-sm tracking-[0.3em] uppercase mb-4">Get Started</p>
          <h2 className="font-serif text-4xl text-[#2D3B2A] mb-4">
            Where Do You See Yourself?
          </h2>
          <p className="text-[#4A5E45]">
            Tell us about yourself and we will send you our free Colombia Living Guide.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-6">🌿</p>
            <h3 className="font-serif text-3xl text-[#2D3B2A] mb-4">Your guide is on its way.</h3>
            <p className="text-[#4A5E45] mb-8">Check your email in the next few minutes.</p>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              className="bg-[#2D3B2A] text-white px-8 py-4 rounded-full text-sm hover:bg-[#4A5E45] transition-all duration-300"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register('name')}
                placeholder="Your full name"
                className="w-full px-5 py-4 rounded-xl border border-[#E8DFD0] bg-white text-[#2D3B2A] focus:outline-none focus:border-[#B8924A] transition-all"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register('email')}
                placeholder="Your email"
                type="email"
                className="w-full px-5 py-4 rounded-xl border border-[#E8DFD0] bg-white text-[#2D3B2A] focus:outline-none focus:border-[#B8924A] transition-all"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <input
                {...register('country')}
                placeholder="Your country"
                className="w-full px-5 py-4 rounded-xl border border-[#E8DFD0] bg-white text-[#2D3B2A] focus:outline-none focus:border-[#B8924A] transition-all"
              />
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
            </div>
            <div>
              <input
                {...register('whatsapp')}
                placeholder="WhatsApp number with country code"
                className="w-full px-5 py-4 rounded-xl border border-[#E8DFD0] bg-white text-[#2D3B2A] focus:outline-none focus:border-[#B8924A] transition-all"
              />
              {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>}
            </div>
            <div>
              <select
                {...register('timeline')}
                className="w-full px-5 py-4 rounded-xl border border-[#E8DFD0] bg-white text-[#2D3B2A] focus:outline-none focus:border-[#B8924A] transition-all"
              >
                <option value="">What is your timeline for Colombia?</option>
                <option value="exploring">Just exploring ideas</option>
                <option value="12months">Within the next 12 months</option>
                <option value="6months">Within the next 3-6 months</option>
                <option value="now">I am ready to take action now</option>
              </select>
              {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>}
            </div>
            <div>
              <textarea
                {...register('message')}
                placeholder="What does your ideal life in Colombia look like? (optional)"
                rows={4}
                className="w-full px-5 py-4 rounded-xl border border-[#E8DFD0] bg-white text-[#2D3B2A] focus:outline-none focus:border-[#B8924A] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B8924A] text-white py-4 rounded-full text-sm tracking-wide hover:bg-[#D4A96A] transition-all duration-300 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Me the Free Guide'}
            </button>
            <p className="text-center text-xs text-[#4A5E45] opacity-60">
              No spam. No pressure. Just real information.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}