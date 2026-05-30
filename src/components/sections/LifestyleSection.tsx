'use client'
import { motion } from 'framer-motion'

const places = [
  {
    title: 'Medellín',
    sub: 'City of Eternal Spring',
    desc: 'World-class restaurants, modern metro, mountain views, and a vibrant international community.',
    tag: 'Urban · Modern · Connected',
    temp: '72°F year-round',
  },
  {
    title: 'Cartagena',
    sub: 'Caribbean Pearl',
    desc: 'Colonial architecture, turquoise waters, and a social scene that never sleeps.',
    tag: 'Beach · Culture · Luxury',
    temp: 'Caribbean coast',
  },
  {
    title: 'Coffee Region',
    sub: 'Eje Cafetero',
    desc: 'Lush green mountains, fresh air, hacienda-style living, and the world\'s best coffee.',
    tag: 'Nature · Peaceful · Authentic',
    temp: 'Cool mountain air',
  },
]

export default function LifestyleSection() {
  return (
    <section className="py-32 px-6 bg-[#2F4F3E]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">The Lifestyle</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Imagine Your Mornings Here
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Three very different experiences. One extraordinary country.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-white/10 p-10 hover:border-[#B8924A]/40 transition-all duration-500"
            >
              <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-6">{place.tag}</p>
              <h3 className="font-serif text-3xl text-white mb-1">{place.title}</h3>
              <p className="text-[#B8924A]/70 text-sm mb-1">{place.sub}</p>
              <p className="text-white/30 text-xs mb-6">{place.temp}</p>
              <div className="w-8 h-px bg-[#B8924A]/40 mb-6" />
              <p className="text-white/60 text-sm leading-relaxed">{place.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center border-t border-white/10 pt-20 mb-16"
        >
          <p className="font-serif text-2xl md:text-4xl text-white/80 italic max-w-3xl mx-auto leading-relaxed mb-6">
            "The best decision I ever made was trading my rent in Austin for a penthouse in Medellín."
          </p>
          <p className="text-[#B8924A] text-sm tracking-wide">— James R., Texas to Medellín, 2023</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/colombia"
            className="inline-block border border-[#B8924A] text-[#B8924A] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#B8924A] hover:text-white transition-all duration-300"
          >
            Explore Colombia in Depth
          </a>
        </motion.div>
      </div>
    </section>
  )
}