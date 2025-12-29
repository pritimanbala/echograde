import { Header } from "@/components/companyportal/header"
import { Hero } from "@/components/companyportal/hero"
import { GallerySection } from "@/components/companyportal/gallery-section"
import { MethodologySection } from "@/components/companyportal/methodology-section"
import { SolutionsSection } from "@/components/companyportal/solutions-section"
import { ImpactSection } from "@/components/companyportal/impact-section"
import { TestimonialSection } from "@/components/companyportal/testimonial-section"
import { CTASection } from "@/components/companyportal/cta-section"
import { Footer } from "@/components/companyportal/footer"

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
