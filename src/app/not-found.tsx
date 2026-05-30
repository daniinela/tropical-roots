import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] text-center px-6">
      <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">404</p>
      <h1 className="font-serif text-5xl text-[#2D3B2A] mb-6">Page not found</h1>
      <Link href="/" className="text-xs tracking-widest uppercase text-[#B8924A] hover:text-[#2D3B2A] transition-colors">
        Back to Tropical Roots
      </Link>
    </div>
  )
}