'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const videos = [
  {
    id: 'cM5BAXwKZw8',
    title: 'Retiring in Colombia 2025',
    desc: 'Visas, cost of living & best places to live',
    tag: 'Retirement',
  },
  {
    id: 'JDD3ZXpRn9U',
    title: 'Digital Nomad in Medellín',
    desc: 'Safety, cafes, coworking & everyday life',
    tag: 'Nomad Life',
  },
  {
    id: 'xcu0e_4ng7c',
    title: 'Colombia — Country of Diversity',
    desc: 'Cinematic journey through Cartagena, Medellín & the coffee region',
    tag: 'Cinematic',
  },
  {
    id: 'l6Q333JGvbs',
    title: 'Eje Cafetero Colombia',
    desc: 'Mountains, coffee farms & slow tropical living',
    tag: 'Coffee Region',
  },
]

const stats = [
  { number: '$1,500', label: 'avg/month', sub: 'Comfortable lifestyle for a single person' },
  { number: '72°F', label: 'year-round', sub: 'Medellín — City of Eternal Spring' },
  { number: '3hrs', label: 'from Miami', sub: 'Direct flights from NYC, Madrid & Amsterdam' },
  { number: '50K+', label: 'expats', sub: 'Americans & Europeans already living here' },
]

const regions = [
  {
    name: 'Medellín',
    tag: 'Urban · Modern · Connected',
    temp: '72°F / 22°C year-round',
    rent: '$250–$500/mo',
    vibe: 'World-class restaurants, modern metro, mountain views. Top-ranked digital nomad city.',
    img: '/images/medellin.jpg',
  },
  {
    name: 'Cartagena',
    tag: 'Beach · Culture · Luxury',
    temp: '80–90°F / 27–32°C',
    rent: '$400–$800/mo',
    vibe: 'Colonial architecture, turquoise Caribbean waters, vibrant nightlife and culture.',
    img: '/images/cartagena.jpg',
  },
  {
    name: 'Coffee Region',
    tag: 'Nature · Peaceful · Authentic',
    temp: 'Cool mountain air',
    rent: '$200–$400/mo',
    vibe: 'Lush green mountains, hacienda living, fresh coffee and total peace of mind.',
    img: '/images/coffee.jpg',
  },
]

const visas = [
  {
    name: 'Retirement Visa',
    code: 'M-11 Pensionado',
    req: '~$1,000 USD/month pension income',
    benefit: 'Renewable residency + path to permanent after 5 years',
    for: 'Retirees',
  },
  {
    name: 'Digital Nomad Visa',
    code: 'Remote Worker',
    req: 'Proof of remote income',
    benefit: 'Live and work legally in Colombia',
    for: 'Freelancers & Remote Workers',
  },
  {
    name: 'Investor Visa',
    code: 'M-3 Investor',
    req: 'Investment in Colombian property or business',
    benefit: 'Residency through real estate investment',
    for: 'Investors & Buyers',
  },
]

const costs = [
  { item: 'Rent (1BR)', range: '$250 – $500' },
  { item: 'Healthcare', range: '$40 – $150' },
  { item: 'Transportation', range: '$20 – $50' },
  { item: 'Groceries', range: '$100 – $200' },
  { item: 'Dining out', range: '$150 – $300' },
  { item: 'Total comfortable', range: '$800 – $1,200' },
]

