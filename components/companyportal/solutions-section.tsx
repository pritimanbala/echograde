export function SolutionsSection() {
  const solutions = [
    {
      id: 1,
      title: "Climate Equity",
      description: "Just and inclusive climate action",
      query: "forest trees environmental conservation climate action",
    },
    {
      id: 2,
      title: "Plan Your Climate",
      description: "Strategic environmental planning",
      query: "storm sky weather climate patterns nature",
    },
    {
      id: 3,
      title: "Global Certification",
      description: "International sustainability standards",
      query: "global network connections sustainable business",
    },
    {
      id: 4,
      title: "Secure Baseline",
      description: "Establish baseline metrics",
      query: "measurement tools data analysis environmental metrics",
    },
    {
      id: 5,
      title: "Ensure Biodiversity",
      description: "Protect ecosystem richness",
      query: "biodiversity wildlife plants animals nature",
    },
    {
      id: 6,
      title: "Build Sustainable",
      description: "Create lasting environmental benefit",
      query: "sustainable building green architecture construction",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Tailor-Made
          <br />
          Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {solutions.map((solution) => (
            <div key={solution.id} className="relative h-72 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={`/.jpg?height=400&width=400&query=${solution.query}`}
                alt={solution.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-1">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
