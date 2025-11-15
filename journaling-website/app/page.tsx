import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  )
}
