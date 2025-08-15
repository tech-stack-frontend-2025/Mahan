import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LiveEventBanner } from "@/components/live-event-banner"
import { FeaturesGrid } from "@/components/features-grid"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LiveEventBanner />
      <FeaturesGrid />
      <Footer />
    </main>
  )
}