export default function ColombiaPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E8DFD0]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-serif text-xl text-[#2D3B2A]">Tropical Roots</a>
          <a href="/contact" className="text-sm border border-[#B8924A] text-[#B8924A] px-5 py-2 rounded-full hover:bg-[#B8924A] hover:text-white transition-all duration-300">
            Get the Guide
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 overflow-hidden">
        <Image src="/images/hero.jpg" alt="Colombia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-4"
          >
            Explore Colombia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-white leading-none"
          >
            Everything you need<br />to know.
          </motion.h1>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#2F4F3E] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#2F4F3E] p-8 text-center"
            >
              <p className="font-serif text-4xl text-white mb-1">{s.number}</p>
              <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-2">{s.label}</p>
              <p className="text-white/40 text-xs leading-relaxed">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Regions */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-4">The Regions</p>
            <h2 className="font-serif text-5xl text-[#2D3B2A]">Where will you live?</h2>
          </motion.div>

          <div className="space-y-6">
            {regions.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 border border-[#E8DFD0] overflow-hidden hover:border-[#B8924A]/40 transition-all duration-500"
              >
                <div className="relative h-64 md:h-80">
                  <Image src={r.img} alt={r.name} fill className="object-cover" />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-4">{r.tag}</p>
                  <h3 className="font-serif text-3xl text-[#2D3B2A] mb-6">{r.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-[#4A5E45]/50 text-xs uppercase tracking-wide mb-1">Climate</p>
                      <p className="text-[#2D3B2A] text-sm">{r.temp}</p>
                    </div>
                    <div>
                      <p className="text-[#4A5E45]/50 text-xs uppercase tracking-wide mb-1">Avg Rent</p>
                      <p className="text-[#2D3B2A] text-sm">{r.rent}</p>
                    </div>
                  </div>
                  <p className="text-[#4A5E45] text-sm leading-relaxed">{r.vibe}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of living */}
      <section className="py-24 px-6 bg-[#2F4F3E]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-4">Cost of Living</p>
            <h2 className="font-serif text-5xl text-white mb-6">Real numbers.<br />No surprises.</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              These are real monthly averages for a single person living comfortably in Medellín, Colombia.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-px"
          >
            {costs.map((c, i) => (
              <div key={i} className={`flex justify-between py-4 px-6 ${i === costs.length - 1 ? 'bg-[#B8924A]/20 border border-[#B8924A]/30' : 'bg-white/5'}`}>
                <p className={`text-sm ${i === costs.length - 1 ? 'text-white font-medium' : 'text-white/60'}`}>{c.item}</p>
                <p className={`text-sm font-serif ${i === costs.length - 1 ? 'text-[#B8924A]' : 'text-white'}`}>{c.range}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-4">See It Yourself</p>
            <h2 className="font-serif text-5xl text-[#2D3B2A]">Real life in Colombia.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-[#E8DFD0] overflow-hidden hover:border-[#B8924A]/40 transition-all duration-300"
              >
                {activeVideo === v.id ? (
                  <iframe
                    width="100%"
                    height="280"
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  />
                ) : (
                  <div
                    className="relative h-52 bg-[#2D3B2A] cursor-pointer group"
                    onClick={() => setActiveVideo(v.id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-[#B8924A]/80 transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-2">{v.tag}</p>
                  <h3 className="font-serif text-lg text-[#2D3B2A] mb-1">{v.title}</h3>
                  <p className="text-[#4A5E45] text-sm">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visas */}
      <section className="py-24 px-6 bg-[#FAF7F2] border-t border-[#E8DFD0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-4">Visas</p>
            <h2 className="font-serif text-5xl text-[#2D3B2A]">Your path to residency.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8DFD0]">
            {visas.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAF7F2] p-10 hover:bg-white transition-colors duration-300"
              >
                <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-6">{v.for}</p>
                <h3 className="font-serif text-2xl text-[#2D3B2A] mb-1">{v.name}</h3>
                <p className="text-[#4A5E45]/60 text-xs mb-6">{v.code}</p>
                <div className="w-8 h-px bg-[#B8924A]/40 mb-6" />
                <div className="space-y-3">
                  <div>
                    <p className="text-[#4A5E45]/50 text-xs uppercase tracking-wide mb-1">Requirement</p>
                    <p className="text-[#2D3B2A] text-sm">{v.req}</p>
                  </div>
                  <div>
                    <p className="text-[#4A5E45]/50 text-xs uppercase tracking-wide mb-1">Benefit</p>
                    <p className="text-[#2D3B2A] text-sm">{v.benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#2F4F3E] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">Ready?</p>
          <h2 className="font-serif text-5xl text-white mb-6">Start your journey today.</h2>
          <p className="text-white/50 mb-10">Get our free Colombia Living Guide and take the first step.</p>
          <a
            href="/contact"
            className="inline-block bg-[#B8924A] text-white px-12 py-4 text-sm tracking-widest uppercase hover:bg-[#D4A96A] transition-all duration-300"
          >
            Get the Free Guide
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3B2A] text-[#E8DFD0] py-10 px-6 text-center">
        <p className="font-serif text-xl mb-2">Tropical Roots</p>
        <p className="text-xs opacity-40">Live Slow. Live Free. Live Tropical.</p>
      </footer>
    </div>
  )
}