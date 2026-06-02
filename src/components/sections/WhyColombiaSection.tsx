const reasons = [
  { num: '01', title: 'Safe Property Rights', desc: 'Foreigners can legally own property in Colombia with the same rights as citizens. No restrictions.' },
  { num: '02', title: 'Perfect Climate', desc: 'Valle del Cauca enjoys warm, stable temperatures year-round. No seasons. No extremes.' },
  { num: '03', title: 'Cost of Living', desc: 'Live exceptionally well for a fraction of what it costs in the US or Europe.' },
  { num: '04', title: 'Warm Hospitality', desc: 'Colombians are known worldwide for their warmth and genuine welcome of foreigners.' },
  { num: '05', title: 'Easy Access', desc: 'Cali Airport connects directly to Miami, Bogotá, and major international hubs.' },
  { num: '06', title: 'Growing Interest', desc: 'Thousands of Americans and Europeans are already discovering Colombia as their forever home.' },
]

export default function WhyColombiaSection() {
  return (
    <section className="py-32 px-6 bg-[#2F4F3E]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">Why Colombia</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            A Country Ready<br />for Your Next Chapter
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Colombia has transformed. The people who have made the move never looked back.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {reasons.map((r, i) => (
            <div key={i} className="bg-[#2F4F3E] p-10 hover:bg-[#3a6050] transition-colors duration-300">
              <span className="text-[#B8924A] font-serif text-3xl">{r.num}</span>
              <h3 className="font-serif text-xl text-white mt-4 mb-3">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}