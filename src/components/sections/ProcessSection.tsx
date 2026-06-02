const steps = [
  { num: '01', title: 'Request Information', desc: 'Fill out the form below. Tell us a little about yourself and your interest.' },
  { num: '02', title: 'Speak With Our Team', desc: 'We will reach out within 24 hours via WhatsApp or email for a personal conversation.' },
  { num: '03', title: 'Receive Property Details', desc: 'We send you the full property package — photos, details, legal information.' },
  { num: '04', title: 'Schedule a Visit', desc: 'Come see San Antonio in person. We handle the logistics.' },
  { num: '05', title: 'Begin the Process', desc: 'Our team guides you through every step of the purchase process in Colombia.' },
]

export default function ProcessSection() {
  return (
    <section className="py-32 px-6 bg-[#FAF7F2] border-t border-[#E8DFD0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#B8924A] text-xs tracking-[0.4em] uppercase mb-6">How It Works</p>
          <h2 className="font-serif text-5xl text-[#2D3B2A] mb-6">Simple. Personal. Transparent.</h2>
          <p className="text-[#4A5E45] text-lg max-w-xl mx-auto">
            We guide you through every step. No pressure. No surprises.
          </p>
        </div>
        <div className="space-y-px bg-[#E8DFD0]">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#FAF7F2] p-10 flex items-start gap-10 hover:bg-white transition-colors duration-300">
              <span className="font-serif text-4xl text-[#B8924A] shrink-0">{s.num}</span>
              <div>
                <h3 className="font-serif text-2xl text-[#2D3B2A] mb-2">{s.title}</h3>
                <p className="text-[#4A5E45] text-sm leading-relaxed max-w-xl">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}