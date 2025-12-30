export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img src="/professional-user-avatar-headshot.jpg" alt="Testimonial user" className="w-20 h-20 rounded-full mx-auto" />
        </div>

        <blockquote className="mb-6">
          <p className="text-xl md:text-2xl font-medium text-balance">
            "The ECHOgrade Group team provided exceptional support in helping us reach our sustainability objectives. Their
            guidance, professionalism, and innovative approach made a significant difference to our climate strategy and
            partner engagement."
          </p>
        </blockquote>

        <div className="text-muted-foreground">
          <p className="font-semibold">Sarah Johnson</p>
          <p className="text-sm">Head of Sustainability, Global Corp</p>
        </div>
      </div>
    </section>
  )
}
