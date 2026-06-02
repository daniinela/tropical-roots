import Image from 'next/image'

const highlights = [
  { title: '45 min', sub: 'from Cali', desc: 'Close to the city but far from the noise.' },
  { title: '1,136m', sub: 'above sea level', desc: 'Perfect altitude for year-round comfort.' },
  { title: 'Rio Ginebra', sub: 'on the property', desc: 'Fresh water running through your land.' },
  { title: 'Coffee Country', sub: 'nearby', desc: 'Surrounded by Colombia\'s coffee culture.' },
]

const experiences = [
  { title: 'Nature Escapes', desc: 'Hiking trails, waterfalls, and untouched landscapes minutes away.' },
  { title: 'Coffee Experiences', desc: 'Visit nearby farms and taste Colombia\'s finest coffee at the source.' },
  { title: 'Horseback Riding', desc: 'Explore the countryside the traditional Colombian way.' },
  { title: 'Local Gastronomy', desc: 'Traditional Valle del Cauca cuisine — fresh, rich, and unforgettable.' },
  { title: 'Rural Living', desc: 'Slow mornings, open land, and a community that welcomes you.' },
  { title: 'Family Gatherings', desc: 'Space for everyone. A home built for shared memories.' },
]

export default function WhyGinebraSection() {
  return (
    <section className="py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">The Region</p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#2D3B2A] mb-6">
            Ginebra, Valle del Cauca
          </h2>
          <p className="text-[#4A5E45] text-lg max-w-2xl leading-relaxed">
            A hidden valley between the Andes mountains. Close enough to Cali for convenience.
            Far enough from everything else for peace.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8DFD0] mb-24">
          {highlights.map((h, i) => (
            <div key={i} className="bg-[#FAF7F2] p-8 text-center hover:bg-white transition-colors">
              <p className="font-serif text-4xl text-[#2D3B2A] mb-1">{h.title}</p>
              <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-3">{h.sub}</p>
              <p className="text-[#4A5E45] text-xs leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mb-24">
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">Location</p>
          <h3 className="font-serif text-4xl text-[#2D3B2A] mb-10">Find Us</h3>
          <div className="relative w-full h-96 overflow-hidden border border-[#E8DFD0]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.234!2d-76.2677976!3d3.7359027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39f1b77f070dff%3A0x5998909071f973ce!2sFINCA%20SAN%20ANTONIO!5e0!3m2!1sen!2sco!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'saturate(0.8) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white border border-[#E8DFD0] p-6">
              <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-2">Address</p>
              <p className="text-[#2D3B2A] text-sm">Ginebra, Valle del Cauca, Colombia</p>
            </div>
            <div className="bg-white border border-[#E8DFD0] p-6">
              <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-2">Nearest City</p>
              <p className="text-[#2D3B2A] text-sm">Cali — 45 minutes by car</p>
            </div>
            <div className="bg-white border border-[#E8DFD0] p-6">
              <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-2">Nearest Airport</p>
              <p className="text-[#2D3B2A] text-sm">Alfonso Bonilla Aragón — 1 hour</p>
            </div>
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-12">
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">Nearby Experiences</p>
          <h3 className="font-serif text-4xl text-[#2D3B2A] mb-12">
            You are not just buying a property.<br />You are buying a lifestyle.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8DFD0]">
          {experiences.map((e, i) => (
            <div key={i} className="bg-[#FAF7F2] p-10 hover:bg-white transition-colors duration-300">
              <span className="text-[#B8924A] font-serif text-3xl">0{i + 1}</span>
              <h4 className="font-serif text-xl text-[#2D3B2A] mt-4 mb-3">{e.title}</h4>
              <p className="text-[#4A5E45] text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}