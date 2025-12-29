import { Leaf, Target, Zap } from "lucide-react"

export function MethodologySection() {
  const features = [
    {
      icon: Leaf,
      title: "Science-Based",
      description: "Rooted in peer-reviewed environmental research and industry best practices",
    },
    {
      icon: Target,
      title: "Outcome-Focused",
      description: "Measurable impact metrics that demonstrate real environmental progress",
    },
    {
      icon: Zap,
      title: "Implementation Ready",
      description: "Practical frameworks that integrate seamlessly with your operations",
    },
  ]

  return (
    <section className="py-16 md:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Science-Based Methodology
          <br />
          by Green Initiative
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Our approach combines cutting-edge environmental science with practical implementation to deliver measurable
          results.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                    <Icon size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
