import Image from 'next/image'

const specs = [
  { label: 'Age', value: '100 Years' },
  { label: 'Bedrooms', value: '6' },
  { label: 'Bathrooms', value: '2' },
  { label: 'Living Areas', value: '3 Corridors' },
  { label: 'Water', value: 'River & Acuavalle' },
  { label: 'Altitude', value: '1,136 MASL' },
  { label: 'Additional', value: 'Barn, Pastures, Orchard' },
  { label: 'Condition', value: 'Good — Renovated' },
]

export default function EstateSection() {
  return (
    <section id="estate" className="py-32 px-6 bg-[#2F4F3E]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">The Estate</p>
            <h2 className="font-serif text-5xl text-white mb-6">
              Hacienda San Antonio
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Built over 100 years ago, San Antonio is not just a property — it is a living piece of Colombian history.
              Three corridors, fruit trees, open pastures, and a river running through the land.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              This is a home that has sheltered generations. It is now ready to welcome a new one.
            </p>
            <a
              href="#contact"
              className="inline-block border border-[#B8924A] text-[#B8924A] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#B8924A] hover:text-white transition-all duration-300"
            >
              Request Full Details
            </a>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/exterior-2.jpg"
              alt="Hacienda San Antonio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {specs.map((s, i) => (
            <div key={i} className="bg-[#2F4F3E] p-8 hover:bg-[#3a6050] transition-colors">
              <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-2">{s.label}</p>
              <p className="font-serif text-xl text-white">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}