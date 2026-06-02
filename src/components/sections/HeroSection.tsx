'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#D4A96A] text-xs tracking-[0.5em] uppercase mb-8">
          Ginebra · Valle del Cauca · Colombia
        </p>
        <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-8">
          A Slower Life<br />Begins Here.
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          100 years of history. Surrounded by nature. Yours to own.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#B8924A] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#D4A96A] transition-all duration-300"
          >
            Request Property Information
          </a>
          <a
            href="#estate"
            className="border border-white/50 text-white px-10 py-4 text-sm tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Discover the Estate
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}