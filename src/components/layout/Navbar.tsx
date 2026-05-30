'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAF7F2] shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Image src="/logo.png" alt="Tropical Roots" width={180} height={90} className="object-contain" />
        <a href="/contact" className="text-sm border border-[#B8924A] text-[#B8924A] px-5 py-2 rounded-full hover:bg-[#B8924A] hover:text-white transition-all duration-300">
          Get the Guide
        </a>
      </div>
    </nav>
  )
}