import { HeroSection } from './components/home/HeroSection'
import { FeaturesSection } from './components/home/FeaturesSection'
import { ContactForm } from './components/contact/ContactForm'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ContactForm />
    </div>
  )
}