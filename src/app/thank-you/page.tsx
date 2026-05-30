import Image from 'next/image'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] px-6 text-center">
      <div className="max-w-lg mx-auto">
        <div className="w-16 h-px bg-[#B8924A] mx-auto mb-12" />
        <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">Thank You</p>
        <h1 className="font-serif text-5xl text-[#2D3B2A] mb-6 leading-tight">
          Your guide is on its way.
        </h1>
        <p className="text-[#4A5E45] text-lg mb-4 leading-relaxed">
          Check your email in the next few minutes. We have sent you everything you need to know about living in Colombia.
        </p>
        <p className="text-[#4A5E45]/60 text-sm mb-16">
          We will be in touch within 24 hours to answer any questions personally.
        </p>
        <div className="w-16 h-px bg-[#B8924A]/30 mx-auto mb-16" />
        <a
          href="/"
          className="text-xs tracking-widest uppercase text-[#B8924A] hover:text-[#2D3B2A] transition-colors"
        >
          Back to Tropical Roots
        </a>
      </div>
    </div>
  )
}