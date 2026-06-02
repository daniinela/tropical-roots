import Image from 'next/image'

const cards = [
  {
    title: 'Pure Nature',
    desc: 'Wake up to birdsong, river sounds, and mountain views. No noise. No rush.',
    img: '/images/nature-1.jpg',
  },
  {
    title: 'Total Privacy',
    desc: 'Your own land. Your own rhythm. A life lived entirely on your terms.',
    img: '/images/land-1.jpg',
  },
  {
    title: 'Eternal Spring',
    desc: 'At 1,136 meters above sea level, the climate is perfect every single day.',
    img: '/images/exterior-1.jpg',
  },
]

export default function LifestyleSection() {
  return (
    <section className="py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">The Lifestyle</p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#2D3B2A]">
            Why People Fall in Love<br />With This Life
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="group">
              <div className="relative h-80 overflow-hidden mb-6">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#2D3B2A] mb-3">{c.title}</h3>
              <p className="text-[#4A5E45] text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}