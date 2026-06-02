'use client'
import { useState, useEffect, useCallback } from 'react'

const images = [
  { src: '/images/exterior-1.jpg', label: 'Exterior' },
  { src: '/images/exterior-2.jpg', label: 'Exterior' },
  { src: '/images/exterior-3.jpg', label: 'Exterior' },
  { src: '/images/interior-1.jpg', label: 'Interior' },
  { src: '/images/interior-2.jpg', label: 'Interior' },
  { src: '/images/nature-1.jpg', label: 'Nature' },
  { src: '/images/nature-2.jpg', label: 'Nature' },
  { src: '/images/land-1.jpg', label: 'Land' },
]

export default function GallerySection() {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [])
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [prev, next])

  return (
    <section className="py-32 bg-[#1a2418]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">Gallery</p>
          <h2 className="font-serif text-5xl text-white">See the Estate</h2>
        </div>

        {/* Image + arrows row */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 bg-white/10 text-white flex items-center justify-center hover:bg-[#B8924A] transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="flex-1 relative overflow-hidden" style={{ height: 480 }}>
            {images.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="absolute bottom-4 left-4 pointer-events-none">
              <p className="text-white/60 text-xs tracking-widest uppercase">{images[current].label}</p>
              <p className="text-white/40 text-xs mt-1">{current + 1} / {images.length}</p>
            </div>
            <button
              onClick={() => setLightbox(true)}
              className="absolute bottom-4 right-4 text-white/50 text-xs tracking-widest uppercase border border-white/20 px-3 py-2 hover:bg-white/10 transition-all"
            >
              Expand
            </button>
          </div>

          <button
            onClick={next}
            className="shrink-0 w-10 h-10 bg-white/10 text-white flex items-center justify-center hover:bg-[#B8924A] transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-4 justify-center flex-wrap">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className="cursor-pointer overflow-hidden shrink-0 transition-all duration-300"
              style={{
                width: 72,
                height: 50,
                opacity: i === current ? 1 : 0.45,
                outline: i === current ? '2px solid #B8924A' : 'none',
              }}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block border border-[#B8924A] text-[#B8924A] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#B8924A] hover:text-white transition-all duration-300"
          >
            Request Full Photo Package
          </a>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <img
            src={images[current].src}
            alt={images[current].label}
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
          />
          <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white flex items-center justify-center hover:bg-[#B8924A] transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white flex items-center justify-center hover:bg-[#B8924A] transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <button onClick={() => setLightbox(false)} className="absolute top-6 right-6 text-white/60 text-xs tracking-widest uppercase border border-white/20 px-4 py-2 hover:bg-white/10">
            Close
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="w-1.5 h-1.5 rounded-full transition-all" style={{ background: i === current ? '#B8924A' : 'rgba(255,255,255,0.3)' }} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}