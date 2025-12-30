export function ImpactSection() {
  const industries = [
    ["Cement", "Petroleum", "Aluminium"],
    // ["Agriculture", "Veterinary", "Ecotourism"],
    // ["Tourism", "Textiles", "Mobility"],
    // ["Agriculture", "Education", "Fishing"],
    // ["Resorts", "Hotels", "Beverages"],
  ]

  return (
    <section className="py-16 md:py-24" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-2 text-balance">Advanced Technologies</h2>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-accent text-balance">Unlimited Impact.</h2>
        <p className="text-muted-foreground max-w-3xl mb-12">
          Our network has the potential to span across industries and continents, driving transformative change in environmental
          sustainability. From corporate partners to governmental bodies, we're enabling organizations worldwide to meet
          their climate commitments.
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          {industries.map((column, idx) => (
            <div key={idx} className="space-y-6">
              {column.map((industry, i) => (
                <div key={i} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  {industry}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
