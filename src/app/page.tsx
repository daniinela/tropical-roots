import HeroSection from '@/components/sections/HeroSection'
import WhyColombiaSection from '@/components/sections/WhyColombiaSection'
import LifestyleSection from '@/components/sections/LifestyleSection'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyColombiaSection />
      <LifestyleSection />
      <Footer />
    </main>
  )
}
