import ComingSoonFeatures from '@/components/ComingSoonFeatures'
import FAQs from '@/components/FAQs'
import FeatureSection from '@/components/FeatureSection'
import FeatureShowcase from '@/components/FeatureShowcase'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <FeatureShowcase />
      <ComingSoonFeatures />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  )
}

export default HomePage