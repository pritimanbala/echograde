import { Header } from "@/components/homepage/header"
import { Hero } from "@/components/homepage/hero"
import { GallerySection } from "@/components/homepage/gallery-section"
import { MethodologySection } from "@/components/homepage/methodology-section"
import { SolutionsSection } from "@/components/homepage/solutions-section"
import { ImpactSection } from "@/components/homepage/impact-section"
import { TestimonialSection } from "@/components/homepage/testimonial-section"
import { CTASection } from "@/components/homepage/cta-section"
import { Footer } from "@/components/homepage/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      {/* <GallerySection /> */}
      <MethodologySection />
      <SolutionsSection />
      <ImpactSection />
      {/* <TestimonialSection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
