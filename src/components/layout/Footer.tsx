export default function Footer() {
  return (
    <footer className="bg-[#1a2418] text-[#E8DFD0] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-2xl text-white mb-3">Tropical Roots</p>
            <p className="text-white/40 text-xs leading-relaxed">
              Connecting international buyers with extraordinary Colombian properties.
            </p>
          </div>
          <div>
            <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-4">The Property</p>
            <p className="text-white/60 text-sm">Hacienda San Antonio</p>
            <p className="text-white/40 text-xs mt-1">Ginebra, Valle del Cauca, Colombia</p>
          </div>
          <div>
            <p className="text-[#B8924A] text-xs tracking-widest uppercase mb-4">Contact</p>
            <a
              href="https://wa.me/573152693434"
              target="_blank"
              className="text-white/60 text-sm hover:text-[#B8924A] transition-colors"
            >
              WhatsApp: +57 315 269 3434
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© 2025 Tropical Roots Colombia. All rights reserved.</p>
          <p className="text-[#B8924A] text-xs tracking-widest uppercase">Live Slow. Live Free. Live Tropical.</p>
        </div>
      </div>
    </footer>
  )
}