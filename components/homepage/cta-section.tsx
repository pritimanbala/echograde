export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("/person-in-nature-with-green-plants-environmental-w.jpg")',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Driving Your Green
          <br />
          Transformation
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Partner with us to transform your organization's environmental impact. Let's build a sustainable future
          together.
        </p>
        <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
          Start Your Journey
        </button>
      </div>
    </section>
  )
}
