import ComingSoonFeatures from '@/components/ComingSoonFeatures'
import FAQs from '@/components/FAQs'
import FeatureSection from '@/components/FeatureSection'
import FeatureShowcase from '@/components/FeatureShowcase'
import HeroSection from '@/components/HeroSection'
import Testimonials from '@/components/Testimonials'

const HomePage = () => {
  return (
    <div>
      Navbar
      <HeroSection />
      <FeatureSection />
      <FeatureShowcase />
      <ComingSoonFeatures />
      <Testimonials />
      <FAQs />
    </div>
  )
}

export default HomePage