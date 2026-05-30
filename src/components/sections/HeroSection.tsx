'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Colombia"
        fill
        className="object-cover"
        priority
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#D4A96A] text-xs tracking-[0.4em] uppercase mb-8"
        >
          Colombia · Tropical Living
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl text-white leading-none mb-8"
        >
          Your tropical<br />life starts here.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Discover peaceful living in Colombia — where nature, culture, and freedom meet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="bg-[#B8924A] text-white px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#D4A96A] transition-all duration-300"
          >
            Get the Free Guide
          </a>
          <a
            href="#why"
            className="border border-white/50 text-white px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Explore Colombia
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}