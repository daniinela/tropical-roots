'use client'
import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Eternal Spring',
    desc: 'Medellín averages 72°F year-round. No winters. No heating bills. Just perfect weather, every day.',
  },
  {
    title: 'Half the Cost',
    desc: 'Live a premium lifestyle for $1,500–$2,500/month. Your dollar goes twice as far here.',
  },
  {
    title: 'Nature Everywhere',
    desc: 'Coffee mountains, Caribbean beaches, and lush rainforests — all within a few hours.',
  },
  {
    title: 'Thriving Expat Community',
    desc: 'Thousands of Americans and Europeans already call Colombia home. You are not alone.',
  },
  {
    title: 'Easy to Reach',
    desc: '3 hours from Miami. Direct flights from NYC, Madrid, and Amsterdam.',
  },
  {
    title: 'Welcoming Visa Options',
    desc: 'Digital nomad visa, pensionado visa, and investor residency — all designed for you.',
  },
]

export default function WhyColombiaSection() {
  return (
    <section id="why" className="py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">Why Colombia</p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#2D3B2A] mb-6">
            The World's Best Kept Secret
          </h2>
          <p className="text-[#4A5E45] text-lg max-w-2xl mx-auto leading-relaxed">
            Colombia has transformed. What you have heard does not match what is here today — 
            and the people who have made the move never looked back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8DFD0]">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#FAF7F2] p-10 hover:bg-white transition-colors duration-300"
            >
              <span className="text-[#B8924A] font-serif text-4xl font-light">0{i + 1}</span>
              <h3 className="font-serif text-xl text-[#2D3B2A] mt-4 mb-3">{r.title}</h3>
              <p className="text-[#4A5E45] text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}