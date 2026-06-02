import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import LifestyleSection from '@/components/sections/LifestyleSection'
import WhyColombiaSection from '@/components/sections/WhyColombiaSection'
import WhyGinebraSection from '@/components/sections/WhyGinebraSection'
import EstateSection from '@/components/sections/EstateSection'
import GallerySection from '@/components/sections/GallerySection'
import ProcessSection from '@/components/sections/ProcessSection'
import LeadFormSection from '@/components/sections/LeadFormSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LifestyleSection />
      <WhyColombiaSection />
      <WhyGinebraSection />
      <EstateSection />
      <GallerySection />
      <ProcessSection />
      <LeadFormSection />
      <Footer />
    </main>
  )
}
